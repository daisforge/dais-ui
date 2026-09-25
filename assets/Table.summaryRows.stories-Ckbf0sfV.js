import{r as c,d as i}from"./react-D2T61mpp.js";import{c as N}from"./tableData-DVJFoYoT.js";import $ from"./DocStoryTemplate-tvb6peuH.js";import{s as F}from"./storySourceDoc-tVKyHcEN.js";import{co as f,cq as p,cp as g,cw as n}from"./vendor-nNOZyNLP.js";import{f as _}from"./Table-iH4XhtW5.js";import{s as T}from"./constants-Ci5uyz-N.js";import{u as K,r as V,w as H}from"./@salutejs/sdds-themes-p9DCXULv.js";import{b as D,p as P}from"./@salutejs/sdds-finai-D4KNbPPv.js";const Y={title:"Локальные компоненты/Table/SummaryRows",tags:["!autodocs"],parameters:{docs:{page:$}}},M=`
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
`,y={...F({preCode:M,previewSource:"shown"}),render:()=>{const[t]=c.useState(N),l=[{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Критичных приоритетов ${t.filter(e=>e.priority==="Critical").length}`}]},{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Высоких приоритетов ${t.filter(e=>e.priority==="High").length}`}]}],u=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${t.length}`},{columnId:"priority",value:`Средних приоритетов ${t.filter(e=>e.priority==="Medium").length}`}]}],a=c.useCallback(e=>{var s;return(s=e.row.values.find(C=>C.columnId===e.column.key))==null?void 0:s.value},[]),m=c.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:a},{key:"task",name:"Title",renderSummaryCell:a},{key:"priority",name:"Priority",renderSummaryCell:e=>{const s=e.row;return i.jsxDEV("div",{style:{color:s.type==="top"?K:V},children:a(e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:136,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[a]);return i.jsxDEV(_,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:m,topSummaryRows:l,bottomSummaryRows:u,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:159,columnNumber:7},void 0)}},S="storybook:table:summary-rows",o={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},R=()=>{try{return localStorage.getItem(S)!=="false"}catch{return!0}},z=async({canvasElement:t,step:l})=>{const u=f(t),a=()=>localStorage.getItem(S),m=()=>u.queryByText("Итого")!==null,e=async()=>{u.queryByTestId(o.switch)||await p.click(await u.findByTestId(o.settingsTab));const s=await u.findByTestId(o.switch);await p.click(f(s).getByText("Итоговые строки"))};await l("Сброс сохранённого выбора",async()=>{await p.click(await u.findByTestId(o.reset)),await g(()=>n(m()).toBe(!0)),await n(a()).toBeNull(),await n(u.getByTestId(o.log)).toHaveTextContent("onChange ещё не вызывался")}),await l("Выключение тогла вызывает onChange(false)",async()=>{await e(),await g(()=>n(m()).toBe(!1)),await n(u.getByTestId(o.log)).toHaveTextContent("onChange: false"),await n(a()).toBe("false")}),await l("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await p.click(u.getByTestId(o.remount)),await g(()=>n(u.getByTestId(o.log)).toHaveTextContent("onChange ещё не вызывался")),await n(m()).toBe(!1)}),await l("Включение тогла вызывает onChange(true)",async()=>{await e(),await g(()=>n(m()).toBe(!0)),await n(u.getByTestId(o.log)).toHaveTextContent("onChange: true"),await n(a()).toBe("true")})},w={name:"Сохранение выбора (onChange)",...F({preCode:M,previewSource:"shown"}),play:z,render:()=>{const[t]=c.useState(N),[l,u]=c.useState(0),[a,m]=c.useState(R),[e,s]=c.useState([]),C=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${t.length}`}]}],A=c.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:r=>{var d;return(d=r.row.values.find(b=>b.columnId===r.column.key))==null?void 0:d.value}},{key:"task",name:"Title",renderSummaryCell:r=>{var d;return(d=r.row.values.find(b=>b.columnId===r.column.key))==null?void 0:d.value}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),O=r=>{try{localStorage.setItem(S,String(r))}catch{}s(d=>[...d,r])},h=()=>{m(R()),s([]),u(r=>r+1)},j=()=>{try{localStorage.removeItem(S)}catch{}h()};return i.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:T.x4},children:[i.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:T.x4},children:[i.jsxDEV(D,{size:"xs",view:"secondary",onClick:h,"data-testid":o.remount,children:"Перемонтировать таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:331,columnNumber:11},void 0),i.jsxDEV(D,{size:"xs",view:"secondary",onClick:j,"data-testid":o.reset,children:"Сбросить сохранённый выбор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:339,columnNumber:11},void 0),i.jsxDEV(P,{color:H,"data-testid":o.log,children:e.length?`onChange: ${e.join(", ")}`:"onChange ещё не вызывался"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:347,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:330,columnNumber:9},void 0),i.jsxDEV(_,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:a,showInControl:!0,onChange:O,domMetadata:{dataAttributes:{"data-testid":o.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":o.settingsTab}}}]}},columnConfig:A,bottomSummaryRows:C,rows:t},l,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:353,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.summaryRows/Table.summaryRows.stories.tsx",lineNumber:329,columnNumber:7},void 0)}};var v,k,E;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const topSummaryRowsData: TSummaryRowData[] = [{
      type: 'top',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'priority',
        value: \`Критичных приоритетов \${rows.filter(el => el.priority === 'Critical').length}\`
      }]
    }, {
      type: 'top',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'priority',
        value: \`Высоких приоритетов \${rows.filter(el => el.priority === 'High').length}\`
      }]
    }];
    const bottomSummaryRowsData: TSummaryRowData[] = [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего тасков \${rows.length}\`
      }, {
        columnId: 'priority',
        value: \`Средних приоритетов \${rows.filter(el => el.priority === 'Medium').length}\`
      }]
    }];
    const renderCommonSummaryCell = useCallback((props: RenderSummaryCellProps<unknown, Row>) => (props.row as TSummaryRowData).values.find(el => el.columnId === props.column.key)?.value, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'task',
      name: 'Title',
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'priority',
      name: 'Priority',
      renderSummaryCell: props => {
        const rowData = props.row as TSummaryRowData;
        return <div style={{
          color: rowData.type === 'top' ? textNegative : textWarning
        }}>
                {renderCommonSummaryCell(props)}
              </div>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [renderCommonSummaryCell]);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      summaryRows: {
        showDefault: true,
        showInControl: true
      }
    }} columnConfig={columnConfig} topSummaryRows={topSummaryRowsData} bottomSummaryRows={bottomSummaryRowsData} rows={rows} />;
  }
}`,...(E=(k=y.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,x,B;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Сохранение выбора (onChange)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  play: playSummaryRowsOnChange,
  render: () => {
    const [rows] = useState(createRows);
    // showDefault читается только при монтировании, поэтому для применения
    // сохранённого значения перемонтируем таблицу через key
    const [tableKey, setTableKey] = useState(0);
    const [showDefault, setShowDefault] = useState(readSavedSummaryRows);
    const [log, setLog] = useState<boolean[]>([]);
    const bottomSummaryRowsData: TSummaryRowData[] = [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего тасков \${rows.length}\`
      }]
    }];
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      renderSummaryCell: props => (props.row as TSummaryRowData).values.find(el => el.columnId === props.column.key)?.value
    }, {
      key: 'task',
      name: 'Title',
      renderSummaryCell: props => (props.row as TSummaryRowData).values.find(el => el.columnId === props.column.key)?.value
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }], []);
    const handleSummaryRowsChange = (checked: boolean) => {
      try {
        localStorage.setItem(SUMMARY_ROWS_STORAGE_KEY, String(checked));
      } catch {
        // localStorage недоступен — просто не сохраняем
      }
      setLog(prev => [...prev, checked]);
    };

    // Имитация перезагрузки страницы: читаем сохранённое значение
    // и монтируем таблицу заново
    const handleRemount = () => {
      setShowDefault(readSavedSummaryRows());
      setLog([]);
      setTableKey(prev => prev + 1);
    };
    const handleReset = () => {
      try {
        localStorage.removeItem(SUMMARY_ROWS_STORAGE_KEY);
      } catch {
        // localStorage недоступен
      }
      handleRemount();
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: s.x4
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: s.x4
      }}>
          <Button size="xs" view="secondary" onClick={handleRemount} data-testid={TEST_ID.remount}>
            Перемонтировать таблицу
          </Button>
          <Button size="xs" view="secondary" onClick={handleReset} data-testid={TEST_ID.reset}>
            Сбросить сохранённый выбор
          </Button>
          <BodyS color={textSecondary} data-testid={TEST_ID.log}>
            {log.length ? \`onChange: \${log.join(', ')}\` : 'onChange ещё не вызывался'}
          </BodyS>
        </div>
        <Table key={tableKey} tableConfig={{
        containerStyle: {
          height: '600px'
        },
        summaryRows: {
          showDefault,
          showInControl: true,
          onChange: handleSummaryRowsChange,
          domMetadata: {
            dataAttributes: {
              'data-testid': TEST_ID.switch
            }
          }
        },
        sidebarConfig: {
          defaultTabs: [{
            id: 'tableSettings',
            domMetadata: {
              dataAttributes: {
                'data-testid': TEST_ID.settingsTab
              }
            }
          }]
        }
      }} columnConfig={columnConfig} bottomSummaryRows={bottomSummaryRowsData} rows={rows} />
      </div>;
  }
}`,...(B=(x=w.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const W=["SummaryRows","SummaryRowsOnChange"],ue=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:y,SummaryRowsOnChange:w,__namedExportsOrder:W,default:Y},Symbol.toStringTag,{value:"Module"}));export{ue as T};
