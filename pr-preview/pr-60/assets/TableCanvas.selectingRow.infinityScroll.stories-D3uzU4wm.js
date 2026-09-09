import{r as o,d as r}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import C from"./DocStoryTemplate-Ba5kH-9W.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{C as c,T as R}from"./TableCanvas-jHxDG7_S.js";import"./vendor-DyskUa3R.js";import"./react-is-Clcustum.js";import"./styled-components-Dk5h8vLx.js";import"./@tanstack/react-virtual-C-_FPY_A.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B6B7FuTp.js";import"./IconButton-CL8_KbII.js";import"./@salutejs/plasma-icons-DtkePaSU.js";import"./@salutejs/sdds-finai-D2mCi4R2.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-r6DIgRyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BBCb41Bg.js";import"./TextField-BrvaaFR-.js";import"./sharedUtilsInputs-BtXKx1xe.js";import"./AnalyticalWidget-BQmFY68y.js";import"./Collapse-BPaM4yD6.js";import"./Table-CvvYSmQS.js";import"./react-data-grid-COE9myPN.js";import"./TableTabs-B5-_IRPI.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-tdAnuCbT.js";import"./ListOfFilters-M0zDez6D.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BT9ft-Ip.js";import"./EmptyState-Dq5R8LaK.js";import"./MassActions-CKhJJXtL.js";import"./Autocomplete-DYFSEIr8.js";import"./TableGlide-BZ_LqTY-.js";import"./@glideappsfinal/glide-data-grid-BEk6toGU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-8qzLcSq4.js";const le={title:"Локальные компоненты/TableCanvas/SelectingRow/WithSubRowsAndInfinityScroll",tags:["!autodocs"],parameters:{docs:{page:C}}},T=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;function v(t){const{indexForStart:a=0,countOfNewRows:n=30,timeout:s=1e3}=t??{};return new Promise(l=>{const u=d(a,n);setTimeout(()=>l(u),s)})}const i={...S({preCode:T,previewSource:"shown"}),name:"SubRows + InfinityScroll + Selecting",render:()=>{const[t,a]=o.useState(()=>d(0,30)),[n,s]=o.useState(!1),l=t.length<200,u=o.useCallback(async e=>{if(n)return;s(!0);const y=await v({indexForStart:e.length,countOfNewRows:30,timeout:1500});a(f=>[...f,...y]),s(!1)},[n]),b=o.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"task",name:"Task",subRow:{keyOfColumnInSubRow:"task"},renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.task},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:89,columnNumber:36},void 0)},{key:"priority",name:"Priority",renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:95,columnNumber:13},void 0)},{key:"issueType",name:"Issue Type",renderCell:({row:e})=>r.jsxDEV(c.Text,{children:e.issueType??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:102,columnNumber:13},void 0)}],[]),g=o.useState(()=>new Set);return r.jsxDEV(R,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:g,rowKeyGetter:e=>e.id,showDefault:!0,selectingRules:{levels:"all"}},controlBlock:{show:!0,massActionPanel:{buttons:[{type:"button",text:"Действие",view:"secondary"}]}},infinityScroll:{rowThreshold:5,onTrigger:u,isLoading:n,hasMore:l}},columnConfig:b,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.infinityScroll.stories.tsx",lineNumber:114,columnNumber:7},void 0)}};var m,w,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SubRows + InfinityScroll + Selecting',
  render: () => {
    const [rows, setRows] = useState(() => createRows(0, 30));
    const [isLoading, setIsLoading] = useState(false);
    const hasMore = rows.length < 200;
    const onTrigger = useCallback(async (currentRows: Row[]) => {
      if (isLoading) return;
      setIsLoading(true);
      const newData = await loadMoreRows({
        indexForStart: currentRows.length,
        countOfNewRows: 30,
        timeout: 1500
      });
      setRows(prev => [...prev, ...newData]);
      setIsLoading(false);
    }, [isLoading]);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'task',
      name: 'Task',
      subRow: {
        keyOfColumnInSubRow: 'task'
      },
      renderCell: ({
        row
      }) => <Canvas.Text>{row.task}</Canvas.Text>
    }, {
      key: 'priority',
      name: 'Priority',
      renderCell: ({
        row
      }) => <Canvas.Text>{row.priority ?? '—'}</Canvas.Text>
    }, {
      key: 'issueType',
      name: 'Issue Type',
      renderCell: ({
        row
      }) => <Canvas.Text>{row.issueType ?? '—'}</Canvas.Text>
    }], []);
    const selectingState = useState((): ReadonlySet<string | number> => new Set());
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
        state: selectingState,
        rowKeyGetter: r => r.id,
        showDefault: true,
        selectingRules: {
          levels: 'all'
        }
      },
      controlBlock: {
        show: true,
        massActionPanel: {
          buttons: [{
            type: 'button' as const,
            text: 'Действие',
            view: 'secondary' as const
          }]
        }
      },
      infinityScroll: {
        rowThreshold: 5,
        onTrigger,
        isLoading,
        hasMore
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(p=(w=i.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};const ue=["SelectingWithInfinityScroll"];export{i as SelectingWithInfinityScroll,ue as __namedExportsOrder,le as default};
