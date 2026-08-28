import{r as n,d as u}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import l from"./DocStoryTemplate-Dyp-m10i.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{T as y}from"./TableCanvas-BzdQHG7o.js";const p={title:"Локальные компоненты/TableCanvas/KeyText",tags:["!autodocs"],parameters:{docs:{page:l}}},T=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,e={...c({preCode:T,previewSource:"shown"}),name:"Ключ текст",render:()=>{const[a]=n.useState(m),s=n.useMemo(()=>[{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:i})=>String(i.id)}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(y,{tableConfig:{containerStyle:{height:700},keyText:!0},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.KeyText/TableCanvas.keyText.stories.tsx",lineNumber:62,columnNumber:7},void 0)}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const d=["KeyTextTable"],x=Object.freeze(Object.defineProperty({__proto__:null,KeyTextTable:e,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{x as T};
