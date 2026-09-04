import{r as u,d as e}from"./react-D2T61mpp.js";import{c as ue}from"./tableData-UCfjiBCh.js";import{s as k}from"./storySourceDoc-tVKyHcEN.js";import{T,S as w}from"./TableCanvas-DMTLoeeS.js";import{T as c}from"./TableTabs-DyahmA2h.js";import{cK as ie,cL as N}from"./@salutejs/sdds-themes-CZ516YZq.js";import{u as f}from"./starFeature-B6rMRVox.js";import{qi as g,tT as ce,pg as be,rb as o}from"./@salutejs/plasma-icons-DVXBUOYV.js";const de={title:"Локальные компоненты/TableCanvas/ControlBlock/APE",tags:["!autodocs"]},S=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,x=()=>{const[a,s]=u.useState(ue),l=u.useCallback(r=>`${r.id}`,[]),n=u.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:r})=>`KEY-${r.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:a,setRows:s,rowKeyGetter:l,columnConfig:n}},h=()=>e.jsxDEV("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${N}`,color:N,backgroundColor:ie,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:94,columnNumber:3},void 0),me=()=>e.jsxDEV("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsxDEV(w,{icon:e.jsxDEV(o,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:117,columnNumber:13},void 0),size:"s",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:a=>alert(`Edit: ${a.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:116,columnNumber:5},void 0),e.jsxDEV(w,{icon:e.jsxDEV(o,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:129,columnNumber:13},void 0),size:"s",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:a=>alert(`Edit 2: ${a.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:128,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:113,columnNumber:3},void 0),b={...k({preCode:S,previewSource:"shown"}),name:"1. XS: Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:a,setRows:s,rowKeyGetter:l,columnConfig:n}=x(),[r,B]=u.useState([]),i=u.useState(()=>new Set),ae=u.useState(!1),le=u.useState("tab1"),[se,re]=u.useState(!1),te=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(c,{size:"xs",tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:le,rightSlot:e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:169,columnNumber:20},void 0),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:174,columnNumber:22},void 0)},children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:t=>alert(t.message)},resizableColumn:!0,rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:l,groupByState:[r,B]},selecting:{state:i,rowKeyGetter:l},editing:{onRowsChange:t=>s(t),rowKeyGetter:l,enabled:ae,showButtons:!0,editModeLeftSlot:e.jsxDEV(me,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:201,columnNumber:35},void 0)},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:209,columnNumber:34},void 0),dropdownIconRender:t=>e.jsxDEV(o,{color:"inherit",size:t.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:211,columnNumber:23},void 0)},{text:"Выгрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:219,columnNumber:34},void 0),dropdownIconRender:t=>e.jsxDEV(o,{color:"inherit",size:t.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:221,columnNumber:23},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:229,columnNumber:34},void 0),dropdownIconRender:t=>e.jsxDEV(o,{color:"inherit",size:t.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:231,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:t=>alert(`Экспорт: ${t.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:g,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:ce,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:se,onChange:t=>re(t.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:be,onClick:()=>alert("Добавить строку"),dividerLeft:!0},te]}},columnConfig:n,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:178,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:177,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Архивные данные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:284,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:283,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab3",children:e.jsxDEV("div",{style:{padding:24},children:"Аналитика"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:287,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:286,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:161,columnNumber:7},void 0)}},d={...k({preCode:S,previewSource:"shown"}),name:"2. XS: TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:a,columnConfig:s}=x(),l=u.useState("tab1"),n=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(c,{size:"xs",tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:l,rightSlot:e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:313,columnNumber:20},void 0),children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:r=>alert(r.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:331,columnNumber:34},void 0),dropdownIconRender:r=>e.jsxDEV(o,{color:"inherit",size:r.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:333,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:r=>alert(`Экспорт: ${r.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:g,onClick:()=>alert("Обновить")},n]}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:316,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:315,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Настройки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:365,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:364,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:306,columnNumber:7},void 0)}},m={...k({preCode:S,previewSource:"shown"}),name:"3. XS: Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:a,columnConfig:s}=x(),l=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:398,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:400,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:408,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:410,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[l]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:430,columnNumber:43},void 0)}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:383,columnNumber:7},void 0)}},C={...k({preCode:S,previewSource:"shown"}),name:"4. XS: ControlBlock с inline collapsing",render:()=>{const{rows:a,rowKeyGetter:s,columnConfig:l}=x(),[n,r]=u.useState([]),B=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:i=>alert(i.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:s,groupByState:[n,r]},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Обновить",contentLeft:e.jsxDEV(g,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:471,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(g,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:473,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:481,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(o,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:483,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[B]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:l,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:452,columnNumber:7},void 0)}},p={...k({preCode:S,previewSource:"shown"}),name:"5. XS: Title above (заголовок без коллапсинга)",render:()=>{const{rows:a,columnConfig:s}=x(),l=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:534,columnNumber:43},void 0)},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:542,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:544,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[l]}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:523,columnNumber:7},void 0)}},v={...k({preCode:S,previewSource:"shown"}),name:"5b. XS: Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:a,columnConfig:s}=x(),l=f({embedSize:"s",panelStarSize:"xs"});return e.jsxDEV(T,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,columnsControl:{enable:!0},notifications:{onNotification:n=>alert(n.message)},rowSize:{default:"small",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"xs",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:597,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:599,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[l]}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlockApe/TableCanvas.controlBlockApe.stories.tsx",lineNumber:580,columnNumber:7},void 0)}};var y,I,A,E,D;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(I=b.parameters)==null?void 0:I.docs)==null?void 0:A.source},description:{story:"### 1. XS: Все фичи — Collapsing (above) + TableTabs + ControlBlock",...(D=(E=b.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var z,F,V,j,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"### 2. XS: TableTabs + ControlBlock (без коллапсинга)",...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.description}}};var P,L,X,G,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(L=m.parameters)==null?void 0:L.docs)==null?void 0:X.source},description:{story:"### 3. XS: Collapsing (above) + ControlBlock (без табов)",...($=(G=m.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var K,M,_,W,O;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(_=(M=C.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"### 4. XS: ControlBlock inline collapsing",...(O=(W=C.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};var q,H,Y,J,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Y=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Y.source},description:{story:"### 5. XS: Title above (без коллапсинга)",...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var U,Z,ee,ne,oe;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"### 5b. XS: Title inline (заголовок внутри controlBlock)",...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};const Ce=["XSAllFeaturesWithTabs","XSTabsWithoutCollapsing","XSCollapsingAboveNoTabs","XSInlineCollapsing","XSTitleBlockStory","XSTitleBlockInline"],ge=Object.freeze(Object.defineProperty({__proto__:null,XSAllFeaturesWithTabs:b,XSCollapsingAboveNoTabs:m,XSInlineCollapsing:C,XSTabsWithoutCollapsing:d,XSTitleBlockInline:v,XSTitleBlockStory:p,__namedExportsOrder:Ce,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as T};
