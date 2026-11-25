import{j as i}from"./react-UEdzNlUe.js";import{dd as t}from"./vendor-DX-rrd2O.js";import{M as s,S as d}from"./WithTooltip-KJL26V4Q-D5fxXK89.js";import{S as o}from"./SplitView.stories-DIDKmhO5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./tableData-DKA5H0bF.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-CEKYUtej.js";import"./utils-BfZGf093.js";import"./constants-Des9Datc.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-CanV5ToM.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./@salutejs/plasma-icons-CeiXuCrU.js";import"./Container-DyTrYN3M.js";import"./Box-3Z-m9LhI.js";import"./Table-CS_iWnBf.js";import"./Switch-OG9YqfkE.js";import"./Collapse-DxXZ8FX5.js";import"./react-data-grid-RlxbDazV.js";import"./TableTabs-DBOUXlBv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Cf77z9HZ.js";import"./@daisforge/glide-data-grid-N2Dj0dEl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DoQyoKyE.js";import"./TextField-22C63cj3.js";import"./sharedUtilsInputs-CDfPCB44.js";import"./TypographyWithAutoTooltip-CSTt0Pjh.js";import"./Typography-CyjBKn0V.js";import"./ListOfFilters-CEDMuRHg.js";import"./FiltersActions-DiIFqwVC.js";import"./IconButton-6UMpEOsj.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-DijUiVv0.js";import"./EmptyState-C6cgbOX4.js";import"./unidentified@3x-BjiX_gDg.js";import"./MassActions-BBW27pcG.js";import"./Autocomplete-CVmB8ZQX.js";import"./Widget-Ca-yUabA.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:o,name:"Docs"}),`
`,i.jsx(e.h1,{id:"splitview",children:"SplitView"}),`
`,i.jsx(e.p,{children:"Контейнер с возможностью разделения основного контента и дополнительного в боковом меню."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Resize через разделитель между контентами (зажатие и движение курсора)"}),`
`,i.jsx(e.li,{children:"Полноэкранный режим для sidebar"}),`
`,i.jsx(e.li,{children:"Скрытие sidebar полностью"}),`
`,i.jsx(e.li,{children:"Гибкая настройка ширины sidebar в процентах и пикселях"}),`
`,i.jsxs(e.li,{children:["Колбек ",i.jsx(e.code,{children:"onResize"})," для отслеживания размеров"]}),`
`]}),`
`,i.jsx(e.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--main-width"})," — ширина основного блока"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--separator-width"})," — ширина разделителя"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--sidebar-width"})," — ширина sidebar"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--sidebar-width-in-px"})," — ширина sidebar в пикселях"]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Объект ",i.jsx(e.code,{children:"splitViewClassNames"})," доступен для импорта. Включает классы: ",i.jsx(e.code,{children:"container"}),", ",i.jsx(e.code,{children:"separator"}),", ",i.jsx(e.code,{children:"separatorButton"}),", ",i.jsx(e.code,{children:"mainBlock"}),", ",i.jsx(e.code,{children:"sidebarBlock"})," и другие"]}),`
`,i.jsx(e.li,{children:"Как контентный заполнитель для sidebar рекомендуется использовать компонент Widget с его compound-компонентами"}),`
`,i.jsxs(e.li,{children:["При использовании внутри PageLayout установите ",i.jsx(e.code,{children:"insidePageLayout={true}"})]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"sidebar.content"})," принимает ",i.jsx(e.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,i.jsxs(e.li,{children:["По умолчанию адаптив на viewport ",i.jsx(e.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",i.jsx(e.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,i.jsx(e.h2,{id:"использование-адаптивного-sidebarcontent",children:"Использование адаптивного sidebar.content"}),`
`,i.jsxs(e.p,{children:["Если контент sidebar не должен менять размеры, передавайте обычный ",i.jsx(e.code,{children:"ReactNode"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<SplitView
  mainContent={<Content />}
  sidebar={{
    isOpened: true,
    content: <Widget />,
  }}
/>
`})}),`
`,i.jsxs(e.p,{children:["Если внутри sidebar есть Avatar, который должен уменьшаться на 1280px, передавайте callback и используйте ",i.jsx(e.code,{children:"avatarSize"})," из аргумента:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<SplitView
  mainContent={<Content />}
  sidebar={{
    isOpened: true,
    content: ({ avatarSize }) => (
      <Widget>
        <Widget.Header
          title="Заголовок"
          titleLeftSlot={<Avatar size={avatarSize} name="User" />}
        />
      </Widget>
    ),
  }}
/>
`})}),`
`,i.jsx(e.p,{children:"Размер, который приходит в callback:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`avatarSize
| viewport <= 1280px  | viewport > 1280px |
| m                   | l                 |
`})}),`
`,i.jsx(e.p,{children:"Дефолтный min-width sidebar:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`sidebar min-width
| viewport <= 1280px | viewport > 1280px |
| 440px              | 600px             |
`})}),`
`,i.jsxs(e.p,{children:["Описание типов — в разделе ",i.jsx(e.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-splitview-api--docs",children:"API"}),"."]}),`
`,i.jsx(d,{})]})}function oi(n={}){const{wrapper:e}={...t(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{oi as default};
