import{r as e,d as u}from"./react-D2T61mpp.js";import{c as N}from"./tableData-UCfjiBCh.js";import M from"./DocStoryTemplate-DwKiq8z4.js";import{s as L}from"./storySourceDoc-tVKyHcEN.js";import{f as j}from"./Table-DYmpBnqh.js";import{tL as O,ba as V,b9 as z,kV as E,lG as I,d1 as h,ox as p,kj as P,ks as H,qn as U,iJ as _,sL as $,f2 as q,qc as B}from"./@salutejs/plasma-icons-B9bLUA95.js";import{E as W}from"./@salutejs/sdds-finai-DFCsnlGS.js";const G={title:"Локальные компоненты/Table/ControlBlock",tags:["!autodocs"],parameters:{docs:{page:M}}},J=`
  import { ColumnConfig, Table } from '@daisforge/ui';
  import {
  IconBell,
  IconBellActive,
  IconCalendar,
  IconClock,
  IconEye,
  IconHeart,
  IconHeartStroke,
  IconInfo,
  IconLock,
  IconPersone,
  IconRefresh,
  IconReset,
  IconSettings,
  IconStar,
  } from '@daisforge/ui/icons';
 import { IconButton } from '@daisforge/ui';
 import React, { useMemo, useState } from 'react';

type AnalyticsMode = 'basic' | 'advanced';
type TimeRange = 'day' | 'week' | 'month';
type UserFilter = 'all' | 'my' | 'team';

`,l={...L({preCode:J,previewSource:"shown"}),render:()=>{const T=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[S]=e.useState(N),[s,c]=e.useState(!1),[n,d]=e.useState(!0),[i,b]=e.useState(!1),[k,w]=e.useState("basic"),[m,R]=e.useState("week"),[f,x]=e.useState("all"),[o,C]=e.useState(!1),[r,y]=e.useState(!1),[a,v]=e.useState(!1),A={all:"Все",my:"Мои",team:"Команда"};return u.jsxDEV(j,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:s?"Удалить из избранного":"В избранное",Icon:O,onClick:()=>c(!s),mandatory:!0,details:{type:"switch",label:"В избранном",checked:s,onChange:()=>c(!s)}},{value:"refresh-feature",CustomIconRender:()=>u.jsxDEV(W,{size:"m",onClick:()=>{alert("Click on refresh-feature in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsxDEV(B,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:146,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:132,columnNumber:19},void 0),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh2 in Sidebar"),icon:u.jsxDEV(B,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:155,columnNumber:25},void 0)}},{value:"notifications",label:n?"Отключить уведомления":"Включить уведомления",Icon:n?V:z,onClick:()=>d(!n),details:{type:"switch",label:"Уведомления",checked:n,onChange:()=>d(!n)}},{value:"analytics-mode",label:`Аналитика (${k==="basic"?"базовая":"расширенная"})`,Icon:E,onClick:()=>{},details:{type:"select",label:"Режим аналитики",icon:u.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:185,columnNumber:25},void 0),value:k,options:[{value:"basic",label:"Базовая"},{value:"advanced",label:"Расширенная"}],onChange:t=>w(t)}},{value:"lock-table",label:i?"Разблокировать":"Заблокировать",Icon:I,onClick:()=>b(!i),details:{type:"button",label:i?"Разблокировать":"Заблокировать",onClick:()=>b(!i),icon:u.jsxDEV(I,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:203,columnNumber:25},void 0)}},{value:"time-range",label:`Период: ${m}`,Icon:h,onClick:()=>{},details:{type:"select",label:"Временной период",icon:u.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:214,columnNumber:25},void 0),value:m,options:[{value:"day",label:"День"},{value:"week",label:"Неделя"},{value:"month",label:"Месяц"}],onChange:t=>R(t)}},{value:"user-filter",label:`Пользователи: ${A[f]}`,Icon:p,onClick:()=>{},details:{type:"select",label:"Фильтр пользователей",icon:u.jsxDEV(p,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:232,columnNumber:25},void 0),value:f,options:[{value:"all",label:"Все"},{value:"my",label:"Мои"},{value:"team",label:"Команда"}],onChange:t=>x(t)}},{value:"favorites-only",label:o?"Все записи":"Только избранные",Icon:o?P:H,onClick:()=>C(!o),details:{type:"switch",label:"Только избранные",checked:o,onChange:()=>C(!o)}},{value:"auto-refresh",label:r?"Отключить автообновление":"Включить автообновление",Icon:U,onClick:()=>y(!r),details:{type:"switch",label:"Автообновление",checked:r,onChange:()=>y(!r)}},{value:"dark-mode",label:a?"Светлая тема":"Темная тема",Icon:a?_:$,onClick:()=>v(!a),details:{type:"switch",label:"Темная тема",checked:a,onChange:()=>v(!a)}},{value:"time-tracker",label:"Таймер",Icon:q,onClick:()=>{},details:{type:"custom",render:()=>u.jsxDEV("div",{children:"Кастомный компонент таймера"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:287,columnNumber:33},void 0)}}]}},columnConfig:T,rows:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.controlBlock.stories.tsx",lineNumber:109,columnNumber:7},void 0)}};var D,g,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columns: readonly ColumnConfig<Row>[] = useMemo(() => [{
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
    const [rows] = useState(createRows);

    // Состояния для кастомных фич
    const [isFavorite, setIsFavorite] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    const [analyticsMode, setAnalyticsMode] = useState<AnalyticsMode>('basic');
    const [timeRange, setTimeRange] = useState<TimeRange>('week');
    const [userFilter, setUserFilter] = useState<UserFilter>('all');
    const [favoritesOnly, setFavoritesOnly] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const filterLabels = {
      all: 'Все',
      my: 'Мои',
      team: 'Команда'
    };
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      fullScreenEnabled: true,
      controlBlock: {
        customFeatures: [
        // Обязательная кастомная фича
        {
          value: 'favorite',
          label: isFavorite ? 'Удалить из избранного' : 'В избранное',
          Icon: IconStar,
          onClick: () => setIsFavorite(!isFavorite),
          mandatory: true,
          details: {
            type: 'switch',
            label: 'В избранном',
            checked: isFavorite,
            onChange: () => setIsFavorite(!isFavorite)
          }
        }, {
          value: 'refresh-feature',
          CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
            // eslint-disable-next-line no-alert
            alert('Click on refresh-feature in ControlBlock');
          }} style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                    <IconRefresh size="s" />
                  </EmbedIconButton>,
          details: {
            type: 'button',
            label: 'Обновить',
            onClick: () =>
            // eslint-disable-next-line no-alert
            alert('Click for customFeatureRefresh2 in Sidebar'),
            icon: <IconRefresh size="s" />
          }
        },
        // Кастомные фичи
        {
          value: 'notifications',
          label: notificationsEnabled ? 'Отключить уведомления' : 'Включить уведомления',
          Icon: notificationsEnabled ? IconBellActive : IconBell,
          onClick: () => setNotificationsEnabled(!notificationsEnabled),
          details: {
            type: 'switch',
            label: 'Уведомления',
            checked: notificationsEnabled,
            onChange: () => setNotificationsEnabled(!notificationsEnabled)
          }
        }, {
          value: 'analytics-mode',
          label: \`Аналитика (\${analyticsMode === 'basic' ? 'базовая' : 'расширенная'})\`,
          Icon: IconInfo,
          // Замена IconChart на IconInfo
          onClick: () => {},
          // Добавлен обязательный onClick
          details: {
            type: 'select',
            label: 'Режим аналитики',
            icon: <IconInfo />,
            value: analyticsMode,
            options: [{
              value: 'basic',
              label: 'Базовая'
            }, {
              value: 'advanced',
              label: 'Расширенная'
            }],
            onChange: val => setAnalyticsMode(val as AnalyticsMode)
          }
        }, {
          value: 'lock-table',
          label: isLocked ? 'Разблокировать' : 'Заблокировать',
          Icon: IconLock,
          onClick: () => setIsLocked(!isLocked),
          details: {
            type: 'button',
            label: isLocked ? 'Разблокировать' : 'Заблокировать',
            onClick: () => setIsLocked(!isLocked),
            icon: <IconLock />
          }
        }, {
          value: 'time-range',
          label: \`Период: \${timeRange}\`,
          Icon: IconCalendar,
          onClick: () => {},
          // Добавлен обязательный onClick
          details: {
            type: 'select',
            label: 'Временной период',
            icon: <IconCalendar />,
            value: timeRange,
            options: [{
              value: 'day',
              label: 'День'
            }, {
              value: 'week',
              label: 'Неделя'
            }, {
              value: 'month',
              label: 'Месяц'
            }],
            onChange: val => setTimeRange(val as TimeRange)
          }
        }, {
          value: 'user-filter',
          label: \`Пользователи: \${filterLabels[userFilter]}\`,
          Icon: IconPersone,
          onClick: () => {},
          details: {
            type: 'select',
            label: 'Фильтр пользователей',
            icon: <IconPersone />,
            value: userFilter,
            options: [{
              value: 'all',
              label: 'Все'
            }, {
              value: 'my',
              label: 'Мои'
            }, {
              value: 'team',
              label: 'Команда'
            }],
            onChange: val => setUserFilter(val as UserFilter)
          }
        }, {
          value: 'favorites-only',
          label: favoritesOnly ? 'Все записи' : 'Только избранные',
          Icon: favoritesOnly ? IconHeart : IconHeartStroke,
          onClick: () => setFavoritesOnly(!favoritesOnly),
          details: {
            type: 'switch',
            label: 'Только избранные',
            checked: favoritesOnly,
            onChange: () => setFavoritesOnly(!favoritesOnly)
          }
        }, {
          value: 'auto-refresh',
          label: autoRefresh ? 'Отключить автообновление' : 'Включить автообновление',
          Icon: IconReset,
          onClick: () => setAutoRefresh(!autoRefresh),
          details: {
            type: 'switch',
            label: 'Автообновление',
            checked: autoRefresh,
            onChange: () => setAutoRefresh(!autoRefresh)
          }
        }, {
          value: 'dark-mode',
          label: darkMode ? 'Светлая тема' : 'Темная тема',
          Icon: darkMode ? IconEye : IconSettings,
          onClick: () => setDarkMode(!darkMode),
          details: {
            type: 'switch',
            label: 'Темная тема',
            checked: darkMode,
            onChange: () => setDarkMode(!darkMode)
          }
        }, {
          value: 'time-tracker',
          label: 'Таймер',
          Icon: IconClock,
          onClick: () => {},
          // Добавлен обязательный onClick
          details: {
            type: 'custom',
            render: () => <div>Кастомный компонент таймера</div>
          }
        }]
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(F=(g=l.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const X=["ControlBlockWithCustomFeatures"],oe=Object.freeze(Object.defineProperty({__proto__:null,ControlBlockWithCustomFeatures:l,__namedExportsOrder:X,default:G},Symbol.toStringTag,{value:"Module"}));export{oe as T};
