import{r as o,d as r}from"./react-D2T61mpp.js";import{a as b}from"./tableData-UCfjiBCh.js";import c from"./DocStoryTemplate-HaaPJ6-T.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as d}from"./Table-dS_q2168.js";import{B as f}from"./@salutejs/sdds-finai-Bz9xN3Et.js";const R={title:"Локальные компоненты/Table/SubRows",tags:["!autodocs"],parameters:{docs:{page:c}}},p=`
import React, { useMemo, useState } from 'react';
import { Badge, ColumnConfig, Table } from '@daisforge/ui';
`,n={...w({preCode:p,previewSource:"shown"}),name:"Иерархичный вид",render:()=>{const[l]=o.useState(()=>b()),i=o.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока"},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(e,m)=>{var u;return m===1?r.jsxDEV(f,{view:"accent",size:"m",children:(u=e.row)==null?void 0:u.tribeZone},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:76,columnNumber:19},void 0):null}}},{key:"q1",name:"Q1",subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q3",name:"Q3",subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return r.jsxDEV(d,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:i,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.subRows/Table.subRows.stories.tsx",lineNumber:120,columnNumber:7},void 0)}};var s,t,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
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
        },
        isColumnWithArrow: true,
        hideHeaderExpandAllArrow: false
      },
      resizable: true
    }, {
      key: 'blockActivity',
      name: 'Активность блока'
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
        parentKeyAsDefault: true
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
      resizableColumn: true
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const y=["SubRows"],A=Object.freeze(Object.defineProperty({__proto__:null,SubRows:n,__namedExportsOrder:y,default:R},Symbol.toStringTag,{value:"Module"}));export{A as T};
