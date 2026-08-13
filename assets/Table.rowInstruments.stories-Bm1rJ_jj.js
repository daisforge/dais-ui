import{r,d as e}from"./react-D2T61mpp.js";import{c as v,b as C}from"./tableData-UCfjiBCh.js";import j from"./DocStoryTemplate-BrdyFHCL.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{B as h}from"./Box-DPpgRiC8.js";import{f as S}from"./Table--K1U5T_k.js";import{cg as D,e as V}from"./@salutejs/plasma-icons-CyB4sZm3.js";import{e as N,B as E,b as F}from"./@salutejs/sdds-finai-DlWkRcaV.js";const O={title:"Локальные компоненты/Table/RowInstruments",tags:["!autodocs"],parameters:{docs:{page:j}}},B=`
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
`,l={...R({preCode:B,previewSource:"shown"}),name:"Инструменты строк",render:()=>{const[u,a]=r.useState(v),d=r.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[c,b]=r.useState(1),f=r.useCallback(({row:w,rowIdx:p})=>({items:[...p===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(t,o)=>{o.preventDefault(),b(n=>n+(p||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const t=u.findIndex(o=>o.id===w.id);t!==-1&&a(o=>{const n=[...o];return n.splice(t,1),n})},contentLeft:e.jsxDEV(D,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:117,columnNumber:26},void 0)},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const t=u.findIndex(o=>o.id===w.id);t!==-1&&a(o=>{const n=[...o],s={id:C(u.length)()*1e3+u.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return n.splice(t+1,0,s),n})},contentLeft:e.jsxDEV(V,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:143,columnNumber:26},void 0)}]}),[u]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(h,{$css:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxDEV(N,{children:"Счетчик, который меняется в инструментах(последняя иконка) первой строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:153,columnNumber:11},void 0),e.jsxDEV(E,{view:"dark",text:c.toString()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:157,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:152,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:700},rowInstruments:{getRowDropdownConfig:f,showInControl:!0,defaultOpened:!1}},columnConfig:d,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:160,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:151,columnNumber:7},void 0)}},m={...R({preCode:B,previewSource:"shown"}),name:"Инструменты строк (внешнее управление)",render:()=>{const[u,a]=r.useState(v),[d,c]=r.useState(!1),b=r.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),[f,w]=r.useState(1),p=r.useCallback(({row:t,rowIdx:o})=>({items:[...o===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(n,s)=>{s.preventDefault(),w(i=>i+(o||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const n=u.findIndex(s=>s.id===t.id);n!==-1&&a(s=>{const i=[...s];return i.splice(n,1),i})},contentLeft:e.jsxDEV(D,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:244,columnNumber:26},void 0)},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const n=u.findIndex(s=>s.id===t.id);n!==-1&&a(s=>{const i=[...s],A={id:C(u.length)()*1e3+u.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return i.splice(n+1,0,A),i})},contentLeft:e.jsxDEV(V,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:270,columnNumber:26},void 0)}]}),[u]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(h,{$css:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"10px"},children:[e.jsxDEV(N,{children:"Счетчик, который меняется в инструментах(последняя иконка) первой строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:287,columnNumber:11},void 0),e.jsxDEV(E,{view:"dark",text:f.toString()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:291,columnNumber:11},void 0),e.jsxDEV(F,{onClick:()=>c(t=>!t),children:d?"Закрыть RowInstruments":"Открыть RowInstruments"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:292,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:279,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:700},rowInstruments:{getRowDropdownConfig:p,showInControl:!0,defaultOpened:!1,openedState:[d,c]}},columnConfig:b,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:299,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowInstruments/Table.rowInstruments.stories.tsx",lineNumber:278,columnNumber:7},void 0)}};var I,x,g;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,T,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(T=m.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const M=["RowInstruments","RowInstrumentsExternalVisibleState"],Z=Object.freeze(Object.defineProperty({__proto__:null,RowInstruments:l,RowInstrumentsExternalVisibleState:m,__namedExportsOrder:M,default:O},Symbol.toStringTag,{value:"Module"}));export{Z as T};
