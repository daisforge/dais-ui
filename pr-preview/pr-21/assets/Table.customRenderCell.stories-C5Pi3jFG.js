import{d as n}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import d from"./DocStoryTemplate-Cj9EyiOP.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-Vq8Q3-WK.js";import{f as b}from"./Table-CcVd51Ex.js";import{t as p,b as C,B as f}from"./@salutejs/sdds-finai-DEWlHYGQ.js";const y={title:"Локальные компоненты/Table/Custom render/Cell",tags:["!autodocs"],parameters:{docs:{page:d}}},g=`
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
`,k=l(0,20),s=({children:e})=>n.jsxDEV(c,{$css:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:52,columnNumber:3},void 0),r={...m({preCode:g,previewSource:"shown"}),name:"Кастомизация рендера ячейки",args:{rows:k,columnConfig:[{key:"id",name:"ID",renderCell:({tabIndex:e})=>n.jsxDEV(s,{children:n.jsxDEV(p,{text:"Это чип",type:"submit",tabIndex:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:79,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:78,columnNumber:11},void 0)},{key:"task",name:"Title",width:200,renderCell:({row:e,rowIdx:o,tabIndex:t})=>n.jsxDEV(s,{children:n.jsxDEV(C,{view:"positive",tabIndex:t,onClick:()=>alert(`Строка ${o+1}. Клик по кнопке кастомной ячейки`),children:e==null?void 0:e.task},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:89,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:88,columnNumber:11},void 0)},{key:"priority",name:"Priority",renderCell:({row:e,tabIndex:o})=>{const t={High:"accent",Medium:"warning",Low:"dark",Critical:"negative"};return n.jsxDEV(s,{children:n.jsxDEV(f,{text:e.priority,view:t[e.priority]||"default",tabIndex:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:118,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:117,columnNumber:13},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},argTypes:{},render:({rows:e,columnConfig:o})=>n.jsxDEV(b,{tableConfig:{containerStyle:{height:700}},columnConfig:o,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderCell.stories.tsx",lineNumber:139,columnNumber:5},void 0)};var u,i,a;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const x=["CustomRenderCell"],E=Object.freeze(Object.defineProperty({__proto__:null,CustomRenderCell:r,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{E as T};
