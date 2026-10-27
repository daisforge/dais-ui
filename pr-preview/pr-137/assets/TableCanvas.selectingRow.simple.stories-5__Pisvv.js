import{r as n,j as t}from"./react-CAOzMBF_.js";import{c as l}from"./tableData-DVJFoYoT.js";import m from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as p}from"./TableCanvas-DlX-Wh2b.js";const S={title:"Локальные компоненты/TableCanvas/SelectingRow/Simple",tags:["!autodocs"],parameters:{docs:{page:m}}},w=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...d({preCode:w,previewSource:"shown"}),name:"Простой пример",render:()=>{const[i]=n.useState(l),c=n.useMemo(()=>[{key:"id",name:"ID"},{key:"issueType",name:"issue"},{key:"developer",name:"Developer"}],[]),u=n.useState(()=>new Set);return t.jsx("div",{children:t.jsx(p,{tableConfig:{containerStyle:{height:"700px"},selecting:{rowCheckboxDisabled:e=>e.id===2,rowShowCheckbox:e=>e.id!==3,state:u,rowKeyGetter:e=>e.id+e.issueType}},columnConfig:c,rows:i})})}};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const g=["SelectingRow"],h=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:o,__namedExportsOrder:g,default:S},Symbol.toStringTag,{value:"Module"}));export{h as S};
