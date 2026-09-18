import{r as s,d as t}from"./react-D2T61mpp.js";import{c as D}from"./tableData-DVJFoYoT.js";import s4 from"./DocStoryTemplate-D1KCoccP.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C as t4}from"./TableCanvas-D2JwtWG0.js";const a4={title:"Локальные компоненты/TableCanvas/Borders",tags:["!autodocs"],parameters:{docs:{page:s4}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,n=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],i4=["Critical","High","Medium","Low"],l4=["Bug","Improvement","Epic","Story"];function c4(e){const r=new Array(e);for(let u=0;u<e;u+=1)r[u]={id:u+1,task:`Task ${u+1}`,priority:i4[u%4],issueType:l4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}function d4(e){if(e<=n.length)return[...n];const r=[];for(let u=n.length;u<e;u+=1)r.push({key:`m${u}`,name:`M${u-n.length+1}`,width:90,renderCell:({row:o})=>t.jsxDEV(t4.Text,{children:String(Number(o.id)*(u+1)%1e3)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:78,columnNumber:9},this)});return[...n,...r]}const A={bottom:!0},C4={top:!0,right:!0,bottom:!0,left:!0},b={left:!0,right:!0},E4={left:!0,right:!0,bottom:!0},d={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(D);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{vertical:!1}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},C={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(D),r=n.map(u=>u.key==="priority"?{...u,verticalBorder:!1}:u);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:128,columnNumber:7},void 0)}},E={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(D);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:148,columnNumber:7},void 0)}},B={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(D);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1,getCellBorder:({columnKey:r,row:u})=>r==="complete"&&u.complete>=50?A:void 0}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:171,columnNumber:7},void 0)}},m={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(D),r=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return t.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},borders:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:218,columnNumber:7},void 0)}},p={...a({preCode:l,previewSource:"shown"}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},colsCount:{name:"Колонок",control:"select",options:[5,100,500,1e3]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,colsCount:100,perCell:!0},render:({rowsCount:e,colsCount:r,perCell:u})=>{const o=s.useMemo(()=>c4(e),[e]),f=s.useMemo(()=>d4(r),[r]);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},borders:u?{horizontal:!1,getCellBorder:({columnKey:c,row:n4,rowIndex:o4})=>{if(o4%10===9)return A;if(c==="complete")return n4.complete>=50?A:void 0}}:{vertical:!1}},columnConfig:f,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:283,columnNumber:7},void 0)}};function B4(){const e=["Север","Юг","Запад"],r=["Продажи","Развитие"],u=[];let o=1;return e.forEach(f=>{for(let c=0;c<4;c+=1)u.push({id:o,region:f,team:`Команда ${c+1}`,dept:r[Math.floor(c/2)%2],metric:o*29%101,status:o%2?"OK":"Warn"}),o+=1}),u}const m4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],w={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=s.useState(B4);return t.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},borders:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:r,row:u})=>{if(r==="region"||r==="dept")return C4;if(r==="metric")return u.metric>=50?E4:b;if(r==="status")return b}}},columnConfig:m4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:365,columnNumber:7},void 0)}};var g,h,y,S,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      borders: {
        vertical: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var k,T,F,x,M;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(T=C.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`Точечно: у колонки Priority убран разделитель справа
(columnConfig.verticalBorder=false), остальные линии на месте.`,...(M=(x=C.parameters)==null?void 0:x.docs)==null?void 0:M.description}}};var N,I,O,R,_;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      borders: {
        horizontal: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(O=(I=E.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Выключены все горизонтальные линии тела.",...(_=(R=E.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var L,z,V,j,H;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      borders: {
        horizontal: false,
        getCellBorder: ({
          columnKey,
          row
        }) => columnKey === 'complete' && row.complete >= 50 ? BOTTOM_ON : undefined
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(V=(z=B.parameters)==null?void 0:z.docs)==null?void 0:V.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(H=(j=B.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var K,P,W,G,$;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      borders: {
        vertical: false,
        getHorizontalBorder: ({
          treeLvl
        }) => treeLvl > 0 ? false : undefined
      }
    }} columnConfig={cols} rows={rows} />;
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...($=(G=m.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var U,X,Y,q,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M), «Колонок» (5 / 100 / 500 / 1000) и «Рамки
ячеек» (включить разбивку линий по ячейкам через getCellBorder или оставить
сплошные линии). 1000 колонок x 1M строк скролл держит: рисуется только
видимая область.`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var Q,Z,u4,e4,r4;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(u4=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(r4=(e4=w.parameters)==null?void 0:e4.docs)==null?void 0:r4.description}}};const p4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells"],g4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:C,MillionRows:p,NoHorizontalLines:E,NoVerticalLines:d,PerCellBorders:B,SubRowsWithoutInnerLines:m,WithMergedCells:w,__namedExportsOrder:p4,default:a4},Symbol.toStringTag,{value:"Module"}));export{g4 as B};
