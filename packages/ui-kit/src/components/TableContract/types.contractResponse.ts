import { ColumnAnsiSqlType } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectAny = Record<string, any>;

type ContractColumnEditingCell = {
  /**
   *
   * error.value.key - ключ(или ключи) в данных строки, по которому будет идентифицироваться редактируется строка или нет.
   * // TODO доделать описание (editableValue)
   * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
   *
   * Мб формата c одним или несколькими ключами.
   * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
   * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
   *  @example 'id' или "id,UVE367,name"
   */
  error?: { value: { keyInRow: string; errorValue: string } };
  /**
   *
   * editable.key - ключ(или ключи) в данных строки, по которому будет идентифицироваться редактируется строка или нет.
   * // TODO доделать описание (editableValue)
   * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
   *
   * Мб формата c одним или несколькими ключами.
   * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
   * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
   *  @example 'id' или "id,UVE367,name"
   */
  editable?: { keyInRow: string; editableValue: string };
} & (
  | { component: 'inputString' }
  | { component: 'inputNumber' }
  | {
      component: 'select';
      options: {
        type: 'constant';
        options: {
          value: string | number;
          text: string | number;
        }[];
      };
    }
);

export type ContractColumnConfig = {
  /**
   * key - ключ данной колонки в данных строки.
   */
  key: string;
  /**
   * name - отображаемый текст в шапке колонки.
   */
  name: string | number;
  /**
   * тип данных колонки
   */
  columnType?: ColumnAnsiSqlType;
  /**
   * текст, видимый при наведении на название колонки
   */
  title?: string;
  /**
   * sortingType - свойство для настройки типа сортировки. Если не указано данное свойство, то иконка сортировки у колонки не появится. Не забудьте активировать сортировку в TableConfig.
   */
  sortingType?: 'stringSort' | 'numberSort';
  /**
   * searching.keyInRow - свойство для настройки поиска: по какому ключу в объекте строки искать в рамках данной колонки. Не забудьте активировать поиск в TableConfig.
   */
  searching?: {
    /**
     * свойство для настройки поиска: по какому ключу в объекте строки искать в рамках данной колонки. Не забудьте активировать поиск в TableConfig.
     */
    keyInRow: string;
  };
  /**
   * contentFormat - свойство для конфигурации формата отображения контента в ячейки.
   */
  contentFormat?:
    | number
    | { alignContent?: 'right' | 'left' | 'center' }
    | {
        type: 'number';
        /** Кастомный разделитель дробной части (по умолчанию ',') */
        decimalSeparator?: string;
        /** Кастомный разделитель тысяч (по умолчанию ' ') */
        thousandSeparator?: string;
        /** Минимальное число знаков после запятой (по умолчанию 0) */
        minimumFractionDigits?: number;
        /** Максимальное число знаков после запятой (по умолчанию 2) */
        maximumFractionDigits?: number;
        /** Включить/отключить группировку разрядов (по умолчанию true) */
        useGrouping?: boolean;
        /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
        locales?: string | string[];
        alignContent?: 'right' | 'left' | 'center';
      };
  /**
   * subRow - свойство для конфигурации отрисовки данных во вложенных строках.
   */
  subRow?: {
    /**
     * Свойство для указания по какому ключу взять данные в дочерней строке.
     *
     * `keyOfColumnInSubRow` обязателен для заполнения, если не заполнен `parentKeyAsDefault`.
     *
     * Для типов `string`, `number` - указать название ключа, например 'block'.
     *
     * Для типа `Record<number | 'default', string>` - указать ключи для каждого уровня вложенности, например `{1: 'block', 2: 'tribe', default: 'product'}`.
     */
    keyOfColumnInSubRow?: string | number | Record<number | 'default', string>;
    /**
     * свойство для того, чтобы показать/не показывать иконки-стрелки, раскрывающие дочерние строки.
     * @default false
     */
    isColumnWithArrow?: boolean;
    /**
     * @default false
     */
    hideHeaderExpandAllArrow?: boolean;
    /**
     * Свойство для указания "взять данные из дочерней строки по такому же ключу, что и из недочерней строки (строки верхнего уровня)".
     *
     * `parentKeyAsDefault` обязателен для заполнения, если не заполнен `keyOfColumnInSubRow`.
     * @default false
     */
    parentKeyAsDefault?: boolean;
    /**
     * @default undefined
     */
    contentFormat?:
      | number
      | { alignContent?: 'right' | 'left' | 'center' }
      | {
          type: 'number';
          /** Кастомный разделитель дробной части (по умолчанию ',') */
          decimalSeparator?: string;
          /** Кастомный разделитель тысяч (по умолчанию ' ') */
          thousandSeparator?: string;
          /** Минимальное число знаков после запятой (по умолчанию 0) */
          minimumFractionDigits?: number;
          /** Максимальное число знаков после запятой (по умолчанию 2) */
          maximumFractionDigits?: number;
          /** Включить/отключить группировку разрядов (по умолчанию true) */
          useGrouping?: boolean;
          /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
          locales?: string | string[];
          alignContent?: 'right' | 'left' | 'center';
        };
    editingCell?: ContractColumnEditingCell;
  };
  editingCell?: ContractColumnEditingCell;

  /**
   * resizable - свойство для активации возможности изменять размер колонки
   */
  resizable?: boolean;
  /**
   * summaryCell - свойство для конфигурации отрисовки данных в итоговых строках.
   *
   * Заполнить либо `key`(по какому ключу взять данные в итоговой строке),
   * либо `text` (любой текст, который должен отображаться в итоговой строке в определенной колонке)
   */
  summaryCell?: {
    key?: string;
    text?: string;
  };
  /**
   * width - свойство для настройки активной ширины колонки. "string" - CSS-value, "number" - value in px
   * @example '300px' или 500
   */
  width?: number | string;
  /**
   * minWidth - для настройки минимальной ширины. "number" - value in px
   */
  minWidth?: number;
  /**
   * maxWidth - для настройки максимальной ширины. "number" - value in px
   */
  maxWidth?: number;
};

export type ContractTableConfig = {
  /**
   * sorting - свойство для конфигурации сортировки.
   */
  sorting?: { type: 'frontend' | 'backend' };
  /**
   * свойство для конфигурации отображения пагинации.
   */
  pagination?: {
    total: number;
    totalRows: number;
    defaultPage: number;
    defaultPageSize: number;
    page: number;
    pageSize: number;
    /**
     * sizeList - pageLimitList
     */
    pageSizeList?: number[];
  };
  /**
   * editing - активация редактирования. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   */
  editing?: {
    saving: { type: 'onSubmit' | 'onRowChange' };
    /**
     *
     * rowUniqIdKey - уникальный ключ(или ключи) в данных строки, по которому она будет идентифицироваться.
     *
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowUniqIdKey: string;
    /**
     *
     * rowEditable.key - ключ(или ключи) в данных строки, по которому будет идентифицироваться редактируется строка или нет.
     * // TODO доделать описание (editableValue)
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowEditable?: { keyInRow: string; editableValue: string };
    /**
     * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
     * @default false
     */
    defaultEnabled?: boolean;
    /**
     * @default true
     */
    showToggleEnabledButton?: boolean;
  };
  /**
   * subRows - свойство для конфигурации отображения иерархий.
   */
  subRows?: {
    /**
     * subRowsKey - ключ в данных, по которому можно найти дочерние строки. Ключ в данных может быть любым (необязательно "children", "subRows").
     *
     * Мб формата без вложенности, например, "children". А также и с вложенностью, например, "UVE367.children".
     *
     * Вложенность может быть в рамках как объектных структур, так и массивов.
     * Разделитель - '.' (точка). Например, "children" или "UVE367.0.children".
     * @example "children" или "UVE367.0.children"
     */
    subRowsKey: string;
    /**
     *
     * rowUniqIdKey - уникальный ключ(или ключи) в данных строки, по которому она будет идентифицироваться.
     *
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowUniqIdKey: string;
  };
  /**
   * filtering - свойство для конфигурации фильтрации по колонкам.
   */
  filtering?: {
    type: 'backend';
  };
  /**
   * searching - свойство для конфигурации поиска.
   */
  searching?: {
    /**
     * Активирован поиск или нет.
     */
    enabled: boolean;
    /**
     * На какой стороне должен производиться поиск.
     */
    type: 'frontend' | 'backend';
    /**
     * По умолчанию текст для поиска, введенный в поле ввода.
     */
    defaultSearchQuery?: string;
    /**
     * Показать/скрыть визуально блок с поиском.
     */
    showSearchBlock?: boolean;
    /**
     * Задержка в момент ввода пользователем текста перед отправкой запроса. По умолчанию (300ms)
     *
     * @default 300
     */
    debounceDelay?: number;
    /**
     * Активирована ли задержка в момент ввода пользователем текста перед отправкой запроса. По умолчанию активирована.
     *
     * @default true
     */
    isDebounceActive?: boolean;
    /**
     * Текст отображаемый внутри поля ввода, при отсутствии введенного значения. Например, 'Поиск'
     *
     * @default 'Поиск'
     */
    placeholder?: string;
    /**
     * Свойство для добавления html-атрибута class блоку поиска.
     */
    searchClasses?: string;
  };
  /**
   * height - свойство для настройки высоты таблицы.
   * @default "500px"
   */
  height?: string;
  /**
   * fullScreenEnabled - свойство для активации доступности полноэкранного режима.
   */
  fullScreenEnabled?: boolean;

  /**
   * summaryRows - свойство для активации итоговых строк.
   */
  summaryRows?: { showDefault: boolean; showInControl: boolean };
  /**
   * resizableColumn - свойство для активации изменения ширины колонок при взаимодействии с их шапкой.
   */
  resizableColumn?: boolean;
  /**
   * rowSize - свойство для изменения плотности отображения данных таблицы.
   */
  rowSize?: {
    showInControl: boolean;
    default?: 'small' | 'medium' | 'big';
    available?: ('small' | 'medium' | 'big')[];
  };
  /**
   * rowHeight - свойство для изменения высоты строк. Данное значение менять, только если крайне необходимо. Дизайн должен соответствовать требованиям ДС.
   * @default 56
   */
  rowHeight?: number;
  /**
   * containerStyle - свойство для конфигурации стилей с помощью CSS. (type=SSProperties)
   * @example {width: '700px'}
   */
  containerStyle?: ObjectAny;
};

export type ContractResponse = {
  /**
   *  Основные данные для таблицы.
   *
   *  Пример data.main, data.topSummary, data.bottomSummary: `[{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}]`
   */
  data: {
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    main: ObjectAny[];
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    topSummary?: ObjectAny[];
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    bottomSummary?: ObjectAny[];
  };
  /**
   *  Данные для конфигурации отображения таблицы.
   *
   *  `meta.columns` - конфигурация колонок.
   *  `meta.tableConfig` - конфигурация фичей таблицы.
   */
  meta: {
    columns: ContractColumnConfig[];
    tableConfig?: ContractTableConfig;
  };
};
