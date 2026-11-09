import{j as e}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import a from"./DocStoryTemplate-DUx_jmLE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-DBguVV_s.js";import{f as c}from"./Table-Bi2_Lq71.js";import{v as C,t as d,s as x,A as f}from"./@salutejs/sdds-finai-CrMFu5No.js";import"./vendor-CvBXOjQ8.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BAnxJVQm.js";import"./@tanstack/react-virtual-Dq53HtnB.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D4RaGyyv.js";import"./IconButton-LdqUAZ_9.js";import"./@salutejs/plasma-icons-DBF9uERs.js";import"./utils-D7J-sht1.js";import"./constants-ChwOYBdp.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DNzqWFXU.js";import"./sharedUtilsInputs-CPKBfE6-.js";import"./AiAgentPopup-UVBtuGyD.js";import"./TextArea-1HIWWw50.js";import"./sharedUtilsResizable-Bp8tiGu6.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DYelOQTz.js";import"./react-data-grid-C2AVEiS5.js";import"./TableTabs-BIBArlcM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CyG6pC1k.js";import"./@glideappsfinal/glide-data-grid-CbEI6hQN.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BG2H0NDG.js";import"./ListOfFilters-BnayssHP.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNTjpvSd.js";import"./EmptyState-BCVYrGwr.js";import"./MassActions-BDeI7TJI.js";import"./Autocomplete-DbeeDON4.js";const re={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},g=`
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
`,y=m(0,20),o=({children:n})=>e.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:n}),t={...l({preCode:g,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:y,columnConfig:[{key:"id",name:e.jsx(o,{children:e.jsx(C,{text:"ID",type:"submit",size:"xs"})})},{key:"task",width:200,name:e.jsx(o,{children:e.jsx(d,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"})})},{key:"priority",name:e.jsx(o,{children:e.jsx(x,{text:"Бейдж Priority",view:"negative"})})},{key:"issueType",name:e.jsx(o,{children:e.jsx(f,{checked:!0})})},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:n,columnConfig:s})=>e.jsx(c,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:n})};var r,u,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const ue=["CustomRenderHeaderCell"];export{t as CustomRenderHeaderCell,ue as __namedExportsOrder,re as default};
