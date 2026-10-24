import{r as t,d as c,j as e}from"./react-D2T61mpp.js";import{cl as m,cf as p,cg as x}from"./vendor-BotQo-m5.js";import{T as j,I as f,D as g,C as v,L as C,a as b,b as y,c as D,d as B,e as E,f as L,H as S,g as T,h as w,S as F}from"./TableCanvasLogger.stories-CecwlCsk.js";import"./react-is-Clcustum.js";import"./styled-components-CA2CAEjL.js";import"./@tanstack/react-virtual-Cn23thnX.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-DnrLf2YT.js";import"./storySourceDoc-tVKyHcEN.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./TableCanvas-DlNruHcU.js";import"./utils-BIQM_xtj.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BtdE48Lf.js";import"./@salutejs/plasma-icons-BBqnx34S.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CNqZ54iG.js";import"./IconButton-BLPpYxfQ.js";import"./Box-jWxNdqW7.js";import"./TextField-Dd9lYuZ2.js";import"./sharedUtilsInputs-v-GJdVCM.js";import"./AiAgentPopup-Q7zLfuir.js";import"./TextArea-hWn3946V.js";import"./sharedUtilsResizable-PvK4CQUI.js";import"./Table-rX9JJUR5.js";import"./Collapse-BJMU9AEU.js";import"./react-data-grid-Dh_hmPqE.js";import"./TableTabs-B4MPujqJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cy6tStOT.js";import"./@glideappsfinal/glide-data-grid-DbAheAp7.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DRWFcFum.js";import"./ListOfFilters-DppKH4EU.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DHVvTJRQ.js";import"./EmptyState-BJD9-va-.js";import"./MassActions-BE8vBiM6.js";import"./Autocomplete-Ch9XmMC9.js";import"./ErrorPage-W2sTWn_H.js";const s=({placeholderHeight:o=240,...n})=>{const u=t.useRef(null),[r,l]=t.useState(!1);return t.useEffect(()=>{const d=u.current;if(r||!d)return;if(typeof IntersectionObserver>"u"){l(!0);return}const i=new IntersectionObserver(([a])=>{a!=null&&a.isIntersecting&&(l(!0),i.disconnect())},{rootMargin:"300px 0px"});return i.observe(d),()=>i.disconnect()},[r]),c.jsxDEV("div",{ref:u,style:r?void 0:{minHeight:o},children:r&&c.jsxDEV(m,{...n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/utils/LazyCanvas.tsx",lineNumber:45,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/utils/LazyCanvas.tsx",lineNumber:41,columnNumber:5},void 0)};try{s.displayName="LazyCanvas",s.__docgenInfo={description:`Canvas, который монтирует стори только при подлёте к экрану.
Нужен на docs-страницах с большим количеством тяжёлых примеров.`,displayName:"LazyCanvas",props:{of:{defaultValue:null,description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Canvas of={ButtonStories.Primary} />
\`\`\``,name:"of",required:!1,type:{name:"any"}},meta:{defaultValue:null,description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Canvas of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``,name:"meta",required:!1,type:{name:"ModuleExports"}},sourceState:{defaultValue:{value:"'hidden'"},description:`Specify the initial state of the source panel
hidden: the source panel is hidden by default
shown: the source panel is shown by default
none: the source panel is not available and the button to show it is hidden`,name:"sourceState",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"shown"'},{value:'"none"'}]}},layout:{defaultValue:{value:"'padded'"},description:`how to layout the story within the canvas
padded: the story has padding within the canvas
fullscreen: the story is rendered edge to edge within the canvas
centered: the story is centered within the canvas`,name:"layout",required:!1,type:{name:"enum",value:[{value:'"padded"'},{value:'"fullscreen"'},{value:'"centered"'}]}},source:{defaultValue:null,description:"@see {SourceProps}",name:"source",required:!1,type:{name:'Omit<SourceProps, "dark">'}},story:{defaultValue:null,description:"@see {StoryProps}",name:"story",required:!1,type:{name:'Pick<StoryProps, "__forceInitialArgs" | "inline" | "height" | "autoplay" | "__primary">'}},placeholderHeight:{defaultValue:{value:"240"},description:"Высота заглушки до появления примера, чтобы страница не прыгала",name:"placeholderHeight",required:!1,type:{name:"number"}}}}}catch{}function h(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:j,name:"Docs"}),`
`,e.jsx(n.h1,{id:"tablecanvaslogger",children:"TableCanvasLogger"}),`
`,e.jsx(n.p,{children:"Панель системных сообщений таблицы: шапка со счётчиками и фильтрами по статусам, список сообщений с группами, подробностями и копированием идентификатора трассировки."}),`
`,e.jsxs(n.p,{children:["Компонент входит в ",e.jsx(n.code,{children:"TableCanvas"})," и предназначен для нижней панели таблицы: передайте его в ",e.jsx(n.code,{children:"tableConfig.bottomSheetConfig.content"})," (пример — сторис «В нижней панели таблицы»). Если обёртка растягивается на высоту панели, а ``, шапка остаётся на месте и прокручивается только список."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Четыре статуса: ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"info"}),", ",e.jsx(n.code,{children:"success"})]}),`
`,e.jsx(n.li,{children:"Группы любой вложенности"}),`
`,e.jsx(n.li,{children:"Фильтр по статусу учитывает вложенные сообщения: группа остаётся в списке, если в ней есть подходящее сообщение"}),`
`,e.jsxs(n.li,{children:["Кнопки сообщения: «Подробнее», «Скопировать ID», код сообщения (например ",e.jsx(n.code,{children:"F23"}),") и собственные ",e.jsx(n.code,{children:"actions"})]}),`
`,e.jsx(n.li,{children:"Состояние панели, фильтра и раскрытых элементов можно задавать извне или оставить компоненту"}),`
`]}),`
`,e.jsx(n.h2,{id:"основная-структура",children:"Основная структура"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  TableCanvas,
  TableCanvasLogger,
} from '@daisforge/ui/components/TableCanvas';

<TableCanvas
  rows={rows}
  columnConfig={columns}
  tableConfig={{
    bottomSheetConfig: {
      height: open ? 280 : 40,
      content: (
        <TableCanvasLogger items={items} open={open} onOpenChange={setOpen} />
      ),
    },
  }}
/>;
`})}),`
`,e.jsx(n.h2,{id:"составные-части",children:"Составные части"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableCanvasLoggerList"})," — список сообщений без шапки, принимает те же ",e.jsx(n.code,{children:"items"})," и настройки отображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableCanvasLoggerMessage"})," и ",e.jsx(n.code,{children:"TableCanvasLoggerGroup"})," — можно использовать отдельно: раскрытие управляется пропами ",e.jsx(n.code,{children:"open"})," и ",e.jsx(n.code,{children:"onOpenChange"})," или хранится внутри"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableCanvasLoggerFilters"})," — чипсы «Все» и по одному на статус"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useTableCanvasLogger"}),", ",e.jsx(n.code,{children:"TableCanvasLoggerProvider"})," и ",e.jsx(n.code,{children:"TableCanvasLoggerItems"})," — для полностью своей вёрстки"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Счётчики считаются по всем элементам: группа учитывается наравне с сообщениями. Например, одна группа ",e.jsx(n.code,{children:"error"})," с тремя вложенными сообщениями даёт «Все (4)». Если нужен другой подсчёт или загружена только часть данных, передайте итоговые значения в ",e.jsx(n.code,{children:"counts"})]}),`
`,e.jsx(n.li,{children:"Описание сообщения можно скопировать, только если оно передано строкой"}),`
`,e.jsx(n.li,{children:"Закрытие панели сбрасывает фильтр на «Все», в закрытой панели чипсы не выделены. Выбор фильтра в закрытой панели открывает её"}),`
`,e.jsxs(n.li,{children:["Начальное состояние задаётся ",e.jsx(n.code,{children:"defaultOpen"}),", ",e.jsx(n.code,{children:"defaultFilter"})," и ",e.jsx(n.code,{children:"defaultExpandedIds"})]}),`
`,e.jsxs(n.li,{children:["Без сообщений показывается «Сообщений нет»: текст меняется через ",e.jsx(n.code,{children:"labels.empty"}),", разметка целиком — через ",e.jsx(n.code,{children:"emptyContent"})]}),`
`,e.jsxs(n.li,{children:["Названия статусов для скринридера задаются в ",e.jsx(n.code,{children:"labels.error"}),", ",e.jsx(n.code,{children:"labels.warning"}),", ",e.jsx(n.code,{children:"labels.info"}),", ",e.jsx(n.code,{children:"labels.success"})]}),`
`,e.jsxs(n.li,{children:["Внутренние отступы панели входят в компонент и рассчитаны на нижнюю панель таблицы. Переопределить их можно через ",e.jsx(n.code,{children:"$css"})]}),`
`,e.jsxs(n.li,{children:["Логгер занимает высоту родителя, а список прокручивается. Ограничить высоту списка можно через ",e.jsx(n.code,{children:"maxHeight"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Описание типов и пропсов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-bottomsheet-logger-api--docs",children:"API"}),"."]}),`
`,e.jsx(n.h3,{id:"в-нижней-панели-таблицы",children:"В нижней панели таблицы"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"базовый-пример",children:"Базовый пример"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"управляемое-состояние",children:"Управляемое состояние"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h3,{id:"только-список-tablecanvasloggerlist",children:"Только список (TableCanvasLoggerList)"}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n.h3,{id:"свои-действия-сообщений",children:"Свои действия сообщений"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"свои-тексты-и-иконки",children:"Свои тексты и иконки"}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"свой-рендер-сообщения",children:"Свой рендер сообщения"}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(n.h3,{id:"свой-рендер-группы",children:"Свой рендер группы"}),`
`,e.jsx(s,{of:B}),`
`,e.jsx(n.h3,{id:"расширение-строки-действий-и-описания",children:"Расширение строки действий и описания"}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(n.h3,{id:"обработка-копирования-и-кода",children:"Обработка копирования и кода"}),`
`,e.jsx(s,{of:L}),`
`,e.jsx(n.h3,{id:"шапка-заголовок-иконка-доп-контент",children:"Шапка: заголовок, иконка, доп. контент"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h3,{id:"стилизация-classes-и-css",children:"Стилизация: classes и $css"}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(n.h3,{id:"headless-usetablecanvaslogger--собственная-вёрстка",children:"Headless: useTableCanvasLogger + собственная вёрстка"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h3,{id:"отдельные-части-tablecanvasloggermessage-и-tablecanvasloggergroup",children:"Отдельные части: TableCanvasLoggerMessage и TableCanvasLoggerGroup"}),`
`,e.jsx(s,{of:F})]})}function ge(o={}){const{wrapper:n}={...p(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}export{ge as default};
