import{r as t,d as n}from"./react-D2T61mpp.js";import{a as w}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-DZsWkZ-A.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as d}from"./StoriesUtils-BljtI71I.js";import{f as p}from"./Table-DeGjIAjL.js";import{s as R}from"./@salutejs/sdds-finai-Bon1pPd2.js";import"./vendor-OMIM6ypg.js";import"./react-is-Clcustum.js";import"./styled-components-C7d6cAn3.js";import"./@tanstack/react-virtual-CgyeR3FS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DhvOppJl.js";import"./IconButton-DtoSl8Bw.js";import"./@salutejs/plasma-icons-4hohajim.js";import"./utils-Bu2A5x6d.js";import"./constants-AGfDpPJ5.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D3IwMqIN.js";import"./TextField-X1gOdWS9.js";import"./sharedUtilsInputs-CzqRv-X_.js";import"./AiAgentPopup-BTKgTZx9.js";import"./TextArea-BXsaEElA.js";import"./sharedUtilsResizable-451amboB.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-D9TBSft0.js";import"./react-data-grid-asFtuhvm.js";import"./TableTabs-GjFYQ1yc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Boy_gxo4.js";import"./@glideappsfinal/glide-data-grid-Cun82X6B.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cl3VzNM-.js";import"./ListOfFilters-ClSxBvCe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DFgdTL6D.js";import"./EmptyState-UY_vm-Yh.js";import"./MassActions-C4WNK7LE.js";import"./Autocomplete-CGdJJ2BB.js";const te={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:b}},component:d},f=`
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const ue=["RowDetailAndSubRows"];export{o as RowDetailAndSubRows,ue as __namedExportsOrder,te as default};
