import{j as e}from"./react-D2T61mpp.js";import{c4 as l,c5 as c,b_ as o}from"./vendor-CwjClrU-.js";import{B as s}from"./BlockTitle.stories-BUarEc4r.js";import"./react-is-Clcustum.js";import"./styled-components-CdU5JEL5.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./BlockTitle-CMzoubw9.js";import"./Box-BsCGp3nZ.js";import"./AnalyticalWidget-zjTAyJjp.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/sdds-finai-D4ztozMT.js";import"./utils-ej044pNs.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./IconButton-B2gQmpxE.js";import"./@salutejs/plasma-icons-BiMarbkF.js";import"./Collapse-Bk3Aw7RD.js";import"./LeftPanel-B2Wo6AUe.js";import"./Widget-BhXCuNgo.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Docs"}),`
`,e.jsx(n.h1,{id:"blocktitle",children:"BlockTitle"}),`
`,e.jsx(n.p,{children:"Компонент заголовка блока с поддержкой слотов для дополнительных элементов и кнопки «назад»."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Настраиваемый размер заголовка через вариант типографики (",e.jsx(n.code,{children:"titleSize"}),")"]}),`
`,e.jsxs(n.li,{children:["Описание под заголовком (",e.jsx(n.code,{children:"description"}),")"]}),`
`,e.jsxs(n.li,{children:["Слоты: ",e.jsx(n.code,{children:"titleLeftSlot"}),", ",e.jsx(n.code,{children:"titleRightSlot"}),", ",e.jsx(n.code,{children:"topSlot"}),", ",e.jsx(n.code,{children:"rightSlot"})]}),`
`,e.jsxs(n.li,{children:["Кнопка «назад» через ",e.jsx(n.code,{children:"onBackButtonClick"})]}),`
`,e.jsxs(n.li,{children:["Кастомизация контейнера через ",e.jsx(n.code,{children:"containerProps"})," (Box с ",e.jsx(n.code,{children:"$css"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Компонент можно стилизовать: обернув в ",e.jsx(n.code,{children:"styled"}),", используя ",e.jsx(n.code,{children:"$css"})," в ",e.jsx(n.code,{children:"containerProps"}),", или используя объект ",e.jsx(n.code,{children:"blockTitleClassNames"})," для обращения к подэлементам"]}),`
`,e.jsxs(n.li,{children:["Слоты ",e.jsx(n.code,{children:"titleLeftSlot"}),", ",e.jsx(n.code,{children:"titleRightSlot"}),", ",e.jsx(n.code,{children:"topSlot"}),", ",e.jsx(n.code,{children:"rightSlot"})," принимают ",e.jsx(n.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(n.li,{children:["По умолчанию адаптив на viewport ",e.jsx(n.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(n.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование-адаптивных-слотов",children:"Использование адаптивных слотов"}),`
`,e.jsxs(n.p,{children:["Если слот не должен менять размеры, передавайте обычный ",e.jsx(n.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BlockTitle title="Title" titleRightSlot={<IconPlasma size="s" />} />
`})}),`
`,e.jsx(n.p,{children:"Если в слоте есть иконка, Badge или кнопки, передавайте callback и используйте размеры из аргумента:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BlockTitle
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
`,e.jsx(n.p,{children:"Размеры, которые приходят в callback (в зависимости от viewport):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`| Поле                                         | <= 1280px | > 1280px |
| -------------------------------------------- | --------- | -------- |
| buttonSize                                   | xs        | s        |
| actionIconSize                               | xs        | s        |
| titleIconSize (для H4/H5)                    | xs        | s        |
| titleBadgeSize (для H4/H5)                   | s         | m        |
| titleIconSize (для остальных)                | s         | s        |
| titleBadgeSize (для остальных)               | m         | m        |
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-blocktitle-api--docs",children:"BlockTitle API"})]}),`
`]}),`
`,e.jsx(o,{})]})}function C(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{C as default};
