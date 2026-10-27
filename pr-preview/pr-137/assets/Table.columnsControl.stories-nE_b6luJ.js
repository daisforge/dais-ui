import{r,j as n}from"./react-CAOzMBF_.js";import{c as w,b as ue}from"./tableData-DVJFoYoT.js";import ne from"./DocStoryTemplate-Cf946dgV.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{co as J,cp as T,cv as B,cq as oe}from"./vendor-DmWczWMC.js";import{B as y}from"./Box-DvvYTz20.js";import{f as D}from"./Table-BQHrw1K6.js";import{ax as re}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as Q}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ck as te,e as ie,rV as se}from"./@salutejs/plasma-icons-Do5ggeDI.js";const le={title:"Локальные компоненты/Table/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:ne},screenshot:{skip:!0}}},h=`
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
`,b=e=>J(e).queryAllByRole("columnheader").map(u=>{var o;return((o=u.textContent)==null?void 0:o.trim())??""}),v=(e,u)=>e.findIndex(o=>o.includes(u)),U=async({canvasElement:e})=>{const u=J(e);await T(()=>B(v(b(e),"Title")).not.toBe(-1),{timeout:5e3}),await B(v(b(e),"Developer")).toBe(-1),await oe.click(u.getByRole("button",{name:"Добавить колонку Developer"})),await T(()=>{const o=b(e),i=v(o,"Developer");B(i).not.toBe(-1),B(i).toBe(v(o,"Title")+1)},{timeout:5e3})},C={...f({preCode:h,previewSource:"shown"}),render:()=>{const[e]=r.useState(w),u=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return n.jsx(D,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:i,pinned:l},x)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${i.join(", ")}
                                `)}}},columnConfig:u,rows:e})}},p={...f({preCode:h,previewSource:"shown"}),render:()=>{const[e]=r.useState(w),[u,o]=r.useState([]),i=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return n.jsxs(y,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx(y,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:re,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:u.length?u.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"}),n.jsx(D,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:l,hidden:x,pinned:E,changed:A})=>{o(k=>[[`#${k.length+1} изменилось: ${Object.keys(A).join(", ")}`,`    order:  ${l.join(", ")}`,`    pinned: ${E.join(", ")}`,`    hidden: ${x.join(", ")}`].join(`
`),...k])}}},columnConfig:i,rows:e})]})}},c={...f({preCode:h,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:U,render:()=>{const[e]=r.useState(w),[u,o]=r.useState(!1),i=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},...u?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[u]);return n.jsxs(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(y,{children:n.jsx(Q,{size:"s",view:"secondary",onClick:()=>o(l=>!l),children:u?"Удалить колонку Developer":"Добавить колонку Developer"})}),n.jsx(D,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0}},columnConfig:i,rows:e})]})}},m={...f({preCode:h,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:U,render:()=>{const[e]=r.useState(w),[u,o]=r.useState(!1),i=r.useMemo(()=>[{key:"id",name:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",n.jsx(se,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},...u?[{key:"developer",name:"Developer"}]:[],{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[u]);return n.jsxs(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(y,{children:n.jsx(Q,{size:"s",view:"secondary",onClick:()=>o(l=>!l),children:u?"Удалить колонку Developer":"Добавить колонку Developer"})}),n.jsx(D,{tableConfig:{containerStyle:{height:700}},columnConfig:i,rows:e})]})}},g={...f({preCode:h,previewSource:"shown"}),render:()=>{const[e,u]=r.useState(w),[o,i]=r.useState([]),l=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:t})=>t.id}},{key:"priority",name:"Priority",rowsGrouping:{groupByColumn:!0}},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),[x,E]=r.useState(1),A=r.useCallback(({row:t,rowIdx:S})=>({items:[...S===0?[{label:"Увеличить счетчик",value:"counter",onItemSelect:(a,s)=>{s.preventDefault(),E(d=>d+(S||1))},dividerAfter:!0}]:[],{label:"Удалить строку",value:"delete row",onItemSelect:()=>{const a=e.findIndex(s=>s.id===t.id);a!==-1&&u(s=>{const d=[...s];return d.splice(a,1),d})},contentLeft:n.jsx(te,{color:"inherit"})},{label:"Добавить строку вниз",value:"add row",onItemSelect:()=>{const a=e.findIndex(s=>s.id===t.id);a!==-1&&u(s=>{const d=[...s],ee={id:ue(e.length)()*1e3+e.length,task:"",priority:"",issueType:"",developer:"",complete:0,tr:"",loremIpsum:""};return d.splice(a+1,0,ee),d})},contentLeft:n.jsx(ie,{color:"inherit"})}]}),[e]),k=r.useState(()=>new Set);return n.jsxs(n.Fragment,{children:[n.jsx("div",{children:x}),n.jsx(D,{tableConfig:{keyText:!0,selecting:{rowCheckboxDisabled:t=>t.id===2,rowShowCheckbox:t=>t.id!==3,state:k,rowKeyGetter:t=>t.id+t.issueType},rowsGrouping:{rowKeyGetter:t=>t.id,groupByState:[o,i]},rowInstruments:{getRowDropdownConfig:A,defaultOpened:!0},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:t,hidden:S,pinned:a},s)=>{alert(`
                                    order: ${t.join(", ")}
                                    pinned: ${a.join(", ")}
                                    hidden: ${S.join(", ")}
                                `)}}},columnConfig:l,rows:e})]})}};var I,j,R;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(j=C.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var F,$,P,H,M;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=($=p.parameters)==null?void 0:$.docs)==null?void 0:P.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var O,L,G,V,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(L=c.parameters)==null?void 0:L.docs)==null?void 0:G.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец,
а удалённая пропадает из таблицы и из списка колонок в сайдбаре.`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var z,K,q,W,Y;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:q.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var N,X,Z;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ae=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlWithServiceColumnsForTest"],he=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:C,ColumnsControlDynamicColumn:c,ColumnsControlInstantApply:p,ColumnsControlWithServiceColumnsForTest:g,SimpleTableDynamicColumn:m,__namedExportsOrder:ae,default:le},Symbol.toStringTag,{value:"Module"}));export{he as T};
