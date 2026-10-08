import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-fXm3C628.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-fyPLPpHP.js";import"./vendor-DXdfnwad.js";import"./react-is-Clcustum.js";import"./styled-components-C8QokrFs.js";import"./@tanstack/react-virtual-cZI7JMKe.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-jXEqRCBG.js";import"./IconButton-Bl2UBdAa.js";import"./@salutejs/plasma-icons-EjQFeqZJ.js";import"./@salutejs/sdds-finai-DV8XcQV0.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-DPjVldhU.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CA0XSL2K.js";import"./TextField-Byn-1p2P.js";import"./sharedUtilsInputs-Tg1DZyOR.js";import"./AiAgentPopup-DP28yMpZ.js";import"./TextArea-CbAiDzf6.js";import"./sharedUtilsResizable-CAZWAHxi.js";import"./Table-328rtSEd.js";import"./Collapse-fFVUKsg0.js";import"./react-data-grid-B52RWvTe.js";import"./TableTabs-BqSymkyG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DH3LssWL.js";import"./ListOfFilters-BMS1vsdE.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D-wPgtiZ.js";import"./EmptyState-DfxP_Lxo.js";import"./MassActions-BBmAPmfF.js";import"./Autocomplete-BQ-hG6GN.js";import"./TableGlide-DCbKfYqj.js";import"./@glideappsfinal/glide-data-grid-YheYrnEY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfBl-5Zu.js";const pt={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`,n={...w({preCode:V,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,a]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),i=r.useState([]),[m]=i;return r.useEffect(()=>{const o=m[0];if(!o){a(s);return}const y=[...s].sort((g,d)=>{const t=g[o.columnKey],e=d[o.columnKey];return typeof t=="number"&&typeof e=="number"?o.direction==="ASC"?t-e:e-t:typeof t=="string"&&typeof e=="string"&&t[0]&&e[0]?o.direction==="ASC"?t.localeCompare(e):e.localeCompare(t):0});a(y)},[m]),f.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:i,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sorting/TableCanvas.manualSorting.stories.tsx",lineNumber:110,columnNumber:7},void 0)}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const rows = useMemo(() => createRows(), []);
    const [sortedRows, setSortedRows] = useState(rows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort'
    }, {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort'
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort'
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort'
    }, {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort'
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const [state] = sortingStateAndSetter;
    useEffect(() => {
      const sortColState = state[0];
      if (!sortColState) {
        setSortedRows(rows);
        return;
      }
      const sortRows = [...rows].sort((a, b) => {
        const aValue = a[sortColState.columnKey as keyof Row];
        const bValue = b[sortColState.columnKey as keyof Row];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortColState.direction === 'ASC' ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === 'string' && typeof bValue === 'string' && aValue[0] && bValue[0]) {
          return sortColState.direction === 'ASC' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return 0;
      });
      setSortedRows(sortRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '700px'
      },
      sorting: {
        state: sortingStateAndSetter,
        manualSorting: true
      }
    }} columnConfig={columnConfig} rows={sortedRows} />;
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const ut=["ManualSorting"];export{n as ManualSorting,ut as __namedExportsOrder,pt as default};
