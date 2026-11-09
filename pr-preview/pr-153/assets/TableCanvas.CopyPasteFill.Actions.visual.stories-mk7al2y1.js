import{d as l,r as v}from"./react-D2T61mpp.js";import{cr as E,cx as c}from"./vendor-5YaLwWPx.js";import{T as x}from"./TableCanvas-XamQaDES.js";import"./react-is-Clcustum.js";import"./styled-components-QSCCnPb-.js";import"./@tanstack/react-virtual-CREzRtDS.js";import"./tslib-DoU9Jm1N.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-qvqoIA2H.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CPvhdUt1.js";import"./@salutejs/plasma-icons-BYipvGmh.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Dje76o57.js";import"./IconButton-NZ7CEyKM.js";import"./Box-0w5iF82H.js";import"./TextField-DqvL3Zc8.js";import"./sharedUtilsInputs-LUebY2e5.js";import"./AiAgentPopup-DqteTfsM.js";import"./TextArea-YGicpwCL.js";import"./sharedUtilsResizable-Bqwz7o91.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-CRVW7HiH.js";import"./Collapse-DtIQJpWx.js";import"./react-data-grid-YkKxh9rN.js";import"./TableTabs-DLc6Fg37.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C9GSTiBm.js";import"./@glideappsfinal/glide-data-grid-CMGU-CCU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DgaubpC5.js";import"./ListOfFilters-unJUCV45.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DPYPxXZH.js";import"./EmptyState-C4_cwPpk.js";import"./MassActions-CwmTlBIc.js";import"./Autocomplete-BT7QMbQ9.js";import"./ErrorPage-Bc0163Q9.js";const be={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты действий",tags:["!autodocs"]},g=v.createRef(),D=1,d=1,p=3,P=[{id:1,name:"Alpha",qty:10,status:"open"},{id:2,name:"Beta",qty:20,status:"closed"},{id:3,name:"Gamma",qty:30,status:"open"},{id:4,name:"Delta",qty:40,status:"closed"}],F=[{key:"id",name:"ID",width:80},{key:"name",name:"Name",width:180,editingCell:{component:"inputString"}},{key:"qty",name:"Qty",width:120,editingCell:{component:"inputNumber"},contentFormat:"number"},{key:"status",name:"Status",width:160,editingCell:{component:"inputString"}}];function k({withBroadcast:t=!1}){const[e,a]=v.useState(P);return l.jsxDEV("div",{style:{padding:8},children:l.jsxDEV(x,{refTable:g,tableConfig:{containerStyle:{height:"260px",width:"640px"},rowSize:{default:"medium",showInControl:!0},rowMarkers:{startIndex:1},cellsSelection:{mode:"range-cell"},...t?{cellTransfer:{paste:{broadcast:!0}}}:{},editing:{defaultEnabled:!0,onRowsChange:a,rowKeyGetter:s=>`${s.id}`}},columnConfig:F,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:93,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:92,columnNumber:5},this)}const n=()=>new Promise(t=>setTimeout(t,250));async function T(t){return E(()=>{const e=t.querySelector(".dvn-scroller")??t.querySelector('[data-testid="data-grid-canvas"]');if(!e)throw new Error("Grid canvas not found");return e})}function A(t,e){var s;const a=(s=g.current)==null?void 0:s.getBounds(t+D,e);if(!(!a||!Number.isFinite(a.x)||!Number.isFinite(a.y)||a.width<=0))return{x:a.x+a.width/2,y:a.y+a.height/2}}function o(t,e){const a=A(t,e);if(!a)throw new Error(`getBounds не готов: col=${t}, row=${e}`);return a}async function S(){await n(),await E(()=>{if(!A(d,0))throw new Error("Grid bounds are not ready")},{timeout:5e3})}function i(t,e,a={}){const s={clientX:e.x,clientY:e.y,pointerType:"mouse",...a};c.pointerDown(t,{...s,button:0,buttons:1}),c.pointerUp(t,{...s,button:0,buttons:0})}function m(t,e){const a=e==="KeyC"?"c":"v";c.keyDown(t,{key:a,code:e,ctrlKey:!0}),c.keyUp(t,{key:a,code:e,ctrlKey:!0})}const N={parameters:{screenshot:{keepState:!0}}},r={name:"Copy/Paste — одна ячейка",...N,render:()=>l.jsxDEV(k,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:189,columnNumber:17},void 0),play:async({canvasElement:t})=>{const e=await T(t);await S(),i(e,o(d,0)),await n(),m(e,"KeyC"),await n(),i(e,o(d,2)),await n(),m(e,"KeyV"),await n()}},u={name:"Copy/Paste — одна ячейка на диапазон (broadcast)",...N,render:()=>l.jsxDEV(k,{withBroadcast:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:209,columnNumber:17},void 0),play:async({canvasElement:t})=>{const e=await T(t);await S(),i(e,o(p,0)),await n(),m(e,"KeyC"),await n(),i(e,o(p,1)),await n(),i(e,o(p,3),{shiftKey:!0}),await n(),m(e,"KeyV"),await n()}};var y,w,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Copy/Paste — одна ячейка',
  ...screenshot,
  render: () => <EditableActionsGrid />,
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // источник: Name строки 0 ('Alpha')
    click(el, point(NAME, 0));
    await settle();
    pressHotkey(el, 'KeyC');
    await settle();
    // цель: Name строки 2 ('Gamma') → станет 'Alpha'
    click(el, point(NAME, 2));
    await settle();
    pressHotkey(el, 'KeyV');
    await settle();
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,f,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Copy/Paste — одна ячейка на диапазон (broadcast)',
  ...screenshot,
  render: () => <EditableActionsGrid withBroadcast />,
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // источник: Status строки 0 ('open')
    click(el, point(STATUS, 0));
    await settle();
    pressHotkey(el, 'KeyC');
    await settle();
    // цель: диапазон Status строк 1..3 через Shift-клик (детерминированнее drag).
    click(el, point(STATUS, 1));
    await settle();
    click(el, point(STATUS, 3), {
      shiftKey: true
    });
    await settle();
    pressHotkey(el, 'KeyV');
    await settle();
  }
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const fe=["CopyPasteCell","CopyPasteBroadcastRange"];export{u as CopyPasteBroadcastRange,r as CopyPasteCell,fe as __namedExportsOrder,be as default};
