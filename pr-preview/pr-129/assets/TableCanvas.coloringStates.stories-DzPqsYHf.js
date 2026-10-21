import{r as u,d as g}from"./react-D2T61mpp.js";import{c as w}from"./tableData-DVJFoYoT.js";import{T as h}from"./TableCanvas-BCcV_-hw.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BVW63fJ-.js";import"./styled-components-CJ1TKU9b.js";import"./react-is-Clcustum.js";import"./vendor-D8SvPeB8.js";import"./@tanstack/react-virtual-CHOn-45g.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Vk8JBRCk.js";import"./@salutejs/plasma-icons-Dk1azQG_.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-D8SpiYoH.js";import"./IconButton-UZDxPSAX.js";import"./Box-B0HI5hbx.js";import"./TextField-CdY5Hnwo.js";import"./sharedUtilsInputs-Crb2Z_Sr.js";import"./AiAgentPopup-CIgPTIhc.js";import"./TextArea-szCP3JPH.js";import"./sharedUtilsResizable-BaTpkv1f.js";import"./Table-pnnyhfPF.js";import"./Collapse-BR2s-FDz.js";import"./react-data-grid-C7ICYiA5.js";import"./TableTabs-DFviA_Xm.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Doh5h3Eu.js";import"./@glideappsfinal/glide-data-grid-Bcn9VpAa.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Dib4KGN5.js";import"./ListOfFilters-1oG7zJM3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DR7kxr7a.js";import"./EmptyState-BzBvH8bw.js";import"./MassActions-cWYtSKhQ.js";import"./Autocomplete-j-UPM072.js";import"./ErrorPage-Dv4FTLkY.js";const ue={title:"Локальные компоненты/TableCanvas/ColoringStates",tags:["!autodocs","hideInSidebar"],args:{hoverRow:!0,highlightActiveType:"row",cellsSelectionMode:"range-cell",checkboxSelecting:!0,editingEnabled:!0,rowMarkers:!0},argTypes:{hoverRow:{name:"hoverEffects.row",control:"boolean"},highlightActiveType:{name:"highlightActiveType",control:"inline-radio",options:["row","disabled"]},cellsSelectionMode:{name:"cellsSelection.mode",control:"inline-radio",options:["range-cell","multi-range-cell","cell","disabled"]},checkboxSelecting:{name:"selecting (чекбоксы)",control:"boolean"},editingEnabled:{name:"editing (редактирование)",control:"boolean"},rowMarkers:{name:"rowMarkers (нумерация)",control:"boolean"}}},l=({row:e,column:t})=>{var o;return((o=e.values.find(i=>i.columnId===t.key))==null?void 0:o.value)??""},y={Critical:"bgCellNegative",High:"bgCellWarning",Medium:"bgCellInfo",Low:"bgCellPositive"},b=(e,t)=>{const o=y[e];return o?{bgCell:t[o]}:void 0},r={name:"Состояния цветов (универсальный)",render:e=>{const[t,o]=u.useState(()=>w(0,40)),i=u.useState(()=>new Set),c=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`строк: ${t.length}`}]}],[t.length]),d=u.useMemo(()=>[{key:"id",name:"ID",width:70,renderSummaryCell:l},{key:"task",name:"Задача (редактируемая, ошибка на id % 7 = 0)",width:320,renderSummaryCell:l,editingCell:{component:"inputString",editable:!0,error:{value:n=>Number(n.id)%7===0}}},{key:"priority",name:"Приоритет (статусный цвет)",width:220,themeOverride:({row:n,theme:p})=>b(n.priority,p)},{key:"complete",name:"% (редактируемая)",width:160,editingCell:{component:"inputNumber",editable:!0}},{key:"issueType",name:"Тип",width:140},{key:"developer",name:"Разработчик",width:220}],[]);return g.jsxDEV(h,{tableConfig:{containerStyle:{height:"560px"},hoverEffects:{row:e.hoverRow},summaryRows:{showDefault:!0,showInControl:!1},highlightActiveType:e.highlightActiveType,cellsSelection:{mode:e.cellsSelectionMode},...e.rowMarkers&&{rowMarkers:{startIndex:1}},...e.checkboxSelecting&&{selecting:{state:i,rowKeyGetter:n=>n.id}},...e.editingEnabled&&{editing:{onRowsChange:n=>o([...n]),rowKeyGetter:n=>n.id,defaultEnabled:!0}}},columnConfig:d,bottomSummaryRows:c,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColoringStates/TableCanvas.coloringStates.stories.tsx",lineNumber:168,columnNumber:7},void 0)}};var a,s,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const re=["ColoringStates"];export{r as ColoringStates,re as __namedExportsOrder,ue as default};
