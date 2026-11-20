import{b as l,r as v}from"./react-B60MRyL7.js";import{a as E,f as m}from"./index-BdcmQ601.js";import{T as D}from"./TableCanvas-CbiKAFCu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-DKVFVmUS.js";import"./styled-components-D98J-t6t.js";import"./react-is-Clcustum.js";import"./vendor-XfTeUJpE.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-x3DCBAvN.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8xS8sHk.js";import"./@salutejs/plasma-icons-DZ_qGP0a.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-CFmWNdNb.js";import"./Box-QuskhUSb.js";import"./Collapse-CN78cPJP.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Ci75rTFY.js";import"./@glideappsfinal/glide-data-grid-BqXwzbnk.js";import"./preload-helper-BnDtJV8M.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-DLlWKgNM.js";import"./sharedUiSearch-CHBPekjk.js";import"./TextField-CBiCiUMp.js";import"./sharedUtilsInputs-Ujbxbbaa.js";import"./TypographyWithAutoTooltip-CQBksfgh.js";import"./Typography-BCWCJaUP.js";import"./ListOfFilters-j_YZsInD.js";import"./Table-mS3yBKw8.js";import"./react-data-grid-CbKJ8Xc_.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CLyIj3Wh.js";import"./NumberFormat-DOwy79Y_.js";import"./EmptyState-UM83DCUu.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-BE2sZqJw.js";import"./Autocomplete-D6CK_f1R.js";import"./FiltersActions-B9lffWVe.js";import"./IconButton-CYvWJ9E3.js";import"./TooltipList-Cutfk6au.js";import"./ErrorPage-Dk3nrTn7.js";const At={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты действий",tags:["!autodocs"]},g=v.createRef(),x=1,d=1,p=3,P=[{id:1,name:"Alpha",qty:10,status:"open"},{id:2,name:"Beta",qty:20,status:"closed"},{id:3,name:"Gamma",qty:30,status:"open"},{id:4,name:"Delta",qty:40,status:"closed"}],F=[{key:"id",name:"ID",width:80},{key:"name",name:"Name",width:180,editingCell:{component:"inputString"}},{key:"qty",name:"Qty",width:120,editingCell:{component:"inputNumber"},contentFormat:"number"},{key:"status",name:"Status",width:160,editingCell:{component:"inputString"}}];function k({withBroadcast:e=!1}){const[t,a]=v.useState(P);return l.jsxDEV("div",{style:{padding:8},children:l.jsxDEV(D,{refTable:g,tableConfig:{containerStyle:{height:"260px",width:"640px"},rowSize:{default:"medium",showInControl:!0},rowMarkers:{startIndex:1},cellsSelection:{mode:"range-cell"},...e?{cellTransfer:{paste:{broadcast:!0}}}:{},editing:{defaultEnabled:!0,onRowsChange:a,rowKeyGetter:o=>`${o.id}`}},columnConfig:F,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:93,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:92,columnNumber:5},this)}const n=()=>new Promise(e=>setTimeout(e,250));async function T(e){return E(()=>{const t=e.querySelector(".dvn-scroller")??e.querySelector('[data-testid="data-grid-canvas"]');if(!t)throw new Error("Grid canvas not found");return t})}function A(e,t){var o;const a=(o=g.current)==null?void 0:o.getBounds(e+x,t);if(!(!a||!Number.isFinite(a.x)||!Number.isFinite(a.y)||a.width<=0))return{x:a.x+a.width/2,y:a.y+a.height/2}}function i(e,t){const a=A(e,t);if(!a)throw new Error(`getBounds не готов: col=${e}, row=${t}`);return a}async function S(){await n(),await E(()=>{if(!A(d,0))throw new Error("Grid bounds are not ready")},{timeout:5e3})}function r(e,t,a={}){const o={clientX:t.x,clientY:t.y,pointerType:"mouse",...a};m.pointerDown(e,{...o,button:0,buttons:1}),m.pointerUp(e,{...o,button:0,buttons:0})}function c(e,t){const a=t==="KeyC"?"c":"v";m.keyDown(e,{key:a,code:t,ctrlKey:!0}),m.keyUp(e,{key:a,code:t,ctrlKey:!0})}const N={parameters:{screenshot:{keepState:!0}}},s={name:"Copy/Paste — одна ячейка",...N,render:()=>l.jsxDEV(k,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:189,columnNumber:17},void 0),play:async({canvasElement:e})=>{const t=await T(e);await S(),r(t,i(d,0)),await n(),c(t,"KeyC"),await n(),r(t,i(d,2)),await n(),c(t,"KeyV"),await n()}},u={name:"Copy/Paste — одна ячейка на диапазон (broadcast)",...N,render:()=>l.jsxDEV(k,{withBroadcast:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.Actions.visual.stories.tsx",lineNumber:209,columnNumber:17},void 0),play:async({canvasElement:e})=>{const t=await T(e);await S(),r(t,i(p,0)),await n(),c(t,"KeyC"),await n(),r(t,i(p,1)),await n(),r(t,i(p,3),{shiftKey:!0}),await n(),c(t,"KeyV"),await n()}};var y,w,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
