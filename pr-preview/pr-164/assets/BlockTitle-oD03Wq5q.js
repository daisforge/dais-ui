import{j as e}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-qSGXd1Us.js";import{M as l,S as c}from"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import{B as s}from"./BlockTitle.stories-C7gd95g-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./@salutejs/plasma-icons-Bl-ri76g.js";import"./storySourceDoc-tVKyHcEN.js";import"./BlockTitle-DMdwnSSj.js";import"./Box-UVnFPpqO.js";import"./TypographyWithAutoTooltip-_xLnR82b.js";import"./Typography-CJsT5EYe.js";import"./@salutejs/sdds-finai-B4W7VlQo.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-B7_zEzfW.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./LeftPanel-BMRqdiY9.js";import"./Widget-89MIceVG.js";import"./IconButton-D064SFCb.js";function t(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Docs"}),`
`,e.jsx(i.h1,{id:"blocktitle",children:"BlockTitle"}),`
`,e.jsx(i.p,{children:"Компонент заголовка блока с поддержкой слотов для дополнительных элементов и кнопки «назад»."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Настраиваемый размер заголовка через вариант типографики (",e.jsx(i.code,{children:"titleSize"}),")"]}),`
`,e.jsxs(i.li,{children:["Описание под заголовком (",e.jsx(i.code,{children:"description"}),")"]}),`
`,e.jsxs(i.li,{children:["Слоты: ",e.jsx(i.code,{children:"titleLeftSlot"}),", ",e.jsx(i.code,{children:"titleRightSlot"}),", ",e.jsx(i.code,{children:"topSlot"}),", ",e.jsx(i.code,{children:"rightSlot"})]}),`
`,e.jsxs(i.li,{children:["Настройка тултипа обрезанного заголовка (ширина, позиция) через ",e.jsx(i.code,{children:"titleTooltipProps"})]}),`
`,e.jsxs(i.li,{children:["Кнопка «назад» через ",e.jsx(i.code,{children:"onBackButtonClick"})]}),`
`,e.jsxs(i.li,{children:["Кастомизация контейнера через ",e.jsx(i.code,{children:"containerProps"})," (Box с ",e.jsx(i.code,{children:"$css"}),")"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Компонент можно стилизовать: обернув в ",e.jsx(i.code,{children:"styled"}),", используя ",e.jsx(i.code,{children:"$css"})," в ",e.jsx(i.code,{children:"containerProps"}),", или используя объект ",e.jsx(i.code,{children:"blockTitleClassNames"})," для обращения к подэлементам"]}),`
`,e.jsxs(i.li,{children:["Слоты ",e.jsx(i.code,{children:"titleLeftSlot"}),", ",e.jsx(i.code,{children:"titleRightSlot"}),", ",e.jsx(i.code,{children:"topSlot"}),", ",e.jsx(i.code,{children:"rightSlot"})," принимают ",e.jsx(i.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(i.li,{children:["По умолчанию адаптив на viewport ",e.jsx(i.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(i.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"тултип-заголовка",children:"Тултип заголовка"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"title"})," оборачивается в ",e.jsx(i.code,{children:"TypographyWithAutoTooltip"}),": если текст не помещается в две строки, при наведении показывается тултип с полным заголовком. По умолчанию ширина тултипа не ограничена, поэтому длинный заголовок вытягивается в одну строку. Ограничить ширину и задать позицию можно через ",e.jsx(i.code,{children:"titleTooltipProps"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<BlockTitle
  title="Очень длинный заголовок страницы"
  titleTooltipProps={{ maxWidth: '300px', placement: 'bottom-start' }}
/>
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"titleTooltipProps"})," принимает пропсы ",e.jsx(i.code,{children:"Tooltip"})," (кроме ",e.jsx(i.code,{children:"text"}),", ",e.jsx(i.code,{children:"target"}),", ",e.jsx(i.code,{children:"trigger"}),", ",e.jsx(i.code,{children:"opened"}),", которыми управляет сам компонент): ",e.jsx(i.code,{children:"maxWidth"}),", ",e.jsx(i.code,{children:"minWidth"}),", ",e.jsx(i.code,{children:"placement"}),", ",e.jsx(i.code,{children:"view"}),", ",e.jsx(i.code,{children:"offset"}),", ",e.jsx(i.code,{children:"mouseEnterDelay"})," и другие."]}),`
`,e.jsx(i.h2,{id:"использование-адаптивных-слотов",children:"Использование адаптивных слотов"}),`
`,e.jsxs(i.p,{children:["Если слот не должен менять размеры, передавайте обычный ",e.jsx(i.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<BlockTitle title="Title" titleRightSlot={<IconPlasma size="s" />} />
`})}),`
`,e.jsx(i.p,{children:"Если в слоте есть иконка, Badge или кнопки, передавайте callback и используйте размеры из аргумента:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<BlockTitle
  title="Страница"
  titleSize="H4"
  titleRightSlot={({ titleBadgeSize }) => (
    <Badge size={titleBadgeSize} view="default" text="Label" />
  )}
  rightSlot={({ buttonSize, actionIconSize }) => (
    <div style={{ display: 'flex', gap: s.x4 }}>
      <IconButton size={buttonSize} view="secondary">
        <IconDotsVerticalCenteredOutline
          size={actionIconSize}
          color="inherit"
        />
      </IconButton>
      <Button size={buttonSize} view="secondary">
        Label
      </Button>
      <Button size={buttonSize} view="accent">
        Label
      </Button>
    </div>
  )}
/>
`})}),`
`,e.jsx(i.p,{children:"Размеры, которые приходят в callback (в зависимости от viewport):"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`| Поле                                         | <= 1280px | > 1280px |
| -------------------------------------------- | --------- | -------- |
| buttonSize                                   | xs        | s        |
| actionIconSize                               | xs        | s        |
| titleIconSize (для H4/H5)                    | xs        | s        |
| titleBadgeSize (для H4/H5)                   | s         | m        |
| titleIconSize (для остальных)                | s         | s        |
| titleBadgeSize (для остальных)               | m         | m        |
`})}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-blocktitle-api--docs",children:"BlockTitle API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function N(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{N as default};
