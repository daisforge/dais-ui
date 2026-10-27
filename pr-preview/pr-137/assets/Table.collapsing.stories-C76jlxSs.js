import{r as t,j as u}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import S from"./DocStoryTemplate-Cf946dgV.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{f as g}from"./Table-BQHrw1K6.js";import{t as h}from"./@salutejs/sdds-finai-CKhMjg07.js";const w={title:"Локальные компоненты/Table/Collapsing",tags:["!autodocs"],parameters:{docs:{page:S}}},x=`
import { ColumnConfig, Table } from '@daisforge/ui';

`,n={name:"Collapse тела таблицы (внутреннее состояние)",...C({preCode:x,previewSource:"shown"}),render:()=>{const[a]=t.useState(m),e=t.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsx(g,{tableConfig:{containerStyle:{height:"400px"},collapsing:{enableCollapse:!0,defaultCollapsed:!0,expandText:"Развернуть информацию",collapseText:"Свернуть информацию"}},columnConfig:e,rows:a})}},o={name:"Collapse тела таблицы (внешнее состояние)",...C({preCode:x,previewSource:"shown"}),render:()=>{const[a]=t.useState(m),[e,l]=t.useState(!0),y=t.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx(h,{onClick:()=>l(!e),children:e?"Развернуть таблицу":"Свернуть таблицу"}),u.jsx(g,{tableConfig:{containerStyle:{height:"300px"},collapsing:{enableCollapse:!0,collapsedState:[e,l],domMetadata:{className:"testClassNameForCollapsing",dataAttributes:{"data-test-collapsing":"test-collapsing"}},onToggleCollapse:f=>console.debug("Table collapsed:",f)}},columnConfig:y,rows:a})]})}};var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["InternalStateCollapsing","ExternalStateCollapsing"],v=Object.freeze(Object.defineProperty({__proto__:null,ExternalStateCollapsing:o,InternalStateCollapsing:n,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{v as T};
