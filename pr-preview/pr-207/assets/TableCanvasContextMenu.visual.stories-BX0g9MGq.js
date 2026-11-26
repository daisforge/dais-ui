import{r as m,b}from"./react-UEdzNlUe.js";import{c as g}from"./tableData-DKA5H0bF.js";import{a as p,f as u}from"./index-Dgmteq0e.js";import{T as w}from"./TableCanvas-nSg0dRIf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-eNsaqktA.js";import"./styled-components-DEOLQzLG.js";import"./react-is-CJ4CjPIR.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CQjaGWRq.js";import"./@salutejs/plasma-icons-uIGdXol1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-CHClRxL_.js";import"./Box-CnSr-EOZ.js";import"./Collapse-DKd7tDyY.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-zJFquLx-.js";import"./@daisforge/glide-data-grid-DYIqjVfn.js";import"./preload-helper-BOyu4uG3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-Dlrlaoqn.js";import"./sharedUiSearch-BUl0YIcM.js";import"./TextField-D5xzOdF9.js";import"./sharedUtilsInputs-Db1rNYqC.js";import"./Typography-CVUJ4Dv2.js";import"./ListOfFilters-CBOX8QAs.js";import"./FiltersActions-BPtwd1n-.js";import"./IconButton-CN-71Kuh.js";import"./Tooltip-MpHvU8S_.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-ujoFeuYk.js";import"./NumberFormat-Ceb_abZm.js";import"./EmptyState-DUujzGfL.js";import"./unidentified@3x-9d_s2m7N.js";import"./ErrorPage-ZM9SDQ_z.js";import"./Autocomplete-9W7xomoP.js";const pe={title:"Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты",tags:["!autodocs"]},C={parameters:{screenshot:{keepState:!0,capture:"page"}}};function x(){const[o]=m.useState(g),i=m.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return b.jsxDEV(w,{tableConfig:{onCellContextMenu:(e,t,n)=>{console.debug(e,t,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,t,n)=>console.debug(e,t,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,t,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(t,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:i,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.visual.stories.tsx",lineNumber:45,columnNumber:5},this)}const a={name:"Контекстное меню (все возможности)",...C,render:x,play:async({canvasElement:o})=>{const i=await p(()=>{const r=o.querySelector('[data-testid="data-grid-canvas"]');if(!r)throw new Error("Data grid canvas not found");return r});await new Promise(r=>{setTimeout(r,250)});const e=o.ownerDocument,t=o.querySelector(".dvn-scroller")??i,n=t.getBoundingClientRect(),s=n.left+80,l=n.top+20;u.pointerDown(t,{clientX:s,clientY:l,button:2,buttons:2,pointerType:"mouse"}),u.pointerUp(t,{clientX:s,clientY:l,button:2,buttons:0,pointerType:"mouse"}),u.contextMenu(t,{clientX:s,clientY:l,button:2,buttons:2}),await p(()=>{if(!e.querySelector('[data-testid="table-context-menu"]'))throw new Error("Context menu is not open")},{timeout:3e3})}};var c,d,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const ce=["ContextMenuAllFeatures"];export{a as ContextMenuAllFeatures,ce as __namedExportsOrder,pe as default};
