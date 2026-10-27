import{r as a,j as e}from"./react-CAOzMBF_.js";import{c as g}from"./tableData-DVJFoYoT.js";import x from"./DocStoryTemplate-Cf946dgV.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{a as R}from"./StoriesUtils-D_DQdVN_.js";import{f as S,k as h,l as T}from"./Table-BQHrw1K6.js";import{T as I}from"./TextField-DpKf-85P.js";import{t as v}from"./@salutejs/sdds-finai-CKhMjg07.js";import{rV as D,n7 as P,pm as j}from"./@salutejs/plasma-icons-Do5ggeDI.js";const k={closed:e.jsx(j,{color:"inherit"}),opened:e.jsx(P,{color:"inherit"}),iconButtonProps:{view:"success"}},B={title:"Локальные компоненты/Table/RowDetailPanel/Simple",tags:["!autodocs"],parameters:{docs:{page:x}},component:R},O=`
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
`,o={...b({preCode:O,previewSource:"shown"}),name:"Row detail panel",render:()=>{const[c,p]=a.useState(g),m=a.useMemo(()=>[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(D,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx(S,{tableConfig:{containerStyle:{height:700},editing:{onRowsChange:p,rowKeyGetter:n=>n.id},rowDetailPanel:{rowKeyGetter:n=>n.id,isRowWithDetail:n=>n.id===2||n.id===3,renderRowDetail:({row:n,onRowChange:d,tabIndex:w,rowIdx:y})=>{const i=h(),[r,C]=a.useState(n.complete),f=()=>{var t;d({...n,complete:r}),i&&((t=i.current)==null||t.selectCell({idx:4,rowIdx:y-1}))};return e.jsxs("div",{children:["complete ",r,e.jsx("br",{}),e.jsx(I,{tabIndex:w,type:"number",value:r,onChange:t=>C(+t.target.value),onKeyDown:T}),e.jsx("br",{}),e.jsx(v,{onClick:f,children:"применить изменения"})]})},expandButtonColumnKey:"issueType",detailHeight:300,icons:k},enableVirtualization:!1},columnConfig:m,rows:c})}};var s,l,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const F=["RowDetailPanel"],N=Object.freeze(Object.defineProperty({__proto__:null,RowDetailPanel:o,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{N as T};
