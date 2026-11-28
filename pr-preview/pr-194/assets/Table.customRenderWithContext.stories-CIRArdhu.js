import{r as u,b as o}from"./react-UEdzNlUe.js";import{c as p}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-Igcbn0Jb.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-1ilqKMuH.js";import{e as x,u as k,f as d}from"./Table-CrycrOhe.js";import{J as f,s as h,k as T}from"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BZ4xHhIu.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./Switch-BLwU7d6k.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./Collapse-BumLdPOr.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./react-data-grid-B2lTycfS.js";import"./TableTabs-DK3E2Tjx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DfMFGjDK.js";import"./TextField-zS5TeN3S.js";import"./sharedUtilsInputs-CU9inT7Z.js";import"./Typography-LZqKnjkf.js";import"./ListOfFilters-BwM87NcY.js";import"./FiltersActions-BKFvIl-i.js";import"./IconButton-DGP6Lkn6.js";import"./Tooltip-EuRIJkYt.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Q8JqGQSC.js";import"./NumberFormat-DGNiwVXJ.js";import"./EmptyState-m9Bn6vD9.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-Bsnp-_01.js";import"./Autocomplete-fJfjzeXV.js";const ke={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:b}}},g=`
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
`,w=p(0,20),y=({children:e})=>o.jsxDEV(c,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:64,columnNumber:3},void 0),N=()=>{const{rowSize:e,setRowSize:t}=d(),r={big:"small",small:"medium",medium:"big"};return o.jsxDEV(c,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxDEV(h,{view:"accent",size:"xxs",onClick:()=>t(r[e]),children:["Изменить размер строк на ",r[e]]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:94,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:85,columnNumber:5},void 0)},R=({tabIndex:e})=>{const{checkbox:t}=k(),[r,s]=t;return o.jsxDEV(f,{tabIndex:e,checked:r,label:`${r?"Выключить":"Включить"} чекбокс`,onChange:i=>s(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:109,columnNumber:5},void 0)},E=()=>{const{rowSize:e}=d();return o.jsxDEV(y,{children:o.jsxDEV(T,{bold:!0,children:["Размер строки ",e]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:122,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:121,columnNumber:5},void 0)},n={...C({preCode:g,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:w,columnConfig:[{key:"id",name:o.jsxDEV(N,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:140,columnNumber:15},void 0),renderCell:({tabIndex:e})=>o.jsxDEV(R,{tabIndex:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:141,columnNumber:39},void 0)},{key:"task",width:200,name:"Title",renderCell:()=>o.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:147,columnNumber:27},void 0)},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:t})=>{const[r,s]=u.useState(!1),i=u.useMemo(()=>({checkbox:[r,s]}),[r,s]);return o.jsxDEV(x,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:e,rowContextValue:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderWithContext.stories.tsx",lineNumber:171,columnNumber:7},void 0)}};var a,m,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const fe=["CellContext"];export{n as CellContext,fe as __namedExportsOrder,ke as default};
