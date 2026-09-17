import{r as t,d as i}from"./react-D2T61mpp.js";import{c as f}from"./tableData-DVJFoYoT.js";import n4 from"./DocStoryTemplate-Bt9yziJP.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as c}from"./TableCanvas-osuPY5Gy.js";import"./vendor-DGOJ8IkJ.js";import"./react-is-Clcustum.js";import"./styled-components-CpoCjLET.js";import"./@tanstack/react-virtual-DY8kLFbH.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D0xZ1VG1.js";import"./IconButton-B1S_PEU7.js";import"./@salutejs/plasma-icons-M7q5ttFU.js";import"./@salutejs/sdds-finai-vlgGnyfq.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BYFfcMQ8.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D89rlOgl.js";import"./TextField-hhEXD4MV.js";import"./sharedUtilsInputs-CihmA69W.js";import"./AnalyticalWidget-CUHjGrwq.js";import"./Collapse-D3ytRWMZ.js";import"./Table-BR-UWVmi.js";import"./react-data-grid-C09Mo2jQ.js";import"./TableTabs-1p0kXxxG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Cc47KErK.js";import"./ListOfFilters-RHwyKfBy.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Ci8qdiqy.js";import"./EmptyState-DvPPwGoG.js";import"./MassActions-CPQmhxAP.js";import"./Autocomplete-BOqJXf1S.js";import"./TableGlide-HK5RUnYt.js";import"./@glideappsfinal/glide-data-grid-BkbdCNkn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C9Ww6v_N.js";const q4={title:"Локальные компоненты/TableCanvas/GridLines",tags:["!autodocs"],parameters:{docs:{page:n4}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,d=[{key:"id",name:"ID",width:120},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"complete",name:"% Complete",width:140}],o4=["Critical","High","Medium","Low"],s4=["Bug","Improvement","Epic","Story"];function t4(e){const r=new Array(e);for(let u=0;u<e;u+=1)r[u]={id:u+1,task:`Task ${u+1}`,priority:o4[u%4],issueType:s4[(u>>2)%4],complete:u*37%101,developer:"",done:!1,inspiredDay:0,tr:"",loremIpsum:""};return r}const i4={bottom:{color:"#0b7ecb"}},e4={bottom:{color:"#1caf6b"}},r4={bottom:{color:"#e5484d"}},m={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(f);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{vertical:!1}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:75,columnNumber:7},void 0)}},p={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(f),r=d.map(u=>u.key==="priority"?{...u,verticalBorder:!1}:u);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},C={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(f);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{horizontal:!1}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:120,columnNumber:7},void 0)}},E={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(f);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{color:"#0b7ecb"}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:141,columnNumber:7},void 0)}},B={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(f);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:360},rowMarkers:{startIndex:1},gridLines:{getCellBorder:({columnKey:r,row:u})=>{var o;return r!=="complete"?void 0:{bottom:{color:(((o=e[u])==null?void 0:o.complete)??0)>=50?"#1caf6b":"#e5484d"}}}}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:163,columnNumber:7},void 0)}},w={...a({preCode:l,previewSource:"shown"}),argTypes:{rowsCount:{name:"Строк",control:"select",options:[1e5,5e5,1e6]},perCell:{name:"Пер-ячейка (getCellBorder)",control:"boolean"}},args:{rowsCount:1e5,perCell:!0},render:({rowsCount:e,perCell:r})=>{const u=t.useMemo(()=>t4(e),[e]);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:480},rowMarkers:{startIndex:1},gridLines:r?{getCellBorder:({columnKey:n,row:o})=>{var s;if(o%10===9)return i4;if(n==="complete")return(((s=u[o])==null?void 0:s.complete)??0)>=50?e4:r4}}:{vertical:!1}},columnConfig:d,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:206,columnNumber:7},void 0)}};function a4(){const e=["Север","Юг","Запад"],r=["Продажи","Развитие"],u=[];let n=1;for(const o of e)for(let s=0;s<4;s+=1)u.push({id:n,region:o,team:`Команда ${s+1}`,dept:r[Math.floor(s/2)%2],metric:n*29%101,status:n%2?"OK":"Warn"}),n+=1;return u}const c4=[{key:"region",name:"Регион (merged, у нумерации)",width:200},{key:"team",name:"Команда",width:150},{key:"dept",name:"Отдел (merged, средний)",width:190},{key:"metric",name:"Метрика",width:120},{key:"status",name:"Статус",width:120}],l4={top:{color:"#0b7ecb"},right:{color:"#0b7ecb"},bottom:{color:"#0b7ecb"},left:{color:"#0b7ecb"}},d4={top:{color:"#f5a623"},right:{color:"#f5a623"},bottom:{color:"#f5a623"},left:{color:"#f5a623"}},g={...a({preCode:l,previewSource:"shown"}),render:()=>{const[e]=t.useState(a4);return i.jsxDEV(c,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},mergeCells:{mergeByCellValues:["region","dept"]},hoverEffects:{row:!0},cellsSelection:{mode:"range-cell"},gridLines:{getCellBorder:({columnKey:r,row:u})=>{var n;if(r==="region")return l4;if(r==="dept")return d4;if(r==="metric")return(((n=e[u])==null?void 0:n.metric)??0)>=50?e4:r4}}},columnConfig:c4,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.GridLines/TableCanvas.gridLines.stories.tsx",lineNumber:302,columnNumber:7},void 0)}};var D,b,v,S,h;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`Глобально выключены вертикальные линии — остаются только горизонтальные.
Самый частый кейс: убрать разделители колонок.`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var y,A,k,x,F;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:`Точечно: у колонки Priority убран разделитель справа
(columnConfig.verticalBorder=false), остальные линии на месте.`,...(F=(x=p.parameters)==null?void 0:x.docs)==null?void 0:F.description}}};var L,T,R,M,N;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(T=C.parameters)==null?void 0:T.docs)==null?void 0:R.source},description:{story:"Глобально выключены горизонтальные линии тела.",...(N=(M=C.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var O,I,_,G,V;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        color: '#0b7ecb'
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(_=(I=E.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"Единый цвет всех линий сетки через gridLines.color.",...(V=(G=E.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var K,P,j,H,z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        getCellBorder: ({
          columnKey,
          row
        }) => {
          if (columnKey !== 'complete') return undefined;
          const value = rows[row]?.complete ?? 0;
          return {
            bottom: {
              color: value >= 50 ? '#1caf6b' : '#e5484d'
            }
          };
        }
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(j=(P=B.parameters)==null?void 0:P.docs)==null?void 0:j.source},description:{story:`Пер-ячейка: getCellBorder красит нижнюю рамку ячеек колонки % Complete
в зависимости от значения (порог 50). Продвинутый сценарий.`,...(z=(H=B.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};var W,$,U,X,Y;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      name: 'Пер-ячейка (getCellBorder)',
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
        getCellBorder: ({
          columnKey,
          row
        }) => {
          if (row % 10 === 9) return SEP_BORDER;
          if (columnKey !== 'complete') return undefined;
          return (rows[row]?.complete ?? 0) >= 50 ? OK_BORDER : BAD_BORDER;
        }
      } : {
        vertical: false
      }
    }} columnConfig={COLS} rows={rows} />;
  }
}`,...(U=($=w.parameters)==null?void 0:$.docs)==null?void 0:U.source},description:{story:`Нагрузочный стенд. Генерируем до миллиона строк и включаем пер-ячейковые рамки.

Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
рисует только видимый вьюпорт. getCellBorder тут делает две вещи — красит нижнюю
рамку колонки % Complete по порогу 50 и подчёркивает каждую 10-ю строку целиком.

Контролы: «Строк» — 100k / 500k / 1M, «Пер-ячейка» — включить сегментный путь
(getCellBorder) или остаться на быстром пути со сплошными линиями.`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var q,J,Q,Z,u4;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        getCellBorder: ({
          columnKey,
          row
        }) => {
          if (columnKey === 'region') return REGION_FRAME;
          if (columnKey === 'dept') return DEPT_FRAME;
          if (columnKey === 'metric') {
            return (rows[row]?.metric ?? 0) >= 50 ? OK_BORDER : BAD_BORDER;
          }
          return undefined;
        }
      }
    }} columnConfig={MERGE_COLS} rows={rows} />;
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
«Отдел» слит блоками по 2 в средней колонке.

Для сравнения поведения рамок:
- синий контур у «Региона» (левая сторона совпадает с границей нумерации);
- оранжевый контур у «Отдела» (обе стороны внутри таблицы, не у нумерации);
- «Метрика» красит нижнюю рамку по порогу 50 (зелёный/красный) построчно.

hoverEffects.row + выделение включены, чтобы ловить баги ховера на мерж-ячейках.`,...(u4=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};const J4=["NoVerticalLines","HideColumnBorder","NoHorizontalLines","CustomColor","PerCellBorders","MillionRows","WithMergedCells"];export{E as CustomColor,p as HideColumnBorder,w as MillionRows,C as NoHorizontalLines,m as NoVerticalLines,B as PerCellBorders,g as WithMergedCells,J4 as __namedExportsOrder,q4 as default};
