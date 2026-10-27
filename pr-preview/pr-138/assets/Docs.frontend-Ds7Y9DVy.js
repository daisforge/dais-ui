import{j as t}from"./react-D2T61mpp.js";import{cf as o,cg as i}from"./vendor-7aqy_xTb.js";import{T as p}from"./TableContract.stories-KmBb9tf0.js";import"./react-is-Clcustum.js";import"./styled-components-CXZSXreE.js";import"./@tanstack/react-virtual-CkODh3sb.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-Bz2HPAOQ.js";import"./tableData-DVJFoYoT.js";import"./TableContract-C6CZew4x.js";import"./ModalDFConfirmation-CopWg3zI.js";import"./ModalDF-C9AwJzLy.js";import"./@salutejs/sdds-finai-DF87wwoG.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/plasma-icons-Bcg6L4LU.js";import"./constants-DatVHdkd.js";import"./Container-3gAraKEd.js";import"./utils-kyY3EeQU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BudS048U.js";import"./Table-DbBi26P4.js";import"./FiltersActions-CDZNoS8u.js";import"./IconButton-BBkNIed4.js";import"./TextField-CDVhm1po.js";import"./sharedUtilsInputs-DuT9JNZO.js";import"./AiAgentPopup-KLmskZvj.js";import"./TextArea-DcWLvEC7.js";import"./sharedUtilsResizable-QyuAbFa-.js";import"./Collapse-KzYV655_.js";import"./react-data-grid-DV7N6h-i.js";import"./TableTabs-D-aNuMZc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-z52-9WJn.js";import"./@glideappsfinal/glide-data-grid-CdWoP9cy.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-tT9L2lKN.js";import"./ListOfFilters-RqmGRGOM.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bf-ywxR8.js";import"./EmptyState-DqWtiGpJ.js";import"./MassActions-BYVdKqbO.js";import"./Autocomplete-2E3Tf95l.js";import"./swr-kbk78hRO.js";import"./ErrorPage-CX7YBCrd.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
