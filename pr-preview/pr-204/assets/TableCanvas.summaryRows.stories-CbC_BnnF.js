import{r as i,b as m}from"./react-UEdzNlUe.js";import{c as F}from"./tableData-DKA5H0bF.js";import P from"./DocStoryTemplate-CBeApVWX.js";import{s as M}from"./storySourceDoc-tVKyHcEN.js";import{w as T,u as w,a as y,e as a}from"./index-Dgmteq0e.js";import{C as f,T as O}from"./TableCanvas-Ce-5ivfo.js";import{s as D}from"./constants-YnncqoDz.js";import{E as H}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{t as R,l as $}from"./@salutejs/sdds-finai-B8Iabp4m.js";const Y={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:P}},tags:["!autodocs"]},A=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,g={...M({preCode:A,previewSource:"shown"}),render:()=>{const[u]=i.useState(F),o=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(t=>t.priority==="Medium").length}`}]}],e=i.useCallback(t=>{var s;return((s=t.row.values.find(r=>r.columnId===t.column.key))==null?void 0:s.value)??""},[]),d=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:t=>{const{row:s,theme:r}=t;return m.jsxDEV(f.Container,{padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},children:m.jsxDEV(f.Text,{color:s.type==="top"?"red":"orange",children:e(t)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:98,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:92,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return m.jsxDEV(O,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:d,bottomSummaryRows:o,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:118,columnNumber:7},void 0)}},b="storybook:table-canvas:summary-rows",j=200,n={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},k=()=>{try{return localStorage.getItem(b)!=="false"}catch{return!0}},C=u=>{var o;return((o=u.querySelector("table[aria-rowcount]"))==null?void 0:o.getAttribute("aria-rowcount"))===String(j+2)},U=async({canvasElement:u,step:o})=>{const e=T(u),d=()=>localStorage.getItem(b),t=async()=>{e.queryByTestId(n.switch)||await w.click(await e.findByTestId(n.settingsTab));const s=await e.findByTestId(n.switch),r=s.closest("[data-table-sidebar]");if(!r)throw new Error("Не найдена панель настроек таблицы");await y(()=>a(r.getAnimations({subtree:!0}).some(p=>p.playState==="running")).toBe(!1)),await w.click(T(s).getByText("Итоговые строки"))};await o("Сброс сохранённого выбора",async()=>{await w.click(await e.findByTestId(n.reset)),await y(()=>a(C(u)).toBe(!0),{timeout:5e3}),await a(d()).toBeNull(),await a(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")}),await o("Выключение тогла вызывает onChange(false)",async()=>{await t(),await y(()=>a(C(u)).toBe(!1)),await a(e.getByTestId(n.log)).toHaveTextContent("onChange: false"),await a(d()).toBe("false")}),await o("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await w.click(e.getByTestId(n.remount)),await y(()=>a(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>a(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await a(C(u)).toBe(!1)}),await o("Включение тогла вызывает onChange(true)",async()=>{await t(),await y(()=>a(C(u)).toBe(!0)),await a(e.getByTestId(n.log)).toHaveTextContent("onChange: true"),await a(d()).toBe("true")}),await o("Итоговая строка остаётся после закрытия настроек",async()=>{await w.click(e.getByTitle("Закрыть")),await y(()=>a(e.queryByText("Итоговые строки")).not.toBeInTheDocument()),await a(C(u)).toBe(!0)})},S={name:"Сохранение выбора (onChange)",...M({preCode:A,previewSource:"shown"}),play:U,render:()=>{const[u]=i.useState(()=>F(void 0,j)),[o,e]=i.useState(0),[d,t]=i.useState(k),[s,r]=i.useState([]),p=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],V=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:l=>{var c;return((c=l.row.values.find(h=>h.columnId===l.column.key))==null?void 0:c.value)??""}},{key:"task",name:"Title",renderSummaryCell:l=>{var c;return((c=l.row.values.find(h=>h.columnId===l.column.key))==null?void 0:c.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),z=l=>{try{localStorage.setItem(b,String(l))}catch{}r(c=>[...c,l])},v=()=>{t(k()),r([]),e(l=>l+1)},K=()=>{try{localStorage.removeItem(b)}catch{}v()};return m.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:D.x4},children:[m.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:D.x4},children:[m.jsxDEV(R,{size:"xs",view:"secondary",onClick:v,"data-testid":n.remount,children:"Перемонтировать таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:322,columnNumber:11},void 0),m.jsxDEV(R,{size:"xs",view:"secondary",onClick:K,"data-testid":n.reset,children:"Сбросить сохранённый выбор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:330,columnNumber:11},void 0),m.jsxDEV($,{color:H,"data-testid":n.log,children:s.length?`onChange: ${s.join(", ")}`:"onChange ещё не вызывался"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:338,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:321,columnNumber:9},void 0),m.jsxDEV(O,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:d,showInControl:!0,onChange:z,domMetadata:{dataAttributes:{"data-testid":n.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":n.settingsTab}}}]}},columnConfig:V,bottomSummaryRows:p,rows:u},o,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:344,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:320,columnNumber:7},void 0)}};var E,I,x;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(I=g.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,N,_;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(N=S.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const W=["SummaryRows","SummaryRowsOnChange"],ae=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:g,SummaryRowsOnChange:S,__namedExportsOrder:W,default:Y},Symbol.toStringTag,{value:"Module"}));export{ae as T};
