import{j as e}from"./react-DYHuXpTF.js";import{c as s}from"./tableData-DKA5H0bF.js";import a from"./DocStoryTemplate-BHnLMKCH.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-DwiKSnnX.js";import{c}from"./Table-YGbaAyPa.js";import{f as C,c as d,B as x,u as f}from"./@salutejs/sdds-finai-BHH5Fs72.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DQaMhftP.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./Switch-BJtGJ7E8.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./Collapse-mn0OPShb.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./react-data-grid-BAmL3Ore.js";import"./TableTabs-xg-axVyL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ZuQdWAms.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-D9vvmgmn.js";import"./TextField-CpM1ruNd.js";import"./sharedUtilsInputs-Cpm75s12.js";import"./TypographyWithAutoTooltip-ibNnqeyt.js";import"./Typography-BW5h57NG.js";import"./ListOfFilters-DwBbogbq.js";import"./FiltersActions-qpgDCeB9.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-C5OZsM5x.js";import"./EmptyState-5aZv2zr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BiGv-ZJd.js";import"./Autocomplete-C64AwXFK.js";const Ce={title:"Локальные компоненты/Table/Custom render/HeaderCell",tags:["!autodocs"],parameters:{docs:{page:a}}},g=`
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
