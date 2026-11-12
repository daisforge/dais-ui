import{r as u,d as o}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import p from"./DocStoryTemplate-lj8yVKf5.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-CTzYqpSx.js";import{f as x,u as f,g as d}from"./Table-C280hpp2.js";import{A as k,t as h,m as T}from"./@salutejs/sdds-finai-D1xekEXv.js";import"./vendor-qc-3jPn0.js";import"./react-is-Clcustum.js";import"./styled-components-fZZISu-E.js";import"./@tanstack/react-virtual-cDSTPgpS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BnZbuhdn.js";import"./IconButton-C7vIwJL1.js";import"./@salutejs/plasma-icons-CfT1Hno-.js";import"./utils-BZEVkRCf.js";import"./constants-ChwOYBdp.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-COil20QB.js";import"./sharedUtilsInputs-CqBI3x81.js";import"./AiAgentPopup-DMxRNqnm.js";import"./TextArea-CKpv2CXk.js";import"./sharedUtilsResizable-BZiwV9dn.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CkUrJuHd.js";import"./react-data-grid-CNbViKFW.js";import"./TableTabs-D79cyaX_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-n_rkjHnk.js";import"./@glideappsfinal/glide-data-grid-B-1CjMCn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cqbiwema.js";import"./ListOfFilters-BhzbP0P2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-S5rrm-jj.js";import"./EmptyState-BLWKmdtS.js";import"./MassActions-CXeHQUg5.js";import"./Autocomplete-DR4dqk8a.js";const de={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:p}}},g=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,w=b(0,20),y=({children:e})=>o.jsxDEV(c,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:64,columnNumber:3},void 0),N=()=>{const{rowSize:e,setRowSize:r}=d(),t={big:"small",small:"medium",medium:"big"};return o.jsxDEV(c,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxDEV(h,{view:"accent",size:"xxs",onClick:()=>r(t[e]),children:["Изменить размер строк на ",t[e]]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:94,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:85,columnNumber:5},void 0)},R=({tabIndex:e})=>{const{checkbox:r}=f(),[t,s]=r;return o.jsxDEV(k,{tabIndex:e,checked:t,label:`${t?"Выключить":"Включить"} чекбокс`,onChange:i=>s(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:109,columnNumber:5},void 0)},E=()=>{const{rowSize:e}=d();return o.jsxDEV(y,{children:o.jsxDEV(T,{bold:!0,children:["Размер строки ",e]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:122,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:121,columnNumber:5},void 0)},n={...C({preCode:g,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:w,columnConfig:[{key:"id",name:o.jsxDEV(N,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:140,columnNumber:15},void 0),renderCell:({tabIndex:e})=>o.jsxDEV(R,{tabIndex:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:141,columnNumber:39},void 0)},{key:"task",width:200,name:"Title",renderCell:()=>o.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:147,columnNumber:27},void 0)},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:r})=>{const[t,s]=u.useState(!1),i=u.useMemo(()=>({checkbox:[t,s]}),[t,s]);return o.jsxDEV(x,{tableConfig:{containerStyle:{height:700}},columnConfig:r,rows:e,rowContextValue:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:171,columnNumber:7},void 0)}};var a,m,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Работа с контекстом в кастомных ячейках',
  args: {
    rows,
    columnConfig: [{
      key: 'id',
      name: <HeaderComponent />,
      renderCell: ({
        tabIndex
      }) => <CheckboxCell tabIndex={tabIndex} />
    }, {
      key: 'task',
      width: 200,
      name: 'Title',
      renderCell: () => <TextCell />
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }]
  },
  argTypes: {},
  render: ({
    rows,
    columnConfig
  }) => {
    const [checked, setChecked] = useState(false);
    const rowContextValue = useMemo<ICheckboxCtx>(() => ({
      checkbox: [checked, setChecked]
    }), [checked, setChecked]);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      }
    }} columnConfig={columnConfig} rows={rows} rowContextValue={rowContextValue} />;
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const be=["CellContext"];export{n as CellContext,be as __namedExportsOrder,de as default};
