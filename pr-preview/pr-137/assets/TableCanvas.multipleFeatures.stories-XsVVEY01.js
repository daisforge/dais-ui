import{r as u,j as n}from"./react-CAOzMBF_.js";import{c as $}from"./tableData-DVJFoYoT.js";import K from"./DocStoryTemplate-Cf946dgV.js";import{s as N}from"./storySourceDoc-tVKyHcEN.js";import{S as s}from"./FiltersActions-BWfcXHB3.js";import{C as v,k as U,T as W}from"./TableCanvas-DlX-Wh2b.js";import{a3 as C,E as S}from"./@salutejs/sdds-finai-CKhMjg07.js";import{u1 as Y,rf as o,qm as h,kZ as q}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{n as f}from"./TableGlide-DbDA-PPi.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./IconButton-ZoRfzXaJ.js";import"./utils-EIxGvR70.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DvvYTz20.js";import"./TextField-DpKf-85P.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./Table-BQHrw1K6.js";import"./Collapse-CblE70vy.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-C6Rr5Gy-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DGAhIiuN.js";import"./ListOfFilters-CMjwWdxj.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BqjpJJQW.js";import"./EmptyState-BCYMGuYF.js";import"./MassActions-Csxbu-7r.js";import"./Autocomplete-DE_6PTST.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./@glideappsfinal/glide-data-grid-BB_xclG6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CE3N0REk.js";const Ge={title:"Локальные компоненты/TableCanvas/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:K}}},X=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,Z=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],J=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],c={...N({preCode:X,previewSource:"shown"}),name:"Пример конфигурации с подключением множественных функциональных возможностей",render:()=>{const[r,x]=u.useState($),[m,E]=u.useState("row"),[p,D]=u.useState("range-cell"),i=u.useCallback(e=>{var t;return((t=e.row.values.find(l=>l.columnId===e.column.key))==null?void 0:t.value)??""},[]),T=u.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort",resizable:!0,renderSummaryCell:i,keyText:{key:"idKey",name:"Ключ - ID",renderCell:({row:e})=>`KEY-${e.id}`}},{key:"task",name:"Title",sortingType:"stringSort",resizable:!0,renderSummaryCell:i},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!0,renderSummaryCell:e=>{const{row:t,theme:l}=e;return n.jsx(v.Container,{padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:n.jsx(v.Text,{color:t.type==="top"?"red":"orange",children:i(e)})})},filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,t)=>e!=="All"?t===e:!0}}},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0,filtering:{beforeList(e){return n.jsx(U,{$size:e.headerContextState.rowSize,children:"custom beforeList"})},component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,t)=>!e.length||e.some(l=>l===t)}}},{key:"developer",name:"Developer",sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},{key:"complete",name:"% Complete",sortingType:"numberSort",resizable:!0,filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,t)=>(+t||0)>=(+e||0)}}],[i]),A=u.useState({priority:"All",issueType:[],developer:"",complete:"",globalFilter:""}),B=u.useState([]),b=u.useState(()=>new Set),F=u.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),R=u.useCallback(e=>`${e.id}`,[]),[z,L]=u.useState(!1),[O,H]=u.useState(!0),[y,j]=u.useState(!0),[d,M]=u.useState(!1),[g,V]=u.useState(!1),[a,G]=u.useState(!1);u.useEffect(()=>(f.DEBUG=a,()=>{f.DEBUG=!1}),[a]);const P=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего тасков: ${r.length}`},{columnId:"priority",value:`Средних: ${r.filter(e=>e.priority==="Medium").length}`}]}],[r]),_=()=>n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Всего строк: ",r.length]}),n.jsxs("p",{children:["Выбрано строк: ",b[0].size]})]});return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[n.jsx(C,{label:"Режим выделения",value:p,onChange:e=>D(e),items:J}),n.jsx(C,{label:"highlightActiveType (подсветка строки)",value:m,onChange:e=>E(e),items:Z})]}),n.jsx(s,{style:{width:"fit-content"},label:d?"Скрыть overlay":"Показать overlay",checked:d,onChange:()=>M(e=>!e)}),n.jsx(s,{style:{width:"fit-content"},label:"Включить блок управления",checked:y,onChange:()=>j(e=>!e)}),n.jsx(s,{style:{width:"fit-content"},label:"Открепить шапку (unsticky header)",checked:g,onChange:()=>V(e=>!e)}),n.jsx(s,{style:{width:"fit-content"},label:"Обводка canvas-нод (CanvasNode.DEBUG)",checked:a,onChange:()=>G(e=>!e)}),n.jsx(W,{tableConfig:{editing:{onRowsChange:x,rowKeyGetter:e=>`${e.id}`},containerStyle:{height:"80vh"},unstickyHeader:g,fullScreenEnabled:!0,resizableColumn:!0,loadingOverlay:{active:d,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:p},highlightActiveType:m,searching:{enabled:!0,debounceDelay:400},keyText:{showInControl:!0,controlBlock:{},sidebar:{}},summaryRows:{showDefault:!0,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,disableHiding:["id"],disablePinning:["developer"],columnsLabel:{task:"Задачи"},pinnedDefault:["id"]},rowMarkers:{startIndex:1},sidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:n.jsx(q,{size:"s"}),content:n.jsx(_,{}),title:"Информация",showInSidebar:!0}]},controlBlock:{show:y,rightSideInner:[{text:"Label",contentLeft:n.jsx(o,{color:"inherit"}),view:"linkAccent","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:n.jsx(o,{color:"inherit"}),"data-test-id":"store2"}],customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:Y,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:O,onChange:e=>H(e.target.checked)}},{value:"customFeatureRefresh",CustomIconRender:()=>n.jsx(S,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(h,{size:"s"})}),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:({rowSize:e,isInDropdown:t})=>n.jsx(h,{size:t&&e==="small"?"xs":"s"})}},{value:"statusSelect",CustomIconRender:()=>n.jsx(S,{size:"m",onClick:()=>{alert("Click on statusSelect in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(o,{size:"s"})}),details:{type:"select",label:"Статус",icon:({rowSize:e,isInDropdown:t})=>n.jsx(o,{size:t&&e==="small"?"xs":"s"}),value:z?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный"}],onChange:e=>L(e==="active")}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label",contentLeft:n.jsx(o,{color:"inherit"}),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:n.jsx(o,{color:"inherit"}),dropdown:{onItemSelect:(e,t)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1"},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 2"}]}},filtering:{state:A,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},complete:{label:"% Complete",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:b,rowKeyGetter:R,showDefault:!1},sorting:{state:B},onCellClicked:(e,t)=>{console.debug("[onCellClicked]",e,t)}},columnConfig:T,rows:r,bottomSummaryRows:P,headerContextValue:F},a?"debug-bounds":"plain")]})}};var w,I,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Pe=["MultipleFeatures"];export{c as MultipleFeatures,Pe as __namedExportsOrder,Ge as default};
