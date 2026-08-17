import{j as e}from"./react-D2T61mpp.js";import{c2 as d,c3 as s,bY as l}from"./vendor-B0ELcGbr.js";import{G as c}from"./GridDND.stories-DoVIkj0Q.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";import"./subRows.routes-DVgYUA_l.js";import"./tableData-UCfjiBCh.js";import"./TableContract-2N3V3KtV.js";import"./ModalDFConfirmation-kRE-e75T.js";import"./ModalDF-DBViBo8p.js";import"./@salutejs/sdds-finai-CPdoK_07.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/plasma-icons-Dn1uY4zn.js";import"./constants-B3b49qmU.js";import"./Container-Dz1bV3Aa.js";import"./utils-C6gzzOja.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Db5QYZwL.js";import"./Table-DSFc1rtq.js";import"./FiltersActions-BSRRAMiI.js";import"./IconButton-BnBbpqAh.js";import"./TextField-DWCr1uqp.js";import"./sharedUtilsInputs-Cqh7JaQW.js";import"./AnalyticalWidget-D5_iniP6.js";import"./Collapse-BXK8FQgS.js";import"./react-data-grid-CqwhRDqe.js";import"./TableTabs-IUQeYtHj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Dvcmx-r0.js";import"./ListOfFilters-yyMq6IK9.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bs9eJUT-.js";import"./EmptyState-Bje4uzUs.js";import"./MassActions-B7aOQbWX.js";import"./Autocomplete-pluU6vp8.js";import"./swr-Bdyxm5I8.js";import"./ErrorPage-C1mBF_U8.js";import"./storySourceDoc-tVKyHcEN.js";import"./GridDND-DVOCtr94.js";import"./react-grid-layout-Dxaz9y8J.js";import"./utils-Dz_DkKM2.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"griddnd",children:"GridDND"}),`
`,e.jsx(n.p,{children:"Компонент для создания адаптивных сеток с поддержкой перетаскивания элементов и автоматическим переносом между брейкпоинтами."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Единый пропс ",e.jsx(n.code,{children:"items"})," как источник истины (без сложной инициализации)"]}),`
`,e.jsxs(n.li,{children:["Три типа виджетов: ",e.jsx(n.code,{children:"s"})," (1x1), ",e.jsx(n.code,{children:"m"})," (2x1), ",e.jsx(n.code,{children:"l"})," (2x2) с автоматической адаптацией"]}),`
`,e.jsxs(n.li,{children:["Мутации через ",e.jsx(n.code,{children:"ref.api"}),": добавление, удаление, смена типа, переупорядочивание"]}),`
`,e.jsx(n.li,{children:"Кастомные брейкпоинты и колонки"}),`
`,e.jsxs(n.li,{children:["Алгоритм ",e.jsx(n.code,{children:"packByItemsOrder"})," для предсказуемого размещения"]}),`
`,e.jsx(n.li,{children:"Drag Handle и No-Drag Zones через CSS-классы"}),`
`]}),`
`,e.jsx(n.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,e.jsx(n.h3,{id:"базовое-использование",children:"Базовое использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { GridDND } from '@daisforge/ui';

const MyGrid = () => (
  <GridDND
    items={[
      { id: 'widget-1', type: 's' },
      { id: 'widget-2', type: 'm' },
      { id: 'widget-3', type: 'l' },
    ]}
  >
    {(item, onRemove) => (
      <div key={item.id}>
        <h3>Виджет {item.id}</h3>
        <button onClick={onRemove}>Удалить</button>
      </div>
    )}
  </GridDND>
);
`})}),`
`,e.jsx(n.h3,{id:"единый-источник-истины",children:"Единый источник истины"}),`
`,e.jsxs(n.p,{children:["Пропс ",e.jsx(n.code,{children:"items"})," передаётся ",e.jsx(n.strong,{children:"один раз"}),` — это начальный снимок (порядок + типы).
Все runtime-мутации идут через `,e.jsx(n.code,{children:"ref.api.*"}),". После маунта изменения ",e.jsx(n.code,{children:"items"}),`
в props игнорируются — это сделано специально, чтобы не было гонок с
пользовательскими действиями (D&D, add/remove).`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ПРАВИЛЬНО — передаём один раз при маунте
<GridDND items={initialItems} />

// НЕПРАВИЛЬНО — изменения после маунта не подхватятся
<GridDND items={dynamicItems} />
`})}),`
`,e.jsxs(n.h3,{id:"мутации-через-refapi",children:["Мутации через ",e.jsx(n.code,{children:"ref.api"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Добавить"})," — ",e.jsx(n.code,{children:"api.addItem({ id, type }, index?)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Удалить"})," — ",e.jsx(n.code,{children:"api.removeItem(id)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Изменить type"})," — ",e.jsx(n.code,{children:"api.setItemType(id, 's' | 'm' | 'l')"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Переупорядочить"})," — ",e.jsx(n.code,{children:"api.setOrder(ids)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Получить состояние"})," — ",e.jsx(n.code,{children:"api.getOrder()"}),", ",e.jsx(n.code,{children:"api.getOrderDetailed()"}),", ",e.jsx(n.code,{children:"api.getCurrentLayout()"}),", ",e.jsx(n.code,{children:"api.getAllLayouts()"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const gridRef = useRef<GridDNDRef>(null);

// Пример: «вырастить» виджет w1 до L
gridRef.current?.api.setItemType('w1', 'l');
`})}),`
`,e.jsx(n.h3,{id:"для-виджета-который-сам-меняет-свой-размер",children:"Для виджета, который сам меняет свой размер"}),`
`,e.jsxs(n.p,{children:["Render-prop получает 3 аргумента: ",e.jsx(n.code,{children:"(item, onRemove, onResize)"}),`. Функции
`,e.jsx(n.code,{children:"onRemove"})," и ",e.jsx(n.code,{children:"onResize"})," уже пре-каррированы к ",e.jsx(n.code,{children:"item.id"}),` — под капотом вызывают
`,e.jsx(n.code,{children:"api.removeItem(id)"})," и ",e.jsx(n.code,{children:"api.setItemType(id, type)"})," соответственно."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridDND items={initialItems}>
  {(item, onRemove, onResize) => (
    <GridDND.ItemWrapper item={item}>
      <MyWidget
        type={item.type}
        onResize={onResize} // onResize('l') — виджет сам себя растит
        onRemove={onRemove}
      />
    </GridDND.ItemWrapper>
  )}
</GridDND>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Важно: React-ключ по ",e.jsx(n.code,{children:"item.id"})," стабилен, поэтому при ",e.jsx(n.code,{children:"setItemType"}),`/reflow
`,e.jsx(n.strong,{children:"React-инстанс виджета не размонтируется"})," — внутренний ",e.jsx(n.code,{children:"useState"}),`,
ссылки, фокусы сохраняются. Визуально меняется только размер ячейки.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"типы-виджетов-и-размеры",children:"Типы виджетов и размеры"}),`
`,e.jsx(n.p,{children:"Компонент поддерживает три типа виджетов:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"'s'"})," (small) - 1x1 ячейка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"'m'"})," (medium) - 2x1 ячейки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"'l'"})," (large) - 2x2 ячейки"]}),`
`]}),`
`,e.jsx(n.p,{children:"Размеры автоматически адаптируются под количество колонок в брейкпоинте."}),`
`,e.jsx(n.h2,{id:"адаптивность-и-брейкпоинты",children:"Адаптивность и брейкпоинты"}),`
`,e.jsx(n.h3,{id:"стандартные-брейкпоинты",children:"Стандартные брейкпоинты"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  lg: 1857,  // 6 колонок
  md: 1377,  // 6 колонок
  sm: 1145,  // 5 колонок
  xs: 913,   // 4 колонки
  xxs: 0     // 4 колонки
}
`})}),`
`,e.jsx(n.h3,{id:"кастомные-брейкпоинты",children:"Кастомные брейкпоинты"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridDND
  breakpoints={{ desktop: 1440, tablet: 1024, mobile: 768 }}
  cols={{ desktop: 8, tablet: 6, mobile: 4 }}
  rowHeights={{ desktop: 200, tablet: 150, mobile: 100 }}
/>
`})}),`
`,e.jsx(n.h2,{id:"алгоритмы-размещения",children:"Алгоритмы размещения"}),`
`,e.jsx(n.h3,{id:"1-алгоритм-packbyitemsorder",children:"1. Алгоритм packByItemsOrder"}),`
`,e.jsx(n.p,{children:"Основной алгоритм размещения элементов в порядке их следования:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Псевдокод алгоритма
function packByItemsOrder(order, sizes, cols) {
  // 1. Создаётся виртуальная сетка для отслеживания занятых ячеек
  // 2. Для каждого элемента в порядке order:
  // - Определяются размеры элемента (w x h)
  // - Поиск начинается с текущей "границы чтения" (fy, fx)
  // - Сначала проверяется текущая строка fy, начиная с позиции fx
  // - Если не помещается - ищется ниже, начиная со строки fy+1
  // 3. Найденное место занимается в виртуальной сетке
  // 4. "Граница чтения" обновляется для следующего элемента
}
`})}),`
`,e.jsx(n.p,{children:"Ключевые особенности алгоритма:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Сохраняет порядок чтения (слева направо, сверху вниз)"}),`
`,e.jsx(n.li,{children:"После перехода на новую строку возврат к предыдущим строкам невозможен"}),`
`,e.jsx(n.li,{children:'Оптимизирован для минимального количества "дырок" в сетке'}),`
`,e.jsx(n.li,{children:"Гарантирует предсказуемое расположение при изменении порядка элементов"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-алгоритм-первого-подходящего-места-placerectfirstfit",children:"2. Алгоритм первого подходящего места (placeRectFirstFit)"}),`
`,e.jsx(n.p,{children:"При добавлении новых элементов используется алгоритм First Fit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Создается виртуальная карта занятых ячеек"}),`
`,e.jsx(n.li,{children:"Поиск ведется от стартовой позиции (0,0 по умолчанию)"}),`
`,e.jsx(n.li,{children:"Находится первое свободное место нужного размера"}),`
`]}),`
`,e.jsx(n.h2,{id:"управление-перетаскиванием",children:"Управление перетаскиванием"}),`
`,e.jsx(n.h3,{id:"drag-handle",children:"Drag Handle"}),`
`,e.jsxs(n.p,{children:["Для создания области перетаскивания добавьте класс ",e.jsx(n.code,{children:"grid-dnd__drag-handle"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className="grid-dnd__drag-handle">Перетаскивайте за эту область</div>
`})}),`
`,e.jsx(n.h3,{id:"no-drag-zones",children:"No-Drag Zones"}),`
`,e.jsxs(n.p,{children:["Чтобы запретить перетаскивание за определенные элементы, используйте класс ",e.jsx(n.code,{children:"grid-dnd__no-drag"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<button className="grid-dnd__no-drag">
  Эта кнопка не будет запускать перетаскивание
</button>
`})}),`
`,e.jsx(n.h3,{id:"кастомные-handles",children:"Кастомные handles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridDND draggableHandle=".my-drag-handle">
  <div className="my-drag-handle">Перетаскивайте меня</div>
</GridDND>
`})}),`
`,e.jsx(n.h3,{id:"конфигурация-отступов",children:"Конфигурация отступов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridDND
  margin={[16, 16]} // Отступы между элементами [x, y]
  containerPadding={[24, 24]} // Внутренние отступы контейнера
/>
`})}),`
`,e.jsx(n.h3,{id:"настройка-поведения",children:"Настройка поведения"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridDND
  isDraggable={true} // Включить перетаскивание
  isResizable={false} // Отключить изменение размера
  preventCollision={true} // Предотвращать пересечения
  compactType="vertical" // Тип сжатия: 'vertical', 'horizontal', null
  verticalCompact={true} // Вертикальное сжатие
/>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-griddnd-api--docs",children:"GridDND API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function Q(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{Q as default};
