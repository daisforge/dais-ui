import{j as i}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BjJ6Dniq.js";import{M as r,S as h}from"./WithTooltip-KJL26V4Q-EsghDtie.js";import{C as s}from"./TableCanvas.columnResize.stories-BVB5GZrP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-B1u7dqTk.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D69iLp4I.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-DLH0uy8c.js";import"./@daisforge/glide-data-grid-C4IsfJNb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-Bz53VcLG.js";import"./sharedUiSearch-CT4kO1iM.js";import"./TextField-BA0K4a8D.js";import"./sharedUtilsInputs-B7_g1dSr.js";import"./Typography-CBjtlY1k.js";import"./ListOfFilters-CXBQBhfz.js";import"./FiltersActions-BAAmJhuD.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BJ91g7o5.js";import"./EmptyState-BWCtY_iO.js";import"./unidentified@3x-B3LEnvq5.js";import"./ErrorPage-Cz-bHpvQ.js";import"./Autocomplete-UkORg-1h.js";function e(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:s,name:"Docs"}),`
`,i.jsx(n.h1,{id:"column-resize-minwidth--maxwidth--maxautowidth",children:"Column Resize (minWidth / maxWidth / maxAutoWidth)"}),`
`,i.jsxs(n.p,{children:["Ограничения ширины колонок. Задаются на уровне колонки (",i.jsx(n.code,{children:"columnConfig"}),") или глобально в ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.p,{children:`При наведении на границу изменяемой колонки в шапке сразу появляется линия
толщиной 2 px на высоту шапки (включая групповые строки). Зона наведения
совпадает с зоной курсора изменения ширины: по 5 px с каждой стороны границы.
Когда курсор уходит, линия исчезает без задержки и анимации.`}),`
`,i.jsxs(n.p,{children:[`При перетаскивании линия проходит на всю высоту таблицы. В обоих состояниях
используется `,i.jsx(n.code,{children:"outline-accent"}),` текущей темы — тот же цвет, что у рамки выделения.
Поведение включается вместе с `,i.jsx(n.code,{children:"tableConfig.resizableColumn"}),`; у колонок
с запрещённым ресайзом и фиксированными `,i.jsx(n.code,{children:"minWidth = maxWidth"}),` hover-линии нет.
На границе со скрытыми колонками в шапке остаётся их собственный индикатор.`]}),`
`,i.jsx(n.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'name',
    name: 'Название',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    key: 'description',
    name: 'Описание',
    maxAutoWidth: 500,
  },
];
`})}),`
`,i.jsx(n.h2,{id:"поля-колонки",children:"Поля колонки"}),`
`,i.jsx(n.h3,{id:"minwidth",children:"minWidth"}),`
`,i.jsx(n.p,{children:"Минимальная ширина колонки (px). Колонка не может стать уже этого значения — ни при ресайзе мышкой, ни при автоматическом расчёте ширины."}),`
`,i.jsxs(n.p,{children:["У каждой колонки есть ещё минимум по содержимому шапки, он считается автоматически и ниже него колонку сжать нельзя даже с меньшим ",i.jsx(n.code,{children:"minWidth"}),". Подробнее в разделе «Минимум по содержимому шапки»."]}),`
`,i.jsx(n.h3,{id:"maxwidth",children:"maxWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки (px). ",i.jsx(n.strong,{children:"Жёсткий потолок"})," — ограничивает всё: и автоматический расчёт ширины, и ручной ресайз мышкой. Колонка никогда не станет шире ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h3,{id:"maxautowidth",children:"maxAutoWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки при ",i.jsx(n.strong,{children:"автоматическом расчёте"})," (px). ",i.jsx(n.strong,{children:"Мягкий потолок"})," — колонка стремится не превышать это значение при автоматическом распределении ширин, но ",i.jsx(n.strong,{children:"пользователь может растянуть её шире"})," вручную."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnAutoWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h4,{id:"отличие-maxautowidth-от-maxwidth",children:"Отличие maxAutoWidth от maxWidth"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxWidth"})," — жёсткий потолок. Ограничивает и автоматическую ширину, и ручной ресайз."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," — мягкий потолок. Ограничивает только автоматическую ширину. Ручной ресайз не ограничен."]}),`
`]}),`
`,i.jsxs(n.p,{children:["Если заданы оба — при автоматическом расчёте берётся ",i.jsx(n.strong,{children:"меньшее"})," из двух значений. При ручном ресайзе действует только ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsx(n.h2,{id:"начальная-ширина",children:"Начальная ширина"}),`
`,i.jsxs(n.p,{children:["Если у колонки задан ",i.jsx(n.code,{children:"width"}),", она рендерится с этой шириной (клампится в диапазон ",i.jsx(n.code,{children:"minWidth"}),"..",i.jsx(n.code,{children:"maxWidth"}),")."]}),`
`,i.jsxs(n.p,{children:["Если ",i.jsx(n.code,{children:"width"})," не задан — начальная ширина вычисляется автоматически. Колонки без фиксированной ширины заполняют свободное место в контейнере. При этом ",i.jsx(n.code,{children:"maxAutoWidth"})," ограничивает, насколько широко колонка может автоматически растянуться."]}),`
`,i.jsx(n.h2,{id:"минимум-по-содержимому-шапки",children:"Минимум по содержимому шапки"}),`
`,i.jsx(n.p,{children:"Шапка колонки должна оставаться читаемой при любой ширине, поэтому таблица сама считает нижнюю границу ширины колонки. В неё входят:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["отступы ячейки слева и справа по размеру строки (",i.jsx(n.code,{children:"rowSize"}),");"]}),`
`,i.jsx(n.li,{children:"иконки слева от названия: пин закреплённой колонки, иконка перетаскивания за шапку, кнопка «раскрыть все» у колонки с подстроками;"}),`
`,i.jsx(n.li,{children:"место под одну букву названия с многоточием;"}),`
`,i.jsx(n.li,{children:"кнопки справа от названия: фильтр и сортировка, если они есть у колонки. Кнопки появляются при наведении, но место под них учитывается всегда, иначе при наведении они не поместились бы."}),`
`]}),`
`,i.jsxs(n.p,{children:["Поэтому колонка с фильтром и сортировкой не сожмётся так же узко, как колонка без них, а на большой строке минимум выше, чем на малой. Свой ",i.jsx(n.code,{children:"minWidth"})," колонки может только поднять эту границу: значение меньше автоматического минимума не действует. Фиксированный ",i.jsx(n.code,{children:"width"})," меньше минимума тоже поднимается до него."]}),`
`,i.jsx(n.p,{children:"Если название колонки всё же не помещается, оно сжимается до первой буквы с многоточием, а полное название показывается в тултипе."}),`
`,i.jsx(n.h2,{id:"глобальные-ограничения",children:"Глобальные ограничения"}),`
`,i.jsxs(n.p,{children:["В ",i.jsx(n.code,{children:"tableConfig"})," можно задать ограничения по умолчанию для всех колонок:"]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    minColumnWidth: 80,
    maxColumnWidth: 600,
    maxColumnAutoWidth: 400,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,i.jsxs(n.p,{children:["Если у конкретной колонки задано своё значение (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),"), оно перебивает глобальное."]}),`
`,i.jsxs(n.p,{children:["Глобальный ",i.jsx(n.code,{children:"minColumnWidth"})," на колонки с данными сейчас не действует: у каждой такой колонки минимум всегда считается по содержимому шапки, и он приоритетнее. Параметр влияет только на служебные колонки."]}),`
`,i.jsx(n.h2,{id:"приоритеты",children:"Приоритеты"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Колоночные значения (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),") приоритетнее глобальных из ",i.jsx(n.code,{children:"tableConfig"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"minWidth"})," не может быть ниже автоматического минимума по содержимому шапки"]}),`
`,i.jsxs(n.li,{children:["Если ",i.jsx(n.code,{children:"minWidth"})," больше ",i.jsx(n.code,{children:"maxWidth"}),", приоритет у ",i.jsx(n.code,{children:"minWidth"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," не влияет на ручной ресайз — пользователь всегда может растянуть колонку шире"]}),`
`]}),`
`,i.jsxs(n.p,{children:["Полная типизация колонок: ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-columnconfig--docs",children:"columnConfig API"}),"."]}),`
`,i.jsx(h,{})]})}function ei(d={}){const{wrapper:n}={...o(),...d.components};return n?i.jsx(n,{...d,children:i.jsx(e,{...d})}):e(d)}export{ei as default};
