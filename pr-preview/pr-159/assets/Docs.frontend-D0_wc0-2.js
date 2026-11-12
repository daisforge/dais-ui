import{j as t}from"./react-D2T61mpp.js";import{cg as o,ch as i}from"./vendor-qc-3jPn0.js";import{T as p}from"./TableContract.stories-B26tQwAa.js";import"./react-is-Clcustum.js";import"./styled-components-fZZISu-E.js";import"./@tanstack/react-virtual-cDSTPgpS.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-D1L8JGjy.js";import"./tableData-DVJFoYoT.js";import"./TableContract-CA60p-iT.js";import"./ModalDFConfirmation-DdwjM3wX.js";import"./ModalDF-DavkBvL7.js";import"./@salutejs/sdds-finai-D1xekEXv.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-CfT1Hno-.js";import"./constants-ChwOYBdp.js";import"./IconButton-C7vIwJL1.js";import"./utils-BZEVkRCf.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CTzYqpSx.js";import"./Container-l-S2_Vf0.js";import"./Table-C280hpp2.js";import"./FiltersActions-BnZbuhdn.js";import"./TextField-COil20QB.js";import"./sharedUtilsInputs-CqBI3x81.js";import"./AiAgentPopup-DMxRNqnm.js";import"./TextArea-CKpv2CXk.js";import"./sharedUtilsResizable-BZiwV9dn.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CkUrJuHd.js";import"./react-data-grid-CNbViKFW.js";import"./TableTabs-D79cyaX_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-n_rkjHnk.js";import"./@glideappsfinal/glide-data-grid-B-1CjMCn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cqbiwema.js";import"./ListOfFilters-BhzbP0P2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-S5rrm-jj.js";import"./EmptyState-BLWKmdtS.js";import"./MassActions-CXeHQUg5.js";import"./Autocomplete-DR4dqk8a.js";import"./swr-B3xP7F6p.js";import"./ErrorPage-B_e2_Jo1.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
`})})]})}function Y(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n(e)}export{Y as default};
