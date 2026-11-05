import{j as t}from"./react-D2T61mpp.js";import{cg as o,ch as i}from"./vendor-6eBWuSjz.js";import{T as p}from"./TableContract.stories-DQKtaVuM.js";import"./react-is-Clcustum.js";import"./styled-components-BMGTmUgW.js";import"./@tanstack/react-virtual-MDtUeDVT.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-BlESlIMv.js";import"./tableData-DVJFoYoT.js";import"./TableContract-BZ-ZjIHz.js";import"./ModalDFConfirmation-CQD3M3-l.js";import"./ModalDF-BoNbz6Qh.js";import"./@salutejs/sdds-finai-Bq94c94L.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./@salutejs/plasma-icons-DDZ7vpYp.js";import"./constants-AGfDpPJ5.js";import"./IconButton-CVfJD9ZB.js";import"./utils-Mo0b1AE1.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-RIpr-WH3.js";import"./Container-mwHIOMeu.js";import"./Table-Bf5HSUbC.js";import"./FiltersActions-Bxdm0FVh.js";import"./TextField-DdSLBvHq.js";import"./sharedUtilsInputs-D-o7mT-p.js";import"./AiAgentPopup-C4jeVQFo.js";import"./TextArea-D5pq0Nz3.js";import"./sharedUtilsResizable-BHwU7PNv.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DCuD2Q45.js";import"./react-data-grid-C5E-kGD5.js";import"./TableTabs-CPhmfmwG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-5ASflLk_.js";import"./@glideappsfinal/glide-data-grid-BR6y2PD1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DATKPIpc.js";import"./ListOfFilters-CCr_Bcpu.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BS5yTrJL.js";import"./EmptyState-BetWUex8.js";import"./MassActions-pdCHbCDL.js";import"./Autocomplete-B8n71FNk.js";import"./swr-BMXsqcSu.js";import"./ErrorPage-D70C5A0s.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
