import{r,d as n}from"./react-D2T61mpp.js";import{c as b,b as ue}from"./tableData-DVJFoYoT.js";import ne from"./DocStoryTemplate-CnJlkrRG.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{co as J,cp as A,cv as T,cq as oe}from"./vendor-DIjqEUEl.js";import{B as y}from"./Box-B7h5WACJ.js";import{f as w}from"./Table-DODSgjWE.js";import{ax as re}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as Q}from"./@salutejs/sdds-finai-BWYHBdru.js";import{ck as te,e as se,rV as ie}from"./@salutejs/plasma-icons-lvaNTfmN.js";const le={title:"Локальные компоненты/Table/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:ne},screenshot:{skip:!0}}},k=`
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
`,B=e=>J(e).queryAllByRole("columnheader").map(u=>{var o;return((o=u.textContent)==null?void 0:o.trim())??""}),v=(e,u)=>e.findIndex(o=>o.includes(u)),U=async({canvasElement:e})=>{const u=J(e);await A(()=>T(v(B(e),"Title")).not.toBe(-1),{timeout:5e3}),await T(v(B(e),"Developer")).toBe(-1),await oe.click(u.getByRole("button",{name:"Добавить колонку Developer"})),await A(()=>{const o=B(e),s=v(o,"Developer");T(s).not.toBe(-1),T(s).toBe(v(o,"Title")+1)},{timeout:5e3})},C={...g({preCode:k,previewSource:"shown"}),render:()=>{const[e]=r.useState(b),u=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return n.jsxDEV(w,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:s,pinned:l},D)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${s.join(", ")}
                                `)}}},columnConfig:u,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:144,columnNumber:7},void 0)}},m={...g({preCode:k,previewSource:"shown"}),render:()=>{const[e]=r.useState(b),[u,o]=r.useState([]),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return n.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxDEV(y,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:re,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:u.length?u.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:210,columnNumber:9},void 0),n.jsxDEV(w,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:l,hidden:D,pinned:E,changed:S})=>{o(h=>[[`#${h.length+1} изменилось: ${Object.keys(S).join(", ")}`,`    order:  ${l.join(", ")}`,`    pinned: ${E.join(", ")}`,`    hidden: ${D.join(", ")}`].join(`
`),...h])}}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:228,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:209,columnNumber:7},void 0)}},c={...g({preCode:k,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:U,render:()=>{const[e]=r.useState(b),[u,o]=r.useState(!1),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},...u?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[u]);return n.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxDEV(y,{children:n.jsxDEV(Q,{size:"s",view:"secondary",onClick:()=>o(l=>!l),children:u?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:318,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:317,columnNumber:9},void 0),n.jsxDEV(w,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:328,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:316,columnNumber:7},void 0)}},p={...g({preCode:k,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:U,render:()=>{const[e]=r.useState(b),[u,o]=r.useState(!1),s=r.useMemo(()=>[{key:"id",name:n.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",n.jsxDEV(ie,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:377,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:370,columnNumber:13},void 0)},{key:"task",name:"Title"},...u?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[u]);return n.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxDEV(y,{children:n.jsxDEV(Q,{size:"s",view:"secondary",onClick:()=>o(l=>!l),children:u?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:412,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:411,columnNumber:9},void 0),n.jsxDEV(w,{tableConfig:{containerStyle:{height:700}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:422,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:410,columnNumber:7},void 0)}},f={...g({preCode:k,previewSource:"shown"}),render:()=>{const[e,u]=r.useState(b),[o,s]=r.useState([]),l=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:t})=>t.id}},{key:"priority",name:"Priority",rowsGrouping:{groupByColumn:!0}},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),[D,E]=r.useState(1),S=r.useCallback(({row:t,rowIdx:x})=>({items:[...x===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(a,i)=>{i.preventDefault(),E(d=>d+(x||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const a=e.findIndex(i=>i.id===t.id);a!==-1&&u(i=>{const d=[...i];return d.splice(a,1),d})},contentLeft:n.jsxDEV(te,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:513,columnNumber:26},void 0)},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const a=e.findIndex(i=>i.id===t.id);a!==-1&&u(i=>{const d=[...i],ee={id:ue(e.length)()*1e3+e.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return d.splice(a+1,0,ee),d})},contentLeft:n.jsxDEV(se,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:539,columnNumber:26},void 0)}]}),[e]),h=r.useState(()=>new Set);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{children:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:551,columnNumber:9},void 0),n.jsxDEV(w,{tableConfig:{keyText:!0,selecting:{rowCheckboxDisabled:t=>t.id===2,rowShowCheckbox:t=>t.id!==3,state:h,rowKeyGetter:t=>t.id+t.issueType},rowsGrouping:{rowKeyGetter:t=>t.id,groupByState:[o,s]},rowInstruments:{getRowDropdownConfig:S,defaultOpened:!0},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:t,hidden:x,pinned:a},i)=>{alert(`
                                    order: ${t.join(", ")}
                                    pinned: ${a.join(", ")}
                                    hidden: ${x.join(", ")}
                                `)}}},columnConfig:l,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:552,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsControl/Table.columnsControl.stories.tsx",lineNumber:550,columnNumber:7},void 0)}};var I,N,j;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(N=C.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var R,F,V,$,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [confirmLog, setConfirmLog] = useState<string[]>([]);
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
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Box data-testid="confirm-log" $css={{
        height: '96px',
        overflowY: 'auto',
        padding: '8px 12px',
        borderRadius: '8px',
        backgroundColor: surfaceTransparentPrimary,
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: 'monospace',
        whiteSpace: 'pre'
      }}>
          {confirmLog.length ? confirmLog.join('\\n') : 'Вызовы onConfirm: откройте настройки колонок и измените что-нибудь'}
        </Box>
        <Table tableConfig={{
        containerStyle: {
          height: 600
        },
        columnsControl: {
          enable: true,
          applyMode: 'instant',
          disableHiding: ['id'],
          disablePinning: ['developer'],
          hiddenDefault: ['tr1'],
          pinnedDefault: ['complete'],
          onConfirm: ({
            order,
            hidden,
            pinned,
            changed
          }) => {
            setConfirmLog(prev => [[\`#\${prev.length + 1} изменилось: \${Object.keys(changed).join(', ')}\`, \`    order:  \${order.join(', ')}\`, \`    pinned: \${pinned.join(', ')}\`, \`    hidden: \${hidden.join(', ')}\`].join('\\n'), ...prev]);
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.description}}};var H,M,O,L,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец,
а удалённая пропадает из таблицы и из списка колонок в сайдбаре.`,...(G=(L=c.parameters)==null?void 0:L.docs)==null?void 0:G.description}}};var _,z,K,q,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(z=p.parameters)==null?void 0:z.docs)==null?void 0:K.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(W=(q=p.parameters)==null?void 0:q.docs)==null?void 0:W.description}}};var Y,X,Z;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ae=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlWithServiceColumnsForTest"],ke=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:C,ColumnsControlDynamicColumn:c,ColumnsControlInstantApply:m,ColumnsControlWithServiceColumnsForTest:f,SimpleTableDynamicColumn:p,__namedExportsOrder:ae,default:le},Symbol.toStringTag,{value:"Module"}));export{ke as T};
