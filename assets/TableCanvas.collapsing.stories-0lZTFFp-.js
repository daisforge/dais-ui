import{r as o,d as s}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import y from"./DocStoryTemplate-CASIwyN3.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-Lx52Eqqy.js";import{b as T}from"./@salutejs/sdds-finai-rsluPq8z.js";const v={title:"Локальные компоненты/TableCanvas/Collapsing",tags:["!autodocs"],parameters:{docs:{page:y}}},b=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,n={name:"Collapse тела таблицы (внутреннее состояние)",...C({preCode:b,previewSource:"shown"}),render:()=>{const[l]=o.useState(m),e=o.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV(g,{tableConfig:{containerStyle:{height:"400px"},collapsing:{enableCollapse:!0,defaultCollapsed:!0,expandText:"Развернуть информацию",collapseText:"Свернуть информацию"}},columnConfig:e,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Collapsing/TableCanvas.collapsing.stories.tsx",lineNumber:59,columnNumber:7},void 0)}},a={name:"Collapse тела таблицы (внешнее состояние)",...C({preCode:b,previewSource:"shown"}),render:()=>{const[l]=o.useState(m),[e,u]=o.useState(!0),x=o.useMemo(()=>[{key:"id",name:"ID",minWidth:200,width:300,maxWidth:500},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[s.jsxDEV(T,{onClick:()=>u(!e),children:e?"Развернуть таблицу":"Свернуть таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Collapsing/TableCanvas.collapsing.stories.tsx",lineNumber:108,columnNumber:9},void 0),s.jsxDEV(g,{tableConfig:{containerStyle:{height:"300px"},collapsing:{enableCollapse:!0,collapsedState:[e,u],domMetadata:{className:"testClassNameForCollapsing",dataAttributes:{"data-test-collapsing":"test-collapsing"}},onToggleCollapse:f=>console.debug("Table collapsed:",f)}},columnConfig:x,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Collapsing/TableCanvas.collapsing.stories.tsx",lineNumber:111,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Collapsing/TableCanvas.collapsing.stories.tsx",lineNumber:107,columnNumber:7},void 0)}};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <TableCanvas tableConfig={{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const h=["InternalStateCollapsing","ExternalStateCollapsing"],B=Object.freeze(Object.defineProperty({__proto__:null,ExternalStateCollapsing:a,InternalStateCollapsing:n,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{B as T};
