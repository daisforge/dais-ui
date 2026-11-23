import{b as e}from"./react-UEdzNlUe.js";import{c as a}from"./tableData-DKA5H0bF.js";import m from"./DocStoryTemplate-CVr_HXfF.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as d}from"./Box-yVZ__wCm.js";import{e as c}from"./Table-C71uzYkk.js";import{a as p,d as b,u as C,m as f}from"./@salutejs/sdds-finai-CCc2M82T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BJXHd15o.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BQ6ZyzFq.js";import"./@tanstack/react-virtual-BtAgCELQ.js";import"./WithTooltip-KJL26V4Q-DPY0jro6.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-CztTgQbP.js";import"./index-CMCAxAlJ.js";import"./@sddsjs/sdds_finai-DqiyF2lT.js";import"./Collapse-BpJhvNyY.js";import"./utils-1evaXQ7G.js";import"./constants-D9pWgtfS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D87bzLqR.js";import"./react-data-grid-CTo1laTQ.js";import"./TableTabs-Dl3ybQ3A.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dyw7_8zY.js";import"./@daisforge/glide-data-grid-Ddyz9bvl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-ttz439TP.js";import"./TextField-Bq_jSxbf.js";import"./sharedUtilsInputs-Z9Z1qut3.js";import"./TypographyWithAutoTooltip-BJOp4WMr.js";import"./Typography-wwPE7Tkw.js";import"./ListOfFilters-CVo-52s9.js";import"./FiltersActions-Cas8V8u-.js";import"./IconButton-BhVPULzs.js";import"./TooltipList-C3e9_bOk.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BNkFaJsn.js";import"./NumberFormat-CCkEtS_t.js";import"./EmptyState-BVPgIYqR.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-3P44Uq7b.js";import"./Autocomplete-BfJ_x4IL.js";const pe={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:m}}},k=`
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
`,x=a(0,20),o=({children:i})=>e.jsxDEV(d,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:53,columnNumber:3},void 0),r={...l({preCode:k,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:x,columnConfig:[{key:"id",name:e.jsxDEV(o,{children:e.jsxDEV(p,{text:"ID",type:"submit",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:79,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:78,columnNumber:11},void 0)},{key:"task",width:200,name:e.jsxDEV(o,{children:e.jsxDEV(b,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:88,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:87,columnNumber:11},void 0)},{key:"priority",name:e.jsxDEV(o,{children:e.jsxDEV(C,{text:"Бейдж Priority",view:"negative"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:105,columnNumber:11},void 0)},{key:"issueType",name:e.jsxDEV(o,{children:e.jsxDEV(f,{checked:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:114,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:113,columnNumber:11},void 0)},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:i,columnConfig:t})=>e.jsxDEV(c,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:126,columnNumber:5},void 0)};var u,n,s;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const be=["CustomRenderHeaderCell"];export{r as CustomRenderHeaderCell,be as __namedExportsOrder,pe as default};
