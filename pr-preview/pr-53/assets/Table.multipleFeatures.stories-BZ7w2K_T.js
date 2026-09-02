import{r as s,d as t}from"./react-D2T61mpp.js";import{c as A}from"./tableData-UCfjiBCh.js";import V from"./DocStoryTemplate-DqVM6KeB.js";import{s as z}from"./storySourceDoc-tVKyHcEN.js";import{S as c}from"./FiltersActions-BxT2eHqF.js";import{f as j}from"./Table-0VJnv_iN.js";import{T as M}from"./TextField-CmtYe8O5.js";import{H as O}from"./styled-components-CrE_0Vxv.js";import{G,s as K,E as l}from"./@salutejs/sdds-finai-T191Q1_H.js";import{qu as W,rR as o,qi as b}from"./@salutejs/plasma-icons-zpxl9Ixy.js";import"./vendor-BxGjgi7L.js";import"./react-is-Clcustum.js";import"./tslib-De9GV7Vy.js";import"./IconButton-t7GNRJ0_.js";import"./utils-Dl3ZmthU.js";import"./constants-DM2G2kGu.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CuC6Kpp8.js";import"./AnalyticalWidget-D9a3c7nn.js";import"./Collapse-B6D0FZE5.js";import"./react-data-grid-CS0ueag1.js";import"./TableTabs-BYiMAJiG.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DGlzroNA.js";import"./ListOfFilters-BZ1I01lK.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTpAbOAA.js";import"./sharedUtilsInputs-6OTzfcqY.js";import"./EmptyState-CtHZcXxH.js";import"./MassActions-CPjClyV2.js";import"./Autocomplete-BkLDte0I.js";const xe={title:"Локальные компоненты/Table/MultipleFeatures",tags:["!autodocs"],parameters:{docs:{page:V}}},H=O.div`
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
`,i={name:"Пример конфигурации с подключением множественных функциональных возможностей",...z({preCode:P,previewSource:"shown"}),render:()=>{const[r,y]=s.useState(!1),k=s.useMemo(()=>[{key:"task",name:"Task",minWidth:200,sortingType:"stringSort",resizable:!0,renderSummaryCell:()=>"Итого",editingCell:{component:"inputString",editedSuccessfully:{value:e=>e.done}},subRow:{isColumnWithArrow:({keyText:e})=>!e.toLowerCase().startsWith("key"),keyOfColumnInSubRow:"task",renderSubRowCell:(e,n)=>t.jsxDEV("span",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:[e.row.task,"lvl=",n]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:85,columnNumber:15},void 0),editingCell:{component:"select",options:{type:"constant",options:[{text:"kek",value:"kek"},{text:"mek",value:"mek"}]}}},keyText:{key:"id",name:"Ключ - Task",renderCell:({row:e})=>e.id,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:({keyText:e})=>!!e.toLowerCase().startsWith("key")}},rowsGrouping:{columnGroupLabel:"Task"}},...r?[{key:"priority",name:"Priority",resizable:!0,sortingType:"stringSort",subRow:{keyOfColumnInSubRow:"issueType",editingCell:{component:"inputString"}},filtering:{component:"select",keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,n)=>e!=="All"?n===e:!0},selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}},editingCell:{component:"select",options:{type:"constant",options:[{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}}}]:[],{key:"issueType",name:"issueType",sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"stateInHeaderContext",optionsKeyInHeaderContext:"issueTypeOptions"},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,n)=>!e.length||e.some(m=>m===n)}},editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"issueTypeOptions"}},subRow:{keyOfColumnInSubRow:"issueType",editingCell:{component:"inputString"}},rowsGrouping:{columnGroupLabel:"issueType"}},{key:"developer",name:"Developer",resizable:!0,sortingType:"stringSort",filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"},editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",resizable:!0,sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"complete",valueInRow:e=>e.complete,filter:(e,n)=>(+n||0)>=(+e||0)},editingCell:{component:"inputNumber",error:{value:e=>e.done}},subRow:{keyOfColumnInSubRow:"complete",editingCell:{component:"inputNumber"}}},{key:"tr",resizable:!0,name:"tr.kkk",sortingType:"stringSort"}],[r]),[C,v]=s.useState(A),[S,w]=s.useState([]),x=s.useState({task:"",priority:"All",issueType:[],developer:"",complete:void 0,globalTask:""}),h=s.useState([]),T=s.useState(()=>new Set),N=s.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug1"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),I=s.useMemo(()=>({issueTypeOptions:[{text:"Bug",value:"Bug"},{text:"Improvement",value:"Improvement"},{text:"Epic",value:"Epic"},{text:"Story",value:"Story"}]}),[]),[d,F]=s.useState(!0),[R,L]=s.useState(!1),[u,E]=s.useState(!1),a=s.useCallback(e=>`${e.id}`,[]),B=s.useMemo(()=>({rowKeyGetter:a,getSubRows:e=>e.subRows}),[a]);return t.jsxDEV("div",{children:[t.jsxDEV(c,{style:{width:"fit-content"},label:u?"Скрыть overlay":"Показать overlay",checked:u,onChange:()=>E(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:316,columnNumber:9},void 0),t.jsxDEV(c,{style:{width:"fit-content"},label:"Включить колонки Title и Priority",checked:r,onChange:()=>y(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:324,columnNumber:9},void 0),t.jsxDEV(c,{style:{width:"fit-content"},label:"Включить блок управления",checked:d,onChange:()=>F(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:330,columnNumber:9},void 0),t.jsxDEV(j,{tableConfig:{css:`
              & .rdg-control-block-container {
                background-color: red;
                min-height: 200px;
              }
            `,loadingOverlay:{active:u,showSubtitleDelay:5e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"},containerStyle:{height:700},fullScreenEnabled:{showInControl:!0,domMetadata:{className:"someClassForFullScreenEnabled",dataAttributes:{"data-test-fullscreen-enabled":"test-fullscreen-enabled"}}},columnsControl:{enable:!0,pinnedDefault:["task","developer"]},rowSize:{showInControl:!0,domMetadata:{className:"someTestClassForRowSize",dataAttributes:{"data-test-row-size":"test-row-size"}}},keyText:{showInControl:!0,controlBlock:{domMetadata:{className:"someTestClassForKeyTextInControlBlock",dataAttributes:{"data-test-key-text-control-block":"test-key-text-control-block"}}},sidebar:{domMetadata:{className:"someTestClassForKeyTextInSidebar",dataAttributes:{"data-test-key-text-sidebar":"test-key-text-sidebar"}}}},summaryRows:{showDefault:!0,showInControl:!0,domMetadata:{className:"someTestClassForSummaryRows",dataAttributes:{"data-test-summary-rows":"test-summary-rows"}}},searching:{enabled:!0,searchClasses:"someClassForSearch",debounceDelay:400,domMetadata:{className:"someTestClassForSearch",dataAttributes:{"data-test-searching":"test-searching"}}},controlBlock:{show:d,rightSideInner:[{text:"Label",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:419,columnNumber:32},void 0),view:"linkAccent",className:"test","data-test-id":"Label right 1"},{text:"Скачать",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:426,columnNumber:32},void 0),className:"test2","data-test-id":"store2"},{text:"Выгрузить",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:432,columnNumber:32},void 0)}],customFeatures:[{value:"customFeatureRefresh",CustomIconRender:()=>t.jsxDEV(H,{children:t.jsxDEV(K,{text:"Кастомная фича обновить",trigger:"hover",mouseEnterDelay:750,usePortal:!0,animated:!0,target:t.jsxDEV(l,{size:"m",onClick:()=>{alert("Click on customFeatureRefresh in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:463,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:447,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:440,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:439,columnNumber:21},void 0),details:{type:"button",label:"Обновить",onClick:()=>alert("Click for customFeatureRefresh in Sidebar"),icon:t.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:475,columnNumber:27},void 0),"data-test-id":"store3"}},{value:"customFeature1",CustomIconRender:()=>t.jsxDEV(l,{size:"m",onClick:()=>{alert("Click on customFeature1 in ControlBlock")},style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:496,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:482,columnNumber:21},void 0),details:{type:"button",label:"Label1",onClick:()=>alert("Click for customFeature1 in Sidebar"),icon:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:505,columnNumber:27},void 0)}},{value:"Label2",label:"Label2",CustomIconRender:()=>t.jsxDEV(l,{size:"m",onClick:()=>{alert("Click on customFeatureLabel2 in ControlBlock")},title:"custom feature 2",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:527,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:512,columnNumber:21},void 0),details:{type:"button",label:"Label2",onClick:()=>alert("Click for customFeatureLabel2 in sidebar"),icon:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:536,columnNumber:27},void 0)}},{value:"Label3",label:"Label3",CustomIconRender:()=>t.jsxDEV(l,{size:"m",onClick:()=>{alert("Click on customFeatureLabel3 in ControlBlock")},title:"custom feature 3",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:558,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:543,columnNumber:21},void 0),details:{type:"button",label:"Label3",onClick:()=>alert("Click for customFeatureLabel3 in Sidebar"),icon:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:567,columnNumber:27},void 0)}},{value:"statusSelect",CustomIconRender:()=>t.jsxDEV(l,{size:"m",onClick:()=>{alert("Click on customFeatureStatus in ControlBlock")},title:"custom feature status",style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:588,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:573,columnNumber:21},void 0),details:{type:"select",label:"Статус",icon:t.jsxDEV(o,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:594,columnNumber:27},void 0),value:R?"active":"inactive",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный Неактивный"}],onChange:e=>L(e==="active"),"data-test-id":"store4"}}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Label long text",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:612,columnNumber:34},void 0),disabled:!0,disabledTooltipProps:{text:"Tooltip for long text",placement:"top",mouseEnterDelay:750},dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"secondary",text:"Label",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:644,columnNumber:34},void 0),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"secondary",text:"Label",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:670,columnNumber:34},void 0),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"},{type:"button",view:"accent",text:"Label",contentLeft:t.jsxDEV(o,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:696,columnNumber:34},void 0),dropdown:{onItemSelect:(e,n)=>alert(e.value),items:[{value:"Some label 1",label:"Some label 1",items:[{value:"some-inner-label1",label:"some-inner-label1"}]},{value:"Some label 2",label:"Some label 2"}]},"data-test-id":"Label left 1"}]}},rowsGrouping:{rowKeyGetter:e=>e.id,groupByState:[S,w],groupedColumnProps:{name:t.jsxDEV(t.Fragment,{children:"моя группировка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:725,columnNumber:23},void 0),resizable:!0},domMetadata:{className:"someTestClassForRowsGroupingButton",dataAttributes:{}}},filtering:{state:x,filtersInfo:{task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:void 0},developer:{label:"Developer",clearedValue:""},globalTask:{label:"Global",clearedValue:""}},sidebarConfig:{items:{globalTask:{label:"some global",customRenderFn:(e,n)=>t.jsxDEV(M,{value:e.globalTask,onChange:m=>{n(D=>({...D,globalTask:m.target.value}))}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:768,columnNumber:23},void 0)}}},chipStyle:(e,n)=>"groupLabel"in e&&(e==null?void 0:e.groupLabel)==="issueType"&&n&&n.label==="Bug"?{background:"red"}:{},renderGroupLabel:e=>e.groupLabel==="issueType"?"issueTypeCustomLabel":e.groupLabel,renderChipLabel:(e,n)=>e&&e.groupLabel==="issueType"?n.id.toString():n.label.toString()},selecting:{state:T,rowKeyGetter:a,selectingRules:{levels:"all"},showDefault:!1,controlBlock:{domMetadata:{className:"customClassForSelectingInControlBlock",dataAttributes:{"data-test-selecting":"test-selecting"}}},sidebar:{domMetadata:{className:"customClassForSelectingInSidebar",dataAttributes:{"data-test-selecting-sidebar":"test-selecting-sidebar"}}}},sorting:{state:h},editing:{onRowsChange:v,rowKeyGetter:a,domMetadata:{className:"editingCustomClass",dataAttributes:{"data-test-editing":"test-editing"}}},subRows:B,resizableColumn:!0,sidebarConfig:{defaultTabs:[{id:"tableSettings",domMetadata:{className:"someClassForTableSettingsInSidebar",dataAttributes:{"data-test-table-settings":"test-table-setting"}},customGeneralSettingsSlot:t.jsxDEV("div",{children:"Some custom render for tableSettings"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:859,columnNumber:21},void 0),titleRightSlot:t.jsxDEV(G,{contentLeft:t.jsxDEV(W,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:863,columnNumber:36},void 0),view:"secondary",onClick:()=>alert("Вид по умолчанию"),size:"xs",children:"Вид по умолчанию"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:862,columnNumber:21},void 0)},{id:"filtering",domMetadata:{className:"someClassForTableFilteringInSidebar",dataAttributes:{"data-test-table-filtering":"test-table-filtering"}}},{id:"columns",domMetadata:{className:"someClassForTableColumnsInSidebar",dataAttributes:{"data-test-table-columns":"test-table-columns"}}}]}},columnConfig:k,rows:C,topSummaryRows:[0],bottomSummaryRows:[0],headerContextValue:N,rowContextValue:I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:336,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.multipleFeatures.stories.tsx",lineNumber:315,columnNumber:7},void 0)}};var p,g,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const he=["MultipleFeatures"];export{i as MultipleFeatures,he as __namedExportsOrder,xe as default};
