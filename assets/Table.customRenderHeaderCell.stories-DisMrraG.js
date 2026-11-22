import{j as e}from"./react-DYHuXpTF.js";import{c as s}from"./tableData-DKA5H0bF.js";import a from"./DocStoryTemplate-C-m25YlE.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-C_lQk7q2.js";import{e as c}from"./Table-CeDu5QUM.js";import{f as C,c as d,B as x,k as f}from"./@salutejs/sdds-finai-CW-5BJnR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-BAGPZAp9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ToAvIx_t.js";import"./@daisforge/glide-data-grid-CnQtltGt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-4U0N3jZJ.js";import"./TextField-CFa4HRNu.js";import"./sharedUtilsInputs-CeMKsmp0.js";import"./TypographyWithAutoTooltip-CF39c5mC.js";import"./Typography-BcsDSGcH.js";import"./ListOfFilters-DLYLJh9T.js";import"./FiltersActions-2bw8sE3F.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-C4Ct0-d_.js";import"./EmptyState-F2FGmJQ7.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-C7XUfjux.js";import"./Autocomplete-BVrZ8DxV.js";const Ce={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},g=`
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
`,y=s(0,20),o=({children:r})=>e.jsx(l,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:r}),t={...p({preCode:g,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:y,columnConfig:[{key:"id",name:e.jsx(o,{children:e.jsx(C,{text:"ID",type:"submit",size:"xs"})})},{key:"task",width:200,name:e.jsx(o,{children:e.jsx(d,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"})})},{key:"priority",name:e.jsx(o,{children:e.jsx(x,{text:"Бейдж Priority",view:"negative"})})},{key:"issueType",name:e.jsx(o,{children:e.jsx(f,{checked:!0})})},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:r,columnConfig:m})=>e.jsx(c,{tableConfig:{containerStyle:{height:700}},columnConfig:m,rows:r})};var n,u,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Кастомизация рендера заголовка колонки',
  args: {
    rows,
    columnConfig: [{
      key: 'id',
      name: <CellContainer>
            <Chip text="ID" type="submit" size="xs" />
          </CellContainer>
    }, {
      key: 'task',
      width: 200,
      name: <CellContainer>
            <Button view="accent" size="xxs" onClick={() =>
        // Для примера
        // eslint-disable-next-line no-alert
        alert(\`Клик по кнопке кастомной ячейки в заголовке колонки\`)}>
              Кнопка Title
            </Button>
          </CellContainer>
    }, {
      key: 'priority',
      name: <CellContainer>
            <Badge text="Бейдж Priority" view="negative" />
          </CellContainer>
    }, {
      key: 'issueType',
      name: <CellContainer>
            <Checkbox checked />
          </CellContainer>
    }, {
      key: 'complete',
      name: '% Complete'
    }]
  },
  argTypes: {},
  render: ({
    rows,
    columnConfig
  }) => <Table tableConfig={{
    containerStyle: {
      height: 700
    }
  }} columnConfig={columnConfig} rows={rows} />
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const de=["CustomRenderHeaderCell"];export{t as CustomRenderHeaderCell,de as __namedExportsOrder,Ce as default};
