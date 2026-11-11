import{r as s,j as e}from"./react-CAOzMBF_.js";import{c as me}from"./tableData-DVJFoYoT.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as b,S as T}from"./TableCanvas-CrZ8g2-J.js";import{T as c}from"./TableTabs-BC4rHx7P.js";import{dy as pe,dD as y}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{u as I}from"./starFeature-BbyC_4T2.js";import{qm as E,u2 as he,pi as ge,rg as n}from"./@salutejs/plasma-icons-CkR551sF.js";import{a3 as we}from"./@salutejs/sdds-finai-Yd8FRL4L.js";const Ce={title:"Локальные компоненты/TableCanvas/ControlBlock",tags:["!autodocs"]},S=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,m=()=>{const[t,r]=s.useState(me),o=s.useCallback(l=>`${l.id}`,[]),u=s.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:l})=>`KEY-${l.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:t,setRows:r,rowKeyGetter:o,columnConfig:u}},B=()=>e.jsx("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${y}`,color:y,backgroundColor:pe,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"}),xe=()=>e.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsx(T,{icon:e.jsx(n,{size:"s"}),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:t=>alert(`Edit: ${t.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}}),e.jsx(T,{icon:e.jsx(n,{size:"s"}),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:t=>alert(`Edit 2: ${t.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}})]}),p={...d({preCode:S,previewSource:"shown"}),name:"1. Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:t,setRows:r,rowKeyGetter:o,columnConfig:u}=m(),[l,f]=s.useState([]),i=s.useState(()=>new Set),ie=s.useState(!1),ce=s.useState("tab1"),[de,be]=s.useState(!1),Se=I();return e.jsxs(c,{tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:ce,rightSlot:e.jsx(B,{}),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsx(B,{})},children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,resizableColumn:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:o,groupByState:[l,f]},selecting:{state:i,rowKeyGetter:o},editing:{onRowsChange:a=>r(a),rowKeyGetter:o,enabled:ie,showButtons:!0,editModeLeftSlot:e.jsx(xe,{})},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:a=>e.jsx(n,{color:"inherit",size:a.rowSize==="small"?"xs":"s"})},{text:"Выгрузить",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:a=>e.jsx(n,{color:"inherit",size:a.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:a=>e.jsx(n,{color:"inherit",size:a.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:a=>alert(`Экспорт: ${a.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:E,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:he,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:de,onChange:a=>be(a.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:ge,onClick:()=>alert("Добавить строку"),dividerLeft:!0,canBeCompressedInToolsMenu:!1},Se]}},columnConfig:u,rows:t})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Архивные данные"})}),e.jsx(c.TabPanel,{tabId:"tab3",children:e.jsx("div",{style:{padding:24},children:"Аналитика"})})]})}},h={...d({preCode:S,previewSource:"shown"}),name:"2. TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:t,columnConfig:r}=m(),o=s.useState("tab1"),u=I();return e.jsxs(c,{tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:o,rightSlot:e.jsx(B,{}),children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:l=>e.jsx(n,{color:"inherit",size:l.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:l=>alert(`Экспорт: ${l.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:E,onClick:()=>alert("Обновить")},u]}},columnConfig:r,rows:t})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Настройки"})})]})}},g={...d({preCode:S,previewSource:"shown"}),name:"3. Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:t,columnConfig:r}=m(),o=I();return e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:u=>e.jsx(n,{color:"inherit",size:u.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:u=>e.jsx(n,{color:"inherit",size:u.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:u=>alert(`Экспорт: ${u.label}`)}}],customFeatures:[o]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsx(B,{})}},columnConfig:r,rows:t})}},w={...d({preCode:S,previewSource:"shown"}),name:"4. ControlBlock с inline collapsing",render:()=>{const{rows:t,rowKeyGetter:r,columnConfig:o}=m(),[u,l]=s.useState([]),f=I();return e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:r,groupByState:[u,l]},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Обновить",contentLeft:e.jsx(E,{color:"inherit"}),dropdownIconRender:i=>e.jsx(E,{color:"inherit",size:i.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:i=>e.jsx(n,{color:"inherit",size:i.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[f]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:o,rows:t})}},C={...d({preCode:S,previewSource:"shown"}),name:"5. Title above (заголовок без коллапсинга)",render:()=>{const{rows:t,columnConfig:r}=m(),o=I();return e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsx(B,{})},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:u=>e.jsx(n,{color:"inherit",size:u.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:u=>alert(`Экспорт: ${u.label}`)}}],customFeatures:[o]}},columnConfig:r,rows:t})}},x={...d({preCode:S,previewSource:"shown"}),name:"5b. Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:t,columnConfig:r}=m(),o=I();return e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(n,{color:"inherit"}),dropdownIconRender:u=>e.jsx(n,{color:"inherit",size:u.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:u=>alert(`Экспорт: ${u.label}`)}}],customFeatures:[o]}},columnConfig:r,rows:t})}},ve=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"big",value:"big"}],v={...d({preCode:S,previewSource:"shown"}),name:"6. Размер строк снаружи (rowSize.state)",render:()=>{const{rows:t,columnConfig:r}=m(),o=s.useState("medium"),[u,l]=o;return e.jsxs("div",{children:[e.jsx("div",{style:{maxWidth:320,marginBottom:12},children:e.jsx(we,{label:"Размер строк (вне таблицы)",value:u,onChange:f=>l(f),items:ve})}),e.jsx(b,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{state:o,showInControl:!0},controlBlock:{show:!0,size:"m"}},columnConfig:r,rows:t})]})}};var z,D,F,k,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '1. Все фичи: Collapsing + TableTabs + ControlBlock',
  render: () => {
    const {
      rows,
      setRows,
      rowKeyGetter,
      columnConfig
    } = useBaseSetup();
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const selectingState = useState((): ReadonlySet<string | number> => new Set());
    const editingEnabled = useState(false);
    const activeTabState = useState<string | number>('tab1');
    const [isFavorite, setIsFavorite] = useState(false);
    const starFeature = useStarFeature();
    return <TableTabs tabs={[{
      tabId: 'tab1',
      label: 'Основная'
    }, {
      tabId: 'tab2',
      label: 'Архив'
    }, {
      tabId: 'tab3',
      label: 'Аналитика'
    }]} activeTabIdState={activeTabState} rightSlot={<CustomRightSlot />} collapsing={{
      enabled: true,
      collapseText: 'Свернуть таблицу',
      expandText: 'Развернуть таблицу',
      rightSlot: <CustomRightSlot />
    }}>
        <TableTabs.TabPanel tabId="tab1">
          <TableCanvas tableConfig={{
          containerStyle: {
            height: '60vh'
          },
          fullScreenEnabled: true,
          resizableColumn: true,
          rowSize: {
            default: 'big',
            showInControl: true
          },
          searching: {
            enabled: true
          },
          keyText: {
            showInControl: true,
            controlBlock: {},
            sidebar: {}
          },
          rowsGrouping: {
            rowKeyGetter,
            groupByState: [groupByArr, setGroupByArr]
          },
          selecting: {
            state: selectingState,
            rowKeyGetter
          },
          editing: {
            onRowsChange: newRows => setRows(newRows as Row[]),
            rowKeyGetter,
            enabled: editingEnabled,
            showButtons: true,
            editModeLeftSlot: <EditModeLeftPanel />
          },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [{
              text: 'Загрузить',
              contentLeft: <IconSb color="inherit" />,
              // Пользовательская кнопка сама подгоняет иконку под
              // дропдаун: мельче на маленьком rowSize. Готовый
              // contentLeft мы не трогаем, размер задаёт автор кнопки.
              dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />
            }, {
              text: 'Выгрузить',
              contentLeft: <IconSb color="inherit" />,
              dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />
            }, {
              text: 'Экспорт',
              contentLeft: <IconSb color="inherit" />,
              dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
              dropdown: {
                items: [{
                  value: 'csv',
                  label: 'CSV'
                }, {
                  value: 'xlsx',
                  label: 'Excel'
                }, {
                  value: 'pdf',
                  label: 'PDF'
                }],
                onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
              }
            }],
            customFeatures: [{
              value: 'refresh',
              label: 'Обновить',
              Icon: IconRefresh,
              onClick: () => alert('Обновить'),
              dividerLeft: true
            }, {
              value: 'favorite',
              label: 'Избранное',
              Icon: IconStar,
              onClick: () => alert('Избранное'),
              mandatory: true,
              details: {
                type: 'switch',
                label: 'В избранном',
                checked: isFavorite,
                onChange: e => setIsFavorite(e.target.checked)
              }
            }, {
              value: 'add-row',
              label: 'Добавить строку',
              Icon: IconPlus,
              onClick: () => alert('Добавить строку'),
              dividerLeft: true,
              // Pinned-фича: НЕ уходит в overflow-дропдаун при сжатии,
              // всегда остаётся видимой в правой части
              canBeCompressedInToolsMenu: false
            }, starFeature]
          }
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab2">
          <div style={{
          padding: 24
        }}>Архивные данные</div>
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab3">
          <div style={{
          padding: 24
        }}>Аналитика</div>
        </TableTabs.TabPanel>
      </TableTabs>;
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:`### 1. Все фичи: Collapsing (above) + TableTabs + ControlBlock

Демонстрация максимальной конфигурации:
- Коллапсинг above с rightSlot
- TableTabs с rightSlot и коллапсингом
- ControlBlock со всеми фичами: editing с editModeLeftSlot, search,
  rightSideInner, customFeatures с dividerLeft, keyText, rowSize, fullScreen`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var j,R,P,L,G;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '2. TableTabs + ControlBlock (без коллапсинга)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const activeTabState = useState<string | number>('tab1');
    const starFeature = useStarFeature();
    return <TableTabs tabs={[{
      tabId: 'tab1',
      label: 'Данные'
    }, {
      tabId: 'tab2',
      label: 'Настройки'
    }]} activeTabIdState={activeTabState} rightSlot={<CustomRightSlot />}>
        <TableTabs.TabPanel tabId="tab1">
          <TableCanvas tableConfig={{
          containerStyle: {
            height: '60vh'
          },
          fullScreenEnabled: true,
          rowSize: {
            default: 'big',
            showInControl: true
          },
          searching: {
            enabled: true
          },
          keyText: {
            showInControl: true,
            controlBlock: {},
            sidebar: {}
          },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [{
              text: 'Экспорт',
              contentLeft: <IconSb color="inherit" />,
              dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
              dropdown: {
                items: [{
                  value: 'csv',
                  label: 'CSV'
                }, {
                  value: 'xlsx',
                  label: 'Excel'
                }, {
                  value: 'pdf',
                  label: 'PDF'
                }],
                onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
              }
            }],
            customFeatures: [{
              value: 'refresh',
              label: 'Обновить',
              Icon: IconRefresh,
              onClick: () => alert('Обновить')
            }, starFeature]
          }
        }} columnConfig={columnConfig} rows={rows} />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab2">
          <div style={{
          padding: 24
        }}>Настройки</div>
        </TableTabs.TabPanel>
      </TableTabs>;
  }
}`,...(P=(R=h.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:`### 2. TableTabs + ControlBlock (без коллапсинга)

TableTabs с кастомным слотом справа, без коллапсинга.`,...(G=(L=h.parameters)==null?void 0:L.docs)==null?void 0:G.description}}};var $,M,V,_,K;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '3. Collapsing above + ControlBlock (без табов)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      rowSize: {
        default: 'big',
        showInControl: true
      },
      searching: {
        enabled: true
      },
      keyText: {
        showInControl: true,
        controlBlock: {},
        sidebar: {}
      },
      controlBlock: {
        show: true,
        size: 'm',
        rightSideInner: [{
          text: 'Загрузить',
          contentLeft: <IconSb color="inherit" />,
          dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />
        }, {
          text: 'Экспорт',
          contentLeft: <IconSb color="inherit" />,
          dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
          dropdown: {
            items: [{
              value: 'csv',
              label: 'CSV'
            }, {
              value: 'xlsx',
              label: 'Excel'
            }, {
              value: 'pdf',
              label: 'PDF'
            }],
            onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
          }
        }],
        customFeatures: [starFeature]
      },
      collapsing: {
        enableCollapse: true,
        collapseButtonPlacement: 'above',
        collapseButtonAboveRightSlot: <CustomRightSlot />
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(V=(M=g.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:`### 3. Collapsing (above) + ControlBlock (без табов)

Коллапсинг с rightSlot над таблицей, без TableTabs.`,...(K=(_=g.parameters)==null?void 0:_.docs)==null?void 0:K.description}}};var O,W,N,Z,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '4. ControlBlock с inline collapsing',
  render: () => {
    const {
      rows,
      rowKeyGetter,
      columnConfig
    } = useBaseSetup();
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const starFeature = useStarFeature();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      rowSize: {
        default: 'big',
        showInControl: true
      },
      searching: {
        enabled: true
      },
      keyText: {
        showInControl: true,
        controlBlock: {},
        sidebar: {}
      },
      rowsGrouping: {
        rowKeyGetter,
        groupByState: [groupByArr, setGroupByArr]
      },
      controlBlock: {
        show: true,
        size: 'm',
        rightSideInner: [{
          text: 'Обновить',
          contentLeft: <IconRefresh color="inherit" />,
          dropdownIconRender: ctx => <IconRefresh color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />
        }, {
          text: 'Экспорт',
          contentLeft: <IconSb color="inherit" />,
          dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
          dropdown: {
            items: [{
              value: 'csv',
              label: 'CSV'
            }, {
              value: 'xlsx',
              label: 'Excel'
            }, {
              value: 'pdf',
              label: 'PDF'
            }],
            onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
          }
        }],
        customFeatures: [starFeature]
      },
      collapsing: {
        enableCollapse: true,
        collapseButtonPlacement: 'inside'
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(N=(W=w.parameters)==null?void 0:W.docs)==null?void 0:N.source},description:{story:`### 4. ControlBlock inline collapsing (без табов, без above)

Коллапсинг inline — кнопка внутри controlBlock.`,...(q=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var H,Y,J,Q,U;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '5. Title above (заголовок без коллапсинга)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      rowSize: {
        default: 'big',
        showInControl: true
      },
      searching: {
        enabled: true
      },
      collapsing: {
        collapseButtonPlacement: 'above',
        titleText: 'Реестр задач',
        collapseButtonAboveRightSlot: <CustomRightSlot />
      },
      controlBlock: {
        show: true,
        size: 'm',
        rightSideInner: [{
          text: 'Экспорт',
          contentLeft: <IconSb color="inherit" />,
          dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
          dropdown: {
            items: [{
              value: 'csv',
              label: 'CSV'
            }, {
              value: 'xlsx',
              label: 'Excel'
            }, {
              value: 'pdf',
              label: 'PDF'
            }],
            onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
          }
        }],
        customFeatures: [starFeature]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"### 5. Title above (через collapsing API, без коллапсинга)\n\nЗаголовок таблицы через `collapsing.titleText` + `collapseButtonPlacement: 'above'`, без enableCollapse.",...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var X,ee,ue,ne,te;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '5b. Title inline (заголовок внутри controlBlock)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature();
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      rowSize: {
        default: 'big',
        showInControl: true
      },
      searching: {
        enabled: true
      },
      collapsing: {
        titleText: 'Реестр задач'
      },
      controlBlock: {
        show: true,
        size: 'm',
        rightSideInner: [{
          text: 'Экспорт',
          contentLeft: <IconSb color="inherit" />,
          dropdownIconRender: ctx => <IconSb color="inherit" size={ctx.rowSize === 'small' ? 'xs' : 's'} />,
          dropdown: {
            items: [{
              value: 'csv',
              label: 'CSV'
            }, {
              value: 'xlsx',
              label: 'Excel'
            }, {
              value: 'pdf',
              label: 'PDF'
            }],
            onItemSelect: (item: any) => alert(\`Экспорт: \${item.label}\`)
          }
        }],
        customFeatures: [starFeature]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(ue=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ue.source},description:{story:"### 5b. Title inline (заголовок внутри controlBlock)\n\n`collapsing.titleText` без `collapseButtonPlacement` (default='inside') — заголовок внутри controlBlock слева.",...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};var oe,re,le,ae,se;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '6. Размер строк снаружи (rowSize.state)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const rowSizeState = useState<SIZE>('medium');
    const [rowSize, setRowSize] = rowSizeState;
    return <div>
        <div style={{
        maxWidth: 320,
        marginBottom: 12
      }}>
          <Select label="Размер строк (вне таблицы)" value={rowSize} onChange={value => setRowSize(value as SIZE)} items={ROW_SIZE_OPTIONS} />
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '60vh'
        },
        rowSize: {
          state: rowSizeState,
          showInControl: true
        },
        controlBlock: {
          show: true,
          size: 'm'
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"### 6. Размер строк снаружи (rowSize.state)\n\n`rowSize.state` — кортеж `[size, setSize]`: размер строк хранит потребитель. Переключатель\nвне таблицы и кнопка в controlBlock меняют одно и то же значение.",...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};const Ie=["AllFeaturesWithTabs","TabsWithoutCollapsing","CollapsingAboveNoTabs","InlineCollapsing","TitleBlockStory","TitleBlockInline","ControlledRowSize"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AllFeaturesWithTabs:p,CollapsingAboveNoTabs:g,ControlledRowSize:v,InlineCollapsing:w,TabsWithoutCollapsing:h,TitleBlockInline:x,TitleBlockStory:C,__namedExportsOrder:Ie,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Ae as T};
