import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-DgnSsvAh.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-gKY-SjsO.js";import"./vendor-DFDWE34s.js";import"./react-is-Clcustum.js";import"./styled-components-sb3aauQH.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-Erdwv4QH.js";import"./IconButton--XvAcLbs.js";import"./@salutejs/plasma-icons-BS3fWL7Q.js";import"./@salutejs/sdds-finai-Dy07Vhqq.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BAHuKjaw.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-EnDZx_2u.js";import"./TextField-De4Vta6R.js";import"./sharedUtilsInputs-CugvbMXb.js";import"./AnalyticalWidget-D2KDsFRz.js";import"./Collapse-CneRTXAJ.js";import"./Table-C0sPjEkj.js";import"./react-data-grid-DpxqpUC3.js";import"./TableTabs-BnEj0R4l.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CfOaM1X2.js";import"./ListOfFilters-BcbqYkDN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-zBovH5sK.js";import"./EmptyState-COceJAG9.js";import"./MassActions-CFHrjo_t.js";import"./Autocomplete-CIgzJCyY.js";import"./TableGlide-BBxLhxJt.js";import"./@glideappsfinal/glide-data-grid-CgYhCgLY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BwPROSCF.js";const ee={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const oe=["SelectingRow"];export{o as SelectingRow,oe as __namedExportsOrder,ee as default};
