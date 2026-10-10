import{d as l,r as v}from"./react-D2T61mpp.js";import{cq as g,cx as c}from"./vendor-BGzzYN-b.js";import{T as x}from"./TableCanvas-wkKiHt_9.js";import"./react-is-Clcustum.js";import"./styled-components-CD4KFY2h.js";import"./@tanstack/react-virtual-7i3ITNa_.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-a7bIw2Fz.js";import"./IconButton-BsuSMrKD.js";import"./@salutejs/plasma-icons-DoqG1pWM.js";import"./@salutejs/sdds-finai-DvhCM2Xz.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BopI5f_-.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B5Lk0A0c.js";import"./TextField-1s64aVQu.js";import"./sharedUtilsInputs-D8S3qiky.js";import"./AiAgentPopup-BjpWl_pW.js";import"./TextArea-Dx3aHTDW.js";import"./sharedUtilsResizable-CdV8UiPe.js";import"./Table-CA6ZUQ5N.js";import"./Collapse-CWsg-GsF.js";import"./react-data-grid-BIBmSmvS.js";import"./TableTabs-BxgxHb0J.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-tcONULjm.js";import"./@glideappsfinal/glide-data-grid-BU--_Fv5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-y7IwLXgM.js";import"./ListOfFilters-BuQDevqY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D8XT1I-j.js";import"./EmptyState-DMkiJ__L.js";import"./MassActions-C5VaWbKf.js";import"./Autocomplete-BFrIC_iF.js";import"./ErrorPage-D7Xw8vJ0.js";const we={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты действий",tags:["!autodocs"]},k=v.createRef(),D=1,d=1,p=3,P=[{id:1,name:"Alpha",qty:10,status:"open"},{id:2,name:"Beta",qty:20,status:"closed"},{id:3,name:"Gamma",qty:30,status:"open"},{id:4,name:"Delta",qty:40,status:"closed"}],F=[{key:"id",name:"ID",width:80},{key:"name",name:"Name",width:180,editingCell:{component:"inputString"}},{key:"qty",name:"Qty",width:120,editingCell:{component:"inputNumber"},contentFormat:"number"},{key:"status",name:"Status",width:160,editingCell:{component:"inputString"}}];function E({withBroadcast:t=!1}){const[e,a]=v.useState(P);return l.jsxDEV("div",{style:{padding:8},children:l.jsxDEV(x,{refTable:k,tableConfig:{containerStyle:{height:"260px",width:"640px"},rowSize:{default:"medium",showInControl:!0},rowMarkers:{startIndex:1},cellsSelection:{mode:"range-cell"},...t?{cellTransfer:{paste:{broadcast:!0}}}:{},editing:{defaultEnabled:!0,onRowsChange:a,rowKeyGetter:s=>`${s.id}`}},columnConfig:F,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:93,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:92,columnNumber:5},this)}const n=()=>new Promise(t=>setTimeout(t,250));async function T(t){return g(()=>{const e=t.querySelector(".dvn-scroller")??t.querySelector('[data-testid="data-grid-canvas"]');if(!e)throw new Error("Grid canvas not found");return e})}function A(t,e){var s;const a=(s=k.current)==null?void 0:s.getBounds(t+D,e);if(!(!a||!Number.isFinite(a.x)||!Number.isFinite(a.y)||a.width<=0))return{x:a.x+a.width/2,y:a.y+a.height/2}}function i(t,e){const a=A(t,e);if(!a)throw new Error(`getBounds не готов: col=${t}, row=${e}`);return a}async function S(){await n(),await g(()=>A(d,0)!==void 0,{timeout:2e3})}function o(t,e,a={}){const s={clientX:e.x,clientY:e.y,pointerType:"mouse",...a};c.pointerDown(t,{...s,button:0,buttons:1}),c.pointerUp(t,{...s,button:0,buttons:0})}function m(t,e){const a=e==="KeyC"?"c":"v";c.keyDown(t,{key:a,code:e,ctrlKey:!0}),c.keyUp(t,{key:a,code:e,ctrlKey:!0})}const N={parameters:{screenshot:{keepState:!0}}},r={name:"Copy/Paste — одна ячейка",...N,render:()=>l.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:184,columnNumber:17},void 0),play:async({canvasElement:t})=>{const e=await T(t);await S(),o(e,i(d,0)),await n(),m(e,"KeyC"),await n(),o(e,i(d,2)),await n(),m(e,"KeyV"),await n()}},u={name:"Copy/Paste — одна ячейка на диапазон (broadcast)",...N,render:()=>l.jsxDEV(E,{withBroadcast:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:204,columnNumber:17},void 0),play:async({canvasElement:t})=>{const e=await T(t);await S(),o(e,i(p,0)),await n(),m(e,"KeyC"),await n(),o(e,i(p,1)),await n(),o(e,i(p,3),{shiftKey:!0}),await n(),m(e,"KeyV"),await n()}};var y,w,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ce=["CopyPasteCell","CopyPasteBroadcastRange"];export{u as CopyPasteBroadcastRange,r as CopyPasteCell,Ce as __namedExportsOrder,we as default};
