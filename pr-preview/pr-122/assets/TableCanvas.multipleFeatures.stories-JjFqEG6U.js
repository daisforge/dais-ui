import{r as u,d as n}from"./react-D2T61mpp.js";import{c as _}from"./tableData-DVJFoYoT.js";import $ from"./DocStoryTemplate-n8EPqSp1.js";import{s as K}from"./storySourceDoc-tVKyHcEN.js";import{S as i}from"./FiltersActions-DL7UWS5W.js";import{C as y,b as U,T as W}from"./TableCanvas-DQBHr-L4.js";import{n as g}from"./TableGlide-DPufX4Im.js";import{a3 as f,E as h}from"./@salutejs/sdds-finai-BV7J2o_s.js";import{u1 as Y,rf as l,qm as S,kZ as q}from"./@salutejs/plasma-icons-V_8w2nmt.js";import"./vendor-CaK76Snf.js";import"./react-is-Clcustum.js";import"./styled-components-BwCFaRkt.js";import"./@tanstack/react-virtual-BcD1q-CR.js";import"./tslib-DoU9Jm1N.js";import"./IconButton-CHYS7OsY.js";import"./utils-C8ToVq-5.js";import"./constants-CUAU9RhA.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D90at13y.js";import"./TextField-DtKHUcKj.js";import"./sharedUtilsInputs-DP_4d_Lv.js";import"./AiAgentPopup-DzpYWVjQ.js";import"./TextArea-DWNSOGny.js";import"./sharedUtilsResizable-BuoR3rVw.js";import"./Table-DegEDnTQ.js";import"./Collapse-DEzgwEVz.js";import"./react-data-grid-n2ePWCSg.js";import"./TableTabs-B8dHQcob.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-QzcPISl2.js";import"./ListOfFilters-BWsJeJaB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCguiR9a.js";import"./EmptyState-BlErGnbS.js";import"./MassActions-CHwRBAEJ.js";import"./Autocomplete-BRRkvWTY.js";import"./@glideappsfinal/glide-data-grid-BxAXJixI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-I061CTqY.js";const He={title:"Локальные компоненты/TableCanvas/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:$}}},X=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,Z=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],J=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],r={...K({preCode:X,previewSource:"shown"}),name:"Пример конфигурации с подключением множественных функциональных возможностей",render:()=>{const[s,x]=u.useState(_),[d,I]=u.useState("row"),[b,E]=u.useState("range-cell"),o=u.useCallback(e=>{var t;return((t=e.row.values.find(a=>a.columnId===e.column.key))==null?void 0:t.value)??""},[]),D=u.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,renderSummaryCell:o,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:e})=>`KEY-${e.id}`}},{key:"task",name:"Title",sortingType:"stringSort",resizable:!0,renderSummaryCell:o},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,renderSummaryCell:e=>{const{row:t,theme:a}=e;return n.jsxDEV(y.Container,{padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:n.jsxDEV(y.Text,{color:t.type==="top"?"red":"orange",children:o(e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:123,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:117,columnNumber:15},void 0)},filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0,filtering:{beforeList(e){return n.jsxDEV(U,{$size:e.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:157,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(a=>a===t)}}},{key:"developer",name:"Developer",sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[o]),F=u.useState({priority:"All",issueType:[],developer:"",complete:"",globalFilter:""}),N=u.useState([]),p=u.useState(()=>new Set),A=u.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),B=u.useCallback(e=>`${e.id}`,[]),[M,V]=u.useState(!1),[R,z]=u.useState(!0),[v,L]=u.useState(!0),[c,O]=u.useState(!1),[C,H]=u.useState(!1),[m,j]=u.useState(g.DEBUG);g.DEBUG=m;const G=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков: ${s.length}`},{columnId:"priority",value:`Средних: ${s.filter(e=>e.priority==="Medium").length}`}]}],[s]),P=()=>n.jsxDEV(n.Fragment,{children:[n.jsxDEV("p",{children:["Всего строк: ",s.length]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:270,columnNumber:9},void 0),n.jsxDEV("p",{children:["Выбрано строк: ",p[0].size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:271,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:269,columnNumber:7},void 0);return n.jsxDEV("div",{children:[n.jsxDEV("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[n.jsxDEV(f,{label:"Режим выделения",value:b,onChange:e=>E(e),items:J},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:280,columnNumber:11},void 0),n.jsxDEV(f,{label:"highlightActiveType (подсветка строки)",value:d,onChange:e=>I(e),items:Z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:286,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:277,columnNumber:9},void 0),n.jsxDEV(i,{style:{width:"fit-content"},label:c?"Скрыть overlay":"Показать overlay",checked:c,onChange:()=>O(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:296,columnNumber:9},void 0),n.jsxDEV(i,{style:{width:"fit-content"},label:"Включить блок управления",checked:v,onChange:()=>L(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:304,columnNumber:9},void 0),n.jsxDEV(i,{style:{width:"fit-content"},label:"Открепить шапку (unsticky header)",checked:C,onChange:()=>H(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:310,columnNumber:9},void 0),n.jsxDEV(i,{style:{width:"fit-content"},label:"Обводка canvas-нод (CanvasNode.DEBUG)",checked:m,onChange:()=>j(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:316,columnNumber:9},void 0),n.jsxDEV(W,{tableConfig:{editing:{onRowsChange:x,rowKeyGetter:e=>`${e.id}`},containerStyle:{height:"80vh"},unstickyHeader:C,fullScreenEnabled:!0,resizableColumn:!0,loadingOverlay:{active:c,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:b},highlightActiveType:d,searching:{enabled:!0,debounceDelay:400},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},summaryRows:{showDefault:!0,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,disableHiding:["id"],disablePinning:["developer"],columnsLabel:{task:"Задачи"},pinnedDefault:["id"]},rowMarkers:{startIndex:1},sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:n.jsxDEV(q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:379,columnNumber:25},void 0),content:n.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:380,columnNumber:28},void 0),title:"Информация",showInSidebar:!0}]},controlBlock:{show:v,rightSideInner:[{text:"Label",contentLeft:n.jsxDEV(l,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:391,columnNumber:32},void 0),view:"linkAccent","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:n.jsxDEV(l,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:397,columnNumber:32},void 0),"data-test-id":"store2"}],customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:Y,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:R,onChange:e=>z(e.target.checked)}},{value:"customFeatureRefresh",CustomIconRender:()=>n.jsxDEV(h,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxDEV(S,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:431,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:418,columnNumber:21},void 0),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:({rowSize:e,isInDropdown:t})=>n.jsxDEV(S,{size:t&&e==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:441,columnNumber:23},void 0)}},{value:"statusSelect",CustomIconRender:()=>n.jsxDEV(h,{size:"m",onClick:()=>{alert("Click on statusSelect in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxDEV(l,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:464,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:450,columnNumber:21},void 0),details:{type:"select",label:"Статус",icon:({rowSize:e,isInDropdown:t})=>n.jsxDEV(l,{size:t&&e==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:472,columnNumber:23},void 0),value:M?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный"}],onChange:e=>V(e==="active")}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label",contentLeft:n.jsxDEV(l,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:492,columnNumber:34},void 0),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:n.jsxDEV(l,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:518,columnNumber:34},void 0),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1"},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 2"}]}},filtering:{state:F,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},complete:{label:"% Complete",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:p,rowKeyGetter:B,showDefault:!1},sorting:{state:N},onCellClicked:(e,t)=>{console.debug("[onCellClicked]",e,t)}},columnConfig:D,rows:s,bottomSummaryRows:G,headerContextValue:A},m?"debug-bounds":"plain",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:322,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:276,columnNumber:7},void 0)}};var k,T,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Пример конфигурации с подключением множественных функциональных возможностей',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const renderCommonSummaryCell = useCallback((props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) => props.row.values.find(el => el.columnId === props.column.key)?.value ?? '', []);
    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(() => [{
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort',
      resizable: true,
      renderSummaryCell: renderCommonSummaryCell,
      keyText: {
        key: 'idKey',
        name: 'Ключ - ID',
        renderCell: ({
          row
        }) => \`KEY-\${row.id}\`
      }
    }, {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort',
      resizable: true,
      renderSummaryCell: renderCommonSummaryCell
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      resizable: true,
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
      },
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort',
      resizable: true,
      filtering: {
        beforeList(props) {
          return <TableFilterSelectListItem $size={props.headerContextState.rowSize}>
                  custom beforeList
                </TableFilterSelectListItem>;
        },
        component: 'select',
        selectOptions: {
          type: 'stateInHeaderContext',
          optionsKeyInHeaderContext: 'issueTypeOptions'
        },
        keyInFilterState: 'issueType',
        valueInRow: r => r.issueType,
        filter: {
          typeOfValue: 'multiple',
          filteringType: (fv, rv) => !fv.length || fv.some(fvCurr => fvCurr === rv)
        }
      }
    }, {
      key: 'developer',
      name: 'Developer',
      sortingType: 'stringSort',
      resizable: true,
      editingCell: {
        component: 'inputString'
      },
      filtering: {
        component: 'input',
        keyInFilterState: 'developer',
        valueInRow: r => r.developer,
        filter: 'startWith'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort',
      resizable: true,
      filtering: {
        component: 'input',
        keyInFilterState: 'complete',
        valueInRow: r => r.complete,
        filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
      }
    }], [renderCommonSummaryCell]);
    const filteringStateAndSetter = useState({
      priority: 'All',
      issueType: [],
      developer: '',
      complete: '',
      globalFilter: ''
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const headerContextValue = useMemo(() => ({
      issueTypeOptions: [{
        text: 'Bug',
        value: 'Bug'
      }, {
        text: 'Improvement',
        value: 'Improvement'
      }, {
        text: 'Epic',
        value: 'Epic'
      }, {
        text: 'Story',
        value: 'Story'
      }]
    }), []);
    const rowKeyGetter = useCallback((r: Row) => \`\${r.id}\`, []);
    const [isCustomFeatureActive, setIsCustomFeatureActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(true);
    const [controlBlock, setControlBlock] = useState(true);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);
    const [unstickyHeader, setUnstickyHeader] = useState(false);
    // Обводка границ canvas-нод (текст, кнопки, контейнеры в ячейках и шапке).
    // Флаг глобальный и читается при отрисовке, поэтому после переключения
    // таблицу пересоздаём через key, чтобы перерисовалось всё сразу.
    const [debugBounds, setDebugBounds] = useState(CanvasNode.DEBUG);
    CanvasNode.DEBUG = debugBounds;
    const bottomSummaryRowsData: TSummaryRowData[] = useMemo(() => [{
      type: 'bottom' as const,
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего тасков: \${rows.length}\`
      }, {
        columnId: 'priority',
        value: \`Средних: \${rows.filter(el => el.priority === 'Medium').length}\`
      }]
    }], [rows]);
    const CustomInfoTab = () => <>
        <p>Всего строк: {rows.length}</p>
        <p>Выбрано строк: {selectingRowStateAndSetter[0].size}</p>
      </>;
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        maxWidth: 760,
        marginBottom: 12
      }}>
          <Select label="Режим выделения" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
          <Select label="highlightActiveType (подсветка строки)" value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS} />
        </div>

        <Switch style={{
        width: 'fit-content'
      }} label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'} checked={isVisibleLoadingOverlay} onChange={() => setIsVisibleLoadingOverlay(prev => !prev)} />
        <Switch style={{
        width: 'fit-content'
      }} label="Включить блок управления" checked={controlBlock} onChange={() => setControlBlock(prev => !prev)} />
        <Switch style={{
        width: 'fit-content'
      }} label="Открепить шапку (unsticky header)" checked={unstickyHeader} onChange={() => setUnstickyHeader(prev => !prev)} />
        <Switch style={{
        width: 'fit-content'
      }} label="Обводка canvas-нод (CanvasNode.DEBUG)" checked={debugBounds} onChange={() => setDebugBounds(prev => !prev)} />
        <TableCanvas key={debugBounds ? 'debug-bounds' : 'plain'} tableConfig={{
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`
        },
        containerStyle: {
          height: '80vh'
        },
        unstickyHeader,
        fullScreenEnabled: true,
        resizableColumn: true,
        loadingOverlay: {
          active: isVisibleLoadingOverlay,
          showSubtitleDelay: 5000,
          subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд'
        },
        rowSize: {
          default: 'big',
          showInControl: true
        },
        cellsSelection: {
          mode: selectionMode
        },
        highlightActiveType,
        searching: {
          enabled: true,
          debounceDelay: 400
        },
        keyText: {
          showInControl: true,
          controlBlock: {},
          sidebar: {}
        },
        summaryRows: {
          showDefault: true,
          showInControl: true
        },
        columnsControl: {
          enable: true,
          hiding: true,
          pinning: true,
          reorderingAside: true,
          reorderingHeader: true,
          disableHiding: ['id'],
          disablePinning: ['developer'],
          columnsLabel: {
            task: 'Задачи'
          },
          pinnedDefault: ['id']
        },
        rowMarkers: {
          startIndex: 1
        },
        sidebarConfig: {
          customTabs: [{
            id: 'customInfo',
            label: 'Информация',
            icon: <IconInfo size="s" />,
            content: <CustomInfoTab />,
            title: 'Информация',
            showInSidebar: true
          }]
        },
        controlBlock: {
          show: controlBlock,
          rightSideInner: [{
            text: 'Label',
            contentLeft: <IconSb color="inherit" />,
            view: 'linkAccent',
            'data-test-id': 'Label right 1'
          }, {
            text: 'Скачать',
            contentLeft: <IconSb color="inherit" />,
            'data-test-id': 'store2'
          }],
          customFeatures: [{
            value: 'favorite',
            label: 'Удалить из избранного',
            Icon: IconStar,
            onClick: () => {},
            mandatory: true,
            details: {
              type: 'switch',
              label: 'В избранном',
              checked: isFavorite,
              onChange: e => setIsFavorite(e.target.checked)
            }
          }, {
            value: 'customFeatureRefresh',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              alert('Click on customFeatureRefresh in ControlBlock');
            }} style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconRefresh size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'button',
              label: 'Обновить',
              onClick: () => alert('Click for customFeatureRefresh in Sidebar'),
              // Иконка в дропдауне мельче на маленьком rowSize
              icon: ({
                rowSize,
                isInDropdown
              }) => <IconRefresh size={isInDropdown && rowSize === 'small' ? 'xs' : 's'} />
            }
          }, {
            value: 'statusSelect',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              alert('Click on statusSelect in ControlBlock');
            }} title="custom feature status" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconSb size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'select',
              label: 'Статус',
              // Иконка в дропдауне мельче на маленьком rowSize
              icon: ({
                rowSize,
                isInDropdown
              }) => <IconSb size={isInDropdown && rowSize === 'small' ? 'xs' : 's'} />,
              value: isCustomFeatureActive ? 'active' : 'inactive',
              options: [{
                value: 'active',
                label: 'Активный'
              }, {
                value: 'inactive',
                label: 'Неактивный'
              }],
              onChange: value => setIsCustomFeatureActive(value === 'active')
            }
          }],
          massActionPanel: {
            buttons: [{
              type: 'button',
              view: 'secondary',
              text: 'Label',
              contentLeft: <IconSb color="inherit" />,
              dropdown: {
                onItemSelect: (item, _) => alert(item.value),
                items: [{
                  value: 'Some label 1',
                  label: 'Some label 1',
                  items: [{
                    value: 'some-inner-label1',
                    label: 'some-inner-label1'
                  }]
                }, {
                  value: 'Some label 2',
                  label: 'Some label 2'
                }]
              },
              'data-test-id': 'Label left 1'
            }, {
              type: 'button',
              view: 'accent',
              text: 'Label',
              contentLeft: <IconSb color="inherit" />,
              dropdown: {
                onItemSelect: (item, _) => alert(item.value),
                items: [{
                  value: 'Some label 1',
                  label: 'Some label 1'
                }, {
                  value: 'Some label 2',
                  label: 'Some label 2'
                }]
              },
              'data-test-id': 'Label left 2'
            }]
          }
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            priority: {
              label: 'Priority',
              clearedValue: 'All'
            },
            issueType: {
              label: 'Issue Type',
              clearedValue: []
            },
            developer: {
              label: 'Developer',
              clearedValue: ''
            },
            complete: {
              label: '% Complete',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        selecting: {
          state: selectingRowStateAndSetter,
          rowKeyGetter,
          showDefault: false
        },
        sorting: {
          state: sortingStateAndSetter
        },
        onCellClicked: (cell, info) => {
          // eslint-disable-next-line no-console
          console.debug('[onCellClicked]', cell, info);
        }
      }} columnConfig={columnConfig} rows={rows} bottomSummaryRows={bottomSummaryRowsData} headerContextValue={headerContextValue} />
      </div>;
  }
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const je=["MultipleFeatures"];export{r as MultipleFeatures,je as __namedExportsOrder,He as default};
