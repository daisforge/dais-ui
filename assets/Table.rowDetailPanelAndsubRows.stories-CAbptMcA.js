import{r as t,d as n}from"./react-D2T61mpp.js";import{a as w}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-Dyp-m10i.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as d}from"./StoriesUtils-CrllMjeu.js";import{f as p}from"./Table-DQ2bXklW.js";import{B as R}from"./@salutejs/sdds-finai-RFE0ZUZz.js";import"./vendor-DrvHogBM.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-dSzXNi-R.js";import"./IconButton-BPoioxom.js";import"./@salutejs/plasma-icons-CWtohmdG.js";import"./utils-Dj5yYuxA.js";import"./constants-B3b49qmU.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ChBl0Qym.js";import"./TextField-OLkgzKqu.js";import"./sharedUtilsInputs-C0iE4dT7.js";import"./AnalyticalWidget-D2_M22M6.js";import"./Collapse-94ilkYlK.js";import"./react-data-grid-DJzz0yCj.js";import"./TableTabs-Ckshv5kp.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DOOdKP5k.js";import"./ListOfFilters-C19Ypyak.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DgiZO50V.js";import"./EmptyState-DwM2vIwD.js";import"./MassActions-Bi4xiFmH.js";import"./Autocomplete-CxjAUI5o.js";const U={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:b}},component:d},f=`
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
`,o={...c({preCode:f,previewSource:"shown"}),name:"RowDetailAndSubRows",render:()=>{const[a]=t.useState(()=>w()),l=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}}},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",subRow:{isColumnWithArrow:!0}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(e,m)=>{var r;return m===1?n.jsxDEV(R,{view:"accent",size:"m",children:(r=e.row)==null?void 0:r.tribeZone},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:95,columnNumber:19},void 0):null}}},{key:"q1",name:"Q1",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return n.jsxDEV(p,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowDetailPanel:{rowKeyGetter:e=>e.id,isRowWithDetail:e=>e.id===2||e.id==="2tribe"||e.id==="2product"||e.id===3,renderRowDetail:({row:e})=>n.jsxDEV("div",{children:["rowDetail ",e.id]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:154,columnNumber:43},void 0),expandButtonColumnKey:"blockActivity",detailHeight:500},resizableColumn:!0},columnConfig:l,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanelAndsubRows.stories.tsx",lineNumber:139,columnNumber:7},void 0)}};var u,i,s;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const Y=["RowDetailAndSubRows"];export{o as RowDetailAndSubRows,Y as __namedExportsOrder,U as default};
