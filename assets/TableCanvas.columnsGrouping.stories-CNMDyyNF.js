import{r as t,j as u}from"./react-CAOzMBF_.js";import{c as g}from"./tableData-DVJFoYoT.js";import z from"./DocStoryTemplate-DUx_jmLE.js";import{S as j}from"./StoryHint-AurwRlnz.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{S as R}from"./FiltersActions-D4RaGyyv.js";import{C as c,T as C}from"./TableCanvas-CSCA2r7R.js";import{r as T,t as q}from"./TableGlide-CyG6pC1k.js";import{u2 as M}from"./@salutejs/plasma-icons-DBF9uERs.js";const L={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:z}}},y=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  type GroupHeaderInfo,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,_=g(0,40),F={id:"",tr:""},l={...E({preCode:y,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[a]=t.useState(g),[i,m]=t.useState(!0),s=t.useState(F),d=t.useState([]),p=t.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"id",valueInRow:e=>String(e.id),filter:"startWith"}},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsx(c.Container,{padding:{left:8,right:8},children:u.jsx(c.Text,{color:q.accentColor,font:T.bodyXSBold,children:"кастомный name"})}),children:[{key:"tr",name:"TR",width:130,resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"tr",valueInRow:e=>e.tr,filter:"startWith"}}]}],[]);return u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsx(R,{checked:i,onChange:e=>m(e.target.checked),label:"columnsGrouping.squashEmptyCells"})}),u.jsx(C,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:i},columnsControl:{enable:!0},resizableColumn:!0,sorting:{state:d},filtering:{state:s,clearedValue:F}},columnConfig:p,rows:a})]})}},r={...E({preCode:y,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const a=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsx(C,{tableConfig:{containerStyle:{height:320}},columnConfig:a,rows:_})}},o={...E({preCode:y,previewSource:"shown",type:"code"}),name:"Клик по заголовку группы",render:()=>{const[a]=t.useState(g),[i,m]=t.useState([]),s=e=>m(n=>[e,...n].slice(0,5)),d=({key:e,children:n})=>`группа «${e}», колонки: ${n.map(h=>h.key).join(", ")}`,p=t.useMemo(()=>[{key:"id",name:"ID",width:90},{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:200},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:u.jsxs(c.Container,{direction:"row",alignItems:"center",gap:4,padding:{left:8,right:8},children:[u.jsx(c.Text,{font:T.bodyXSBold,children:"Прогресс"}),u.jsx(c.IconButton,{icon:u.jsx(M,{}),view:"clear",buttonSize:"xs",interaction:{selection:"keep",cellClick:"stop"},onClick:()=>s("кнопка в заголовке группы «Прогресс»")})]}),children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}],[]);return u.jsxs("div",{children:[u.jsxs(j,{children:["Кликни по заголовку группы — придёт ",u.jsx("code",{children:"onGroupHeaderClicked"})," ","и выделятся её колонки. Правый клик —"," ",u.jsx("code",{children:"onGroupHeaderContextMenu"}),". Кнопка-звёздочка в группе «Прогресс» обрабатывает клик сама и группу не выделяет."]}),u.jsx("p",{style:{minHeight:100,fontSize:13,marginBottom:8},children:i.length===0?"событий пока нет":i.map((e,n)=>u.jsx("span",{style:{display:"block"},children:e},n))}),u.jsx(C,{tableConfig:{containerStyle:{height:400},rowMarkers:{startIndex:1},onGroupHeaderClicked:(e,n)=>s(`onGroupHeaderClicked: ${d(n)}`),onGroupHeaderContextMenu:(e,n,h)=>{h.preventDefault(),s(`onGroupHeaderContextMenu: ${d(n)}`)}},columnConfig:p,rows:a})]})}};var B,A,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var S,w,f,D,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.description}}};var x,v,G,H,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(G=(v=o.parameters)==null?void 0:v.docs)==null?void 0:G.source},description:{story:"Клик и контекстное меню по заголовку группы: `tableConfig.onGroupHeaderClicked` и\n`onGroupHeaderContextMenu` (во втором аргументе — `key` и `children` группы). Кнопка внутри заголовка\nгруппы с `interaction` получает клик сама: группа не выделяется, обработчик группы\nне вызывается.",...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const $=["Playground","HeaderAlign","GroupHeaderClick"],U=Object.freeze(Object.defineProperty({__proto__:null,GroupHeaderClick:o,HeaderAlign:r,Playground:l,__namedExportsOrder:$,default:L},Symbol.toStringTag,{value:"Module"}));export{U as T};
