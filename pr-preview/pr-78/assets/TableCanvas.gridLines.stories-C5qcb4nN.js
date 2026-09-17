import{r as n,d as o}from"./react-D2T61mpp.js";import{c as w}from"./tableData-DVJFoYoT.js";import r4 from"./DocStoryTemplate-Bt9yziJP.js";import{s}from"./storySourceDoc-tVKyHcEN.js";import{T as t}from"./TableCanvas-DkunBJO5.js";import"./vendor-DGOJ8IkJ.js";import"./react-is-Clcustum.js";import"./styled-components-CpoCjLET.js";import"./@tanstack/react-virtual-DY8kLFbH.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BxUjg5q-.js";import"./IconButton-B1S_PEU7.js";import"./@salutejs/plasma-icons-M7q5ttFU.js";import"./@salutejs/sdds-finai-vlgGnyfq.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BYFfcMQ8.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D89rlOgl.js";import"./TextField-CMN-K3hJ.js";import"./sharedUtilsInputs-DAJ0iGdT.js";import"./AnalyticalWidget-Y8vS6Yge.js";import"./Collapse-D3ytRWMZ.js";import"./Table-BS51J9XK.js";import"./react-data-grid-C09Mo2jQ.js";import"./TableTabs-1p0kXxxG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-XGEin6p6.js";import"./ListOfFilters-mZKa0CRN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DsA6IpBV.js";import"./EmptyState-DvPPwGoG.js";import"./MassActions-eD2A5l9J.js";import"./Autocomplete-hZds-xcR.js";import"./TableGlide-Dtzx_20G.js";import"./@glideappsfinal/glide-data-grid-BkbdCNkn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C9Ww6v_N.js";const U4={title:"Локальные компоненты/TableCanvas/GridLines",tags:["!autodocs"],parameters:{docs:{page:r4}}},i=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,D=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],n4=["Critical","High","Medium","Low"],o4=["Bug","Improvement","Epic","Story"];function s4(e){const r=new Array(e);for(let u=0;u<e;u+=1)r[u]={id:u+1,task:`Task ${u+1}`,priority:n4[u%4],issueType:o4[Math.floor(u/4)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}const g={bottom:!0},t4={top:!0,right:!0,bottom:!0,left:!0},c={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{vertical:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:75,columnNumber:7},void 0)}},d={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(w),r=D.map(u=>u.key==="priority"?{...u,verticalBorder:!1}:u);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},m={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:120,columnNumber:7},void 0)}},C={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(w);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1,getCellBorder:({columnKey:r,row:u})=>r==="complete"&&u.complete>=50?g:void 0}},columnConfig:D,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:143,columnNumber:7},void 0)}},p={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(w),r=[{key:"task",name:"Title",width:220,subRow:{keyOfColumnInSubRow:"task",isColumnWithArrow:!0}},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}];return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},subRows:{getSubRows:u=>u.subRows,rowKeyGetter:u=>u.id},gridLines:{getHorizontalBorder:({treeLvl:u})=>u>0?!1:void 0}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:188,columnNumber:7},void 0)}},E={...s({preCode:i,previewSource:"shown"}),argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},perCell:{name:"Рамки ячеек (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,perCell:!0},render:({rowsCount:e,perCell:r})=>{const u=n.useMemo(()=>s4(e),[e]);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},gridLines:r?{horizontal:!1,getCellBorder:({columnKey:a,row:f,rowIndex:l})=>{if(l%10===9)return g;if(a==="complete")return f.complete>=50?g:void 0}}:{vertical:!1}},columnConfig:D,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:233,columnNumber:7},void 0)}};function i4(){const e=["Север","Юг","Запад"],r=["Продажи","Развитие"],u=[];let a=1;return e.forEach(f=>{for(let l=0;l<4;l+=1)u.push({id:a,region:f,team:`Команда ${l+1}`,dept:r[Math.floor(l/2)%2],metric:a*29%101,status:a%2?"OK":"Warn"}),a+=1}),u}const a4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],B={...s({preCode:i,previewSource:"shown"}),render:()=>{const[e]=n.useState(i4);return o.jsxDEV(t,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},gridLines:{vertical:!1,horizontal:!1,getCellBorder:({columnKey:r,row:u})=>{if(r==="region"||r==="dept")return t4;if(r==="metric")return u.metric>=50?g:void 0}}},columnConfig:a4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:314,columnNumber:7},void 0)}};var A,y,h,b,v;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:`Выключены все вертикальные линии, остаются только горизонтальные.
Самый частый случай: убрать разделители колонок.`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var S,k,F,T,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
(columnConfig.verticalBorder=false), остальные линии на месте.`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};var L,M,R,N,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Выключены все горизонтальные линии тела.",...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var O,_,z,G,V;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(_=C.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:`Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
% Complete нижняя рамка точечно включена у значений от 50. getCellBorder
получает саму строку, поэтому порог проверяется прямо по её полю.`,...(V=(G=C.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var K,j,H,P,W;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        getHorizontalBorder: ({
          treeLvl
        }) => treeLvl > 0 ? false : undefined
      }
    }} columnConfig={cols} rows={rows} />;
  }
}`,...(H=(j=p.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:`Дерево subRows: между корневыми строками горизонтальные линии остаются,
а внутри раскрытых блоков не рисуются, и родитель с детьми выглядит цельным.

getHorizontalBorder получает саму строку и уровень вложенности treeLvl:
у дочерних строк (treeLvl больше 0) линия сверху выключается. Гаснет и линия
между родителем и первым ребёнком, и линии между детьми, а линия сверху
следующей корневой строки остаётся. Индексы строк при раскрытии сдвигаются,
поэтому настройка привязана к строке, а не к номеру.`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var $,U,X,Y,q;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
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
}`,...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
и в колонке % Complete у значений от 50.

Контролы: «Строк» (100k / 500k / 1M) и «Рамки ячеек» (включить разбивку линий
по ячейкам через getCellBorder или оставить сплошные линии).`,...(q=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var J,Q,Z,u4,e4;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Все линии сетки выключены, точечно дорисованы:
- контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
  никогда, от рамок ячеек остаётся только внешний контур блока;
- в «Метрике» нижняя рамка у значений от 50.

hoverEffects.row и выделение включены, чтобы проверять поведение ховера
на объединённых ячейках.`,...(e4=(u4=B.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};const X4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","PerCellBorders","SubRowsWithoutInnerLines","MillionRows","WithMergedCells"];export{d as HideColumnBorder,E as MillionRows,m as NoHorizontalLines,c as NoVerticalLines,C as PerCellBorders,p as SubRowsWithoutInnerLines,B as WithMergedCells,X4 as __namedExportsOrder,U4 as default};
