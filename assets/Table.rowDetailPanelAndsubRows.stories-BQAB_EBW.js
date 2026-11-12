import{r as t,j as n}from"./react-CAOzMBF_.js";import{a as w}from"./tableData-DVJFoYoT.js";import c from"./DocStoryTemplate-DUx_jmLE.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{a as b}from"./StoriesUtils-B76jG2kG.js";import{f as d}from"./Table-BOc_wEt1.js";import{s as R}from"./@salutejs/sdds-finai-CrMFu5No.js";import"./vendor-CvBXOjQ8.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BAnxJVQm.js";import"./@tanstack/react-virtual-Dq53HtnB.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-TstqH334.js";import"./IconButton-LdqUAZ_9.js";import"./@salutejs/plasma-icons-DBF9uERs.js";import"./utils-D7J-sht1.js";import"./constants-ChwOYBdp.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DBguVV_s.js";import"./TextField-DNzqWFXU.js";import"./sharedUtilsInputs-CPKBfE6-.js";import"./AiAgentPopup-CVoyVKiT.js";import"./TextArea-1HIWWw50.js";import"./sharedUtilsResizable-Bp8tiGu6.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DYelOQTz.js";import"./react-data-grid-C2AVEiS5.js";import"./TableTabs-BIBArlcM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C28hsfPC.js";import"./@glideappsfinal/glide-data-grid-Bcb-KcLM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BG2H0NDG.js";import"./ListOfFilters-B5D6UrCc.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNTjpvSd.js";import"./EmptyState-CKFGDnr1.js";import"./MassActions-BzkjnVND.js";import"./Autocomplete-DbeeDON4.js";const te={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:c}},component:b},y=`
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
`,o={...p({preCode:y,previewSource:"shown"}),name:"RowDetailAndSubRows",render:()=>{const[m]=t.useState(()=>w()),a=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}}},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",subRow:{isColumnWithArrow:!0}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(e,l)=>{var r;return l===1?n.jsx(R,{view:"accent",size:"m",children:(r=e.row)==null?void 0:r.tribeZone}):null}}},{key:"q1",name:"Q1",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return n.jsx(d,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowDetailPanel:{rowKeyGetter:e=>e.id,isRowWithDetail:e=>e.id===2||e.id==="2tribe"||e.id==="2product"||e.id===3,renderRowDetail:({row:e})=>n.jsxs("div",{children:["rowDetail ",e.id]}),expandButtonColumnKey:"blockActivity",detailHeight:500},resizableColumn:!0},columnConfig:a,rows:m})}};var u,i,s;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
