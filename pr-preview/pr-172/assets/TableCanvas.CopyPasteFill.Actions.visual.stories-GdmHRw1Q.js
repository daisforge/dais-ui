import{b as l,r as v}from"./react-UEdzNlUe.js";import{a as E,f as m}from"./index-BdcmQ601.js";import{T as D}from"./TableCanvas-DZTYadTk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./styled-components-CDfPITHT.js";import"./react-is-CJ4CjPIR.js";import"./vendor-DKFmtNka.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-tUCAU4AC.js";import"./@glideappsfinal/glide-data-grid-FxykUbRj.js";import"./preload-helper-j-yXN3k7.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-CRh_swnh.js";import"./Typography-zuoL-GwX.js";import"./ListOfFilters-Co-jp33h.js";import"./Table-ddz6Ll2D.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-DRz_KoAX.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-CVGlpOmh.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-D2LIoH33.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-BuTEqvxl.js";const At={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты действий",tags:["!autodocs"]},g=v.createRef(),x=1,d=1,p=3,P=[{id:1,name:"Alpha",qty:10,status:"open"},{id:2,name:"Beta",qty:20,status:"closed"},{id:3,name:"Gamma",qty:30,status:"open"},{id:4,name:"Delta",qty:40,status:"closed"}],F=[{key:"id",name:"ID",width:80},{key:"name",name:"Name",width:180,editingCell:{component:"inputString"}},{key:"qty",name:"Qty",width:120,editingCell:{component:"inputNumber"},contentFormat:"number"},{key:"status",name:"Status",width:160,editingCell:{component:"inputString"}}];function k({withBroadcast:e=!1}){const[t,a]=v.useState(P);return l.jsxDEV("div",{style:{padding:8},children:l.jsxDEV(D,{refTable:g,tableConfig:{containerStyle:{height:"260px",width:"640px"},rowSize:{default:"medium",showInControl:!0},rowMarkers:{startIndex:1},cellsSelection:{mode:"range-cell"},...e?{cellTransfer:{paste:{broadcast:!0}}}:{},editing:{defaultEnabled:!0,onRowsChange:a,rowKeyGetter:o=>`${o.id}`}},columnConfig:F,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:93,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:92,columnNumber:5},this)}const n=()=>new Promise(e=>setTimeout(e,250));async function T(e){return E(()=>{const t=e.querySelector(".dvn-scroller")??e.querySelector('[data-testid="data-grid-canvas"]');if(!t)throw new Error("Grid canvas not found");return t})}function A(e,t){var o;const a=(o=g.current)==null?void 0:o.getBounds(e+x,t);if(!(!a||!Number.isFinite(a.x)||!Number.isFinite(a.y)||a.width<=0))return{x:a.x+a.width/2,y:a.y+a.height/2}}function i(e,t){const a=A(e,t);if(!a)throw new Error(`getBounds не готов: col=${e}, row=${t}`);return a}async function S(){await n(),await E(()=>{if(!A(d,0))throw new Error("Grid bounds are not ready")},{timeout:5e3})}function r(e,t,a={}){const o={clientX:t.x,clientY:t.y,pointerType:"mouse",...a};m.pointerDown(e,{...o,button:0,buttons:1}),m.pointerUp(e,{...o,button:0,buttons:0})}function c(e,t){const a=t==="KeyC"?"c":"v";m.keyDown(e,{key:a,code:t,ctrlKey:!0}),m.keyUp(e,{key:a,code:t,ctrlKey:!0})}const N={parameters:{screenshot:{keepState:!0}}},s={name:"Copy/Paste — одна ячейка",...N,render:()=>l.jsxDEV(k,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:189,columnNumber:17},void 0),play:async({canvasElement:e})=>{const t=await T(e);await S(),r(t,i(d,0)),await n(),c(t,"KeyC"),await n(),r(t,i(d,2)),await n(),c(t,"KeyV"),await n()}},u={name:"Copy/Paste — одна ячейка на диапазон (broadcast)",...N,render:()=>l.jsxDEV(k,{withBroadcast:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:209,columnNumber:17},void 0),play:async({canvasElement:e})=>{const t=await T(e);await S(),r(t,i(p,0)),await n(),c(t,"KeyC"),await n(),r(t,i(p,1)),await n(),r(t,i(p,3),{shiftKey:!0}),await n(),c(t,"KeyV"),await n()}};var y,w,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,f,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const St=["CopyPasteCell","CopyPasteBroadcastRange"];export{u as CopyPasteBroadcastRange,s as CopyPasteCell,St as __namedExportsOrder,At as default};
