import{r as u,j as t}from"./react-DYHuXpTF.js";import{c as K}from"./tableData-DKA5H0bF.js";import $ from"./DocStoryTemplate-Ap8nEoUU.js";import{s as N}from"./storySourceDoc-tVKyHcEN.js";import{S as s}from"./index-D3xWh3lY.js";import{C as v,c as U,T as W}from"./TableCanvas-CWF-FWG1.js";import{K as C,E as S}from"./@salutejs/sdds-finai-DHa74VUi.js";import{aa as Y,a1 as o,aA as h,aq as q}from"./@salutejs/plasma-icons-wDMzmI_C.js";import{u as f}from"./TableGlide-DeC_sa2e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-mp8l63Ho.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-DJuuFW7o.js";import"./@tanstack/react-virtual-Bf_zwBlO.js";import"./WithTooltip-KJL26V4Q-opuTDqCP.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-Deim4iXY.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-BG0hbt_n.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-D92o8JBZ.js";import"./Collapse-B9yBjfXx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableTabs-CsrlmC7O.js";import"./sharedUiSearch-dyhDuXRC.js";import"./TextField-Bli-zwWY.js";import"./sharedUtilsInputs-B2YHYxoS.js";import"./TypographyWithAutoTooltip-CVA0K4WN.js";import"./Typography-T8Ohpufv.js";import"./ListOfFilters-Cw-S9oeO.js";import"./Table-BHHarSeO.js";import"./react-data-grid-B-99mHK-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-wXqMuSB9.js";import"./NumberFormat-DHHUUJcn.js";import"./EmptyState-CLdIttbM.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BpuP8p-v.js";import"./Autocomplete-Do8fumv9.js";import"./FiltersActions-CM8jemmV.js";import"./IconButton-Dl2SfgPJ.js";import"./TooltipList-DDxSrS8o.js";import"./@daisforge/glide-data-grid-D59PDnqt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./ErrorPage-BWqvDDex.js";const Xe={title:"Локальные компоненты/TableCanvas/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:$}}},X=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,J=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],Q=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],c={...N({preCode:X,previewSource:"shown"}),name:"Пример конфигурации с подключением множественных функциональных возможностей",render:()=>{const[r,x]=u.useState(K),[d,E]=u.useState("row"),[p,D]=u.useState("range-cell"),i=u.useCallback(e=>{var n;return((n=e.row.values.find(l=>l.columnId===e.column.key))==null?void 0:n.value)??""},[]),T=u.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,renderSummaryCell:i,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:e})=>`KEY-${e.id}`}},{key:"task",name:"Title",sortingType:"stringSort",resizable:!0,renderSummaryCell:i},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,renderSummaryCell:e=>{const{row:n,theme:l}=e;return t.jsx(v.Container,{padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:t.jsx(v.Text,{color:n.type==="top"?"red":"orange",children:i(e)})})},filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,n)=>e!=="All"?n===e:!0}}},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0,filtering:{beforeList(e){return t.jsx(U,{$size:e.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,n)=>!e.length||e.some(l=>l===n)}}},{key:"developer",name:"Developer",sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,n)=>(+n||0)>=(+e||0)}}],[i]),A=u.useState({priority:"All",issueType:[],developer:"",complete:"",globalFilter:""}),B=u.useState([]),b=u.useState(()=>new Set),F=u.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),R=u.useCallback(e=>`${e.id}`,[]),[z,L]=u.useState(!1),[O,H]=u.useState(!0),[y,j]=u.useState(!0),[m,M]=u.useState(!1),[g,V]=u.useState(!1),[a,G]=u.useState(!1);u.useEffect(()=>(f.DEBUG=a,()=>{f.DEBUG=!1}),[a]);const P=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков: ${r.length}`},{columnId:"priority",value:`Средних: ${r.filter(e=>e.priority==="Medium").length}`}]}],[r]),_=()=>t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["Всего строк: ",r.length]}),t.jsxs("p",{children:["Выбрано строк: ",b[0].size]})]});return t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[t.jsx(C,{label:"Режим выделения",value:p,onChange:e=>D(e),items:Q}),t.jsx(C,{label:"highlightActiveType (подсветка строки)",value:d,onChange:e=>E(e),items:J})]}),t.jsx(s,{style:{width:"fit-content"},label:m?"Скрыть overlay":"Показать overlay",checked:m,onChange:()=>M(e=>!e)}),t.jsx(s,{style:{width:"fit-content"},label:"Включить блок управления",checked:y,onChange:()=>j(e=>!e)}),t.jsx(s,{style:{width:"fit-content"},label:"Открепить шапку (unsticky header)",checked:g,onChange:()=>V(e=>!e)}),t.jsx(s,{style:{width:"fit-content"},label:"Обводка canvas-нод (CanvasNode.DEBUG)",checked:a,onChange:()=>G(e=>!e)}),t.jsx(W,{tableConfig:{editing:{onRowsChange:x,rowKeyGetter:e=>`${e.id}`},containerStyle:{height:"80vh"},unstickyHeader:g,fullScreenEnabled:!0,resizableColumn:!0,loadingOverlay:{active:m,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:p},highlightActiveType:d,searching:{enabled:!0,debounceDelay:400},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},summaryRows:{showDefault:!0,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,disableHiding:["id"],disablePinning:["developer"],columnsLabel:{task:"Задачи"},pinnedDefault:["id"]},rowMarkers:{startIndex:1},sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:t.jsx(q,{size:"s"}),content:t.jsx(_,{}),title:"Информация",showInSidebar:!0}]},controlBlock:{show:y,rightSideInner:[{text:"Label",contentLeft:t.jsx(o,{color:"inherit"}),view:"linkAccent","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:t.jsx(o,{color:"inherit"}),"data-test-id":"store2"}],customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:Y,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:O,onChange:e=>H(e.target.checked)}},{value:"customFeatureRefresh",CustomIconRender:()=>t.jsx(S,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(h,{size:"s"})}),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:({rowSize:e,isInDropdown:n})=>t.jsx(h,{size:n&&e==="small"?"xs":"s"})}},{value:"statusSelect",CustomIconRender:()=>t.jsx(S,{size:"m",onClick:()=>{alert("Click on statusSelect in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(o,{size:"s"})}),details:{type:"select",label:"Статус",icon:({rowSize:e,isInDropdown:n})=>t.jsx(o,{size:n&&e==="small"?"xs":"s"}),value:z?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный"}],onChange:e=>L(e==="active")}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label",contentLeft:t.jsx(o,{color:"inherit"}),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:t.jsx(o,{color:"inherit"}),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1"},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 2"}]}},filtering:{state:A,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},complete:{label:"% Complete",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:b,rowKeyGetter:R,showDefault:!1},sorting:{state:B},onCellClicked:(e,n)=>{console.debug("[onCellClicked]",e,n)}},columnConfig:T,rows:r,bottomSummaryRows:P,headerContextValue:F},a?"debug-bounds":"plain")]})}};var w,I,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    // таблицу пересоздаём через key, а при уходе со стори флаг сбрасываем.
    const [debugBounds, setDebugBounds] = useState(false);
    useEffect(() => {
      CanvasNode.DEBUG = debugBounds;
      return () => {
        CanvasNode.DEBUG = false;
      };
    }, [debugBounds]);
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
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Je=["MultipleFeatures"];export{c as MultipleFeatures,Je as __namedExportsOrder,Xe as default};
