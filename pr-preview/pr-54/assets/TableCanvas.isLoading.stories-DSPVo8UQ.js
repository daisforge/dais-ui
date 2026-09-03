import{r as a,d as n}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-oNxBpJHV.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{S as b}from"./FiltersActions-bxROcBmg.js";import{T as v}from"./TableCanvas-CbSlA78G.js";const y={title:"Локальные компоненты/TableCanvas/IsLoading",tags:["!autodocs"],parameters:{docs:{page:m},screenshot:{skip:!0}}},C=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,e={...g({preCode:C,previewSource:"shown"}),name:"IsLoading",render:()=>{const[u]=a.useState(c),[o,t]=a.useState(!1),l=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(b,{style:{width:"fit-content"},label:o?"Скрыть overlay":"Показать overlay",checked:o,onChange:()=>t(d=>!d)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:59,columnNumber:9},void 0),n.jsxDEV(v,{tableConfig:{containerStyle:{height:500},isLoading:{boolean:!0,skeletonRowsCount:5},loadingOverlay:{active:o,showSubtitleDelay:3e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},columnConfig:l,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.IsLoading/TableCanvas.isLoading.stories.tsx",lineNumber:58,columnNumber:7},void 0)}};var s,i,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'IsLoading',
  render: () => {
    const [rows] = useState(createRows);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <>
        <Switch style={{
        width: 'fit-content'
      }} label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'} checked={isVisibleLoadingOverlay} onChange={() => setIsVisibleLoadingOverlay(prev => !prev)} />
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 500
        },
        isLoading: {
          boolean: true,
          skeletonRowsCount: 5
        },
        loadingOverlay: {
          active: isVisibleLoadingOverlay,
          showSubtitleDelay: 3000,
          subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд'
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const p=["IsLoading"],S=Object.freeze(Object.defineProperty({__proto__:null,IsLoading:e,__namedExportsOrder:p,default:y},Symbol.toStringTag,{value:"Module"}));export{S as T};
