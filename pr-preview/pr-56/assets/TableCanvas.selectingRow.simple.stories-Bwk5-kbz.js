import{r as n,d as s}from"./react-D2T61mpp.js";import{c as u}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-Ch8Ys4K9.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as p}from"./TableCanvas-DMTLoeeS.js";const w={title:"Локальные компоненты/TableCanvas/SelectingRow/Simple",tags:["!autodocs"],parameters:{docs:{page:m}}},S=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...d({preCode:S,previewSource:"shown"}),name:"Простой пример",render:()=>{const[i]=n.useState(u),l=n.useMemo(()=>[{key:"id",name:"ID"},{key:"issueType",name:"issue"},{key:"developer",name:"Developer"}],[]),c=n.useState(()=>new Set);return s.jsxDEV("div",{children:s.jsxDEV(p,{tableConfig:{containerStyle:{height:"700px"},selecting:{rowCheckboxDisabled:e=>e.id===2,rowShowCheckbox:e=>e.id!==3,state:c,rowKeyGetter:e=>e.id+e.issueType}},columnConfig:l,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.simple.stories.tsx",lineNumber:58,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.simple.stories.tsx",lineNumber:57,columnNumber:7},void 0)}};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простой пример',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'issueType',
      name: 'issue'
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '700px'
        },
        selecting: {
          rowCheckboxDisabled: row => row.id === 2,
          rowShowCheckbox: row => row.id !== 3,
          state: selectingRowStateAndSetter,
          rowKeyGetter: r => r.id + r.issueType
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["SelectingRow"],T=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:o,__namedExportsOrder:g,default:w},Symbol.toStringTag,{value:"Module"}));export{T as S};
