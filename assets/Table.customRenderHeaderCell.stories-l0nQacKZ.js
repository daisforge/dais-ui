import{j as e}from"./react-DYHuXpTF.js";import{c as s}from"./tableData-DKA5H0bF.js";import a from"./DocStoryTemplate-DXKmSnyp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-2OtfpzOT.js";import{c}from"./Table-Duk6rQOR.js";import{v as C,t as d,s as x,U as g}from"./@salutejs/sdds-finai-C2CeMSda.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-4go4qBMz.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-DDsYmQNq.js";import"./@tanstack/react-virtual-BBX7Noea.js";import"./WithTooltip-KJL26V4Q-vPnt8NfR.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CAE-Y7vG.js";import"./Switch-KECbQF2z.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./Collapse-DvjEILT3.js";import"./utils-Cr0_bERK.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-EIkzXMi-.js";import"./react-data-grid-CPV7JIIy.js";import"./TableTabs-DAZ_3Byo.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DIJ_h18-.js";import"./TextField-CYooKCoB.js";import"./sharedUtilsInputs-Cv7WBy-o.js";import"./Typography-BKOFVEiW.js";import"./ListOfFilters-BUydk7WI.js";import"./FiltersActions-6Mh-YlfW.js";import"./IconButton-DsDRIEsy.js";import"./Tooltip-B7z40_Hf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CO4by0Sc.js";import"./NumberFormat-Yp9-4Qey.js";import"./EmptyState-DRm7_2iP.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-VuHs2cds.js";import"./Autocomplete-BQgFMGME.js";const ae={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},f=`
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
`,y=s(0,20),o=({children:n})=>e.jsx(l,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:n}),t={...p({preCode:f,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:y,columnConfig:[{key:"id",name:e.jsx(o,{children:e.jsx(C,{text:"ID",type:"submit",size:"xs"})})},{key:"task",width:200,name:e.jsx(o,{children:e.jsx(d,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"})})},{key:"priority",name:e.jsx(o,{children:e.jsx(x,{text:"Бейдж Priority",view:"negative"})})},{key:"issueType",name:e.jsx(o,{children:e.jsx(g,{checked:!0})})},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:n,columnConfig:m})=>e.jsx(c,{tableConfig:{containerStyle:{height:700}},columnConfig:m,rows:n})};var r,u,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const pe=["CustomRenderHeaderCell"];export{t as CustomRenderHeaderCell,pe as __namedExportsOrder,ae as default};
