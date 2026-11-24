import{r,b as f}from"./react-UEdzNlUe.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-CKJLB13y.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-BU5tWhkh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DKFmtNka.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./WithTooltip-KJL26V4Q-NPj_OXam.js";import"./preload-helper-Bxleko46.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D30oCc_e.js";import"./@daisforge/glide-data-grid-CNHJL7BZ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-BRjYtqWQ.js";import"./Typography-Bd5O8uMr.js";import"./ListOfFilters-BkJGAlOU.js";import"./Table-BODkN3nV.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-D8MZ0zlW.js";import"./unidentified@3x-DFu65eL-.js";import"./MassActions-BwgQYvJ3.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-BdjQdDbC.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-B5juIuQR.js";const wt={title:"Локальные компоненты/TableCanvas/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},V=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`,n={...w({preCode:V,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,a]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),i=r.useState([]),[m]=i;return r.useEffect(()=>{const e=m[0];if(!e){a(s);return}const y=[...s].sort((g,d)=>{const t=g[e.columnKey],o=d[e.columnKey];return typeof t=="number"&&typeof o=="number"?e.direction==="ASC"?t-o:o-t:typeof t=="string"&&typeof o=="string"&&t[0]&&o[0]?e.direction==="ASC"?t.localeCompare(o):o.localeCompare(t):0});a(y)},[m]),f.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:i,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Sorting/TableCanvas.manualSorting.stories.tsx",lineNumber:110,columnNumber:7},void 0)}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const Tt=["ManualSorting"];export{n as ManualSorting,Tt as __namedExportsOrder,wt as default};
