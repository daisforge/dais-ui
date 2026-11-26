import{j as t}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BS4HA21f.js";import{M as i}from"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import{T as m}from"./TableContract.stories--hfOTSaM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./subRows.routes-CjkOOJyq.js";import"./tableData-DKA5H0bF.js";import"./TableContract-CBIEzb9g.js";import"./ModalDFConfirmation-DXCpI9eb.js";import"./ModalDF-BBOzTqb6.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./constants-YnncqoDz.js";import"./Container-C2hOtj2c.js";import"./utils-BHv61rGQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BL0rBjAw.js";import"./Table-Cf-n1Fri.js";import"./Switch-BuolD6i3.js";import"./Collapse-CC7IlkPv.js";import"./react-data-grid-B8yTbZ7j.js";import"./TableTabs-xSJydO6T.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-D3tdf9Ln.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Typography-COUeQAIi.js";import"./ListOfFilters-X2JO-7Cv.js";import"./FiltersActions-BFYsTofB.js";import"./IconButton-CfYF5BDV.js";import"./Tooltip-Cv5b2n02.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CX_cVg0L.js";import"./NumberFormat-DoznmbgT.js";import"./EmptyState-BQvIQUz-.js";import"./unidentified@3x-B3LEnvq5.js";import"./MassActions-j40wKOEt.js";import"./Autocomplete-DXJoRD1w.js";import"./swr-D4NUkpTZ.js";import"./ErrorPage-CkAVwNCu.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m,name:"Docs for frontend"}),`
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
`})})]})}function nt(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n(e)}export{nt as default};
