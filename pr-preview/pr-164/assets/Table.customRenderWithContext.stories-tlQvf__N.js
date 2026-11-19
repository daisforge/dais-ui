import{r as u,b as o}from"./react-B60MRyL7.js";import{c as p}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-DmnAHCX7.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-UVnFPpqO.js";import{e as x,u as k,f as d}from"./Table-BdIphlwG.js";import{k as f,c as h,r as T}from"./@salutejs/sdds-finai-B4W7VlQo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-qSGXd1Us.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./@salutejs/plasma-icons-Bl-ri76g.js";import"./index-D3ChpMdG.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./Collapse-D79jXGjm.js";import"./utils-B7_zEzfW.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-DdOkLnO5.js";import"./TableTabs-DtRUI5Cu.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dv8e4fU6.js";import"./@glideappsfinal/glide-data-grid-DdEoqChm.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DTsmIBBF.js";import"./TextField-BtXegmzX.js";import"./sharedUtilsInputs-BI7rpFaO.js";import"./TypographyWithAutoTooltip-5KAdelsS.js";import"./Typography-CTKr_sJz.js";import"./ListOfFilters-Cnj5iC7n.js";import"./FiltersActions-BAVZ6HRF.js";import"./IconButton-D064SFCb.js";import"./TooltipList-Ur2omvrs.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C_H9aUMK.js";import"./NumberFormat-CwjFs2HO.js";import"./EmptyState-D4xLHGxg.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-B_59yU0y.js";import"./Autocomplete-BgAEXI77.js";const ge={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:b}}},g=`
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const we=["CellContext"];export{n as CellContext,we as __namedExportsOrder,ge as default};
