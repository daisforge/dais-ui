import{j as e}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import a from"./DocStoryTemplate-Cf946dgV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-DvvYTz20.js";import{f as c}from"./Table-D6qTqi-5.js";import{v as C,t as d,s as x,A as f}from"./@salutejs/sdds-finai-Bupqgw5V.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CH7eD9zX.js";import"./IconButton-DrFnI92n.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./utils-BRhO4Lv3.js";import"./constants-BTEQz0S6.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BnC5Fgj6.js";import"./sharedUtilsInputs-C1mIJypF.js";import"./AiAgentPopup-CoZBlmmj.js";import"./TextArea-qBaIkj1x.js";import"./sharedUtilsResizable-CmwXdA8D.js";import"./Collapse-BWM9xDkM.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-BoRZJG4K.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CnKEg9KQ.js";import"./@glideappsfinal/glide-data-grid-Bu0bvcrP.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-JvzeJz24.js";import"./ListOfFilters-BzakYgbd.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BpXHEye7.js";import"./EmptyState-CHBxuTjb.js";import"./MassActions-BCc0ux7E.js";import"./Autocomplete-Cta89g6q.js";const ne={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},g=`
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
`,y=m(0,20),o=({children:n})=>e.jsx(p,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:n}),t={...l({preCode:g,previewSource:"shown"}),name:"Кастомизация рендера заголовка колонки",args:{rows:y,columnConfig:[{key:"id",name:e.jsx(o,{children:e.jsx(C,{text:"ID",type:"submit",size:"xs"})})},{key:"task",width:200,name:e.jsx(o,{children:e.jsx(d,{view:"accent",size:"xxs",onClick:()=>alert("Клик по кнопке кастомной ячейки в заголовке колонки"),children:"Кнопка Title"})})},{key:"priority",name:e.jsx(o,{children:e.jsx(x,{text:"Бейдж Priority",view:"negative"})})},{key:"issueType",name:e.jsx(o,{children:e.jsx(f,{checked:!0})})},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:n,columnConfig:s})=>e.jsx(c,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:n})};var u,r,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const ue=["CustomRenderHeaderCell"];export{t as CustomRenderHeaderCell,ue as __namedExportsOrder,ne as default};
