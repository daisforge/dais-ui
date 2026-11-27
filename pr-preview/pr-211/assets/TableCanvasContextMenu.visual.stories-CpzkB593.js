import{r as h,b as D}from"./react-UEdzNlUe.js";import{c as z}from"./tableData-DKA5H0bF.js";import{a as T,f as m,w as ee,e as u}from"./index-Dgmteq0e.js";import{T as te}from"./TableCanvas-CDZkRChO.js";import{M as oe}from"./MenuTable-ByCSQK6B.js";import{a as ne,s as re,g as ae}from"./visual-helpers-CpY530oS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-7MphdwvM.js";import"./styled-components-BDqbx52B.js";import"./react-is-CJ4CjPIR.js";import"./vendor-DTHFTCxs.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@salutejs/plasma-icons-Ds6qywPJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-1dyroHpI.js";import"./@daisforge/glide-data-grid-DH_ChNwc.js";import"./preload-helper-DihHaBn_.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-QolVGGjB.js";import"./sharedUiSearch-Blb9DTGJ.js";import"./TextField-D25ygU2-.js";import"./sharedUtilsInputs-DjjTtkSA.js";import"./Typography-iY6IgvJ3.js";import"./ListOfFilters-CfqXpBrg.js";import"./FiltersActions-C9S7KRn0.js";import"./IconButton-Bf4wRAsC.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DDiwPRY3.js";import"./EmptyState-k64dhu_G.js";import"./unidentified@3x-p-1UhR3r.js";import"./ErrorPage-CpTA2l3H.js";import"./Autocomplete-DGklYyP-.js";const et={title:"Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты",tags:["!autodocs"]},Q={parameters:{screenshot:{keepState:!0,capture:"page"}}};function se(){const[r]=h.useState(z),l=h.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return D.jsxDEV(te,{tableConfig:{onCellContextMenu:(e,t,o)=>{console.debug(e,t,o,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,o)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(o,"event"),console.groupEnd()}},onHeaderContextMenu:(e,t,o)=>console.debug(e,t,o),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,o)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(o,"event"),console.groupEnd()}}},columnConfig:l,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:50,columnNumber:5},this)}const w={name:"Контекстное меню (все возможности)",...Q,render:se,play:async({canvasElement:r})=>{const l=await T(()=>{const s=r.querySelector('[data-testid="data-grid-canvas"]');if(!s)throw new Error("Data grid canvas not found");return s});await new Promise(s=>{setTimeout(s,250)});const e=r.ownerDocument,t=r.querySelector(".dvn-scroller")??l,o=t.getBoundingClientRect(),a=o.left+80,c=o.top+20;m.pointerDown(t,{clientX:a,clientY:c,button:2,buttons:2,pointerType:"mouse"}),m.pointerUp(t,{clientX:a,clientY:c,button:2,buttons:0,pointerType:"mouse"}),m.contextMenu(t,{clientX:a,clientY:c,button:2,buttons:2}),await T(()=>{if(!e.querySelector('[data-testid="table-context-menu"]'))throw new Error("Context menu is not open")},{timeout:3e3})}};function p(r,l,e=!1){const t=h.createRef(),o={small:300,medium:380,big:440}[r];return{...Q,render:()=>D.jsxDEV("div",{style:e?{paddingTop:"calc(100vh - 220px)"}:void 0,children:D.jsxDEV(oe,{tableRef:t,size:r,contextMenuWidth:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:187,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:184,columnNumber:7},this),play:async({canvasElement:a})=>{var k;const c=ee(a.ownerDocument.body);await a.ownerDocument.fonts.ready,await ne(t),await re();const s=await ae(a),g=(k=t.current)==null?void 0:k.getBounds(0,0);if(!g)throw new Error("Границы ячейки недоступны");const b={clientX:g.x+64,clientY:g.y+g.height/2,button:2,pointerType:"mouse"};m.pointerDown(s,{...b,buttons:2}),m.pointerUp(s,{...b,buttons:0}),m.contextMenu(s,b),await u(await c.findByText("Копировать")).toBeVisible();const S=await c.findByRole("tree");if(await T(()=>{var d,v;const n=(d=S.parentElement)==null?void 0:d.getBoundingClientRect(),i=(v=t.current)==null?void 0:v.getBounds(0,0);if(!n||!i)throw new Error("Границы ячейки или контекстного меню недоступны");l!==void 0?u(n.width).toBe(parseFloat(String(l))):u(n.width).toBeLessThanOrEqual(o),u(Math.abs(n.x-b.clientX)).toBeLessThanOrEqual(1),u(Math.abs(e?n.bottom-i.y+4:n.y-i.y-i.height-4)).toBeLessThanOrEqual(1)}),e){const n=a.ownerDocument.scrollingElement,i=S.parentElement;if(!n||!i)throw new Error("Меню или страница недоступны");const d=n.scrollTop,v=i.getBoundingClientRect().top;try{n.scrollTop+=64,await T(()=>{const B=n.scrollTop-d;u(B).toBeGreaterThan(0);const Z=i.getBoundingClientRect().top-v;u(Math.abs(Z+B)).toBeLessThanOrEqual(1)})}finally{n.scrollTop=d}}}}}const C=p("small"),x=p("medium"),f=p("big"),y=p("medium",600),M=p("small","96px"),E=p("medium",void 0,!0);var R,N,$;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  ...screenshot,
  render: ExampleAllFeatures,
  play: async ({
    canvasElement
  }) => {
    const gridCanvas = await waitFor(() => {
      const el = canvasElement.querySelector('[data-testid="data-grid-canvas"]') as HTMLCanvasElement | null;
      if (!el) throw new Error('Data grid canvas not found');
      return el;
    });
    await new Promise(resolve => {
      setTimeout(resolve, 250);
    });
    const doc = canvasElement.ownerDocument;
    const target = canvasElement.querySelector('.dvn-scroller') as HTMLElement | null ?? gridCanvas;
    const rect = target.getBoundingClientRect();
    const clientX = rect.left + 80;
    const clientY = rect.top + 20; // header point

    fireEvent.pointerDown(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 2,
      pointerType: 'mouse'
    });
    fireEvent.pointerUp(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 0,
      pointerType: 'mouse'
    });
    fireEvent.contextMenu(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 2
    });
    await waitFor(() => {
      if (!doc.querySelector('[data-testid="table-context-menu"]')) {
        throw new Error('Context menu is not open');
      }
    }, {
      timeout: 3000
    });
  }
}`,...($=(N=w.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var q,F,I;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:"cellMenu('small')",...(I=(F=C.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var X,A,L;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:"cellMenu('medium')",...(L=(A=x.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var Y,H,O;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:"cellMenu('big')",...(O=(H=f.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,V,_;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:"cellMenu('medium', 600)",...(_=(V=y.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,U,G;M.parameters={...M.parameters,docs:{...(P=M.parameters)==null?void 0:P.docs,source:{originalSource:"cellMenu('small', '96px')",...(G=(U=M.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var W,J,K;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:"cellMenu('medium', undefined, true)",...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const tt=["ContextMenuAllFeatures","CellSmall","CellMedium","CellBig","ExplicitWideMenu","ExplicitNarrowMenu","CellNearBottom"];export{f as CellBig,x as CellMedium,E as CellNearBottom,C as CellSmall,w as ContextMenuAllFeatures,M as ExplicitNarrowMenu,y as ExplicitWideMenu,tt as __namedExportsOrder,et as default};
