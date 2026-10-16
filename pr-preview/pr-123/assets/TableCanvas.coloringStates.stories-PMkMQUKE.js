import{r as u,d as g}from"./react-D2T61mpp.js";import{c as w}from"./tableData-DVJFoYoT.js";import{T as h}from"./TableCanvas-BOgVEhnO.js";import"./FiltersActions-CjrDmxSG.js";import"./IconButton-Dq7gJENj.js";import"./@salutejs/plasma-icons-D7D3QVQt.js";import"./styled-components-DDYI5_us.js";import"./react-is-Clcustum.js";import"./vendor-B-F5BwiT.js";import"./@tanstack/react-virtual-DxyRpwGh.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-finai-Dz54xmeF.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-qATeXBvn.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BojFrSdk.js";import"./TextField-DsdfbVm4.js";import"./sharedUtilsInputs-fAnuP3eT.js";import"./AiAgentPopup-DcxLtyCU.js";import"./TextArea-Dy8zIiNX.js";import"./sharedUtilsResizable-Drv80g_5.js";import"./Table-B9jLVYK9.js";import"./Collapse-CZ6vypm_.js";import"./react-data-grid-Ls6B6PvU.js";import"./TableTabs-B3UmUk-1.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BtsU5Rvy.js";import"./@glideappsfinal/glide-data-grid-B3gjTRnf.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-GtpT6NhR.js";import"./ListOfFilters-isImdyL1.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CLBLjy-0.js";import"./EmptyState-BCU1Cxr2.js";import"./MassActions-s0PrGFgF.js";import"./Autocomplete-BrtNEdWP.js";import"./ErrorPage-B0nGL0qR.js";const oe={title:"Локальные компоненты/TableCanvas/ColoringStates",tags:["!autodocs","hideInSidebar"],args:{hoverRow:!0,highlightActiveType:"row",cellsSelectionMode:"range-cell",checkboxSelecting:!0,editingEnabled:!0,rowMarkers:!0},argTypes:{hoverRow:{name:"hoverEffects.row",control:"boolean"},highlightActiveType:{name:"highlightActiveType",control:"inline-radio",options:["row","disabled"]},cellsSelectionMode:{name:"cellsSelection.mode",control:"inline-radio",options:["range-cell","multi-range-cell","cell","disabled"]},checkboxSelecting:{name:"selecting (чекбоксы)",control:"boolean"},editingEnabled:{name:"editing (редактирование)",control:"boolean"},rowMarkers:{name:"rowMarkers (нумерация)",control:"boolean"}}},l=({row:e,column:t})=>{var o;return((o=e.values.find(i=>i.columnId===t.key))==null?void 0:o.value)??""},y={Critical:"bgCellNegative",High:"bgCellWarning",Medium:"bgCellInfo",Low:"bgCellPositive"},b=(e,t)=>{const o=y[e];return o?{bgCell:t[o]}:void 0},r={name:"Состояния цветов (универсальный)",render:e=>{const[t,o]=u.useState(()=>w(0,40)),i=u.useState(()=>new Set),c=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`строк: ${t.length}`}]}],[t.length]),d=u.useMemo(()=>[{key:"id",name:"ID",width:70,renderSummaryCell:l},{key:"task",name:"Задача (редактируемая, ошибка на id % 7 = 0)",width:320,renderSummaryCell:l,editingCell:{component:"inputString",editable:!0,error:{value:n=>Number(n.id)%7===0}}},{key:"priority",name:"Приоритет (статусный цвет)",width:220,themeOverride:({row:n,theme:p})=>b(n.priority,p)},{key:"complete",name:"% (редактируемая)",width:160,editingCell:{component:"inputNumber",editable:!0}},{key:"issueType",name:"Тип",width:140},{key:"developer",name:"Разработчик",width:220}],[]);return g.jsxDEV(h,{tableConfig:{containerStyle:{height:"560px"},hoverEffects:{row:e.hoverRow},summaryRows:{showDefault:!0,showInControl:!1},highlightActiveType:e.highlightActiveType,cellsSelection:{mode:e.cellsSelectionMode},...e.rowMarkers&&{rowMarkers:{startIndex:1}},...e.checkboxSelecting&&{selecting:{state:i,rowKeyGetter:n=>n.id}},...e.editingEnabled&&{editing:{onRowsChange:n=>o([...n]),rowKeyGetter:n=>n.id,defaultEnabled:!0}}},columnConfig:d,bottomSummaryRows:c,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColoringStates/TableCanvas.coloringStates.stories.tsx",lineNumber:168,columnNumber:7},void 0)}};var a,s,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Состояния цветов (универсальный)',
  render: args => {
    const [rows, setRows] = useState<Row[]>(() => createRows(0, 40));
    const selectingState = useState<ReadonlySet<string | number>>(() => new Set());

    // Итоговая строка: красится bgHeader, hover/подсветку не получает.
    const bottomSummaryRows = useMemo((): SummaryRow[] => [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`строк: \${rows.length}\`
      }]
    }], [rows.length]);
    const columnConfig = useMemo((): ColumnConfig<Row, SummaryRow>[] => [{
      key: 'id',
      name: 'ID',
      width: 70,
      renderSummaryCell
    }, {
      key: 'task',
      name: 'Задача (редактируемая, ошибка на id % 7 = 0)',
      width: 320,
      renderSummaryCell,
      editingCell: {
        component: 'inputString',
        editable: true,
        error: {
          value: row => Number(row.id) % 7 === 0
        }
      }
    }, {
      key: 'priority',
      name: 'Приоритет (статусный цвет)',
      width: 220,
      themeOverride: ({
        row,
        theme
      }) => priorityBgCell(row.priority, theme)
    }, {
      key: 'complete',
      name: '% (редактируемая)',
      width: 160,
      editingCell: {
        component: 'inputNumber',
        editable: true
      }
    }, {
      key: 'issueType',
      name: 'Тип',
      width: 140
    }, {
      key: 'developer',
      name: 'Разработчик',
      width: 220
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '560px'
      },
      hoverEffects: {
        row: args.hoverRow
      },
      summaryRows: {
        showDefault: true,
        showInControl: false
      },
      highlightActiveType: args.highlightActiveType,
      cellsSelection: {
        mode: args.cellsSelectionMode
      },
      ...(args.rowMarkers && {
        rowMarkers: {
          startIndex: 1
        }
      }),
      ...(args.checkboxSelecting && {
        selecting: {
          state: selectingState,
          rowKeyGetter: (r: Row) => r.id
        }
      }),
      ...(args.editingEnabled && {
        editing: {
          onRowsChange: (newRows: Row[]) => setRows([...newRows]),
          rowKeyGetter: (r: Row) => r.id,
          defaultEnabled: true
        }
      })
    }} columnConfig={columnConfig} bottomSummaryRows={bottomSummaryRows} rows={rows} />;
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ue=["ColoringStates"];export{r as ColoringStates,ue as __namedExportsOrder,oe as default};
