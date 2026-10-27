import{r as o,j as t}from"./react-CAOzMBF_.js";import{c as D}from"./tableData-DVJFoYoT.js";import j from"./DocStoryTemplate-Cf946dgV.js";import{s as M}from"./storySourceDoc-tVKyHcEN.js";import{S as m}from"./FiltersActions-BWfcXHB3.js";import{f as O}from"./Table-BQHrw1K6.js";import{T as N}from"./TextField-DpKf-85P.js";import{H as V}from"./styled-components-DCFsnh-i.js";import{J as G,p as K,E as a}from"./@salutejs/sdds-finai-CKhMjg07.js";import{qy as W,rV as l,qm as b}from"./@salutejs/plasma-icons-Do5ggeDI.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./IconButton-ZoRfzXaJ.js";import"./utils-EIxGvR70.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DvvYTz20.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./Collapse-CblE70vy.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-C6Rr5Gy-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DbDA-PPi.js";import"./@glideappsfinal/glide-data-grid-BB_xclG6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DGAhIiuN.js";import"./ListOfFilters-CMjwWdxj.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BqjpJJQW.js";import"./EmptyState-BCYMGuYF.js";import"./MassActions-Csxbu-7r.js";import"./Autocomplete-DE_6PTST.js";const Fe={title:"Локальные компоненты/Table/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:j}}},H=V.div`
  & .popover-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,P=`
import { ColumnConfig, RenderSubRowCell, Switch, Table, SortColumn, TableConfig } from '@daisforge/ui';
import { TextField } from '@daisforge/ui';
import { Tooltip } from '@daisforge/ui';
import { IconRefresh, IconResetOutline, IconSber } from '@daisforge/ui';
import React, { useCallback, useMemo, useState } from 'react';
import { SortColumn } from 'react-data-grid';
`,r={name:"Пример конфигурации с подключением множественных функциональных возможностей",...M({preCode:P,previewSource:"shown"}),render:()=>{const[i,C]=o.useState(!1),S=o.useMemo(()=>[{key:"task",name:"Task",minWidth:200,sortingType:"stringSort",resizable:!0,renderSummaryCell:()=>"Итого",editingCell:{component:"inputString",editedSuccessfully:{value:e=>e.done}},subRow:{isColumnWithArrow:({keyText:e})=>!e.toLowerCase().startsWith("key"),keyOfColumnInSubRow:"task",renderSubRowCell:(e,n)=>t.jsxs("span",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:[e.row.task,"lvl=",n]}),editingCell:{component:"select",options:{type:"constant",options:[{text:"kek",value:"kek"},{text:"mek",value:"mek"}]}}},keyText:{key:"id",name:"Ключ - Task",renderCell:({row:e})=>e.id,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:({keyText:e})=>!!e.toLowerCase().startsWith("key")}},rowsGrouping:{columnGroupLabel:"Task"}},...i?[{key:"priority",name:"Priority",resizable:!0,sortingType:"stringSort",subRow:{keyOfColumnInSubRow:"issueType",editingCell:{component:"inputString"}},filtering:{component:"select",keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,n)=>e!=="All"?n===e:!0},selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}},editingCell:{component:"select",options:{type:"constant",options:[{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}}}]:[],{key:"issueType",name:"issueType",sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,n)=>!e.length||e.some(c=>c===n)}},editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"issueTypeOptions"}},subRow:{keyOfColumnInSubRow:"issueType",editingCell:{component:"inputString"}},rowsGrouping:{columnGroupLabel:"issueType"}},{key:"developer",name:"Developer",resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"},editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,n)=>(+n||0)>=(+e||0)},editingCell:{component:"inputNumber",error:{value:e=>e.done}},subRow:{keyOfColumnInSubRow:"complete",editingCell:{component:"inputNumber"}}},{key:"tr",resizable:!0,name:"tr.kkk",sortingType:"stringSort"}],[i]),[f,v]=o.useState(D),[w,k]=o.useState([]),x=o.useState({task:"",priority:"All",issueType:[],developer:"",complete:void 0,globalTask:""}),h=o.useState([]),I=o.useState(()=>new Set),T=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug1"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),R=o.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),[d,L]=o.useState(!0),[F,B]=o.useState(!1),[u,A]=o.useState(!1),s=o.useCallback(e=>`${e.id}`,[]),E=o.useMemo(()=>({rowKeyGetter:s,getSubRows:e=>e.subRows}),[s]);return t.jsxs("div",{children:[t.jsx(m,{style:{width:"fit-content"},label:u?"Скрыть overlay":"Показать overlay",checked:u,onChange:()=>A(e=>!e)}),t.jsx(m,{style:{width:"fit-content"},label:"Включить колонки Title и Priority",checked:i,onChange:()=>C(e=>!e)}),t.jsx(m,{style:{width:"fit-content"},label:"Включить блок управления",checked:d,onChange:()=>L(e=>!e)}),t.jsx(O,{tableConfig:{css:`
              & .rdg-control-block-container {
                background-color: red;
                min-height: 200px;
              }
            `,loadingOverlay:{active:u,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},containerStyle:{height:700},fullScreenEnabled:{showInControl:!0,domMetadata:{className:"someClassForFullScreenEnabled",dataAttributes:{"data-test-fullscreen-enabled":"test-fullscreen-enabled"}}},columnsControl:{enable:!0,pinnedDefault:["task","developer"]},rowSize:{showInControl:!0,domMetadata:{className:"someTestClassForRowSize",dataAttributes:{"data-test-row-size":"test-row-size"}}},keyText:{showInControl:!0,controlBlock:{domMetadata:{className:"someTestClassForKeyTextInControlBlock",dataAttributes:{"data-test-key-text-control-block":"test-key-text-control-block"}}},sidebar:{domMetadata:{className:"someTestClassForKeyTextInSidebar",dataAttributes:{"data-test-key-text-sidebar":"test-key-text-sidebar"}}}},summaryRows:{showDefault:!0,showInControl:!0,domMetadata:{className:"someTestClassForSummaryRows",dataAttributes:{"data-test-summary-rows":"test-summary-rows"}}},searching:{enabled:!0,searchClasses:"someClassForSearch",debounceDelay:400,domMetadata:{className:"someTestClassForSearch",dataAttributes:{"data-test-searching":"test-searching"}}},controlBlock:{show:d,rightSideInner:[{text:"Label",contentLeft:t.jsx(l,{color:"inherit"}),view:"linkAccent",className:"test","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:t.jsx(l,{color:"inherit"}),className:"test2","data-test-id":"store2"},{text:"Выгрузить",contentLeft:t.jsx(l,{color:"inherit"})}],customFeatures:[{value:"customFeatureRefresh",CustomIconRender:()=>t.jsx(H,{children:t.jsx(K,{text:"Кастомная фича обновить",trigger:"hover",mouseEnterDelay:750,usePortal:!0,animated:!0,target:t.jsx(a,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(b,{size:"s"})})})}),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:t.jsx(b,{size:"s"}),"data-test-id":"store3"}},{value:"customFeature1",CustomIconRender:()=>t.jsx(a,{size:"m",onClick:()=>{alert("Click on customFeature1 in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(l,{size:"s"})}),details:{type:"button",label:"Label1",onClick:()=>alert("Click for customFeature1 in Sidebar"),icon:t.jsx(l,{size:"s"})}},{value:"Label2",label:"Label2",CustomIconRender:()=>t.jsx(a,{size:"m",onClick:()=>{alert("Click on customFeatureLabel2 in ControlBlock")},title:"custom feature 2",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(l,{size:"s"})}),details:{type:"button",label:"Label2",onClick:()=>alert("Click for customFeatureLabel2 in sidebar"),icon:t.jsx(l,{size:"s"})}},{value:"Label3",label:"Label3",CustomIconRender:()=>t.jsx(a,{size:"m",onClick:()=>{alert("Click on customFeatureLabel3 in ControlBlock")},title:"custom feature 3",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(l,{size:"s"})}),details:{type:"button",label:"Label3",onClick:()=>alert("Click for customFeatureLabel3 in Sidebar"),icon:t.jsx(l,{size:"s"})}},{value:"statusSelect",CustomIconRender:()=>t.jsx(a,{size:"m",onClick:()=>{alert("Click on customFeatureStatus in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(l,{size:"s"})}),details:{type:"select",label:"Статус",icon:t.jsx(l,{size:"s"}),value:F?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный Неактивный"}],onChange:e=>B(e==="active"),"data-test-id":"store4"}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label long text",contentLeft:t.jsx(l,{color:"inherit"}),disabled:!0,disabledTooltipProps:{text:"Tooltip for long text",placement:"top",mouseEnterDelay:750},dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"secondary",text:"Label",contentLeft:t.jsx(l,{color:"inherit"}),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"secondary",text:"Label",contentLeft:t.jsx(l,{color:"inherit"}),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:t.jsx(l,{color:"inherit"}),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"}]}},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[w,k],groupedColumnProps:{name:t.jsx(t.Fragment,{children:"моя группировка"}),resizable:!0},domMetadata:{className:"someTestClassForRowsGroupingButton",dataAttributes:{}}},filtering:{state:x,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:void 0},developer:{label:"Developer",clearedValue:""},globalTask:{label:"Global",clearedValue:""}},sidebarConfig:{items:{globalTask:{label:"some global",customRenderFn:(e,n)=>t.jsx(N,{value:e.globalTask,onChange:c=>{n(z=>({...z,globalTask:c.target.value}))}})}}},chipStyle:(e,n)=>"groupLabel"in e&&(e==null?void 0:e.groupLabel)==="issueType"&&n&&n.label==="Bug"?{background:"red"}:{},renderGroupLabel:e=>e.groupLabel==="issueType"?"issueTypeCustomLabel":e.groupLabel,renderChipLabel:(e,n)=>e&&e.groupLabel==="issueType"?n.id.toString():n.label.toString()},selecting:{state:I,rowKeyGetter:s,selectingRules:{levels:"all"},showDefault:!1,controlBlock:{domMetadata:{className:"customClassForSelectingInControlBlock",dataAttributes:{"data-test-selecting":"test-selecting"}}},sidebar:{domMetadata:{className:"customClassForSelectingInSidebar",dataAttributes:{"data-test-selecting-sidebar":"test-selecting-sidebar"}}}},sorting:{state:h},editing:{onRowsChange:v,rowKeyGetter:s,domMetadata:{className:"editingCustomClass",dataAttributes:{"data-test-editing":"test-editing"}}},subRows:E,resizableColumn:!0,sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{className:"someClassForTableSettingsInSidebar",dataAttributes:{"data-test-table-settings":"test-table-setting"}},customGeneralSettingsSlot:t.jsx("div",{children:"Some custom render for tableSettings"}),titleRightSlot:t.jsx(G,{contentLeft:t.jsx(W,{size:"xs"}),view:"secondary",onClick:()=>alert("Вид по умолчанию"),size:"xs",children:"Вид по умолчанию"})},{id:"filtering",domMetadata:{className:"someClassForTableFilteringInSidebar",dataAttributes:{"data-test-table-filtering":"test-table-filtering"}}},{id:"columns",domMetadata:{className:"someClassForTableColumnsInSidebar",dataAttributes:{"data-test-table-columns":"test-table-columns"}}}]}},columnConfig:S,rows:f,topSummaryRows:[0],bottomSummaryRows:[0],headerContextValue:T,rowContextValue:R})]})}};var p,g,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Пример конфигурации с подключением множественных функциональных возможностей',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [bool, setBool] = useState(false);
    const columnsCC = useMemo((): readonly ColumnConfig<Row>[] => [{
      key: 'task',
      name: 'Task',
      minWidth: 200,
      sortingType: 'stringSort',
      resizable: true,
      renderSummaryCell: () => 'Итого',
      editingCell: {
        component: 'inputString',
        editedSuccessfully: {
          value: row => row.done
        }
      },
      subRow: {
        isColumnWithArrow: ({
          keyText
        }) => {
          if (keyText.toLowerCase().startsWith('key')) {
            return false;
          }
          return true;
        },
        keyOfColumnInSubRow: 'task',
        renderSubRowCell: ((renderCellProps, lvl) => <span style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }}>
                {renderCellProps.row.task}
                lvl={lvl}
              </span>) as RenderSubRowCell<Row>,
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: [{
              text: 'kek',
              value: 'kek'
            }, {
              text: 'mek',
              value: 'mek'
            }]
          }
        }
      },
      keyText: {
        key: 'id',
        name: 'Ключ - Task',
        renderCell: ({
          row
        }) => row.id,
        subRow: {
          keyOfColumnInSubRow: 'id',
          isColumnWithArrow: ({
            keyText
          }) => {
            if (keyText.toLowerCase().startsWith('key')) {
              return true;
            }
            return false;
          }
        }
      },
      rowsGrouping: {
        columnGroupLabel: 'Task'
      }
    }, ...(bool ? [{
      key: 'priority',
      name: 'Priority',
      resizable: true,
      sortingType: 'stringSort',
      subRow: {
        keyOfColumnInSubRow: 'issueType',
        editingCell: {
          component: 'inputString'
        }
      },
      filtering: {
        component: 'select',
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        },
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
        }
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: [{
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
        }
      }
    }] as readonly ColumnConfig<Row>[] : []), {
      key: 'issueType',
      name: 'issueType',
      sortingType: 'stringSort',
      resizable: true,
      filtering: {
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
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'issueTypeOptions'
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'issueType',
        editingCell: {
          component: 'inputString'
        }
      },
      rowsGrouping: {
        columnGroupLabel: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer',
      resizable: true,
      sortingType: 'stringSort',
      filtering: {
        component: 'input',
        keyInFilterState: 'developer',
        valueInRow: r => r.developer,
        filter: 'startWith'
      },
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      resizable: true,
      sortingType: 'numberSort',
      filtering: {
        component: 'input',
        keyInFilterState: 'complete',
        valueInRow: r => r.complete,
        filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
      },
      editingCell: {
        component: 'inputNumber',
        error: {
          value: row => row.done
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'complete',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'tr',
      resizable: true,
      name: 'tr.kkk',
      sortingType: 'stringSort'
      // editingCell: { component: 'inputString' },
    }], [bool]);
    const [rows, setRows] = useState(createRows);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const filteringStateAndSetter = useState({
      task: '',
      priority: 'All',
      issueType: [],
      developer: '',
      complete: undefined,
      globalTask: ''
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string> => new Set());
    const headerContextValue = useMemo(() => ({
      issueTypeOptions: [{
        text: 'Bug',
        value: 'Bug1'
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
    const rowContextValue = useMemo(() => ({
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
    const [controlBlock, setControlBlock] = useState(true);
    const [isCustomFeatureActive, setIsCustomFeatureActive] = useState(false);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);
    const rowKeyGetter = useCallback((r: Row) => \`\${r.id}\`, []);
    const tableConfigSubRows = useMemo(() => ({
      rowKeyGetter,
      getSubRows: (r: Row) => r.subRows
    }), [rowKeyGetter]);
    return <div>
        <Switch style={{
        width: 'fit-content'
      }} label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'} checked={isVisibleLoadingOverlay} onChange={() => setIsVisibleLoadingOverlay(prev => !prev)} />
        <Switch style={{
        width: 'fit-content'
      }} label="Включить колонки Title и Priority" checked={bool} onChange={() => setBool(prev => !prev)} />
        <Switch style={{
        width: 'fit-content'
      }} label="Включить блок управления" checked={controlBlock} onChange={() => setControlBlock(prev => !prev)} />
        <Table tableConfig={{
        css: \`
              & .rdg-control-block-container {
                background-color: red;
                min-height: 200px;
              }
            \`,
        loadingOverlay: {
          active: isVisibleLoadingOverlay,
          showSubtitleDelay: 5000,
          subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд'
        },
        containerStyle: {
          height: 700
        },
        fullScreenEnabled: {
          showInControl: true,
          domMetadata: {
            className: 'someClassForFullScreenEnabled',
            dataAttributes: {
              'data-test-fullscreen-enabled': 'test-fullscreen-enabled'
            }
          }
        },
        columnsControl: {
          enable: true,
          pinnedDefault: ['task', 'developer']
        },
        rowSize: {
          showInControl: true,
          domMetadata: {
            className: 'someTestClassForRowSize',
            dataAttributes: {
              'data-test-row-size': 'test-row-size'
            }
          }
        },
        keyText: {
          showInControl: true,
          controlBlock: {
            domMetadata: {
              className: 'someTestClassForKeyTextInControlBlock',
              dataAttributes: {
                'data-test-key-text-control-block': 'test-key-text-control-block'
              }
            }
          },
          sidebar: {
            domMetadata: {
              className: 'someTestClassForKeyTextInSidebar',
              dataAttributes: {
                'data-test-key-text-sidebar': 'test-key-text-sidebar'
              }
            }
          }
        },
        summaryRows: {
          showDefault: true,
          showInControl: true,
          domMetadata: {
            className: 'someTestClassForSummaryRows',
            dataAttributes: {
              'data-test-summary-rows': 'test-summary-rows'
            }
          }
        },
        searching: {
          enabled: true,
          searchClasses: 'someClassForSearch',
          debounceDelay: 400,
          domMetadata: {
            className: 'someTestClassForSearch',
            dataAttributes: {
              'data-test-searching': 'test-searching'
            }
          }
        },
        controlBlock: {
          show: controlBlock,
          rightSideInner: [{
            text: 'Label',
            contentLeft: <IconSber color="inherit" />,
            view: 'linkAccent',
            className: 'test',
            'data-test-id': 'Label right 1'
          }, {
            text: 'Скачать',
            contentLeft: <IconSber color="inherit" />,
            className: 'test2',
            'data-test-id': 'store2'
          }, {
            text: 'Выгрузить',
            contentLeft: <IconSber color="inherit" />
          }],
          customFeatures: [{
            value: 'customFeatureRefresh',
            CustomIconRender: () => <StyledTooltipWrapper>
                      <Tooltip text="Кастомная фича обновить" trigger="hover" mouseEnterDelay={750} usePortal animated target={<EmbedIconButton size="m" onClick={() => {
                // eslint-disable-next-line no-alert
                alert('Click on customFeatureRefresh in ControlBlock');
              }} style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                            <IconRefresh size="s" />
                          </EmbedIconButton>} />
                    </StyledTooltipWrapper>,
            details: {
              type: 'button',
              label: 'Обновить',
              onClick: () =>
              // eslint-disable-next-line no-alert
              alert('Click for customFeatureRefresh in Sidebar'),
              icon: <IconRefresh size="s" />,
              'data-test-id': 'store3'
            }
          }, {
            value: 'customFeature1',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Click on customFeature1 in ControlBlock');
            }} style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconSber size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'button',
              label: 'Label1',
              onClick: () =>
              // eslint-disable-next-line no-alert
              alert('Click for customFeature1 in Sidebar'),
              icon: <IconSber size="s" />
            }
          }, {
            value: 'Label2',
            label: 'Label2',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Click on customFeatureLabel2 in ControlBlock');
            }} title="custom feature 2" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconSber size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'button',
              label: 'Label2',
              onClick: () =>
              // eslint-disable-next-line no-alert
              alert('Click for customFeatureLabel2 in sidebar'),
              icon: <IconSber size="s" />
            }
          }, {
            value: 'Label3',
            label: 'Label3',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Click on customFeatureLabel3 in ControlBlock');
            }} title="custom feature 3" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconSber size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'button',
              label: 'Label3',
              onClick: () =>
              // eslint-disable-next-line no-alert
              alert('Click for customFeatureLabel3 in Sidebar'),
              icon: <IconSber size="s" />
            }
          }, {
            value: 'statusSelect',
            CustomIconRender: () => <EmbedIconButton size="m" onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Click on customFeatureStatus in ControlBlock');
            }} title="custom feature status" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                      <IconSber size="s" />
                    </EmbedIconButton>,
            details: {
              type: 'select',
              label: 'Статус',
              icon: <IconSber size="s" />,
              value: isCustomFeatureActive ? 'active' : 'inactive',
              options: [{
                value: 'active',
                label: 'Активный'
              }, {
                value: 'inactive',
                label: 'Неактивный Неактивный'
              }],
              onChange: value => setIsCustomFeatureActive(value === 'active'),
              'data-test-id': 'store4'
            }
          }],
          massActionPanel: {
            buttons: [{
              type: 'button',
              view: 'secondary',
              text: 'Label long text',
              contentLeft: <IconSber color="inherit" />,
              disabled: true,
              disabledTooltipProps: {
                text: 'Tooltip for long text',
                placement: 'top',
                mouseEnterDelay: 750
              },
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
              view: 'secondary',
              text: 'Label',
              contentLeft: <IconSber color="inherit" />,
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
              view: 'secondary',
              text: 'Label',
              contentLeft: <IconSber color="inherit" />,
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
              contentLeft: <IconSber color="inherit" />,
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
            }]
          }
        },
        rowsGrouping: {
          rowKeyGetter: r => r.id,
          groupByState: [groupByArr, setGroupByArr],
          groupedColumnProps: {
            name: <>моя группировка</>,
            resizable: true
          },
          domMetadata: {
            className: 'someTestClassForRowsGroupingButton',
            dataAttributes: {
              // 'data-test-rows-grouping': 'test-rows-grouping',
            }
          }
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            task: {
              label: 'task',
              clearedValue: ''
            },
            priority: {
              label: 'Some Label',
              clearedValue: 'All'
            },
            issueType: {
              label: 'issueType',
              clearedValue: []
            },
            complete: {
              label: 'complete',
              clearedValue: undefined
            },
            developer: {
              label: 'Developer',
              clearedValue: ''
            },
            globalTask: {
              label: 'Global',
              clearedValue: ''
            }
          },
          sidebarConfig: {
            items: {
              globalTask: {
                label: 'some global',
                customRenderFn: (filters, setFilters) => <TextField value={filters['globalTask']} onChange={e => {
                  setFilters(prev => ({
                    ...prev,
                    globalTask: e.target.value
                  }));
                }} />
              }
            }
          },
          chipStyle: (group, item) => {
            if ('groupLabel' in group && group?.groupLabel === 'issueType' && item && item.label === 'Bug') {
              return {
                background: 'red'
              };
            }
            return {};
          },
          renderGroupLabel: group => {
            if (group.groupLabel === 'issueType') {
              return 'issueTypeCustomLabel';
            }
            return group.groupLabel;
          },
          renderChipLabel: (group, item) => {
            if (group) {
              if (group.groupLabel === 'issueType') {
                return item.id.toString();
              }
            }
            return item.label.toString();
          }
        },
        selecting: {
          state: selectingRowStateAndSetter,
          rowKeyGetter,
          selectingRules: {
            levels: 'all'
          },
          showDefault: false,
          controlBlock: {
            domMetadata: {
              className: 'customClassForSelectingInControlBlock',
              dataAttributes: {
                'data-test-selecting': 'test-selecting'
              }
            }
          },
          sidebar: {
            domMetadata: {
              className: 'customClassForSelectingInSidebar',
              dataAttributes: {
                'data-test-selecting-sidebar': 'test-selecting-sidebar'
              }
            }
          }
        },
        sorting: {
          state: sortingStateAndSetter
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter,
          domMetadata: {
            className: 'editingCustomClass',
            dataAttributes: {
              'data-test-editing': 'test-editing'
            }
          }
        },
        subRows: tableConfigSubRows,
        resizableColumn: true,
        sidebarConfig: {
          defaultTabs: [{
            id: 'tableSettings',
            domMetadata: {
              className: 'someClassForTableSettingsInSidebar',
              dataAttributes: {
                'data-test-table-settings': 'test-table-setting'
              }
            },
            customGeneralSettingsSlot: <div>Some custom render for tableSettings</div>,
            titleRightSlot: <LinkButton contentLeft={<IconResetOutline size="xs" />} view="secondary" onClick={() => alert('Вид по умолчанию')} size="xs">
                      Вид по умолчанию
                    </LinkButton>
          }, {
            id: 'filtering',
            domMetadata: {
              className: 'someClassForTableFilteringInSidebar',
              dataAttributes: {
                'data-test-table-filtering': 'test-table-filtering'
              }
            }
          }, {
            id: 'columns',
            domMetadata: {
              className: 'someClassForTableColumnsInSidebar',
              dataAttributes: {
                'data-test-table-columns': 'test-table-columns'
              }
            }
          }]
        }
      }} columnConfig={columnsCC} rows={rows} topSummaryRows={[0]} bottomSummaryRows={[0]} headerContextValue={headerContextValue} rowContextValue={rowContextValue} />
      </div>;
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Be=["MultipleFeatures"];export{r as MultipleFeatures,Be as __namedExportsOrder,Fe as default};
