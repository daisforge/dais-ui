import{r as l,d as m}from"./react-D2T61mpp.js";import{c as _}from"./tableData-DVJFoYoT.js";import P from"./DocStoryTemplate-tvb6peuH.js";import{s as F}from"./storySourceDoc-tVKyHcEN.js";import{co as v,cq as g,cp as y,cw as o}from"./vendor-nNOZyNLP.js";import{C as T,T as M}from"./TableCanvas-pFaLBn25.js";import{s as f}from"./constants-Ci5uyz-N.js";import{w as H}from"./@salutejs/sdds-themes-p9DCXULv.js";import{b as D,p as $}from"./@salutejs/sdds-finai-D4KNbPPv.js";const Y={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:P}},tags:["!autodocs"]},O=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w={...F({preCode:O,previewSource:"shown"}),render:()=>{const[u]=l.useState(_),t=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(n=>n.priority==="Medium").length}`}]}],e=l.useCallback(n=>{var r;return((r=n.row.values.find(d=>d.columnId===n.column.key))==null?void 0:r.value)??""},[]),i=l.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:n=>{const{row:r,theme:d}=n;return m.jsxDEV(T.Container,{padding:{left:d.cellHorizontalPadding,right:d.cellHorizontalPadding},children:m.jsxDEV(T.Text,{color:r.type==="top"?"red":"orange",children:e(n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:98,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:92,columnNumber:15},void 0)}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return m.jsxDEV(M,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:i,bottomSummaryRows:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:118,columnNumber:7},void 0)}},b="storybook:table-canvas:summary-rows",A=200,a={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},R=()=>{try{return localStorage.getItem(b)!=="false"}catch{return!0}},S=u=>{var t;return((t=u.querySelector("table[aria-rowcount]"))==null?void 0:t.getAttribute("aria-rowcount"))===String(A+2)},U=async({canvasElement:u,step:t})=>{const e=v(u),i=()=>localStorage.getItem(b),n=async()=>{e.queryByTestId(a.switch)||await g.click(await e.findByTestId(a.settingsTab));const r=await e.findByTestId(a.switch);await g.click(v(r).getByText("Итоговые строки"))};await t("Сброс сохранённого выбора",async()=>{await g.click(await e.findByTestId(a.reset)),await y(()=>o(S(u)).toBe(!0),{timeout:5e3}),await o(i()).toBeNull(),await o(e.getByTestId(a.log)).toHaveTextContent("onChange ещё не вызывался")}),await t("Выключение тогла вызывает onChange(false)",async()=>{await n(),await y(()=>o(S(u)).toBe(!1)),await o(e.getByTestId(a.log)).toHaveTextContent("onChange: false"),await o(i()).toBe("false")}),await t("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await g.click(e.getByTestId(a.remount)),await y(()=>o(e.getByTestId(a.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>o(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await o(S(u)).toBe(!1)}),await t("Включение тогла вызывает onChange(true)",async()=>{await n(),await y(()=>o(S(u)).toBe(!0)),await o(e.getByTestId(a.log)).toHaveTextContent("onChange: true"),await o(i()).toBe("true")})},C={name:"Сохранение выбора (onChange)",...F({preCode:O,previewSource:"shown"}),play:U,render:()=>{const[u]=l.useState(()=>_(void 0,A)),[t,e]=l.useState(0),[i,n]=l.useState(R),[r,d]=l.useState([]),j=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],V=l.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:s=>{var c;return((c=s.row.values.find(p=>p.columnId===s.column.key))==null?void 0:c.value)??""}},{key:"task",name:"Title",renderSummaryCell:s=>{var c;return((c=s.row.values.find(p=>p.columnId===s.column.key))==null?void 0:c.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),z=s=>{try{localStorage.setItem(b,String(s))}catch{}d(c=>[...c,s])},h=()=>{n(R()),d([]),e(s=>s+1)},K=()=>{try{localStorage.removeItem(b)}catch{}h()};return m.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:f.x4},children:[m.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:f.x4},children:[m.jsxDEV(D,{size:"xs",view:"secondary",onClick:h,"data-testid":a.remount,children:"Перемонтировать таблицу"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:304,columnNumber:11},void 0),m.jsxDEV(D,{size:"xs",view:"secondary",onClick:K,"data-testid":a.reset,children:"Сбросить сохранённый выбор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:312,columnNumber:11},void 0),m.jsxDEV($,{color:H,"data-testid":a.log,children:r.length?`onChange: ${r.join(", ")}`:"onChange ещё не вызывался"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:320,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:303,columnNumber:9},void 0),m.jsxDEV(M,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:i,showInControl:!0,onChange:z,domMetadata:{dataAttributes:{"data-testid":a.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":a.settingsTab}}}]}},columnConfig:V,bottomSummaryRows:j,rows:u},t,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:326,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.SummaryRows/TableCanvas.summaryRows.stories.tsx",lineNumber:302,columnNumber:7},void 0)}};var k,E,I;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(E=w.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var x,B,N;C.parameters={...C.parameters,docs:{...(x=C.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(B=C.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const W=["SummaryRows","SummaryRowsOnChange"],ae=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:w,SummaryRowsOnChange:C,__namedExportsOrder:W,default:Y},Symbol.toStringTag,{value:"Module"}));export{ae as T};
