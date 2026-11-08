import{r as s,d as e}from"./react-D2T61mpp.js";import{c as m}from"./tableData-DVJFoYoT.js";import g from"./DocStoryTemplate-D389G43V.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{cp as p,cq as d,cr as y,cs as T}from"./vendor-5YaLwWPx.js";import{f as b}from"./Table-CAZxcjUH.js";import{a3 as v}from"./@salutejs/sdds-finai-DrGBnohr.js";const f={title:"Локальные компоненты/Table/HighlightActiveType",tags:["!autodocs"],parameters:{docs:{page:g}}},w=`
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
`,i={play:async({canvasElement:o})=>{const t=p(o),a=await t.findByRole("gridcell",{name:/^2$/},{timeout:1e4});await d.click(a),await y(()=>T(t.getByRole("gridcell",{selected:!0})).toHaveTextContent(/^2$/),{timeout:1e4})},...h({preCode:w,previewSource:"hidden"}),render:()=>{const[o]=s.useState(m),[t,a]=s.useState("row"),u=s.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:"id"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:77,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV(e.Fragment,{children:["Выбрать тип выделения",e.jsxDEV(v,{value:t,onChange:n=>a(n),items:["row","cell","disabled"].map(n=>({label:n,value:n}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:109,columnNumber:9},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:117,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:700},highlightActiveType:t},columnConfig:u,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:118,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:107,columnNumber:7},void 0)}};var r,l,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const k=["HighlightActiveTypeTable"],R=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveTypeTable:i,__namedExportsOrder:k,default:f},Symbol.toStringTag,{value:"Module"}));export{R as T};
