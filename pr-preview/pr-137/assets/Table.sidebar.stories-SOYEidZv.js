import{r as e,j as u}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import R from"./DocStoryTemplate-Cf946dgV.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{f}from"./Table-BQHrw1K6.js";import{kZ as C,sZ as F}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{t as w}from"./@salutejs/sdds-finai-CKhMjg07.js";const O={title:"Локальные компоненты/Table/Sidebar",parameters:{docs:{page:R}},tags:["!autodocs"]},g=`
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
`,a={name:"С кастомной вкладкой",...b({preCode:g,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),[t,o]=e.useState(new Set),[i,r]=e.useState({}),s=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),d=()=>u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Всего строк: ",n.length]}),u.jsxs("p",{children:["Выбрано строк: ",t.size]})]});return u.jsx(f,{tableConfig:{sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:u.jsx(C,{size:"s"}),content:u.jsx(d,{}),title:"Информация",showInSidebar:!0}]},selecting:{state:[t,o],rowKeyGetter:S=>S.id.toString()},filtering:{state:[i,r]}},columnConfig:s,rows:n})}},c={name:"Открыт по умолчанию на кастомной вкладке",...b({preCode:g,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsx(f,{tableConfig:{sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"customInfo",customTabs:[{id:"customInfo",label:"Информация",icon:u.jsx(C,{size:"s"}),content:u.jsx("p",{children:"Эта вкладка открыта сразу при первом рендере."}),title:"Информация",showInSidebar:!0}]}},columnConfig:t,rows:n})}},l={name:"Внешнее управление активной вкладкой",...b({preCode:g,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),[t,o]=e.useState(!1),[i,r]=e.useState(null),s=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]),d=S=>{r(S),o(!0)};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[u.jsx(w,{onClick:()=>d("customInfo"),children:"Инфо"}),u.jsx(w,{onClick:()=>d("customSettings"),children:"Настройки"}),u.jsx(w,{onClick:()=>o(!1),children:"Закрыть"})]}),u.jsx(f,{tableConfig:{sidebarConfig:{openState:[t,o],activeTabState:[i,r],customTabs:[{id:"customInfo",label:"Информация",icon:u.jsx(C,{size:"s"}),content:u.jsx("p",{children:"Вкладка «Информация»."}),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:u.jsx(F,{size:"s"}),content:u.jsx("p",{children:"Вкладка «Настройки»."}),title:"Настройки",showInSidebar:!0}]}},columnConfig:s,rows:n})]})}},m={name:"Колбэк активной вкладки",...b({preCode:g,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),[t,o]=e.useState(null),i=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsxs(u.Fragment,{children:[u.jsxs("p",{style:{marginBottom:12},children:["Активная вкладка: ",u.jsx("b",{children:t??"нет (сайдбар закрыт)"})]}),u.jsx(f,{tableConfig:{sidebarConfig:{onActiveTabChange:(r,s)=>o((s==null?void 0:s.title)??r),customTabs:[{id:"customInfo",label:"Информация",icon:u.jsx(C,{size:"s"}),content:u.jsx("p",{children:"Вкладка «Информация»."}),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:u.jsx(F,{size:"s"}),content:u.jsx("p",{children:"Вкладка «Настройки»."}),title:"Настройки",showInSidebar:!0}]}},columnConfig:i,rows:n})]})}};var I,y,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var A,D,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var B,h,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var E,j,v;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(v=(j=m.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const z=["WithCustomTab","DefaultOpen","ControlledActiveTab","ActiveTabCallback"],H=Object.freeze(Object.defineProperty({__proto__:null,ActiveTabCallback:m,ControlledActiveTab:l,DefaultOpen:c,WithCustomTab:a,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{H as T};
