import{r as e,d as u}from"./react-D2T61mpp.js";import{c as a}from"./tableData-DVJFoYoT.js";import P from"./DocStoryTemplate-C4a7uvc5.js";import{s as i}from"./storySourceDoc-tVKyHcEN.js";import{T as r}from"./TableCanvas-D5Pb-Cj8.js";const j={title:"Локальные компоненты/TableCanvas/Column Resize",tags:["!autodocs"],parameters:{docs:{page:P}}},t={name:"Линия наведения и изменения ширины",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useState(new Set),B=e.useMemo(()=>[{key:"id",name:"ID",width:90,frozen:!0},{key:"details",name:"Задача",children:[{key:"task",name:"Название",width:250,minWidth:150,maxWidth:400},{key:"priority",name:"Приоритет (без ресайза)",width:220,resizable:!1}]},{key:"loremIpsum",name:"Описание",width:300},{key:"complete",name:"Готовность",width:150}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:400,width:640,maxWidth:"100%"},selecting:{state:o,rowKeyGetter:F=>F.id}},columnConfig:B,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:61,columnNumber:7},void 0)}},s={...t,name:"Линия — тёмная тема",parameters:{forcedTheme:"FinAI:dark"}},m={name:"minWidth / maxWidth",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (min 150, max 400)",width:250,minWidth:150,maxWidth:400},{key:"priority",name:"Priority (min 120, max 300)",width:200,minWidth:120,maxWidth:300},{key:"loremIpsum",name:"Issue Type (max 200)",width:150,maxWidth:200},{key:"complete",name:"% Complete",width:150}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:"60vh"}},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:124,columnNumber:7},void 0)}},d={name:"maxAutoWidth — базовый",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 120)",maxAutoWidth:120},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (без ограничений)"},{key:"loremIpsum",name:"Issue Type (maxAutoWidth: 200)",maxAutoWidth:200},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:174,columnNumber:7},void 0)}},l={name:"maxAutoWidth + maxWidth (комбинация)",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 150, maxWidth: 200)",maxAutoWidth:150,maxWidth:200},{key:"task",name:"Task (maxAutoWidth: 400)",maxAutoWidth:400},{key:"priority",name:"Priority (maxAutoWidth: 180, maxWidth: 180)",maxAutoWidth:180,maxWidth:180},{key:"loremIpsum",name:"Issue (без ограничений)"},{key:"complete",name:"% Complete (фикс 130px)",width:130}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:227,columnNumber:7},void 0)}},c={name:"maxColumnAutoWidth (глобальный)",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority (maxAutoWidth: 250 — перебивает глобальный)",maxAutoWidth:250},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0,maxColumnAutoWidth:300},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:275,columnNumber:7},void 0)}},h={name:"maxAutoWidth не ограничивает ручной ресайз",...i({previewSource:"shown"}),render:()=>{const[n]=e.useState(a),o=e.useMemo(()=>[{key:"id",name:"ID (maxAutoWidth: 100)",maxAutoWidth:100},{key:"task",name:"Task (maxAutoWidth: 250, maxWidth: 500)",maxAutoWidth:250,maxWidth:500},{key:"priority",name:"Priority (maxAutoWidth: 200)",maxAutoWidth:200},{key:"loremIpsum",name:"Issue Type"},{key:"complete",name:"% Complete (фикс 150px)",width:150}],[]);return u.jsxDEV(r,{tableConfig:{containerStyle:{height:"60vh"},resizableColumn:!0},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnResize/TableCanvas.columnResize.stories.tsx",lineNumber:328,columnNumber:7},void 0)}};var y,p,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Линия наведения и изменения ширины',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingState = useState<ReadonlySet<number | string>>(new Set());
    const columns = useMemo<ColumnOrColumnGroupConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 90,
      frozen: true
    }, {
      key: 'details',
      name: 'Задача',
      children: [{
        key: 'task',
        name: 'Название',
        width: 250,
        minWidth: 150,
        maxWidth: 400
      }, {
        key: 'priority',
        name: 'Приоритет (без ресайза)',
        width: 220,
        resizable: false
      }]
    }, {
      key: 'loremIpsum',
      name: 'Описание',
      width: 300
    }, {
      key: 'complete',
      name: 'Готовность',
      width: 150
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 400,
        width: 640,
        maxWidth: '100%'
      },
      selecting: {
        state: selectingState,
        rowKeyGetter: row => row.id
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var C,k,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ResizeIndicator,
  name: 'Линия — тёмная тема',
  parameters: {
    forcedTheme: 'FinAI:dark'
  }
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var W,g,b;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(b=(g=m.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,A,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var v,D,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,R,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var M,E,N;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const V=["ResizeIndicator","ResizeIndicatorDark","MinMaxWidth","MaxAutoWidthBasic","MaxAutoWidthVsMaxWidth","MaxAutoWidthGlobal","ManualResizeBypassesMaxAutoWidth"],q=Object.freeze(Object.defineProperty({__proto__:null,ManualResizeBypassesMaxAutoWidth:h,MaxAutoWidthBasic:d,MaxAutoWidthGlobal:c,MaxAutoWidthVsMaxWidth:l,MinMaxWidth:m,ResizeIndicator:t,ResizeIndicatorDark:s,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{q as C};
