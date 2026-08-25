import{d as u,r as o}from"./react-D2T61mpp.js";import{c as F}from"./tableData-UCfjiBCh.js";import k from"./DocStoryTemplate-CASIwyN3.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{S as v}from"./FiltersActions-BnZ1Tu-9.js";import{T as g,C as r}from"./TableCanvas-C5meCGeK.js";import{j as f,k as w}from"./TableGlide-CTcXq6RC.js";const T={title:"Локальные компоненты/TableCanvas/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:k}}},B=`
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,x=F(0,40),e={...b({preCode:B,previewSource:"shown",type:"code"}),name:"Группировка (squash)",render:()=>{const[a]=o.useState(F),[s,y]=o.useState(!0),A=o.useMemo(()=>[{key:"id",name:"ID",width:90,resizable:!0},{key:"metrics",name:"Показатели",children:[{key:"sales",name:"Продажи",children:[{key:"task",name:"План",width:150,resizable:!0},{key:"priority",name:"Факт",width:130,resizable:!0}]},{key:"grade",name:"Оценка",children:[{key:"issueType",name:"Инд",width:120,resizable:!0},{key:"developer",name:"Кол",width:120,resizable:!0},{key:"complete",name:"Итог",width:120,resizable:!0}]}]},{key:"pppp",name:u.jsxDEV(r.Container,{padding:{left:8,right:8},children:u.jsxDEV(r.Text,{color:w.accentColor,font:f.bodyXSBold,children:"кастомный name"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:88,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:87,columnNumber:13},void 0),children:[{key:"tr",name:"TR",width:130,resizable:!0}]}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:u.jsxDEV(v,{checked:s,onChange:D=>y(D.target.checked),label:"columnsGrouping.squashEmptyCells"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:112,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:104,columnNumber:9},void 0),u.jsxDEV(g,{tableConfig:{containerStyle:{height:340},columnsGrouping:{squashEmptyCells:s},columnsControl:{enable:!0},resizableColumn:!0},columnConfig:A,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:118,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},n={...b({preCode:B,previewSource:"shown",type:"code"}),name:"Выравнивание заголовка",render:()=>{const a=[{key:"id",name:"top-left",width:200,squashedHeaderAlign:{horizontal:"left",vertical:"top"}},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110}]}]},{key:"shallow",name:"bottom-right",squashedHeaderAlign:{horizontal:"right",vertical:"bottom"},children:[{key:"complete",name:"C",width:240}]}];return u.jsxDEV(g,{tableConfig:{containerStyle:{height:320}},columnConfig:a,rows:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsGrouping/TableCanvas.columnsGrouping.stories.tsx",lineNumber:177,columnNumber:7},void 0)}};var t,i,l,m,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Группировка (squash)',
  render: () => {
    const [rows] = useState(createRows);
    const [squash, setSquash] = useState(true);
    const columnConfig = useMemo<ColumnOrColumnGroupConfig<Row>[]>(() => [
    // Одиночная колонка без группы: при squash её шапка тянется вверх.
    {
      key: 'id',
      name: 'ID',
      width: 90,
      resizable: true
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
        resizable: true
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
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"Playground группировки. `tableConfig.columnsGrouping.squashEmptyCells` (по умолчанию\nвключено) схлопывает пустые ячейки шапки: одиночная колонка без группы тянется вверх,\n«мелкая» группа (у которой под шапкой нет более глубоких подгрупп) тянется вниз.\nПереключатель включает и выключает поведение, видно, как появляются и исчезают пустые\nполосы. Также здесь: кастомный `name` группы (canvas-элемент), реордер колонок за шапку.",...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var d,p,E,C,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(p=n.parameters)==null?void 0:p.docs)==null?void 0:E.source},description:{story:"Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:\nleft/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и\nна группе. Действует, когда шапка слита (squash включён по умолчанию).",...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};const S=["Playground","HeaderAlign"],V=Object.freeze(Object.defineProperty({__proto__:null,HeaderAlign:n,Playground:e,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{V as T};
