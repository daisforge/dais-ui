import{r as s,d as n}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import m4 from"./DocStoryTemplate-C4kDHE18.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C as f}from"./TableCanvas-B_zRWt1b.js";const E4={title:"Локальные компоненты/TableCanvas/Borders",tags:["!autodocs"],parameters:{docs:{page:m4}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,t=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],C4=["Critical","High","Medium","Low"],B4=["Bug","Improvement","Epic","Story"];function w4(u){const r=new Array(u);for(let e=0;e<u;e+=1)r[e]={id:e+1,task:`Task ${e+1}`,priority:C4[e%4],issueType:B4[Math.floor(e/4)%4],complete:e*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}function D4(u){if(u<=t.length)return[...t];const r=[];for(let e=t.length;e<u;e+=1)r.push({key:`m${e}`,name:`M${e-t.length+1}`,width:90,renderCell:({row:o})=>n.jsxDEV(f.Text,{children:String(Number(o.id)*(e+1)%1e3)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:78,columnNumber:9},this)});return[...t,...r]}const A={bottom:!0},p4={top:!0,right:!0,bottom:!0,left:!0},y={left:!0,right:!0},b4={left:!0,right:!0,bottom:!0},d={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{vertical:!1}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},m={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{getVerticalBorder:({columnKey:r})=>r==="priority"?!1:void 0}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:125,columnNumber:7},void 0)}},E={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:149,columnNumber:7},void 0)}},C={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1,getCellBorder:({columnKey:r,row:e})=>r==="complete"&&e.complete>=50?A:void 0}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:172,columnNumber:7},void 0)}},B={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b),r=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:e=>e.subRows,rowKeyGetter:e=>e.id},borders:{vertical:!1,getHorizontalBorder:({treeLvl:e})=>e>0?!1:void 0}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:219,columnNumber:7},void 0)}},w={...a({preCode:l,previewSource:"shown"}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},colsCount:{name:"Колонок",control:"select",options:[5,100,500,1e3]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,colsCount:100,perCell:!0},render:({rowsCount:u,colsCount:r,perCell:e})=>{const o=s.useMemo(()=>w4(u),[u]),g=s.useMemo(()=>D4(r),[r]);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},borders:e?{horizontal:!1,getCellBorder:({columnKey:c,row:c4,rowIndex:d4})=>{if(d4%10===9)return A;if(c==="complete")return c4.complete>=50?A:void 0}}:{vertical:!1}},columnConfig:g,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:288,columnNumber:7},void 0)}};function f4(){const u=["Север","Юг","Запад"],r=["Продажи","Развитие"],e=[];let o=1;return u.forEach(g=>{for(let c=0;c<4;c+=1)e.push({id:o,region:g,team:`Команда ${c+1}`,dept:r[Math.floor(c/2)%2],metric:o*29%101,status:o%2?"OK":"Warn"}),o+=1}),e}const g4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],D={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(f4);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},borders:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:r,row:e})=>{if(r==="region"||r==="dept")return p4;if(r==="metric")return e.metric>=50?b4:y;if(r==="status")return y}}},columnConfig:g4,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:370,columnNumber:7},void 0)}},A4=[{key:"id",name:"ID",width:120,renderSummaryCell:({theme:u})=>n.jsxDEV(f.Container,{padding:{left:u.cellHorizontalPadding,right:u.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(f.Text,{font:u.baseFontStyle,children:"Итого"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:418,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:411,columnNumber:7},void 0)},{key:"task",name:"Title",width:200},{key:"priority",name:"Priority",width:140},{key:"complete",name:"% Complete",width:160,renderSummaryCell:({row:u,theme:r})=>n.jsxDEV(f.Container,{padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(f.Text,{font:r.baseFontStyle,children:`Среднее: ${u}%`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:436,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:429,columnNumber:7},void 0)}],p={...a({preCode:l,previewSource:"shown"}),render:()=>{const[u]=s.useState(b),r=s.useMemo(()=>Math.round(u.reduce((e,o)=>e+o.complete,0)/u.length),[u]);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},summaryRows:{showDefault:!0,showInControl:!1},borders:{getVerticalBorder:({columnKey:e})=>e==="priority"?!1:void 0}},columnConfig:A4,rows:u,bottomSummaryRows:[r]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:464,columnNumber:7},void 0)}};var h,v,S,k,T;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var F,x,M,N,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        getVerticalBorder: ({
          columnKey
        }) => columnKey === 'priority' ? false : undefined
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source},description:{story:`Точечно: у колонки Priority убран разделитель справа
(borders.getVerticalBorder), остальные линии на месте.`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var R,O,_,V,L;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(O=E.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:"Выключены все горизонтальные линии тела.",...(L=(V=E.parameters)==null?void 0:V.docs)==null?void 0:L.description}}};var z,j,H,P,K;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(j=C.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(K=(P=C.parameters)==null?void 0:P.docs)==null?void 0:K.description}}};var W,$,G,U,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=($=B.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...(Y=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var X,q,J,Q,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M), «Колонок» (5 / 100 / 500 / 1000) и «Рамки
ячеек» (включить разбивку линий по ячейкам через getCellBorder или оставить
сплошные линии). 1000 колонок x 1M строк скролл держит: рисуется только
видимая область.`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var u4,e4,r4,n4,o4;D.parameters={...D.parameters,docs:{...(u4=D.parameters)==null?void 0:u4.docs,source:{originalSource:`{
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
}`,...(r4=(e4=D.parameters)==null?void 0:e4.docs)==null?void 0:r4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(o4=(n4=D.parameters)==null?void 0:n4.docs)==null?void 0:o4.description}}};var s4,t4,a4,i4,l4;p.parameters={...p.parameters,docs:{...(s4=p.parameters)==null?void 0:s4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
}`,...(a4=(t4=p.parameters)==null?void 0:t4.docs)==null?void 0:a4.source},description:{story:`Итоговые (summary) строки и вертикальные линии. Настройки вертикали действуют
и на итоговую строку: разделители колонок проходят через неё насквозь, а
getVerticalBorder убирает разделитель у выбранной колонки и в теле, и в итоге
(здесь скрыт разделитель справа от Priority).

Ограничение движка: точечные горизонтали (getHorizontalBorder) и рамки
отдельных ячеек (getCellBorder) в итоговых строках пока не поддержаны, поэтому
на их линии влияют только по-колоночная вертикаль и общие настройки.`,...(l4=(i4=p.parameters)==null?void 0:i4.docs)==null?void 0:l4.description}}};const y4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells","SummaryVerticalBorders"],F4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:m,MillionRows:w,NoHorizontalLines:E,NoVerticalLines:d,PerCellBorders:C,SubRowsWithoutInnerLines:B,SummaryVerticalBorders:p,WithMergedCells:D,__namedExportsOrder:y4,default:E4},Symbol.toStringTag,{value:"Module"}));export{F4 as B};
