import{j as e}from"./react-D2T61mpp.js";import{cf as t,cg as r,c9 as s}from"./vendor-B_4HYhc7.js";import{B as c}from"./TableCanvas.bottomSheet.stories-BlD3w5bW.js";import"./react-is-Clcustum.js";import"./styled-components-ouObhINl.js";import"./@tanstack/react-virtual-CE-19ytw.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-BeVJ3j7w.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cvg1gFqP.js";import"./FiltersActions-BWlFKlXZ.js";import"./IconButton-7hiUSILU.js";import"./@salutejs/plasma-icons-CIq0u5Dl.js";import"./@salutejs/sdds-finai-TCjL4Z2W.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-D44Kgftq.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DWEALaeF.js";import"./TextField-C-XntaTZ.js";import"./sharedUtilsInputs-CFf5mopW.js";import"./AiAgentPopup-BZhxewmV.js";import"./TextArea-BFMWdmJf.js";import"./sharedUtilsResizable-BUJ8zcRl.js";import"./Table-BBtd5LAh.js";import"./Collapse-B5wk63HI.js";import"./react-data-grid-4GcFAa9Q.js";import"./TableTabs-Bhs-ucb7.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B_-BnE-y.js";import"./@glideappsfinal/glide-data-grid-GuYPfrbc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BV5BLS2m.js";import"./ListOfFilters-Be9eUEGC.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CIpqoF1s.js";import"./EmptyState-ywfnPcWp.js";import"./MassActions-fHpeQgcH.js";import"./Autocomplete-DFGSHODx.js";import"./ErrorPage-2chbbO0g.js";import"./TableCanvas.bottomSheet.example-Cr8g55E5.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"bottomsheet-tablecanvas",children:"BottomSheet (TableCanvas)"}),`
`,e.jsxs(n.p,{children:["Нижняя панель с произвольным React-контентом, например журналом событий. Задаётся через ",e.jsx(n.code,{children:"tableConfig.bottomSheetConfig"})," и располагается под областью данных, над общей пагинацией, между левой и правой боковыми панелями."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"minHeight"})," и ",e.jsx(n.code,{children:"maxHeight"})," принимают число в пикселях или CSS-строку; по умолчанию ",e.jsx(n.code,{children:"height"})," и ",e.jsx(n.code,{children:"minHeight"})," равны 32px."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height: 'auto'"})," подстраивает панель под содержимое, а ",e.jsx(n.code,{children:"maxHeight"})," ограничивает её высоту. При переполнении панель прокручивается."]}),`
`,e.jsx(n.li,{children:"Содержимое, кнопку раскрытия и высоту открытой панели задаёт потребитель."}),`
`,e.jsx(n.li,{children:"Панель работает вместе с Sidebar, пагинацией, выбором строк, массовыми действиями и полноэкранным режимом."}),`
`,e.jsx(n.li,{children:"Collapse скрывает рабочую область и пагинацию, сохраняя размеры и состояние панелей."}),`
`]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useState } from 'react';

function TableWithEventLog() {
  const [height, setHeight] = useState<string | number>(32);

  return (
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
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsx(n.h3,{id:"размеры-и-прокрутка",children:"Размеры и прокрутка"}),`
`,e.jsxs(n.p,{children:["Проценты в ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"minHeight"})," и ",e.jsx(n.code,{children:"maxHeight"})," считаются от пространства, доступного строкам таблицы и BottomSheet. Блок управления, фильтры и пагинация в него не входят. Раскрытие не увеличивает внешний контейнер. Панель оставляет для области данных не менее 120px; если всё доступное пространство меньше 120px, высота панели равна нулю. ",e.jsx(n.code,{children:"maxHeight"})," дополнительно ограничивает высоту, а ",e.jsx(n.code,{children:"minHeight"})," не может превышать получившийся максимум."]}),`
`,e.jsxs(n.p,{children:["Например, при высоте таблицы 620px, блоке управления 40px и пагинации 56px доступно ",e.jsx(n.code,{children:"620 − 40 − 56 = 524px"}),". BottomSheet высотой 220px оставляет для области данных ",e.jsx(n.code,{children:"524 − 220 = 304px"}),"."]}),`
`,e.jsxs(n.p,{children:["Для высоты по содержимому передайте ",e.jsx(n.code,{children:"height: 'auto'"}),". Панель растёт и уменьшается вместе с содержимым, а при достижении ",e.jsx(n.code,{children:"maxHeight"})," или границы доступного пространства прокручивается. Содержимому в этом режиме не задавайте ",e.jsx(n.code,{children:"height: 100%"}),": оно должно сохранять естественную высоту."]}),`
`,e.jsxs(n.p,{children:["При фиксированной высоте прокрутку настраивают внутри ",e.jsx(n.code,{children:"content"}),": задайте прокручиваемому блоку ",e.jsx(n.code,{children:"overflow: auto"})," и ",e.jsx(n.code,{children:"minHeight: 0"}),"."]}),`
`,e.jsx(n.h3,{id:"раскрытие",children:"Раскрытие"}),`
`,e.jsxs(n.p,{children:["Раскрытие задаётся изменением ",e.jsx(n.code,{children:"height"}),", а кнопка раскрытия размещается в ",e.jsx(n.code,{children:"content"}),". Чтобы убрать панель, передайте ",e.jsx(n.code,{children:"enabled: false"})," или удалите ",e.jsx(n.code,{children:"bottomSheetConfig"}),"."]}),`
`,e.jsxs(n.p,{children:["Изменение числовой или процентной высоты анимируется за 0.5 секунды. Плавный переход между фиксированной высотой и ",e.jsx(n.code,{children:"auto"})," поддерживается в современных Chrome/Edge; в других браузерах высота может переключаться сразу. Добавление и удаление содержимого в режиме ",e.jsx(n.code,{children:"auto"})," меняет высоту без отдельной анимации."]}),`
`,e.jsxs(n.p,{children:["Для плавного закрытия сохраняйте содержимое панели при изменении высоты. Не скрывайте его через ",e.jsx(n.code,{children:"hidden"})," и не удаляйте условно. Закрытую часть содержимого исключайте из чтения скринридером через ",e.jsx(n.code,{children:"aria-hidden"})," и из фокуса и взаимодействия через ",e.jsx(n.code,{children:"inert"}),"; кнопка раскрытия должна оставаться доступной."]}),`
`,e.jsx(n.h3,{id:"совместная-работа-с-таблицей",children:"Совместная работа с таблицей"}),`
`,e.jsxs(n.p,{children:["При collapse область данных, обе боковые панели, BottomSheet и пагинация скрываются и исключаются из фокуса. После разворачивания сохраняются активные вкладки и размеры. Поддерживаются положения кнопки ",e.jsx(n.code,{children:"inside"})," и ",e.jsx(n.code,{children:"above"}),", а также полноэкранный режим."]}),`
`,e.jsxs(n.p,{children:["BottomSheet доступен в режиме строк. Error, empty state и skeleton сохраняют панель. Активный ",e.jsx(n.code,{children:"loadingOverlay"})," заменяет всю таблицу вместе с Sidebar, BottomSheet и пагинацией."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Высота, стрелка и пагинация"})," — минимальный пример раскрытия 32 ↔ 220px, высоты 35%, ограничения большой высоты и прокрутки журнала."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Высота по содержимому и maxHeight"})," — раскрытие 32 ↔ ",e.jsx(n.code,{children:"auto"}),", добавление и удаление сообщений, короткий и длинный журнал, ограничение высоты в пикселях и процентах. Переполнение прокручивается на самой панели."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Все возможности таблицы"})," — совместная работа BottomSheet и обеих Sidebar с поиском, фильтрами, сортировкой, редактированием, выбором строк и ячеек, copy/paste/fill, итогами, настройками колонок и представления. Действия записываются в журнал."]}),`
`,e.jsxs(n.p,{children:["В примере можно переключить плоские строки, группировку и дерево ",e.jsx(n.code,{children:"subRows"}),", полный набор данных, страницы по 20 строк и локальную бесконечную загрузку. При группировке доступен только полный набор данных; страницы дерева формируются по верхним узлам."]}),`
`,e.jsxs(n.p,{children:["Редактирование, вставка и заполнение доступны в плоском режиме, группировке со слиянием и дереве ",e.jsx(n.code,{children:"subRows"}),". Группировка деревом и ",e.jsx(n.code,{children:"subRows"})," со слиянием в этом примере доступны для просмотра и копирования."]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-bottomsheet-api--docs",children:"BottomSheet API"}),"."]}),`
`,e.jsx(s,{})]})}function U(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{U as default};
