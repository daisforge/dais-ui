import{r as a,d as e}from"./react-D2T61mpp.js";import{c as T}from"./tableData-UCfjiBCh.js";import R from"./DocStoryTemplate-DgnSsvAh.js";import{f as c}from"./Table-C0sPjEkj.js";import{T as d}from"./TableCanvas-gKY-SjsO.js";import{T as u}from"./TableTabs-BnEj0R4l.js";import{cL as _,y as m}from"./@salutejs/sdds-themes-DJNx_lJj.js";import"./@salutejs/sdds-finai-Dy07Vhqq.js";import{bs as F}from"./vendor-DFDWE34s.js";const H={title:"Локальные компоненты/TableTabs",tags:["!autodocs"],parameters:{docs:{page:R,toc:!0}}},t={name:"Table в табах",render:()=>{const[n]=a.useState(T),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[i,o]=a.useState("1");return e.jsxDEV(u,{activeTabIdState:[i,o],tabs:[{tabId:"1",label:"Таб 1"},{tabId:"2",label:"Таб 2"},{tabId:"3",label:"Скелетон"}],children:[e.jsxDEV(u.TabPanel,{tabId:"1",children:e.jsxDEV(c,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:61,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:60,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"2",children:e.jsxDEV(c,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"3",children:e.jsxDEV(F,{width:"100%",height:600},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:75,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:52,columnNumber:7},void 0)}},r={name:"TableCanvas в табах",render:()=>{const[n]=a.useState(T),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[i,o]=a.useState("1");return e.jsxDEV(u,{activeTabIdState:[i,o],tabs:[{tabId:"1",label:"Таб 1"},{tabId:"2",label:"Таб 2"},{tabId:"3",label:"Скелетон"}],children:[e.jsxDEV(u.TabPanel,{tabId:"1",children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:115,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:114,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"2",children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:125,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:124,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"3",children:e.jsxDEV(F,{width:"100%",height:600},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:135,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:134,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},l={name:"TableCanvas без заданого статичного размера, на доступную высоту",render:()=>{const[n]=a.useState(T),s=a.useMemo(()=>[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:280},{key:"priority",name:"Priority",width:160},{key:"issueType",name:"Issue Type",width:160},{key:"developer",name:"Developer"}],[]),[i,o]=a.useState("all");return e.jsxDEV("div",{style:{height:760,padding:24,boxSizing:"border-box",display:"flex",flexDirection:"column",gap:16,minHeight:0,background:_},children:[e.jsxDEV("div",{style:{flexShrink:0,display:"flex",flexDirection:"column",gap:8},children:[e.jsxDEV("div",{style:{fontSize:28,fontWeight:600,lineHeight:"36px",color:m},children:"Реестр документов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:188,columnNumber:11},void 0),e.jsxDEV("div",{style:{fontSize:14,lineHeight:"20px",color:m},children:"Пример композиции, в которой TableTabs занимает доступную высоту страницы, а TableCanvas и sidebar остаются внутри своей области."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:198,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:180,columnNumber:9},void 0),e.jsxDEV(u,{activeTabIdState:[i,o],tabs:[{tabId:"all",label:"Все документы"},{tabId:"drafts",label:"Черновики"}],tabsAndPanelsContainerCss:{display:"flex",flexDirection:"column",flex:1,minHeight:0,minWidth:0,width:"100%","& .rdg__tabs-container":{flexShrink:0},"& .rdg__tab-panel":{display:"flex",flexDirection:"column",flex:1,minHeight:0,minWidth:0,width:"100%",overflow:"hidden"}},children:[e.jsxDEV(u.TabPanel,{tabId:"all",unmountOnClose:!1,children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:"100%"},fullScreenEnabled:!0,columnsControl:{enable:!0}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:238,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:237,columnNumber:11},void 0),e.jsxDEV(u.TabPanel,{tabId:"drafts",unmountOnClose:!1,children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:"100%"},fullScreenEnabled:!0,columnsControl:{enable:!0}},columnConfig:s,rows:n.slice(0,40)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:252,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:251,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:210,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:168,columnNumber:7},void 0)}},b={name:"Table + TableCanvas",render:()=>{const[n]=a.useState(T),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),i=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[o,M]=a.useState("table");return e.jsxDEV(u,{activeTabIdState:[o,M],tabs:[{tabId:"table",label:"Table (обычная)"},{tabId:"canvas",label:"TableCanvas (канвасная)"}],children:[e.jsxDEV(u.TabPanel,{tabId:"table",children:e.jsxDEV(c,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:315,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:314,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"canvas",children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:i,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:325,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:324,columnNumber:9},void 0),e.jsxDEV(u.TabPanel,{tabId:"canvas1",children:e.jsxDEV("div",{children:"test"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:335,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:334,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableTabs/TableTabs.stories.tsx",lineNumber:307,columnNumber:7},void 0)}};var f,y,k,p,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Table в табах',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
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
    const [activeTabId, setActiveTabId] = useState('1');
    return <TableTabs activeTabIdState={[activeTabId, setActiveTabId]} tabs={[{
      tabId: '1',
      label: 'Таб 1'
    }, {
      tabId: '2',
      label: 'Таб 2'
    }, {
      tabId: '3',
      label: 'Скелетон'
    }]}>
        <TableTabs.TabPanel tabId="1">
          <Table tableConfig={{
          containerStyle: {
            height: 700
          }
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="2">
          <Table tableConfig={{
          containerStyle: {
            height: 700
          }
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="3">
          <RectSkeleton width="100%" height={600} />
        </TableTabs.TabPanel>
      </TableTabs>;
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"##### Базовый пример\n\nНесколько обычных таблиц (`Table`) в табах.",...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var g,v,C,D,E;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'TableCanvas в табах',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const [activeTabId, setActiveTabId] = useState('1');
    return <TableTabs activeTabIdState={[activeTabId, setActiveTabId]} tabs={[{
      tabId: '1',
      label: 'Таб 1'
    }, {
      tabId: '2',
      label: 'Таб 2'
    }, {
      tabId: '3',
      label: 'Скелетон'
    }]}>
        <TableTabs.TabPanel tabId="1">
          <TableCanvas tableConfig={{
          containerStyle: {
            height: 700
          },
          fullScreenEnabled: true
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="2">
          <TableCanvas tableConfig={{
          containerStyle: {
            height: 700
          },
          fullScreenEnabled: true
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="3">
          <RectSkeleton width="100%" height={600} />
        </TableTabs.TabPanel>
      </TableTabs>;
  }
}`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:"##### TableCanvas в табах\n\nНесколько канвасных таблиц (`TableCanvas`) в табах.",...(E=(D=r.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};var x,I,N,w,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'TableCanvas без заданого статичного размера, на доступную высоту',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 90
    }, {
      key: 'task',
      name: 'Title',
      width: 280
    }, {
      key: 'priority',
      name: 'Priority',
      width: 160
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 160
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const [activeTabId, setActiveTabId] = useState('all');
    return <div style={{
      height: 760,
      padding: 24,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 0,
      background: surfaceInfo
    }}>
        <div style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <div style={{
          fontSize: 28,
          fontWeight: 600,
          lineHeight: '36px',
          color: surfaceSolidCard
        }}>
            Реестр документов
          </div>
          <div style={{
          fontSize: 14,
          lineHeight: '20px',
          color: surfaceSolidCard
        }}>
            Пример композиции, в которой TableTabs занимает доступную высоту
            страницы, а TableCanvas и sidebar остаются внутри своей области.
          </div>
        </div>

        <TableTabs activeTabIdState={[activeTabId, setActiveTabId]} tabs={[{
        tabId: 'all',
        label: 'Все документы'
      }, {
        tabId: 'drafts',
        label: 'Черновики'
      }]} tabsAndPanelsContainerCss={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        minWidth: 0,
        width: '100%',
        '& .rdg__tabs-container': {
          flexShrink: 0
        },
        '& .rdg__tab-panel': {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: 0,
          minWidth: 0,
          width: '100%',
          overflow: 'hidden'
        }
      }}>
          <TableTabs.TabPanel tabId="all" unmountOnClose={false}>
            <TableCanvas tableConfig={{
            containerStyle: {
              height: '100%'
            },
            fullScreenEnabled: true,
            columnsControl: {
              enable: true
            }
          }} columnConfig={columnConfig} rows={rows} />
          </TableTabs.TabPanel>

          <TableTabs.TabPanel tabId="drafts" unmountOnClose={false}>
            <TableCanvas tableConfig={{
            containerStyle: {
              height: '100%'
            },
            fullScreenEnabled: true,
            columnsControl: {
              enable: true
            }
          }} columnConfig={columnConfig} rows={rows.slice(0, 40)} />
          </TableTabs.TabPanel>
        </TableTabs>
      </div>;
  }
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`##### TableTabs в колонке, если не задан статичный размер для таблицы

Сценарий для страниц, где над табами есть дополнительный
контент и не задан статичный размер таблицы(px, рассчитан через calc),
а область с панелями должна занять всё оставшееся пространство.`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var P,A,B,j,V;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Table + TableCanvas',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
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
    const canvasColumnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const [activeTabId, setActiveTabId] = useState('table');
    return <TableTabs activeTabIdState={[activeTabId, setActiveTabId]} tabs={[{
      tabId: 'table',
      label: 'Table (обычная)'
    }, {
      tabId: 'canvas',
      label: 'TableCanvas (канвасная)'
    }]}>
        <TableTabs.TabPanel tabId="table">
          <Table tableConfig={{
          containerStyle: {
            height: 700
          },
          fullScreenEnabled: true
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="canvas">
          <TableCanvas tableConfig={{
          containerStyle: {
            height: 700
          },
          fullScreenEnabled: true
        }} columnConfig={canvasColumnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="canvas1">
          <div>test</div>
        </TableTabs.TabPanel>
      </TableTabs>;
  }
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"##### Table + TableCanvas\n\nДемонстрация использования общего компонента `TableTabs` с двумя разными\nтаблицами: обычной `Table` и канвасной `TableCanvas`. Оба компонента\nкорректно подхватывают контекст табов.",...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};const W=["BasicWithTable","BasicWithTableCanvas","FillAvailableHeightWithTableCanvas","MixedTableAndCanvas"],U=Object.freeze(Object.defineProperty({__proto__:null,BasicWithTable:t,BasicWithTableCanvas:r,FillAvailableHeightWithTableCanvas:l,MixedTableAndCanvas:b,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{U as T};
