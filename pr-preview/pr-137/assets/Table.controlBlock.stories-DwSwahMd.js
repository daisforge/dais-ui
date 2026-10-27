import{r as u,j as e}from"./react-CAOzMBF_.js";import{c as T}from"./tableData-DVJFoYoT.js";import L from"./DocStoryTemplate-Cf946dgV.js";import{s as j}from"./storySourceDoc-tVKyHcEN.js";import{f as O}from"./Table-BQHrw1K6.js";import{u1 as z,ba as P,b9 as H,kZ as v,lK as E,d5 as h,oF as p,kn as U,kw as _,qx as $,iN as N,sZ as q,f6 as W,qm as D}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{E as Z}from"./@salutejs/sdds-finai-CKhMjg07.js";const K={title:"Локальные компоненты/Table/ControlBlock",tags:["!autodocs"],parameters:{docs:{page:L}}},X=`
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

`,l={...j({preCode:X,previewSource:"shown"}),render:()=>{const S=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[R]=u.useState(T),[s,r]=u.useState(!1),[n,d]=u.useState(!0),[i,C]=u.useState(!1),[k,A]=u.useState("basic"),[b,w]=u.useState("week"),[f,M]=u.useState("all"),[t,m]=u.useState(!1),[c,y]=u.useState(!1),[o,I]=u.useState(!1),x={all:"Все",my:"Мои",team:"Команда"};return e.jsx(O,{tableConfig:{containerStyle:{height:700},fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:s?"Удалить из избранного":"В избранное",Icon:z,onClick:()=>r(!s),mandatory:!0,details:{type:"switch",label:"В избранном",checked:s,onChange:()=>r(!s)}},{value:"refresh-feature",CustomIconRender:()=>e.jsx(Z,{size:"m",onClick:()=>{alert("Click on refresh-feature in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(D,{size:"s"})}),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh2 in Sidebar"),icon:e.jsx(D,{size:"s"})}},{value:"notifications",label:n?"Отключить уведомления":"Включить уведомления",Icon:n?P:H,onClick:()=>d(!n),details:{type:"switch",label:"Уведомления",checked:n,onChange:()=>d(!n)}},{value:"analytics-mode",label:`Аналитика (${k==="basic"?"базовая":"расширенная"})`,Icon:v,onClick:()=>{},details:{type:"select",label:"Режим аналитики",icon:e.jsx(v,{}),value:k,options:[{value:"basic",label:"Базовая"},{value:"advanced",label:"Расширенная"}],onChange:a=>A(a)}},{value:"lock-table",label:i?"Разблокировать":"Заблокировать",Icon:E,onClick:()=>C(!i),details:{type:"button",label:i?"Разблокировать":"Заблокировать",onClick:()=>C(!i),icon:e.jsx(E,{})}},{value:"time-range",label:`Период: ${b}`,Icon:h,onClick:()=>{},details:{type:"select",label:"Временной период",icon:e.jsx(h,{}),value:b,options:[{value:"day",label:"День"},{value:"week",label:"Неделя"},{value:"month",label:"Месяц"}],onChange:a=>w(a)}},{value:"user-filter",label:`Пользователи: ${x[f]}`,Icon:p,onClick:()=>{},details:{type:"select",label:"Фильтр пользователей",icon:e.jsx(p,{}),value:f,options:[{value:"all",label:"Все"},{value:"my",label:"Мои"},{value:"team",label:"Команда"}],onChange:a=>M(a)}},{value:"favorites-only",label:t?"Все записи":"Только избранные",Icon:t?U:_,onClick:()=>m(!t),details:{type:"switch",label:"Только избранные",checked:t,onChange:()=>m(!t)}},{value:"auto-refresh",label:c?"Отключить автообновление":"Включить автообновление",Icon:$,onClick:()=>y(!c),details:{type:"switch",label:"Автообновление",checked:c,onChange:()=>y(!c)}},{value:"dark-mode",label:o?"Светлая тема":"Темная тема",Icon:o?N:q,onClick:()=>I(!o),details:{type:"switch",label:"Темная тема",checked:o,onChange:()=>I(!o)}},{value:"time-tracker",label:"Таймер",Icon:W,onClick:()=>{},details:{type:"custom",render:()=>e.jsx("div",{children:"Кастомный компонент таймера"})}}]}},columnConfig:S,rows:R})}};var B,F,g;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(F=l.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const G=["ControlBlockWithCustomFeatures"],t4=Object.freeze(Object.defineProperty({__proto__:null,ControlBlockWithCustomFeatures:l,__namedExportsOrder:G,default:K},Symbol.toStringTag,{value:"Module"}));export{t4 as T};
