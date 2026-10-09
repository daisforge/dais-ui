import{r as u,d as o}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import p from"./DocStoryTemplate-CrvtEn2a.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-DV_u0Ftj.js";import{f as x,u as f,g as d}from"./Table-CcZ0ds_H.js";import{A as k,t as h,m as T}from"./@salutejs/sdds-finai-DztqpKP7.js";import"./vendor-Cerwdjts.js";import"./react-is-Clcustum.js";import"./styled-components-DhAJwv5z.js";import"./@tanstack/react-virtual-_irdOaea.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-g6L0vwIk.js";import"./IconButton-DFMykKti.js";import"./@salutejs/plasma-icons-Dhq832vT.js";import"./utils-BElZzUmp.js";import"./constants-rCJTDDk_.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-HUZgltLn.js";import"./sharedUtilsInputs-0JObiuav.js";import"./AiAgentPopup-D3kyWGJG.js";import"./TextArea-D2LyAITr.js";import"./sharedUtilsResizable-B0q5Zavu.js";import"./Collapse-CcsxObAw.js";import"./react-data-grid-BzvGL-VS.js";import"./TableTabs-B3ToYV3h.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBLdPq7f.js";import"./ListOfFilters-BHHIPZib.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-QJCyNH_R.js";import"./EmptyState-BMpkaTQs.js";import"./MassActions-SmVYtLju.js";import"./Autocomplete-D1xCL2Jp.js";const ae={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:p}}},g=`
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const me=["CellContext"];export{n as CellContext,me as __namedExportsOrder,ae as default};
