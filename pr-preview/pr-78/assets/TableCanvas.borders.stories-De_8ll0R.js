import{r as o,d as n}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import E4 from"./DocStoryTemplate-C4kDHE18.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C as A}from"./TableCanvas-5LTubv5a.js";const m4={title:"Локальные компоненты/TableCanvas/Borders",tags:["!autodocs"],parameters:{docs:{page:E4}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,t=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],B4=["Critical","High","Medium","Low"],C4=["Bug","Improvement","Epic","Story"];function D4(e){const r=new Array(e);for(let u=0;u<e;u+=1)r[u]={id:u+1,task:`Task ${u+1}`,priority:B4[u%4],issueType:C4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}function w4(e){if(e<=t.length)return[...t];const r=[];for(let u=t.length;u<e;u+=1)r.push({key:`m${u}`,name:`M${u-t.length+1}`,width:90,renderCell:({row:s})=>n.jsxDEV(A.Text,{children:String(Number(s.id)*(u+1)%1e3)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:78,columnNumber:9},this)});return[...t,...r]}const g={bottom:!0},p4={top:!0,right:!0,bottom:!0,left:!0},h={left:!0,right:!0},b4={left:!0,right:!0,bottom:!0},d={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{vertical:!1}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},E={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b),r=o.useMemo(()=>new Set(["priority","issueType"]),[]);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{getVerticalBorder:({columnKey:u})=>r.has(u)?!1:void 0}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:134,columnNumber:7},void 0)}},m={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:158,columnNumber:7},void 0)}},B={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},borders:{horizontal:!1,getCellBorder:({columnKey:r,row:u})=>r==="complete"&&u.complete>=50?g:void 0}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:181,columnNumber:7},void 0)}},C={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b),r=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},borders:{vertical:!1,getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:228,columnNumber:7},void 0)}},D={...a({preCode:l,previewSource:"shown"}),parameters:{docs:{disable:!0}},argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},colsCount:{name:"Колонок",control:"select",options:[5,100,500,1e3]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,colsCount:100,perCell:!0},render:({rowsCount:e,colsCount:r,perCell:u})=>{const s=o.useMemo(()=>D4(e),[e]),f=o.useMemo(()=>w4(r),[r]);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},borders:u?{horizontal:!1,getCellBorder:({columnKey:c,row:c4,rowIndex:d4})=>{if(d4%10===9)return g;if(c==="complete")return c4.complete>=50?g:void 0}}:{vertical:!1}},columnConfig:f,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:297,columnNumber:7},void 0)}};function A4(){const e=["Север","Юг","Запад"],r=["Продажи","Развитие"],u=[];let s=1;return e.forEach(f=>{for(let c=0;c<4;c+=1)u.push({id:s,region:f,team:`Команда ${c+1}`,dept:r[Math.floor(c/2)%2],metric:s*29%101,status:s%2?"OK":"Warn"}),s+=1}),u}const f4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],w={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(A4);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},borders:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:r,row:u})=>{if(r==="region"||r==="dept")return p4;if(r==="metric")return u.metric>=50?b4:h;if(r==="status")return h}}},columnConfig:f4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:379,columnNumber:7},void 0)}},g4=[{key:"id",name:"ID",width:120,renderSummaryCell:({theme:e})=>n.jsxDEV(A.Container,{padding:{left:e.cellHorizontalPadding,right:e.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(A.Text,{font:e.baseFontStyle,children:"Итого"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:427,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:420,columnNumber:7},void 0)},{key:"task",name:"Title",width:200},{key:"priority",name:"Priority",width:140},{key:"complete",name:"% Complete",width:160,renderSummaryCell:({row:e,theme:r})=>n.jsxDEV(A.Container,{padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},alignItems:"center",children:n.jsxDEV(A.Text,{font:r.baseFontStyle,children:`Среднее: ${e}%`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:445,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:438,columnNumber:7},void 0)}],p={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=o.useState(b),r=o.useMemo(()=>Math.round(e.reduce((u,s)=>u+s.complete,0)/e.length),[e]);return n.jsxDEV(i,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},summaryRows:{showDefault:!0,showInControl:!1},borders:{getVerticalBorder:({columnKey:u})=>u==="priority"?!1:void 0}},columnConfig:g4,rows:e,bottomSummaryRows:[r]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Borders/TableCanvas.borders.stories.tsx",lineNumber:473,columnNumber:7},void 0)}};var y,S,v,k,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var F,x,M,N,I;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
}`,...(M=(x=E.parameters)==null?void 0:x.docs)==null?void 0:M.source},description:{story:`Точечно: у колонок Priority и Issue Type убран разделитель справа
(borders.getVerticalBorder), остальные линии на месте.

Best practice: набор колонок готовим заранее в Set и в колбэке делаем быстрый
has(). getVerticalBorder зовётся на каждую видимую колонку при перерисовке,
поэтому такая проверка остаётся дешёвой и не растёт с числом колонок.`,...(I=(N=E.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var R,O,_,V,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:"Выключены все горизонтальные линии тела.",...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.description}}};var z,j,H,P,K;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(j=B.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(K=(P=B.parameters)==null?void 0:P.docs)==null?void 0:K.description}}};var W,$,G,U,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:`Дерево subRows: вертикальные линии выключены целиком, остаются только
горизонтальные между корневыми строками, а внутри раскрытых блоков они не
рисуются, и родитель с детьми выглядит цельным.

vertical: false убирает все разделители колонок. getHorizontalBorder получает
саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
номеру.`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var X,q,J,Q,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(q=D.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M), «Колонок» (5 / 100 / 500 / 1000) и «Рамки
ячеек» (включить разбивку линий по ячейкам через getCellBorder или оставить
сплошные линии). 1000 колонок x 1M строк скролл держит: рисуется только
видимая область.`,...(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var u4,e4,r4,n4,o4;w.parameters={...w.parameters,docs:{...(u4=w.parameters)==null?void 0:u4.docs,source:{originalSource:`{
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
}`,...(r4=(e4=w.parameters)==null?void 0:e4.docs)==null?void 0:r4.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
- в «Метрике» дополнительно нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(o4=(n4=w.parameters)==null?void 0:n4.docs)==null?void 0:o4.description}}};var s4,t4,a4,i4,l4;p.parameters={...p.parameters,docs:{...(s4=p.parameters)==null?void 0:s4.docs,source:{originalSource:`{
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
на их линии влияют только по-колоночная вертикаль и общие настройки.`,...(l4=(i4=p.parameters)==null?void 0:i4.docs)==null?void 0:l4.description}}};const h4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells","SummaryVerticalBorders"],F4=Object.freeze(Object.defineProperty({__proto__:null,HideColumnBorder:E,MillionRows:D,NoHorizontalLines:m,NoVerticalLines:d,PerCellBorders:B,SubRowsWithoutInnerLines:C,SummaryVerticalBorders:p,WithMergedCells:w,__namedExportsOrder:h4,default:m4},Symbol.toStringTag,{value:"Module"}));export{F4 as B};
