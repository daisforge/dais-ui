import{j as u,r as t}from"./react-CAOzMBF_.js";import{c as y}from"./tableData-DVJFoYoT.js";import k from"./DocStoryTemplate-Cf946dgV.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{S as D}from"./FiltersActions-BWfcXHB3.js";import{T as F,C as s}from"./TableCanvas-DlX-Wh2b.js";import{l as b,m as v}from"./TableGlide-DbDA-PPi.js";const T={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:k}}},A=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,z=y(0,40),i={id:"",tr:""},r={...C({preCode:A,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[a]=t.useState(y),[o,S]=t.useState(!0),B=t.useState(i),f=t.useState([]),w=t.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"id",valueInRow:n=>String(n.id),filter:"startWith"}},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsx(s.Container,{padding:{left:8,right:8},children:u.jsx(s.Text,{color:v.accentColor,font:b.bodyXSBold,children:"кастомный name"})}),children:[{key:"tr",name:"TR",width:130,resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"tr",valueInRow:n=>n.tr,filter:"startWith"}}]}],[]);return u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsx(D,{checked:o,onChange:n=>S(n.target.checked),label:"columnsGrouping.squashEmptyCells"})}),u.jsx(F,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:o},columnsControl:{enable:!0},resizableColumn:!0,sorting:{state:f},filtering:{state:B,clearedValue:i}},columnConfig:w,rows:a})]})}},e={...C({preCode:A,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const a=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsx(F,{tableConfig:{containerStyle:{height:320}},columnConfig:a,rows:z})}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,p,g,E;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(h=e.parameters)==null?void 0:h.docs)==null?void 0:p.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(E=(g=e.parameters)==null?void 0:g.docs)==null?void 0:E.description}}};const q=["Playground","HeaderAlign"],L=Object.freeze(Object.defineProperty({__proto__:null,HeaderAlign:e,Playground:r,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{L as T};
