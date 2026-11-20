import{r as i,j as m}from"./react-DYHuXpTF.js";import{c as M}from"./tableData-DKA5H0bF.js";import $ from"./DocStoryTemplate-C-m25YlE.js";import{s as O}from"./storySourceDoc-tVKyHcEN.js";import{w as D,u as S,a as y,e as t}from"./index-BmaccWcy.js";import{C as v,T as A}from"./TableCanvas-Ce8EJXt2.js";import{s as b}from"./constants-3UB8ZrMK.js";import{E as Y}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{c as R,r as U}from"./@salutejs/sdds-finai-CW-5BJnR.js";const W={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:$}},tags:["!autodocs"]},j=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w={...O({preCode:j,previewSource:"shown"}),render:()=>{const[u]=i.useState(M),o=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(a=>a.priority==="Medium").length}`}]}],e=i.useCallback(a=>{var r;return((r=a.row.values.find(s=>s.columnId===a.column.key))==null?void 0:r.value)??""},[]),c=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:a=>{const{row:r,theme:s}=a;return m.jsx(v.Container,{padding:{left:s.cellHorizontalPadding,right:s.cellHorizontalPadding},children:m.jsx(v.Text,{color:r.type==="top"?"red":"orange",children:e(a)})})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return m.jsx(A,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:c,bottomSummaryRows:o,rows:u})}},p="storybook:table-canvas:summary-rows",z=200,n={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},I=()=>{try{return localStorage.getItem(p)!=="false"}catch{return!0}},C=u=>{var o;return((o=u.querySelector("table[aria-rowcount]"))==null?void 0:o.getAttribute("aria-rowcount"))===String(z+2)},G=async({canvasElement:u,step:o})=>{const e=D(u),c=()=>localStorage.getItem(p),a=async()=>{e.queryByTestId(n.switch)||await S.click(await e.findByTestId(n.settingsTab));const r=await e.findByTestId(n.switch),s=r.closest("[data-table-sidebar]");if(!s)throw new Error("Не найдена панель настроек таблицы");await y(()=>t(s.getAnimations({subtree:!0}).some(h=>h.playState==="running")).toBe(!1)),await S.click(D(r).getByText("Итоговые строки"))};await o("Сброс сохранённого выбора",async()=>{await S.click(await e.findByTestId(n.reset)),await y(()=>t(C(u)).toBe(!0),{timeout:5e3}),await t(c()).toBeNull(),await t(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")}),await o("Выключение тогла вызывает onChange(false)",async()=>{await a(),await y(()=>t(C(u)).toBe(!1)),await t(e.getByTestId(n.log)).toHaveTextContent("onChange: false"),await t(c()).toBe("false")}),await o("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await S.click(e.getByTestId(n.remount)),await y(()=>t(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>t(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await t(C(u)).toBe(!1)}),await o("Включение тогла вызывает onChange(true)",async()=>{await a(),await y(()=>t(C(u)).toBe(!0)),await t(e.getByTestId(n.log)).toHaveTextContent("onChange: true"),await t(c()).toBe("true")})},g={name:"Сохранение выбора (onChange)",...O({preCode:j,previewSource:"shown"}),play:G,render:()=>{const[u]=i.useState(()=>M(void 0,z)),[o,e]=i.useState(0),[c,a]=i.useState(I),[r,s]=i.useState([]),h=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],K=i.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:l=>{var d;return((d=l.row.values.find(f=>f.columnId===l.column.key))==null?void 0:d.value)??""}},{key:"task",name:"Title",renderSummaryCell:l=>{var d;return((d=l.row.values.find(f=>f.columnId===l.column.key))==null?void 0:d.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),P=l=>{try{localStorage.setItem(p,String(l))}catch{}s(d=>[...d,l])},T=()=>{a(I()),s([]),e(l=>l+1)},H=()=>{try{localStorage.removeItem(p)}catch{}T()};return m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:b.x4},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:b.x4},children:[m.jsx(R,{size:"xs",view:"secondary",onClick:T,"data-testid":n.remount,children:"Перемонтировать таблицу"}),m.jsx(R,{size:"xs",view:"secondary",onClick:H,"data-testid":n.reset,children:"Сбросить сохранённый выбор"}),m.jsx(U,{color:Y,"data-testid":n.log,children:r.length?`onChange: ${r.join(", ")}`:"onChange ещё не вызывался"})]}),m.jsx(A,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:c,showInControl:!0,onChange:P,domMetadata:{dataAttributes:{"data-testid":n.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":n.settingsTab}}}]}},columnConfig:K,bottomSummaryRows:h,rows:u},o)]})}};var E,k,x;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(k=w.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,_,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const L=["SummaryRows","SummaryRowsOnChange"],ne=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:w,SummaryRowsOnChange:g,__namedExportsOrder:L,default:W},Symbol.toStringTag,{value:"Module"}));export{ne as T};
