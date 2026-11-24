import{r as i,b as l}from"./react-UEdzNlUe.js";import{c as F}from"./tableData-DKA5H0bF.js";import P from"./DocStoryTemplate-CaG7Oz3D.js";import{s as M}from"./storySourceDoc-tVKyHcEN.js";import{w as f,u as g,a as y,e as n}from"./index-Dgmteq0e.js";import{C as T,T as O}from"./TableCanvas-Cr9x2_E8.js";import{s as D}from"./constants-3UB8ZrMK.js";import{E as H}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{c as R,r as $}from"./@salutejs/sdds-finai-CkM2RoIx.js";const Y={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:P}},tags:["!autodocs"]},A=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w={...M({preCode:A,previewSource:"shown"}),render:()=>{const[u]=i.useState(F),t=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(o=>o.priority==="Medium").length}`}]}],e=i.useCallback(o=>{var s;return((s=o.row.values.find(r=>r.columnId===o.column.key))==null?void 0:s.value)??""},[]),d=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:o=>{const{row:s,theme:r}=o;return l.jsxDEV(T.Container,{padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},children:l.jsxDEV(T.Text,{color:s.type==="top"?"red":"orange",children:e(o)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:98,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:92,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return l.jsxDEV(O,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:d,bottomSummaryRows:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:118,columnNumber:7},void 0)}},b="storybook:table-canvas:summary-rows",j=200,a={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},k=()=>{try{return localStorage.getItem(b)!=="false"}catch{return!0}},S=u=>{var t;return((t=u.querySelector("table[aria-rowcount]"))==null?void 0:t.getAttribute("aria-rowcount"))===String(j+2)},U=async({canvasElement:u,step:t})=>{const e=f(u),d=()=>localStorage.getItem(b),o=async()=>{e.queryByTestId(a.switch)||await g.click(await e.findByTestId(a.settingsTab));const s=await e.findByTestId(a.switch),r=s.closest("[data-table-sidebar]");if(!r)throw new Error("Не найдена панель настроек таблицы");await y(()=>n(r.getAnimations({subtree:!0}).some(p=>p.playState==="running")).toBe(!1)),await g.click(f(s).getByText("Итоговые строки"))};await t("Сброс сохранённого выбора",async()=>{await g.click(await e.findByTestId(a.reset)),await y(()=>n(S(u)).toBe(!0),{timeout:5e3}),await n(d()).toBeNull(),await n(e.getByTestId(a.log)).toHaveTextContent("onChange ещё не вызывался")}),await t("Выключение тогла вызывает onChange(false)",async()=>{await o(),await y(()=>n(S(u)).toBe(!1)),await n(e.getByTestId(a.log)).toHaveTextContent("onChange: false"),await n(d()).toBe("false")}),await t("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await g.click(e.getByTestId(a.remount)),await y(()=>n(e.getByTestId(a.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>n(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await n(S(u)).toBe(!1)}),await t("Включение тогла вызывает onChange(true)",async()=>{await o(),await y(()=>n(S(u)).toBe(!0)),await n(e.getByTestId(a.log)).toHaveTextContent("onChange: true"),await n(d()).toBe("true")})},C={name:"Сохранение выбора (onChange)",...M({preCode:A,previewSource:"shown"}),play:U,render:()=>{const[u]=i.useState(()=>F(void 0,j)),[t,e]=i.useState(0),[d,o]=i.useState(k),[s,r]=i.useState([]),p=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],V=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:m=>{var c;return((c=m.row.values.find(h=>h.columnId===m.column.key))==null?void 0:c.value)??""}},{key:"task",name:"Title",renderSummaryCell:m=>{var c;return((c=m.row.values.find(h=>h.columnId===m.column.key))==null?void 0:c.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),z=m=>{try{localStorage.setItem(b,String(m))}catch{}r(c=>[...c,m])},v=()=>{o(k()),r([]),e(m=>m+1)},K=()=>{try{localStorage.removeItem(b)}catch{}v()};return l.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:D.x4},children:[l.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:D.x4},children:[l.jsxDEV(R,{size:"xs",view:"secondary",onClick:v,"data-testid":a.remount,children:"Перемонтировать таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:314,columnNumber:11},void 0),l.jsxDEV(R,{size:"xs",view:"secondary",onClick:K,"data-testid":a.reset,children:"Сбросить сохранённый выбор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:322,columnNumber:11},void 0),l.jsxDEV($,{color:H,"data-testid":a.log,children:s.length?`onChange: ${s.join(", ")}`:"onChange ещё не вызывался"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:330,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:313,columnNumber:9},void 0),l.jsxDEV(O,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:d,showInControl:!0,onChange:z,domMetadata:{dataAttributes:{"data-testid":a.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":a.settingsTab}}}]}},columnConfig:V,bottomSummaryRows:p,rows:u},t,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:336,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:312,columnNumber:7},void 0)}};var E,I,x;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
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
    const renderCommonSummaryCell = useCallback((props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) => props.row.values.find(el => el.columnId === props.column.key)?.value ?? '', []);
    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(() => [{
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
        const {
          row,
          theme
        } = props;
        return <Canvas.Container padding={{
          left: theme.cellHorizontalPadding,
          right: theme.cellHorizontalPadding
        }}>
                <Canvas.Text color={row.type === 'top' ? 'red' : 'orange'}>
                  {renderCommonSummaryCell(props)}
                </Canvas.Text>
              </Canvas.Container>;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }], [renderCommonSummaryCell]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      summaryRows: {
        showDefault: true,
        showInControl: true
      }
    }} columnConfig={columnConfig} bottomSummaryRows={bottomSummaryRowsData} rows={rows} />;
  }
}`,...(x=(I=w.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,N,_;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Сохранение выбора (onChange)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  play: playSummaryRowsOnChange,
  render: () => {
    const [rows] = useState(() => createRows(undefined, ROWS_COUNT));
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
    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(() => [{
      key: 'id',
      name: 'ID',
      renderSummaryCell: props => props.row.values.find(el => el.columnId === props.column.key)?.value ?? ''
    }, {
      key: 'task',
      name: 'Title',
      renderSummaryCell: props => props.row.values.find(el => el.columnId === props.column.key)?.value ?? ''
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
        <TableCanvas key={tableKey} tableConfig={{
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
}`,...(_=(N=C.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const W=["SummaryRows","SummaryRowsOnChange"],ae=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:w,SummaryRowsOnChange:C,__namedExportsOrder:W,default:Y},Symbol.toStringTag,{value:"Module"}));export{ae as T};
