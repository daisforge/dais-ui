import{j as t}from"./react-D2T61mpp.js";import{cf as o,cg as i}from"./vendor-B_4HYhc7.js";import{T as p}from"./TableContract.stories-DGwTd-9W.js";import"./react-is-Clcustum.js";import"./styled-components-ouObhINl.js";import"./@tanstack/react-virtual-CE-19ytw.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-Dx-nqHqH.js";import"./tableData-DVJFoYoT.js";import"./TableContract-BWSku9cD.js";import"./ModalDFConfirmation-Dx36f44C.js";import"./ModalDF-D2C5x7mE.js";import"./@salutejs/sdds-finai-TCjL4Z2W.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./@salutejs/plasma-icons-CIq0u5Dl.js";import"./constants-CUAU9RhA.js";import"./Container-7IOm0w0A.js";import"./utils-D44Kgftq.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DWEALaeF.js";import"./Table-BBtd5LAh.js";import"./FiltersActions-BWlFKlXZ.js";import"./IconButton-7hiUSILU.js";import"./TextField-C-XntaTZ.js";import"./sharedUtilsInputs-CFf5mopW.js";import"./AiAgentPopup-BZhxewmV.js";import"./TextArea-BFMWdmJf.js";import"./sharedUtilsResizable-BUJ8zcRl.js";import"./Collapse-B5wk63HI.js";import"./react-data-grid-4GcFAa9Q.js";import"./TableTabs-Bhs-ucb7.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B_-BnE-y.js";import"./@glideappsfinal/glide-data-grid-GuYPfrbc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BV5BLS2m.js";import"./ListOfFilters-Be9eUEGC.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CIpqoF1s.js";import"./EmptyState-ywfnPcWp.js";import"./MassActions-fHpeQgcH.js";import"./Autocomplete-DFGSHODx.js";import"./swr-DgEVBfwK.js";import"./ErrorPage-2chbbO0g.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
