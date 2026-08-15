import{j as t}from"./react-D2T61mpp.js";import{c2 as o,c3 as i}from"./vendor-C4RvRB9Y.js";import{T as c}from"./TableContract.stories-Dc4wePa2.js";import"./react-is-Clcustum.js";import"./styled-components-DRZWVImu.js";import"./tslib-De9GV7Vy.js";import"./subRows.routes-BqUCYYPc.js";import"./tableData-UCfjiBCh.js";import"./TableContract-DrJ1Lrak.js";import"./ModalDFConfirmation-Ck3hWESz.js";import"./ModalDF-C8qxQvbe.js";import"./@salutejs/sdds-finai-DEWlHYGQ.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/plasma-icons-CVXIcC6c.js";import"./constants-B3b49qmU.js";import"./Container-BQ-1f0hs.js";import"./utils-BZKe53yj.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vq8Q3-WK.js";import"./Table-CcVd51Ex.js";import"./FiltersActions-CeAliSyJ.js";import"./IconButton-DUuS8DE3.js";import"./TextField-OOvhELJT.js";import"./sharedUtilsInputs-_J_Qe5za.js";import"./AnalyticalWidget-CEnZM3OP.js";import"./Collapse-CXHRqKRE.js";import"./react-data-grid-dZcAYnhL.js";import"./TableTabs-DP2cFwdJ.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-qKKeuHem.js";import"./ListOfFilters-CVgvyuFB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAo9Apt7.js";import"./EmptyState-Jej8pens.js";import"./MassActions-_PtZmAgO.js";import"./Autocomplete-BzEdXM5d.js";import"./swr-FMXC01jl.js";import"./ErrorPage-Cqawd0as.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c,name:"Docs for frontend"}),`
`,t.jsx(e.h1,{id:"tablecontract",children:"TableContract"}),`
`,t.jsx(e.p,{children:`Стилизованный в рамках дизайн-системы компонент Table c возможностью конфигурации отображения полностью на бэкенд-е.
Имеет возможность гибко настраивать отображаемый вид.`}),`
`,t.jsx(e.h3,{id:"инструкция-по-использованию",children:"Инструкция по использованию:"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["(Если еще не сделано) Установить в проект пакет библиотеки, тему глобально по (",t.jsx(e.a,{href:"http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/?path=/docs/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--docs",rel:"nofollow",children:"инструкции"}),")."]}),`
`,t.jsx(e.li,{children:"Создать fetcher-функцию."}),`
`,t.jsx(e.li,{children:"Разместить компонент в нужной части страницы, передать fetcher-функцию."}),`
`]}),`
`,t.jsx(e.h3,{id:"пример-реализации",children:"Пример реализации:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { TableContract, type FetcherFunc } from '@daisforge/ui';

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
`,t.jsx(e.h3,{id:"описание-типа-fetcherfunc",children:"Описание типа FetcherFunc:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-typescript",children:`export type FetcherFunc = (p: {
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
`})})]})}function U(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{U as default};
