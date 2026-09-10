import{j as e}from"./react-D2T61mpp.js";import{cc as o,cd as d,c6 as c}from"./vendor-BdLrx4xP.js";import{L as s}from"./LeftPanel.stories-CpNymkK3.js";import"./react-is-Clcustum.js";import"./styled-components-CTUN0MzM.js";import"./@tanstack/react-virtual-fAMsGsuS.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-67kQGb5v.js";import"./LeftPanel-DAQgYNl7.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./@salutejs/sdds-finai-B7AZSacY.js";import"./utils-C6ISqs0d.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-Cg4Kk8KP.js";import"./TextField-BNxqhT5N.js";import"./sharedUtilsInputs-XD5Qbuuu.js";import"./AnalyticalWidget-CjEaycsk.js";import"./IconButton-DDIaO14-.js";import"./Collapse-DOEQGpdO.js";import"./Widget-B53P50iH.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function W(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{W as default};
