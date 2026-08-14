import{d as e,r as c}from"./react-D2T61mpp.js";import{c as V,d as p}from"./tableData-UCfjiBCh.js";import P from"./DocStoryTemplate-Cj9EyiOP.js";import{s}from"./storySourceDoc-tVKyHcEN.js";import{T as i,C}from"./TableCanvas-B-3eGO7I.js";import{j as q,k as J}from"./TableGlide-D17BCxPv.js";const K={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:P}}},l=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@sber-digital-finance-ui/ui-kit/components/TableCanvas';
`,m=V(0,40),n={...s({preCode:l,previewSource:"shown",type:"code"}),args:{headerTreeLvl:"lvl3"},argTypes:{headerTreeLvl:{description:"Уровни вложенности шапки таблицы",control:{type:"radio"},options:Object.keys(p)}},name:"Базовая группировка",render:({headerTreeLvl:u})=>{const[I]=c.useState(V),_=c.useMemo(()=>[...(p[u]??[]).map((d,X)=>X===0?{...d,name:e.jsxDEV(C.Container,{padding:{left:8,right:8},children:e.jsxDEV(C.Text,{color:J.accentColor,font:q.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:67,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:66,columnNumber:19},void 0)}:d)],[u]);return e.jsxDEV(i,{tableConfig:{containerStyle:{height:360},columnsControl:{enable:!0},resizableColumn:!0},columnConfig:_,rows:I},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:83,columnNumber:7},void 0)}},r={...s({preCode:l,previewSource:"shown",type:"code"}),name:"Слитая листовая колонка",render:()=>{const u=[{key:"id",name:"ID",width:80,spanGroupHeader:!0},{key:"taskGroup",name:"Задача",children:[{key:"task",name:"Название",width:220},{key:"priority",name:"Приоритет",width:140}]},{key:"complete",name:"% Выполнено",width:150,spanGroupHeader:!0}];return e.jsxDEV(i,{tableConfig:{containerStyle:{height:320}},columnConfig:u,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:125,columnNumber:7},void 0)}},o={...s({preCode:l,previewSource:"shown",type:"code"}),name:"Слияние всех листьев",render:()=>{const u=[{key:"id",name:"ID",width:80},{key:"developer",name:"Исполнитель",width:180},{key:"taskGroup",name:"Задача",children:[{key:"task",name:"Название",width:220},{key:"priority",name:"Приоритет",width:140}]},{key:"complete",name:"% Выполнено",width:150}];return e.jsxDEV(i,{tableConfig:{containerStyle:{height:320},spanGroupHeader:!0},columnConfig:u,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:157,columnNumber:7},void 0)}},a={...s({preCode:l,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const u=[{key:"id",name:"top-left",width:120,spanGroupHeader:!0,spanGroupHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"developer",name:"center",width:120,spanGroupHeader:!0,spanGroupHeaderAlign:{horizontal:"center",vertical:"center"}},{key:"complete",name:"bottom-right",width:120,spanGroupHeader:!0,spanGroupHeaderAlign:{horizontal:"right",vertical:"bottom"}},{key:"taskGroup",name:"Задача",children:[{key:"task",name:"Название",width:220},{key:"priority",name:"Приоритет",width:140}]}];return e.jsxDEV(i,{tableConfig:{containerStyle:{height:320}},columnConfig:u,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:207,columnNumber:7},void 0)}},t={...s({preCode:l,previewSource:"shown",type:"code"}),name:"Группы + реордер",render:()=>{const u=[{key:"id",name:"ID",width:90,spanGroupHeader:!0,resizable:!0},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"tr",name:"TR",width:110,spanGroupHeader:!0,resizable:!0}];return e.jsxDEV(i,{tableConfig:{containerStyle:{height:320},columnsControl:{enable:!0},resizableColumn:!0},columnConfig:u,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:265,columnNumber:7},void 0)}};var h,y,b,g,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  args: {
    headerTreeLvl: 'lvl3'
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: {
        type: 'radio'
      },
      options: Object.keys(dataObj)
    }
  },
  name: 'Базовая группировка',
  render: ({
    headerTreeLvl
  }) => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [...(dataObj[headerTreeLvl] ?? []).map((el, i) => i === 0 ? {
      ...el,
      name: <Canvas.Container padding={{
        left: 8,
        right: 8
      }}>
                    <Canvas.Text color={tableCanvasTheme.accentColor} font={tableCanvasFonts.bodyXSBold}>
                      кастомный name
                    </Canvas.Text>
                  </Canvas.Container>
    } : el)], [headerTreeLvl]);
    return <TableCanvas key={headerTreeLvl} tableConfig={{
      containerStyle: {
        height: 360
      },
      columnsControl: {
        enable: true
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Базовая группировка: вложенная структура шапки через `children`. Первая группа —\nс кастомным `name` (canvas-элемент). Уровень вложенности задаётся аргом `headerTreeLvl`.",...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.description}}};var E,w,f,v,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Слитая листовая колонка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 80,
      spanGroupHeader: true
    }, {
      key: 'taskGroup',
      name: 'Задача',
      children: [{
        key: 'task',
        name: 'Название',
        width: 220
      }, {
        key: 'priority',
        name: 'Приоритет',
        width: 140
      }]
    }, {
      key: 'complete',
      name: '% Выполнено',
      width: 150,
      spanGroupHeader: true
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      }
    }} columnConfig={columnConfig} rows={spanRows} />;
  }
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Листовая колонка (без группы) со слитной шапкой стоит рядом с обычной группой.\n`spanGroupHeader: true` рисует её заголовок одной ячейкой на всю высоту шапки —\nбез пустой полосы над ним и без горизонтального шва.",...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.description}}};var T,B,G,F,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Слияние всех листьев',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'developer',
      name: 'Исполнитель',
      width: 180
    }, {
      key: 'taskGroup',
      name: 'Задача',
      children: [{
        key: 'task',
        name: 'Название',
        width: 220
      }, {
        key: 'priority',
        name: 'Приоритет',
        width: 140
      }]
    }, {
      key: 'complete',
      name: '% Выполнено',
      width: 150
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      },
      spanGroupHeader: true
    }} columnConfig={columnConfig} rows={spanRows} />;
  }
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"Табличный дефолт: `tableConfig.spanGroupHeader: true` включает слияние сразу у\nВСЕХ листовых колонок (без группы). Колонки внутри группы проп не трогает.",...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};var A,H,x,z,N;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Выравнивание заголовка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'top-left',
      width: 120,
      spanGroupHeader: true,
      spanGroupHeaderAlign: {
        horizontal: 'left',
        vertical: 'top'
      }
    }, {
      key: 'developer',
      name: 'center',
      width: 120,
      spanGroupHeader: true,
      spanGroupHeaderAlign: {
        horizontal: 'center',
        vertical: 'center'
      }
    }, {
      key: 'complete',
      name: 'bottom-right',
      width: 120,
      spanGroupHeader: true,
      spanGroupHeaderAlign: {
        horizontal: 'right',
        vertical: 'bottom'
      }
    }, {
      key: 'taskGroup',
      name: 'Задача',
      children: [{
        key: 'task',
        name: 'Название',
        width: 220
      }, {
        key: 'priority',
        name: 'Приоритет',
        width: 140
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      }
    }} columnConfig={columnConfig} rows={spanRows} />;
  }
}`,...(x=(H=a.parameters)==null?void 0:H.docs)==null?void 0:x.source},description:{story:"Матрица выравнивания заголовка в слитной ячейке: `spanGroupHeaderAlign`\nзадаёт horizontal (left/center/right) и vertical (top/center/bottom).",...(N=(z=a.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var R,j,O,L,M;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Группы + реордер',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 90,
      spanGroupHeader: true,
      resizable: true
    }, {
      key: 'metrics',
      name: 'Показатели',
      children: [{
        key: 'sales',
        name: 'Продажи',
        children: [{
          key: 'task',
          name: 'План',
          width: 150,
          resizable: true
        }, {
          key: 'priority',
          name: 'Факт',
          width: 130,
          resizable: true
        }]
      }, {
        key: 'grade',
        name: 'Оценка',
        children: [{
          key: 'issueType',
          name: 'Инд',
          width: 120,
          resizable: true
        }, {
          key: 'developer',
          name: 'Кол',
          width: 120,
          resizable: true
        }, {
          key: 'complete',
          name: 'Итог',
          width: 120,
          resizable: true
        }]
      }]
    }, {
      key: 'tr',
      name: 'TR',
      width: 110,
      spanGroupHeader: true,
      resizable: true
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      },
      columnsControl: {
        enable: true
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={spanRows} />;
  }
}`,...(O=(j=t.parameters)==null?void 0:j.docs)==null?void 0:O.source},description:{story:`Трёхуровневая шапка + слитые (spanGroupHeader) одиночные колонки по краям +
реордер колонок за шапку (columnsControl.reorderingHeader).`,...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};const Q=["SimpleTable","LeafSpanNextToGroup","TableDefaultSpan","AlignmentMatrix","ThreeLevelSpanReorder"],eu=Object.freeze(Object.defineProperty({__proto__:null,AlignmentMatrix:a,LeafSpanNextToGroup:r,SimpleTable:n,TableDefaultSpan:o,ThreeLevelSpanReorder:t,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{eu as T};
