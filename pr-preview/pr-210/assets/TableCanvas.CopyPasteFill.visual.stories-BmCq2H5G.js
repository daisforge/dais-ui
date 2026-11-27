import{b as S,r as ee}from"./react-UEdzNlUe.js";import{c as ue}from"./tableData-DKA5H0bF.js";import{a as k,e as f,b as ne}from"./index-Dgmteq0e.js";import{T as re}from"./TableCanvas-B-sc2lN_.js";import{c as r,s as a,d as $,g as ae,a as te,m as le}from"./visual-helpers-CpY530oS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./styled-components-DEOLQzLG.js";import"./react-is-CJ4CjPIR.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-fsDgsITm.js";import"./@daisforge/glide-data-grid-BmuFCMzj.js";import"./preload-helper-CXPOYF_q.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-Bz53VcLG.js";import"./sharedUiSearch-CJDcUmRZ.js";import"./TextField-C6nfyspX.js";import"./sharedUtilsInputs-vr_YQm4s.js";import"./Typography-CBjtlY1k.js";import"./ListOfFilters-DfOynYlN.js";import"./FiltersActions-B0Qv4g0-.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BRWfFtoA.js";import"./EmptyState-R0rC7Cfj.js";import"./unidentified@3x-CzrRZ7hN.js";import"./ErrorPage-BONwv2Kw.js";import"./Autocomplete-B7hG-rhm.js";const uu={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты выделения",tags:["!autodocs"]},h=ee.createRef(),s={headerH:33,rowH:32,numW:32,colW:140},oe=ue().slice(0,6),se=[{key:"id",name:"ID",width:s.colW},{key:"task",name:"Title",width:s.colW},{key:"priority",name:"Priority",width:s.colW},{key:"issueType",name:"Type",width:s.colW},{key:"complete",name:"%",width:s.colW}],t=(n,e="disabled",u)=>()=>S.jsxDEV("div",{style:{padding:8},children:S.jsxDEV(re,{refTable:h,tableConfig:{containerStyle:{height:"320px",width:"800px"},rowSize:{default:"medium",showInControl:!1},rowMarkers:{startIndex:1},cellsSelection:{mode:n,enableColumnSelection:!0,enableRowSelection:!0,enableSelectAll:!0,onChange:u},highlightActiveType:e},columnConfig:se,rows:oe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:70,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:69,columnNumber:7},void 0),l={parameters:{screenshot:{keepState:!0}}},o=async({canvasElement:n})=>{const e=await ae(n);return await te(h),{el:e,p:le(e,h,s)}},c={name:"Колонка — одиночный клик по шапке",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.columnHeader(1)),await a()}},i={name:"Колонки — диапазон через Shift",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.columnHeader(1)),await a(),r(e,u.columnHeader(3),{shiftKey:!0}),await a()}},x=ne(),m={name:"Колонки — несмежные через Ctrl",...l,render:t("range-cell","disabled",x),play:async n=>{var A;const{el:e,p:u}=await o(n);x.mockClear(),(A=h.current)==null||A.focus();const E=()=>{var b;return(b=x.mock.lastCall)==null?void 0:b[0].columns.toArray()};r(e,u.columnHeader(1),{ctrlKey:!0}),await k(()=>f(E()).toEqual([1])),r(e,u.columnHeader(3),{ctrlKey:!0}),await k(()=>f(E()).toEqual([1,3]))}},p={name:"Вся таблица — клик по углу нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.corner()),await a()}},d={name:"Строка — клик по нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.numbering(2)),await a()}},g={name:"Строки — диапазон протяжкой по нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);$(e,u.numbering(1),u.numbering(3)),await a()}},y={name:"Строки — несмежные через Ctrl",...l,render:t("range-cell"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.numbering(0),{ctrlKey:!0}),await a(),r(e,u.numbering(2),{ctrlKey:!0}),await a()}},w={name:"Ячейки — multi-range через Ctrl",...l,render:t("multi-range-cell"),play:async n=>{const{el:e,p:u}=await o(n);$(e,u.cell(0,0),u.cell(1,1)),await a(),r(e,u.cell(3,3),{ctrlKey:!0}),await a()}},C={name:"Подсветка активной строки (highlightActiveType=row)",...l,render:t("range-cell","row"),play:async n=>{const{el:e,p:u}=await o(n);r(e,u.cell(1,2)),await a()}};var F,D,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Колонка — одиночный клик по шапке',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.columnHeader(1));
    await settle();
  }
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,v,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Колонки — диапазон через Shift',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.columnHeader(1));
    await settle();
    click(el, p.columnHeader(3), {
      shiftKey: true
    });
    await settle();
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var B,H,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Колонки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell', 'disabled', onColumnSelectionChange),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    onColumnSelectionChange.mockClear();
    // Сначала передаём фокус таблице. При первом фокусе Glide выбирает ячейку.
    tableRef.current?.focus();
    const selectedColumns = () => onColumnSelectionChange.mock.lastCall?.[0].columns.toArray();
    click(el, p.columnHeader(1), {
      ctrlKey: true
    });
    await waitFor(() => expect(selectedColumns()).toEqual([1]));
    click(el, p.columnHeader(3), {
      ctrlKey: true
    });
    await waitFor(() => expect(selectedColumns()).toEqual([1, 3]));
  }
}`,...(G=(H=m.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,W,M;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Вся таблица — клик по углу нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.corner());
    await settle();
  }
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,q,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Строка — клик по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.numbering(2));
    await settle();
  }
}`,...(O=(q=d.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var j,I,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Строки — диапазон протяжкой по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    drag(el, p.numbering(1), p.numbering(3));
    await settle();
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,_,z;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Строки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.numbering(0), {
      ctrlKey: true
    });
    await settle();
    click(el, p.numbering(2), {
      ctrlKey: true
    });
    await settle();
  }
}`,...(z=(_=y.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,Y,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Ячейки — multi-range через Ctrl',
  ...screenshot,
  render: renderGrid('multi-range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    // диапазон протяжкой
    drag(el, p.cell(0, 0), p.cell(1, 1));
    await settle();
    // + ещё одна ячейка через Ctrl (становится активной)
    click(el, p.cell(3, 3), {
      ctrlKey: true
    });
    await settle();
  }
}`,...(J=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Подсветка активной строки (highlightActiveType=row)',
  ...screenshot,
  render: renderGrid('range-cell', 'row'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const nu=["ColumnSingle","ColumnShiftRange","ColumnCtrlMulti","SelectAll","RowSingle","RowDragRange","RowCtrlMulti","MultiRangeCells","ActiveRowHighlight"];export{C as ActiveRowHighlight,m as ColumnCtrlMulti,i as ColumnShiftRange,c as ColumnSingle,w as MultiRangeCells,y as RowCtrlMulti,g as RowDragRange,d as RowSingle,p as SelectAll,nu as __namedExportsOrder,uu as default};
