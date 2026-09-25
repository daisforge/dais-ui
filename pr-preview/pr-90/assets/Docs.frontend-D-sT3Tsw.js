import{j as t}from"./react-D2T61mpp.js";import{cg as o,ch as i}from"./vendor-DnKKx4bH.js";import{T as c}from"./TableContract.stories-Dwc04qBD.js";import"./react-is-Clcustum.js";import"./styled-components-C073gJi0.js";import"./@tanstack/react-virtual-B5-u2qiU.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-2nmzxfTZ.js";import"./tableData-DVJFoYoT.js";import"./TableContract-BB3nEeUq.js";import"./ModalDFConfirmation-MZt3rhM1.js";import"./ModalDF-Dx3oL5eG.js";import"./@salutejs/sdds-finai-C-BS5BDf.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./@salutejs/plasma-icons-Rw5fh_oL.js";import"./constants-Ci5uyz-N.js";import"./Container-DPYrqgAL.js";import"./utils-DRSpp9Bp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-b0oKlQLU.js";import"./Table-C-eKP1Ax.js";import"./FiltersActions-DBXrn3j3.js";import"./IconButton-oJL-bVR-.js";import"./TextField-CgsMQ_fz.js";import"./sharedUtilsInputs-CjipMgcW.js";import"./AnalyticalWidget-DINBEyFe.js";import"./Collapse-C6pDB8Nq.js";import"./react-data-grid-CCvc9oWK.js";import"./TableTabs-C_1qx54X.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-D8_fgEYR.js";import"./ListOfFilters-BHZnh67Q.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1N2i35g.js";import"./EmptyState-Br3rrfw-.js";import"./MassActions-DZVwPVpR.js";import"./Autocomplete-Xo0gWHsM.js";import"./swr-C9Xcqh3a.js";import"./ErrorPage-DlCFxk90.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c,name:"Docs for frontend"}),`
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
`})})]})}function z(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{z as default};
