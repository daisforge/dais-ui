import{r as m,j as o}from"./react-DNGZQ4GM.js";import{c as C}from"./tableData-DKA5H0bF.js";import d from"./DocStoryTemplate-D8gcSeh5.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-1lujwMH2.js";import{e as h,u as f,f as l}from"./Table-BDqwvkNH.js";import{j as g,b as k,q as w}from"./@salutejs/sdds-finai-BuI7JyX1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BbbJ9Z83.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-D_Edv4_h.js";import"./@tanstack/react-virtual-CcNjsb-5.js";import"./WithTooltip-KJL26V4Q-ZJQwZcgM.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CuyfXGnQ.js";import"./@salutejs/plasma-icons-BJIYJCV4.js";import"./index-L9H5tuHV.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./Collapse-CCWmnco9.js";import"./utils-DoXDRJ4u.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CiWOk-dj.js";import"./TableTabs-DsUIER9h.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-PAsMjfPb.js";import"./@glideappsfinal/glide-data-grid-BCJEzwn8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-DTtAc4Ys.js";import"./sharedUiSearch-DtK2Kt5u.js";import"./TextField-dI5Q6Mwb.js";import"./sharedUtilsInputs-BcRl6j87.js";import"./TypographyWithAutoTooltip-C3PM-cpw.js";import"./Typography-CIXQr6Yl.js";import"./ListOfFilters-NwMG4Gt8.js";import"./FiltersActions-CwpBf5qJ.js";import"./IconButton-DFBxeTV9.js";import"./TooltipList-C8NjZIWl.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Deh6I-nV.js";import"./NumberFormat-Ja5qKQtO.js";import"./EmptyState-KjA_X5Eh.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CIAtDoD6.js";import"./Autocomplete-CDywWsDe.js";const be={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:d}}},y=`
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
`,b=C(0,20),S=({children:e})=>o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e}),j=()=>{const{rowSize:e,setRowSize:r}=l(),t={big:"small",small:"medium",medium:"big"};return o.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxs(k,{view:"accent",size:"xxs",onClick:()=>r(t[e]),children:["Изменить размер строк на ",t[e]]})})},T=({tabIndex:e})=>{const{checkbox:r}=f(),[t,n]=r;return o.jsx(g,{tabIndex:e,checked:t,label:`${t?"Выключить":"Включить"} чекбокс`,onChange:i=>n(i.target.checked)})},I=()=>{const{rowSize:e}=l();return o.jsx(S,{children:o.jsxs(w,{bold:!0,children:["Размер строки ",e]})})},s={...x({preCode:y,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:b,columnConfig:[{key:"id",name:o.jsx(j,{}),renderCell:({tabIndex:e})=>o.jsx(T,{tabIndex:e})},{key:"task",width:200,name:"Title",renderCell:()=>o.jsx(I,{})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:r})=>{const[t,n]=m.useState(!1),i=m.useMemo(()=>({checkbox:[t,n]}),[t,n]);return o.jsx(h,{tableConfig:{containerStyle:{height:700}},columnConfig:r,rows:e,rowContextValue:i})}};var c,u,a;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(a=(u=s.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const Se=["CellContext"];export{s as CellContext,Se as __namedExportsOrder,be as default};
