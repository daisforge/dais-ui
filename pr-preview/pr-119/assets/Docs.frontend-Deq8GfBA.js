import{j as t}from"./react-D2T61mpp.js";import{cf as o,cg as i}from"./vendor-Dyxex4G2.js";import{T as p}from"./TableContract.stories-C-8dmdoJ.js";import"./react-is-Clcustum.js";import"./styled-components-6RO4idrj.js";import"./@tanstack/react-virtual-1rhIG8s3.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-CRG-F9e9.js";import"./tableData-DVJFoYoT.js";import"./TableContract-C2cvHrrT.js";import"./ModalDFConfirmation-BN-gQZ4K.js";import"./ModalDF-B_QVTOFg.js";import"./@salutejs/sdds-finai-BYfzdLjN.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./@salutejs/plasma-icons-BD2BLRHB.js";import"./constants-CUAU9RhA.js";import"./Container-DPcTDN-6.js";import"./utils-BljJKfDf.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_u9fLc1.js";import"./Table-DMsl_asr.js";import"./FiltersActions-fVDuaCL0.js";import"./IconButton-Ddh-5EVO.js";import"./TextField-BHN1wQJv.js";import"./sharedUtilsInputs-DWNMqfjd.js";import"./AiAgentPopup-CA7ltgC_.js";import"./TextArea-B5ga9leA.js";import"./sharedUtilsResizable-B3T8qHbg.js";import"./Collapse-Bfwy5CbO.js";import"./react-data-grid-BxN3VegY.js";import"./TableTabs-DiK6S-8p.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cq7o-sTL.js";import"./@glideappsfinal/glide-data-grid-CXZvspA6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DtgT8M4N.js";import"./ListOfFilters-CzZyLocN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DeYAKL_F.js";import"./EmptyState-Jp9ecwfB.js";import"./MassActions-CtXp3uUT.js";import"./Autocomplete-8jMU0-ZO.js";import"./swr-RUJYpbgA.js";import"./ErrorPage-CZler-gG.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
