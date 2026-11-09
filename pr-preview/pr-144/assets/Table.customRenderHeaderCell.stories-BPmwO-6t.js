import{d as e}from"./react-D2T61mpp.js";import{c as a}from"./tableData-DVJFoYoT.js";import l from"./DocStoryTemplate-DDxNlXvE.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{B as d}from"./Box-CGDj7ORg.js";import{f as c}from"./Table-CLuq2r_G.js";import{v as p,t as b,s as C,A as f}from"./@salutejs/sdds-finai-DBBbtUOz.js";import"./vendor-CgwLAOzt.js";import"./react-is-Clcustum.js";import"./styled-components-U1h2EGhV.js";import"./@tanstack/react-virtual-_mtQm2SE.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bhr7wpvG.js";import"./IconButton-C7JOyHb5.js";import"./@salutejs/plasma-icons-BGlmN6_-.js";import"./utils-ParcUs9H.js";import"./constants-AGfDpPJ5.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-TTDGbZXl.js";import"./sharedUtilsInputs-Ds36U5zn.js";import"./AiAgentPopup-Bv5A7AJd.js";import"./TextArea-BJ5AU7KW.js";import"./sharedUtilsResizable-Y09-4PJ-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CUrhIkN9.js";import"./react-data-grid-BveG54b5.js";import"./TableTabs-B18J2TQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CpbVbvPN.js";import"./@glideappsfinal/glide-data-grid-D-UmZydu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CLvEXBOx.js";import"./ListOfFilters-DosdwQNl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B54ll3if.js";import"./EmptyState-Dc82nemv.js";import"./MassActions-A5XUKhxz.js";import"./Autocomplete-DSNOWxVh.js";const ne={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:l}}},k=`
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
`,x=a(0,20),o=({children:u})=>e.jsxDEV(d,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:53,columnNumber:3},void 0),r={...m({preCode:k,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:x,columnConfig:[{key:"id",name:e.jsxDEV(o,{children:e.jsxDEV(p,{text:"ID",type:"submit",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:79,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:78,columnNumber:11},void 0)},{key:"task",width:200,name:e.jsxDEV(o,{children:e.jsxDEV(b,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:88,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:87,columnNumber:11},void 0)},{key:"priority",name:e.jsxDEV(o,{children:e.jsxDEV(C,{text:"Бейдж Priority",view:"negative"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:105,columnNumber:11},void 0)},{key:"issueType",name:e.jsxDEV(o,{children:e.jsxDEV(f,{checked:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:114,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:113,columnNumber:11},void 0)},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:u,columnConfig:t})=>e.jsxDEV(c,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderHeaderCell.stories.tsx",lineNumber:126,columnNumber:5},void 0)};var n,i,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const ie=["CustomRenderHeaderCell"];export{r as CustomRenderHeaderCell,ie as __namedExportsOrder,ne as default};
