import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-BUFbTFdr.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-BTwe4lCZ.js";import"./vendor-D8axKApy.js";import"./react-is-Clcustum.js";import"./styled-components-CDkh0cjP.js";import"./@tanstack/react-virtual-BDT2t9w4.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DTW5R9wI.js";import"./IconButton-BX8dZI69.js";import"./@salutejs/plasma-icons-GRwPCCo0.js";import"./@salutejs/sdds-finai-Bv-Eaybg.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BeI9VzST.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DSqHbASV.js";import"./TextField-Chbwohps.js";import"./sharedUtilsInputs-DRhaRPvX.js";import"./AnalyticalWidget-D29v7G0l.js";import"./Collapse-hp3Aui0A.js";import"./Table-litFdua_.js";import"./react-data-grid-BSvFyJ0C.js";import"./TableTabs-d-4NtJbS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-D1S_ANAk.js";import"./ListOfFilters-wFVCzrTK.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DxFJooeu.js";import"./EmptyState-sk2eh5Cu.js";import"./MassActions-D5TDIhpF.js";import"./Autocomplete-BrnEEZFv.js";import"./TableGlide-Xw0Girvf.js";import"./@glideappsfinal/glide-data-grid-HwFEUlX6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Cfbd0EIw.js";const oe={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,o={...b({preCode:C,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),a=t.useState(()=>new Set),m=e=>e.id!==2,l=e=>e.id===1;return p.jsxDEV(d,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:a,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:"all"},rowCheckboxDisabled:l,rowShowCheckbox:m}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.subRow.stories.tsx",lineNumber:67,columnNumber:7},void 0)}};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: 'all'
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const te=["SelectingRow"];export{o as SelectingRow,te as __namedExportsOrder,oe as default};
