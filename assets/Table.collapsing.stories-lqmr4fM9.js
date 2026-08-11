import{r as a,d as l}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import y from"./DocStoryTemplate-DwKiq8z4.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-ocwmzH40.js";import{b as T}from"./@salutejs/sdds-finai-DFCsnlGS.js";const h={title:"Локальные компоненты/Table/Collapsing",tags:["!autodocs"],parameters:{docs:{page:y}}},b=`
import { ColumnConfig, Table } from '@daisforge/ui';

`,n={name:"Collapse тела таблицы (внутреннее состояние)",...g({preCode:b,previewSource:"shown"}),render:()=>{const[u]=a.useState(m),e=a.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsxDEV(C,{tableConfig:{containerStyle:{height:"400px"},collapsing:{enableCollapse:!0,defaultCollapsed:!0,expandText:"Развернуть информацию",collapseText:"Свернуть информацию"}},columnConfig:e,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.collapsing/Table.collapsing.stories.tsx",lineNumber:59,columnNumber:7},void 0)}},o={name:"Collapse тела таблицы (внешнее состояние)",...g({preCode:b,previewSource:"shown"}),render:()=>{const[u]=a.useState(m),[e,s]=a.useState(!0),x=a.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxDEV(T,{onClick:()=>s(!e),children:e?"Развернуть таблицу":"Свернуть таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.collapsing/Table.collapsing.stories.tsx",lineNumber:108,columnNumber:9},void 0),l.jsxDEV(C,{tableConfig:{containerStyle:{height:"300px"},collapsing:{enableCollapse:!0,collapsedState:[e,s],domMetadata:{className:"testClassNameForCollapsing",dataAttributes:{"data-test-collapsing":"test-collapsing"}},onToggleCollapse:f=>console.debug("Table collapsed:",f)}},columnConfig:x,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.collapsing/Table.collapsing.stories.tsx",lineNumber:111,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.collapsing/Table.collapsing.stories.tsx",lineNumber:107,columnNumber:7},void 0)}};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Collapse тела таблицы (внутреннее состояние)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      minWidth: 200,
      width: 300,
      maxWidth: 500
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: '400px'
      },
      collapsing: {
        enableCollapse: true,
        defaultCollapsed: true,
        expandText: 'Развернуть информацию',
        collapseText: 'Свернуть информацию'
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Collapse тела таблицы (внешнее состояние)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [externalCollapsed, setExternalCollapsed] = useState(true);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      minWidth: 200,
      width: 300,
      maxWidth: 500
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={() => setExternalCollapsed(!externalCollapsed)}>
          {externalCollapsed ? 'Развернуть таблицу' : 'Свернуть таблицу'}
        </Button>
        <Table tableConfig={{
        containerStyle: {
          height: '300px'
        },
        collapsing: {
          enableCollapse: true,
          collapsedState: [externalCollapsed, setExternalCollapsed],
          domMetadata: {
            className: 'testClassNameForCollapsing',
            dataAttributes: {
              'data-test-collapsing': 'test-collapsing'
            }
          },
          onToggleCollapse: collapsed =>
          // eslint-disable-next-line no-console
          console.debug('Table collapsed:', collapsed)
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const k=["InternalStateCollapsing","ExternalStateCollapsing"],B=Object.freeze(Object.defineProperty({__proto__:null,ExternalStateCollapsing:o,InternalStateCollapsing:n,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{B as T};
