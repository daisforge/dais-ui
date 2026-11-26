import{j as t}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-DX-rrd2O.js";import{M as i}from"./WithTooltip-KJL26V4Q-B2TieNaU.js";import{T as m}from"./TableContract.stories-DG1rPGsb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./preload-helper-Ba06O5E_.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./subRows.routes-XiU_RR1q.js";import"./tableData-DKA5H0bF.js";import"./TableContract-BozQAhh1.js";import"./ModalDFConfirmation-i64nQvzZ.js";import"./ModalDF-BoQOGMIJ.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/plasma-icons-CGioElEJ.js";import"./constants-Des9Datc.js";import"./Container-DyTrYN3M.js";import"./utils-BfZGf093.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-3Z-m9LhI.js";import"./Table-CM-m_vI3.js";import"./Switch-OG9YqfkE.js";import"./Collapse-DxXZ8FX5.js";import"./react-data-grid-RlxbDazV.js";import"./TableTabs-DfbZiZGK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BT6Vdn8T.js";import"./@daisforge/glide-data-grid-CzO07fTg.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-WSVmxtub.js";import"./TextField-tPdr40MJ.js";import"./sharedUtilsInputs-DVbCzzFV.js";import"./TypographyWithAutoTooltip-Bve8K-AE.js";import"./Typography-CyjBKn0V.js";import"./ListOfFilters-C9f_VsLK.js";import"./FiltersActions-oW-AJ4K7.js";import"./IconButton-DZJTAkfX.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-BTqmTjfQ.js";import"./EmptyState-DKR5omoO.js";import"./unidentified@3x-Ca_hkon8.js";import"./MassActions-BHMmUpsb.js";import"./Autocomplete-Dh8j0tgJ.js";import"./swr-C9kJQIGF.js";import"./ErrorPage-B7Y2jSeW.js";function o(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m,name:"Docs for frontend"}),`
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
