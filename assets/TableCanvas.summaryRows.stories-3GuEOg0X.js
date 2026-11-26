import{r as i,j as m}from"./react-DYHuXpTF.js";import{c as M}from"./tableData-DKA5H0bF.js";import $ from"./DocStoryTemplate-DXKmSnyp.js";import{s as O}from"./storySourceDoc-tVKyHcEN.js";import{w as D,u as w,a as y,e as t}from"./index-BmaccWcy.js";import{C as v,T as A}from"./TableCanvas-C_9Oi1JT.js";import{s as b}from"./constants-YnncqoDz.js";import{E as Y}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{t as R,l as U}from"./@salutejs/sdds-finai-C2CeMSda.js";const W={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:$}},tags:["!autodocs"]},j=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,S={...O({preCode:j,previewSource:"shown"}),render:()=>{const[u]=i.useState(M),a=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(o=>o.priority==="Medium").length}`}]}],e=i.useCallback(o=>{var r;return((r=o.row.values.find(s=>s.columnId===o.column.key))==null?void 0:r.value)??""},[]),c=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:o=>{const{row:r,theme:s}=o;return m.jsx(v.Container,{padding:{left:s.cellHorizontalPadding,right:s.cellHorizontalPadding},children:m.jsx(v.Text,{color:r.type==="top"?"red":"orange",children:e(o)})})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return m.jsx(A,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:c,bottomSummaryRows:a,rows:u})}},p="storybook:table-canvas:summary-rows",z=200,n={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},I=()=>{try{return localStorage.getItem(p)!=="false"}catch{return!0}},g=u=>{var a;return((a=u.querySelector("table[aria-rowcount]"))==null?void 0:a.getAttribute("aria-rowcount"))===String(z+2)},q=async({canvasElement:u,step:a})=>{const e=D(u),c=()=>localStorage.getItem(p),o=async()=>{e.queryByTestId(n.switch)||await w.click(await e.findByTestId(n.settingsTab));const r=await e.findByTestId(n.switch),s=r.closest("[data-table-sidebar]");if(!s)throw new Error("Не найдена панель настроек таблицы");await y(()=>t(s.getAnimations({subtree:!0}).some(h=>h.playState==="running")).toBe(!1)),await w.click(D(r).getByText("Итоговые строки"))};await a("Сброс сохранённого выбора",async()=>{await w.click(await e.findByTestId(n.reset)),await y(()=>t(g(u)).toBe(!0),{timeout:5e3}),await t(c()).toBeNull(),await t(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")}),await a("Выключение тогла вызывает onChange(false)",async()=>{await o(),await y(()=>t(g(u)).toBe(!1)),await t(e.getByTestId(n.log)).toHaveTextContent("onChange: false"),await t(c()).toBe("false")}),await a("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await w.click(e.getByTestId(n.remount)),await y(()=>t(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>t(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await t(g(u)).toBe(!1)}),await a("Включение тогла вызывает onChange(true)",async()=>{await o(),await y(()=>t(g(u)).toBe(!0)),await t(e.getByTestId(n.log)).toHaveTextContent("onChange: true"),await t(c()).toBe("true")}),await a("Итоговая строка остаётся после закрытия настроек",async()=>{await w.click(e.getByTitle("Закрыть")),await y(()=>t(e.queryByText("Итоговые строки")).not.toBeInTheDocument()),await t(g(u)).toBe(!0)})},C={name:"Сохранение выбора (onChange)",...O({preCode:j,previewSource:"shown"}),play:q,render:()=>{const[u]=i.useState(()=>M(void 0,z)),[a,e]=i.useState(0),[c,o]=i.useState(I),[r,s]=i.useState([]),h=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],K=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:l=>{var d;return((d=l.row.values.find(T=>T.columnId===l.column.key))==null?void 0:d.value)??""}},{key:"task",name:"Title",renderSummaryCell:l=>{var d;return((d=l.row.values.find(T=>T.columnId===l.column.key))==null?void 0:d.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),P=l=>{try{localStorage.setItem(p,String(l))}catch{}s(d=>[...d,l])},f=()=>{o(I()),s([]),e(l=>l+1)},H=()=>{try{localStorage.removeItem(p)}catch{}f()};return m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:b.x4},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:b.x4},children:[m.jsx(R,{size:"xs",view:"secondary",onClick:f,"data-testid":n.remount,children:"Перемонтировать таблицу"}),m.jsx(R,{size:"xs",view:"secondary",onClick:H,"data-testid":n.reset,children:"Сбросить сохранённый выбор"}),m.jsx(U,{color:Y,"data-testid":n.log,children:r.length?`onChange: ${r.join(", ")}`:"onChange ещё не вызывался"})]}),m.jsx(A,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:c,showInControl:!0,onChange:P,domMetadata:{dataAttributes:{"data-testid":n.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":n.settingsTab}}}]}},columnConfig:K,bottomSummaryRows:h,rows:u},a)]})}};var k,E,x;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(E=S.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var B,_,F;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(_=C.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const G=["SummaryRows","SummaryRowsOnChange"],te=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:S,SummaryRowsOnChange:C,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{te as T};
