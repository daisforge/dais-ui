import{j as t}from"./react-D2T61mpp.js";import{cg as o,ch as i}from"./vendor-BKzBKp-G.js";import{T as c}from"./TableContract.stories-Bv3I5BpU.js";import"./react-is-Clcustum.js";import"./styled-components-B0QSSFGC.js";import"./@tanstack/react-virtual-yxDq1gd0.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-Cp0aAGeO.js";import"./tableData-UCfjiBCh.js";import"./TableContract-qLhbtHp7.js";import"./ModalDFConfirmation-nMMAcZl-.js";import"./ModalDF-CecaQKmI.js";import"./@salutejs/sdds-finai-Dt-uBSnb.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./@salutejs/plasma-icons-CASXnT9E.js";import"./constants-Ci5uyz-N.js";import"./Container-BlktM5dT.js";import"./utils-DryTuyeA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-cM6oiJLU.js";import"./Table-Dc-6FW5x.js";import"./FiltersActions-D8H2yrCS.js";import"./IconButton-D7rFhGwi.js";import"./TextField-DLx88NRH.js";import"./sharedUtilsInputs-CydhYski.js";import"./AnalyticalWidget-D639izQ-.js";import"./Collapse-VP6s-DVe.js";import"./react-data-grid-at35Z1Ou.js";import"./TableTabs-CnwRaqs5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C6t7MqEJ.js";import"./ListOfFilters-BKVXVFhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTyZAsLJ.js";import"./EmptyState-BIS3MJyj.js";import"./MassActions-B5B7bNv0.js";import"./Autocomplete-BccisocP.js";import"./swr-DCZU6gTa.js";import"./ErrorPage-D1gpeagH.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c,name:"Docs for frontend"}),`
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
