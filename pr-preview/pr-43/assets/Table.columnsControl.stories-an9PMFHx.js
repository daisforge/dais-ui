import{r as t,d as s}from"./react-D2T61mpp.js";import{c as T,b as A}from"./tableData-UCfjiBCh.js";import j from"./DocStoryTemplate-CnzecF6z.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{f as S}from"./Table-C0yVNBma.js";import{ck as B,e as N}from"./@salutejs/plasma-icons-G-biVy7u.js";const V={title:"Локальные компоненты/Table/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:j},screenshot:{skip:!0}}},v=`
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
`,u={...h({preCode:v,previewSource:"shown"}),render:()=>{const[o]=t.useState(T),a=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(S,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:m,hidden:c,pinned:p},w)=>{alert(`
                                    order: ${m.join(", ")}
                                    pinned: ${p.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:a,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:96,columnNumber:7},void 0)}},l={...h({preCode:v,previewSource:"shown"}),render:()=>{const[o,a]=t.useState(T),[m,c]=t.useState([]),p=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:e})=>e.id}},{key:"priority",name:"Priority",rowsGrouping:{groupByColumn:!0}},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),[w,x]=t.useState(1),D=t.useCallback(({row:e,rowIdx:d})=>({items:[...d===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(r,n)=>{n.preventDefault(),x(i=>i+(d||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const r=o.findIndex(n=>n.id===e.id);r!==-1&&a(n=>{const i=[...n];return i.splice(r,1),i})},contentLeft:s.jsxDEV(B,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:211,columnNumber:26},void 0)},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const r=o.findIndex(n=>n.id===e.id);r!==-1&&a(n=>{const i=[...n],R={id:A(o.length)()*1e3+o.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return i.splice(r+1,0,R),i})},contentLeft:s.jsxDEV(N,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:237,columnNumber:26},void 0)}]}),[o]),I=t.useState(()=>new Set);return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{children:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:249,columnNumber:9},void 0),s.jsxDEV(S,{tableConfig:{keyText:!0,selecting:{rowCheckboxDisabled:e=>e.id===2,rowShowCheckbox:e=>e.id!==3,state:I,rowKeyGetter:e=>e.id+e.issueType},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[m,c]},rowInstruments:{getRowDropdownConfig:D,defaultOpened:!0},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:e,hidden:d,pinned:r},n)=>{alert(`
                                    order: ${e.join(", ")}
                                    pinned: ${r.join(", ")}
                                    hidden: ${d.join(", ")}
                                `)}}},columnConfig:p,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:250,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:248,columnNumber:7},void 0)}};var y,g,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(f=(g=u.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,C,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title',
      keyText: {
        key: 'kek',
        name: 'Ключ - Title',
        renderCell: ({
          row
        }) => row.id
      }
    }, {
      key: 'priority',
      name: 'Priority',
      rowsGrouping: {
        groupByColumn: true
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
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
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <>
        <div>{value}</div>
        <Table tableConfig={{
        keyText: true,
        selecting: {
          rowCheckboxDisabled: row => row.id === 2,
          rowShowCheckbox: row => row.id !== 3,
          state: selectingRowStateAndSetter,
          rowKeyGetter: r => r.id + r.issueType
        },
        rowsGrouping: {
          rowKeyGetter: r => r.id,
          groupByState: [groupByArr, setGroupByArr]
        },
        rowInstruments: {
          getRowDropdownConfig,
          defaultOpened: true
        },
        containerStyle: {
          height: 700
        },
        columnsControl: {
          enable: true,
          hiding: true,
          disableHiding: ['id'],
          pinning: true,
          disablePinning: ['developer'],
          reorderingAside: true,
          reorderingHeader: true,
          columnsLabel: {
            task: 'Задачи'
          },
          orderDefault: ['id', 'issueType', 'task'],
          hiddenDefault: ['tr1'],
          pinnedDefault: ['complete'],
          onConfirm: ({
            order,
            hidden,
            pinned
          }, _setters) => {
            // eslint-disable-next-line no-alert
            alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const E=["ColumnsControl","ColumnsControlWithServiceColumnsForTest"],L=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:u,ColumnsControlWithServiceColumnsForTest:l,__namedExportsOrder:E,default:V},Symbol.toStringTag,{value:"Module"}));export{L as T};
