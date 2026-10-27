import{r as o,j as r}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import E4 from"./DocStoryTemplate-Cf946dgV.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C as D}from"./TableCanvas-DlX-Wh2b.js";const B4={title:"Локальные компоненты/TableCanvas/Borders",tags:["!autodocs"],parameters:{docs:{page:E4}}},l="import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';",y=`const COLS: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 120 },
  { key: 'task', name: 'Title', width: 160 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'complete', name: '% Complete', width: 140 },
];`,m4="const BOTTOM_ON = { bottom: true } as const;",s=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],w4=["Critical","High","Medium","Low"],g4=["Bug","Improvement","Epic","Story"];function f4(e){const n=new Array(e);for(let u=0;u<e;u+=1)n[u]={id:u+1,task:`Task ${u+1}`,priority:w4[u%4],issueType:g4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return n}function p4(e){if(e<=s.length)return[...s];const n=[];for(let u=s.length;u<e;u+=1)n.push({key:`m${u}`,name:`M${u-s.length+1}`,width:90,renderCell:({row:t})=>r.jsx(D.Text,{children:String(Number(t.id)*(u+1)%1e3)})});return[...s,...n]}const S={bottom:!0},D4={top:!0,right:!0,bottom:!0,left:!0},A={left:!0,right:!0},y4={left:!0,right:!0,bottom:!0},h4=`${l}

${y}

<TableCanvas
  tableConfig={{ borders: { vertical: false } }}
  columnConfig={COLS}
  rows={rows}
/>`,m={...a({previewSource:"shown",code:h4}),render:()=>{const[e]=o.useState(p);return r.jsx(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{vertical:!1}},columnConfig:s,rows:e})}},S4=`import { useMemo } from 'react';
${l}

${y}

const columnsWithoutRightBorder = useMemo(
  () => new Set(['priority', 'issueType']),
  [],
);

<TableCanvas
  tableConfig={{
    borders: {
      getVerticalBorder: ({ columnKey }) =>
        columnsWithoutRightBorder.has(columnKey) ? false : undefined,
    },
  }}
  columnConfig={COLS}
  rows={rows}
/>`,d={...a({previewSource:"shown",code:S4}),render:()=>{const[e]=o.useState(p),n=o.useMemo(()=>new Set(["priority","issueType"]),[]);return r.jsx(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{getVerticalBorder:({columnKey:u})=>n.has(u)?!1:void 0}},columnConfig:s,rows:e})}},A4=`${l}

${y}

<TableCanvas
  tableConfig={{ borders: { horizontal: false } }}
  columnConfig={COLS}
  rows={rows}
/>`,C={...a({previewSource:"shown",code:A4}),render:()=>{const[e]=o.useState(p);return r.jsx(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1}},columnConfig:s,rows:e})}},b4=`${l}

${y}

${m4}

<TableCanvas
  tableConfig={{
    borders: {
      horizontal: false,
      getCellBorder: ({ columnKey, row }) =>
        columnKey === 'complete' && row.complete >= 50 ? BOTTOM_ON : undefined,
    },
  }}
  columnConfig={COLS}
  rows={rows}
/>`,E={...a({previewSource:"shown",code:b4}),render:()=>{const[e]=o.useState(p);return r.jsx(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1,getCellBorder:({columnKey:n,row:u})=>n==="complete"&&u.complete>=50?S:void 0}},columnConfig:s,rows:e})}},B={...a({previewSource:"shown",code:`${l}

const COLS: ColumnConfig<Row>[] = [
  {
    key: 'task',
    name: 'Title',
    width: 220,
    subRow: { keyOfColumnInSubRow: 'task', isColumnWithArrow: true },
  },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'complete', name: '% Complete', width: 140 },
];

<TableCanvas
  tableConfig={{
    subRows: {
      getSubRows: (row) => row.subRows,
      rowKeyGetter: (row) => row.id,
    },
    borders: {
      vertical: false,
      getHorizontalBorder: ({ treeLvl }) => (treeLvl > 0 ? false : undefined),
    },
  }}
  columnConfig={COLS}
  rows={rows}
/>`}),render:()=>{const[e]=o.useState(p),n=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return r.jsx(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},borders:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:n,rows:e})}},w={...a({previewSource:"shown",code:`${l}

${m4}

<TableCanvas
  tableConfig={{
    borders: {
      horizontal: false,
      getCellBorder: ({ columnKey, row, rowIndex }) => {
        if (rowIndex % 10 === 9) return BOTTOM_ON;
        if (columnKey !== 'complete') return undefined;
        return row.complete >= 50 ? BOTTOM_ON : undefined;
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},colsCount:{name:"Колонок",control:"select",options:[5,100,500,1e3]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,colsCount:100,perCell:!0},render:({rowsCount:e,colsCount:n,perCell:u})=>{const t=o.useMemo(()=>f4(e),[e]),h=o.useMemo(()=>p4(n),[n]);return r.jsx(i,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},borders:u?{horizontal:!1,getCellBorder:({columnKey:c,row:d4,rowIndex:C4})=>{if(C4%10===9)return S;if(c==="complete")return d4.complete>=50?S:void 0}}:{vertical:!1}},columnConfig:h,rows:t})}};function T4(){const e=["Север","Юг","Запад"],n=["Продажи","Развитие"],u=[];let t=1;return e.forEach(h=>{for(let c=0;c<4;c+=1)u.push({id:t,region:h,team:`Команда ${c+1}`,dept:n[Math.floor(c/2)%2],metric:t*29%101,status:t%2?"OK":"Warn"}),t+=1}),u}const O4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],g={...a({previewSource:"shown",code:`${l}

const MERGE_COLS: ColumnConfig<MergeRow>[] = [
  { key: 'region', name: 'Регион', width: 200 },
  { key: 'team', name: 'Команда', width: 150 },
  { key: 'dept', name: 'Отдел', width: 190 },
  { key: 'metric', name: 'Метрика', width: 120 },
  { key: 'status', name: 'Статус', width: 120 },
];

const FRAME_ON = { top: true, right: true, bottom: true, left: true } as const;
const SIDES_ON = { left: true, right: true } as const;
const SIDES_WITH_BOTTOM = { left: true, right: true, bottom: true } as const;

<TableCanvas
  tableConfig={{
    mergeCells: { mergeByCellValues: ['region', 'dept'] },
    hoverEffects: { row: true },
    cellsSelection: { mode: 'range-cell' },
    borders: {
      vertical: false,
      horizontal: false,
      getCellBorder: ({ columnKey, row }) => {
        if (columnKey === 'region' || columnKey === 'dept') return FRAME_ON;
        if (columnKey === 'metric')
          return row.metric >= 50 ? SIDES_WITH_BOTTOM : SIDES_ON;
        if (columnKey === 'status') return SIDES_ON;
        return undefined;
      },
    },
  }}
  columnConfig={MERGE_COLS}
  rows={rows}
/>`}),render:()=>{const[e]=o.useState(T4);return r.jsx(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},borders:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:n,row:u})=>{if(n==="region"||n==="dept")return D4;if(n==="metric")return u.metric>=50?y4:A;if(n==="status")return A}}},columnConfig:O4,rows:e})}},v4=[{key:"id",name:"ID",width:120,renderSummaryCell:({theme:e})=>r.jsx(D.Container,{padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},alignItems:"center",children:r.jsx(D.Text,{font:e.baseFontStyle,children:"Итого"})})},{key:"task",name:"Title",width:200},{key:"priority",name:"Priority",width:140},{key:"complete",name:"% Complete",width:160,renderSummaryCell:({row:e,theme:n})=>r.jsx(D.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:r.jsx(D.Text,{font:n.baseFontStyle,children:`Среднее: ${e}%`})})}],f={...a({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const SUMMARY_COLS: ColumnConfig<Row, number>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 120,
    renderSummaryCell: ({ theme }) => (
      <Canvas.Text font={theme.baseFontStyle}>Итого</Canvas.Text>
    ),
  },
  { key: 'task', name: 'Title', width: 200 },
  { key: 'priority', name: 'Priority', width: 140 },
  {
    key: 'complete',
    name: '% Complete',
    width: 160,
    renderSummaryCell: ({ row: avg, theme }) => (
      <Canvas.Text font={theme.baseFontStyle}>{\`Среднее: \${avg}%\`}</Canvas.Text>
    ),
  },
];

<TableCanvas
  tableConfig={{
    summaryRows: { showDefault: true, showInControl: false },
    borders: {
      getVerticalBorder: ({ columnKey }) =>
        columnKey === 'priority' ? false : undefined,
    },
  }}
  columnConfig={SUMMARY_COLS}
  rows={rows}
  bottomSummaryRows={[avgComplete]}
/>`}),render:()=>{const[e]=o.useState(p),n=o.useMemo(()=>Math.round(e.reduce((u,t)=>u+t.complete,0)/e.length),[e]);return r.jsx(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},summaryRows:{showDefault:!0,showInControl:!1},borders:{getVerticalBorder:({columnKey:u})=>u==="priority"?!1:void 0}},columnConfig:v4,rows:e,bottomSummaryRows:[n]})}};var b,T,O,v,k;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: noVerticalLinesCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 360
      },
      rowMarkers: {
        startIndex: 1
      },
      borders: {
        vertical: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var F,M,R,I,x;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: hideColumnBorderCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    // Набор считаем один раз (useMemo), а не на каждый вызов колбэка.
    const columnsWithoutRightBorder = useMemo(() => new Set(['priority', 'issueType']), []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 360
      },
      rowMarkers: {
        startIndex: 1
      },
      borders: {
        getVerticalBorder: ({
          columnKey
        }) => columnsWithoutRightBorder.has(columnKey) ? false : undefined
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:`Точечно: у колонок Priority и Issue Type убран разделитель справа
(borders.getVerticalBorder), остальные линии на месте.

Best practice: набор колонок готовим заранее в Set и в колбэке делаем быстрый
has(). getVerticalBorder зовётся на каждую видимую колонку при перерисовке,
поэтому такая проверка остаётся дешёвой и не растёт с числом колонок.`,...(x=(I=d.parameters)==null?void 0:I.docs)==null?void 0:x.description}}};var _,L,K,N,z;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: noHorizontalLinesCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 360
      },
      rowMarkers: {
        startIndex: 1
      },
      borders: {
        horizontal: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(K=(L=C.parameters)==null?void 0:L.docs)==null?void 0:K.source},description:{story:"Выключены все горизонтальные линии тела.",...(z=(N=C.parameters)==null?void 0:N.docs)==null?void 0:z.description}}};var P,$,H,V,W;E.parameters={...E.parameters,docs:{...(P=E.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: perCellBordersCode
  }),
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 360
      },
      rowMarkers: {
        startIndex: 1
      },
      borders: {
        horizontal: false,
        getCellBorder: ({
          columnKey,
          row
        }) => columnKey === 'complete' && row.complete >= 50 ? BOTTOM_ON : undefined
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(H=($=E.parameters)==null?void 0:$.docs)==null?void 0:H.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(W=(V=E.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var j,G,U,Y,X;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${IMPORTS_CODE}

const COLS: ColumnConfig<Row>[] = [
  {
    key: 'task',
    name: 'Title',
    width: 220,
    subRow: { keyOfColumnInSubRow: 'task', isColumnWithArrow: true },
  },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'complete', name: '% Complete', width: 140 },
];

<TableCanvas
  tableConfig={{
    subRows: {
      getSubRows: (row) => row.subRows,
      rowKeyGetter: (row) => row.id,
    },
    borders: {
      vertical: false,
      getHorizontalBorder: ({ treeLvl }) => (treeLvl > 0 ? false : undefined),
    },
  }}
  columnConfig={COLS}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const cols: readonly ColumnConfig<Row>[] = [{
      key: 'task',
      name: 'Title',
      width: 220,
      subRow: {
        keyOfColumnInSubRow: 'task',
        isColumnWithArrow: true
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 140
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 140
    }, {
      key: 'complete',
      name: '% Complete',
      width: 140
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      subRows: {
        getSubRows: row => row.subRows,
        rowKeyGetter: row => row.id
      },
      borders: {
        vertical: false,
        getHorizontalBorder: ({
          treeLvl
        }) => treeLvl > 0 ? false : undefined
      }
    }} columnConfig={cols} rows={rows} />;
  }
}`,...(U=(G=B.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...(X=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:X.description}}};var q,J,Q,Z,u4;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${IMPORTS_CODE}

\${BOTTOM_ON_CODE}

<TableCanvas
  tableConfig={{
    borders: {
      horizontal: false,
      getCellBorder: ({ columnKey, row, rowIndex }) => {
        if (rowIndex % 10 === 9) return BOTTOM_ON;
        if (columnKey !== 'complete') return undefined;
        return row.complete >= 50 ? BOTTOM_ON : undefined;
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  // Нагрузочный стенд не показываем в агрегации Docs: 100k+ строк рендерились бы
  // прямо в доке. Стенд доступен отдельной стори.
  parameters: {
    docs: {
      disable: true
    }
  },
  argTypes: {
    rowsCount: {
      name: 'Строк',
      control: 'select',
      options: [100_000, 500_000, 1_000_000]
    },
    colsCount: {
      name: 'Колонок',
      control: 'select',
      options: [5, 100, 500, 1000]
    },
    perCell: {
      name: 'Рамки ячеек (getCellBorder)',
      control: 'boolean'
    }
  },
  args: {
    rowsCount: 100_000,
    colsCount: 100,
    perCell: true
  },
  render: ({
    rowsCount,
    colsCount,
    perCell
  }: {
    rowsCount: number;
    colsCount: number;
    perCell: boolean;
  }) => {
    const rows = useMemo(() => makeLeanRows(rowsCount), [rowsCount]);
    const columnConfig = useMemo(() => makeManyCols(colsCount), [colsCount]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 480
      },
      rowMarkers: {
        startIndex: 1
      },
      borders: perCell ? {
        horizontal: false,
        getCellBorder: ({
          columnKey,
          row,
          rowIndex
        }) => {
          if (rowIndex % 10 === 9) return BOTTOM_ON;
          if (columnKey !== 'complete') return undefined;
          return row.complete >= 50 ? BOTTOM_ON : undefined;
        }
      } : {
        vertical: false
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M), «Колонок» (5 / 100 / 500 / 1000) и «Рамки
ячеек» (включить разбивку линий по ячейкам через getCellBorder или оставить
сплошные линии). 1000 колонок x 1M строк скролл держит: рисуется только
видимая область.`,...(u4=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var e4,n4,r4,o4,t4;g.parameters={...g.parameters,docs:{...(e4=g.parameters)==null?void 0:e4.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${IMPORTS_CODE}

const MERGE_COLS: ColumnConfig<MergeRow>[] = [
  { key: 'region', name: 'Регион', width: 200 },
  { key: 'team', name: 'Команда', width: 150 },
  { key: 'dept', name: 'Отдел', width: 190 },
  { key: 'metric', name: 'Метрика', width: 120 },
  { key: 'status', name: 'Статус', width: 120 },
];

const FRAME_ON = { top: true, right: true, bottom: true, left: true } as const;
const SIDES_ON = { left: true, right: true } as const;
const SIDES_WITH_BOTTOM = { left: true, right: true, bottom: true } as const;

<TableCanvas
  tableConfig={{
    mergeCells: { mergeByCellValues: ['region', 'dept'] },
    hoverEffects: { row: true },
    cellsSelection: { mode: 'range-cell' },
    borders: {
      vertical: false,
      horizontal: false,
      getCellBorder: ({ columnKey, row }) => {
        if (columnKey === 'region' || columnKey === 'dept') return FRAME_ON;
        if (columnKey === 'metric')
          return row.metric >= 50 ? SIDES_WITH_BOTTOM : SIDES_ON;
        if (columnKey === 'status') return SIDES_ON;
        return undefined;
      },
    },
  }}
  columnConfig={MERGE_COLS}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows] = useState(makeMergeRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      mergeCells: {
        mergeByCellValues: ['region', 'dept']
      },
      hoverEffects: {
        row: true
      },
      cellsSelection: {
        mode: 'range-cell'
      },
      borders: {
        vertical: false,
        horizontal: false,
        getCellBorder: ({
          columnKey,
          row
        }) => {
          if (columnKey === 'region' || columnKey === 'dept') {
            return FRAME_ON;
          }
          if (columnKey === 'metric') {
            return row.metric >= 50 ? SIDES_WITH_BOTTOM : SIDES_ON;
          }
          if (columnKey === 'status') {
            return SIDES_ON;
          }
          return undefined;
        }
      }
    }} columnConfig={MERGE_COLS} rows={rows} />;
  }
}`,...(r4=(n4=g.parameters)==null?void 0:n4.docs)==null?void 0:r4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(t4=(o4=g.parameters)==null?void 0:o4.docs)==null?void 0:t4.description}}};var s4,a4,i4,l4,c4;f.parameters={...f.parameters,docs:{...(s4=f.parameters)==null?void 0:s4.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const SUMMARY_COLS: ColumnConfig<Row, number>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 120,
    renderSummaryCell: ({ theme }) => (
      <Canvas.Text font={theme.baseFontStyle}>Итого</Canvas.Text>
    ),
  },
  { key: 'task', name: 'Title', width: 200 },
  { key: 'priority', name: 'Priority', width: 140 },
  {
    key: 'complete',
    name: '% Complete',
    width: 160,
    renderSummaryCell: ({ row: avg, theme }) => (
      <Canvas.Text font={theme.baseFontStyle}>{\\\`Среднее: \\\${avg}%\\\`}</Canvas.Text>
    ),
  },
];

<TableCanvas
  tableConfig={{
    summaryRows: { showDefault: true, showInControl: false },
    borders: {
      getVerticalBorder: ({ columnKey }) =>
        columnKey === 'priority' ? false : undefined,
    },
  }}
  columnConfig={SUMMARY_COLS}
  rows={rows}
  bottomSummaryRows={[avgComplete]}
/>\`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const avgComplete = useMemo(() => Math.round(rows.reduce((sum, r) => sum + r.complete, 0) / rows.length), [rows]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      summaryRows: {
        showDefault: true,
        showInControl: false
      },
      borders: {
        getVerticalBorder: ({
          columnKey
        }) => columnKey === 'priority' ? false : undefined
      }
    }} columnConfig={SUMMARY_COLS} rows={rows} bottomSummaryRows={[avgComplete]} />;
  }
}`,...(i4=(a4=f.parameters)==null?void 0:a4.docs)==null?void 0:i4.source},description:{story:`Итоговые (summary) строки и вертикальные линии. Настройки вертикали действуют
и на итоговую строку: разделители колонок проходят через неё насквозь, а
getVerticalBorder убирает разделитель у выбранной колонки и в теле, и в итоге
(здесь скрыт разделитель справа от Priority).

Ограничение движка: точечные горизонтали (getHorizontalBorder) и рамки
отдельных ячеек (getCellBorder) в итоговых строках пока не поддержаны, поэтому
на их линии влияют только по-колоночная вертикаль и общие настройки.`,...(c4=(l4=f.parameters)==null?void 0:l4.docs)==null?void 0:c4.description}}};const k4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells","SummaryVerticalBorders"],_4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:d,MillionRows:w,NoHorizontalLines:C,NoVerticalLines:m,PerCellBorders:E,SubRowsWithoutInnerLines:B,SummaryVerticalBorders:f,WithMergedCells:g,__namedExportsOrder:k4,default:B4},Symbol.toStringTag,{value:"Module"}));export{_4 as B};
