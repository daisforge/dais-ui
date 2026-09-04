import{r as o,d as e}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import N from"./DocStoryTemplate-Dt6KH5ne.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{C as i,T as v}from"./TableCanvas-DGNToxcW.js";import{H as w,p as C,o as b}from"./@salutejs/sdds-finai-BaaqQyG7.js";const S={title:"Локальные компоненты/TableCanvas/Cell Preview",parameters:{docs:{page:N}},tags:["!autodocs"]},t={name:"renderCellPreview",...c({previewSource:"shown"}),render:()=>{const[s]=o.useState(()=>m(0,15)),l=o.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"priority",name:"Приоритет",width:200,renderCell:({row:r,theme:n})=>e.jsxDEV(i.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:e.jsxDEV(i.Badge,{text:r.priority},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:55,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:48,columnNumber:13},void 0),renderCellPreview:({row:r,cellWidth:n,theme:a})=>e.jsxDEV("div",{style:{padding:a.cellHorizontalPadding,minWidth:Math.max(n,250),display:"flex",flexDirection:"column",gap:8},children:[e.jsxDEV(w,{children:"Приоритет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:68,columnNumber:15},void 0),e.jsxDEV(C,{children:r.priority},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:69,columnNumber:15},void 0),e.jsxDEV(b,{style:{opacity:.6},children:["Задача: ",r.task]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:70,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:59,columnNumber:13},void 0)},{key:"developer",name:"Разработчик",width:200,renderCell:({row:r,theme:n})=>e.jsxDEV(i.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:e.jsxDEV(i.Text,{children:r.developer},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:79,columnNumber:13},void 0),renderCellPreview:({row:r,cellWidth:n,theme:a})=>e.jsxDEV("div",{style:{padding:a.cellHorizontalPadding,minWidth:Math.max(n,200),display:"flex",flexDirection:"column",gap:4},children:[e.jsxDEV(w,{children:"Разработчик"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:99,columnNumber:15},void 0),e.jsxDEV(C,{children:r.developer},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:100,columnNumber:15},void 0),e.jsxDEV(b,{style:{marginTop:4,opacity:.6},children:["Задача: ",r.task]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:101,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:90,columnNumber:13},void 0)},{key:"task",name:"Задача (без preview)",width:220},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsxDEV(v,{tableConfig:{containerStyle:{height:"500px"}},columnConfig:l,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:123,columnNumber:7},void 0)}},u={name:"cellEditorAsPreview",...c({previewSource:"shown"}),render:()=>{const[s,l]=o.useState(()=>m(0,15)),r=o.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"priority",name:"Приоритет (cellEditorAsPreview)",width:250,renderCell:({row:n,theme:a})=>e.jsxDEV(i.Container,{padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},alignItems:"center",children:e.jsxDEV(i.Badge,{text:n.priority},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:161,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:154,columnNumber:13},void 0),editingCell:{editable:!1,component:"inputString"},renderCellPreview:"cellEditorAsPreview"},{key:"task",name:"Задача",width:220},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsxDEV(v,{tableConfig:{editing:{onRowsChange:l,rowKeyGetter:n=>n.id,defaultEnabled:!0},containerStyle:{height:"500px"}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:186,columnNumber:7},void 0)}},d={name:"renderCellPreview: 'none'",...c({previewSource:"shown"}),render:()=>{const[s]=o.useState(()=>m(0,15)),l=o.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Задача (preview: 'none')",width:250,renderCellPreview:"none"},{key:"developer",name:"Разработчик (стандартный preview)",width:250},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsxDEV(v,{tableConfig:{containerStyle:{height:"500px"}},columnConfig:l,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellPreview/TableCanvas.cellPreview.stories.tsx",lineNumber:239,columnNumber:7},void 0)}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'renderCellPreview',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(() => createRows(0, 15));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'priority',
      name: 'Приоритет',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Badge text={row.priority} />
            </Canvas.Container>,
      renderCellPreview: ({
        row,
        cellWidth,
        theme
      }) => <div style={{
        padding: theme.cellHorizontalPadding,
        minWidth: Math.max(cellWidth, 250),
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
              <H5>Приоритет</H5>
              <BodyS>{row.priority}</BodyS>
              <BodyXS style={{
          opacity: 0.6
        }}>Задача: {row.task}</BodyXS>
            </div>
    }, {
      key: 'developer',
      name: 'Разработчик',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Text>{row.developer}</Canvas.Text>
            </Canvas.Container>,
      renderCellPreview: ({
        row,
        cellWidth,
        theme
      }) => <div style={{
        padding: theme.cellHorizontalPadding,
        minWidth: Math.max(cellWidth, 200),
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
              <H5>Разработчик</H5>
              <BodyS>{row.developer}</BodyS>
              <BodyXS style={{
          marginTop: 4,
          opacity: 0.6
        }}>
                Задача: {row.task}
              </BodyXS>
            </div>
    }, {
      key: 'task',
      name: 'Задача (без preview)',
      width: 220
    }, {
      key: 'complete',
      name: 'Прогресс',
      contentFormat: 'number',
      width: 120
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '500px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,k;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'cellEditorAsPreview',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState<Row[]>(() => createRows(0, 15));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'priority',
      name: 'Приоритет (cellEditorAsPreview)',
      width: 250,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} alignItems="center">
              <Canvas.Badge text={row.priority} />
            </Canvas.Container>,
      editingCell: {
        editable: false,
        component: 'inputString'
      },
      renderCellPreview: 'cellEditorAsPreview'
    }, {
      key: 'task',
      name: 'Задача',
      width: 220
    }, {
      key: 'complete',
      name: 'Прогресс',
      contentFormat: 'number',
      width: 120
    }], []);
    return <TableCanvas tableConfig={{
      editing: {
        onRowsChange: setRows,
        rowKeyGetter: row => row.id,
        defaultEnabled: true
      },
      containerStyle: {
        height: '500px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(k=(y=u.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var P,x,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "renderCellPreview: 'none'",
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(() => createRows(0, 15));
    const columnConfig = useMemo((): ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'task',
      name: "Задача (preview: 'none')",
      width: 250,
      renderCellPreview: 'none'
    }, {
      key: 'developer',
      name: 'Разработчик (стандартный preview)',
      width: 250
    }, {
      key: 'complete',
      name: 'Прогресс',
      contentFormat: 'number',
      width: 120
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '500px'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(T=(x=d.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const E=["RenderCellPreview","CellEditorAsPreview","DisablePreview"],B=Object.freeze(Object.defineProperty({__proto__:null,CellEditorAsPreview:u,DisablePreview:d,RenderCellPreview:t,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{B as C};
