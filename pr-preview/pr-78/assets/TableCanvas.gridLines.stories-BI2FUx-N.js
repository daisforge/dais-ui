import{r,d as o}from"./react-D2T61mpp.js";import{c as w}from"./tableData-DVJFoYoT.js";import n4 from"./DocStoryTemplate-D1KCoccP.js";import{s}from"./storySourceDoc-tVKyHcEN.js";import{T as t}from"./TableCanvas-D12PEhXR.js";const r4={title:"Локальные компоненты/TableCanvas/GridLines",tags:["!autodocs"],parameters:{docs:{page:n4}}},a=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,D=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],o4=["Critical","High","Medium","Low"],s4=["Bug","Improvement","Epic","Story"];function t4(e){const n=new Array(e);for(let u=0;u<e;u+=1)n[u]={id:u+1,task:`Task ${u+1}`,priority:o4[u%4],issueType:s4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return n}const g={bottom:!0},a4={top:!0,right:!0,bottom:!0,left:!0},c={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{vertical:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:75,columnNumber:7},void 0)}},d={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(w),n=D.map(u=>u.key==="priority"?{...u,verticalBorder:!1}:u);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},C={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:120,columnNumber:7},void 0)}},E={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1,getCellBorder:({columnKey:n,row:u})=>n==="complete"&&u.complete>=50?g:void 0}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:143,columnNumber:7},void 0)}},m={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(w),n=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},gridLines:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:190,columnNumber:7},void 0)}},B={...s({preCode:a,previewSource:"shown"}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,perCell:!0},render:({rowsCount:e,perCell:n})=>{const u=r.useMemo(()=>t4(e),[e]);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},gridLines:n?{horizontal:!1,getCellBorder:({columnKey:i,row:f,rowIndex:l})=>{if(l%10===9)return g;if(i==="complete")return f.complete>=50?g:void 0}}:{vertical:!1}},columnConfig:D,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:239,columnNumber:7},void 0)}};function i4(){const e=["Север","Юг","Запад"],n=["Продажи","Развитие"],u=[];let i=1;return e.forEach(f=>{for(let l=0;l<4;l+=1)u.push({id:i,region:f,team:`Команда ${l+1}`,dept:n[Math.floor(l/2)%2],metric:i*29%101,status:i%2?"OK":"Warn"}),i+=1}),u}const l4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],p={...s({preCode:a,previewSource:"shown"}),render:()=>{const[e]=r.useState(i4);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},gridLines:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:n,row:u})=>{if(n==="region"||n==="dept")return a4;if(n==="metric")return u.metric>=50?g:void 0}}},columnConfig:l4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:320,columnNumber:7},void 0)}};var A,y,b,h,v;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var S,k,F,T,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source},description:{story:`Точечно: у колонки Priority убран разделитель справа
(columnConfig.verticalBorder=false), остальные линии на месте.`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};var L,M,R,N,O;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(M=C.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Выключены все горизонтальные линии тела.",...(O=(N=C.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var I,_,z,G,V;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(_=E.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(V=(G=E.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var j,K,P,H,W;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var $,U,X,Y,q;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(U=B.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M) и «Рамки ячеек» (включить разбивку линий
по ячейкам через getCellBorder или оставить сплошные линии).`,...(q=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var J,Q,Z,u4,e4;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
            return row.metric >= 50 ? BOTTOM_ON : undefined;
          }
          return undefined;
        }
      }
    }} columnConfig={MERGE_COLS} rows={rows} />;
  }
}`,...(Z=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- в «Метрике» нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(e4=(u4=p.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};const c4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells"],p4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:d,MillionRows:B,NoHorizontalLines:C,NoVerticalLines:c,PerCellBorders:E,SubRowsWithoutInnerLines:m,WithMergedCells:p,__namedExportsOrder:c4,default:r4},Symbol.toStringTag,{value:"Module"}));export{p4 as G};
