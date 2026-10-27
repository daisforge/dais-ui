import{r as m,j as l}from"./react-CAOzMBF_.js";import{c as F}from"./tableData-DVJFoYoT.js";import $ from"./DocStoryTemplate-Cf946dgV.js";import{s as M}from"./storySourceDoc-tVKyHcEN.js";import{co as T,cq as S,cp as y,cv as o}from"./vendor-DmWczWMC.js";import{C as D,T as O}from"./TableCanvas-DlX-Wh2b.js";import{s as v}from"./constants-DatVHdkd.js";import{y as Y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as R,m as U}from"./@salutejs/sdds-finai-CKhMjg07.js";const W={title:"Локальные компоненты/TableCanvas/SummaryRows",parameters:{docs:{page:$}},tags:["!autodocs"]},j=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w={...M({preCode:j,previewSource:"shown"}),render:()=>{const[u]=m.useState(F),a=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`},{columnId:"priority",value:`Средних приоритетов ${u.filter(t=>t.priority==="Medium").length}`}]}],e=m.useCallback(t=>{var s;return((s=t.row.values.find(c=>c.columnId===t.column.key))==null?void 0:s.value)??""},[]),i=m.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:e},{key:"task",name:"Title",renderSummaryCell:e},{key:"priority",name:"Priority",renderSummaryCell:t=>{const{row:s,theme:c}=t;return l.jsx(D.Container,{padding:{left:c.cellHorizontalPadding,right:c.cellHorizontalPadding},children:l.jsx(D.Text,{color:s.type==="top"?"red":"orange",children:e(t)})})}},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[e]);return l.jsx(O,{tableConfig:{containerStyle:{height:"700px"},summaryRows:{showDefault:!0,showInControl:!0}},columnConfig:i,bottomSummaryRows:a,rows:u})}},p="storybook:table-canvas:summary-rows",A=200,n={settingsTab:"summary-rows-settings-tab",switch:"summary-rows-switch",remount:"summary-rows-remount",reset:"summary-rows-reset",log:"summary-rows-log"},b=()=>{try{return localStorage.getItem(p)!=="false"}catch{return!0}},C=u=>{var a;return((a=u.querySelector("table[aria-rowcount]"))==null?void 0:a.getAttribute("aria-rowcount"))===String(A+2)},q=async({canvasElement:u,step:a})=>{const e=T(u),i=()=>localStorage.getItem(p),t=async()=>{e.queryByTestId(n.switch)||await S.click(await e.findByTestId(n.settingsTab));const s=await e.findByTestId(n.switch);await S.click(T(s).getByText("Итоговые строки"))};await a("Сброс сохранённого выбора",async()=>{await S.click(await e.findByTestId(n.reset)),await y(()=>o(C(u)).toBe(!0),{timeout:5e3}),await o(i()).toBeNull(),await o(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")}),await a("Выключение тогла вызывает onChange(false)",async()=>{await t(),await y(()=>o(C(u)).toBe(!1)),await o(e.getByTestId(n.log)).toHaveTextContent("onChange: false"),await o(i()).toBe("false")}),await a("После перемонтирования выбор восстановлен, onChange не вызывается",async()=>{await S.click(e.getByTestId(n.remount)),await y(()=>o(e.getByTestId(n.log)).toHaveTextContent("onChange ещё не вызывался")),await y(()=>o(u.querySelector("table[aria-rowcount]")).not.toBeNull()),await o(C(u)).toBe(!1)}),await a("Включение тогла вызывает onChange(true)",async()=>{await t(),await y(()=>o(C(u)).toBe(!0)),await o(e.getByTestId(n.log)).toHaveTextContent("onChange: true"),await o(i()).toBe("true")})},g={name:"Сохранение выбора (onChange)",...M({preCode:j,previewSource:"shown"}),play:q,render:()=>{const[u]=m.useState(()=>F(void 0,A)),[a,e]=m.useState(0),[i,t]=m.useState(b),[s,c]=m.useState([]),z=[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков ${u.length}`}]}],K=m.useMemo(()=>[{key:"id",name:"ID",renderSummaryCell:r=>{var d;return((d=r.row.values.find(h=>h.columnId===r.column.key))==null?void 0:d.value)??""}},{key:"task",name:"Title",renderSummaryCell:r=>{var d;return((d=r.row.values.find(h=>h.columnId===r.column.key))==null?void 0:d.value)??""}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]),P=r=>{try{localStorage.setItem(p,String(r))}catch{}c(d=>[...d,r])},f=()=>{t(b()),c([]),e(r=>r+1)},H=()=>{try{localStorage.removeItem(p)}catch{}f()};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:v.x4},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:v.x4},children:[l.jsx(R,{size:"xs",view:"secondary",onClick:f,"data-testid":n.remount,children:"Перемонтировать таблицу"}),l.jsx(R,{size:"xs",view:"secondary",onClick:H,"data-testid":n.reset,children:"Сбросить сохранённый выбор"}),l.jsx(U,{color:Y,"data-testid":n.log,children:s.length?`onChange: ${s.join(", ")}`:"onChange ещё не вызывался"})]}),l.jsx(O,{tableConfig:{containerStyle:{height:"600px"},summaryRows:{showDefault:i,showInControl:!0,onChange:P,domMetadata:{dataAttributes:{"data-testid":n.switch}}},sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{dataAttributes:{"data-testid":n.settingsTab}}}]}},columnConfig:K,bottomSummaryRows:z,rows:u},a)]})}};var I,k,E;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(k=w.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var x,B,_;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(B=g.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const G=["SummaryRows","SummaryRowsOnChange"],ne=Object.freeze(Object.defineProperty({__proto__:null,SummaryRows:w,SummaryRowsOnChange:g,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{ne as T};
