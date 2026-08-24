import{r as n,d as e}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import h from"./DocStoryTemplate-CrulLpbR.js";import{s as t}from"./storySourceDoc-tVKyHcEN.js";import{f as a}from"./Table-CfMM094t.js";import{rL as c}from"./@salutejs/plasma-icons-C9J8k7cv.js";import{b as x}from"./@salutejs/sdds-finai-4F5vcRwZ.js";const D={title:"Локальные компоненты/Table/FullScreenMode",tags:["!autodocs"],parameters:{docs:{page:h}}},d=`
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
`,r={...t({preCode:d,previewSource:"shown"}),name:"Полноэкранный режим",render:()=>{const[o]=n.useState(l),u=n.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(c,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:63,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:56,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:!0},columnConfig:u,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:88,columnNumber:7},void 0)}},s={...t({preCode:d,previewSource:"shown"}),name:"Включение по умолчанию полноэкранного режима",render:()=>{const[o]=n.useState(l),u=n.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(c,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:121,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:114,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV("div",{style:{height:500},children:e.jsxDEV(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{defaultOpened:!0}},columnConfig:u,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:147,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:146,columnNumber:7},void 0)}},i={...t({preCode:d,previewSource:"shown"}),name:"Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock",render:()=>{const[o]=n.useState(l),u=n.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(c,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:181,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:174,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[m,f]=n.useState(!1);return e.jsxDEV("div",{style:{height:500},children:[e.jsxDEV(x,{view:"positive",onClick:()=>f(!0),children:"На весь экран"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:208,columnNumber:9},void 0),e.jsxDEV(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{state:[m,f],showInControl:m}},columnConfig:u,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:211,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.fullScreenMode/Table.fullScreenMode.stories.tsx",lineNumber:207,columnNumber:7},void 0)}};var b,y,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Полноэкранный режим',
  render: () => {
    const [rows] = useState(createRows);
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
        height: 200
      },
      fullScreenEnabled: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var S,k,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Включение по умолчанию полноэкранного режима',
  render: () => {
    const [rows] = useState(createRows);
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
    return <div style={{
      height: 500
    }}>
        <Table tableConfig={{
        containerStyle: {
          height: 200
        },
        fullScreenEnabled: {
          defaultOpened: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,g,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock',
  render: () => {
    const [rows] = useState(createRows);
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
    const [fullScreened, setFullScreened] = useState(false);
    return <div style={{
      height: 500
    }}>
        <Button view="positive" onClick={() => setFullScreened(true)}>
          На весь экран
        </Button>
        <Table tableConfig={{
        containerStyle: {
          height: 200
        },
        fullScreenEnabled: {
          state: [fullScreened, setFullScreened],
          showInControl: fullScreened
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const E=["FullscreenEnabling","FullscreenDefaultOpened","FullscreenCustomState"],R=Object.freeze(Object.defineProperty({__proto__:null,FullscreenCustomState:i,FullscreenDefaultOpened:s,FullscreenEnabling:r,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{R as T};
