import{j as t}from"./react-Ch9mc9Aq.js";import{da as o,db as i}from"./vendor-cmvNg_xr.js";import{T as p}from"./TableContract.stories-C6OkSJ0e.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-D5MvBPh5.js";import"./@tanstack/react-virtual-CWj59MZE.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-C9FwmZBS.js";import"./tableData-DVJFoYoT.js";import"./TableContract-CG_VjZB8.js";import"./ModalDFConfirmation-CtlC8xg_.js";import"./ModalDF-DFmcO-Be.js";import"./@salutejs/sdds-finai-CEPim1an.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./@salutejs/plasma-icons-CXjNGeWd.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./IconButton-Ci8npbZD.js";import"./utils-DqvTlrYy.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CuZNjBju.js";import"./Container-DHu9gqjG.js";import"./Table-BBFvPWgJ.js";import"./FiltersActions-kUc7uIEk.js";import"./TextField-C9YSau6k.js";import"./sharedUtilsInputs-Dc_ZEKpI.js";import"./AiAgentPopup-CBRZHYTN.js";import"./TextArea-CZ-SJBPH.js";import"./sharedUtilsResizable-ADoD9nRJ.js";import"./Collapse-B646xElm.js";import"./react-data-grid-DmYcaFlw.js";import"./TableTabs-BDRUMUlr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C8rFrP_I.js";import"./@glideappsfinal/glide-data-grid-CDZjoQw8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3anirXXN.js";import"./ListOfFilters-DzjjBcWt.js";import"./lodash.isequal-DQmZHUWu.js";import"./NumberFormat-BE3whBbA.js";import"./EmptyState-Ch15w3Sj.js";import"./MassActions-B7plPpId.js";import"./Autocomplete-D2V0L8mw.js";import"./swr-DPh1kX5l.js";import"./ErrorPage-Bh17asus.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
