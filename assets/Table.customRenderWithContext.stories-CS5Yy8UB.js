import{r as m,j as o}from"./react-DNGZQ4GM.js";import{c as C}from"./tableData-DKA5H0bF.js";import d from"./DocStoryTemplate-CIjOxglH.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-BKkW6WAc.js";import{e as h,u as f,f as l}from"./Table-DkS74_Ap.js";import{k,c as g,r as w}from"./@salutejs/sdds-finai-Cnm6FkwI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dp5lOscd.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BVeFqQYb.js";import"./@tanstack/react-virtual-YDfxzYL3.js";import"./WithTooltip-KJL26V4Q-D6M4H-sn.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-hXr06AUZ.js";import"./@salutejs/plasma-icons-Cqq3zXio.js";import"./index-0WdmXQbr.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./Collapse-C5wWRaBU.js";import"./utils-D8WPHrZl.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CdTfwxrA.js";import"./TableTabs-B4-ktLDB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DtQPfSll.js";import"./@glideappsfinal/glide-data-grid-S2MyQhYl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B7rBkxde.js";import"./TextField-6naKsMBN.js";import"./sharedUtilsInputs-C0_NRSp2.js";import"./TypographyWithAutoTooltip-Cju-Nu1y.js";import"./Typography-BjVh6YV9.js";import"./ListOfFilters-B1s2HaSi.js";import"./FiltersActions-U8FmEHl2.js";import"./IconButton-DkyAo8ue.js";import"./TooltipList-BVqkwDIx.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CgEbMqyz.js";import"./NumberFormat-BljT1DEp.js";import"./EmptyState-BmKRlSr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3GAnQXt.js";import"./Autocomplete-jc_g5b5e.js";const ye={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:d}}},y=`
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
`,b=C(0,20),S=({children:e})=>o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e}),T=()=>{const{rowSize:e,setRowSize:r}=l(),t={big:"small",small:"medium",medium:"big"};return o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxs(g,{view:"accent",size:"xxs",onClick:()=>r(t[e]),children:["Изменить размер строк на ",t[e]]})})},j=({tabIndex:e})=>{const{checkbox:r}=f(),[t,n]=r;return o.jsx(k,{tabIndex:e,checked:t,label:`${t?"Выключить":"Включить"} чекбокс`,onChange:i=>n(i.target.checked)})},I=()=>{const{rowSize:e}=l();return o.jsx(S,{children:o.jsxs(w,{bold:!0,children:["Размер строки ",e]})})},s={...x({preCode:y,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:b,columnConfig:[{key:"id",name:o.jsx(T,{}),renderCell:({tabIndex:e})=>o.jsx(j,{tabIndex:e})},{key:"task",width:200,name:"Title",renderCell:()=>o.jsx(I,{})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:r})=>{const[t,n]=m.useState(!1),i=m.useMemo(()=>({checkbox:[t,n]}),[t,n]);return o.jsx(h,{tableConfig:{containerStyle:{height:700}},columnConfig:r,rows:e,rowContextValue:i})}};var c,u,a;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(a=(u=s.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const be=["CellContext"];export{s as CellContext,be as __namedExportsOrder,ye as default};
