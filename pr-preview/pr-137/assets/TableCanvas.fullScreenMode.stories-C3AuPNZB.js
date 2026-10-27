import{r as o,j as e}from"./react-CAOzMBF_.js";import{c as i}from"./tableData-DVJFoYoT.js";import T from"./DocStoryTemplate-Cf946dgV.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{C as n,T as l}from"./TableCanvas-DlX-Wh2b.js";import{t as b}from"./@salutejs/sdds-finai-CKhMjg07.js";import{rV as m}from"./@salutejs/plasma-icons-Do5ggeDI.js";const j={title:"Локальные компоненты/TableCanvas/FullScreenMode",tags:["!autodocs"],parameters:{docs:{page:T}}},C=`
import React, { useMemo, useState } from 'react';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button } from '@daisforge/ui';
import { IconSber } from '@daisforge/ui/icons';
`,u={...c({preCode:C,previewSource:"shown"}),name:"Полноэкранный режим",render:()=>{const[t]=o.useState(i),r=o.useMemo(()=>[{key:"id",name:e.jsxs(n.Container,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(n.Text,{children:"id"}),e.jsx(n.Icon,{icon:e.jsx(m,{size:"xs",color:"inherit"})})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx(l,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:!0},columnConfig:r,rows:t})}},s={...c({preCode:C,previewSource:"shown"}),name:"Включение по умолчанию полноэкранного режима",render:()=>{const[t]=o.useState(i),r=o.useMemo(()=>[{key:"id",name:e.jsxs(n.Container,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(n.Text,{children:"id"}),e.jsx(n.Icon,{icon:e.jsx(m,{size:"xs",color:"inherit"})})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx("div",{style:{height:500},children:e.jsx(l,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{defaultOpened:!0}},columnConfig:r,rows:t})})}},a={...c({preCode:C,previewSource:"shown"}),name:"Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock",render:()=>{const[t]=o.useState(i),r=o.useMemo(()=>[{key:"id",name:e.jsxs(n.Container,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(n.Text,{children:"id"}),e.jsx(n.Icon,{icon:e.jsx(m,{size:"xs",color:"inherit"})})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[d,p]=o.useState(!1);return e.jsxs("div",{style:{height:500},children:[e.jsx(b,{view:"positive",onClick:()=>p(!0),children:"На весь экран"}),e.jsx(l,{tableConfig:{containerStyle:{height:200},fullScreenEnabled:{state:[d,p],showInControl:d}},columnConfig:r,rows:t})]})}};var y,f,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Полноэкранный режим',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <Canvas.Container direction="row" justifyContent="space-between" alignItems="center">
              <Canvas.Text>id</Canvas.Text>
              <Canvas.Icon icon={<IconSber size="xs" color="inherit" />} />
            </Canvas.Container>
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
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 200
      },
      fullScreenEnabled: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(f=u.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var g,w,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Включение по умолчанию полноэкранного режима',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <Canvas.Container direction="row" justifyContent="space-between" alignItems="center">
              <Canvas.Text>id</Canvas.Text>
              <Canvas.Icon icon={<IconSber size="xs" color="inherit" />} />
            </Canvas.Container>
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
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 200
        },
        fullScreenEnabled: {
          defaultOpened: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,k,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <Canvas.Container direction="row" justifyContent="space-between" alignItems="center">
              <Canvas.Text>id</Canvas.Text>
              <Canvas.Icon icon={<IconSber size="xs" color="inherit" />} />
            </Canvas.Container>
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
        <TableCanvas tableConfig={{
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
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const D=["FullscreenEnabling","FullscreenDefaultOpened","FullscreenCustomState"],z=Object.freeze(Object.defineProperty({__proto__:null,FullscreenCustomState:a,FullscreenDefaultOpened:s,FullscreenEnabling:u,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{z as T};
