import{r as t,d as e}from"./react-D2T61mpp.js";import{c as Ce}from"./tableData-DVJFoYoT.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d,S as E}from"./TableCanvas-DCaOWbQ6.js";import{T as c}from"./TableTabs-8pV9igwr.js";import{cQ as ve,cT as y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{u as S}from"./starFeature-DPLStLAi.js";import{qm as x,u1 as ke,pi as pe,rf as o}from"./@salutejs/plasma-icons-B2MmBGK5.js";import{a3 as fe}from"./@salutejs/sdds-finai-OO_Vvml6.js";const Te={title:"Локальные компоненты/TableCanvas/ControlBlock",tags:["!autodocs"]},m=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`,C=()=>{const[u,r]=t.useState(Ce),a=t.useCallback(s=>`${s.id}`,[]),n=t.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:s})=>`KEY-${s.id}`}},{key:"task",name:"Task",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Task"}},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,rowsGrouping:{columnGroupLabel:"Priority"}},{key:"issueType",name:"Issue Type",resizable:!0,rowsGrouping:{columnGroupLabel:"Issue Type"}},{key:"developer",name:"Developer",resizable:!0,rowsGrouping:{columnGroupLabel:"Developer"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,rowsGrouping:{groupByColumn:!1,columnGroupLabel:"% Complete"}}],[]);return{rows:u,setRows:r,rowKeyGetter:a,columnConfig:n}},B=()=>e.jsxDEV("div",{style:{alignSelf:"stretch",display:"flex",alignItems:"center",border:`1px solid ${y}`,color:y,backgroundColor:ve,padding:"0 8px",fontSize:12,lineHeight:"18px",whiteSpace:"nowrap"},children:"кастомный слот"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:96,columnNumber:3},void 0),he=()=>e.jsxDEV("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsxDEV(E,{icon:e.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:119,columnNumber:13},void 0),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:u=>alert(`Edit: ${u.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:118,columnNumber:5},void 0),e.jsxDEV(E,{icon:e.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:131,columnNumber:13},void 0),size:"m",chevronSize:"xs",onIconClick:()=>alert("Icon click 2"),items:[{value:"copy",label:"Копировать"},{value:"paste",label:"Вставить"}],onItemSelect:u=>alert(`Edit 2: ${u.label}`),domMetadata:{"data-test-id":"edit-mode-compound-btn-2"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:130,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:115,columnNumber:3},void 0),v={...b({preCode:m,previewSource:"shown"}),name:"1. Все фичи: Collapsing + TableTabs + ControlBlock",render:()=>{const{rows:u,setRows:r,rowKeyGetter:a,columnConfig:n}=C(),[s,w]=t.useState([]),i=t.useState(()=>new Set),ie=t.useState(!1),ce=t.useState("tab1"),[be,de]=t.useState(!1),me=S();return e.jsxDEV(c,{tabs:[{tabId:"tab1",label:"Основная"},{tabId:"tab2",label:"Архив"},{tabId:"tab3",label:"Аналитика"}],activeTabIdState:ce,rightSlot:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:176,columnNumber:20},void 0),collapsing:{enabled:!0,collapseText:"Свернуть таблицу",expandText:"Развернуть таблицу",rightSlot:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:181,columnNumber:22},void 0)},children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,resizableColumn:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:a,groupByState:[s,w]},selecting:{state:i,rowKeyGetter:a},editing:{onRowsChange:l=>r(l),rowKeyGetter:a,enabled:ie,showButtons:!0,editModeLeftSlot:e.jsxDEV(he,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:206,columnNumber:35},void 0)},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:214,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:219,columnNumber:23},void 0)},{text:"Выгрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:227,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:229,columnNumber:23},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:237,columnNumber:34},void 0),dropdownIconRender:l=>e.jsxDEV(o,{color:"inherit",size:l.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:239,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:l=>alert(`Экспорт: ${l.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:x,onClick:()=>alert("Обновить"),dividerLeft:!0},{value:"favorite",label:"Избранное",Icon:ke,onClick:()=>alert("Избранное"),mandatory:!0,details:{type:"switch",label:"В избранном",checked:be,onChange:l=>de(l.target.checked)}},{value:"add-row",label:"Добавить строку",Icon:pe,onClick:()=>alert("Добавить строку"),dividerLeft:!0,canBeCompressedInToolsMenu:!1},me]}},columnConfig:n,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:185,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:184,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Архивные данные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:295,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:294,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab3",children:e.jsxDEV("div",{style:{padding:24},children:"Аналитика"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:298,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:297,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:169,columnNumber:7},void 0)}},k={...b({preCode:m,previewSource:"shown"}),name:"2. TableTabs + ControlBlock (без коллапсинга)",render:()=>{const{rows:u,columnConfig:r}=C(),a=t.useState("tab1"),n=S();return e.jsxDEV(c,{tabs:[{tabId:"tab1",label:"Данные"},{tabId:"tab2",label:"Настройки"}],activeTabIdState:a,rightSlot:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:325,columnNumber:20},void 0),children:[e.jsxDEV(c.TabPanel,{tabId:"tab1",children:e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:341,columnNumber:34},void 0),dropdownIconRender:s=>e.jsxDEV(o,{color:"inherit",size:s.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:343,columnNumber:23},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:s=>alert(`Экспорт: ${s.label}`)}}],customFeatures:[{value:"refresh",label:"Обновить",Icon:x,onClick:()=>alert("Обновить")},n]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:328,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:327,columnNumber:9},void 0),e.jsxDEV(c.TabPanel,{tabId:"tab2",children:e.jsxDEV("div",{style:{padding:24},children:"Настройки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:375,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:374,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:319,columnNumber:7},void 0)}},p={...b({preCode:m,previewSource:"shown"}),name:"3. Collapsing above + ControlBlock (без табов)",render:()=>{const{rows:u,columnConfig:r}=C(),a=S();return e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Загрузить",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:408,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:410,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:418,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:420,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"above",collapseButtonAboveRightSlot:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:440,columnNumber:43},void 0)}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:395,columnNumber:7},void 0)}},f={...b({preCode:m,previewSource:"shown"}),name:"4. ControlBlock с inline collapsing",render:()=>{const{rows:u,rowKeyGetter:r,columnConfig:a}=C(),[n,s]=t.useState([]),w=S();return e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},rowsGrouping:{rowKeyGetter:r,groupByState:[n,s]},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Обновить",contentLeft:e.jsxDEV(x,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:481,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(x,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:483,columnNumber:19},void 0)},{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:491,columnNumber:30},void 0),dropdownIconRender:i=>e.jsxDEV(o,{color:"inherit",size:i.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:493,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:i=>alert(`Экспорт: ${i.label}`)}}],customFeatures:[w]},collapsing:{enableCollapse:!0,collapseButtonPlacement:"inside"}},columnConfig:a,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:464,columnNumber:7},void 0)}},T={...b({preCode:m,previewSource:"shown"}),name:"5. Title above (заголовок без коллапсинга)",render:()=>{const{rows:u,columnConfig:r}=C(),a=S();return e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{collapseButtonPlacement:"above",titleText:"Реестр задач",collapseButtonAboveRightSlot:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:544,columnNumber:43},void 0)},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:552,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:554,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:535,columnNumber:7},void 0)}},h={...b({preCode:m,previewSource:"shown"}),name:"5b. Title inline (заголовок внутри controlBlock)",render:()=>{const{rows:u,columnConfig:r}=C(),a=S();return e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},collapsing:{titleText:"Реестр задач"},controlBlock:{show:!0,size:"m",rightSideInner:[{text:"Экспорт",contentLeft:e.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:607,columnNumber:30},void 0),dropdownIconRender:n=>e.jsxDEV(o,{color:"inherit",size:n.rowSize==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:609,columnNumber:19},void 0),dropdown:{items:[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}],onItemSelect:n=>alert(`Экспорт: ${n.label}`)}}],customFeatures:[a]}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:592,columnNumber:7},void 0)}},ge=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"big",value:"big"}],g={...b({preCode:m,previewSource:"shown"}),name:"6. Размер строк снаружи (rowSize.state)",render:()=>{const{rows:u,columnConfig:r}=C(),a=t.useState("medium"),[n,s]=a;return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{maxWidth:320,marginBottom:12},children:e.jsxDEV(fe,{label:"Размер строк (вне таблицы)",value:n,onChange:w=>s(w),items:ge},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:657,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:656,columnNumber:9},void 0),e.jsxDEV(d,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{state:a,showInControl:!0},controlBlock:{show:!0,size:"m"}},columnConfig:r,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:664,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.controlBlock.stories.tsx",lineNumber:655,columnNumber:7},void 0)}};var N,I,D,z,F;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(I=v.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:`### 1. Все фичи: Collapsing (above) + TableTabs + ControlBlock

Демонстрация максимальной конфигурации:
- Коллапсинг above с rightSlot
- TableTabs с rightSlot и коллапсингом
- ControlBlock со всеми фичами: editing с editModeLeftSlot, search,
  rightSideInner, customFeatures с dividerLeft, keyText, rowSize, fullScreen`,...(F=(z=v.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};var A,V,j,R,P;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(V=k.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:`### 2. TableTabs + ControlBlock (без коллапсинга)

TableTabs с кастомным слотом справа, без коллапсинга.`,...(P=(R=k.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var L,G,$,M,K;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(G=p.parameters)==null?void 0:G.docs)==null?void 0:$.source},description:{story:`### 3. Collapsing (above) + ControlBlock (без табов)

Коллапсинг с rightSlot над таблицей, без TableTabs.`,...(K=(M=p.parameters)==null?void 0:M.docs)==null?void 0:K.description}}};var _,O,W,Z,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(O=f.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:`### 4. ControlBlock inline collapsing (без табов, без above)

Коллапсинг inline — кнопка внутри controlBlock.`,...(q=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var H,Q,Y,J,U;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"### 5. Title above (через collapsing API, без коллапсинга)\n\nЗаголовок таблицы через `collapsing.titleText` + `collapseButtonPlacement: 'above'`, без enableCollapse.",...(U=(J=T.parameters)==null?void 0:J.docs)==null?void 0:U.description}}};var X,ee,ne,oe,ue;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source},description:{story:"### 5b. Title inline (заголовок внутри controlBlock)\n\n`collapsing.titleText` без `collapseButtonPlacement` (default='inside') — заголовок внутри controlBlock слева.",...(ue=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ue.description}}};var ae,re,se,le,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"### 6. Размер строк снаружи (rowSize.state)\n\n`rowSize.state` — кортеж `[size, setSize]`: размер строк хранит потребитель. Переключатель\nвне таблицы и кнопка в controlBlock меняют одно и то же значение.",...(te=(le=g.parameters)==null?void 0:le.docs)==null?void 0:te.description}}};const Se=["AllFeaturesWithTabs","TabsWithoutCollapsing","CollapsingAboveNoTabs","InlineCollapsing","TitleBlockStory","TitleBlockInline","ControlledRowSize"],Fe=Object.freeze(Object.defineProperty({__proto__:null,AllFeaturesWithTabs:v,CollapsingAboveNoTabs:p,ControlledRowSize:g,InlineCollapsing:f,TabsWithoutCollapsing:k,TitleBlockInline:h,TitleBlockStory:T,__namedExportsOrder:Se,default:Te},Symbol.toStringTag,{value:"Module"}));export{Fe as T};
