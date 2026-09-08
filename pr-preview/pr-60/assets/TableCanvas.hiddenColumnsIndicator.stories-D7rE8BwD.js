import{r as o,d as t}from"./react-D2T61mpp.js";import{c as s}from"./tableData-UCfjiBCh.js";import A from"./DocStoryTemplate-26hG1TrD.js";import{s as i}from"./storySourceDoc-tVKyHcEN.js";import{T as a}from"./TableCanvas-DSlXlIqd.js";import"./vendor-CyXS_tQs.js";import"./react-is-Clcustum.js";import"./styled-components-3bXMFSHQ.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DnjaWsie.js";import"./IconButton-DiyFTFnS.js";import"./@salutejs/plasma-icons-JkzlaiDL.js";import"./@salutejs/sdds-finai-BZpI7CTf.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Bkr6UfOV.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-XVJu3IY6.js";import"./TextField-BCCWysg4.js";import"./sharedUtilsInputs-CvQTizR6.js";import"./AnalyticalWidget-DUHuklJc.js";import"./Collapse-D184fPcX.js";import"./Table-C68uzz8-.js";import"./react-data-grid-DzqnH8jo.js";import"./TableTabs-ZohOaFQT.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CIbX8ul8.js";import"./ListOfFilters-CgotcXd0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D61tPBny.js";import"./EmptyState-Ck1o6yH0.js";import"./MassActions-DshUilFx.js";import"./Autocomplete-BlwsM0ef.js";import"./TableGlide-VhK6Za8w.js";import"./@glideappsfinal/glide-data-grid-BTy4l53-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-ZsCAoEHm.js";const m4={title:"Локальные компоненты/TableCanvas/ColumnsControl/Индикатор скрытых столбцов",tags:["!autodocs"],parameters:{docs:{page:A}}},d=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,m=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],e={...i({preCode:d,previewSource:"shown"}),render:()=>{const[u]=o.useState(s);return t.jsxDEV(a,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:m,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.hiddenColumnsIndicator.stories.tsx",lineNumber:57,columnNumber:7},void 0)}},r={...i({preCode:d,previewSource:"shown"}),render:()=>{const[u]=o.useState(s);return t.jsxDEV(a,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:m,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.hiddenColumnsIndicator.stories.tsx",lineNumber:88,columnNumber:7},void 0)}},n={...i({preCode:d,previewSource:"shown"}),render:()=>{const[u]=o.useState(s);return t.jsxDEV(a,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:m,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.hiddenColumnsIndicator.stories.tsx",lineNumber:120,columnNumber:7},void 0)}};var l,c,p,C,E;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['priority', 'developer', 'tr1']
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`Скрытые через настройку столбцов колонки подсвечиваются в шапке синей
полосатой линией на границе. Наведите курсор на линию — появится тултип,
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки
за эту же границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд — линия
одна на весь промежуток).`,...(E=(C=e.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var D,h,w,f,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        pinning: true,
        pinnedDefault: ['task'],
        hiddenDefault: ['id', 'complete']
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:`Краевые случаи: скрыты первый (ID) и последний (% Complete) столбцы — линия
прижимается к левому и правому краю таблицы. Title закреплён и уезжает в
начало вместе со своей границей.`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var g,B,y,v,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenColumnsIndicator: false,
        hiddenDefault: ['priority']
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:`Отказ от индикатора: hiddenColumnsIndicator: false — столбцы скрываются, как
раньше, без подсветки границ.`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};const l4=["HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled"];export{e as HiddenColumnsIndicator,n as HiddenColumnsIndicatorDisabled,r as HiddenColumnsIndicatorEdges,l4 as __namedExportsOrder,m4 as default};
