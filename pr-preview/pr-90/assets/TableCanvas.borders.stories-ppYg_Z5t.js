import{r as o,d as r}from"./react-D2T61mpp.js";import{c as g}from"./tableData-DVJFoYoT.js";import E4 from"./DocStoryTemplate-DFXuHZSX.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C as p}from"./TableCanvas-CNTnXOQI.js";const B4={title:"Локальные компоненты/TableCanvas/Borders",tags:["!autodocs"],parameters:{docs:{page:E4}}},l="import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';",D=`const COLS: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 120 },
  { key: 'task', name: 'Title', width: 160 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'complete', name: '% Complete', width: 140 },
];`,d4="const BOTTOM_ON = { bottom: true } as const;",s=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],w4=["Critical","High","Medium","Low"],f4=["Bug","Improvement","Epic","Story"];function b4(e){const n=new Array(e);for(let u=0;u<e;u+=1)n[u]={id:u+1,task:`Task ${u+1}`,priority:w4[u%4],issueType:f4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return n}function g4(e){if(e<=s.length)return[...s];const n=[];for(let u=s.length;u<e;u+=1)n.push({key:`m${u}`,name:`M${u-s.length+1}`,width:90,renderCell:({row:t})=>r.jsxDEV(p.Text,{children:String(Number(t.id)*(u+1)%1e3)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:86,columnNumber:9},this)});return[...s,...n]}const h={bottom:!0},p4={top:!0,right:!0,bottom:!0,left:!0},S={left:!0,right:!0},D4={left:!0,right:!0,bottom:!0},y4=`${l}

${D}

<TableCanvas
  tableConfig={{ borders: { vertical: false } }}
  columnConfig={COLS}
  rows={rows}
/>`,d={...a({previewSource:"shown",code:y4}),render:()=>{const[e]=o.useState(g);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{vertical:!1}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:121,columnNumber:7},void 0)}},h4=`import { useMemo } from 'react';
${l}

${D}

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
/>`,m={...a({previewSource:"shown",code:h4}),render:()=>{const[e]=o.useState(g),n=o.useMemo(()=>new Set(["priority","issueType"]),[]);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{getVerticalBorder:({columnKey:u})=>n.has(u)?!1:void 0}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:173,columnNumber:7},void 0)}},S4=`${l}

${D}

<TableCanvas
  tableConfig={{ borders: { horizontal: false } }}
  columnConfig={COLS}
  rows={rows}
/>`,C={...a({previewSource:"shown",code:S4}),render:()=>{const[e]=o.useState(g);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:207,columnNumber:7},void 0)}},A4=`${l}

${D}

${d4}

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
/>`,E={...a({previewSource:"shown",code:A4}),render:()=>{const[e]=o.useState(g);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1,getCellBorder:({columnKey:n,row:u})=>n==="complete"&&u.complete>=50?h:void 0}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:248,columnNumber:7},void 0)}},B={...a({previewSource:"shown",code:`${l}

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
/>`}),render:()=>{const[e]=o.useState(g),n=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return r.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},borders:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:325,columnNumber:7},void 0)}},w={...a({previewSource:"shown",code:`${l}

${d4}

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
/>`}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},colsCount:{name:"Колонок",control:"select",options:[5,100,500,1e3]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,colsCount:100,perCell:!0},render:({rowsCount:e,colsCount:n,perCell:u})=>{const t=o.useMemo(()=>b4(e),[e]),y=o.useMemo(()=>g4(n),[n]);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},borders:u?{horizontal:!1,getCellBorder:({columnKey:c,row:m4,rowIndex:C4})=>{if(C4%10===9)return h;if(c==="complete")return m4.complete>=50?h:void 0}}:{vertical:!1}},columnConfig:y,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:414,columnNumber:7},void 0)}};function T4(){const e=["Север","Юг","Запад"],n=["Продажи","Развитие"],u=[];let t=1;return e.forEach(y=>{for(let c=0;c<4;c+=1)u.push({id:t,region:y,team:`Команда ${c+1}`,dept:n[Math.floor(c/2)%2],metric:t*29%101,status:t%2?"OK":"Warn"}),t+=1}),u}const v4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],f={...a({previewSource:"shown",code:`${l}

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
/>`}),render:()=>{const[e]=o.useState(T4);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},borders:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:n,row:u})=>{if(n==="region"||n==="dept")return p4;if(n==="metric")return u.metric>=50?D4:S;if(n==="status")return S}}},columnConfig:v4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:532,columnNumber:7},void 0)}},k4=[{key:"id",name:"ID",width:120,renderSummaryCell:({theme:e})=>r.jsxDEV(p.Container,{padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},alignItems:"center",children:r.jsxDEV(p.Text,{font:e.baseFontStyle,children:"Итого"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:580,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:573,columnNumber:7},void 0)},{key:"task",name:"Title",width:200},{key:"priority",name:"Priority",width:140},{key:"complete",name:"% Complete",width:160,renderSummaryCell:({row:e,theme:n})=>r.jsxDEV(p.Container,{padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},alignItems:"center",children:r.jsxDEV(p.Text,{font:n.baseFontStyle,children:`Среднее: ${e}%`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:598,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:591,columnNumber:7},void 0)}],b={...a({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

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
/>`}),render:()=>{const[e]=o.useState(g),n=o.useMemo(()=>Math.round(e.reduce((u,t)=>u+t.complete,0)/e.length),[e]);return r.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},summaryRows:{showDefault:!0,showInControl:!1},borders:{getVerticalBorder:({columnKey:u})=>u==="priority"?!1:void 0}},columnConfig:k4,rows:e,bottomSummaryRows:[n]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:663,columnNumber:7},void 0)}};var A,T,v,k,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.description}}};var F,M,x,R,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(M=m.parameters)==null?void 0:M.docs)==null?void 0:x.source},description:{story:`Точечно: у колонок Priority и Issue Type убран разделитель справа
(borders.getVerticalBorder), остальные линии на месте.

Best practice: набор колонок готовим заранее в Set и в колбэке делаем быстрый
has(). getVerticalBorder зовётся на каждую видимую колонку при перерисовке,
поэтому такая проверка остаётся дешёвой и не растёт с числом колонок.`,...(I=(R=m.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var N,_,L,K,V;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(_=C.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:"Выключены все горизонтальные линии тела.",...(V=(K=C.parameters)==null?void 0:K.docs)==null?void 0:V.description}}};var z,P,$,H,W;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(P=E.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(W=(H=E.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var j,G,U,Y,X;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
видимая область.`,...(u4=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var e4,n4,r4,o4,t4;f.parameters={...f.parameters,docs:{...(e4=f.parameters)==null?void 0:e4.docs,source:{originalSource:`{
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
}`,...(r4=(n4=f.parameters)==null?void 0:n4.docs)==null?void 0:r4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(t4=(o4=f.parameters)==null?void 0:o4.docs)==null?void 0:t4.description}}};var s4,a4,i4,l4,c4;b.parameters={...b.parameters,docs:{...(s4=b.parameters)==null?void 0:s4.docs,source:{originalSource:`{
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
}`,...(i4=(a4=b.parameters)==null?void 0:a4.docs)==null?void 0:i4.source},description:{story:`Итоговые (summary) строки и вертикальные линии. Настройки вертикали действуют
и на итоговую строку: разделители колонок проходят через неё насквозь, а
getVerticalBorder убирает разделитель у выбранной колонки и в теле, и в итоге
(здесь скрыт разделитель справа от Priority).

Ограничение движка: точечные горизонтали (getHorizontalBorder) и рамки
отдельных ячеек (getCellBorder) в итоговых строках пока не поддержаны, поэтому
на их линии влияют только по-колоночная вертикаль и общие настройки.`,...(c4=(l4=b.parameters)==null?void 0:l4.docs)==null?void 0:c4.description}}};const O4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells","SummaryVerticalBorders"],N4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:m,MillionRows:w,NoHorizontalLines:C,NoVerticalLines:d,PerCellBorders:E,SubRowsWithoutInnerLines:B,SummaryVerticalBorders:b,WithMergedCells:f,__namedExportsOrder:O4,default:B4},Symbol.toStringTag,{value:"Module"}));export{N4 as B};
