import{r as s,j as e}from"./react-CAOzMBF_.js";import{c as v,b}from"./tableData-DVJFoYoT.js";import F from"./DocStoryTemplate-Cf946dgV.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{B as k}from"./Box-DvvYTz20.js";import{f as D}from"./Table-BQHrw1K6.js";import{c as B,s as T,t as O}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ck as V,e as A}from"./@salutejs/plasma-icons-Do5ggeDI.js";const M={title:"Локальные компоненты/Table/RowInstruments",tags:["!autodocs"],parameters:{docs:{page:F}}},E=`
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
`,a={...h({preCode:E,previewSource:"shown"}),name:"Инструменты строк",render:()=>{const[u,l]=s.useState(v),d=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[m,f]=s.useState(1),I=s.useCallback(({row:w,rowIdx:p})=>({items:[...p===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(o,t)=>{t.preventDefault(),f(n=>n+(p||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const o=u.findIndex(t=>t.id===w.id);o!==-1&&l(t=>{const n=[...t];return n.splice(o,1),n})},contentLeft:e.jsx(V,{color:"inherit"})},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const o=u.findIndex(t=>t.id===w.id);o!==-1&&l(t=>{const n=[...t],r={id:b(u.length)()*1e3+u.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return n.splice(o+1,0,r),n})},contentLeft:e.jsx(A,{color:"inherit"})}]}),[u]);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{$css:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(B,{children:"Счетчик, который меняется в инструментах(последняя иконка) первой строки"}),e.jsx(T,{view:"dark",text:m.toString()})]}),e.jsx(D,{tableConfig:{containerStyle:{height:700},rowInstruments:{getRowDropdownConfig:I,showInControl:!0,defaultOpened:!1}},columnConfig:d,rows:u})]})}},c={...h({preCode:E,previewSource:"shown"}),name:"Инструменты строк (внешнее управление)",render:()=>{const[u,l]=s.useState(v),[d,m]=s.useState(!1),f=s.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[I,w]=s.useState(1),p=s.useCallback(({row:o,rowIdx:t})=>({items:[...t===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(n,r)=>{r.preventDefault(),w(i=>i+(t||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const n=u.findIndex(r=>r.id===o.id);n!==-1&&l(r=>{const i=[...r];return i.splice(n,1),i})},contentLeft:e.jsx(V,{color:"inherit"})},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const n=u.findIndex(r=>r.id===o.id);n!==-1&&l(r=>{const i=[...r],j={id:b(u.length)()*1e3+u.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return i.splice(n+1,0,j),i})},contentLeft:e.jsx(A,{color:"inherit"})}]}),[u]);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{$css:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"10px"},children:[e.jsx(B,{children:"Счетчик, который меняется в инструментах(последняя иконка) первой строки"}),e.jsx(T,{view:"dark",text:I.toString()}),e.jsx(O,{onClick:()=>m(o=>!o),children:d?"Закрыть RowInstruments":"Открыть RowInstruments"})]}),e.jsx(D,{tableConfig:{containerStyle:{height:700},rowInstruments:{getRowDropdownConfig:p,showInControl:!0,defaultOpened:!1,openedState:[d,m]}},columnConfig:f,rows:u})]})}};var x,g,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Инструменты строк',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo((): readonly ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'id'
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
    const [value, setValue] = useState(1);
    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(({
      row,
      rowIdx
    }) => ({
      items: [...(rowIdx === 0 ? [{
        label: 'Увеличить счетчик',
        value: 'counter',
        onItemSelect: (_, e) => {
          e.preventDefault();
          setValue(prev => prev + (rowIdx || 1));
        },
        dividerAfter: true
      } as RowInstrumentsDropdownItemOption] : []), {
        label: 'Удалить строку',
        value: 'delete row',
        onItemSelect: () => {
          const index = rows.findIndex(r => r.id === row.id);
          if (index !== -1) {
            setRows(prev => {
              const newV = [...prev];
              newV.splice(index, 1);
              return newV;
            });
          }
        },
        contentLeft: <IconBoxOutline color="inherit" />
      }, {
        label: 'Добавить строку вниз',
        value: 'add row',
        onItemSelect: () => {
          const index = rows.findIndex(r => r.id === row.id);
          if (index !== -1) {
            setRows(prev => {
              const newV = [...prev];
              const newRow: Row = {
                id: createSeededRandom(rows.length)() * 1000 + rows.length,
                task: '',
                priority: '',
                issueType: '',
                developer: '',
                complete: 0,
                tr: '',
                loremIpsum: ''
              } as Row;
              newV.splice(index + 1, 0, newRow);
              return newV;
            });
          }
        },
        contentLeft: <IconAddOutline color="inherit" />
      }]
    }), [rows]);
    return <>
        <Box $css={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <TextM>
            Счетчик, который меняется в инструментах(последняя иконка) первой
            строки
          </TextM>
          <Badge view="dark" text={value.toString()} />
        </Box>

        <Table tableConfig={{
        containerStyle: {
          height: 700
        },
        rowInstruments: {
          getRowDropdownConfig,
          showInControl: true,
          defaultOpened: false
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,R,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Инструменты строк (внешнее управление)',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [isVisibleRowInstrument, setIsVisibleRowInstrument] = useState(false); // Внешнее управление

    const columnConfig = useMemo((): readonly ColumnConfig<Row>[] => [{
      key: 'id',
      name: 'id'
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
    const [value, setValue] = useState(1);
    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(({
      row,
      rowIdx
    }) => ({
      items: [...(rowIdx === 0 ? [{
        label: 'Увеличить счетчик',
        value: 'counter',
        onItemSelect: (_, e) => {
          e.preventDefault();
          setValue(prev => prev + (rowIdx || 1));
        },
        dividerAfter: true
      } as RowInstrumentsDropdownItemOption] : []), {
        label: 'Удалить строку',
        value: 'delete row',
        onItemSelect: () => {
          const index = rows.findIndex(r => r.id === row.id);
          if (index !== -1) {
            setRows(prev => {
              const newV = [...prev];
              newV.splice(index, 1);
              return newV;
            });
          }
        },
        contentLeft: <IconBoxOutline color="inherit" />
      }, {
        label: 'Добавить строку вниз',
        value: 'add row',
        onItemSelect: () => {
          const index = rows.findIndex(r => r.id === row.id);
          if (index !== -1) {
            setRows(prev => {
              const newV = [...prev];
              const newRow: Row = {
                id: createSeededRandom(rows.length)() * 1000 + rows.length,
                task: '',
                priority: '',
                issueType: '',
                developer: '',
                complete: 0,
                tr: '',
                loremIpsum: ''
              } as Row;
              newV.splice(index + 1, 0, newRow);
              return newV;
            });
          }
        },
        contentLeft: <IconAddOutline color="inherit" />
      }]
    }), [rows]);
    return <>
        <Box $css={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
          <TextM>
            Счетчик, который меняется в инструментах(последняя иконка) первой
            строки
          </TextM>
          <Badge view="dark" text={value.toString()} />
          <Button onClick={() => setIsVisibleRowInstrument(prev => !prev)}>
            {isVisibleRowInstrument ? 'Закрыть RowInstruments' : 'Открыть RowInstruments'}
          </Button>
        </Box>

        <Table tableConfig={{
        containerStyle: {
          height: 700
        },
        rowInstruments: {
          getRowDropdownConfig,
          showInControl: true,
          defaultOpened: false,
          openedState: [isVisibleRowInstrument, setIsVisibleRowInstrument]
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const _=["RowInstruments","RowInstrumentsExternalVisibleState"],q=Object.freeze(Object.defineProperty({__proto__:null,RowInstruments:a,RowInstrumentsExternalVisibleState:c,__namedExportsOrder:_,default:M},Symbol.toStringTag,{value:"Module"}));export{q as T};
