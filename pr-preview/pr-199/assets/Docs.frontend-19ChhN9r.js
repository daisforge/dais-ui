import{j as t}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-2C5_55Sm.js";import{M as i}from"./WithTooltip-KJL26V4Q-BF3u1lCM.js";import{T as m}from"./TableContract.stories-wS0EiX8X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./preload-helper-CZSX44HQ.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./subRows.routes-VDc9uZmb.js";import"./tableData-DKA5H0bF.js";import"./TableContract-DTUbtOQI.js";import"./ModalDFConfirmation-7iFFeGx9.js";import"./ModalDF-DOn7WlJ2.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./constants-Des9Datc.js";import"./Container-SyT9KcgF.js";import"./utils-C_hbAdEU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BOi9y4XS.js";import"./Table-DmgNHxje.js";import"./Switch-DFPex1Sn.js";import"./Collapse-x0oUGUsB.js";import"./react-data-grid-BbizCO0_.js";import"./TableTabs-D50d6bjv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-49WcSE6j.js";import"./@daisforge/glide-data-grid-BJ4Aa3YT.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DVq71_y6.js";import"./TextField-C3soC6iE.js";import"./sharedUtilsInputs-ClkwfHQU.js";import"./TypographyWithAutoTooltip-CjmFlsPI.js";import"./Typography-B9B0TAuB.js";import"./ListOfFilters-BXR-FESh.js";import"./FiltersActions-GRRqYmwA.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-nc4UMpNq.js";import"./EmptyState-D6V-mWG6.js";import"./unidentified@3x-C9E9sVoM.js";import"./MassActions-BsNW0YeI.js";import"./Autocomplete-DWI5pJkD.js";import"./swr-D1xn44wb.js";import"./ErrorPage-Cq1_pxML.js";function o(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m,name:"Docs for frontend"}),`
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
`})})]})}function pt(e={}){const{wrapper:r}={...n(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(o,{...e})}):o(e)}export{pt as default};
