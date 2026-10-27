import{r as s,j as e}from"./react-CAOzMBF_.js";import{c as se}from"./tableData-DVJFoYoT.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as w,S as B}from"./TableCanvas-DlX-Wh2b.js";import{T as c}from"./TableTabs-C6Rr5Gy-.js";import{cQ as ie,cT as E}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{u as C}from"./starFeature-Cp7FfYF9.js";import{qm as I,u1 as ce,pi as de,rf as u}from"./@salutejs/plasma-icons-Do5ggeDI.js";const be={title:"Локальные компоненты/TableCanvas/ControlBlock",tags:["!autodocs"]},x=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,v=()=>{const[t,r]=s.useState(se),o=s.useCallback(l=>`${l.id}`,[]),n=s.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:l})=>`KEY-${l.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:t,setRows:r,rowKeyGetter:o,columnConfig:n}},f=()=>e.jsx("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${E}`,color:E,backgroundColor:ie,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"}),pe=()=>e.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsx(B,{icon:e.jsx(u,{size:"s"}),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:t=>alert(`Edit: ${t.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}}),e.jsx(B,{icon:e.jsx(u,{size:"s"}),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:t=>alert(`Edit 2: ${t.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}})]}),d={...g({preCode:x,previewSource:"shown"}),name:"1. Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:t,setRows:r,rowKeyGetter:o,columnConfig:n}=v(),[l,T]=s.useState([]),i=s.useState(()=>new Set),te=s.useState(!1),oe=s.useState("tab1"),[re,le]=s.useState(!1),ae=C();return e.jsxs(c,{tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:oe,rightSlot:e.jsx(f,{}),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsx(f,{})},children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,resizableColumn:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:o,groupByState:[l,T]},selecting:{state:i,rowKeyGetter:o},editing:{onRowsChange:a=>r(a),rowKeyGetter:o,enabled:te,showButtons:!0,editModeLeftSlot:e.jsx(pe,{})},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:a=>e.jsx(u,{color:"inherit",size:a.rowSize==="small"?"xs":"s"})},{text:"Выгрузить",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:a=>e.jsx(u,{color:"inherit",size:a.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:a=>e.jsx(u,{color:"inherit",size:a.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:a=>alert(`Экспорт: ${a.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:I,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:ce,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:re,onChange:a=>le(a.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:de,onClick:()=>alert("Добавить строку"),dividerLeft:!0,canBeCompressedInToolsMenu:!1},ae]}},columnConfig:n,rows:t})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Архивные данные"})}),e.jsx(c.TabPanel,{tabId:"tab3",children:e.jsx("div",{style:{padding:24},children:"Аналитика"})})]})}},b={...g({preCode:x,previewSource:"shown"}),name:"2. TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:t,columnConfig:r}=v(),o=s.useState("tab1"),n=C();return e.jsxs(c,{tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:o,rightSlot:e.jsx(f,{}),children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:l=>e.jsx(u,{color:"inherit",size:l.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:l=>alert(`Экспорт: ${l.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:I,onClick:()=>alert("Обновить")},n]}},columnConfig:r,rows:t})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Настройки"})})]})}},p={...g({preCode:x,previewSource:"shown"}),name:"3. Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:t,columnConfig:r}=v(),o=C();return e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:n=>e.jsx(u,{color:"inherit",size:n.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:n=>e.jsx(u,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[o]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsx(f,{})}},columnConfig:r,rows:t})}},S={...g({preCode:x,previewSource:"shown"}),name:"4. ControlBlock с inline collapsing",render:()=>{const{rows:t,rowKeyGetter:r,columnConfig:o}=v(),[n,l]=s.useState([]),T=C();return e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:r,groupByState:[n,l]},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Обновить",contentLeft:e.jsx(I,{color:"inherit"}),dropdownIconRender:i=>e.jsx(I,{color:"inherit",size:i.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:i=>e.jsx(u,{color:"inherit",size:i.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[T]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:o,rows:t})}},m={...g({preCode:x,previewSource:"shown"}),name:"5. Title above (заголовок без коллапсинга)",render:()=>{const{rows:t,columnConfig:r}=v(),o=C();return e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsx(f,{})},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:n=>e.jsx(u,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[o]}},columnConfig:r,rows:t})}},h={...g({preCode:x,previewSource:"shown"}),name:"5b. Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:t,columnConfig:r}=v(),o=C();return e.jsx(w,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(u,{color:"inherit"}),dropdownIconRender:n=>e.jsx(u,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[o]}},columnConfig:r,rows:t})}};var y,F,D,k,z;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source},description:{story:`### 1. Все фичи: Collapsing (above) + TableTabs + ControlBlock

Демонстрация максимальной конфигурации:
- Коллапсинг above с rightSlot
- TableTabs с rightSlot и коллапсингом
- ControlBlock со всеми фичами: editing с editModeLeftSlot, search,
  rightSideInner, customFeatures с dividerLeft, keyText, rowSize, fullScreen`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var A,j,R,P,L;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source},description:{story:`### 2. TableTabs + ControlBlock (без коллапсинга)

TableTabs с кастомным слотом справа, без коллапсинга.`,...(L=(P=b.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var G,$,M,V,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=($=p.parameters)==null?void 0:$.docs)==null?void 0:M.source},description:{story:`### 3. Collapsing (above) + ControlBlock (без табов)

Коллапсинг с rightSlot над таблицей, без TableTabs.`,...(K=(V=p.parameters)==null?void 0:V.docs)==null?void 0:K.description}}};var _,W,O,N,q;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(W=S.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:`### 4. ControlBlock inline collapsing (без табов, без above)

Коллапсинг inline — кнопка внутри controlBlock.`,...(q=(N=S.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var H,Q,Y,J,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"### 5. Title above (через collapsing API, без коллапсинга)\n\nЗаголовок таблицы через `collapsing.titleText` + `collapseButtonPlacement: 'above'`, без enableCollapse.",...(U=(J=m.parameters)==null?void 0:J.docs)==null?void 0:U.description}}};var X,Z,ee,ne,ue;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"### 5b. Title inline (заголовок внутри controlBlock)\n\n`collapsing.titleText` без `collapseButtonPlacement` (default='inside') — заголовок внутри controlBlock слева.",...(ue=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ue.description}}};const Se=["AllFeaturesWithTabs","TabsWithoutCollapsing","CollapsingAboveNoTabs","InlineCollapsing","TitleBlockStory","TitleBlockInline"],Ie=Object.freeze(Object.defineProperty({__proto__:null,AllFeaturesWithTabs:d,CollapsingAboveNoTabs:p,InlineCollapsing:S,TabsWithoutCollapsing:b,TitleBlockInline:h,TitleBlockStory:m,__namedExportsOrder:Se,default:be},Symbol.toStringTag,{value:"Module"}));export{Ie as T};
