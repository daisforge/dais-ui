import{j as t}from"./react-D2T61mpp.js";import{cg as o,ch as i}from"./vendor-CP-3LOhZ.js";import{T as p}from"./TableContract.stories-BKlC2ipf.js";import"./react-is-Clcustum.js";import"./styled-components-F9gNCmp7.js";import"./@tanstack/react-virtual-CXQI6dVw.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-Dp1T34mt.js";import"./tableData-DVJFoYoT.js";import"./TableContract-B4GemZRq.js";import"./ModalDFConfirmation-C9xmwGic.js";import"./ModalDF-B24FXDXs.js";import"./@salutejs/sdds-finai-Cr_C_vUG.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./@salutejs/plasma-icons-Fhv4Zogl.js";import"./constants-AGfDpPJ5.js";import"./IconButton-CF2zTq_R.js";import"./utils-ZMH-4y9w.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CPPJXK5A.js";import"./Container-Jrq8Kj6U.js";import"./Table-fDyFR8C3.js";import"./FiltersActions-BARjbImM.js";import"./TextField-vEgfIkTh.js";import"./sharedUtilsInputs-CB08XKuU.js";import"./AiAgentPopup-BFJ5tdao.js";import"./TextArea-CLwnt6tj.js";import"./sharedUtilsResizable-Di_quycW.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CUbswjLS.js";import"./react-data-grid-DJBfHfZO.js";import"./TableTabs-34bcTQnH.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-poitIDmC.js";import"./@glideappsfinal/glide-data-grid-DlTxrVjE.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3WAeSy7K.js";import"./ListOfFilters-gDKj_046.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-bvrK9PkM.js";import"./EmptyState-BvRtTeiw.js";import"./MassActions-BW2K9Iec.js";import"./Autocomplete-CDigUiLB.js";import"./swr-BVxCeSG3.js";import"./ErrorPage-Cl5zi4S_.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
