import{r as u,d as e}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import j from"./DocStoryTemplate-BaRLMcEi.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-B7EdTOYz.js";import{kV as C,sL as B}from"./@salutejs/plasma-icons-Dn1uY4zn.js";import{b as p}from"./@salutejs/sdds-finai-CPdoK_07.js";const V={title:"Локальные компоненты/TableCanvas/Sidebar",parameters:{docs:{page:j}},tags:["!autodocs"]},t={name:"С кастомной вкладкой",...f({previewSource:"shown"}),render:()=>{const[n]=u.useState(m),[s,a]=u.useState(new Set),[r,i]=u.useState({}),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),c=()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{children:["Всего строк: ",n.length]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:47,columnNumber:9},void 0),e.jsxDEV("p",{children:["Выбрано строк: ",s.size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:46,columnNumber:7},void 0);return e.jsxDEV(T,{tableConfig:{sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(C,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:60,columnNumber:23},void 0),content:e.jsxDEV(c,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:61,columnNumber:26},void 0),title:"Информация",showInSidebar:!0}]},selecting:{state:[s,a],rowKeyGetter:k=>k.id.toString()},filtering:{state:[r,i]}},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:53,columnNumber:7},void 0)}},l={name:"Открыт по умолчанию на кастомной вкладке",...f({previewSource:"shown"}),render:()=>{const[n]=u.useState(m),s=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return e.jsxDEV(T,{tableConfig:{sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"customInfo",customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(C,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:109,columnNumber:23},void 0),content:e.jsxDEV("p",{children:"Эта вкладка открыта сразу при первом рендере."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:110,columnNumber:26},void 0),title:"Информация",showInSidebar:!0}]}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},b={name:"Внешнее управление активной вкладкой",...f({previewSource:"shown"}),render:()=>{const[n]=u.useState(m),[s,a]=u.useState(!1),[r,i]=u.useState(null),o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),c=k=>{i(k),a(!0)};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:12},children:[e.jsxDEV(p,{onClick:()=>c("customInfo"),children:"Инфо"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:151,columnNumber:11},void 0),e.jsxDEV(p,{onClick:()=>c("customSettings"),children:"Настройки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:152,columnNumber:11},void 0),e.jsxDEV(p,{onClick:()=>a(!1),children:"Закрыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:153,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:150,columnNumber:9},void 0),e.jsxDEV(T,{tableConfig:{sidebarConfig:{openState:[s,a],activeTabState:[r,i],customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(C,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:164,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Информация»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:165,columnNumber:28},void 0),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsxDEV(B,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:172,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Настройки»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:173,columnNumber:28},void 0),title:"Настройки",showInSidebar:!0}]}},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:155,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:149,columnNumber:7},void 0)}},d={name:"Колбэк активной вкладки",...f({previewSource:"shown"}),render:()=>{const[n]=u.useState(m),[s,a]=u.useState(null),r=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{style:{marginBottom:12},children:["Активная вкладка: ",e.jsxDEV("b",{children:s??"нет (сайдбар закрыт)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:209,columnNumber:29},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:208,columnNumber:9},void 0),e.jsxDEV(T,{tableConfig:{sidebarConfig:{onActiveTabChange:(i,o)=>a((o==null?void 0:o.title)??i),customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(C,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:220,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Информация»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:221,columnNumber:28},void 0),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsxDEV(B,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:228,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Настройки»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:229,columnNumber:28},void 0),title:"Настройки",showInSidebar:!0}]}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:211,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.stories.tsx",lineNumber:207,columnNumber:7},void 0)}};var v,g,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(new Set());
    const [filters, setFilters] = useState({});
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    const CustomInfoTab = () => <>
        <p>Всего строк: {rows.length}</p>
        <p>Выбрано строк: {selectedRows.size}</p>
      </>;
    return <TableCanvas tableConfig={{
      sidebarConfig: {
        customTabs: [{
          id: 'customInfo',
          label: 'Информация',
          icon: <IconInfo size="s" />,
          content: <CustomInfoTab />,
          title: 'Информация',
          showInSidebar: true
        }]
      },
      selecting: {
        state: [selectedRows, setSelectedRows],
        rowKeyGetter: row => row.id.toString()
      },
      filtering: {
        state: [filters, setFilters]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var w,y,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
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
    }], []);
    return <TableCanvas tableConfig={{
      sidebarConfig: {
        defaultOpen: true,
        defaultActiveTabId: 'customInfo',
        customTabs: [{
          id: 'customInfo',
          label: 'Информация',
          icon: <IconInfo size="s" />,
          content: <p>Эта вкладка открыта сразу при первом рендере.</p>,
          title: 'Информация',
          showInSidebar: true
        }]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var D,h,x;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    const openTab = (id: string) => {
      setActiveTab(id);
      setIsOpen(true);
    };
    return <>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 12
      }}>
          <Button onClick={() => openTab('customInfo')}>Инфо</Button>
          <Button onClick={() => openTab('customSettings')}>Настройки</Button>
          <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
        </div>
        <TableCanvas tableConfig={{
        sidebarConfig: {
          openState: [isOpen, setIsOpen],
          activeTabState: [activeTab, setActiveTab],
          customTabs: [{
            id: 'customInfo',
            label: 'Информация',
            icon: <IconInfo size="s" />,
            content: <p>Вкладка «Информация».</p>,
            title: 'Информация',
            showInSidebar: true
          }, {
            id: 'customSettings',
            label: 'Настройки',
            icon: <IconSettings size="s" />,
            content: <p>Вкладка «Настройки».</p>,
            title: 'Настройки',
            showInSidebar: true
          }]
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(x=(h=b.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var E,I,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [currentTab, setCurrentTab] = useState<string | null>(null);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <>
        <p style={{
        marginBottom: 12
      }}>
          Активная вкладка: <b>{currentTab ?? 'нет (сайдбар закрыт)'}</b>
        </p>
        <TableCanvas tableConfig={{
        sidebarConfig: {
          onActiveTabChange: (tabId, tab) => setCurrentTab(tab?.title ?? tabId),
          customTabs: [{
            id: 'customInfo',
            label: 'Информация',
            icon: <IconInfo size="s" />,
            content: <p>Вкладка «Информация».</p>,
            title: 'Информация',
            showInSidebar: true
          }, {
            id: 'customSettings',
            label: 'Настройки',
            icon: <IconSettings size="s" />,
            content: <p>Вкладка «Настройки».</p>,
            title: 'Настройки',
            showInSidebar: true
          }]
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const F=["WithCustomTab","DefaultOpen","ControlledActiveTab","ActiveTabCallback"],K=Object.freeze(Object.defineProperty({__proto__:null,ActiveTabCallback:d,ControlledActiveTab:b,DefaultOpen:l,WithCustomTab:t,__namedExportsOrder:F,default:V},Symbol.toStringTag,{value:"Module"}));export{K as T};
