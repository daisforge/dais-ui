import{r as o,d as u}from"./react-D2T61mpp.js";import{c as g}from"./tableData-DVJFoYoT.js";import I from"./DocStoryTemplate-BBdkpFVI.js";import{S as z}from"./StoryHint-D7Z2UPWM.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{S as j}from"./FiltersActions-DgFaRnkC.js";import{C as d,T as h}from"./TableCanvas-DCaOWbQ6.js";import{m as H,n as R}from"./TableGlide-CFT2aGOw.js";import{u1 as q}from"./@salutejs/plasma-icons-B2MmBGK5.js";const V={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:I}}},k=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  type GroupHeaderInfo,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,M=g(0,40),E={id:"",tr:""},l={...b({preCode:k,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[s]=o.useState(g),[t,m]=o.useState(!0),i=o.useState(E),c=o.useState([]),p=o.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"id",valueInRow:e=>String(e.id),filter:"startWith"}},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsxDEV(d.Container,{padding:{left:8,right:8},children:u.jsxDEV(d.Text,{color:R.accentColor,font:H.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:110,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:109,columnNumber:13},void 0),children:[{key:"tr",name:"TR",width:130,resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"tr",valueInRow:e=>e.tr,filter:"startWith"}}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsxDEV(j,{checked:t,onChange:e=>m(e.target.checked),label:"columnsGrouping.squashEmptyCells"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:148,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:140,columnNumber:9},void 0),u.jsxDEV(h,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:t},columnsControl:{enable:!0},resizableColumn:!0,sorting:{state:c},filtering:{state:i,clearedValue:E}},columnConfig:p,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:154,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:139,columnNumber:7},void 0)}},r={...b({preCode:k,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const s=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsxDEV(h,{tableConfig:{containerStyle:{height:320}},columnConfig:s,rows:M},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:218,columnNumber:7},void 0)}},a={...b({preCode:k,previewSource:"shown",type:"code"}),name:"Клик по заголовку группы",render:()=>{const[s]=o.useState(g),[t,m]=o.useState([]),i=e=>m(n=>[e,...n].slice(0,5)),c=({key:e,children:n})=>`группа «${e}», колонки: ${n.map(C=>C.key).join(", ")}`,p=o.useMemo(()=>[{key:"id",name:"ID",width:90},{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:200},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:u.jsxDEV(d.Container,{direction:"row",alignItems:"center",gap:4,padding:{left:8,right:8},children:[u.jsxDEV(d.Text,{font:H.bodyXSBold,children:"Прогресс"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:266,columnNumber:15},void 0),u.jsxDEV(d.IconButton,{icon:u.jsxDEV(q,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:270,columnNumber:23},void 0),view:"clear",buttonSize:"xs",interaction:{selection:"keep",cellClick:"stop"},onClick:()=>i("кнопка в заголовке группы «Прогресс»")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:269,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:260,columnNumber:13},void 0),children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV(z,{children:["Кликни по заголовку группы — придёт ",u.jsxDEV("code",{children:"onGroupHeaderClicked"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:290,columnNumber:47},void 0)," ","и выделятся её колонки. Правый клик —"," ",u.jsxDEV("code",{children:"onGroupHeaderContextMenu"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:292,columnNumber:11},void 0),". Кнопка-звёздочка в группе «Прогресс» обрабатывает клик сама и группу не выделяет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:289,columnNumber:9},void 0),u.jsxDEV("p",{style:{minHeight:100,fontSize:13,marginBottom:8},children:t.length===0?"событий пока нет":t.map((e,n)=>u.jsxDEV("span",{style:{display:"block"},children:e},n,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:300,columnNumber:17},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:295,columnNumber:9},void 0),u.jsxDEV(h,{tableConfig:{containerStyle:{height:400},rowMarkers:{startIndex:1},onGroupHeaderClicked:(e,n)=>i(`onGroupHeaderClicked: ${c(n)}`),onGroupHeaderContextMenu:(e,n,C)=>{C.preventDefault(),i(`onGroupHeaderContextMenu: ${c(n)}`)}},columnConfig:p,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:305,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:288,columnNumber:7},void 0)}};var y,v,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var F,B,w,A,D;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(B=r.parameters)==null?void 0:B.docs)==null?void 0:w.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var T,S,x,G,N;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    const describeGroup = ({
      key,
      children
    }: GroupHeaderInfo<Row>) => \`группа «\${key}», колонки: \${children.map(child => child.key).join(', ')}\`;
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
      name: <Canvas.Container direction="row" alignItems="center" gap={4} padding={{
        left: 8,
        right: 8
      }}>
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
        onGroupHeaderClicked: (_colIndex, group) => pushLog(\`onGroupHeaderClicked: \${describeGroup(group)}\`),
        onGroupHeaderContextMenu: (_colIndex, group, event) => {
          event.preventDefault();
          pushLog(\`onGroupHeaderContextMenu: \${describeGroup(group)}\`);
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:"Клик и контекстное меню по заголовку группы: `tableConfig.onGroupHeaderClicked` и\n`onGroupHeaderContextMenu` (во втором аргументе — `key` и `children` группы). Кнопка внутри заголовка\nгруппы с `interaction` получает клик сама: группа не выделяется, обработчик группы\nне вызывается.",...(N=(G=a.parameters)==null?void 0:G.docs)==null?void 0:N.description}}};const L=["Playground","HeaderAlign","GroupHeaderClick"],U=Object.freeze(Object.defineProperty({__proto__:null,GroupHeaderClick:a,HeaderAlign:r,Playground:l,__namedExportsOrder:L,default:V},Symbol.toStringTag,{value:"Module"}));export{U as T};
