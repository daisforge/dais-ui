import{r as i,d as e}from"./react-D2T61mpp.js";import{c as T}from"./tableData-UCfjiBCh.js";import g from"./DocStoryTemplate-CGbvb4bP.js";import{s as D}from"./storySourceDoc-tVKyHcEN.js";import{a as x}from"./StoriesUtils-Dc05xZ_S.js";import{f as k,k as C,l as h}from"./Table-DgJhKE0t.js";import{T as P}from"./TextField-BH7LVt6d.js";import{b as R}from"./@salutejs/sdds-finai-DNM8nTh9.js";import{rL as N,n1 as S,pe as v}from"./@salutejs/plasma-icons-BHcaROEp.js";const I={closed:e.jsxDEV(v,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:21,columnNumber:11},void 0),opened:e.jsxDEV(S,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:22,columnNumber:11},void 0),iconButtonProps:{view:"success"}},j={title:"Локальные компоненты/Table/RowDetailPanel/Simple",tags:["!autodocs"],parameters:{docs:{page:g}},component:x},E=`
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
`,n={...D({preCode:E,previewSource:"shown"}),name:"Row detail panel",render:()=>{const[m,d]=i.useState(T),c=i.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(N,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:74,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV(k,{tableConfig:{containerStyle:{height:700},editing:{onRowsChange:d,rowKeyGetter:o=>o.id},rowDetailPanel:{rowKeyGetter:o=>o.id,isRowWithDetail:o=>o.id===2||o.id===3,renderRowDetail:({row:o,onRowChange:b,tabIndex:p,rowIdx:w})=>{const t=C(),[r,f]=i.useState(o.complete),y=()=>{var a;b({...o,complete:r}),t&&((a=t.current)==null||a.selectCell({idx:4,rowIdx:w-1}))};return e.jsxDEV("div",{children:["complete ",r,e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:138,columnNumber:19},void 0),e.jsxDEV(P,{tabIndex:p,type:"number",value:r,onChange:a=>f(+a.target.value),onKeyDown:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:139,columnNumber:19},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:146,columnNumber:19},void 0),e.jsxDEV(R,{onClick:y,children:"применить изменения"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:147,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:136,columnNumber:17},void 0)},expandButtonColumnKey:"issueType",detailHeight:300,icons:I},enableVirtualization:!1},columnConfig:c,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowDetailPanel/Table.rowDetailPanel.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var s,l,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row detail panel',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              id
              <IconSber size="xs" color="inherit" />
            </div>
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      editing: {
        onRowsChange: setRows,
        rowKeyGetter: r => r.id
      },
      rowDetailPanel: {
        rowKeyGetter: r => r.id,
        isRowWithDetail: r => r.id === 2 || r.id === 3,
        renderRowDetail: ({
          row,
          onRowChange,
          tabIndex,
          rowIdx
        }) => {
          const tableRef = useRefTableContext();
          const [value, setValue] = useState(row.complete);
          const applyChanging = () => {
            onRowChange({
              ...row,
              complete: value
            });
            if (tableRef) {
              tableRef.current?.selectCell({
                idx: 4,
                rowIdx: rowIdx - 1
              });
            }
          };
          return <div>
                  complete {value}
                  <br />
                  <TextField tabIndex={tabIndex} type="number" value={value} onChange={e => setValue(+e.target.value)} onKeyDown={inputStopPropagation} />
                  <br />
                  <Button onClick={applyChanging}>применить изменения</Button>
                </div>;
        },
        expandButtonColumnKey: 'issueType',
        detailHeight: 300,
        icons: ICONS_PROP
      },
      enableVirtualization: false
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const V=["RowDetailPanel"],q=Object.freeze(Object.defineProperty({__proto__:null,RowDetailPanel:n,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{q as T};
