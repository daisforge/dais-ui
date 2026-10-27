import{r,j as e}from"./react-CAOzMBF_.js";import{c as f}from"./tableData-DVJFoYoT.js";import g from"./DocStoryTemplate-Cf946dgV.js";import{S as m}from"./StoryHint-AurwRlnz.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{T as v}from"./TableCanvas-DlX-Wh2b.js";const y={title:"Локальные компоненты/TableCanvas/Notifications",tags:["!autodocs"],parameters:{docs:{page:g}}},h=[{key:"id",name:"ID (readonly)",width:120},{key:"task",name:"Задача",width:260,editingCell:{editable:!0,component:"inputString"}},{key:"priority",name:"Приоритет",width:160,editingCell:{editable:!0,component:"inputString"}},{key:"complete",name:"% (число)",width:140,editingCell:{editable:!0,component:"inputNumber"}}],l={error:"#d64545",warning:"#c98a00",info:"#3b7dd8"},n={name:"Подписка на события (onNotification)",...x({previewSource:"shown"}),render:()=>{const[c,b]=r.useState(f),p=r.useMemo(()=>h,[]),[t,i]=r.useState([]);return e.jsxs("div",{children:[e.jsxs(m,{children:["Режим ",e.jsx("b",{children:"multi-range-cell"}),". Как спровоцировать события:",e.jsx("br",{}),"• ",e.jsx("b",{children:"copy / multi-range-scattered"})," — Ctrl-выдели ячейки в РАЗНЫХ строках и колонках → Ctrl+C.",e.jsx("br",{}),"• ",e.jsx("b",{children:"paste / multi-range-scattered"})," — тот же 2D-выбор → Ctrl+V.",e.jsx("br",{}),"• ",e.jsx("b",{children:"paste / readonly-abort"})," — вставь в диапазон, задевающий колонку ID.",e.jsx("br",{}),"• ",e.jsx("b",{children:"paste / overflow-abort"})," — вставь большой блок у нижнего/правого края.",e.jsx("br",{}),"• ",e.jsx("b",{children:"paste / validation-skipped"})," — вставь текст в колонку «% (число)».",e.jsx("br",{}),"• ",e.jsx("b",{children:"fill / readonly-abort"}),", ",e.jsx("b",{children:"fill / validation-skipped"}),"— то же протаскиванием fill-handle."]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{flex:1,minWidth:0},children:e.jsx(v,{tableConfig:{containerStyle:{height:"520px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},cellTransfer:{enabled:!0,paste:{readonlyBehavior:"abort",overflowBehavior:"abort"}},editing:{onRowsChange:b,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0},notifications:{onNotification:u=>i(o=>[u,...o].slice(0,20))}},columnConfig:p,rows:c})}),e.jsxs("div",{style:{width:340,fontSize:12},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsxs("b",{children:["Полученные события (",t.length,")"]}),e.jsx("button",{type:"button",onClick:()=>i([]),style:{padding:"4px 10px",borderRadius:8,border:"1px solid #c7d2e0",background:"#fff",cursor:"pointer"},children:"Очистить"})]}),t.length===0&&e.jsx("div",{style:{color:"#8893a5"},children:"Пока пусто"}),t.map((u,o)=>e.jsxs("div",{style:{borderLeft:`3px solid ${l[u.level]}`,padding:"6px 10px",marginBottom:6,background:"#fafbfc"},children:[e.jsxs("div",{style:{color:l[u.level],fontWeight:600},children:[u.type," · ",u.code," · ",u.level]}),e.jsx("div",{style:{color:"#556"},children:u.message})]},o))]})]})]})}};var s,a,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Подписка на события (onNotification)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMNS, []);
    const [log, setLog] = useState<TableNotification[]>([]);
    return <div>
        <StoryHint>
          Режим <b>multi-range-cell</b>. Как спровоцировать события:
          <br />• <b>copy / multi-range-scattered</b> — Ctrl-выдели ячейки в
          РАЗНЫХ строках и колонках → Ctrl+C.
          <br />• <b>paste / multi-range-scattered</b> — тот же 2D-выбор →
          Ctrl+V.
          <br />• <b>paste / readonly-abort</b> — вставь в диапазон, задевающий
          колонку ID.
          <br />• <b>paste / overflow-abort</b> — вставь большой блок у
          нижнего/правого края.
          <br />• <b>paste / validation-skipped</b> — вставь текст в колонку «%
          (число)».
          <br />• <b>fill / readonly-abort</b>, <b>fill / validation-skipped</b>
          — то же протаскиванием fill-handle.
        </StoryHint>

        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <div style={{
          flex: 1,
          minWidth: 0
        }}>
            <TableCanvas tableConfig={{
            containerStyle: {
              height: '520px'
            },
            cellsSelection: {
              mode: 'multi-range-cell'
            },
            rowMarkers: {
              startIndex: 1
            },
            cellTransfer: {
              enabled: true,
              paste: {
                readonlyBehavior: 'abort',
                overflowBehavior: 'abort'
              }
            },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: r => \`\${r.id}\`,
              defaultEnabled: true
            },
            notifications: {
              onNotification: event => setLog(prev => [event, ...prev].slice(0, 20))
            }
          }} columnConfig={columnConfig} rows={rows} />
          </div>

          <div style={{
          width: 340,
          fontSize: 12
        }}>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8
          }}>
              <b>Полученные события ({log.length})</b>
              <button type="button" onClick={() => setLog([])} style={{
              padding: '4px 10px',
              borderRadius: 8,
              border: '1px solid #c7d2e0',
              background: '#fff',
              cursor: 'pointer'
            }}>
                Очистить
              </button>
            </div>
            {log.length === 0 && <div style={{
            color: '#8893a5'
          }}>Пока пусто</div>}
            {log.map((event, i) => <div key={i} style={{
            borderLeft: \`3px solid \${LEVEL_COLOR[event.level]}\`,
            padding: '6px 10px',
            marginBottom: 6,
            background: '#fafbfc'
          }}>
                <div style={{
              color: LEVEL_COLOR[event.level],
              fontWeight: 600
            }}>
                  {event.type} · {event.code} · {event.level}
                </div>
                <div style={{
              color: '#556'
            }}>{event.message}</div>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const E=["Notifications"],k=Object.freeze(Object.defineProperty({__proto__:null,Notifications:n,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{k as N};
