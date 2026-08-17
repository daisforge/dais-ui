import{r as u,d as e}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import V from"./DocStoryTemplate-DwKiq8z4.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-DYmpBnqh.js";import{kV as p,sL as j}from"./@salutejs/plasma-icons-B9bLUA95.js";import{b as w}from"./@salutejs/sdds-finai-DFCsnlGS.js";const F={title:"Локальные компоненты/Table/Sidebar",parameters:{docs:{page:V}},tags:["!autodocs"]},k=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,a={name:"С кастомной вкладкой",...f({preCode:k,previewSource:"shown"}),render:()=>{const[s]=u.useState(m),[n,o]=u.useState(new Set),[t,i]=u.useState({}),r=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),c=()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{children:["Всего строк: ",s.length]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV("p",{children:["Выбрано строк: ",n.size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:66,columnNumber:7},void 0);return e.jsxDEV(T,{tableConfig:{sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(p,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:80,columnNumber:23},void 0),content:e.jsxDEV(c,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:81,columnNumber:26},void 0),title:"Информация",showInSidebar:!0}]},selecting:{state:[n,o],rowKeyGetter:g=>g.id.toString()},filtering:{state:[t,i]}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:73,columnNumber:7},void 0)}},l={name:"Открыт по умолчанию на кастомной вкладке",...f({preCode:k,previewSource:"shown"}),render:()=>{const[s]=u.useState(m),n=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return e.jsxDEV(T,{tableConfig:{sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"customInfo",customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(p,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:130,columnNumber:23},void 0),content:e.jsxDEV("p",{children:"Эта вкладка открыта сразу при первом рендере."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:131,columnNumber:26},void 0),title:"Информация",showInSidebar:!0}]}},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:121,columnNumber:7},void 0)}},d={name:"Внешнее управление активной вкладкой",...f({preCode:k,previewSource:"shown"}),render:()=>{const[s]=u.useState(m),[n,o]=u.useState(!1),[t,i]=u.useState(null),r=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),c=g=>{i(g),o(!0)};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:12},children:[e.jsxDEV(w,{onClick:()=>c("customInfo"),children:"Инфо"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:173,columnNumber:11},void 0),e.jsxDEV(w,{onClick:()=>c("customSettings"),children:"Настройки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:174,columnNumber:11},void 0),e.jsxDEV(w,{onClick:()=>o(!1),children:"Закрыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:175,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:172,columnNumber:9},void 0),e.jsxDEV(T,{tableConfig:{sidebarConfig:{openState:[n,o],activeTabState:[t,i],customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(p,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:186,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Информация»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:187,columnNumber:28},void 0),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsxDEV(j,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:194,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Настройки»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:195,columnNumber:28},void 0),title:"Настройки",showInSidebar:!0}]}},columnConfig:r,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:177,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:171,columnNumber:7},void 0)}},b={name:"Колбэк активной вкладки",...f({preCode:k,previewSource:"shown"}),render:()=>{const[s]=u.useState(m),[n,o]=u.useState(null),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{style:{marginBottom:12},children:["Активная вкладка: ",e.jsxDEV("b",{children:n??"нет (сайдбар закрыт)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:232,columnNumber:29},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:231,columnNumber:9},void 0),e.jsxDEV(T,{tableConfig:{sidebarConfig:{onActiveTabChange:(i,r)=>o((r==null?void 0:r.title)??i),customTabs:[{id:"customInfo",label:"Информация",icon:e.jsxDEV(p,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:243,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Информация»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:244,columnNumber:28},void 0),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsxDEV(j,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:251,columnNumber:25},void 0),content:e.jsxDEV("p",{children:"Вкладка «Настройки»."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:252,columnNumber:28},void 0),title:"Настройки",showInSidebar:!0}]}},columnConfig:t,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sidebar/Table.sidebar.stories.tsx",lineNumber:230,columnNumber:7},void 0)}};var C,y,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    preCode,
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
    return <Table tableConfig={{
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
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,D,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    preCode,
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
    return <Table tableConfig={{
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
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var h,E,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    preCode,
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
        <Table tableConfig={{
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
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var v,A,B;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    preCode,
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
        <Table tableConfig={{
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
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const R=["WithCustomTab","DefaultOpen","ControlledActiveTab","ActiveTabCallback"],W=Object.freeze(Object.defineProperty({__proto__:null,ActiveTabCallback:b,ControlledActiveTab:d,DefaultOpen:l,WithCustomTab:a,__namedExportsOrder:R,default:F},Symbol.toStringTag,{value:"Module"}));export{W as T};
