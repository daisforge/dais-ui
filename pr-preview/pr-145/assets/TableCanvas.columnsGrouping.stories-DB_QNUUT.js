import{d as u,r as t}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import S from"./DocStoryTemplate-fXsRFEYa.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{S as w}from"./FiltersActions-nBCTBnD3.js";import{T as y,C as s}from"./TableCanvas-CBHVGFur.js";import{l as B,m as D}from"./TableGlide-CWOrlegB.js";const T={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:S}}},f=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,x=b(0,40),i={id:"",tr:""},r={...E({preCode:f,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[a]=t.useState(b),[o,F]=t.useState(!0),k=t.useState(i),v=t.useState([]),A=t.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"id",valueInRow:n=>String(n.id),filter:"startWith"}},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsxDEV(s.Container,{padding:{left:8,right:8},children:u.jsxDEV(s.Text,{color:D.accentColor,font:B.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:106,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:105,columnNumber:13},void 0),children:[{key:"tr",name:"TR",width:130,resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"tr",valueInRow:n=>n.tr,filter:"startWith"}}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsxDEV(w,{checked:o,onChange:n=>F(n.target.checked),label:"columnsGrouping.squashEmptyCells"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:144,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:136,columnNumber:9},void 0),u.jsxDEV(y,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:o},columnsControl:{enable:!0},resizableColumn:!0,sorting:{state:v},filtering:{state:k,clearedValue:i}},columnConfig:A,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:150,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:135,columnNumber:7},void 0)}},e={...E({preCode:f,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const a=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsxDEV(y,{tableConfig:{containerStyle:{height:320}},columnConfig:a,rows:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:214,columnNumber:7},void 0)}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,h,g,C;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.description}}};const G=["Playground","HeaderAlign"],_=Object.freeze(Object.defineProperty({__proto__:null,HeaderAlign:e,Playground:r,__namedExportsOrder:G,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as T};
