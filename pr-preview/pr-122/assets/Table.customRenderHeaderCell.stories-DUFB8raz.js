import{d as e}from"./react-D2T61mpp.js";import{c as a}from"./tableData-DVJFoYoT.js";import l from"./DocStoryTemplate-n8EPqSp1.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{B as d}from"./Box-D90at13y.js";import{f as c}from"./Table-DegEDnTQ.js";import{v as p,t as b,s as C,A as f}from"./@salutejs/sdds-finai-BV7J2o_s.js";import"./vendor-CaK76Snf.js";import"./react-is-Clcustum.js";import"./styled-components-BwCFaRkt.js";import"./@tanstack/react-virtual-BcD1q-CR.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DL7UWS5W.js";import"./IconButton-CHYS7OsY.js";import"./@salutejs/plasma-icons-V_8w2nmt.js";import"./utils-C8ToVq-5.js";import"./constants-CUAU9RhA.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DtKHUcKj.js";import"./sharedUtilsInputs-DP_4d_Lv.js";import"./AiAgentPopup-DzpYWVjQ.js";import"./TextArea-DWNSOGny.js";import"./sharedUtilsResizable-BuoR3rVw.js";import"./Collapse-DEzgwEVz.js";import"./react-data-grid-n2ePWCSg.js";import"./TableTabs-B8dHQcob.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DPufX4Im.js";import"./@glideappsfinal/glide-data-grid-BxAXJixI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QzcPISl2.js";import"./ListOfFilters-BWsJeJaB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCguiR9a.js";import"./EmptyState-BlErGnbS.js";import"./MassActions-CHwRBAEJ.js";import"./Autocomplete-BRRkvWTY.js";const ue={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:l}}},k=`
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
`,x=a(0,20),o=({children:u})=>e.jsxDEV(d,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:53,columnNumber:3},void 0),r={...m({preCode:k,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:x,columnConfig:[{key:"id",name:e.jsxDEV(o,{children:e.jsxDEV(p,{text:"ID",type:"submit",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:79,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:78,columnNumber:11},void 0)},{key:"task",width:200,name:e.jsxDEV(o,{children:e.jsxDEV(b,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:88,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:87,columnNumber:11},void 0)},{key:"priority",name:e.jsxDEV(o,{children:e.jsxDEV(C,{text:"Бейдж Priority",view:"negative"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:105,columnNumber:11},void 0)},{key:"issueType",name:e.jsxDEV(o,{children:e.jsxDEV(f,{checked:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:114,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:113,columnNumber:11},void 0)},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:u,columnConfig:t})=>e.jsxDEV(c,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:126,columnNumber:5},void 0)};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const ne=["CustomRenderHeaderCell"];export{r as CustomRenderHeaderCell,ne as __namedExportsOrder,ue as default};
