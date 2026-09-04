import{j as e}from"./react-D2T61mpp.js";import{c6 as o,c7 as d,c0 as s}from"./vendor-Ca3Rcr5K.js";import{L as c}from"./LeftPanel.stories-DbOATcDu.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CsOzBWtM.js";import"./LeftPanel-D-THyxRj.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./utils-BOxIorbb.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./TextField-tAExBhVh.js";import"./sharedUtilsInputs-BAoy0P1l.js";import"./AnalyticalWidget-BUa3dXB_.js";import"./IconButton-CYx5m0ft.js";import"./Collapse-bo3y3zGA.js";import"./Widget-Dtus-OL6.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"leftpanel",children:"LeftPanel"}),`
`,e.jsx(n.p,{children:"Выдвижная левая панель с анимацией открытия/закрытия и поддержкой ресайза."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Анимация сворачивания/разворачивания"}),`
`,e.jsxs(n.li,{children:["Ресайз через разделитель (",e.jsx(n.code,{children:"showResizeable"}),")"]}),`
`,e.jsxs(n.li,{children:["Кнопка сворачивания (",e.jsx(n.code,{children:"showToggleButton"}),")"]}),`
`,e.jsx(n.li,{children:"Раздельный контент для развёрнутого и свёрнутого состояний"}),`
`,e.jsxs(n.li,{children:["Управляемые состояния ширины и свёрнутости через пары из ",e.jsx(n.code,{children:"useState"})]}),`
`,e.jsx(n.li,{children:"Настраиваемые min/max ширина"}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Для управления состоянием передайте ",e.jsx(n.code,{children:"collapseState"})," и ",e.jsx(n.code,{children:"widthState"})," — пары ",e.jsx(n.code,{children:"[value, setter]"})," из ",e.jsx(n.code,{children:"useState"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"expandedContent"})," отображается в развёрнутом состоянии, ",e.jsx(n.code,{children:"collapsedContent"})," — в свёрнутом"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"collapsedFooterContent"})," — дополнительный футер для свёрнутого состояния"]}),`
`,e.jsxs(n.li,{children:["Слоты ",e.jsx(n.code,{children:"expandedContent"}),", ",e.jsx(n.code,{children:"collapsedContent"})," и ",e.jsx(n.code,{children:"collapsedFooterContent"})," принимают ",e.jsx(n.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(n.li,{children:["По умолчанию адаптив на viewport ",e.jsx(n.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(n.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование-адаптивных-слотов",children:"Использование адаптивных слотов"}),`
`,e.jsxs(n.p,{children:["Если слот не должен менять размеры, передавайте обычный ",e.jsx(n.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LeftPanel
  expandedContent={<Widget />}
  collapsedContent={<IconButton size="s" view="secondary" />}
/>
`})}),`
`,e.jsxs(n.p,{children:["Если внутри слота есть Button, IconButton, TextFieldSearch или Segment, которые должны уменьшаться на 1280px, передавайте callback и используйте ",e.jsx(n.code,{children:"buttonSize"})," из аргумента:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LeftPanel
  expandedContent={({ buttonSize }) => (
    <Widget>
      <Widget.Header
        bottomBlock={
          <>
            <TextFieldSearch size={buttonSize} />
            <SegmentGroup size={buttonSize}>
              <SegmentItem size={buttonSize} label="Label" value="label" />
            </SegmentGroup>
          </>
        }
      />
      <Widget.Footer>
        <Button size={buttonSize} view="secondary">
          Действие
        </Button>
      </Widget.Footer>
    </Widget>
  )}
  collapsedContent={({ buttonSize }) => (
    <IconButton size={buttonSize} view="secondary" />
  )}
/>
`})}),`
`,e.jsx(n.p,{children:"Размер, который приходит в callback:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`buttonSize
| viewport <= 1280px | viewport > 1280px |
| xs                 | s                 |
`})}),`
`,e.jsx(n.p,{children:"Дефолтная ширина свёрнутой панели:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`collapsed width
| viewport <= 1280px  | viewport > 1280px |
| 56px                | 72px              |
`})}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-leftpanel-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function M(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
