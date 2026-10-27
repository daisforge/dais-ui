import{r as e,j as r}from"./react-CAOzMBF_.js";import{c as s}from"./tableData-DVJFoYoT.js";import v from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as h}from"./TableCanvas-DlX-Wh2b.js";const M={title:"Локальные компоненты/TableCanvas/Column Resize",tags:["!autodocs"],parameters:{docs:{page:v}}},o={name:"minWidth / maxWidth",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(s),t=e.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (min 150, max 400)",width:250,minWidth:150,maxWidth:400},{key:"priority",name:"Priority (min 120, max 300)",width:200,minWidth:120,maxWidth:300},{key:"loremIpsum",name:"Issue Type (max 200)",width:150,maxWidth:200},{key:"complete",name:"% Complete",width:150}],[]);return r.jsx(h,{tableConfig:{containerStyle:{height:"60vh"}},columnConfig:t,rows:n})}},a={name:"maxAutoWidth — базовый",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(s),t=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 120)",maxAutoWidth:120},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (без ограничений)"},{key:"loremIpsum",name:"Issue Type (maxAutoWidth: 200)",maxAutoWidth:200},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return r.jsx(h,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:t,rows:n})}},u={name:"maxAutoWidth + maxWidth (комбинация)",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(s),t=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 150, maxWidth: 200)",maxAutoWidth:150,maxWidth:200},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (maxAutoWidth: 180, maxWidth: 180)",maxAutoWidth:180,maxWidth:180},{key:"loremIpsum",name:"Issue (без ограничений)"},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return r.jsx(h,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:t,rows:n})}},m={name:"maxColumnAutoWidth (глобальный)",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(s),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority (maxAutoWidth: 250 — перебивает глобальный)",maxAutoWidth:250},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return r.jsx(h,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0,maxColumnAutoWidth:300},columnConfig:t,rows:n})}},i={name:"maxAutoWidth не ограничивает ручной ресайз",...d({previewSource:"shown"}),render:()=>{const[n]=e.useState(s),t=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 100)",maxAutoWidth:100},{key:"task",name:"Task (maxAutoWidth: 250, maxWidth: 500)",maxAutoWidth:250,maxWidth:500},{key:"priority",name:"Priority (maxAutoWidth: 200)",maxAutoWidth:200},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete (фикс 150px)",width:150}],[]);return r.jsx(h,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:t,rows:n})}};var c,l,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(l=o.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var y,p,W;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(p=a.parameters)==null?void 0:p.docs)==null?void 0:W.source}}};var C,k,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,g,S;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(g=m.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,b,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const D=["MinMaxWidth","MaxAutoWidthBasic","MaxAutoWidthVsMaxWidth","MaxAutoWidthGlobal","ManualResizeBypassesMaxAutoWidth"],P=Object.freeze(Object.defineProperty({__proto__:null,ManualResizeBypassesMaxAutoWidth:i,MaxAutoWidthBasic:a,MaxAutoWidthGlobal:m,MaxAutoWidthVsMaxWidth:u,MinMaxWidth:o,__namedExportsOrder:D,default:M},Symbol.toStringTag,{value:"Module"}));export{P as C};
