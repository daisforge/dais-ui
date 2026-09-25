import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-CW0G7jtC.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-DsOcMTPd.js";import"./vendor-DaS3N6lV.js";import"./react-is-Clcustum.js";import"./styled-components-By-Qua6E.js";import"./@tanstack/react-virtual-bE6tDT6W.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BPlwyOA9.js";import"./IconButton-DN_vLAqh.js";import"./@salutejs/plasma-icons-DYi7Td5X.js";import"./@salutejs/sdds-finai-CE284srQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-LFsJSXST.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CPQ5Zm8W.js";import"./TextField-C669WM3p.js";import"./sharedUtilsInputs-B_93GBuf.js";import"./AnalyticalWidget-Dwwt6g9d.js";import"./Collapse-DJnuAkJg.js";import"./Table-CqpCFdmK.js";import"./react-data-grid-Ci-iu5WB.js";import"./TableTabs-BloZZaWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ck4cf0_p.js";import"./ListOfFilters-NZpGeeo8.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CMG8MZiW.js";import"./EmptyState-BJxE2lSo.js";import"./MassActions-DcWWP5Ns.js";import"./Autocomplete-A6BK-6Vg.js";import"./TableGlide-BkTCU4Bq.js";import"./@glideappsfinal/glide-data-grid-0NVFZW-P.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BMcpu60A.js";const oe={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
