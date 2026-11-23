import{j as t}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-mKquPocI.js";import{M as i}from"./WithTooltip-KJL26V4Q-C9snA44b.js";import{T as m}from"./TableContract.stories-BBBuXqb0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./subRows.routes-CFu2tpfF.js";import"./tableData-DKA5H0bF.js";import"./TableContract-Bq90No89.js";import"./ModalDFConfirmation-DZNFSiMg.js";import"./ModalDF-BgBP_8dc.js";import"./@salutejs/sdds-finai-VaULiTXd.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./@salutejs/plasma-icons-CDOReZb2.js";import"./constants-Dyz8I1EV.js";import"./Container-ayJ1DL6w.js";import"./utils-BKJAJHmZ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-tzqS-Nh4.js";import"./Table-DuR0Uj1s.js";import"./index-awb76Wuo.js";import"./Collapse-Dk4xyTvf.js";import"./react-data-grid-CYj7lJMP.js";import"./TableTabs-X5QbWM5x.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DgsIxXVT.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BNtxvxkI.js";import"./TextField-BH-nuXGv.js";import"./sharedUtilsInputs-xaz4bJTm.js";import"./TypographyWithAutoTooltip-DO5Wyg6d.js";import"./Typography-BsQ2VcTJ.js";import"./ListOfFilters-5mX5dD9s.js";import"./FiltersActions-DMBf9g3f.js";import"./IconButton-JRgxWTmA.js";import"./TooltipList-CUZXP-B-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Vk_4eWtq.js";import"./NumberFormat-C8SB7VXR.js";import"./EmptyState-CTTWUA7X.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-B98MzVUU.js";import"./Autocomplete-B0NP7NUX.js";import"./swr-DdOeJ3Vb.js";import"./ErrorPage-C-06bH62.js";function o(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m,name:"Docs for frontend"}),`
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
