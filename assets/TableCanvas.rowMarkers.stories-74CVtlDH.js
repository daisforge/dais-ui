import{r as n,d as s}from"./react-D2T61mpp.js";import{a as f,c as S}from"./tableData-UCfjiBCh.js";import J from"./DocStoryTemplate-DwKiq8z4.js";import{s as t}from"./storySourceDoc-tVKyHcEN.js";import{T as a}from"./TableCanvas-CqlmicUJ.js";const Q={title:"Локальные компоненты/TableCanvas/RowMarkers",tags:["!autodocs"],parameters:{docs:{page:J}}},c={getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id};function X(){return n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority"},{key:"complete",name:"% Complete"}],[])}function l(){return n.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0}},{key:"blockActivity",name:"Активность блока"}],[])}const u=`
const TREE_SUB_ROWS_CONFIG = {
  getSubRows: (row: TreeRow) => row?.subRows,
  rowKeyGetter: (row: TreeRow) => row.id,
};

function useFlatColumns(): readonly ColumnConfig<Row>[] {
  return useMemo(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Task' },
      { key: 'priority', name: 'Priority' },
      { key: 'complete', name: '% Complete' },
    ],
    []
  );
}

function useTreeColumns(): readonly ColumnConfig<TreeRow>[] {
  return useMemo(
    () => [
      {
        key: 'block',
        name: 'Блок / Трайб / Продукт',
        subRow: {
          keyOfColumnInSubRow: (lvl) => {
            switch (lvl) {
              case 0: return 'block';
              case 1: return 'tribe';
              case 2: return 'product';
              default: return 'block';
            }
          },
          isColumnWithArrow: true,
        },
      },
      { key: 'blockActivity', name: 'Активность блока' },
    ],
    []
  );
}
`,m={name:"Простая нумерация",...t({preCode:u}),render:()=>{const[e]=n.useState(S),r=X();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:124,columnNumber:7},void 0)}},b={name:"Стартовый индекс 100",...t({preCode:u}),render:()=>{const[e]=n.useState(S),r=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:100,width:60}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:153,columnNumber:7},void 0)}},d={name:"С subRows (root-only по умолчанию)",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>f()),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:176,columnNumber:7},void 0)}},w={name:"getRowMarker: корневые — номер, subRows — прочерк",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>f()),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({isSubRow:o,flatIndex:i})=>o?"—":i+1},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:199,columnNumber:7},void 0)}},C={name:"Стабильная нумерация (учёт скрытых строк)",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>f()),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({flatIndex:o})=>o+1},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:228,columnNumber:7},void 0)}},k={name:"getRowMarker: нестабильная нумерация (rowIndex)",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>f()),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({rowIndex:o})=>o+1},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:252,columnNumber:7},void 0)}},g={name:"Нумерация + чекбоксы",...t({preCode:u}),render:()=>{const[e]=n.useState(S),r=X(),o=n.useState(()=>new Set);return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1},selecting:{state:o,rowKeyGetter:i=>i.id}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:279,columnNumber:7},void 0)}},Y=[{id:"b1",block:"Реклама",blockActivity:"В стоп-листе",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"t1",block:"",blockActivity:"",tribe:"Digital",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p1",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Портал планирования",q1:10,q2:20,q3:30,q4:40},{id:"p2",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Баннерная система",q1:5,q2:15,q3:25,q4:35}]},{id:"t2",block:"",blockActivity:"",tribe:"Офлайн",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p3",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Листовки",q1:1,q2:2,q3:3,q4:4}]}]},{id:"b2",block:"Технологии",blockActivity:"Активный",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"t3",block:"",blockActivity:"",tribe:"Backend",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p4",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"API Gateway",q1:100,q2:200,q3:300,q4:400},{id:"p5",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"База данных",q1:50,q2:60,q3:70,q4:80}]},{id:"t4",block:"",blockActivity:"",tribe:"Frontend",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p6",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"React UI",q1:11,q2:22,q3:33,q4:44},{id:"p7",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Vue Dashboard",q1:12,q2:23,q3:34,q4:45}]}]},{id:"b3",block:"Маркетинг",blockActivity:"Планирование",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0}],R={name:"Двухуровневая нумерация (1, 1.1, 1.2, 2)",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>f()),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,size:"m",getRowMarker:({siblingPath:o})=>o.map(i=>i+1).join(".")},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:488,columnNumber:7},void 0)}},p={name:"Иерархическая нумерация (богатые данные)",...t({preCode:u}),render:()=>{const[e]=n.useState(()=>Y),r=l();return s.jsxDEV(a,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,size:"m",getRowMarker:({siblingPath:o})=>o.map(i=>i+1).join(".")},subRows:c},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowMarkers/TableCanvas.rowMarkers.stories.tsx",lineNumber:514,columnNumber:7},void 0)}};var y,h,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Простая нумерация',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useFlatColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(v=(h=m.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,M,x;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Стартовый индекс 100',
  ...storySourceDoc({
    preCode
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
      name: 'Priority'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 100,
        width: 60
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(x=(M=b.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var q,I,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'С subRows (root-only по умолчанию)',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,N,_;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'getRowMarker: корневые — номер, subRows — прочерк',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1,
        getRowMarker: ({
          isSubRow,
          flatIndex
        }) => {
          if (isSubRow) {
            return '—';
          }
          return flatIndex + 1;
        }
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(_=(N=w.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var A,F,O;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Стабильная нумерация (учёт скрытых строк)',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1,
        getRowMarker: ({
          flatIndex
        }) => flatIndex + 1
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(O=(F=C.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var B,W,j;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'getRowMarker: нестабильная нумерация (rowIndex)',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1,
        getRowMarker: ({
          rowIndex
        }) => rowIndex + 1
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(j=(W=k.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,Z,U;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Нумерация + чекбоксы',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useFlatColumns();
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(U=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var P,V,z;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Двухуровневая нумерация (1, 1.1, 1.2, 2)',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1,
        size: 'm',
        getRowMarker: ({
          siblingPath
        }) => siblingPath.map(i => i + 1).join('.')
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(z=(V=R.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,K,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Иерархическая нумерация (богатые данные)',
  ...storySourceDoc({
    preCode
  }),
  render: () => {
    const [rows] = useState<TreeRow[]>(() => RICH_TREE_ROWS);
    const columnConfig = useTreeColumns();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      rowMarkers: {
        startIndex: 1,
        size: 'm',
        getRowMarker: ({
          siblingPath
        }) => siblingPath.map(i => i + 1).join('.')
      },
      subRows: TREE_SUB_ROWS_CONFIG
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const $=["SimpleRowMarkers","CustomStartIndex","WithSubRows","CustomGetRowMarkerRootDash","StableIndexWithCollapsed","UnstableFlatIndex","WithCheckboxes","TwoLevelNumbering","HierarchicalNumberingRich"],te=Object.freeze(Object.defineProperty({__proto__:null,CustomGetRowMarkerRootDash:w,CustomStartIndex:b,HierarchicalNumberingRich:p,SimpleRowMarkers:m,StableIndexWithCollapsed:C,TwoLevelNumbering:R,UnstableFlatIndex:k,WithCheckboxes:g,WithSubRows:d,__namedExportsOrder:$,default:Q},Symbol.toStringTag,{value:"Module"}));export{te as T};
