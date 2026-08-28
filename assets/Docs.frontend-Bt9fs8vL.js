import{j as t}from"./react-D2T61mpp.js";import{c4 as o,c5 as i}from"./vendor-DrvHogBM.js";import{T as c}from"./TableContract.stories-BYr0TmHL.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";import"./subRows.routes-B7PfmlUN.js";import"./tableData-UCfjiBCh.js";import"./TableContract-ZgMqXC0P.js";import"./ModalDFConfirmation-BpUKA2eP.js";import"./ModalDF-DoaAMuuX.js";import"./@salutejs/sdds-finai-CDRzBbTc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./@salutejs/plasma-icons-BnddfUBU.js";import"./constants-OzzdGdGS.js";import"./Container-DihuNB0P.js";import"./utils-D_Y70ijK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ChBl0Qym.js";import"./Table-Dq1UNsZq.js";import"./FiltersActions-4RoHiAyT.js";import"./IconButton-D60xgR-Q.js";import"./TextField-by6ErzMv.js";import"./sharedUtilsInputs-dD0rNwly.js";import"./AnalyticalWidget-Wj7S5_Z8.js";import"./Collapse-CZI72KSB.js";import"./react-data-grid-DJzz0yCj.js";import"./TableTabs-Chg9VzPh.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CtjQMxnt.js";import"./ListOfFilters-DGvhrxSe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ByFlNk9E.js";import"./EmptyState-Ct79dYmy.js";import"./MassActions-C5T09h45.js";import"./Autocomplete-CxPSUBup.js";import"./swr-BPB3rRXe.js";import"./ErrorPage-BIkVbSCJ.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c,name:"Docs for frontend"}),`
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
