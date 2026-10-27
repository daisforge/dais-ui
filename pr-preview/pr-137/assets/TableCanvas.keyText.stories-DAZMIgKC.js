import{r as n,j as m}from"./react-CAOzMBF_.js";import{c as u}from"./tableData-DVJFoYoT.js";import l from"./DocStoryTemplate-Cf946dgV.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{T as p}from"./TableCanvas-DlX-Wh2b.js";const y={title:"Локальные компоненты/TableCanvas/KeyText",tags:["!autodocs"],parameters:{docs:{page:l}}},T=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,e={...c({preCode:T,previewSource:"shown"}),name:"Ключ текст",render:()=>{const[a]=n.useState(u),s=n.useMemo(()=>[{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:i})=>String(i.id)}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return m.jsx(p,{tableConfig:{containerStyle:{height:700},keyText:!0},columnConfig:s,rows:a})}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Ключ текст',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'task',
      name: 'Title',
      keyText: {
        key: 'kek',
        name: 'Ключ - Title',
        renderCell: ({
          row
        }) => String(row.id)
      }
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      keyText: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const C=["KeyTextTable"],S=Object.freeze(Object.defineProperty({__proto__:null,KeyTextTable:e,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{S as T};
