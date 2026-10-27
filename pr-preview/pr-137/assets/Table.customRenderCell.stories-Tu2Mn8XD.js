import{j as n}from"./react-CAOzMBF_.js";import{c as l}from"./tableData-DVJFoYoT.js";import m from"./DocStoryTemplate-Cf946dgV.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{B as d}from"./Box-DvvYTz20.js";import{f as p}from"./Table-BQHrw1K6.js";import{v as C,t as y,s as g}from"./@salutejs/sdds-finai-CKhMjg07.js";const f={title:"Локальные компоненты/Table/Custom render/Cell",tags:["!autodocs"],parameters:{docs:{page:m}}},x=`
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
`,w=l(0,20),u=({children:e})=>n.jsx(d,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e}),o={...c({preCode:x,previewSource:"shown"}),name:"Кастомизация рендера ячейки",args:{rows:w,columnConfig:[{key:"id",name:"ID",renderCell:({tabIndex:e})=>n.jsx(u,{children:n.jsx(C,{text:"Это чип",type:"submit",tabIndex:e})})},{key:"task",name:"Title",width:200,renderCell:({row:e,rowIdx:t,tabIndex:r})=>n.jsx(u,{children:n.jsx(y,{view:"positive",tabIndex:r,onClick:()=>alert(`Строка ${t+1}. Клик по кнопке кастомной ячейки`),children:e==null?void 0:e.task})})},{key:"priority",name:"Priority",renderCell:({row:e,tabIndex:t})=>{const r={High:"accent",Medium:"warning",Low:"dark",Critical:"negative"};return n.jsx(u,{children:n.jsx(g,{text:e.priority,view:r[e.priority]||"default",tabIndex:t})})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:e,columnConfig:t})=>n.jsx(p,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:e})};var i,a,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Кастомизация рендера ячейки',
  args: {
    rows,
    columnConfig: [{
      key: 'id',
      name: 'ID',
      renderCell: ({
        tabIndex
      }) => <CellContainer>
            <Chip text="Это чип" type="submit" tabIndex={tabIndex} />
          </CellContainer>
    }, {
      key: 'task',
      name: 'Title',
      width: 200,
      renderCell: ({
        row,
        rowIdx,
        tabIndex
      }) => <CellContainer>
            <Button view="positive" tabIndex={tabIndex} onClick={() =>
        // Для примера
        // eslint-disable-next-line no-alert
        alert(\`Строка \${rowIdx + 1}. Клик по кнопке кастомной ячейки\`)}>
              {row?.task}
            </Button>
          </CellContainer>
    }, {
      key: 'priority',
      name: 'Priority',
      renderCell: ({
        row,
        tabIndex
      }) => {
        const viewMap: Record<Row['priority'], ComponentProps<typeof Badge>['view']> = {
          High: 'accent',
          Medium: 'warning',
          Low: 'dark',
          Critical: 'negative'
        };
        return <CellContainer>
              <Badge text={row.priority} view={viewMap[row.priority] || 'default'} tabIndex={tabIndex} />
            </CellContainer>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["CustomRenderCell"],j=Object.freeze(Object.defineProperty({__proto__:null,CustomRenderCell:o,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{j as T};
