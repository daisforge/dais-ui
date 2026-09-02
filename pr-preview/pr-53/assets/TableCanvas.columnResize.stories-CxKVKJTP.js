import{r as e,d as r}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import T from"./DocStoryTemplate-DqVM6KeB.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as l}from"./TableCanvas-DzdKK5OS.js";const D={title:"Локальные компоненты/TableCanvas/Column Resize",tags:["!autodocs"],parameters:{docs:{page:T}}},t={name:"minWidth / maxWidth",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (min 150, max 400)",width:250,minWidth:150,maxWidth:400},{key:"priority",name:"Priority (min 120, max 300)",width:200,minWidth:120,maxWidth:300},{key:"loremIpsum",name:"Issue Type (max 200)",width:150,maxWidth:200},{key:"complete",name:"% Complete",width:150}],[]);return r.jsxDEV(l,{tableConfig:{containerStyle:{height:"60vh"}},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:68,columnNumber:7},void 0)}},a={name:"maxAutoWidth — базовый",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 120)",maxAutoWidth:120},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (без ограничений)"},{key:"loremIpsum",name:"Issue Type (maxAutoWidth: 200)",maxAutoWidth:200},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return r.jsxDEV(l,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:118,columnNumber:7},void 0)}},u={name:"maxAutoWidth + maxWidth (комбинация)",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 150, maxWidth: 200)",maxAutoWidth:150,maxWidth:200},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (maxAutoWidth: 180, maxWidth: 180)",maxAutoWidth:180,maxWidth:180},{key:"loremIpsum",name:"Issue (без ограничений)"},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return r.jsxDEV(l,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:171,columnNumber:7},void 0)}},i={name:"maxColumnAutoWidth (глобальный)",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority (maxAutoWidth: 250 — перебивает глобальный)",maxAutoWidth:250},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0,maxColumnAutoWidth:300},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:219,columnNumber:7},void 0)}},s={name:"maxAutoWidth не ограничивает ручной ресайз",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(m),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 100)",maxAutoWidth:100},{key:"task",name:"Task (maxAutoWidth: 250, maxWidth: 500)",maxAutoWidth:250,maxWidth:500},{key:"priority",name:"Priority (maxAutoWidth: 200)",maxAutoWidth:200},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete (фикс 150px)",width:150}],[]);return r.jsxDEV(l,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:272,columnNumber:7},void 0)}};var c,h,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'minWidth / maxWidth',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'task',
      name: 'Title (min 150, max 400)',
      width: 250,
      minWidth: 150,
      maxWidth: 400
    }, {
      key: 'priority',
      name: 'Priority (min 120, max 300)',
      width: 200,
      minWidth: 120,
      maxWidth: 300
    }, {
      key: 'loremIpsum',
      name: 'Issue Type (max 200)',
      width: 150,
      maxWidth: 200
    }, {
      key: 'complete',
      name: '% Complete',
      width: 150
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,p,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'maxAutoWidth — базовый',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID (maxAutoWidth: 120)',
      maxAutoWidth: 120
    }, {
      key: 'task',
      name: 'Task (maxAutoWidth: 400)',
      maxAutoWidth: 400
    }, {
      key: 'priority',
      name: 'Priority (без ограничений)'
    }, {
      key: 'loremIpsum',
      name: 'Issue Type (maxAutoWidth: 200)',
      maxAutoWidth: 200
    }, {
      key: 'complete',
      name: '% Complete (фикс 130px)',
      width: 130
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var W,k,w;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'maxAutoWidth + maxWidth (комбинация)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID (maxAutoWidth: 150, maxWidth: 200)',
      maxAutoWidth: 150,
      maxWidth: 200
    }, {
      key: 'task',
      name: 'Task (maxAutoWidth: 400)',
      maxAutoWidth: 400
    }, {
      key: 'priority',
      name: 'Priority (maxAutoWidth: 180, maxWidth: 180)',
      maxAutoWidth: 180,
      maxWidth: 180
    }, {
      key: 'loremIpsum',
      name: 'Issue (без ограничений)'
    }, {
      key: 'complete',
      name: '% Complete (фикс 130px)',
      width: 130
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,b,g;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'maxColumnAutoWidth (глобальный)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Task'
    }, {
      key: 'priority',
      name: 'Priority (maxAutoWidth: 250 — перебивает глобальный)',
      maxAutoWidth: 250
    }, {
      key: 'loremIpsum',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      resizableColumn: true,
      maxColumnAutoWidth: 300
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'maxAutoWidth не ограничивает ручной ресайз',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID (maxAutoWidth: 100)',
      maxAutoWidth: 100
    }, {
      key: 'task',
      name: 'Task (maxAutoWidth: 250, maxWidth: 500)',
      maxAutoWidth: 250,
      maxWidth: 500
    }, {
      key: 'priority',
      name: 'Priority (maxAutoWidth: 200)',
      maxAutoWidth: 200
    }, {
      key: 'loremIpsum',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete (фикс 150px)',
      width: 150
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const I=["MinMaxWidth","MaxAutoWidthBasic","MaxAutoWidthVsMaxWidth","MaxAutoWidthGlobal","ManualResizeBypassesMaxAutoWidth"],B=Object.freeze(Object.defineProperty({__proto__:null,ManualResizeBypassesMaxAutoWidth:s,MaxAutoWidthBasic:a,MaxAutoWidthGlobal:i,MaxAutoWidthVsMaxWidth:u,MinMaxWidth:t,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{B as C};
