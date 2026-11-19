import{b as x,r as q}from"./react-B60MRyL7.js";import{c as J}from"./tableData-DKA5H0bF.js";import{T as Q}from"./TableCanvas-CKFUvttF.js";import{c as a,s as u,d as Y,g as X,a as Z,m as $}from"./visual-helpers-lTf2SGTN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-Bs8ZiKbo.js";import"./styled-components-DN-dyp3E.js";import"./react-is-Clcustum.js";import"./vendor-BOXbJjQW.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DDW327_Q.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-b7WWv5em.js";import"./Box-JkhPdOcO.js";import"./Collapse-BNL-7RWo.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUjkhz5W.js";import"./@glideappsfinal/glide-data-grid-CaPCdkNo.js";import"./preload-helper-Rbr_SUQB.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-dzgHMZvw.js";import"./sharedUiSearch-DQwhVP-7.js";import"./TextField-B86jICzu.js";import"./sharedUtilsInputs-uFKaIJDG.js";import"./TypographyWithAutoTooltip-D4bbCBGZ.js";import"./Typography-Dhksu6ui.js";import"./ListOfFilters-D7npQKzu.js";import"./Table-fGUkz_i2.js";import"./react-data-grid-Cyhpllwh.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_bpb5vRV.js";import"./NumberFormat-CmAELO3o.js";import"./EmptyState-CciL3-J3.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-2-wzgpjN.js";import"./Autocomplete-MlzChFIs.js";import"./FiltersActions-B9A7BCia.js";import"./IconButton-CqyDmNx8.js";import"./TooltipList-CJDTIlLy.js";import"./ErrorPage-dH3WIaA2.js";import"./index-BdcmQ601.js";import"./index-BFB8ouFt.js";const Xe={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты выделения",tags:["!autodocs"]},h=q.createRef(),s={headerH:33,rowH:32,numW:32,colW:140},ee=J().slice(0,6),re=[{key:"id",name:"ID",width:s.colW},{key:"task",name:"Title",width:s.colW},{key:"priority",name:"Priority",width:s.colW},{key:"issueType",name:"Type",width:s.colW},{key:"complete",name:"%",width:s.colW}],t=(n,e="disabled")=>()=>x.jsxDEV("div",{style:{padding:8},children:x.jsxDEV(Q,{refTable:h,tableConfig:{containerStyle:{height:"320px",width:"800px"},rowSize:{default:"medium",showInControl:!1},rowMarkers:{startIndex:1},cellsSelection:{mode:n,enableColumnSelection:!0,enableRowSelection:!0,enableSelectAll:!0},highlightActiveType:e},columnConfig:re,rows:ee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:67,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.visual.stories.tsx",lineNumber:66,columnNumber:7},void 0),l={parameters:{screenshot:{keepState:!0}}},o=async({canvasElement:n})=>{const e=await X(n);return await Z(h),{el:e,p:$(e,h,s)}},i={name:"Колонка — одиночный клик по шапке",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.columnHeader(1)),await u()}},c={name:"Колонки — диапазон через Shift",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.columnHeader(1)),await u(),a(e,r.columnHeader(3),{shiftKey:!0}),await u()}},m={name:"Колонки — несмежные через Ctrl",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.columnHeader(1),{ctrlKey:!0}),await u(),a(e,r.columnHeader(3),{ctrlKey:!0}),await u()}},p={name:"Вся таблица — клик по углу нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.corner()),await u()}},d={name:"Строка — клик по нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.numbering(2)),await u()}},g={name:"Строки — диапазон протяжкой по нумерации",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);Y(e,r.numbering(1),r.numbering(3)),await u()}},y={name:"Строки — несмежные через Ctrl",...l,render:t("range-cell"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.numbering(0),{ctrlKey:!0}),await u(),a(e,r.numbering(2),{ctrlKey:!0}),await u()}},w={name:"Ячейки — multi-range через Ctrl",...l,render:t("multi-range-cell"),play:async n=>{const{el:e,p:r}=await o(n);Y(e,r.cell(0,0),r.cell(1,1)),await u(),a(e,r.cell(3,3),{ctrlKey:!0}),await u()}},C={name:"Подсветка активной строки (highlightActiveType=row)",...l,render:t("range-cell","row"),play:async n=>{const{el:e,p:r}=await o(n);a(e,r.cell(1,2)),await u()}};var E,b,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(b=i.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var S,k,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,f,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Колонки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.columnHeader(1), {
      ctrlKey: true
    });
    await settle();
    click(el, p.columnHeader(3), {
      ctrlKey: true
    });
    await settle();
  }
}`,...(F=(f=m.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var R,v,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var H,K,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(K=d.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var G,W,M;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,O,j;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var I,L,V;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(L=w.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,z,U;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(z=C.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const Ze=["ColumnSingle","ColumnShiftRange","ColumnCtrlMulti","SelectAll","RowSingle","RowDragRange","RowCtrlMulti","MultiRangeCells","ActiveRowHighlight"];export{C as ActiveRowHighlight,m as ColumnCtrlMulti,c as ColumnShiftRange,i as ColumnSingle,w as MultiRangeCells,y as RowCtrlMulti,g as RowDragRange,d as RowSingle,p as SelectAll,Ze as __namedExportsOrder,Xe as default};
