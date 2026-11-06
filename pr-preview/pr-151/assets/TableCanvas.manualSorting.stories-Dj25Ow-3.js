import{r,d as f}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-Jo2cEHjF.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-Cog4vQpo.js";import"./vendor-CKkZ-t_g.js";import"./react-is-Clcustum.js";import"./styled-components-CrBN_RvZ.js";import"./@tanstack/react-virtual-BloiM2g3.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DbBmXt7Q.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DQw3oYuX.js";import"./@salutejs/plasma-icons-DjKwx_w6.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DmxTTMgd.js";import"./IconButton--EqZ66VK.js";import"./Box-Cwvb02Al.js";import"./TextField-B6gJbNNO.js";import"./sharedUtilsInputs-CWJ6Gepf.js";import"./AiAgentPopup-7hKDyvti.js";import"./TextArea-DYBF1Att.js";import"./sharedUtilsResizable-CrssgjcX.js";import"./Table-BaPO4dZU.js";import"./Collapse-CHw8S2JL.js";import"./react-data-grid-D4lRd-q3.js";import"./TableTabs-D0whfNQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DpTGjqB0.js";import"./@glideappsfinal/glide-data-grid-DL53d1uD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B7ho-1kI.js";import"./ListOfFilters-BYr8yWoC.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CrrIJDKM.js";import"./EmptyState-BYcTkWht.js";import"./MassActions-BhMtLwoC.js";import"./Autocomplete-D8RxP6EW.js";import"./ErrorPage-Cl65iHNk.js";const ut={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
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
