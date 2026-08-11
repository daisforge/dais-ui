import{r as a,d as n}from"./react-D2T61mpp.js";import{c as j}from"./tableData-UCfjiBCh.js";import P from"./DocStoryTemplate-DwKiq8z4.js";import{s as _}from"./storySourceDoc-tVKyHcEN.js";import{S as c}from"./FiltersActions-DHlpTYBH.js";import{C,b as G,T as $}from"./TableCanvas-D-CQYfCH.js";import{a1 as y,E as g}from"./@salutejs/sdds-finai-DFCsnlGS.js";import{tL as K,r5 as u,qc as f,kV as W}from"./@salutejs/plasma-icons-B9bLUA95.js";import"./vendor-CiLFOTMj.js";import"./react-is-Clcustum.js";import"./styled-components-BkMlLbXT.js";import"./tslib-De9GV7Vy.js";import"./IconButton-BQnj4hIh.js";import"./utils-e9PhU-mi.js";import"./constants-B3b49qmU.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BQOKPHGZ.js";import"./TextField-lViCe52l.js";import"./sharedUtilsInputs-uRJ13-4X.js";import"./AnalyticalWidget-DtYHQ_S7.js";import"./Collapse-CCEpHUe-.js";import"./Table-ocwmzH40.js";import"./react-data-grid-nfJfsrYQ.js";import"./TableTabs-DaXqU_0-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DCu4ijR6.js";import"./ListOfFilters-H3od51M9.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ChYUmjyx.js";import"./EmptyState-B6A7egGc.js";import"./MassActions-Ds8H_pZL.js";import"./Autocomplete-DC2DbVMs.js";import"./TableGlide-DgHasvKc.js";import"./@glideappsfinal/glide-data-grid-BgrWNZKz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-_UNf9iqj.js";const Ve={title:"Локальные компоненты/TableCanvas/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:P}}},Y=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,U=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],q=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],i={..._({preCode:Y,previewSource:"shown"}),name:"Пример конфигурации с подключением множественных функциональных возможностей",render:()=>{const[s,T]=a.useState(j),[m,w]=a.useState("row"),[d,I]=a.useState("range-cell"),o=a.useCallback(e=>{var t;return((t=e.row.values.find(l=>l.columnId===e.column.key))==null?void 0:t.value)??""},[]),x=a.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,renderSummaryCell:o,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:e})=>`KEY-${e.id}`}},{key:"task",name:"Title",sortingType:"stringSort",resizable:!0,renderSummaryCell:o},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,renderSummaryCell:e=>{const{row:t,theme:l}=e;return n.jsxDEV(C.Container,{padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:n.jsxDEV(C.Text,{color:t.type==="top"?"red":"orange",children:o(e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:122,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:116,columnNumber:15},void 0)},filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0,filtering:{beforeList(e){return n.jsxDEV(G,{$size:e.headerContextState.rowSize,children:"custom beforeList"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:156,columnNumber:17},this)},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(l=>l===t)}}},{key:"developer",name:"Developer",sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[o]),F=a.useState({priority:"All",issueType:[],developer:"",complete:"",globalFilter:""}),D=a.useState([]),b=a.useState(()=>new Set),E=a.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),N=a.useCallback(e=>`${e.id}`,[]),[A,M]=a.useState(!1),[V,B]=a.useState(!0),[p,R]=a.useState(!0),[r,z]=a.useState(!1),[v,L]=a.useState(!1),O=a.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков: ${s.length}`},{columnId:"priority",value:`Средних: ${s.filter(e=>e.priority==="Medium").length}`}]}],[s]),H=()=>n.jsxDEV(n.Fragment,{children:[n.jsxDEV("p",{children:["Всего строк: ",s.length]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:264,columnNumber:9},void 0),n.jsxDEV("p",{children:["Выбрано строк: ",b[0].size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:265,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:263,columnNumber:7},void 0);return n.jsxDEV("div",{children:[n.jsxDEV("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[n.jsxDEV(y,{label:"Режим выделения",value:d,onChange:e=>I(e),items:q},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:274,columnNumber:11},void 0),n.jsxDEV(y,{label:"highlightActiveType (подсветка строки)",value:m,onChange:e=>w(e),items:U},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:280,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:271,columnNumber:9},void 0),n.jsxDEV(c,{style:{width:"fit-content"},label:r?"Скрыть overlay":"Показать overlay",checked:r,onChange:()=>z(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:290,columnNumber:9},void 0),n.jsxDEV(c,{style:{width:"fit-content"},label:"Включить блок управления",checked:p,onChange:()=>R(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:298,columnNumber:9},void 0),n.jsxDEV(c,{style:{width:"fit-content"},label:"Открепить шапку (unsticky header)",checked:v,onChange:()=>L(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:304,columnNumber:9},void 0),n.jsxDEV($,{tableConfig:{editing:{onRowsChange:T,rowKeyGetter:e=>`${e.id}`},containerStyle:{height:"80vh"},unstickyHeader:v,fullScreenEnabled:!0,resizableColumn:!0,loadingOverlay:{active:r,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:d},highlightActiveType:m,searching:{enabled:!0,debounceDelay:400},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},summaryRows:{showDefault:!0,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,disableHiding:["id"],disablePinning:["developer"],columnsLabel:{task:"Задачи"},pinnedDefault:["id"]},rowMarkers:{startIndex:1},sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:n.jsxDEV(W,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:366,columnNumber:25},void 0),content:n.jsxDEV(H,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:367,columnNumber:28},void 0),title:"Информация",showInSidebar:!0}]},controlBlock:{show:p,rightSideInner:[{text:"Label",contentLeft:n.jsxDEV(u,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:378,columnNumber:32},void 0),view:"linkAccent","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:n.jsxDEV(u,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:384,columnNumber:32},void 0),"data-test-id":"store2"}],customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:K,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:V,onChange:e=>B(e.target.checked)}},{value:"customFeatureRefresh",CustomIconRender:()=>n.jsxDEV(g,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxDEV(f,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:418,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:405,columnNumber:21},void 0),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:({rowSize:e,isInDropdown:t})=>n.jsxDEV(f,{size:t&&e==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:428,columnNumber:23},void 0)}},{value:"statusSelect",CustomIconRender:()=>n.jsxDEV(g,{size:"m",onClick:()=>{alert("Click on statusSelect in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxDEV(u,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:451,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:437,columnNumber:21},void 0),details:{type:"select",label:"Статус",icon:({rowSize:e,isInDropdown:t})=>n.jsxDEV(u,{size:t&&e==="small"?"xs":"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:459,columnNumber:23},void 0),value:A?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный"}],onChange:e=>M(e==="active")}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label",contentLeft:n.jsxDEV(u,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:479,columnNumber:34},void 0),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:n.jsxDEV(u,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:505,columnNumber:34},void 0),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1"},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 2"}]}},filtering:{state:F,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},complete:{label:"% Complete",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:b,rowKeyGetter:N,showDefault:!1},sorting:{state:D},onCellClicked:(e,t)=>{console.debug("[onCellClicked]",e,t)}},columnConfig:x,rows:s,bottomSummaryRows:O,headerContextValue:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:310,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.MultipleFeatures/TableCanvas.multipleFeatures.stories.tsx",lineNumber:270,columnNumber:7},void 0)}};var h,S,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <TableCanvas tableConfig={{
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
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const Be=["MultipleFeatures"];export{i as MultipleFeatures,Be as __namedExportsOrder,Ve as default};
