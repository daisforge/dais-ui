import{r as t,j as n}from"./react-DNGZQ4GM.js";import{b as p}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-D8gcSeh5.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{a as b}from"./StoriesUtils-B76jG2kG.js";import{e as d}from"./Table-BDqwvkNH.js";import{B as R}from"./@salutejs/sdds-finai-BuI7JyX1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BbbJ9Z83.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-D_Edv4_h.js";import"./@tanstack/react-virtual-CcNjsb-5.js";import"./WithTooltip-KJL26V4Q-ZJQwZcgM.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CuyfXGnQ.js";import"./@salutejs/plasma-icons-BJIYJCV4.js";import"./index-L9H5tuHV.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./Box-1lujwMH2.js";import"./Collapse-CCWmnco9.js";import"./utils-DoXDRJ4u.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CiWOk-dj.js";import"./TableTabs-DsUIER9h.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-PAsMjfPb.js";import"./@glideappsfinal/glide-data-grid-BCJEzwn8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-DTtAc4Ys.js";import"./sharedUiSearch-DtK2Kt5u.js";import"./TextField-dI5Q6Mwb.js";import"./sharedUtilsInputs-BcRl6j87.js";import"./TypographyWithAutoTooltip-C3PM-cpw.js";import"./Typography-CIXQr6Yl.js";import"./ListOfFilters-NwMG4Gt8.js";import"./FiltersActions-CwpBf5qJ.js";import"./IconButton-DFBxeTV9.js";import"./TooltipList-C8NjZIWl.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Deh6I-nV.js";import"./NumberFormat-Ja5qKQtO.js";import"./EmptyState-KjA_X5Eh.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CIAtDoD6.js";import"./Autocomplete-CDywWsDe.js";const be={title:"Локальные компоненты/Table/RowDetailPanel/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}},component:b},y=`
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
`,o={...c({preCode:y,previewSource:"shown"}),name:"RowDetailAndSubRows",render:()=>{const[s]=t.useState(()=>p()),a=t.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}}},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",subRow:{isColumnWithArrow:!0}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(e,l)=>{var r;return l===1?n.jsx(R,{view:"accent",size:"m",children:(r=e.row)==null?void 0:r.tribeZone}):null}}},{key:"q1",name:"Q1",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return n.jsx(d,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},rowDetailPanel:{rowKeyGetter:e=>e.id,isRowWithDetail:e=>e.id===2||e.id==="2tribe"||e.id==="2product"||e.id===3,renderRowDetail:({row:e})=>n.jsxs("div",{children:["rowDetail ",e.id]}),expandButtonColumnKey:"blockActivity",detailHeight:500},resizableColumn:!0},columnConfig:a,rows:s})}};var u,i,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const de=["RowDetailAndSubRows"];export{o as RowDetailAndSubRows,de as __namedExportsOrder,be as default};
