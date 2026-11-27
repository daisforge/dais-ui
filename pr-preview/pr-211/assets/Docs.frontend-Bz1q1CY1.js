import{j as t}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BjJ6Dniq.js";import{M as i}from"./WithTooltip-KJL26V4Q-8sW6qWBN.js";import{T as m}from"./TableContract.stories-Dq8saIQt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./subRows.routes-_lzsXBvH.js";import"./tableData-DKA5H0bF.js";import"./TableContract-DMlnAc7Y.js";import"./ModalDFConfirmation-rxYfJ2Px.js";import"./ModalDF-DPh5a9G-.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/plasma-icons-DO9zHrCT.js";import"./constants-YnncqoDz.js";import"./Container-CcSXm98R.js";import"./utils-JpoKTq_4.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CnSr-EOZ.js";import"./Table-BGxv6wi-.js";import"./Switch-qQzmLoyi.js";import"./Collapse-dO_AAhkR.js";import"./react-data-grid-DOd4FWtH.js";import"./TableTabs-JT5O_jSL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-wESeMURt.js";import"./TextField-CdmN3rBr.js";import"./sharedUtilsInputs-CC6DzjXV.js";import"./Typography-KGvcb-tR.js";import"./ListOfFilters-CiQi80_Y.js";import"./FiltersActions-C5ReeHxe.js";import"./IconButton-Bi2q2X3M.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BBffWV7O.js";import"./EmptyState-PRAp0Uli.js";import"./unidentified@3x-p-1UhR3r.js";import"./MassActions-Dc98fSAu.js";import"./Autocomplete-Bypm81CP.js";import"./swr-D5fB-2xB.js";import"./ErrorPage-K5smkMSZ.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m,name:"Docs for frontend"}),`
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
