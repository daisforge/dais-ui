import{r as n,d as o}from"./react-D2T61mpp.js";import{c as w}from"./tableData-DVJFoYoT.js";import n4 from"./DocStoryTemplate-CI86uvbI.js";import{s}from"./storySourceDoc-tVKyHcEN.js";import{T as t}from"./TableCanvas-CznRUkkS.js";const o4={title:"Локальные компоненты/TableCanvas/GridLines",tags:["!autodocs"],parameters:{docs:{page:n4}}},a=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,D=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],s4=["Critical","High","Medium","Low"],t4=["Bug","Improvement","Epic","Story"];function a4(e){const r=new Array(e);for(let u=0;u<e;u+=1)r[u]={id:u+1,task:`Task ${u+1}`,priority:s4[u%4],issueType:t4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}const f={bottom:!0},i4={top:!0,right:!0,bottom:!0,left:!0},A={left:!0,right:!0},l4={left:!0,right:!0,bottom:!0},c={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{vertical:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:78,columnNumber:7},void 0)}},d={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(w),r=D.map(u=>u.key==="priority"?{...u,verticalBorder:!1}:u);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},E={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:123,columnNumber:7},void 0)}},C={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1,getCellBorder:({columnKey:r,row:u})=>r==="complete"&&u.complete>=50?f:void 0}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:146,columnNumber:7},void 0)}},B={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(w),r=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},gridLines:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:193,columnNumber:7},void 0)}},m={...s({preCode:a,previewSource:"shown"}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,perCell:!0},render:({rowsCount:e,perCell:r})=>{const u=n.useMemo(()=>a4(e),[e]);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},gridLines:r?{horizontal:!1,getCellBorder:({columnKey:i,row:g,rowIndex:l})=>{if(l%10===9)return f;if(i==="complete")return g.complete>=50?f:void 0}}:{vertical:!1}},columnConfig:D,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:242,columnNumber:7},void 0)}};function c4(){const e=["Север","Юг","Запад"],r=["Продажи","Развитие"],u=[];let i=1;return e.forEach(g=>{for(let l=0;l<4;l+=1)u.push({id:i,region:g,team:`Команда ${l+1}`,dept:r[Math.floor(l/2)%2],metric:i*29%101,status:i%2?"OK":"Warn"}),i+=1}),u}const d4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],p={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=n.useState(c4);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},gridLines:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:r,row:u})=>{if(r==="region"||r==="dept")return i4;if(r==="metric")return u.metric>=50?l4:A;if(r==="status")return A}}},columnConfig:d4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:324,columnNumber:7},void 0)}};var y,b,h,S,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
      gridLines: {
        vertical: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var k,F,T,x,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const cols: readonly ColumnConfig<Row>[] = COLS.map(c => c.key === 'priority' ? {
      ...c,
      verticalBorder: false
    } : c);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 360
      },
      rowMarkers: {
        startIndex: 1
      }
    }} columnConfig={cols} rows={rows} />;
  }
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:`Точечно: у колонки Priority убран разделитель справа
(columnConfig.verticalBorder=false), остальные линии на месте.`,...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.description}}};var M,I,O,N,R;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
      gridLines: {
        horizontal: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(O=(I=E.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Выключены все горизонтальные линии тела.",...(R=(N=E.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var _,z,G,V,j;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
      gridLines: {
        horizontal: false,
        getCellBorder: ({
          columnKey,
          row
        }) => columnKey === 'complete' && row.complete >= 50 ? BOTTOM_ON : undefined
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(G=(z=C.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(j=(V=C.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var H,K,P,W,$;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
      gridLines: {
        vertical: false,
        getHorizontalBorder: ({
          treeLvl
        }) => treeLvl > 0 ? false : undefined
      }
    }} columnConfig={cols} rows={rows} />;
  }
}`,...(P=(K=B.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...($=(W=B.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var U,X,Y,q,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
    perCell: {
      name: 'Рамки ячеек (getCellBorder)',
      control: 'boolean'
    }
  },
  args: {
    rowsCount: 100_000,
    perCell: true
  },
  render: ({
    rowsCount,
    perCell
  }: {
    rowsCount: number;
    perCell: boolean;
  }) => {
    const rows = useMemo(() => makeLeanRows(rowsCount), [rowsCount]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 480
      },
      rowMarkers: {
        startIndex: 1
      },
      gridLines: perCell ? {
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
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M) и «Рамки ячеек» (включить разбивку линий
по ячейкам через getCellBorder или оставить сплошные линии).`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var Q,Z,u4,e4,r4;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
      gridLines: {
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
}`,...(u4=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(r4=(e4=p.parameters)==null?void 0:e4.docs)==null?void 0:r4.description}}};const E4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells"],D4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:d,MillionRows:m,NoHorizontalLines:E,NoVerticalLines:c,PerCellBorders:C,SubRowsWithoutInnerLines:B,WithMergedCells:p,__namedExportsOrder:E4,default:o4},Symbol.toStringTag,{value:"Module"}));export{D4 as G};
