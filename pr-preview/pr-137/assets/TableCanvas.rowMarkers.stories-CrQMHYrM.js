import{r as o,j as t}from"./react-CAOzMBF_.js";import{a as p,c as y}from"./tableData-DVJFoYoT.js";import J from"./DocStoryTemplate-Cf946dgV.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{T as s}from"./TableCanvas-DlX-Wh2b.js";const Q={title:"Локальные компоненты/TableCanvas/RowMarkers",tags:["!autodocs"],parameters:{docs:{page:J}}},i={getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id};function X(){return o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority"},{key:"complete",name:"% Complete"}],[])}function l(){return o.useMemo(()=>[{key:"block",name:"Блок / Трайб / Продукт",subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},isColumnWithArrow:!0}},{key:"blockActivity",name:"Активность блока"}],[])}const a=`
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
`,m={name:"Простая нумерация",...u({preCode:a}),render:()=>{const[e]=o.useState(y),n=X();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1}},columnConfig:n,rows:e})}},b={name:"Стартовый индекс 100",...u({preCode:a}),render:()=>{const[e]=o.useState(y),n=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Task"},{key:"priority",name:"Priority"}],[]);return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:100,width:60}},columnConfig:n,rows:e})}},d={name:"С subRows (root-only по умолчанию)",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>p()),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1},subRows:i},columnConfig:n,rows:e})}},w={name:"getRowMarker: корневые — номер, subRows — прочерк",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>p()),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({isSubRow:r,flatIndex:c})=>r?"—":c+1},subRows:i},columnConfig:n,rows:e})}},C={name:"Стабильная нумерация (учёт скрытых строк)",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>p()),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({flatIndex:r})=>r+1},subRows:i},columnConfig:n,rows:e})}},g={name:"getRowMarker: нестабильная нумерация (rowIndex)",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>p()),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,getRowMarker:({rowIndex:r})=>r+1},subRows:i},columnConfig:n,rows:e})}},k={name:"Нумерация + чекбоксы",...u({preCode:a}),render:()=>{const[e]=o.useState(y),n=X(),r=o.useState(()=>new Set);return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1},selecting:{state:r,rowKeyGetter:c=>c.id}},columnConfig:n,rows:e})}},Y=[{id:"b1",block:"Реклама",blockActivity:"В стоп-листе",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"t1",block:"",blockActivity:"",tribe:"Digital",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p1",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Портал планирования",q1:10,q2:20,q3:30,q4:40},{id:"p2",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Баннерная система",q1:5,q2:15,q3:25,q4:35}]},{id:"t2",block:"",blockActivity:"",tribe:"Офлайн",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p3",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Листовки",q1:1,q2:2,q3:3,q4:4}]}]},{id:"b2",block:"Технологии",blockActivity:"Активный",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"t3",block:"",blockActivity:"",tribe:"Backend",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p4",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"API Gateway",q1:100,q2:200,q3:300,q4:400},{id:"p5",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"База данных",q1:50,q2:60,q3:70,q4:80}]},{id:"t4",block:"",blockActivity:"",tribe:"Frontend",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0,subRows:[{id:"p6",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"React UI",q1:11,q2:22,q3:33,q4:44},{id:"p7",block:"",blockActivity:"",tribe:"",tribeZone:"",product:"Vue Dashboard",q1:12,q2:23,q3:34,q4:45}]}]},{id:"b3",block:"Маркетинг",blockActivity:"Планирование",tribe:"",tribeZone:"",product:"",q1:0,q2:0,q3:0,q4:0}],R={name:"Двухуровневая нумерация (1, 1.1, 1.2, 2)",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>p()),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,size:"m",getRowMarker:({siblingPath:r})=>r.map(c=>c+1).join(".")},subRows:i},columnConfig:n,rows:e})}},S={name:"Иерархическая нумерация (богатые данные)",...u({preCode:a}),render:()=>{const[e]=o.useState(()=>Y),n=l();return t.jsx(s,{tableConfig:{containerStyle:{height:"60vh"},rowMarkers:{startIndex:1,size:"m",getRowMarker:({siblingPath:r})=>r.map(c=>c+1).join(".")},subRows:i},columnConfig:n,rows:e})}};var f,h,q;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(q=(h=m.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var v,I,T;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(I=b.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var x,M,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var E,_,A;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(_=w.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var F,O,B;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(O=C.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var W,j,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(j=g.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var Z,N,U;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(U=(N=k.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var P,z,H;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(z=R.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var K,L,V;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(L=S.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const $=["SimpleRowMarkers","CustomStartIndex","WithSubRows","CustomGetRowMarkerRootDash","StableIndexWithCollapsed","UnstableFlatIndex","WithCheckboxes","TwoLevelNumbering","HierarchicalNumberingRich"],ue=Object.freeze(Object.defineProperty({__proto__:null,CustomGetRowMarkerRootDash:w,CustomStartIndex:b,HierarchicalNumberingRich:S,SimpleRowMarkers:m,StableIndexWithCollapsed:C,TwoLevelNumbering:R,UnstableFlatIndex:g,WithCheckboxes:k,WithSubRows:d,__namedExportsOrder:$,default:Q},Symbol.toStringTag,{value:"Module"}));export{ue as T};
