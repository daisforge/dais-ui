import{r as t,d as e}from"./react-D2T61mpp.js";import{c as te}from"./tableData-UCfjiBCh.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as f,S as B}from"./TableCanvas-CayT_SxA.js";import{T as c}from"./TableTabs-DJ7tk115.js";import{cK as ie,cL as E}from"./@salutejs/sdds-themes-CUTvIVmO.js";import{u as T}from"./starFeature-B_o9nWjI.js";import{qi as S,tT as ce,pg as be,rb as o}from"./@salutejs/plasma-icons-Cu-rfY0-.js";const de={title:"Локальные компоненты/TableCanvas/ControlBlock",tags:["!autodocs"]},g=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,h=()=>{const[u,r]=t.useState(te),a=t.useCallback(s=>`${s.id}`,[]),n=t.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:s})=>`KEY-${s.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:u,setRows:r,rowKeyGetter:a,columnConfig:n}},w=()=>e.jsxDEV("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${E}`,color:E,backgroundColor:ie,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:94,columnNumber:3},void 0),me=()=>e.jsxDEV("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsxDEV(B,{icon:e.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:117,columnNumber:13},void 0),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:u=>alert(`Edit: ${u.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:116,columnNumber:5},void 0),e.jsxDEV(B,{icon:e.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:129,columnNumber:13},void 0),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:u=>alert(`Edit 2: ${u.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:128,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:113,columnNumber:3},void 0),b={...p({preCode:g,previewSource:"shown"}),name:"1. Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:u,setRows:r,rowKeyGetter:a,columnConfig:n}=h(),[s,x]=t.useState([]),i=t.useState(()=>new Set),ue=t.useState(!1),ae=t.useState("tab1"),[re,se]=t.useState(!1),le=T();return e.jsxDEV(c,{tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:ae,rightSlot:e.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:174,columnNumber:20},void 0),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:179,columnNumber:22},void 0)},children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,resizableColumn:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:a,groupByState:[s,x]},selecting:{state:i,rowKeyGetter:a},editing:{onRowsChange:l=>r(l),rowKeyGetter:a,enabled:ue,showButtons:!0,editModeLeftSlot:e.jsxDEV(me,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:204,columnNumber:35},void 0)},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:212,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:217,columnNumber:23},void 0)},{text:"Выгрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:225,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:227,columnNumber:23},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:235,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:237,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:l=>alert(`Экспорт: ${l.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:S,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:ce,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:re,onChange:l=>se(l.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:be,onClick:()=>alert("Добавить строку"),dividerLeft:!0,canBeCompressedInToolsMenu:!1},le]}},columnConfig:n,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:183,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:182,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Архивные данные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:293,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:292,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab3",children:e.jsxDEV("div",{style:{padding:24},children:"Аналитика"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:296,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:295,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:167,columnNumber:7},void 0)}},d={...p({preCode:g,previewSource:"shown"}),name:"2. TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:u,columnConfig:r}=h(),a=t.useState("tab1"),n=T();return e.jsxDEV(c,{tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:a,rightSlot:e.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:323,columnNumber:20},void 0),children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:339,columnNumber:34},void 0),dropdownIconRender:s=>e.jsxDEV(o,{color:"inherit",size:s.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:341,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:s=>alert(`Экспорт: ${s.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:S,onClick:()=>alert("Обновить")},n]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:326,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:325,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Настройки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:373,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:372,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:317,columnNumber:7},void 0)}},m={...p({preCode:g,previewSource:"shown"}),name:"3. Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:u,columnConfig:r}=h(),a=T();return e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:406,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:408,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:416,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:418,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:438,columnNumber:43},void 0)}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:393,columnNumber:7},void 0)}},C={...p({preCode:g,previewSource:"shown"}),name:"4. ControlBlock с inline collapsing",render:()=>{const{rows:u,rowKeyGetter:r,columnConfig:a}=h(),[n,s]=t.useState([]),x=T();return e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:r,groupByState:[n,s]},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Обновить",contentLeft:e.jsxDEV(S,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:479,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(S,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:481,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:489,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(o,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:491,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[x]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:a,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:462,columnNumber:7},void 0)}},v={...p({preCode:g,previewSource:"shown"}),name:"5. Title above (заголовок без коллапсинга)",render:()=>{const{rows:u,columnConfig:r}=h(),a=T();return e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:542,columnNumber:43},void 0)},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:550,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:552,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:533,columnNumber:7},void 0)}},k={...p({preCode:g,previewSource:"shown"}),name:"5b. Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:u,columnConfig:r}=h(),a=T();return e.jsxDEV(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:605,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:607,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:590,columnNumber:7},void 0)}};var y,I,N,D,F;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`### 1. Все фичи: Collapsing (above) + TableTabs + ControlBlock

Демонстрация максимальной конфигурации:
- Коллапсинг above с rightSlot
- TableTabs с rightSlot и коллапсингом
- ControlBlock со всеми фичами: editing с editModeLeftSlot, search,
  rightSideInner, customFeatures с dividerLeft, keyText, rowSize, fullScreen`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var z,A,V,j,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.source},description:{story:`### 2. TableTabs + ControlBlock (без коллапсинга)

TableTabs с кастомным слотом справа, без коллапсинга.`,...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.description}}};var P,L,G,$,K;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(L=m.parameters)==null?void 0:L.docs)==null?void 0:G.source},description:{story:`### 3. Collapsing (above) + ControlBlock (без табов)

Коллапсинг с rightSlot над таблицей, без TableTabs.`,...(K=($=m.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var M,_,W,O,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(_=C.parameters)==null?void 0:_.docs)==null?void 0:W.source},description:{story:`### 4. ControlBlock inline collapsing (без табов, без above)

Коллапсинг inline — кнопка внутри controlBlock.`,...(q=(O=C.parameters)==null?void 0:O.docs)==null?void 0:q.description}}};var H,Y,J,Q,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"### 5. Title above (через collapsing API, без коллапсинга)\n\nЗаголовок таблицы через `collapsing.titleText` + `collapseButtonPlacement: 'above'`, без enableCollapse.",...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var X,Z,ee,ne,oe;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"### 5b. Title inline (заголовок внутри controlBlock)\n\n`collapsing.titleText` без `collapseButtonPlacement` (default='inside') — заголовок внутри controlBlock слева.",...(oe=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};const Ce=["AllFeaturesWithTabs","TabsWithoutCollapsing","CollapsingAboveNoTabs","InlineCollapsing","TitleBlockStory","TitleBlockInline"],Se=Object.freeze(Object.defineProperty({__proto__:null,AllFeaturesWithTabs:b,CollapsingAboveNoTabs:m,InlineCollapsing:C,TabsWithoutCollapsing:d,TitleBlockInline:k,TitleBlockStory:v,__namedExportsOrder:Ce,default:de},Symbol.toStringTag,{value:"Module"}));export{Se as T};
