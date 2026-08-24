import{r as a,d as n}from"./react-D2T61mpp.js";import{c as l,d}from"./tableData-UCfjiBCh.js";import E from"./DocStoryTemplate-CASIwyN3.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{T as t}from"./TableCanvas-Lx52Eqqy.js";const H={title:"Локальные компоненты/TableCanvas/UnstickyHeader",tags:["!autodocs"],parameters:{docs:{page:E}}},m=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={...c({preCode:m,previewSource:"shown"}),name:"Simple (без группировки)",render:()=>{const[e]=a.useState(l),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return n.jsxDEV(t,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:65,columnNumber:7},void 0)}},o={...c({preCode:m,previewSource:"shown"}),name:"С группировкой колонок",render:()=>{const[e]=a.useState(l),r=a.useMemo(()=>[{key:"group-main",name:"Основные",children:[{key:"id",name:"ID"},{key:"task",name:"Title"}]},{key:"group-details",name:"Детали",children:[{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]}],[]);return n.jsxDEV(t,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:125,columnNumber:7},void 0)}},u={...c({preCode:m,previewSource:"shown"}),name:"Многоуровневая группировка",args:{headerTreeLvl:"lvl3"},argTypes:{headerTreeLvl:{description:"Уровни вложенности шапки таблицы",control:{type:"radio"},options:Object.keys(d)}},render:({headerTreeLvl:e})=>{const[r]=a.useState(l),D=a.useMemo(()=>[...d[e]??[]],[e]);return n.jsxDEV(t,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"70vh"}},columnConfig:D,rows:r},e,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:164,columnNumber:7},void 0)}},i={...c({preCode:m,previewSource:"shown"}),name:"Сравнение sticky vs unsticky",render:()=>{const[e]=a.useState(l),r=a.useMemo(()=>[{key:"group-main",name:"Основные",children:[{key:"id",name:"ID"},{key:"task",name:"Title"}]},{key:"group-details",name:"Детали",children:[{key:"priority",name:"Priority"},{key:"complete",name:"% Complete"}]}],[]);return n.jsxDEV("div",{style:{display:"flex",gap:24},children:[n.jsxDEV("div",{style:{flex:1},children:[n.jsxDEV("h3",{style:{marginBottom:8},children:"Sticky (по умолчанию)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:223,columnNumber:11},void 0),n.jsxDEV(t,{tableConfig:{containerStyle:{height:"60vh"}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:224,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:222,columnNumber:9},void 0),n.jsxDEV("div",{style:{flex:1},children:[n.jsxDEV("h3",{style:{marginBottom:8},children:"Unsticky"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:233,columnNumber:11},void 0),n.jsxDEV(t,{tableConfig:{unstickyHeader:!0,containerStyle:{height:"60vh"}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:234,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:232,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.UnstickyHeader/TableCanvas.unstickyHeader.stories.tsx",lineNumber:221,columnNumber:7},void 0)}};var y,k,p;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(p=(k=s.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var C,v,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,h,f;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=u.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,w,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const x=["SimpleUnstickyHeader","WithColumnGroups","WithMultiLevelGroups","StickyVsUnstickyComparison"],V=Object.freeze(Object.defineProperty({__proto__:null,SimpleUnstickyHeader:s,StickyVsUnstickyComparison:i,WithColumnGroups:o,WithMultiLevelGroups:u,__namedExportsOrder:x,default:H},Symbol.toStringTag,{value:"Module"}));export{V as T};
