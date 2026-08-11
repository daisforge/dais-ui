import{r as o,d as u}from"./react-D2T61mpp.js";import{a as c}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-DwKiq8z4.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-ocwmzH40.js";import{B as w}from"./@salutejs/sdds-finai-DFCsnlGS.js";const f={title:"Локальные компоненты/Table/FormatCellContent",tags:["!autodocs"],parameters:{docs:{page:b}}},C=`
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
`,e={...d({preCode:C,previewSource:"shown"}),name:"Форматирование ячеек",render:()=>{const[i]=o.useState(()=>c()),s=o.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",contentFormat:{customFormat:n=>`📝 ${n}`},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1},resizable:!0},{key:"blockActivity",name:"Активность блока",title:"123",contentFormat:{customFormat:n=>`${n}!`}},{key:"",minWidth:170,name:"Локация трайба",subRow:{renderSubRowCell:(n,l)=>{var t;return l===1?u.jsxDEV(w,{view:"accent",size:"m",children:(t=n.row)==null?void 0:t.tribeZone},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.formatCellContent/Table.formatCellContent.stories.tsx",lineNumber:92,columnNumber:19},void 0):null}}},{key:"q1",name:"Q1",contentFormat:"number",subRow:{parentKeyAsDefault:!0,contentFormat:{customFormat:n=>`${n}%`}}},{key:"q2",name:"Q2",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:".",thousandSeparator:"_",alignContent:"center"},subRow:{keyOfColumnInSubRow:"q1",contentFormat:{type:"number",minimumFractionDigits:1,maximumFractionDigits:3,decimalSeparator:",",thousandSeparator:".",alignContent:"right"}}},{key:"q3",name:"Q3",contentFormat:{type:"number",minimumFractionDigits:2,locales:["en-US","fr-FR","ru-RU"]},subRow:{keyOfColumnInSubRow:"q1"}},{key:"q4",name:"Q4",contentFormat:"number",subRow:{keyOfColumnInSubRow:"q1"}}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:s,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.formatCellContent/Table.formatCellContent.stories.tsx",lineNumber:162,columnNumber:7},void 0)}};var r,a,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Форматирование ячеек',
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columns = useMemo<readonly ColumnConfig<TreeRow>[]>(() => [{
      key: 'block',
      name: 'Блок / Трайб / Продукт',
      contentFormat: {
        customFormat: val => \`📝 \${val}\`
      },
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
      name: 'Активность блока',
      title: '123',
      contentFormat: {
        customFormat: val => \`\${val}!\`
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
      contentFormat: 'number',
      subRow: {
        parentKeyAsDefault: true,
        /* Форматирование в подстроках */
        contentFormat: {
          customFormat: val => \`\${val}%\`
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 1,
        maximumFractionDigits: 3,
        decimalSeparator: '.',
        thousandSeparator: '_',
        alignContent: 'center'
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        contentFormat: {
          type: 'number',
          minimumFractionDigits: 1,
          maximumFractionDigits: 3,
          decimalSeparator: ',',
          thousandSeparator: '.',
          alignContent: 'right'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 2,
        locales: ['en-US', 'fr-FR', 'ru-RU']
      },
      subRow: {
        keyOfColumnInSubRow: 'q1'
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const F=["BasicFormatting"],h=Object.freeze(Object.defineProperty({__proto__:null,BasicFormatting:e,__namedExportsOrder:F,default:f},Symbol.toStringTag,{value:"Module"}));export{h as T};
