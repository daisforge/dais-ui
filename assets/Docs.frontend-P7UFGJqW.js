import{j as t}from"./react-CAOzMBF_.js";import{cg as o,ch as i}from"./vendor-Dh4d6dCz.js";import{T as p}from"./TableContract.stories-DbaEQrmX.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./subRows.routes-D5GBAz9l.js";import"./tableData-DVJFoYoT.js";import"./TableContract-DfUUXxtA.js";import"./ModalDFConfirmation-yP0ugboi.js";import"./ModalDF-DhjAK-_b.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./constants-ChwOYBdp.js";import"./IconButton-BY5jSHYi.js";import"./utils-I85SwEfQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-V-E_7_e1.js";import"./Container-D-HnHQA2.js";import"./Table-D060miWS.js";import"./FiltersActions-CRTH0PZ-.js";import"./TextField-DU1R_gtM.js";import"./sharedUtilsInputs-C3919g4u.js";import"./AiAgentPopup-JQocNqtc.js";import"./TextArea-CeV4EuOw.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DTUuFrcP.js";import"./@glideappsfinal/glide-data-grid-gV_BbKzF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BDOhBaAU.js";import"./ListOfFilters-PPh84lG1.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-C_muNst-.js";import"./EmptyState-P7S2U46o.js";import"./MassActions-WHkWqihO.js";import"./Autocomplete-Ce-yJoLc.js";import"./swr-CpZ8JkVd.js";import"./ErrorPage-DQdCJbuO.js";function n(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p,name:"Docs for frontend"}),`
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
