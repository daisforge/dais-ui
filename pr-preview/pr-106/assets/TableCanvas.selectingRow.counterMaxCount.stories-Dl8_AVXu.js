import{r as n,d as l}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import d from"./DocStoryTemplate-B1etLSsv.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as E}from"./TableCanvas-owO2WxZ7.js";const B={title:"Локальные компоненты/TableCanvas/SelectingRow/CounterMaxCount",tags:["!autodocs"],parameters:{docs:{page:d}}},D=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
`,u={...p({preCode:D,previewSource:"shown",type:"code"}),name:"Ограничение счётчика (99+)",render:()=>{const[t]=n.useState(()=>C()),c=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача"},{key:"priority",name:"Приоритет"}],[]),m=n.useState(()=>new Set(t.map(e=>e.id)));return l.jsxDEV(E,{tableConfig:{containerStyle:{height:"700px"},selecting:{state:m,rowKeyGetter:e=>e.id,summaryCounterMaxCount:99},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт выбранных строк")}]}}},columnConfig:c,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.counterMaxCount.stories.tsx",lineNumber:53,columnNumber:7},void 0)}};var o,r,a,s,i;u.parameters={...u.parameters,docs:{...(o=u.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Ограничение счётчика (99+)',
  render: () => {
    const [rows] = useState(() => createRows()); // 200 строк

    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Задача'
    }, {
      key: 'priority',
      name: 'Приоритет'
    }], []);

    // Изначально выбираем все строки, чтобы счётчик сразу показал «99+».
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set(rows.map(r => r.id)));
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id,
        // 👇 то, ради чего пример: при > 99 выбранных счётчик покажет «99+»
        summaryCounterMaxCount: 99
      },
      controlBlock: {
        massActionPanel: {
          buttons: [{
            type: 'button',
            text: 'Экспорт',
            view: 'secondary',
            onClick: () => alert('Экспорт выбранных строк')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(a=(r=u.parameters)==null?void 0:r.docs)==null?void 0:a.source},description:{story:`tableConfig.selecting.summaryCounterMaxCount ограничивает отображаемое число в
счётчике выбранных строк. Здесь выбрано 200 строк, а maxCount = 99 — счётчик
(и в шапке, и в панели массовых действий) показывает «99+». Снимите часть
выделения, чтобы увидеть точное число, когда оно станет ≤ 99.`,...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.description}}};const y=["CounterMaxCount"],b=Object.freeze(Object.defineProperty({__proto__:null,CounterMaxCount:u,__namedExportsOrder:y,default:B},Symbol.toStringTag,{value:"Module"}));export{b as T};
