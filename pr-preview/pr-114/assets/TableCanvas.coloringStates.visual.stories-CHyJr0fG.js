import{r as f,d as O}from"./react-D2T61mpp.js";import{c as Qe}from"./tableData-DVJFoYoT.js";import{T as Xe}from"./TableCanvas-Dh3tlWrP.js";import{c as s,s as u,h as i,d as N,g as Ze,a as e4,m as r4}from"./visual-helpers-CcEyQoHu.js";import"./FiltersActions-H5ntWuON.js";import"./IconButton-CbjzGPcl.js";import"./@salutejs/plasma-icons-B39iMR5e.js";import"./styled-components-B4nx6Z04.js";import"./react-is-Clcustum.js";import"./vendor-m8ptr2NK.js";import"./@tanstack/react-virtual-T6w5YrM7.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-finai-CKzZmfdH.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-0LQegF5b.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B3n0ev6h.js";import"./TextField-DERuA4Nu.js";import"./sharedUtilsInputs-BJdvlc2m.js";import"./AiAgentPopup-DVfjVdJ6.js";import"./TextArea-2f258Naa.js";import"./sharedUtilsResizable-BGoHR4Ou.js";import"./Table-Q65CvKOT.js";import"./Collapse-DUmKgMT1.js";import"./react-data-grid-DKzBhZuS.js";import"./TableTabs-D6SEcbTs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-fqZQHYan.js";import"./@glideappsfinal/glide-data-grid-DGM0WF9M.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSjJSxVv.js";import"./ListOfFilters-B6QAAqwx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BhoeGIjn.js";import"./EmptyState-C0F7Jmuu.js";import"./MassActions-Cro695pV.js";import"./Autocomplete-B4Ne9UH9.js";import"./ErrorPage-B7VwmGr8.js";const U4={title:"Локальные компоненты/TableCanvas/ColoringStates/Визуальные тесты",tags:["!autodocs"]},W=f.createRef(),d={headerH:33,rowH:32,numW:32,colW:120,extraServiceCols:2,extraServiceW:32},L=Qe().slice(0,6),a4=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`строк: ${L.length}`},{columnId:"complete",value:"263"}]}],p=({row:a,column:e})=>{var r;return((r=a.values.find(G=>G.columnId===e.key))==null?void 0:r.value)??""},u4={Critical:"bgCellNegative",High:"bgCellWarning",Medium:"bgCellInfo",Low:"bgCellPositive"},t4=(a,e)=>{const r=u4[a];return r?{bgCell:e[r]}:void 0},n4=[{key:"id",name:"ID",width:d.colW,renderSummaryCell:p},{key:"task",name:"Task (edit)",width:d.colW,renderSummaryCell:p,editingCell:{component:"inputString",editable:!0,error:{value:a=>Number(a.id)%7===0}}},{key:"priority",name:"Priority",width:d.colW,renderSummaryCell:p,themeOverride:({row:a,theme:e})=>t4(a.priority,e)},{key:"issueType",name:"Type",width:d.colW,renderSummaryCell:p},{key:"complete",name:"% (edit)",width:d.colW,renderSummaryCell:p,editingCell:{component:"inputNumber",editable:!0}}],t=(a={})=>()=>{const e=new Set(a.preCheckedRows??[]),r=f.useState(()=>new Set(L.filter((c,Je)=>e.has(Je)).map(c=>c.id))),[G,qe]=f.useState(()=>[...L]);return O.jsxDEV("div",{style:{padding:8},children:O.jsxDEV(Xe,{refTable:W,tableConfig:{containerStyle:{height:"352px",width:"720px"},rowSize:{default:"medium",showInControl:!1},rowMarkers:{startIndex:1},summaryRows:{showDefault:!0,showInControl:!1},cellsSelection:{mode:"range-cell"},highlightActiveType:a.highlightActiveType??"row",selecting:{state:r,rowKeyGetter:c=>c.id},editing:{onRowsChange:c=>qe([...c]),rowKeyGetter:c=>c.id,defaultEnabled:!0}},columnConfig:n4,bottomSummaryRows:a4,rows:G},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColoringStates/TableCanvas.coloringStates.visual.stories.tsx",lineNumber:159,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColoringStates/TableCanvas.coloringStates.visual.stories.tsx",lineNumber:158,columnNumber:7},void 0)},l={parameters:{screenshot:{keepState:!0}}},o=a=>({parameters:{forcedTheme:a}}),n=async({canvasElement:a})=>{const e=await Ze(a);return await e4(W),{el:e,p:r4(e,W,d)}},m={name:"Покой — все типы ячеек",render:t()},w={name:"Hover строки (включён по умолчанию)",...l,render:t(),play:async a=>{const{el:e,p:r}=await n(a);i(e,r.cell(3,2)),await u()}},g={name:"Отмеченные чекбоксом строки — покой",render:t({preCheckedRows:[1,3]})},h={name:"Отмеченная строка под курсором",...l,render:t({preCheckedRows:[1,3]}),play:async a=>{const{el:e,p:r}=await n(a);i(e,r.cell(3,1)),await u()}},y={name:"Выбранная строка — покой (без курсора)",render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u()}},k={name:"Выбранная строка под курсором (hover2 у цветных)",...l,render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u(),i(e,r.cell(0,2)),await u()}},C={name:"Выбранная строка с нажатым чекбоксом",render:t({preCheckedRows:[2]}),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u()}},v={name:"Выбранная строка с чекбоксом под курсором (hover2)",...l,render:t({preCheckedRows:[2]}),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u(),i(e,r.cell(0,2)),await u()}},A={name:"Пересечение выбранной строки с диапазоном = выделение",render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(1,2)),await u(),N(e,r.cell(3,1),r.cell(3,3)),await u()}},E={name:"Выделенная шапка под курсором (ступень глубже)",...l,render:t({highlightActiveType:"disabled"}),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.columnHeader(2)),await u(),i(e,r.columnHeader(2)),await u()}},R={name:"Hover внутри выделенной строки (по нумерации)",...l,render:t({highlightActiveType:"disabled"}),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.numbering(2)),await u(),i(e,r.cell(2,2)),await u()}},D={name:"Рамка ошибки поверх выделения",render:t({highlightActiveType:"disabled"}),play:async a=>{const{el:e,p:r}=await n(a);N(e,r.cell(0,0),r.cell(2,1)),await u()}},x={name:"Dark — покой",...o("FinAI:dark"),render:t()},S={name:"Dark — отмеченная строка под курсором",parameters:{...l.parameters,...o("FinAI:dark").parameters},render:t({preCheckedRows:[1,3]}),play:async a=>{const{el:e,p:r}=await n(a);i(e,r.cell(3,1)),await u()}},F={name:"Dark — выбранная строка под курсором (hover2)",parameters:{...l.parameters,...o("FinAI:dark").parameters},render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u(),i(e,r.cell(0,2)),await u()}},B={name:"Dark — пересечение выбранной строки с диапазоном",...o("FinAI:dark"),render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(1,2)),await u(),N(e,r.cell(3,1),r.cell(3,3)),await u()}},H={name:"Beta light — покой",...o("FinAI Beta:light"),render:t()},b={name:"Beta dark — покой",...o("FinAI Beta:dark"),render:t()},I={name:"Beta dark — выбранная строка",...o("FinAI Beta:dark"),render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u()}},P={name:"HC light — покой",...o("FinAI HC:light"),render:t()},T={name:"HC light — выбранная строка",...o("FinAI HC:light"),render:t(),play:async a=>{const{el:e,p:r}=await n(a);s(e,r.cell(3,2)),await u()}};var _,M,Y;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Покой — все типы ячеек',
  render: renderGrid()
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var j,K,U;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Hover строки (включён по умолчанию)',
  ...keepState,
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    hover(el, p.cell(3, 2));
    await settle();
  }
}`,...(U=(K=w.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var V,z,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Отмеченные чекбоксом строки — покой',
  render: renderGrid({
    preCheckedRows: [1, 3]
  })
}`,...($=(z=g.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var q,J,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Отмеченная строка под курсором',
  ...keepState,
  render: renderGrid({
    preCheckedRows: [1, 3]
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    hover(el, p.cell(3, 1));
    await settle();
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Выбранная строка — покой (без курсора)',
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,ue;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Выбранная строка под курсором (hover2 у цветных)',
  ...keepState,
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  }
}`,...(ue=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};var te,ne,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Выбранная строка с нажатым чекбоксом',
  render: renderGrid({
    preCheckedRows: [2]
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  }
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ce,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Выбранная строка с чекбоксом под курсором (hover2)',
  ...keepState,
  render: renderGrid({
    preCheckedRows: [2]
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  }
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,de,pe;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Пересечение выбранной строки с диапазоном = выделение',
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
    drag(el, p.cell(3, 1), p.cell(3, 3));
    await settle();
  }
}`,...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,we,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Выделенная шапка под курсором (ступень глубже)',
  ...keepState,
  render: renderGrid({
    highlightActiveType: 'disabled'
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.columnHeader(2));
    await settle();
    hover(el, p.columnHeader(2));
    await settle();
  }
}`,...(ge=(we=E.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var he,ye,ke;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Hover внутри выделенной строки (по нумерации)',
  ...keepState,
  render: renderGrid({
    highlightActiveType: 'disabled'
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.numbering(2));
    await settle();
    hover(el, p.cell(2, 2));
    await settle();
  }
}`,...(ke=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Ce,ve,Ae;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Рамка ошибки поверх выделения',
  render: renderGrid({
    highlightActiveType: 'disabled'
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    drag(el, p.cell(0, 0), p.cell(2, 1));
    await settle();
  }
}`,...(Ae=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var Ee,Re,De;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Dark — покой',
  ...inTheme('FinAI:dark'),
  render: renderGrid()
}`,...(De=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var xe,Se,Fe;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Dark — отмеченная строка под курсором',
  parameters: {
    ...keepState.parameters,
    ...inTheme('FinAI:dark').parameters
  },
  render: renderGrid({
    preCheckedRows: [1, 3]
  }),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    hover(el, p.cell(3, 1));
    await settle();
  }
}`,...(Fe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Be,He,be;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Dark — выбранная строка под курсором (hover2)',
  parameters: {
    ...keepState.parameters,
    ...inTheme('FinAI:dark').parameters
  },
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  }
}`,...(be=(He=F.parameters)==null?void 0:He.docs)==null?void 0:be.source}}};var Ie,Pe,Te;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Dark — пересечение выбранной строки с диапазоном',
  ...inTheme('FinAI:dark'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
    drag(el, p.cell(3, 1), p.cell(3, 3));
    await settle();
  }
}`,...(Te=(Pe=B.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ge,fe,We;H.parameters={...H.parameters,docs:{...(Ge=H.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Beta light — покой',
  ...inTheme('FinAI Beta:light'),
  render: renderGrid()
}`,...(We=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:We.source}}};var Le,Ne,Oe;b.parameters={...b.parameters,docs:{...(Le=b.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Beta dark — покой',
  ...inTheme('FinAI Beta:dark'),
  render: renderGrid()
}`,...(Oe=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var _e,Me,Ye;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Beta dark — выбранная строка',
  ...inTheme('FinAI Beta:dark'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  }
}`,...(Ye=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:Ye.source}}};var je,Ke,Ue;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'HC light — покой',
  ...inTheme('FinAI HC:light'),
  render: renderGrid()
}`,...(Ue=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Ve,ze,$e;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'HC light — выбранная строка',
  ...inTheme('FinAI HC:light'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const {
      el,
      p
    } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  }
}`,...($e=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};const V4=["Rest","HoverRow","CheckedRows","CheckedRowHover","ActiveRow","ActiveRowHover","ActiveRowChecked","ActiveRowCheckedHover","ActiveRowRangeIntersect","HeaderSelectedHover","RowSelectionHoverInside","ErrorRingOverSelection","RestDark","CheckedRowHoverDark","ActiveRowHoverDark","ActiveRowRangeIntersectDark","RestBetaLight","RestBetaDark","ActiveRowBetaDark","RestHcLight","ActiveRowHcLight"];export{y as ActiveRow,I as ActiveRowBetaDark,C as ActiveRowChecked,v as ActiveRowCheckedHover,T as ActiveRowHcLight,k as ActiveRowHover,F as ActiveRowHoverDark,A as ActiveRowRangeIntersect,B as ActiveRowRangeIntersectDark,h as CheckedRowHover,S as CheckedRowHoverDark,g as CheckedRows,D as ErrorRingOverSelection,E as HeaderSelectedHover,w as HoverRow,m as Rest,b as RestBetaDark,H as RestBetaLight,x as RestDark,P as RestHcLight,R as RowSelectionHoverInside,V4 as __namedExportsOrder,U4 as default};
