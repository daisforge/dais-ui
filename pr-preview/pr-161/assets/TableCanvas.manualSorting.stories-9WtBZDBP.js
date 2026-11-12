import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-Doo9CTuq.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-DbY69FT4.js";import"./vendor-aFf5tYwy.js";import"./react-is-Clcustum.js";import"./styled-components-CGUvt02A.js";import"./@tanstack/react-virtual-k3-5pk8r.js";import"./tslib-DoU9Jm1N.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DYFUycLF.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DHWxFeH-.js";import"./@salutejs/plasma-icons-CfbkFxsV.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CRk5udtM.js";import"./IconButton-B-B3AQC6.js";import"./Box-DMGTp91_.js";import"./TextField-g4cwrqhr.js";import"./sharedUtilsInputs-8wkUDZmN.js";import"./AiAgentPopup-B-jiqUix.js";import"./TextArea-DMLD6qSb.js";import"./sharedUtilsResizable-DkclOuAT.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DWSTzBKt.js";import"./Collapse-DM9OG5Il.js";import"./react-data-grid-BEGNQ37d.js";import"./TableTabs-CPZeQ2kr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BYkuqSTV.js";import"./@glideappsfinal/glide-data-grid-B49w_JG0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7cGCjU0.js";import"./ListOfFilters-CyakYA65.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BjkaFfzc.js";import"./EmptyState-C_McVLBd.js";import"./MassActions-BoSslq4j.js";import"./Autocomplete-RKbmfr3_.js";import"./ErrorPage-Bu124UTc.js";const lt={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const ct=["ManualSorting"];export{n as ManualSorting,ct as __namedExportsOrder,lt as default};
