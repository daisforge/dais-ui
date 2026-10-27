import{r as c,j as i}from"./react-CAOzMBF_.js";import{c as F}from"./tableData-DVJFoYoT.js";import K from"./DocStoryTemplate-Cf946dgV.js";import{s as _}from"./storySourceDoc-tVKyHcEN.js";import{co as D,cq as S,cp as g,cv as n}from"./vendor-DmWczWMC.js";import{f as M}from"./Table-BQHrw1K6.js";import{s as v}from"./constants-DatVHdkd.js";import{w as H,v as P,y as Y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as R,m as z}from"./@salutejs/sdds-finai-CKhMjg07.js";const W={title:"Локальные компоненты/Table/SummaryRows",tags:["!autodocs"],parameters:{docs:{page:K}}},A=`
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
`,d={..._({preCode:A,previewSource:"shown"}),render:()=>{const[o]=c.useState(F),l=[{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Критичных приоритетов ${o.filter(u=>u.priority==="Critical").length}`}]},{type:"top",values:[{columnId:"id",value:"Итого"},{columnId:"priority",value:`Высоких приоритетов ${o.filter(u=>u.priority==="High").length}`}]}],e=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${o.length}`},{columnId:"priority",value:`Средних приоритетов ${o.filter(u=>u.priority==="Medium").length}`}]}],a=c.useCallback(u=>{var s;return(s=u.row.values.find(C=>C.columnId===u.column.key))==null?void 0:s.value},[]),m=c.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:a},{key:"task",name:"Title",renderSummaryCell:a},{key:"priority",name:"Priority",renderSummaryCell:u=>{const s=u.row;return i.jsx("div",{style:{color:s.type==="top"?H:P},children:a(u)})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[a]);return i.jsx(M,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:m,topSummaryRows:l,bottomSummaryRows:e,rows:o})}},p="storybook:table:summary-rows",t={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},T=()=>{try{return localStorage.getItem(p)!=="false"}catch{return!0}},G=async({canvasElement:o,step:l})=>{const e=D(o),a=()=>localStorage.getItem(p),m=()=>e.queryByText("Итого")!==null,u=async()=>{e.queryByTestId(t.switch)||await S.click(await e.findByTestId(t.settingsTab));const s=await e.findByTestId(t.switch);await S.click(D(s).getByText("Итоговые строки"))};await l("Сброс сохранённого выбора",async()=>{await S.click(await e.findByTestId(t.reset)),await g(()=>n(m()).toBe(!0)),await n(a()).toBeNull(),await n(e.getByTestId(t.log)).toHaveTextContent("onChange ещё не вызывался")}),await l("Выключение тогла вызывает onChange(false)",async()=>{await u(),await g(()=>n(m()).toBe(!1)),await n(e.getByTestId(t.log)).toHaveTextContent("onChange: false"),await n(a()).toBe("false")}),await l("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await S.click(e.getByTestId(t.remount)),await g(()=>n(e.getByTestId(t.log)).toHaveTextContent("onChange ещё не вызывался")),await n(m()).toBe(!1)}),await l("Включение тогла вызывает onChange(true)",async()=>{await u(),await g(()=>n(m()).toBe(!0)),await n(e.getByTestId(t.log)).toHaveTextContent("onChange: true"),await n(a()).toBe("true")})},w={name:"Сохранение выбора (onChange)",..._({preCode:A,previewSource:"shown"}),play:G,render:()=>{const[o]=c.useState(F),[l,e]=c.useState(0),[a,m]=c.useState(T),[u,s]=c.useState([]),C=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${o.length}`}]}],O=c.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:r=>{var y;return(y=r.row.values.find(h=>h.columnId===r.column.key))==null?void 0:y.value}},{key:"task",name:"Title",renderSummaryCell:r=>{var y;return(y=r.row.values.find(h=>h.columnId===r.column.key))==null?void 0:y.value}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),j=r=>{try{localStorage.setItem(p,String(r))}catch{}s(y=>[...y,r])},f=()=>{m(T()),s([]),e(r=>r+1)},$=()=>{try{localStorage.removeItem(p)}catch{}f()};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:v.x4},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:v.x4},children:[i.jsx(R,{size:"xs",view:"secondary",onClick:f,"data-testid":t.remount,children:"Перемонтировать таблицу"}),i.jsx(R,{size:"xs",view:"secondary",onClick:$,"data-testid":t.reset,children:"Сбросить сохранённый выбор"}),i.jsx(z,{color:Y,"data-testid":t.log,children:u.length?`onChange: ${u.join(", ")}`:"onChange ещё не вызывался"})]}),i.jsx(M,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:a,showInControl:!0,onChange:j,domMetadata:{dataAttributes:{"data-testid":t.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":t.settingsTab}}}]}},columnConfig:O,bottomSummaryRows:C,rows:o},l)]})}};var E,I,b;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(I=d.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var k,x,B;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(x=w.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const L=["SummaryRows","SummaryRowsOnChange"],eu=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:d,SummaryRowsOnChange:w,__namedExportsOrder:L,default:W},Symbol.toStringTag,{value:"Module"}));export{eu as T};
