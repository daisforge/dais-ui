import{r as m,j as o}from"./react-DYHuXpTF.js";import{c as C}from"./tableData-DKA5H0bF.js";import d from"./DocStoryTemplate-BHnLMKCH.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-DwiKSnnX.js";import{c as h,u as f,f as l}from"./Table-B7jzqHco.js";import{u as g,c as k,r as w}from"./@salutejs/sdds-finai-BHH5Fs72.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DQaMhftP.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./Switch-BJtGJ7E8.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./Collapse-mn0OPShb.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./react-data-grid-BAmL3Ore.js";import"./TableTabs-yFxvLv3I.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-LGObZJH3.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-u90gzg8-.js";import"./TextField-DVzGbeCy.js";import"./sharedUtilsInputs-BpKsNu3R.js";import"./TypographyWithAutoTooltip-DC7CogiT.js";import"./Typography-BW5h57NG.js";import"./ListOfFilters-jqrPFs7e.js";import"./FiltersActions-O2aLWY25.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-kxeDpsv0.js";import"./EmptyState-5aZv2zr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-Dk44ltLH.js";import"./Autocomplete-CBwQxIXa.js";const ye={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:d}}},y=`
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
`,b=C(0,20),S=({children:e})=>o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e}),T=()=>{const{rowSize:e,setRowSize:r}=l(),t={big:"small",small:"medium",medium:"big"};return o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxs(k,{view:"accent",size:"xxs",onClick:()=>r(t[e]),children:["Изменить размер строк на ",t[e]]})})},j=({tabIndex:e})=>{const{checkbox:r}=f(),[t,n]=r;return o.jsx(g,{tabIndex:e,checked:t,label:`${t?"Выключить":"Включить"} чекбокс`,onChange:i=>n(i.target.checked)})},I=()=>{const{rowSize:e}=l();return o.jsx(S,{children:o.jsxs(w,{bold:!0,children:["Размер строки ",e]})})},s={...x({preCode:y,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:b,columnConfig:[{key:"id",name:o.jsx(T,{}),renderCell:({tabIndex:e})=>o.jsx(j,{tabIndex:e})},{key:"task",width:200,name:"Title",renderCell:()=>o.jsx(I,{})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:r})=>{const[t,n]=m.useState(!1),i=m.useMemo(()=>({checkbox:[t,n]}),[t,n]);return o.jsx(h,{tableConfig:{containerStyle:{height:700}},columnConfig:r,rows:e,rowContextValue:i})}};var c,u,a;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
