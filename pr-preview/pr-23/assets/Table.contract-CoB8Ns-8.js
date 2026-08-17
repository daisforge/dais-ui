import{j as r}from"./react-D2T61mpp.js";import{c2 as T,c3 as w,bY as R}from"./vendor-DvO6Ud8q.js";import{T as E}from"./TableContract-CvHatMvk.js";const O={title:"Локальные компоненты/Table/Contract",tags:["!autodocs"],parameters:{docs:{page:y},screenshot:{skip:!0}},component:E},i=t=>async({params:e,...M})=>fetch(`${t}${e?`?${e}`:""}`,M).then(P=>P.json()),A=i("api/simple"),F=i("api/searching"),X=i("api/sorting"),$=i("api/pagination"),v=i("api/subRows"),n={args:{fetcher:A}},c={args:{fetcher:$}},s={args:{fetcher:F}},a={args:{fetcher:X}},o={args:{fetcher:v}};var l,h,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fetcher: fetcherSimple
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,u,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fetcher: fetcherPagination
  }
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,j,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fetcher: fetcherSearching
  }
}`,...(x=(j=s.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var S,D,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fetcher: fetcherSorting
  }
}`,...(b=(D=a.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var B,_,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fetcher: fetcherSubRows
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const z=["Simple","Pagination","Searching","Sorting","SubRows"],I=Object.freeze(Object.defineProperty({__proto__:null,Pagination:c,Searching:s,Simple:n,Sorting:a,SubRows:o,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...T(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(w,{of:I,name:"Docs",tags:["hideInSidebar"]}),`
`,r.jsx(e.h1,{id:"tablecontract",children:"TableContract"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"TableContract"})," — стилизованный в рамках дизайн-системы компонент Table с возможностью конфигурировать отображение данными с бэкенда."]}),`
`,r.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Отображение данных по contract-response"}),`
`,r.jsx(e.li,{children:"Поиск, пагинация и сортировка"}),`
`,r.jsx(e.li,{children:"Иерархия строк"}),`
`,r.jsx(e.li,{children:"Изменение ширины колонок"}),`
`,r.jsx(e.li,{children:"Полноэкранный режим"}),`
`,r.jsx(e.li,{children:"Итоговые строки"}),`
`]}),`
`,r.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"fetcher"})," получает query-параметры, которые таблица изменяет в зависимости от активированных фичей. Ответ должен содержать ",r.jsx(e.code,{children:"data.main"})," и ",r.jsx(e.code,{children:"meta.columns"}),"; ",r.jsx(e.code,{children:"meta.tableConfig"}),", ",r.jsx(e.code,{children:"data.topSummary"})," и ",r.jsx(e.code,{children:"data.bottomSummary"})," передаются опционально."]}),`
`,r.jsxs(e.p,{children:["Описание типов - в разделе ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-contract-api--docs",children:"API"}),"."]}),`
`,r.jsx(R,{})]})}function y(t={}){const{wrapper:e}={...T(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(d,{...t})}):d(t)}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{I as T,Y as a};
