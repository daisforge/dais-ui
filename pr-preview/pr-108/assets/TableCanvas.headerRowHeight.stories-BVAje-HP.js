import{r as o,d as e}from"./react-D2T61mpp.js";import{c as h}from"./tableData-DVJFoYoT.js";import c from"./DocStoryTemplate-MXTAgMiH.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-CAtMVZtW.js";import{af as w}from"./@salutejs/sdds-finai-CYK2r0VN.js";const b={title:"Локальные компоненты/TableCanvas/HeaderRowHeight",tags:["!autodocs"],parameters:{docs:{page:c}}},v=`
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,C=h(0,40),H=[{key:"id",name:"ID",width:90},{key:"metrics",name:"Показатели",children:[{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:180},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:"Прогресс",children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}]}],a={...p({preCode:v,previewSource:"shown",type:"code"}),name:"Высота шапки (3 уровня)",render:()=>{const[u,l]=o.useState(33),n=3,m=o.useMemo(()=>u*n,[u]);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16,maxWidth:520},children:[e.jsxDEV("div",{style:{flex:1},children:e.jsxDEV(w,{value:u,onChange:l,min:24,max:96,step:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:91,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV("span",{style:{whiteSpace:"nowrap"},children:["headerRowHeight: ",u,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:99,columnNumber:11},void 0),e.jsxDEV("span",{style:{whiteSpace:"nowrap",opacity:.7},children:["итог: ",u," × ",n," = ",m,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:102,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(g,{tableConfig:{containerStyle:{height:420},headerRowHeight:u},columnConfig:H,rows:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:106,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var r,s,t,i,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Высота шапки (3 уровня)',
  render: () => {
    const [headerRowHeight, setHeaderRowHeight] = useState<number>(33);

    // 2 уровня групп + листовой ряд => всего 3 уровня.
    const levels = 3;
    const total = useMemo(() => headerRowHeight * levels, [headerRowHeight]);
    return <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 16,
        maxWidth: 520
      }}>
          <div style={{
          flex: 1
        }}>
            <Slider value={headerRowHeight} onChange={setHeaderRowHeight} min={24} max={96} step={1} />
          </div>
          <span style={{
          whiteSpace: 'nowrap'
        }}>
            headerRowHeight: {headerRowHeight}px
          </span>
          <span style={{
          whiteSpace: 'nowrap',
          opacity: 0.7
        }}>
            итог: {headerRowHeight} × {levels} = {total}px
          </span>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 420
        },
        headerRowHeight
      }} columnConfig={threeLevelColumns} rows={rows} />
      </div>;
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source},description:{story:`Ползунок динамически меняет \`tableConfig.headerRowHeight\` на
объединённой шапке в 3 уровня (2 уровня групп + листовой ряд). Значение
применяется к каждому уровню одновременно, поэтому итоговая высота шапки
равна headerRowHeight * (1 + число уровней групп).`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};const f=["Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{T};
