import{j as n}from"./react-D2T61mpp.js";import{c2 as c,c3 as l,bY as d}from"./vendor-Q_a-vZxa.js";import{T as r}from"./Table.massPanelAction.stories-BmnZg5fe.js";import"./react-is-Clcustum.js";import"./styled-components-BEUoKpTk.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BrdyFHCL.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-D8HUedaB.js";import"./FiltersActions-Bchg31Hk.js";import"./IconButton-CAd1yL2a.js";import"./@salutejs/plasma-icons-CyB4sZm3.js";import"./@salutejs/sdds-finai-DlWkRcaV.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-CVuocYtt.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DPpgRiC8.js";import"./TextField-DnCCqDPb.js";import"./sharedUtilsInputs-Cb9Dqfue.js";import"./AnalyticalWidget-CFaIt6MZ.js";import"./Collapse-hikrfMQ3.js";import"./react-data-grid-Di3Gdpz3.js";import"./TableTabs-DE_IuWyO.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-C6ZDRcIM.js";import"./ListOfFilters-C5Apgwx-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CE0F4EJa.js";import"./EmptyState-C_R0nxfe.js";import"./MassActions-CFD3HnUh.js";import"./Autocomplete-BanrLP6T.js";function s(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:r,name:"Docs"}),`
`,n.jsx(e.h1,{id:"table-masspanelaction",children:"Table MassPanelAction"}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Панель действий для выбранных строк"}),`
`,n.jsx(e.li,{children:"Автоматическое появление при активном selecting"}),`
`,n.jsx(e.li,{children:"Компрессия кнопок и отдельное поведение accent-кнопок"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.controlBlock.massActionPanel"})}),`
`,n.jsx(e.p,{children:"Панель массовых действий (MassPanelAction) - это компонент, который отображается внизу таблицы и позволяет применять действия к выбранным строкам. Панель появляется автоматически, когда в таблице выбраны строки."}),`
`,n.jsx(e.h2,{id:"когда-открывается-панель",children:"Когда открывается панель"}),`
`,n.jsx(e.p,{children:"Панель массовых действий появляется автоматически, когда:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Включена функция выбора строк (",n.jsx(e.code,{children:"selecting"})," в ",n.jsx(e.code,{children:"tableConfig"}),")"]}),`
`,n.jsx(e.li,{children:"Выбрана хотя бы одна строка в таблице"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectingRowsIsActive"})," равен ",n.jsx(e.code,{children:"true"})]}),`
`]}),`
`,n.jsx(e.p,{children:"Панель скрывается автоматически, когда все строки сняты с выбора."}),`
`,n.jsx(e.h2,{id:"управление-видимостью",children:"Управление видимостью"}),`
`,n.jsxs(e.p,{children:["По умолчанию панель показывается автоматически при активном ",n.jsx(e.code,{children:"selecting"})," и хотя бы одной выбранной строке. Это поведение переопределяется через ",n.jsx(e.code,{children:"massActionPanel.show"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"undefined"})," (по умолчанию) — штатное поведение (selecting + выбранные строки)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"false"})," — панель не рендерится, действиями вы управляете сами"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"true"})," — панель показывается всегда, даже без активного selecting и выбранных строк"]}),`
`]}),`
`,n.jsx(e.h2,{id:"замена-leftsideinner",children:"Замена leftSideInner"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Важно:"})," Панель массовых действий (",n.jsx(e.code,{children:"massActionPanel"}),") была создана как ",n.jsx(e.strong,{children:"замена"})," для ",n.jsx(e.code,{children:"leftSideInner"})," в ",n.jsx(e.code,{children:"controlBlock"}),"."]}),`
`,n.jsx(e.h3,{id:"️-не-рекомендуется-использовать-вместе",children:"⚠️ Не рекомендуется использовать вместе"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"НЕ ЖЕЛАТЕЛЬНО"})," использовать ",n.jsx(e.code,{children:"leftSideInner"})," и ",n.jsx(e.code,{children:"massActionPanel"})," одновременно, так как:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Это создает дублирование функциональности"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"massActionPanel"})," специально разработан для работы с выбранными строками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"massActionPanel"})," имеет адаптивную компрессию и автоматическое позиционирование"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"massActionPanel"})," лучше интегрирован с функцией выбора строк"]}),`
`]}),`
`,n.jsx(e.h3,{id:"рекомендация",children:"Рекомендация"}),`
`,n.jsxs(e.p,{children:["Используйте ",n.jsx(e.code,{children:"massActionPanel"})," вместо ",n.jsx(e.code,{children:"leftSideInner"})," для кнопок, которые должны работать с выбранными строками. Кнопки, которые не зависят от выбора строк, можно оставить в ",n.jsx(e.code,{children:"leftSideInner"})," или ",n.jsx(e.code,{children:"rightSideInner"}),"."]}),`
`,n.jsx(e.h2,{id:"особенности-работы",children:"Особенности работы"}),`
`,n.jsx(e.h3,{id:"accent-кнопки-всегда-видимы",children:"Accent кнопки всегда видимы"}),`
`,n.jsxs(e.p,{children:["Кнопки с ",n.jsx(e.code,{children:"view: 'accent'"})," ",n.jsx(e.strong,{children:"никогда не скрываются"})," в дропдауне скрытых действий, даже если панель не помещается по ширине. Они всегда остаются видимыми и сохраняют свой оригинальный порядок относительно других кнопок."]}),`
`,n.jsx(e.h3,{id:"адаптивная-компрессия",children:"Адаптивная компрессия"}),`
`,n.jsx(e.p,{children:"При нехватке места панель автоматически:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Скрывает обычные кнопки в дропдаун скрытых действий"}),`
`,n.jsx(e.li,{children:"Оставляет accent кнопки всегда видимыми"}),`
`,n.jsx(e.li,{children:"Сохраняет порядок кнопок (accent кнопки остаются на своих позициях)"}),`
`,n.jsx(e.li,{children:"Автоматически центрируется с учетом открытого сайдбара"}),`
`]}),`
`,n.jsx(e.h3,{id:"взаимодействие-с-сайдбаром",children:"Взаимодействие с сайдбаром"}),`
`,n.jsx(e.p,{children:"При открытии сайдбара:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Панель автоматически сворачивается (если была развернута)"}),`
`,n.jsx(e.li,{children:"Позиция корректируется с учетом ширины сайдбара"}),`
`,n.jsx(e.li,{children:"При закрытии сайдбара панель автоматически разворачивается"}),`
`]}),`
`,n.jsx(e.h3,{id:"размеры-кнопок",children:"Размеры кнопок"}),`
`,n.jsxs(e.p,{children:["Размеры кнопок и дропдаунов панель подбирает сама — по размеру панели (",n.jsx(e.code,{children:"massActionPanel.size"}),": ",n.jsx(e.code,{children:"m"}),"/",n.jsx(e.code,{children:"s"}),"/",n.jsx(e.code,{children:"xs"}),") и компактности. Передавать ",n.jsx(e.code,{children:"size"})," кнопкам отдельно ",n.jsx(e.strong,{children:"не нужно"}),". Если ",n.jsx(e.code,{children:"size"})," всё же задан — он используется как есть."]}),`
`,n.jsx(e.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsxs(e.p,{children:["Панель массовых действий настраивается через ",n.jsx(e.code,{children:"tableConfig.controlBlock.massActionPanel"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{
  selecting: {
    state: selectingRowState,
    rowKeyGetter: (row) => row.id,
  },
  controlBlock: {
    massActionPanel: {
      buttons: [
        {
          type: 'button',
          text: 'Действие',
          view: 'secondary', // или 'accent', 'critical', 'primary' и т.д.
          onClick: () => {
            // Обработчик клика
          },
        },
      ],
    },
  },
}}
`})}),`
`,n.jsxs(e.p,{children:["Помимо ",n.jsx(e.code,{children:"buttons"}),", у панели есть необязательные пропсы: ",n.jsx(e.code,{children:"size"})," (размер панели, см. «Размеры кнопок»), ",n.jsx(e.code,{children:"show"})," (управление видимостью), ",n.jsx(e.code,{children:"bottom"})," (отступ панели снизу от контейнера, по умолчанию 24px) и ",n.jsx(e.code,{children:"collapsedDropdownProps"})," (пропсы дропдауна скрытых действий). Полное описание типов — в разделе API."]}),`
`,n.jsx(e.h2,{id:"типы-кнопок",children:"Типы кнопок"}),`
`,n.jsx(e.h3,{id:"button",children:"Button"}),`
`,n.jsxs(e.p,{children:["Используется компонент ",n.jsx(e.code,{children:"Button"})," с ",n.jsx(e.code,{children:"type: 'button'"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Доступны view: ",n.jsx(e.code,{children:"'accent'"}),", ",n.jsx(e.code,{children:"'secondary'"}),", ",n.jsx(e.code,{children:"'critical'"}),", ",n.jsx(e.code,{children:"'primary'"})," и т.д."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"view: 'accent'"})," - accent кнопки, которые всегда остаются видимыми"]}),`
`]}),`
`,n.jsx(e.h3,{id:"linkbutton",children:"LinkButton"}),`
`,n.jsxs(e.p,{children:["Кнопка-ссылка с ",n.jsx(e.code,{children:"type: 'linkButton'"})," (компонент ",n.jsx(e.code,{children:"LinkButton"}),"). View задаётся в link-нотации:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`{
  type: 'linkButton',
  text: 'Ссылка-действие',
  view: 'linkSecondary', // 'linkAccent' / 'linkDefault' и т.д.
  onClick: () => {},
}
`})}),`
`,n.jsx(e.h2,{id:"disabled-состояние",children:"Disabled состояние"}),`
`,n.jsxs(e.p,{children:["Если кнопка имеет ",n.jsx(e.code,{children:"disabled: true"}),", можно передать ",n.jsx(e.code,{children:"disabledTooltipProps"})," для отображения подсказки при наведении на disabled кнопку:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`{
  type: 'button',
  text: 'Действие',
  view: 'secondary',
  disabled: true,
  disabledTooltipProps: {
    text: 'Выберите строки для выполнения действия',
  },
  onClick: () => {},
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Важно:"})," disabled кнопка остаётся неактивной и после перемещения в дропдаун скрытых действий — ",n.jsx(e.code,{children:"disabled"})," пробрасывается на пункт меню. Подсказка ",n.jsx(e.code,{children:"disabledTooltipProps"})," при этом показывается только у кнопок на самой панели, в меню её нет."]}),`
`,n.jsx(e.h2,{id:"dropdown-в-кнопках",children:"Dropdown в кнопках"}),`
`,n.jsx(e.p,{children:"Кнопки могут иметь вложенный dropdown:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`{
  type: 'button',
  text: 'Действие с меню',
  view: 'secondary',
  dropdown: {
    items: [
      { label: 'Опция 1', value: '1' },
      { label: 'Опция 2', value: '2' },
    ],
    onItemSelect: (item) => {
      // Обработчик выбора
    },
  },
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-controlblock-masspanelaction-api--docs",children:"MassPanelAction API"})]}),`
`]}),`
`,n.jsx(d,{})]})}function _(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{_ as default};
