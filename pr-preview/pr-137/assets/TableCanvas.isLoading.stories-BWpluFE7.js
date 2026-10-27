import{r as e,j as u}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import E from"./DocStoryTemplate-Cf946dgV.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{S as b}from"./FiltersActions-BWfcXHB3.js";import{T as h}from"./TableCanvas-DlX-Wh2b.js";const T={title:"Локальные компоненты/TableCanvas/IsLoading",tags:["!autodocs"],parameters:{docs:{page:E},screenshot:{skip:!0}}},B=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...f({preCode:B,previewSource:"shown"}),name:"IsLoading",render:()=>{const[a]=e.useState(C),[n,r]=e.useState(!1),i=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return u.jsxs(u.Fragment,{children:[u.jsx(b,{style:{width:"fit-content"},label:n?"Скрыть overlay":"Показать overlay",checked:n,onChange:()=>r(l=>!l)}),u.jsx(h,{tableConfig:{containerStyle:{height:500},isLoading:{boolean:!0,skeletonRowsCount:5},loadingOverlay:{active:n,showSubtitleDelay:3e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},columnConfig:i,rows:a})]})}},I=`
import { Switch } from '@daisforge/ui/components/Switch';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useRef, useState } from 'react';

`,s={...f({preCode:I,previewSource:"shown"}),name:"Оверлей поверх таблицы (mode: cover)",render:()=>{const[a,n]=e.useState(C),r=e.useState(()=>new Set),[i,l]=r,[d,c]=e.useState(!1),m=e.useRef(),D=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),k=()=>{c(!0),clearTimeout(m.current),m.current=setTimeout(()=>{n(t=>t.filter(R=>!i.has(R.id))),l(new Set),c(!1)},3e3)};return u.jsxs(u.Fragment,{children:[u.jsx(b,{style:{width:"fit-content"},label:"Показать оверлей",checked:d,onChange:()=>c(t=>!t)}),u.jsx(h,{tableConfig:{containerStyle:{height:500},fullScreenEnabled:!0,selecting:{state:r,rowKeyGetter:t=>t.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Удалить выбранные",view:"secondary",onClick:k}]}},loadingOverlay:{mode:"cover",active:d,showSubtitleDelay:1e3,subtitle:"Обычно это занимает не более 10 секунд"}},columnConfig:D,rows:a})]})}};var y,g,p;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var w,S,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const O=["IsLoading","CoverOverlay"],U=Object.freeze(Object.defineProperty({__proto__:null,CoverOverlay:s,IsLoading:o,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{U as T};
