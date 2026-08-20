import{d as k,r as le}from"./react-D2T61mpp.js";import{c as se}from"./tableData-UCfjiBCh.js";import{cb as ae,ch as w}from"./vendor-B0ELcGbr.js";import{T as ie}from"./TableCanvas-CiFkgXUY.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-kywmj-6_.js";import"./IconButton-BnBbpqAh.js";import"./@salutejs/plasma-icons-Dn1uY4zn.js";import"./@salutejs/sdds-finai-CPdoK_07.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C6gzzOja.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Db5QYZwL.js";import"./TextField-DWCr1uqp.js";import"./sharedUtilsInputs-Cqh7JaQW.js";import"./AnalyticalWidget-D5_iniP6.js";import"./Collapse-BXK8FQgS.js";import"./Table-Dk0zGLUS.js";import"./react-data-grid-CqwhRDqe.js";import"./TableTabs-IUQeYtHj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Dvcmx-r0.js";import"./ListOfFilters-DU4gIMgx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bs9eJUT-.js";import"./EmptyState-Bje4uzUs.js";import"./MassActions-C1K61FB0.js";import"./Autocomplete-pluU6vp8.js";import"./TableGlide-C1NlGMgF.js";import"./@glideappsfinal/glide-data-grid-B0bqwRLO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C1mBF_U8.js";const qe={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты выделения",tags:["!autodocs"]},re=le.createRef(),F=33,x=32,S=32,p=140,oe=se().slice(0,6),ce=[{key:"id",name:"ID",width:p},{key:"task",name:"Title",width:p},{key:"priority",name:"Priority",width:p},{key:"issueType",name:"Type",width:p},{key:"complete",name:"%",width:p}],s=(n,e="disabled")=>()=>k.jsxDEV("div",{style:{padding:8},children:k.jsxDEV(ie,{refTable:re,tableConfig:{containerStyle:{height:"320px",width:"800px"},rowSize:{default:"medium",showInControl:!1},rowMarkers:{startIndex:1},cellsSelection:{mode:n,enableColumnSelection:!0,enableRowSelection:!0,enableSelectAll:!0},highlightActiveType:e},columnConfig:ce,rows:oe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:68,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:67,columnNumber:7},void 0),a=()=>new Promise(n=>setTimeout(n,200));async function i(n){return ae(()=>{const e=n.querySelector(".dvn-scroller")??n.querySelector('[data-testid="data-grid-canvas"]');if(!e)throw new Error("Grid canvas not found");return e})}function D(n,e){var l;const t=(l=re.current)==null?void 0:l.getBounds(n,e);if(t&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&t.width>0&&t.height>0)return{x:t.x+t.width/2,y:t.y+t.height/2}}async function o(n){await a(),await ae(()=>D(0,0)!==void 0,{timeout:1500}).catch(()=>{})}function c(n){const e=n.getBoundingClientRect(),t=r=>e.left+S+r*p+p/2,l=e.top+F/2,d=r=>e.top+F+r*x+x/2;return{columnHeader:r=>D(r,-1)??{x:t(r),y:l},corner:()=>({x:e.left+S/2,y:l}),numbering:r=>({x:e.left+S/2,y:d(r)}),cell:(r,T)=>D(r,T)??{x:t(r),y:d(T)}}}function u(n,e,t={}){const l={clientX:e.x,clientY:e.y,pointerType:"mouse",...t};w.pointerDown(n,{...l,button:0,buttons:1}),w.pointerUp(n,{...l,button:0,buttons:0})}function ue(n,e,t,l={}){const d={pointerType:"mouse",...l};w.pointerDown(n,{...d,clientX:e.x,clientY:e.y,button:0,buttons:1}),w.pointerMove(n,{...d,clientX:t.x,clientY:t.y,buttons:1}),w.pointerUp(n,{...d,clientX:t.x,clientY:t.y,button:0,buttons:0})}const m={parameters:{screenshot:{keepState:!0}}},g={name:"Колонка — одиночный клик по шапке",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o(),u(e,c(e).columnHeader(1)),await a()}},y={name:"Колонки — диапазон через Shift",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o();const t=c(e);u(e,t.columnHeader(1)),await a(),u(e,t.columnHeader(3),{shiftKey:!0}),await a()}},E={name:"Колонки — несмежные через Ctrl",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o();const t=c(e);u(e,t.columnHeader(1),{ctrlKey:!0}),await a(),u(e,t.columnHeader(3),{ctrlKey:!0}),await a()}},h={name:"Вся таблица — клик по углу нумерации",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o(),u(e,c(e).corner()),await a()}},C={name:"Строка — клик по нумерации",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o(),u(e,c(e).numbering(2)),await a()}},b={name:"Строки — диапазон протяжкой по нумерации",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o();const t=c(e);ue(e,t.numbering(1),t.numbering(3)),await a()}},v={name:"Строки — несмежные через Ctrl",...m,render:s("range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o();const t=c(e);u(e,t.numbering(0),{ctrlKey:!0}),await a(),u(e,t.numbering(2),{ctrlKey:!0}),await a()}},f={name:"Ячейки — multi-range через Ctrl",...m,render:s("multi-range-cell"),play:async({canvasElement:n})=>{const e=await i(n);await o();const t=c(e);ue(e,t.cell(0,0),t.cell(1,1)),await a(),u(e,t.cell(3,3),{ctrlKey:!0}),await a()}},A={name:"Подсветка активной строки (highlightActiveType=row)",...m,render:s("range-cell","row"),play:async({canvasElement:n})=>{const e=await i(n);await o(),u(e,c(e).cell(1,2)),await a()}};var R,G,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Колонка — одиночный клик по шапке',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).columnHeader(1));
    await settle();
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var B,K,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Колонки — диапазон через Shift',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.columnHeader(1));
    await settle();
    click(el, p.columnHeader(3), {
      shiftKey: true
    });
    await settle();
  }
}`,...(M=(K=y.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,Y;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Колонки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.columnHeader(1), {
      ctrlKey: true
    });
    await settle();
    click(el, p.columnHeader(3), {
      ctrlKey: true
    });
    await settle();
  }
}`,...(Y=(P=E.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var _,O,X;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Вся таблица — клик по углу нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).corner());
    await settle();
  }
}`,...(X=(O=h.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var W,j,I;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Строка — клик по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).numbering(2));
    await settle();
  }
}`,...(I=(j=C.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var U,q,L;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Строки — диапазон протяжкой по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    drag(el, p.numbering(1), p.numbering(3));
    await settle();
  }
}`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var V,z,J;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Строки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.numbering(0), {
      ctrlKey: true
    });
    await settle();
    click(el, p.numbering(2), {
      ctrlKey: true
    });
    await settle();
  }
}`,...(J=(z=v.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,Z,$;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Ячейки — multi-range через Ctrl',
  ...screenshot,
  render: renderGrid('multi-range-cell'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    // диапазон протяжкой
    drag(el, p.cell(0, 0), p.cell(1, 1));
    await settle();
    // + ещё одна ячейка через Ctrl (становится активной)
    click(el, p.cell(3, 3), {
      ctrlKey: true
    });
    await settle();
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Подсветка активной строки (highlightActiveType=row)',
  ...screenshot,
  render: renderGrid('range-cell', 'row'),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).cell(1, 2));
    await settle();
  }
}`,...(te=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Le=["ColumnSingle","ColumnShiftRange","ColumnCtrlMulti","SelectAll","RowSingle","RowDragRange","RowCtrlMulti","MultiRangeCells","ActiveRowHighlight"];export{A as ActiveRowHighlight,E as ColumnCtrlMulti,y as ColumnShiftRange,g as ColumnSingle,f as MultiRangeCells,v as RowCtrlMulti,b as RowDragRange,C as RowSingle,h as SelectAll,Le as __namedExportsOrder,qe as default};
