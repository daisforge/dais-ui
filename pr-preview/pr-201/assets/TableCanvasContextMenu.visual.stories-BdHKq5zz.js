import{r as M,b as E}from"./react-UEdzNlUe.js";import{c as Q}from"./tableData-DKA5H0bF.js";import{a as T,f as u,w as Z,e as c}from"./index-Dgmteq0e.js";import{T as z}from"./TableCanvas-CzSwKtwf.js";import{M as ee}from"./MenuTable-CygXkq8u.js";import{a as te,s as oe,g as ne}from"./visual-helpers-CpY530oS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./styled-components-DEOLQzLG.js";import"./react-is-CJ4CjPIR.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-DO9zHrCT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CcBeU3TM.js";import"./@daisforge/glide-data-grid-D024sOUq.js";import"./preload-helper-EhFzO87Y.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-DFmivNf9.js";import"./sharedUiSearch-CVvUis1o.js";import"./TextField-D6H4HaX6.js";import"./sharedUtilsInputs-w6ic1kKw.js";import"./Typography-DJjZbdrn.js";import"./ListOfFilters-CMBgqaZZ.js";import"./FiltersActions-CQdP9pZG.js";import"./IconButton-Bi2q2X3M.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-K5IwoLrO.js";import"./EmptyState-faT1mwDb.js";import"./unidentified@3x-BjiX_gDg.js";import"./ErrorPage-aNse5QDY.js";import"./Autocomplete-MyjF_KMn.js";const Ze={title:"Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты",tags:["!autodocs"]},J={parameters:{screenshot:{keepState:!0,capture:"page"}}};function re(){const[n]=M.useState(Q),a=M.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return E.jsxDEV(z,{tableConfig:{onCellContextMenu:(e,t,o)=>{console.debug(e,t,o,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,o)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(o,"event"),console.groupEnd()}},onHeaderContextMenu:(e,t,o)=>console.debug(e,t,o),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,o)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(o,"event"),console.groupEnd()}}},columnConfig:a,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:50,columnNumber:5},this)}const g={name:"Контекстное меню (все возможности)",...J,render:re,play:async({canvasElement:n})=>{const a=await T(()=>{const r=n.querySelector('[data-testid="data-grid-canvas"]');if(!r)throw new Error("Data grid canvas not found");return r});await new Promise(r=>{setTimeout(r,250)});const e=n.ownerDocument,t=n.querySelector(".dvn-scroller")??a,o=t.getBoundingClientRect(),s=o.left+80,i=o.top+20;u.pointerDown(t,{clientX:s,clientY:i,button:2,buttons:2,pointerType:"mouse"}),u.pointerUp(t,{clientX:s,clientY:i,button:2,buttons:0,pointerType:"mouse"}),u.contextMenu(t,{clientX:s,clientY:i,button:2,buttons:2}),await T(()=>{if(!e.querySelector('[data-testid="table-context-menu"]'))throw new Error("Context menu is not open")},{timeout:3e3})}};function m(n,a,e=!1){const t=M.createRef(),o={small:300,medium:380,big:440}[n];return{...J,render:()=>E.jsxDEV("div",{style:e?{paddingTop:"calc(100vh - 220px)"}:void 0,children:E.jsxDEV(ee,{tableRef:t,size:n,contextMenuWidth:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:187,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:184,columnNumber:7},this),play:async({canvasElement:s})=>{var h;const i=Z(s.ownerDocument.body);await s.ownerDocument.fonts.ready,await te(t),await oe();const r=await ne(s),p=(h=t.current)==null?void 0:h.getBounds(0,0);if(!p)throw new Error("Границы ячейки недоступны");const d={clientX:p.x+64,clientY:p.y+p.height/2,button:2,pointerType:"mouse"};u.pointerDown(r,{...d,buttons:2}),u.pointerUp(r,{...d,buttons:0}),u.contextMenu(r,d),await c(await i.findByText("Копировать")).toBeVisible();const K=await i.findByRole("tree");await T(()=>{var D,S;const l=(D=K.parentElement)==null?void 0:D.getBoundingClientRect(),b=(S=t.current)==null?void 0:S.getBounds(0,0);if(!l||!b)throw new Error("Границы ячейки или контекстного меню недоступны");a!==void 0?c(l.width).toBe(parseFloat(String(a))):c(l.width).toBeLessThanOrEqual(o),c(Math.abs(l.x-d.clientX)).toBeLessThanOrEqual(1),c(Math.abs(e?l.bottom-b.y+4:l.y-b.y-b.height-4)).toBeLessThanOrEqual(1)})}}}const v=m("small"),w=m("medium"),C=m("big"),x=m("medium",600),f=m("small","96px"),y=m("medium",void 0,!0);var k,B,N;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(B=g.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var R,$,q;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:"cellMenu('small')",...(q=($=v.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,I,X;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:"cellMenu('medium')",...(X=(I=w.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var A,Y,H;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:"cellMenu('big')",...(H=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var L,j,O;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:"cellMenu('medium', 600)",...(O=(j=x.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var V,_,P;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:"cellMenu('small', '96px')",...(P=(_=f.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var U,W,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:"cellMenu('medium', undefined, true)",...(G=(W=y.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const ze=["ContextMenuAllFeatures","CellSmall","CellMedium","CellBig","ExplicitWideMenu","ExplicitNarrowMenu","CellNearBottom"];export{C as CellBig,w as CellMedium,y as CellNearBottom,v as CellSmall,g as ContextMenuAllFeatures,f as ExplicitNarrowMenu,x as ExplicitWideMenu,ze as __namedExportsOrder,Ze as default};
