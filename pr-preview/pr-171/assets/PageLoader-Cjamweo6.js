import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-_h_CmnQT.js";import{P as d}from"./PageLoader.stories-Mm_aFbh5.js";import"./react-is-Clcustum.js";import"./styled-components-D7_wlBS0.js";import"./@tanstack/react-virtual-CcuGNpaY.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CD7Aw3Vn.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/sdds-finai-DVA7rxuT.js";import"./PageTitle-BVqcW-HS.js";import"./AiAgentPopup-BrRWR15N.js";import"./utils-Bn7MlwCC.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextArea-Dnzmn0hS.js";import"./sharedUtilsInputs-C8WGQWoK.js";import"./@salutejs/plasma-icons-DqqhxnUT.js";import"./sharedUtilsResizable-Cd1FcKHo.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./TextField-Cl3BpbLe.js";function r(n){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d,name:"Docs"}),`
`,e.jsx(o.h1,{id:"pageloader",children:"PageLoader"}),`
`,e.jsxs(o.p,{children:[`Оверлей загрузки области контента страницы. Размещайте заголовок и навигацию снаружи
`,e.jsx(o.code,{children:"PageLoader"}),", чтобы они оставались видимыми и доступными между переходами."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"active"})," показывает оверлей. Контент в ",e.jsx(o.code,{children:"children"}),` всегда остаётся смонтированным:
значения полей и локальное состояние сохраняются. Во время загрузки контент получает
`,e.jsx(o.code,{children:"inert"})," и ",e.jsx(o.code,{children:"aria-hidden"}),`, а фокус внутри него сбрасывается. Оверлей сообщает о загрузке
через `,e.jsx(o.code,{children:'role="status"'}),", контейнер — через ",e.jsx(o.code,{children:"aria-busy"}),"."]}),`
`,e.jsxs(o.p,{children:[`Спиннер имеет размер 36×36 px, заголовок использует H3 Bold, описание — BodyM
и цвет secondary. Отступы: 8 px после спиннера и 4 px перед описанием.
Описание видно сразу; `,e.jsx(o.code,{children:"subtitle={null}"})," или ",e.jsx(o.code,{children:'subtitle=""'})," скрывает его."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Box, PageLoader, PageTitle } from '@daisforge/ui';

<Box display="flex" flexDirection="column" minHeight="480px" gap="24px">
  <PageTitle title="Отчёты" />
  <PageLoader active={isLoading}>
    <Reports />
  </PageLoader>
</Box>;
`})}),`
`,e.jsxs(o.p,{children:["Размер области задаёт приложение через родительский layout, ",e.jsx(o.code,{children:"style"}),", ",e.jsx(o.code,{children:"className"}),`
или `,e.jsx(o.code,{children:"styled(PageLoader)"}),`. Во flex-колонке компонент занимает свободное место.
Оверлей перекрывает только свою область и использует фон страницы из темы.
Портальные элементы (например, открытая модалка вне контейнера) управляются приложением.`]}),`
`,e.jsxs(o.p,{children:["Описание типов — в разделе ",e.jsx(o.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pageloader-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function A(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{A as default};
