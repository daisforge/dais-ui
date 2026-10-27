import{r as n,j as l}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import p from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as E}from"./TableCanvas-DlX-Wh2b.js";const B={title:"Локальные компоненты/TableCanvas/SelectingRow/CounterMaxCount",tags:["!autodocs"],parameters:{docs:{page:p}}},y=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
`,u={...d({preCode:y,previewSource:"shown",type:"code"}),name:"Ограничение счётчика (99+)",render:()=>{const[t]=n.useState(()=>C()),i=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Задача"},{key:"priority",name:"Приоритет"}],[]),m=n.useState(()=>new Set(t.map(e=>e.id)));return l.jsx(E,{tableConfig:{containerStyle:{height:"700px"},selecting:{state:m,rowKeyGetter:e=>e.id,summaryCounterMaxCount:99},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт выбранных строк")}]}}},columnConfig:i,rows:t})}};var o,r,a,s,c;u.parameters={...u.parameters,docs:{...(o=u.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
выделения, чтобы увидеть точное число, когда оно станет ≤ 99.`,...(c=(s=u.parameters)==null?void 0:s.docs)==null?void 0:c.description}}};const D=["CounterMaxCount"],b=Object.freeze(Object.defineProperty({__proto__:null,CounterMaxCount:u,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{b as T};
