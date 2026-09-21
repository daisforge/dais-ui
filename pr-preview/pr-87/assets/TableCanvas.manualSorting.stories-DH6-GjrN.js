import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-CdMBh71I.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas--430oz65.js";import"./vendor-D5oPH3BX.js";import"./react-is-Clcustum.js";import"./styled-components-PgjJSJpA.js";import"./@tanstack/react-virtual-BeN0wEDh.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CVe5SO_k.js";import"./IconButton-MUImkC04.js";import"./@salutejs/plasma-icons-Cs9sImtB.js";import"./@salutejs/sdds-finai-Dlxy1h5S.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CotpbP-M.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-De9MX9Q7.js";import"./TextField-DMbIRtkW.js";import"./sharedUtilsInputs-CuSwYetx.js";import"./AnalyticalWidget-B0Mw9UcY.js";import"./Collapse-DHQlduwv.js";import"./Table-CjUG2Av1.js";import"./react-data-grid-BAtqug44.js";import"./TableTabs-Cd3Z5gJO.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-J4lOI0-g.js";import"./ListOfFilters-B4NIq99x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BD87J8Px.js";import"./EmptyState-D_ExiAVr.js";import"./MassActions-DPT1VO7w.js";import"./Autocomplete-BwrRpsxY.js";import"./TableGlide-m9dqU8ZY.js";import"./@glideappsfinal/glide-data-grid-q7kZxXjj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CZaeQWVv.js";const it={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const mt=["ManualSorting"];export{n as ManualSorting,mt as __namedExportsOrder,it as default};
