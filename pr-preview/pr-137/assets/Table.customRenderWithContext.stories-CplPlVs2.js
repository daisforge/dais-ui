import{r as c,j as o}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import d from"./DocStoryTemplate-Cf946dgV.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-DvvYTz20.js";import{f as h,u as f,g as p}from"./Table-BQHrw1K6.js";import{A as g,t as k,m as w}from"./@salutejs/sdds-finai-CKhMjg07.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BWfcXHB3.js";import"./IconButton-ZoRfzXaJ.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./utils-EIxGvR70.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DpKf-85P.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./Collapse-CblE70vy.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-C6Rr5Gy-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DbDA-PPi.js";import"./@glideappsfinal/glide-data-grid-BB_xclG6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DGAhIiuN.js";import"./ListOfFilters-CMjwWdxj.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BqjpJJQW.js";import"./EmptyState-BCYMGuYF.js";import"./MassActions-Csxbu-7r.js";import"./Autocomplete-DE_6PTST.js";const le={title:"Локальные компоненты/Table/Custom render/Cell Context",tags:["!autodocs"],parameters:{docs:{page:d}}},y=`
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
`,b=C(0,20),S=({children:e})=>o.jsx(l,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e}),T=()=>{const{rowSize:e,setRowSize:r}=p(),t={big:"small",small:"medium",medium:"big"};return o.jsx(l,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:o.jsxs(k,{view:"accent",size:"xxs",onClick:()=>r(t[e]),children:["Изменить размер строк на ",t[e]]})})},j=({tabIndex:e})=>{const{checkbox:r}=f(),[t,n]=r;return o.jsx(g,{tabIndex:e,checked:t,label:`${t?"Выключить":"Включить"} чекбокс`,onChange:i=>n(i.target.checked)})},I=()=>{const{rowSize:e}=p();return o.jsx(S,{children:o.jsxs(w,{bold:!0,children:["Размер строки ",e]})})},s={...x({preCode:y,previewSource:"shown"}),name:"Работа с контекстом в кастомных ячейках",args:{rows:b,columnConfig:[{key:"id",name:o.jsx(T,{}),renderCell:({tabIndex:e})=>o.jsx(j,{tabIndex:e})},{key:"task",width:200,name:"Title",renderCell:()=>o.jsx(I,{})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}]},argTypes:{},render:({rows:e,columnConfig:r})=>{const[t,n]=c.useState(!1),i=c.useMemo(()=>({checkbox:[t,n]}),[t,n]);return o.jsx(h,{tableConfig:{containerStyle:{height:700}},columnConfig:r,rows:e,rowContextValue:i})}};var m,u,a;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(u=s.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const pe=["CellContext"];export{s as CellContext,pe as __namedExportsOrder,le as default};
