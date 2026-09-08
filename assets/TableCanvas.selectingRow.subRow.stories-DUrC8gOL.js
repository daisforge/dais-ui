import{r as t,d as p}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-Cfhok6MY.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-MNapa6fh.js";import"./vendor-CSAr92if.js";import"./react-is-Clcustum.js";import"./styled-components-ZBTAG_Yl.js";import"./@tanstack/react-virtual-B8iA4ZKy.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DLWQ7ch0.js";import"./IconButton-b3a_3ixI.js";import"./@salutejs/plasma-icons-okGG1xc8.js";import"./@salutejs/sdds-finai-DjVIg8A-.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-CYEse6yn.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jB8XDFU9.js";import"./TextField-Dn7qvwa0.js";import"./sharedUtilsInputs-BtXKEOu9.js";import"./AnalyticalWidget-Cj-xSuZp.js";import"./Collapse-H8U_Ale8.js";import"./Table-D08WXTBk.js";import"./react-data-grid-B6EFrvhw.js";import"./TableTabs-DPL4E_4R.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DjCxXEOT.js";import"./ListOfFilters-D0YsGbjU.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-3SQxBlB1.js";import"./EmptyState-DpOzjSUK.js";import"./MassActions-CrKfuoiW.js";import"./Autocomplete-9E02UoC7.js";import"./TableGlide-DuH8kT3h.js";import"./@glideappsfinal/glide-data-grid-DXWAK0Fv.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DIW4uU5x.js";const oe={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRows",tags:["!autodocs"],parameters:{docs:{page:w}}},C=`
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
