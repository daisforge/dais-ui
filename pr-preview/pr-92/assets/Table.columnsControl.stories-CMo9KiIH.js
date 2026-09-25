import{r as t,d as u}from"./react-D2T61mpp.js";import{c as k,b as Z}from"./tableData-DVJFoYoT.js";import J from"./DocStoryTemplate-Cd124LaY.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{co as M,cp as S,cw as b,cq as Q}from"./vendor-BQJg2Bc2.js";import{B as f}from"./Box-BsiCI7Vx.js";import{f as D}from"./Table-BFp9KCfd.js";import{b as L}from"./@salutejs/sdds-finai-elLnKBVN.js";import{ck as U,e as Y,rT as ee}from"./@salutejs/plasma-icons-G6-ZG7jG.js";const ne={title:"Локальные компоненты/Table/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:J},screenshot:{skip:!0}}},T=`
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
`,v=e=>M(e).queryAllByRole("columnheader").map(n=>{var o;return((o=n.textContent)==null?void 0:o.trim())??""}),w=(e,n)=>e.findIndex(o=>o.includes(n)),z=async({canvasElement:e})=>{const n=M(e);await S(()=>b(w(v(e),"Title")).not.toBe(-1),{timeout:5e3}),await b(w(v(e),"Developer")).toBe(-1),await Q.click(n.getByRole("button",{name:"Добавить колонку Developer"})),await S(()=>{const o=v(e),s=w(o,"Developer");b(s).not.toBe(-1),b(s).toBe(w(o,"Title")+1)},{timeout:5e3})},p={...g({preCode:T,previewSource:"shown"}),render:()=>{const[e]=t.useState(k),n=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(D,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:s,pinned:a},h)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${a.join(", ")}
                                    hidden: ${s.join(", ")}
                                `)}}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:143,columnNumber:7},void 0)}},m={...g({preCode:T,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:z,render:()=>{const[e]=t.useState(k),[n,o]=t.useState(!1),s=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},...n?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[n]);return u.jsxDEV(f,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(f,{children:u.jsxDEV(L,{size:"s",view:"secondary",onClick:()=>o(a=>!a),children:n?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:234,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:233,columnNumber:9},void 0),u.jsxDEV(D,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:244,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:232,columnNumber:7},void 0)}},c={...g({preCode:T,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:z,render:()=>{const[e]=t.useState(k),[n,o]=t.useState(!1),s=t.useMemo(()=>[{key:"id",name:u.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",u.jsxDEV(ee,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:293,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:286,columnNumber:13},void 0)},{key:"task",name:"Title"},...n?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[n]);return u.jsxDEV(f,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(f,{children:u.jsxDEV(L,{size:"s",view:"secondary",onClick:()=>o(a=>!a),children:n?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:328,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:327,columnNumber:9},void 0),u.jsxDEV(D,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:338,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:326,columnNumber:7},void 0)}},y={...g({preCode:T,previewSource:"shown"}),render:()=>{const[e,n]=t.useState(k),[o,s]=t.useState([]),a=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:r})=>r.id}},{key:"priority",name:"Priority",rowsGrouping:{groupByColumn:!0}},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),[h,K]=t.useState(1),q=t.useCallback(({row:r,rowIdx:C})=>({items:[...C===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(l,i)=>{i.preventDefault(),K(d=>d+(C||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const l=e.findIndex(i=>i.id===r.id);l!==-1&&n(i=>{const d=[...i];return d.splice(l,1),d})},contentLeft:u.jsxDEV(U,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:429,columnNumber:26},void 0)},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const l=e.findIndex(i=>i.id===r.id);l!==-1&&n(i=>{const d=[...i],X={id:Z(e.length)()*1e3+e.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return d.splice(l+1,0,X),d})},contentLeft:u.jsxDEV(Y,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:455,columnNumber:26},void 0)}]}),[e]),W=t.useState(()=>new Set);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV("div",{children:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:467,columnNumber:9},void 0),u.jsxDEV(D,{tableConfig:{keyText:!0,selecting:{rowCheckboxDisabled:r=>r.id===2,rowShowCheckbox:r=>r.id!==3,state:W,rowKeyGetter:r=>r.id+r.issueType},rowsGrouping:{rowKeyGetter:r=>r.id,groupByState:[o,s]},rowInstruments:{getRowDropdownConfig:q,defaultOpened:!0},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:r,hidden:C,pinned:l},i)=>{alert(`
                                    order: ${r.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${C.join(", ")}
                                `)}}},columnConfig:a,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:468,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:466,columnNumber:7},void 0)}};var x,E,B;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var A,I,N,R,j;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer'
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [developerIsShown]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <Table tableConfig={{
        containerStyle: {
          height: 700
        },
        columnsControl: {
          enable: true,
          hiding: true,
          pinning: true,
          reorderingAside: true,
          reorderingHeader: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец,
а удалённая пропадает из таблицы и из списка колонок в сайдбаре.`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};var V,F,P,$,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SimpleTable: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              id
              <IconSber size="xs" color="inherit" />
            </div>
    }, {
      key: 'task',
      name: 'Title'
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer'
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [developerIsShown]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <Table tableConfig={{
        containerStyle: {
          height: 700
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(O=($=c.parameters)==null?void 0:$.docs)==null?void 0:O.description}}};var H,G,_;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(G=y.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const ue=["ColumnsControl","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlWithServiceColumnsForTest"],ce=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:p,ColumnsControlDynamicColumn:m,ColumnsControlWithServiceColumnsForTest:y,SimpleTableDynamicColumn:c,__namedExportsOrder:ue,default:ne},Symbol.toStringTag,{value:"Module"}));export{ce as T};
