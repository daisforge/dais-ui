/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Замеры реальных ширин элементов контрл-блока из DOM.
 *
 * Зачем: модель компрессии (width-model.ts) должна знать, сколько места
 * занимает каждая кнопка и иконка. Лейблы у кнопок разной длины, поэтому
 * константами обойтись нельзя, меряем из DOM. Константы из пропсов
 * остаются фоллбеком до первого замера.
 *
 * Правила замеров:
 * - лейбл кнопки меряем только когда он реально виден, icon-only ширину
 *   только когда лейбл скрыт (текст убирается из DOM, а не через CSS,
 *   поэтому замер стабилен и анимаций нет)
 * - блок "Действия" (leftSideInner) меряем целиком, он не сжимается
 * - кастомные иконки меряем всегда, дивайдер добавляем константой
 * - все значения округляем вверх (Math.ceil), модель не должна
 *   недооценивать доли пикселя, иначе остаётся скролл в 1-3px
 * - значения копятся в сторе и пишутся в состояние только при реальном
 *   изменении, поэтому процесс сходится и не зацикливается
 *
 * Почему эффект замера не зависит от состояния компрессии напрямую:
 * включение его в deps гоняло бы принудительный reflow (около 15 вызовов
 * getBoundingClientRect) на каждый пересчёт компрессии. Вместо этого
 * эффект слушает компактные сигнатуры, которые меняются считанные разы.
 *
 * Разделение на два хука это решение проблемы курицы и яйца:
 * useControlBlockMeasurements даёт mergedWidths ДО хука компрессии,
 * а useMeasurementEffects подключает эффекты ПОСЛЕ него, когда уже
 * известно состояние видимости.
 */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { controlBlockClassNames as cls } from '../control-block.classnames';
import { ControlBlockButtonProps } from '../control-block-button.types';
import {
  FeatureItem,
  FeatureRefTarget,
  InitialWidthsForToolsMenu,
  MeasuredArrayKey,
  MeasuredNumberKey,
  ToolsMenuState
} from '../types';
import { isCompressionDebugEnabled } from './debug';

// Фоллбек ширины кнопки (Button) в icon-only состоянии для большого
// размера: 48 без шеврона, 64 когда у кнопки есть дропдаун и шеврон
// остаётся видимым. Реальное значение меряется из DOM после первого сжатия.
const ICON_ONLY_BTN = 48;
const ICON_ONLY_BTN_CHEVRON = 64;
// Кастомные иконки (EmbedIconButton): 40 обычная, 48 с шевроном
const CUSTOM_ICON = 40;
const CUSTOM_ICON_CHEVRON = 48;
// Дивайдер между кастомными иконками (dividerLeft)
const ITEM_DIVIDER = 1;

type RefsRecord = Record<number, HTMLDivElement | null>;

type MeasurementsParams = {
  leftSideInner: ControlBlockButtonProps[] | undefined;
  /** Кнопки правой зоны одним массивом: конфиг + встроенные фичи */
  rightButtons: ControlBlockButtonProps[];
  featureLeftButtons: ControlBlockButtonProps[];
  icons: FeatureItem[];
};

export type ControlBlockMeasurements = ReturnType<
  typeof useControlBlockMeasurements
>;

/**
 * Хранилище замеров и итоговые ширины для модели компрессии.
 * Вызывается ДО useCompressionFeatures (отдаёт ему mergedWidths).
 */
export const useControlBlockMeasurements = ({
  leftSideInner,
  rightButtons,
  featureLeftButtons,
  icons
}: MeasurementsParams) => {
  const [initialWidths, setInitialWidths] = useState<InitialWidthsForToolsMenu>(
    {}
  );

  // Рефы измеряемых элементов
  const rightButtonRefs = useRef<RefsRecord>({});
  const leftSideInnerRefs = useRef<RefsRecord>({});
  const customFeaturesRefs = useRef<RefsRecord>({});
  const collapsingBlockRefs = useRef<RefsRecord>({});
  const featureLeftButtonRefs = useRef<RefsRecord>({});
  const inlineTitleRef = useRef<HTMLSpanElement>(null);
  const editModeLeftSlotRef = useRef<HTMLDivElement>(null);
  const overflowTriggerRef = useRef<HTMLDivElement>(null);
  // Блок leftSideInner целиком (дропдаун "Действия" или одна кнопка)
  const leftSideInnerBlockRef = useRef<HTMLDivElement>(null);

  // Накопительное хранилище замеров. Заполняется постепенно, значения
  // стабильны, setInitialWidths дёргается только при реальном изменении.
  const measureStore = useRef<InitialWidthsForToolsMenu>({});

  const registerFeaturesRef = useCallback(
    (el: HTMLDivElement | null, index: number, target: FeatureRefTarget) => {
      switch (target) {
        case 'rightButton':
          rightButtonRefs.current[index] = el;
          break;
        case 'leftSideInner':
          leftSideInnerRefs.current[index] = el;
          break;
        case 'customFeatures':
          customFeaturesRefs.current[index] = el;
          break;
        case 'collapsingBlock':
          collapsingBlockRefs.current[index] = el;
          break;
        case 'featureLeftButton':
          featureLeftButtonRefs.current[index] = el;
          break;
        default:
          break;
      }
    },
    []
  );

  // Константные ширины из пропсов, фоллбек до первого DOM замера.
  // Не зависят от DOM: определяются по наличию дропдауна и шеврона.
  const constantWidths = useMemo<InitialWidthsForToolsMenu>(() => {
    const btnIcon = (b?: ControlBlockButtonProps) =>
      b?.dropdown ? ICON_ONLY_BTN_CHEVRON : ICON_ONLY_BTN;
    return {
      rightButtonsIcon: rightButtons.map(btnIcon),
      featureLeftButtonsIcon: featureLeftButtons.map(btnIcon),
      customFeatures: icons.map((icon) => {
        const isCustomRender = 'CustomIconRender' in icon;
        const iconW = isCustomRender ? CUSTOM_ICON_CHEVRON : CUSTOM_ICON;
        const hasDivider =
          !isCustomRender && 'dividerLeft' in icon && icon.dividerLeft;
        return iconW + (hasDivider ? ITEM_DIVIDER : 0);
      })
    };
  }, [rightButtons, featureLeftButtons, icons]);

  // Объединяем константы и DOM замеры. Icon массивы мёржим поэлементно:
  // замер, если уже есть, перекрывает константу, незамеренные индексы
  // остаются на константах. Ссылку стабилизируем по содержимому, иначе
  // measuredWidths менял бы ref каждый рендер родителя (массивы фич
  // приходят новыми) и сбрасывал кэш компрессии.
  const mergedKey = JSON.stringify({ ...constantWidths, ...initialWidths });
  const mergedWidths = useMemo<InitialWidthsForToolsMenu>(() => {
    const mergeArr = (base?: number[], measured?: number[]) =>
      base ? base.map((b, i) => measured?.[i] ?? b) : measured;
    return {
      ...constantWidths,
      ...initialWidths,
      rightButtonsIcon: mergeArr(
        constantWidths.rightButtonsIcon,
        initialWidths.rightButtonsIcon
      ),
      featureLeftButtonsIcon: mergeArr(
        constantWidths.featureLeftButtonsIcon,
        initialWidths.featureLeftButtonsIcon
      ),
      customFeatures: mergeArr(
        constantWidths.customFeatures,
        initialWidths.customFeatures
      )
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergedKey]);

  // Снимает замеры со всех рефов по правилам видимости и обновляет
  // initialWidths, если что-то реально изменилось
  const measureAll = useCallback(
    (vis: ToolsMenuState, iconsList: FeatureItem[]) => {
      const store = measureStore.current;
      let changed = false;

      const setNum = (key: MeasuredNumberKey, v?: number) => {
        if (v == null) return;
        const r = Math.ceil(v);
        if (store[key] !== r) {
          store[key] = r;
          changed = true;
        }
      };
      const setArrItem = (key: MeasuredArrayKey, i: number, v?: number) => {
        if (v == null) return;
        const r = Math.ceil(v);
        const arr = store[key] ?? (store[key] = []);
        if (arr[i] !== r) {
          arr[i] = r;
          changed = true;
        }
      };

      if (inlineTitleRef.current)
        setNum(
          'inlineTitle',
          inlineTitleRef.current.getBoundingClientRect().width
        );

      const collapseEl = collapsingBlockRefs.current[0];
      if (collapseEl)
        setNum('collapseBlock', collapseEl.getBoundingClientRect().width);

      if (editModeLeftSlotRef.current)
        setNum(
          'editModeLeftSlot',
          editModeLeftSlotRef.current.getBoundingClientRect().width
        );

      // Кнопки правой зоны: с видимым лейблом пишем лейбл ширину,
      // со скрытым пишем icon-only ширину
      Object.entries(rightButtonRefs.current).forEach(([iStr, el]) => {
        if (!el) return;
        const i = Number(iStr);
        const w = el.getBoundingClientRect().width;
        if (vis.rightSide.buttons[i]?.isLabelVisible)
          setArrItem('rightButtons', i, w);
        else setArrItem('rightButtonsIcon', i, w);
      });

      // Кнопки редактирования
      Object.entries(featureLeftButtonRefs.current).forEach(([iStr, el]) => {
        if (!el) return;
        const w = el.getBoundingClientRect().width;
        if (vis.leftSide.editRowFeature.isLabelVisible)
          setArrItem('featureLeftButtons', Number(iStr), w);
        else setArrItem('featureLeftButtonsIcon', Number(iStr), w);
      });

      // Кастомные иконки. Дивайдер (dividerLeft) это сосед в DOM,
      // добавляем его константой, как и в модели ширины.
      Object.entries(customFeaturesRefs.current).forEach(([iStr, el]) => {
        if (!el) return;
        const i = Number(iStr);
        const icon = iconsList[i];
        const divider =
          icon && !('CustomIconRender' in icon) && icon.dividerLeft
            ? ITEM_DIVIDER
            : 0;
        setArrItem(
          'customFeatures',
          i,
          el.getBoundingClientRect().width + divider
        );
      });

      // Блок leftSideInner целиком, не сжимается, можно мерить всегда
      if (leftSideInnerBlockRef.current)
        setNum(
          'leftSideInnerBlock',
          leftSideInnerBlockRef.current.getBoundingClientRect().width
        );

      // Триггер overflow дропдауна, появляется при сжатии
      if (overflowTriggerRef.current)
        setNum(
          'overflowTrigger',
          overflowTriggerRef.current.getBoundingClientRect().width
        );

      if (changed) {
        const copyArr = (a?: number[]) => (a ? [...a] : undefined);
        setInitialWidths({
          ...store,
          rightButtons: copyArr(store.rightButtons),
          featureLeftButtons: copyArr(store.featureLeftButtons),
          rightButtonsIcon: copyArr(store.rightButtonsIcon),
          featureLeftButtonsIcon: copyArr(store.featureLeftButtonsIcon),
          customFeatures: copyArr(store.customFeatures)
        });
      }
    },
    []
  );

  // Дебаг лог реальных ширин DOM против расчёта модели. Зоны позволяют
  // быстро найти группу, где расчёт разошёлся с реальностью.
  const logDomZones = useCallback((container: HTMLDivElement | null) => {
    if (!isCompressionDebugEnabled()) return;
    const el = container;
    if (!el) return;
    const liveWidths = (refs: React.MutableRefObject<RefsRecord>) =>
      Object.fromEntries(
        Object.entries(refs.current)
          .filter(([, node]) => node)
          .map(([i, node]) => [
            i,
            Math.round((node as HTMLDivElement).getBoundingClientRect().width)
          ])
      );

    const zoneW = (node: Element | null | undefined) =>
      node ? Math.round(node.getBoundingClientRect().width) : null;
    const rightZone = el.querySelector(`.${cls.rightControlBlock}`);

    /* eslint-disable-next-line no-console */
    console.debug(
      `[CB] ${JSON.stringify({
        ev: 'dom',
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
        overflow: el.scrollWidth - el.clientWidth,
        zones: {
          left: zoneW(el.querySelector(`.${cls.leftControlBlock}`)),
          search: zoneW(el.querySelector(`.${cls.searchControlBlock}`)),
          right: zoneW(rightZone),
          rightButtons: zoneW(rightZone?.firstElementChild),
          rightIcons: zoneW(rightZone?.lastElementChild)
        },
        live: {
          leftInner: liveWidths(leftSideInnerRefs),
          rightButtons: liveWidths(rightButtonRefs),
          featureLeft: liveWidths(featureLeftButtonRefs),
          custom: liveWidths(customFeaturesRefs),
          overflowTrigger: overflowTriggerRef.current
            ? Math.round(
                overflowTriggerRef.current.getBoundingClientRect().width
              )
            : null
        }
      })}`
    );
  }, []);

  return {
    mergedWidths,
    registerFeaturesRef,
    measureAll,
    logDomZones,
    inlineTitleRef,
    editModeLeftSlotRef,
    overflowTriggerRef,
    leftSideInnerBlockRef
  };
};

type MeasurementEffectsParams = MeasurementsParams & {
  visibilityState: ToolsMenuState;
  containerRef: React.RefObject<HTMLDivElement>;
  fullScreened: boolean;
  editModeEnabled: boolean;
  // Состояние сворачивания таблицы. При его смене кнопка коллапса меняет
  // текст (Свернуть <-> Развернуть), а это разная ширина, поэтому нужен
  // перезамер. Дальше mergedWidths поменяется и компрессия пересчитается
  // сама (calculateCurrentWidth зависит от замеров).
  isCollapsed: boolean;
};

/**
 * Эффекты замеров. Вызывается ПОСЛЕ useCompressionFeatures, когда уже
 * известно текущее состояние видимости лейблов.
 */
export const useMeasurementEffects = (
  measurements: ControlBlockMeasurements,
  {
    visibilityState,
    containerRef,
    leftSideInner,
    rightButtons,
    featureLeftButtons,
    icons,
    fullScreened,
    editModeEnabled,
    isCollapsed
  }: MeasurementEffectsParams
) => {
  const { measureAll, logDomZones } = measurements;

  // Текущая видимость через ref, чтобы не держать её в deps эффекта
  // (иначе он запускался бы на каждый пересчёт компрессии)
  const visRef = useRef(visibilityState);
  visRef.current = visibilityState;
  const iconsRef = useRef(icons);
  iconsRef.current = icons;

  // Сигнатура видимости лейблов: меняется только при реальных переходах
  // (скрыли или показали лейблы), по ней дозамеряются icon-only ширины
  const visSignature = JSON.stringify([
    visibilityState.leftSide.editRowFeature.isLabelVisible,
    visibilityState.rightSide.buttons.map((b) => b.isLabelVisible)
  ]);

  // Контент сигнатура icons: ссылка на массив нестабильна (новый каждый
  // рендер), а замеры читают из него только value, dividerLeft и тип.
  // Сигнатура меняется ровно когда меняется этот контент, в том числе
  // динамически из tableConfig.
  const iconsSignature = JSON.stringify(
    icons.map((ic) => [
      ic.value,
      'dividerLeft' in ic ? !!ic.dividerLeft : false,
      'CustomIconRender' in ic
    ])
  );

  // Счётчик группировки (contentRight кнопки "Группировать") намеренно НЕ
  // ловится перезамером кнопки. Если мерить кнопку со счётчиком, то после
  // скрытия лейблов ширину "с лейблом" не перемерить (лейбла нет в DOM) и
  // счётчик вмерзает в замер навсегда — лейблы потом не возвращаются. Поэтому
  // ширину счётчика учитываем отдельным константным слагаемым в модели по
  // флагу state.rightSide.hasGroupingCounter (см. width-model GROUPING_COUNTER_WIDTH),
  // а при нехватке места его гасит сжатие поиска, а не скрытие лейблов.

  // Перезамер после загрузки шрифтов. Первый замер на маунте ловит
  // fallback шрифт (блок "Действия" был 119px, после подгрузки стал 126px),
  // модель оказывалась занижена и появлялось окно со скроллом без компрессии.
  const [fontsTick, setFontsTick] = useState(0);
  useEffect(() => {
    let alive = true;
    document.fonts?.ready?.then(() => {
      if (alive) setFontsTick(1);
    });
    return () => {
      alive = false;
    };
  }, []);

  useLayoutEffect(() => {
    measureAll(visRef.current, iconsRef.current);
    // Зависимости только структурные сигналы, не сами массивы: ссылки
    // нестабильны, прямое включение гоняло бы reflow замеры каждый рендер
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    measureAll,
    visSignature,
    fontsTick,
    iconsSignature,
    rightButtons.length,
    leftSideInner?.length,
    featureLeftButtons.length,
    fullScreened,
    editModeEnabled,
    isCollapsed
  ]);

  // Дебаг: реальные ширины DOM против расчёта модели
  useEffect(() => {
    if (!isCompressionDebugEnabled()) return;
    logDomZones(containerRef.current);
  }, [visibilityState, containerRef, logDomZones]);
};
