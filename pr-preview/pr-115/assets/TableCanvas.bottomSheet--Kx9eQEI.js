import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as r,ca as s}from"./vendor-DeTnNj4Y.js";import{B as c}from"./TableCanvas.bottomSheet.stories-UMviiXYf.js";import"./react-is-Clcustum.js";import"./styled-components-DdokC5aN.js";import"./@tanstack/react-virtual-De5X9U1Y.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-BKNbpy42.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-jn5O-zoQ.js";import"./FiltersActions-BOhkYRWC.js";import"./IconButton-CiN1tqM5.js";import"./@salutejs/plasma-icons-DO39JMB0.js";import"./@salutejs/sdds-finai-CR2jG7gG.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./utils-CnqbZkiM.js";import"./constants-DI5pidOH.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DX5ST7G7.js";import"./TextField-Dr5BOjh4.js";import"./sharedUtilsInputs-DMjRfQ_3.js";import"./AnalyticalWidget-_Usa-H1c.js";import"./Collapse-CfczhZGb.js";import"./Table-DdyMGdwT.js";import"./react-data-grid-hjNugmjj.js";import"./TableTabs-B8A6oUgt.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DxWLNWqW.js";import"./ListOfFilters-B36bCL_T.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-dFRrOuxH.js";import"./EmptyState-DWWHkzJG.js";import"./MassActions-CfwEqYJq.js";import"./Autocomplete-1PW07WU4.js";import"./TableGlide-qhhQfs6u.js";import"./@glideappsfinal/glide-data-grid-CAo2RqHF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CDm9rAI0.js";import"./TableCanvas.bottomSheet.example-CpXkNexF.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"bottomsheet-tablecanvas",children:"BottomSheet (TableCanvas)"}),`
`,e.jsxs(n.p,{children:["Нижняя панель с произвольным React-контентом, например журналом событий. Задаётся через ",e.jsx(n.code,{children:"tableConfig.bottomSheetConfig"})," и располагается под canvas, над общей пагинацией, между левой и правой боковыми панелями."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Высота меняется через React state без перемонтирования таблицы."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height"})," и ",e.jsx(n.code,{children:"minHeight"})," принимают число в пикселях или CSS-строку; по умолчанию оба значения равны 32px."]}),`
`,e.jsxs(n.li,{children:["Раскрытие, стрелку и внутреннюю прокрутку реализует потребитель в ",e.jsx(n.code,{children:"content"}),"."]}),`
`,e.jsx(n.li,{children:"Панель работает вместе с Sidebar, пагинацией, выбором строк, массовыми действиями и полноэкранным режимом."}),`
`,e.jsx(n.li,{children:"Collapse скрывает рабочую область и пагинацию, сохраняя размеры и состояние панелей."}),`
`]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useState } from 'react';

const [height, setHeight] = useState<string | number>(32);

<TableCanvas
  rows={rows}
  columnConfig={columns}
  tableConfig={{
    containerStyle: { height: 620 },
    bottomSheetConfig: {
      height,
      minHeight: 32,
      content: (
        <EventLog onToggle={() => setHeight(height === 32 ? 220 : 32)} />
      ),
    },
  }}
/>;
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.p,{children:["Отдельного состояния открытия в API нет: высотой управляет потребитель. Для полного удаления панели передайте ",e.jsx(n.code,{children:"enabled: false"})," или уберите конфиг. Внутреннему содержимому с прокруткой задайте ",e.jsx(n.code,{children:"overflow: auto"})," и ",e.jsx(n.code,{children:"minHeight: 0"}),"."]}),`
`,e.jsx(n.p,{children:"Процент высоты считается от рабочей области после вычитания заголовка, control block, фильтров и пагинации. Раскрытие не увеличивает внешний контейнер. Панель ограничивается доступным пространством, оставляя canvas 120px; при рабочей области меньше 120px её высота сжимается до нуля. Изменение высоты анимируется за 0.5 секунды."}),`
`,e.jsxs(n.p,{children:["При collapse canvas, обе боковые панели, BottomSheet и пагинация скрываются и исключаются из фокуса. После разворачивания сохраняются активные вкладки и размеры. Поддерживаются положения кнопки ",e.jsx(n.code,{children:"inside"})," и ",e.jsx(n.code,{children:"above"}),", а также полноэкранный режим."]}),`
`,e.jsxs(n.p,{children:["Панели поддерживаются в режиме строк. Error и empty state располагаются внутри canvas и сохраняют независимый BottomSheet. Skeleton также сохраняет компоновку. Активный ",e.jsx(n.code,{children:"loadingOverlay"})," заменяет весь layout: canvas, обе Sidebar, BottomSheet и пагинацию."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Высота, стрелка и пагинация"})," — минимальный пример раскрытия 32 ↔ 220px, высоты 35%, ограничения большой высоты и прокрутки журнала."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Все возможности таблицы"})," — одна таблица с обеими Sidebar и журналом действий. В ней доступны поиск, фильтры, сортировка, редактирование с сохранением/отменой, выбор строк и ячеек, copy/paste/fill, итоги, настройки колонок, групповые заголовки, объединение ячеек, Canvas-рендеры, контекстные меню и уведомления. Настройки представления позволяют проверить тему, границы, hover, размеры строк и шапки, tooltip и preview."]}),`
`,e.jsxs(n.p,{children:["Структура данных переключается между плоскими строками, группировкой деревом или со слиянием, собственными ",e.jsx(n.code,{children:"subRows"})," деревом или со слиянием. Группировка и собственное дерево используют разные конфигурации. При группировке доступен полный набор данных; страницы дерева формируются по верхним узлам. Получение данных переключается между полным набором, страницами по 20 и локальной бесконечной загрузкой."]}),`
`,e.jsxs(n.p,{children:["Редактирование, вставка и заполнение доступны в плоском режиме, группировке со слиянием и дереве ",e.jsx(n.code,{children:"subRows"}),". Группировка деревом и ",e.jsx(n.code,{children:"subRows"})," со слиянием в этом примере используются для просмотра и копирования: текущий адаптер изменений таблицы не сопоставляет производные строки этих режимов с исходным набором."]}),`
`,e.jsx(n.p,{children:"Поиск, фильтрация и сортировка выполняются в примере над полным набором до выбора страницы: при пагинации и бесконечной прокрутке TableCanvas ожидает обработанные данные. Правки применяются по стабильным ID, включая дочерние строки; строки других страниц сохраняются. Отмена восстанавливает снимок полного набора. Итоги вычисляются по полной отфильтрованной выборке. При смене условий поиска или фильтров сбрасывается страница и загруженная часть."}),`
`,e.jsxs(n.p,{children:["Изначально выбран плоский режим с пагинацией, выделением ",e.jsx(n.code,{children:"range-cell"})," и свёрнутым журналом. Левая Sidebar открыта, правая закрыта. В журнал попадают действия таблицы; автоматические проверки вынесены в отдельные visual stories."]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-bottomsheet-api--docs",children:"BottomSheet API"}),"."]}),`
`,e.jsx(s,{})]})}function Q(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{Q as default};
