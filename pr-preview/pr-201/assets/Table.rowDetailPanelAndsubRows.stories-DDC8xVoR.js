import{r as t,b as n}from"./react-UEdzNlUe.js";import{b}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-cS0u38w_.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as p}from"./StoriesUtils-DgzrErk7.js";import{c as d}from"./Table-B811rdbK.js";import{B as R}from"./@salutejs/sdds-finai-DfKFI7EK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-2C5_55Sm.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./WithTooltip-KJL26V4Q-BpYteqAA.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./Switch-DFPex1Sn.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CJ8E-azk.js";import"./react-data-grid-BbizCO0_.js";import"./TableTabs-BqqgVWi4.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-zIv1KrBW.js";import"./@daisforge/glide-data-grid-D6jqoE9j.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B3f1_ZKH.js";import"./TextField-8At_iHRa.js";import"./sharedUtilsInputs-Dp_Ag4vw.js";import"./TypographyWithAutoTooltip-BLlDrrGC.js";import"./Typography-oCC8R11s.js";import"./ListOfFilters-C94ZeHf9.js";import"./FiltersActions-CiwYPsft.js";import"./IconButton-Z-vxAXVf.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-qpfpAzQz.js";import"./EmptyState-Bg5Oz7HU.js";import"./unidentified@3x-BjiX_gDg.js";import"./MassActions-DqwCn03a.js";import"./Autocomplete-BcUV2ge6.js";const ce={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}},component:p},f=`
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
`,o={...c({preCode:f,previewSource:"shown"}),name:"RowDetailAndSubRows",render:()=>{const[a]=t.useState(()=>b()),m=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}}},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",subRow:{isColumnWithArrow:!0}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(e,l)=>{var r;return l===1?n.jsxDEV(R,{view:"accent",size:"m",children:(r=e.row)==null?void 0:r.tribeZone},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:95,columnNumber:19},void 0):null}}},{key:"q1",name:"Q1",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return n.jsxDEV(d,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowDetailPanel:{rowKeyGetter:e=>e.id,isRowWithDetail:e=>e.id===2||e.id==="2tribe"||e.id==="2product"||e.id===3,renderRowDetail:({row:e})=>n.jsxDEV("div",{children:["rowDetail ",e.id]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:154,columnNumber:43},void 0),expandButtonColumnKey:"blockActivity",detailHeight:500},resizableColumn:!0},columnConfig:m,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:139,columnNumber:7},void 0)}};var i,u,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'RowDetailAndSubRows',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo<readonly ColumnConfig<TreeRow>[]>(() => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        }
      },
      resizable: true
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      title: '123',
      subRow: {
        isColumnWithArrow: true
      }
    }, {
      key: '',
      minWidth: 170,
      name: 'Локация трайба',
      subRow: {
        renderSubRowCell: (props, lvl) => {
          if (lvl === 1) {
            return <Badge view="accent" size="m">
                    {props.row?.tribeZone}
                  </Badge>;
          }
          return null;
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q2',
      name: 'Q2',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q3',
      name: 'Q3',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q4',
      name: 'Q4',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      rowDetailPanel: {
        rowKeyGetter: r => r.id,
        isRowWithDetail: r => r.id === 2 || r.id === '2tribe' || r.id === '2product' || r.id === 3,
        renderRowDetail: ({
          row
        }) => <div>rowDetail {row.id}</div>,
        expandButtonColumnKey: 'blockActivity',
        detailHeight: 500
      },
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const pe=["RowDetailAndSubRows"];export{o as RowDetailAndSubRows,pe as __namedExportsOrder,ce as default};
