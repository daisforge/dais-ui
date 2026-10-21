import{r as n,d as u}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import N from"./DocStoryTemplate-CnJlkrRG.js";import{S as H}from"./StoryHint-D7Z2UPWM.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{S as I}from"./FiltersActions-Ckc-8Z8F.js";import{C as d,T as g}from"./TableCanvas-BM21vy2M.js";import{l as G,m as z}from"./TableGlide-BdZMuz5a.js";import{u1 as j}from"./@salutejs/plasma-icons-lvaNTfmN.js";const q={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:N}}},b=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,R=p(0,40),h={id:"",tr:""},l={...C({preCode:b,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[s]=n.useState(p),[t,m]=n.useState(!0),i=n.useState(h),c=n.useState([]),o=n.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"id",valueInRow:e=>String(e.id),filter:"startWith"}},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsxDEV(d.Container,{padding:{left:8,right:8},children:u.jsxDEV(d.Text,{color:z.accentColor,font:G.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:108,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:107,columnNumber:13},void 0),children:[{key:"tr",name:"TR",width:130,resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"tr",valueInRow:e=>e.tr,filter:"startWith"}}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsxDEV(I,{checked:t,onChange:e=>m(e.target.checked),label:"columnsGrouping.squashEmptyCells"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:146,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:138,columnNumber:9},void 0),u.jsxDEV(g,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:t},columnsControl:{enable:!0},resizableColumn:!0,sorting:{state:c},filtering:{state:i,clearedValue:h}},columnConfig:o,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:152,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:137,columnNumber:7},void 0)}},r={...C({preCode:b,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const s=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsxDEV(g,{tableConfig:{containerStyle:{height:320}},columnConfig:s,rows:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:216,columnNumber:7},void 0)}},a={...C({preCode:b,previewSource:"shown",type:"code"}),name:"Клик по заголовку группы",render:()=>{const[s]=n.useState(p),[t,m]=n.useState([]),i=o=>m(e=>[o,...e].slice(0,5)),c=n.useMemo(()=>[{key:"id",name:"ID",width:90},{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:200},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:u.jsxDEV(d.Container,{direction:"row",alignItems:"center",gap:4,children:[u.jsxDEV(d.Text,{font:G.bodyXSBold,children:"Прогресс"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:255,columnNumber:15},void 0),u.jsxDEV(d.IconButton,{icon:u.jsxDEV(j,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:259,columnNumber:23},void 0),view:"clear",buttonSize:"xs",interaction:{selection:"keep",cellClick:"stop"},onClick:()=>i("кнопка в заголовке группы «Прогресс»")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:258,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:254,columnNumber:13},void 0),children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV(H,{children:["Кликни по заголовку группы — придёт ",u.jsxDEV("code",{children:"onGroupHeaderClicked"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:279,columnNumber:47},void 0)," ","и выделятся её колонки. Правый клик —"," ",u.jsxDEV("code",{children:"onGroupHeaderContextMenu"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:281,columnNumber:11},void 0),". Кнопка-звёздочка в группе «Прогресс» обрабатывает клик сама и группу не выделяет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:278,columnNumber:9},void 0),u.jsxDEV("p",{style:{minHeight:100,fontSize:13,marginBottom:8},children:t.length===0?"событий пока нет":t.map((o,e)=>u.jsxDEV("span",{style:{display:"block"},children:o},e,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:289,columnNumber:17},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:284,columnNumber:9},void 0),u.jsxDEV(g,{tableConfig:{containerStyle:{height:400},rowMarkers:{startIndex:1},onGroupHeaderClicked:(o,e)=>i(`onGroupHeaderClicked: группа «${e.group}»`),onGroupHeaderContextMenu:(o,e)=>{e.preventDefault(),i(`onGroupHeaderContextMenu: группа «${e.group}»`)}},columnConfig:c,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:294,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:277,columnNumber:7},void 0)}};var k,E,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Группировка (squash)',
  render: () => {
    const [rows] = useState(createRows);
    const [squash, setSquash] = useState(true);
    const filteringStateAndSetter = useState(CLEARED_FILTERS);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const columnConfig = useMemo<ColumnOrColumnGroupConfig<Row>[]>(() => [
    // Одиночная колонка без группы: при squash её шапка тянется вверх.
    {
      key: 'id',
      name: 'ID',
      width: 90,
      resizable: true,
      sortingType: 'numberSort',
      filtering: {
        component: 'input',
        keyInFilterState: 'id',
        valueInRow: r => String(r.id),
        filter: 'startWith'
      }
    },
    // Глубокая группа (3 уровня) для реордера.
    {
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
    },
    // «Мелкая» группа с кастомным canvas-name: при squash тянется вниз
    // (под шапкой нет подгрупп, иначе была бы пустая полоса).
    {
      key: 'pppp',
      name: <Canvas.Container padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Text color={tableCanvasTheme.accentColor} font={tableCanvasFonts.bodyXSBold}>
                кастомный name
              </Canvas.Text>
            </Canvas.Container>,
      children: [{
        key: 'tr',
        name: 'TR',
        width: 130,
        resizable: true,
        sortingType: 'stringSort',
        filtering: {
          component: 'input',
          keyInFilterState: 'tr',
          valueInRow: r => r.tr,
          filter: 'startWith'
        }
      }]
    }], []);
    return <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }}>
          <Switch checked={squash} onChange={e => setSquash(e.target.checked)} label="columnsGrouping.squashEmptyCells" />
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 340
        },
        columnsGrouping: {
          squashEmptyCells: squash
        },
        columnsControl: {
          enable: true
        },
        resizableColumn: true,
        sorting: {
          state: sortingStateAndSetter
        },
        filtering: {
          state: filteringStateAndSetter,
          clearedValue: CLEARED_FILTERS
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var y,f,F,B,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Выравнивание заголовка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
    // Лист без группы: выравнивание на колонке. Имя короткое, колонка широкая,
    // чтобы было видно позицию текста.
    {
      key: 'id',
      name: 'top-left',
      width: 200,
      squashedHeaderAlign: {
        horizontal: 'left',
        vertical: 'top'
      }
    },
    // Глубокая группа задаёт третий уровень, чтобы соседняя группа стала «мелкой».
    {
      key: 'deep',
      name: 'Глубокая',
      children: [{
        key: 'sub',
        name: 'Подгруппа',
        children: [{
          key: 'task',
          name: 'A',
          width: 110
        }, {
          key: 'priority',
          name: 'B',
          width: 110
        }]
      }]
    },
    // Мелкая группа (сливается вниз): выравнивание на группе. Колонка широкая,
    // чтобы короткое имя было видно прижатым вниз-вправо.
    {
      key: 'shallow',
      name: 'bottom-right',
      squashedHeaderAlign: {
        horizontal: 'right',
        vertical: 'bottom'
      },
      children: [{
        key: 'complete',
        name: 'C',
        width: 240
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      }
    }} columnConfig={columnConfig} rows={spanRows} />;
  }
}`,...(F=(f=r.parameters)==null?void 0:f.docs)==null?void 0:F.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(w=(B=r.parameters)==null?void 0:B.docs)==null?void 0:w.description}}};var A,D,T,S,x;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Клик по заголовку группы',
  render: () => {
    const [rows] = useState(createRows);
    const [log, setLog] = useState<string[]>([]);
    const pushLog = (message: string) => setLog(prev => [message, ...prev].slice(0, 5));
    const columnConfig = useMemo<ColumnOrColumnGroupConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 90
    }, {
      key: 'work',
      name: 'Работа',
      children: [{
        key: 'task',
        name: 'Задача',
        width: 200
      }, {
        key: 'priority',
        name: 'Приоритет',
        width: 140
      }]
    }, {
      key: 'progress',
      name: <Canvas.Container direction="row" alignItems="center" gap={4}>
              <Canvas.Text font={tableCanvasFonts.bodyXSBold}>
                Прогресс
              </Canvas.Text>
              <Canvas.IconButton icon={<IconStar />} view="clear" buttonSize="xs" interaction={{
          selection: 'keep',
          cellClick: 'stop'
        }} onClick={() => pushLog('кнопка в заголовке группы «Прогресс»')} />
            </Canvas.Container>,
      children: [{
        key: 'developer',
        name: 'Исполнитель',
        width: 160
      }, {
        key: 'complete',
        name: '% Готовности',
        width: 140
      }]
    }], []);
    return <div>
        <StoryHint>
          Кликни по заголовку группы — придёт <code>onGroupHeaderClicked</code>{' '}
          и выделятся её колонки. Правый клик —{' '}
          <code>onGroupHeaderContextMenu</code>. Кнопка-звёздочка в группе
          «Прогресс» обрабатывает клик сама и группу не выделяет.
        </StoryHint>
        <p style={{
        minHeight: 100,
        fontSize: 13,
        marginBottom: 8
      }}>
          {log.length === 0 ? 'событий пока нет' : log.map((line, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <span key={index} style={{
          display: 'block'
        }}>
                  {line}
                </span>)}
        </p>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 400
        },
        rowMarkers: {
          startIndex: 1
        },
        onGroupHeaderClicked: (_colIndex, event) => pushLog(\`onGroupHeaderClicked: группа «\${event.group}»\`),
        onGroupHeaderContextMenu: (_colIndex, event) => {
          event.preventDefault();
          pushLog(\`onGroupHeaderContextMenu: группа «\${event.group}»\`);
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(T=(D=a.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"Клик и контекстное меню по заголовку группы: `tableConfig.onGroupHeaderClicked` и\n`onGroupHeaderContextMenu` (в `event.group` — ключ группы). Кнопка внутри заголовка\nгруппы с `interaction` получает клик сама: группа не выделяется, обработчик группы\nне вызывается.",...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.description}}};const V=["Playground","HeaderAlign","GroupHeaderClick"],K=Object.freeze(Object.defineProperty({__proto__:null,GroupHeaderClick:a,HeaderAlign:r,Playground:l,__namedExportsOrder:V,default:q},Symbol.toStringTag,{value:"Module"}));export{K as T};
