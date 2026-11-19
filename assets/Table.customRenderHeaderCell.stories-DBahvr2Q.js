import{j as e}from"./react-DNGZQ4GM.js";import{c as s}from"./tableData-DKA5H0bF.js";import a from"./DocStoryTemplate-BVKLQcam.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-C7bn7Vor.js";import{e as c}from"./Table-CLU8EiQJ.js";import{f as C,c as d,B as x,k as f}from"./@salutejs/sdds-finai-CTfk_qKV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-D0kRSEyZ.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./index-ChNwZ-Li.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./Collapse-DJQXB-S_.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CXBejiga.js";import"./TableTabs-BHejy9n4.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BHSmjU_O.js";import"./@glideappsfinal/glide-data-grid-DDGyHJjW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CIBppFsz.js";import"./TextField-DpANoGFF.js";import"./sharedUtilsInputs-04PyxkHI.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./ListOfFilters-CtA3cmfs.js";import"./FiltersActions-MFwki4_2.js";import"./IconButton-C1E4pz8y.js";import"./TooltipList-BKC8WC44.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CYVukoKk.js";import"./NumberFormat-BcUnw3yr.js";import"./EmptyState-Cjd9SZHm.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3mEmrXD.js";import"./Autocomplete-Bjb9HDRp.js";const Ce={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},g=`
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
