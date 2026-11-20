import{r as t,b as n}from"./react-B60MRyL7.js";import{b}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-CkkSfJnP.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as p}from"./StoriesUtils-DW2MAAHa.js";import{e as d}from"./Table-mS3yBKw8.js";import{B as R}from"./@salutejs/sdds-finai-D8xS8sHk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-XfTeUJpE.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-D98J-t6t.js";import"./@tanstack/react-virtual-x3DCBAvN.js";import"./WithTooltip-KJL26V4Q-DjtuYyC3.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-DOrxotJ8.js";import"./@salutejs/plasma-icons-DZ_qGP0a.js";import"./index-CFmWNdNb.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./Box-QuskhUSb.js";import"./Collapse-CN78cPJP.js";import"./utils-DKVFVmUS.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CbKJ8Xc_.js";import"./TableTabs-DLlWKgNM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Ci75rTFY.js";import"./@glideappsfinal/glide-data-grid-BqXwzbnk.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CHBPekjk.js";import"./TextField-CBiCiUMp.js";import"./sharedUtilsInputs-Ujbxbbaa.js";import"./TypographyWithAutoTooltip-CQBksfgh.js";import"./Typography-BCWCJaUP.js";import"./ListOfFilters-j_YZsInD.js";import"./FiltersActions-B9lffWVe.js";import"./IconButton-CYvWJ9E3.js";import"./TooltipList-Cutfk6au.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CLyIj3Wh.js";import"./NumberFormat-DOwy79Y_.js";import"./EmptyState-UM83DCUu.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-BE2sZqJw.js";import"./Autocomplete-D6CK_f1R.js";const ce={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}},component:p},f=`
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
