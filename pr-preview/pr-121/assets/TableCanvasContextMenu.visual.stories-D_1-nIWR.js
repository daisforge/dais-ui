import{r as m,d as b}from"./react-D2T61mpp.js";import{c as g}from"./tableData-DVJFoYoT.js";import{cp as p,cw as u}from"./vendor-Cy6vaFvA.js";import{T as w}from"./TableCanvas-DQFqrGoq.js";import"./react-is-Clcustum.js";import"./styled-components-BVG9KNaZ.js";import"./@tanstack/react-virtual-DuyFBKnT.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-8ZQ_BEqD.js";import"./IconButton-ZSwgo42J.js";import"./@salutejs/plasma-icons-BFHaPNub.js";import"./@salutejs/sdds-finai-DN-VTvmQ.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-Co1HaYhE.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BUf1dJQw.js";import"./TextField-C9UC2XGi.js";import"./sharedUtilsInputs-BZCri4JS.js";import"./AiAgentPopup-DtLqyKJL.js";import"./TextArea-DD_TwqAi.js";import"./sharedUtilsResizable-lVhK15hL.js";import"./Table-EdUnEbuo.js";import"./Collapse-BBGjGWKA.js";import"./react-data-grid-OJf6xqML.js";import"./TableTabs-SFgUtVKW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DAWWoA3m.js";import"./@glideappsfinal/glide-data-grid-B-yCBOjO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ufnWwbWE.js";import"./ListOfFilters-BmOCPIQ_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BzlsbOV1.js";import"./EmptyState-VCDNBSXT.js";import"./MassActions-BIOpEEpz.js";import"./Autocomplete-Cp5nPxpb.js";import"./ErrorPage-Cr0gR84_.js";const re={title:"Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты",tags:["!autodocs"]},C={parameters:{screenshot:{keepState:!0}}};function x(){const[o]=m.useState(g),s=m.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return b.jsxDEV(w,{tableConfig:{onCellContextMenu:(e,t,n)=>{console.debug(e,t,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,t,n)=>console.debug(e,t,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:s,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:43,columnNumber:5},this)}const a={name:"Контекстное меню (все возможности)",...C,render:x,play:async({canvasElement:o})=>{const s=await p(()=>{const r=o.querySelector('[data-testid="data-grid-canvas"]');if(!r)throw new Error("Data grid canvas not found");return r});await new Promise(r=>{setTimeout(r,250)});const e=o.ownerDocument,t=o.querySelector(".dvn-scroller")??s,n=t.getBoundingClientRect(),i=n.left+80,l=n.top+20;u.pointerDown(t,{clientX:i,clientY:l,button:2,buttons:2,pointerType:"mouse"}),u.pointerUp(t,{clientX:i,clientY:l,button:2,buttons:0,pointerType:"mouse"}),u.contextMenu(t,{clientX:i,clientY:l,button:2,buttons:2}),await p(()=>{if(!e.querySelector('[data-testid="table-context-menu"]'))throw new Error("Context menu is not open")},{timeout:3e3})}};var c,d,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const ae=["ContextMenuAllFeatures"];export{a as ContextMenuAllFeatures,ae as __namedExportsOrder,re as default};
