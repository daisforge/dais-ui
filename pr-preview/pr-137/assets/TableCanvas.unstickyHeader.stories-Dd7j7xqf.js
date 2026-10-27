import{r,j as n}from"./react-CAOzMBF_.js";import{c,d as y}from"./tableData-DVJFoYoT.js";import E from"./DocStoryTemplate-Cf946dgV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{T as i}from"./TableCanvas-DlX-Wh2b.js";const x={title:"Локальные компоненты/TableCanvas/UnstickyHeader",tags:["!autodocs"],parameters:{docs:{page:E}}},m=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,u={...l({preCode:m,previewSource:"shown"}),name:"Simple (без группировки)",render:()=>{const[e]=r.useState(c),o=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return n.jsx(i,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:o,rows:e})}},t={...l({preCode:m,previewSource:"shown"}),name:"С группировкой колонок",render:()=>{const[e]=r.useState(c),o=r.useMemo(()=>[{key:"group-main",name:"Основные",children:[{key:"id",name:"ID"},{key:"task",name:"Title"}]},{key:"group-details",name:"Детали",children:[{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]}],[]);return n.jsx(i,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:o,rows:e})}},s={...l({preCode:m,previewSource:"shown"}),name:"Многоуровневая группировка",args:{headerTreeLvl:"lvl3"},argTypes:{headerTreeLvl:{description:"Уровни вложенности шапки таблицы",control:{type:"radio"},options:Object.keys(y)}},render:({headerTreeLvl:e})=>{const[o]=r.useState(c),D=r.useMemo(()=>[...y[e]??[]],[e]);return n.jsx(i,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:D,rows:o},e)}},a={...l({preCode:m,previewSource:"shown"}),name:"Сравнение sticky vs unsticky",render:()=>{const[e]=r.useState(c),o=r.useMemo(()=>[{key:"group-main",name:"Основные",children:[{key:"id",name:"ID"},{key:"task",name:"Title"}]},{key:"group-details",name:"Детали",children:[{key:"priority",name:"Priority"},{key:"complete",name:"% Complete"}]}],[]);return n.jsxs("div",{style:{display:"flex",gap:24},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{marginBottom:8},children:"Sticky (по умолчанию)"}),n.jsx(i,{tableConfig:{containerStyle:{height:"60vh"}},columnConfig:o,rows:e})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{marginBottom:8},children:"Unsticky"}),n.jsx(i,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"60vh"}},columnConfig:o,rows:e})]})]})}};var p,d,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Simple (без группировки)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
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
      unstickyHeader: true,
      containerStyle: {
        height: '70vh'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(g=(d=u.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var k,C,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'С группировкой колонок',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [{
      key: 'group-main',
      name: 'Основные',
      children: [{
        key: 'id',
        name: 'ID'
      }, {
        key: 'task',
        name: 'Title'
      }]
    }, {
      key: 'group-details',
      name: 'Детали',
      children: [{
        key: 'priority',
        name: 'Priority'
      }, {
        key: 'issueType',
        name: 'Issue Type'
      }, {
        key: 'complete',
        name: '% Complete'
      }]
    }], []);
    return <TableCanvas tableConfig={{
      unstickyHeader: true,
      containerStyle: {
        height: '70vh'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая группировка',
  args: {
    headerTreeLvl: 'lvl3'
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: {
        type: 'radio'
      },
      options: Object.keys(dataObj)
    }
  },
  render: ({
    headerTreeLvl
  }) => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [...(dataObj[headerTreeLvl] ?? [])], [headerTreeLvl]);
    return <TableCanvas key={headerTreeLvl} tableConfig={{
      unstickyHeader: true,
      containerStyle: {
        height: '70vh'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,T,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Сравнение sticky vs unsticky',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [{
      key: 'group-main',
      name: 'Основные',
      children: [{
        key: 'id',
        name: 'ID'
      }, {
        key: 'task',
        name: 'Title'
      }]
    }, {
      key: 'group-details',
      name: 'Детали',
      children: [{
        key: 'priority',
        name: 'Priority'
      }, {
        key: 'complete',
        name: '% Complete'
      }]
    }], []);
    return <div style={{
      display: 'flex',
      gap: 24
    }}>
        <div style={{
        flex: 1
      }}>
          <h3 style={{
          marginBottom: 8
        }}>Sticky (по умолчанию)</h3>
          <TableCanvas tableConfig={{
          containerStyle: {
            height: '60vh'
          }
        }} columnConfig={columnConfig} rows={rows} />
        </div>
        <div style={{
        flex: 1
      }}>
          <h3 style={{
          marginBottom: 8
        }}>Unsticky</h3>
          <TableCanvas tableConfig={{
          unstickyHeader: true,
          containerStyle: {
            height: '60vh'
          }
        }} columnConfig={columnConfig} rows={rows} />
        </div>
      </div>;
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const j=["SimpleUnstickyHeader","WithColumnGroups","WithMultiLevelGroups","StickyVsUnstickyComparison"],R=Object.freeze(Object.defineProperty({__proto__:null,SimpleUnstickyHeader:u,StickyVsUnstickyComparison:a,WithColumnGroups:t,WithMultiLevelGroups:s,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{R as T};
