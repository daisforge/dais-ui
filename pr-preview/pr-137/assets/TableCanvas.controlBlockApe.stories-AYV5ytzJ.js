import{r as s,j as e}from"./react-CAOzMBF_.js";import{c as se}from"./tableData-DVJFoYoT.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{T as g,S as z}from"./TableCanvas-DlX-Wh2b.js";import{T as c}from"./TableTabs-C6Rr5Gy-.js";import{cQ as ie,cT as y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{u as w}from"./starFeature-Cp7FfYF9.js";import{qm as I,u1 as ce,pi as de,rf as t}from"./@salutejs/plasma-icons-Do5ggeDI.js";const be={title:"Локальные компоненты/TableCanvas/ControlBlock/APE",tags:["!autodocs"]},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,f=()=>{const[o,l]=s.useState(se),r=s.useCallback(a=>`${a.id}`,[]),n=s.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:a})=>`KEY-${a.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:o,setRows:l,rowKeyGetter:r,columnConfig:n}},v=()=>e.jsx("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${y}`,color:y,backgroundColor:ie,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"}),Se=()=>e.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsx(z,{icon:e.jsx(t,{size:"xs"}),size:"s",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:o=>alert(`Edit: ${o.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}}),e.jsx(z,{icon:e.jsx(t,{size:"xs"}),size:"s",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:o=>alert(`Edit 2: ${o.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}})]}),d={...h({preCode:C,previewSource:"shown"}),name:"1. XS: Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:o,setRows:l,rowKeyGetter:r,columnConfig:n}=f(),[a,T]=s.useState([]),i=s.useState(()=>new Set),oe=s.useState(!1),re=s.useState("tab1"),[le,ae]=s.useState(!1),ue=w({embedSize:"s",panelStarSize:"xs"});return e.jsxs(c,{size:"xs",tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:re,rightSlot:e.jsx(v,{}),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsx(v,{})},children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:u=>alert(u.message)},resizableColumn:!0,rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:r,groupByState:[a,T]},selecting:{state:i,rowKeyGetter:r},editing:{onRowsChange:u=>l(u),rowKeyGetter:r,enabled:oe,showButtons:!0,editModeLeftSlot:e.jsx(Se,{})},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:u=>e.jsx(t,{color:"inherit",size:u.rowSize==="small"?"xs":"s"})},{text:"Выгрузить",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:u=>e.jsx(t,{color:"inherit",size:u.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:u=>e.jsx(t,{color:"inherit",size:u.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:u=>alert(`Экспорт: ${u.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:I,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:ce,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:le,onChange:u=>ae(u.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:de,onClick:()=>alert("Добавить строку"),dividerLeft:!0},ue]}},columnConfig:n,rows:o})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Архивные данные"})}),e.jsx(c.TabPanel,{tabId:"tab3",children:e.jsx("div",{style:{padding:24},children:"Аналитика"})})]})}},b={...h({preCode:C,previewSource:"shown"}),name:"2. XS: TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:o,columnConfig:l}=f(),r=s.useState("tab1"),n=w({embedSize:"s",panelStarSize:"xs"});return e.jsxs(c,{size:"xs",tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:r,rightSlot:e.jsx(v,{}),children:[e.jsx(c.TabPanel,{tabId:"tab1",children:e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:a=>alert(a.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:a=>e.jsx(t,{color:"inherit",size:a.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:a=>alert(`Экспорт: ${a.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:I,onClick:()=>alert("Обновить")},n]}},columnConfig:l,rows:o})}),e.jsx(c.TabPanel,{tabId:"tab2",children:e.jsx("div",{style:{padding:24},children:"Настройки"})})]})}},S={...h({preCode:C,previewSource:"shown"}),name:"3. XS: Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:o,columnConfig:l}=f(),r=w({embedSize:"s",panelStarSize:"xs"});return e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Загрузить",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:n=>e.jsx(t,{color:"inherit",size:n.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:n=>e.jsx(t,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[r]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsx(v,{})}},columnConfig:l,rows:o})}},m={...h({preCode:C,previewSource:"shown"}),name:"4. XS: ControlBlock с inline collapsing",render:()=>{const{rows:o,rowKeyGetter:l,columnConfig:r}=f(),[n,a]=s.useState([]),T=w({embedSize:"s",panelStarSize:"xs"});return e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:i=>alert(i.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:l,groupByState:[n,a]},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Обновить",contentLeft:e.jsx(I,{color:"inherit"}),dropdownIconRender:i=>e.jsx(I,{color:"inherit",size:i.rowSize==="small"?"xs":"s"})},{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:i=>e.jsx(t,{color:"inherit",size:i.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[T]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:r,rows:o})}},p={...h({preCode:C,previewSource:"shown"}),name:"5. XS: Title above (заголовок без коллапсинга)",render:()=>{const{rows:o,columnConfig:l}=f(),r=w({embedSize:"s",panelStarSize:"xs"});return e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsx(v,{})},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:n=>e.jsx(t,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[r]}},columnConfig:l,rows:o})}},x={...h({preCode:C,previewSource:"shown"}),name:"5b. XS: Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:o,columnConfig:l}=f(),r=w({embedSize:"s",panelStarSize:"xs"});return e.jsx(g,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsx(t,{color:"inherit"}),dropdownIconRender:n=>e.jsx(t,{color:"inherit",size:n.rowSize==="small"?"xs":"s"}),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[r]}},columnConfig:l,rows:o})}};var B,E,k,F,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '1. XS: Все фичи: Collapsing + TableTabs + ControlBlock',
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
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableTabs size="xs" tabs={[{
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
          columnsControl: {
            enable: true
          },
          notifications: {
            onNotification: e => alert(e.message)
          },
          resizableColumn: true,
          rowSize: {
            default: 'small',
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
            size: 'xs',
            rightSideInner: [{
              text: 'Загрузить',
              contentLeft: <IconSb color="inherit" />,
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
              dividerLeft: true
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
}`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source},description:{story:"### 1. XS: Все фичи — Collapsing (above) + TableTabs + ControlBlock",...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.description}}};var j,A,R,P,L;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '2. XS: TableTabs + ControlBlock (без коллапсинга)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const activeTabState = useState<string | number>('tab1');
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableTabs size="xs" tabs={[{
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
          columnsControl: {
            enable: true
          },
          notifications: {
            onNotification: e => alert(e.message)
          },
          rowSize: {
            default: 'small',
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
            size: 'xs',
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
}`,...(R=(A=b.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:"### 2. XS: TableTabs + ControlBlock (без коллапсинга)",...(L=(P=b.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var X,G,$,N,V;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '3. XS: Collapsing above + ControlBlock (без табов)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      columnsControl: {
        enable: true
      },
      notifications: {
        onNotification: e => alert(e.message)
      },
      rowSize: {
        default: 'small',
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
        size: 'xs',
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
}`,...($=(G=S.parameters)==null?void 0:G.docs)==null?void 0:$.source},description:{story:"### 3. XS: Collapsing (above) + ControlBlock (без табов)",...(V=(N=S.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var K,M,_,W,O;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '4. XS: ControlBlock с inline collapsing',
  render: () => {
    const {
      rows,
      rowKeyGetter,
      columnConfig
    } = useBaseSetup();
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      columnsControl: {
        enable: true
      },
      notifications: {
        onNotification: e => alert(e.message)
      },
      rowSize: {
        default: 'small',
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
        size: 'xs',
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
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"### 4. XS: ControlBlock inline collapsing",...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};var q,H,Q,Y,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '5. XS: Title above (заголовок без коллапсинга)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      columnsControl: {
        enable: true
      },
      notifications: {
        onNotification: e => alert(e.message)
      },
      rowSize: {
        default: 'small',
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
        size: 'xs',
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
}`,...(Q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Q.source},description:{story:"### 5. XS: Title above (без коллапсинга)",...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var U,Z,ee,ne,te;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: '5b. XS: Title inline (заголовок внутри controlBlock)',
  render: () => {
    const {
      rows,
      columnConfig
    } = useBaseSetup();
    const starFeature = useStarFeature({
      embedSize: 's',
      panelStarSize: 'xs'
    });
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      fullScreenEnabled: true,
      columnsControl: {
        enable: true
      },
      notifications: {
        onNotification: e => alert(e.message)
      },
      rowSize: {
        default: 'small',
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
        size: 'xs',
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"### 5b. XS: Title inline (заголовок внутри controlBlock)",...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};const me=["XSAllFeaturesWithTabs","XSTabsWithoutCollapsing","XSCollapsingAboveNoTabs","XSInlineCollapsing","XSTitleBlockStory","XSTitleBlockInline"],Ie=Object.freeze(Object.defineProperty({__proto__:null,XSAllFeaturesWithTabs:d,XSCollapsingAboveNoTabs:S,XSInlineCollapsing:m,XSTabsWithoutCollapsing:b,XSTitleBlockInline:x,XSTitleBlockStory:p,__namedExportsOrder:me,default:be},Symbol.toStringTag,{value:"Module"}));export{Ie as T};
