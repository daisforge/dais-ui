import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-zj6qwwHt.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-CuFI524j.js";import"./vendor-DyX3yqNp.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DQxdQErP.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BZMI6rrq.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B2vBGG3O.js";import"./IconButton-B6fBl0RH.js";import"./Box-D-OropPv.js";import"./TextField--CPz6SHF.js";import"./sharedUtilsInputs-Cm96x1-i.js";import"./AiAgentPopup-D2bTNZh3.js";import"./TextArea-Di4Qtf2V.js";import"./sharedUtilsResizable-Blk5Lffw.js";import"./Table-CunU1yCr.js";import"./Collapse-CRdO4IOl.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-9JF0xyYS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Mjc-Zq-G.js";import"./@glideappsfinal/glide-data-grid-DnsAjn7G.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BUz5u9gE.js";import"./ListOfFilters-Cbc8wq9G.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BelZyhKZ.js";import"./EmptyState-D-0LAguT.js";import"./MassActions-C1cNwRXT.js";import"./Autocomplete-D4kazqKR.js";import"./ErrorPage-MYqUUGdN.js";const ut={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const lt=["ManualSorting"];export{n as ManualSorting,lt as __namedExportsOrder,ut as default};
