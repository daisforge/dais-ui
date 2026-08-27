import{r as o,d as e}from"./react-D2T61mpp.js";import{c as f}from"./tableData-UCfjiBCh.js";import v from"./DocStoryTemplate-Dyp-m10i.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as N}from"./TableCanvas-C5csmVMR.js";const p={title:"Локальные компоненты/TableCanvas/Notifications",tags:["!autodocs"],parameters:{docs:{page:v}}},k=[{key:"id",name:"ID (readonly)",width:120},{key:"task",name:"Задача",width:260,editingCell:{editable:!0,component:"inputString"}},{key:"priority",name:"Приоритет",width:160,editingCell:{editable:!0,component:"inputString"}},{key:"complete",name:"% (число)",width:140,editingCell:{editable:!0,component:"inputNumber"}}],t={error:"#d64545",warning:"#c98a00",info:"#3b7dd8"},n={name:"Подписка на события (onNotification)",...C({previewSource:"shown"}),render:()=>{const[c,b]=o.useState(f),m=o.useMemo(()=>k,[]),[a,u]=o.useState([]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:["Режим ",e.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:67,columnNumber:17},void 0),". Как спровоцировать события:",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:68,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"copy / multi-range-scattered"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:68,columnNumber:19},void 0)," — Ctrl-выдели ячейки в РАЗНЫХ строках и колонках → Ctrl+C.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:70,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"paste / multi-range-scattered"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:70,columnNumber:19},void 0)," — тот же 2D-выбор → Ctrl+V.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:72,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"paste / readonly-abort"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:72,columnNumber:19},void 0)," — вставь в диапазон, задевающий колонку ID.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:74,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"paste / overflow-abort"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:74,columnNumber:19},void 0)," — вставь большой блок у нижнего/правого края.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:76,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"paste / validation-skipped"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:76,columnNumber:19},void 0)," — вставь текст в колонку «% (число)».",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:78,columnNumber:11},void 0),"• ",e.jsxDEV("b",{children:"fill / readonly-abort"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:78,columnNumber:19},void 0),", ",e.jsxDEV("b",{children:"fill / validation-skipped"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:78,columnNumber:49},void 0),"— то же протаскиванием fill-handle."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:66,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:16},children:[e.jsxDEV("div",{style:{flex:1,minWidth:0},children:e.jsxDEV(N,{tableConfig:{containerStyle:{height:"520px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},cellTransfer:{enabled:!0,paste:{readonlyBehavior:"abort",overflowBehavior:"abort"}},editing:{onRowsChange:b,rowKeyGetter:i=>`${i.id}`,defaultEnabled:!0},notifications:{onNotification:i=>u(s=>[i,...s].slice(0,20))}},columnConfig:m,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:84,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:83,columnNumber:11},void 0),e.jsxDEV("div",{style:{width:340,fontSize:12},children:[e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsxDEV("b",{children:["Полученные события (",a.length,")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:120,columnNumber:15},void 0),e.jsxDEV("button",{type:"button",onClick:()=>u([]),style:{padding:"4px 10px",borderRadius:8,border:"1px solid #c7d2e0",background:"#fff",cursor:"pointer"},children:"Очистить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:121,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:112,columnNumber:13},void 0),a.length===0&&e.jsxDEV("div",{style:{color:"#8893a5"},children:"Пока пусто"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:136,columnNumber:15},void 0),a.map((i,s)=>e.jsxDEV("div",{style:{borderLeft:`3px solid ${t[i.level]}`,padding:"6px 10px",marginBottom:6,background:"#fafbfc"},children:[e.jsxDEV("div",{style:{color:t[i.level],fontWeight:600},children:[i.type," · ",i.code," · ",i.level]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:148,columnNumber:17},void 0),e.jsxDEV("div",{style:{color:"#556"},children:i.message},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:153,columnNumber:17},void 0)]},s,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:139,columnNumber:15},void 0))]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:111,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Notifications/TableCanvas.notifications.stories.tsx",lineNumber:65,columnNumber:7},void 0)}};var r,l,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Подписка на события (onNotification)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMNS, []);
    const [log, setLog] = useState<TableNotification[]>([]);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
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
        </p>

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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const g=["Notifications"],w=Object.freeze(Object.defineProperty({__proto__:null,Notifications:n,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{w as N};
