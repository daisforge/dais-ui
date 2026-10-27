import{r as n,j as e}from"./react-CAOzMBF_.js";import{c as i}from"./tableData-DVJFoYoT.js";import x from"./DocStoryTemplate-Cf946dgV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as a}from"./Table-BQHrw1K6.js";import{t as E}from"./@salutejs/sdds-finai-CKhMjg07.js";import{rV as c}from"./@salutejs/plasma-icons-Do5ggeDI.js";const D={title:"Локальные компоненты/Table/FullScreenMode",tags:["!autodocs"],parameters:{docs:{page:x}}},m=`
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
`,t={...l({preCode:m,previewSource:"shown"}),name:"Полноэкранный режим",render:()=>{const[o]=n.useState(i),u=n.useMemo(()=>[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(c,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:!0},columnConfig:u,rows:o})}},r={...l({preCode:m,previewSource:"shown"}),name:"Включение по умолчанию полноэкранного режима",render:()=>{const[o]=n.useState(i),u=n.useMemo(()=>[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(c,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx("div",{style:{height:500},children:e.jsx(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{defaultOpened:!0}},columnConfig:u,rows:o})})}},s={...l({preCode:m,previewSource:"shown"}),name:"Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock",render:()=>{const[o]=n.useState(i),u=n.useMemo(()=>[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(c,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[d,y]=n.useState(!1);return e.jsxs("div",{style:{height:500},children:[e.jsx(E,{view:"positive",onClick:()=>y(!0),children:"На весь экран"}),e.jsx(a,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{state:[d,y],showInControl:d}},columnConfig:u,rows:o})]})}};var p,f,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,g,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var h,k,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const T=["FullscreenEnabling","FullscreenDefaultOpened","FullscreenCustomState"],A=Object.freeze(Object.defineProperty({__proto__:null,FullscreenCustomState:s,FullscreenDefaultOpened:r,FullscreenEnabling:t,__namedExportsOrder:T,default:D},Symbol.toStringTag,{value:"Module"}));export{A as T};
