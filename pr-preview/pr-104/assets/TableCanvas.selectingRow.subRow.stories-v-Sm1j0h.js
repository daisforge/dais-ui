import{r as n,d as w}from"./react-D2T61mpp.js";import{c as m}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-CxsDc38I.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-9ua_C1Jc.js";const p={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:b}}},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...d({preCode:C,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[u]=n.useState(m),a=n.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),i=n.useState(()=>new Set),l=e=>e.id!==2,c=e=>e.id===1;return w.jsxDEV(S,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:i,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:"all"},rowCheckboxDisabled:c,rowShowCheckbox:l}},columnConfig:a,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.subRow.stories.tsx",lineNumber:67,columnNumber:7},void 0)}};var s,t,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: 'all'
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const R=["SelectingRow"],v=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:o,__namedExportsOrder:R,default:p},Symbol.toStringTag,{value:"Module"}));export{v as T};
