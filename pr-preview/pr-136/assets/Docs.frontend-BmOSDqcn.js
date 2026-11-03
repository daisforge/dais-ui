import{j as t}from"./react-D2T61mpp.js";import{cf as o,cg as i}from"./vendor-DmlXfB6n.js";import{T as p}from"./TableContract.stories-CQKhOLFv.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-BRN6XeDo.js";import"./tableData-DVJFoYoT.js";import"./TableContract-BLb8W3wo.js";import"./ModalDFConfirmation-C_4gEMwZ.js";import"./ModalDF-KxLB-ZMV.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./constants-DatVHdkd.js";import"./Container-BKCTDnST.js";import"./utils-DhqjlIh0.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D80y1dEe.js";import"./Table-h0-D2Tt9.js";import"./FiltersActions-D7ulEwmq.js";import"./IconButton-DLyedcFD.js";import"./TextField-vxl-Jjhw.js";import"./sharedUtilsInputs-CwM3__75.js";import"./AiAgentPopup-Bl4KtSk9.js";import"./TextArea-Y8LnrVXd.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CN2ZERsM.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CA7NyeH4.js";import"./@glideappsfinal/glide-data-grid-i1CjBqYe.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-8EfaFzx1.js";import"./ListOfFilters-CppFxg79.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bldzj9z3.js";import"./EmptyState-BOgLPoJ0.js";import"./MassActions-GCYny9Rg.js";import"./Autocomplete-DuBrk1uu.js";import"./swr-CeWMejyk.js";import"./ErrorPage-BMCHDMzQ.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
`,t.jsx(r.h1,{id:"tablecontract",children:"TableContract"}),`
`,t.jsx(r.p,{children:`Стилизованный в рамках дизайн-системы компонент Table c возможностью конфигурации отображения полностью на бэкенд-е.
Имеет возможность гибко настраивать отображаемый вид.`}),`
`,t.jsx(r.h3,{id:"инструкция-по-использованию",children:"Инструкция по использованию:"}),`
`,t.jsxs(r.ol,{children:[`
`,t.jsxs(r.li,{children:["(Если еще не сделано) Установить в проект пакет библиотеки, тему глобально по (",t.jsx(r.a,{href:"http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/?path=/docs/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--docs",rel:"nofollow",children:"инструкции"}),")."]}),`
`,t.jsx(r.li,{children:"Создать fetcher-функцию."}),`
`,t.jsx(r.li,{children:"Разместить компонент в нужной части страницы, передать fetcher-функцию."}),`
`]}),`
`,t.jsx(r.h3,{id:"пример-реализации",children:"Пример реализации:"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-tsx",children:`import { TableContract, type FetcherFunc } from '@daisforge/ui';

// 1) создать fetcher-функцию
const fetcher: FetcherFunc = async ({ params, ...rest }) =>
  fetch(\`\${STATIC_ENDPOINT}\${params ? \`?\${params}\` : ''}\`, rest).then((res) =>
    res.json(),
  );

function Page() {
  return (
    <div className="page-layout">
      <h2 className="page-title">Заголовок страницы</h2>
      {/* 2) Разместить компонент в нужной части страницы, передать
      fetcher-функцию */}
      <TableContract fetcher={fetcher} />
    </div>
  );
}
`})}),`
`,t.jsx(r.h3,{id:"описание-типа-fetcherfunc",children:"Описание типа FetcherFunc:"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-typescript",children:`export type FetcherFunc = (p: {
  /**
   * params - query параметры запроса, которые будут изменяться самой таблицей
   * в зависимости от того, какие фичи активированы.
   */
  params?: string;
  /**
   * method - метод запроса. Его тип основан на типе HTTP fetch.method.
   * Будет использоваться преимущественно GET.
   * @example GET | POST | PUT | PATCH | DELETE
   */
  method?: RequestInit['method'];
  /**
   * body - передаваемая полезная информация. Его тип основан на типе HTTP fetch.body.
   */
  body?: RequestInit['body'];
}) => ContractResponse | Promise<ContractResponse>;
`})})]})}function W(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n(e)}export{W as default};
