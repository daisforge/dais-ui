import{r as u,d as o}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import p from"./DocStoryTemplate-zj6qwwHt.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-D-OropPv.js";import{f as x,u as f,g as d}from"./Table-DDpQFeZ3.js";import{A as k,t as h,m as T}from"./@salutejs/sdds-finai-DBprQOML.js";import"./vendor-DyX3yqNp.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-HYH6QM6x.js";import"./IconButton-IMgmuP0-.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./utils-DOeoUM6j.js";import"./constants-BTEQz0S6.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DeNU_7Qf.js";import"./sharedUtilsInputs-D8YK3hGq.js";import"./AiAgentPopup-etpgcxcS.js";import"./TextArea-DKWIezog.js";import"./sharedUtilsResizable-DkJ72x9Z.js";import"./Collapse-DpRGCvPc.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-BooKMiPM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DF02pb0w.js";import"./@glideappsfinal/glide-data-grid-BHR2byug.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BRon3VU0.js";import"./ListOfFilters-xZuNN_OL.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Dz0ps34o.js";import"./EmptyState-BLj8BXym.js";import"./MassActions-CPFREl9A.js";import"./Autocomplete-DIM2c_yU.js";const ce={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:p}}},g=`
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const de=["CellContext"];export{n as CellContext,de as __namedExportsOrder,ce as default};
