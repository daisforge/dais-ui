import{r as n,j as e}from"./react-CAOzMBF_.js";import{c as d}from"./tableData-DVJFoYoT.js";import H from"./DocStoryTemplate-Cf946dgV.js";import{f as T}from"./Table-BQHrw1K6.js";import{T as c}from"./TableCanvas-DlX-Wh2b.js";import{T as u}from"./TableTabs-C6Rr5Gy-.js";import{cT as W,A as m}from"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/sdds-finai-CKhMjg07.js";import{bD as R}from"./vendor-DmWczWMC.js";const z={title:"Локальные компоненты/TableTabs",tags:["!autodocs"],parameters:{docs:{page:H,toc:!0}}},i={name:"Table в табах",render:()=>{const[a]=n.useState(d),t=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[l,s]=n.useState("1");return e.jsxs(u,{activeTabIdState:[l,s],tabs:[{tabId:"1",label:"Таб 1"},{tabId:"2",label:"Таб 2"},{tabId:"3",label:"Скелетон"}],children:[e.jsx(u.TabPanel,{tabId:"1",children:e.jsx(T,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"2",children:e.jsx(T,{tableConfig:{containerStyle:{height:700}},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"3",children:e.jsx(R,{width:"100%",height:600})})]})}},o={name:"TableCanvas в табах",render:()=>{const[a]=n.useState(d),t=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[l,s]=n.useState("1");return e.jsxs(u,{activeTabIdState:[l,s],tabs:[{tabId:"1",label:"Таб 1"},{tabId:"2",label:"Таб 2"},{tabId:"3",label:"Скелетон"}],children:[e.jsx(u.TabPanel,{tabId:"1",children:e.jsx(c,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"2",children:e.jsx(c,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"3",children:e.jsx(R,{width:"100%",height:600})})]})}},r={name:"TableCanvas без заданого статичного размера, на доступную высоту",render:()=>{const[a]=n.useState(d),t=n.useMemo(()=>[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:280},{key:"priority",name:"Priority",width:160},{key:"issueType",name:"Issue Type",width:160},{key:"developer",name:"Developer"}],[]),[l,s]=n.useState("all");return e.jsxs("div",{style:{height:760,padding:24,boxSizing:"border-box",display:"flex",flexDirection:"column",gap:16,minHeight:0,background:W},children:[e.jsxs("div",{style:{flexShrink:0,display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{fontSize:28,fontWeight:600,lineHeight:"36px",color:m},children:"Реестр документов"}),e.jsx("div",{style:{fontSize:14,lineHeight:"20px",color:m},children:"Пример композиции, в которой TableTabs занимает доступную высоту страницы, а TableCanvas и sidebar остаются внутри своей области."})]}),e.jsxs(u,{activeTabIdState:[l,s],tabs:[{tabId:"all",label:"Все документы"},{tabId:"drafts",label:"Черновики"}],tabsAndPanelsContainerCss:{display:"flex",flexDirection:"column",flex:1,minHeight:0,minWidth:0,width:"100%","& .rdg__tabs-container":{flexShrink:0},"& .rdg__tab-panel":{display:"flex",flexDirection:"column",flex:1,minHeight:0,minWidth:0,width:"100%",overflow:"hidden"}},children:[e.jsx(u.TabPanel,{tabId:"all",unmountOnClose:!1,children:e.jsx(c,{tableConfig:{containerStyle:{height:"100%"},fullScreenEnabled:!0,columnsControl:{enable:!0}},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"drafts",unmountOnClose:!1,children:e.jsx(c,{tableConfig:{containerStyle:{height:"100%"},fullScreenEnabled:!0,columnsControl:{enable:!0}},columnConfig:t,rows:a.slice(0,40)})})]})]})}},b={name:"Table + TableCanvas",render:()=>{const[a]=n.useState(d),t=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),l=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[s,_]=n.useState("table");return e.jsxs(u,{activeTabIdState:[s,_],tabs:[{tabId:"table",label:"Table (обычная)"},{tabId:"canvas",label:"TableCanvas (канвасная)"}],children:[e.jsx(u.TabPanel,{tabId:"table",children:e.jsx(T,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:t,rows:a})}),e.jsx(u.TabPanel,{tabId:"canvas",children:e.jsx(c,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0},columnConfig:l,rows:a})}),e.jsx(u.TabPanel,{tabId:"canvas1",children:e.jsx("div",{children:"test"})})]})}};var y,C,f,p,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"##### Базовый пример\n\nНесколько обычных таблиц (`Table`) в табах.",...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var g,v,I,D,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source},description:{story:"##### TableCanvas в табах\n\nНесколько канвасных таблиц (`TableCanvas`) в табах.",...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};var S,x,k,w,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:`##### TableTabs в колонке, если не задан статичный размер для таблицы

Сценарий для страниц, где над табами есть дополнительный
контент и не задан статичный размер таблицы(px, рассчитан через calc),
а область с панелями должна занять всё оставшееся пространство.`,...(P=(w=r.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var A,B,j,F,M;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(B=b.parameters)==null?void 0:B.docs)==null?void 0:j.source},description:{story:"##### Table + TableCanvas\n\nДемонстрация использования общего компонента `TableTabs` с двумя разными\nтаблицами: обычной `Table` и канвасной `TableCanvas`. Оба компонента\nкорректно подхватывают контекст табов.",...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};const O=["BasicWithTable","BasicWithTableCanvas","FillAvailableHeightWithTableCanvas","MixedTableAndCanvas"],V=Object.freeze(Object.defineProperty({__proto__:null,BasicWithTable:i,BasicWithTableCanvas:o,FillAvailableHeightWithTableCanvas:r,MixedTableAndCanvas:b,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{V as T};
