import{r as i,j as e}from"./react-CAOzMBF_.js";import{c}from"./tableData-DVJFoYoT.js";import E from"./DocStoryTemplate-Cf946dgV.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{C as o,T as w}from"./TableCanvas-DlX-Wh2b.js";import{H as p,m as g,l as h}from"./@salutejs/sdds-finai-CKhMjg07.js";const H={title:"Локальные компоненты/TableCanvas/Cell Preview",parameters:{docs:{page:E}},tags:["!autodocs"]},u={name:"renderCellPreview",...m({previewSource:"shown"}),render:()=>{const[a]=i.useState(()=>c(0,15)),l=i.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"priority",name:"Приоритет",width:200,renderCell:({row:r,theme:n})=>e.jsx(o.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:e.jsx(o.Badge,{text:r.priority})}),renderCellPreview:({row:r,cellWidth:n,theme:t})=>e.jsxs("div",{style:{padding:t.cellHorizontalPadding,minWidth:Math.max(n,250),display:"flex",flexDirection:"column",gap:8},children:[e.jsx(p,{children:"Приоритет"}),e.jsx(g,{children:r.priority}),e.jsxs(h,{style:{opacity:.6},children:["Задача: ",r.task]})]})},{key:"developer",name:"Разработчик",width:200,renderCell:({row:r,theme:n})=>e.jsx(o.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:e.jsx(o.Text,{children:r.developer})}),renderCellPreview:({row:r,cellWidth:n,theme:t})=>e.jsxs("div",{style:{padding:t.cellHorizontalPadding,minWidth:Math.max(n,200),display:"flex",flexDirection:"column",gap:4},children:[e.jsx(p,{children:"Разработчик"}),e.jsx(g,{children:r.developer}),e.jsxs(h,{style:{marginTop:4,opacity:.6},children:["Задача: ",r.task]})]})},{key:"task",name:"Задача (без preview)",width:220},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsx(w,{tableConfig:{containerStyle:{height:"500px"}},columnConfig:l,rows:a})}},d={name:"cellEditorAsPreview",...m({previewSource:"shown"}),render:()=>{const[a,l]=i.useState(()=>c(0,15)),r=i.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"priority",name:"Приоритет (cellEditorAsPreview)",width:250,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},alignItems:"center",children:e.jsx(o.Badge,{text:n.priority})}),editingCell:{editable:!1,component:"inputString"},renderCellPreview:"cellEditorAsPreview"},{key:"task",name:"Задача",width:220},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsx(w,{tableConfig:{editing:{onRowsChange:l,rowKeyGetter:n=>n.id,defaultEnabled:!0},containerStyle:{height:"500px"}},columnConfig:r,rows:a})}},s={name:"renderCellPreview: 'none'",...m({previewSource:"shown"}),render:()=>{const[a]=i.useState(()=>c(0,15)),l=i.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Задача (preview: 'none')",width:250,renderCellPreview:"none"},{key:"developer",name:"Разработчик (стандартный preview)",width:250},{key:"complete",name:"Прогресс",contentFormat:"number",width:120}],[]);return e.jsx(w,{tableConfig:{containerStyle:{height:"500px"}},columnConfig:l,rows:a})}};var C,y,v;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,x,P;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,k,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const j=["RenderCellPreview","CellEditorAsPreview","DisablePreview"],M=Object.freeze(Object.defineProperty({__proto__:null,CellEditorAsPreview:d,DisablePreview:s,RenderCellPreview:u,__namedExportsOrder:j,default:H},Symbol.toStringTag,{value:"Module"}));export{M as C};
