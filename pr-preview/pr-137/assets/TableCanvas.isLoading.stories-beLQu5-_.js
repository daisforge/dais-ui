import{r as e,d as u}from"./react-D2T61mpp.js";import{c as f}from"./tableData-DVJFoYoT.js";import E from"./DocStoryTemplate-zj6qwwHt.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{S}from"./FiltersActions-BrG0hbPK.js";import{T as k}from"./TableCanvas-qFvlagp3.js";const R={title:"Локальные компоненты/TableCanvas/IsLoading",tags:["!autodocs"],parameters:{docs:{page:E},screenshot:{skip:!0}}},L=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,s={...w({preCode:L,previewSource:"shown"}),name:"IsLoading",render:()=>{const[r]=e.useState(f),[n,a]=e.useState(!1),i=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(S,{style:{width:"fit-content"},label:n?"Скрыть overlay":"Показать overlay",checked:n,onChange:()=>a(l=>!l)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:59,columnNumber:9},void 0),u.jsxDEV(k,{tableConfig:{containerStyle:{height:500},isLoading:{boolean:!0,skeletonRowsCount:5},loadingOverlay:{active:n,showSubtitleDelay:3e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},columnConfig:i,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:58,columnNumber:7},void 0)}},I=`
import { Switch } from '@daisforge/ui/components/Switch';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useRef, useState } from 'react';

`,t={...w({preCode:I,previewSource:"shown"}),name:"Оверлей поверх таблицы (mode: cover)",render:()=>{const[r,n]=e.useState(f),a=e.useState(()=>new Set),[i,l]=a,[d,c]=e.useState(!1),m=e.useRef(),h=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),T=()=>{c(!0),clearTimeout(m.current),m.current=setTimeout(()=>{n(o=>o.filter(D=>!i.has(D.id))),l(new Set),c(!1)},3e3)};return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(S,{style:{width:"fit-content"},label:"Показать оверлей",checked:d,onChange:()=>c(o=>!o)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:133,columnNumber:9},void 0),u.jsxDEV(k,{tableConfig:{containerStyle:{height:500},fullScreenEnabled:!0,selecting:{state:a,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Удалить выбранные",view:"secondary",onClick:T}]}},loadingOverlay:{mode:"cover",active:d,showSubtitleDelay:1e3,subtitle:"Обычно это занимает не более 10 секунд"}},columnConfig:h,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:139,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:132,columnNumber:7},void 0)}};var g,b,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'IsLoading',
  render: () => {
    const [rows] = useState(createRows);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);
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
        <Switch style={{
        width: 'fit-content'
      }} label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'} checked={isVisibleLoadingOverlay} onChange={() => setIsVisibleLoadingOverlay(prev => !prev)} />
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 500
        },
        isLoading: {
          boolean: true,
          skeletonRowsCount: 5
        },
        loadingOverlay: {
          active: isVisibleLoadingOverlay,
          showSubtitleDelay: 3000,
          subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд'
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,p,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: coverPreCode,
    previewSource: 'shown'
  }),
  name: 'Оверлей поверх таблицы (mode: cover)',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const [selectedRows, setSelectedRows] = selectingRowStateAndSetter;
    const [isUpdating, setIsUpdating] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
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
      key: 'developer',
      name: 'Developer'
    }], []);

    // Имитация запроса на удаление: пока он идёт, таблица закрыта оверлеем,
    // но не размонтируется — прокрутка и выделение остаются на месте.
    const deleteSelected = () => {
      setIsUpdating(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setRows(prev => prev.filter(row => !selectedRows.has(row.id)));
        setSelectedRows(new Set());
        setIsUpdating(false);
      }, 3000);
    };
    return <>
        <Switch style={{
        width: 'fit-content'
      }} label="Показать оверлей" checked={isUpdating} onChange={() => setIsUpdating(prev => !prev)} />
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 500
        },
        fullScreenEnabled: true,
        selecting: {
          state: selectingRowStateAndSetter,
          rowKeyGetter: row => row.id
        },
        controlBlock: {
          massActionPanel: {
            buttons: [{
              type: 'button',
              text: 'Удалить выбранные',
              view: 'secondary',
              onClick: deleteSelected
            }]
          }
        },
        loadingOverlay: {
          mode: 'cover',
          active: isUpdating,
          showSubtitleDelay: 1000,
          subtitle: 'Обычно это занимает не более 10 секунд'
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const B=["IsLoading","CoverOverlay"],j=Object.freeze(Object.defineProperty({__proto__:null,CoverOverlay:t,IsLoading:s,__namedExportsOrder:B,default:R},Symbol.toStringTag,{value:"Module"}));export{j as T};
