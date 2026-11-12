import{r as s,j as e}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import p from"./DocStoryTemplate-DUx_jmLE.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{cp as y,cr as d,cq as h,cw as v}from"./vendor-CvBXOjQ8.js";import{f}from"./Table-BOc_wEt1.js";import{a3 as T}from"./@salutejs/sdds-finai-CrMFu5No.js";const w={title:"Локальные компоненты/Table/HighlightActiveType",tags:["!autodocs"],parameters:{docs:{page:p}}},C=`
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
`,n={play:async({canvasElement:i})=>{const t=y(i),a=await t.findByRole("gridcell",{name:/^2$/},{timeout:1e4});await d.click(a),await h(()=>v(t.getByRole("gridcell",{selected:!0})).toHaveTextContent(/^2$/),{timeout:1e4})},...g({preCode:C,previewSource:"hidden"}),render:()=>{const[i]=s.useState(m),[t,a]=s.useState("row"),u=s.useMemo(()=>[{key:"id",name:e.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:"id"})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxs(e.Fragment,{children:["Выбрать тип выделения",e.jsx(T,{value:t,onChange:o=>a(o),items:["row","cell","disabled"].map(o=>({label:o,value:o}))}),e.jsx("br",{}),e.jsx(f,{tableConfig:{containerStyle:{height:700},highlightActiveType:t},columnConfig:u,rows:i})]})}};var r,l,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cell = await canvas.findByRole('gridcell', {
      name: /^2$/
    }, {
      timeout: 10000
    });
    await userEvent.click(cell);
    await waitFor(() => expect(canvas.getByRole('gridcell', {
      selected: true
    })).toHaveTextContent(/^2$/), {
      timeout: 10000
    });
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'hidden'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              id
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
    return <>
        Выбрать тип выделения
        <Select value={highlightActiveType} onChange={v => setHighlightActiveType(v as HighlightActiveType)} items={['row', 'cell', 'disabled'].map(i => ({
        label: i,
        value: i
      }))} />
        <br />
        <Table tableConfig={{
        containerStyle: {
          height: 700
        },
        highlightActiveType
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const b=["HighlightActiveTypeTable"],B=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveTypeTable:n,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{B as T};
