import{r as n,d as e}from"./react-D2T61mpp.js";import{c as y}from"./tableData-DVJFoYoT.js";import T from"./DocStoryTemplate-CnJlkrRG.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as E}from"./TableCanvas-BhW4LKe7.js";import{af as t}from"./@salutejs/sdds-finai-BWYHBdru.js";const k={title:"Локальные компоненты/TableCanvas/HeaderRowHeight",tags:["!autodocs"],parameters:{docs:{page:T}}},R=`
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,D=y(0,40),f=[{key:"id",name:"ID",width:90},{key:"metrics",name:"Показатели",children:[{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:180},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:"Прогресс",children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}]}],o={...C({preCode:R,previewSource:"shown",type:"code"}),name:"Высота шапки (3 уровня)",render:()=>{const[u,s]=n.useState(33),a=3,i=n.useMemo(()=>u*a,[u]);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16,maxWidth:520},children:[e.jsxDEV("div",{style:{flex:1},children:e.jsxDEV(t,{value:u,onChange:s,min:24,max:96,step:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:91,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV("span",{style:{whiteSpace:"nowrap"},children:["headerRowHeight: ",u,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:99,columnNumber:11},void 0),e.jsxDEV("span",{style:{whiteSpace:"nowrap",opacity:.7},children:["итог: ",u," × ",a," = ",i,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:102,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(E,{tableConfig:{containerStyle:{height:420},headerRowHeight:u},columnConfig:f,rows:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:106,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:80,columnNumber:7},void 0)}},r={...C({preCode:R,previewSource:"shown",type:"code"}),name:"Своя высота групповых заголовков (groupHeaderRowHeight)",render:()=>{const[u,s]=n.useState(56),[a,i]=n.useState(28),d=2,x=u+a*d;return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{maxWidth:360,marginBottom:16},children:[e.jsxDEV("div",{children:["headerRowHeight (листовой ряд): ",u,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:136,columnNumber:11},void 0),e.jsxDEV(t,{value:u,onChange:s,min:24,max:96,step:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:137,columnNumber:11},void 0),e.jsxDEV("div",{style:{marginTop:12},children:["groupHeaderRowHeight (каждый уровень групп): ",a,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:144,columnNumber:11},void 0),e.jsxDEV(t,{value:a,onChange:i,min:20,max:96,step:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:148,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:135,columnNumber:9},void 0),e.jsxDEV("p",{style:{opacity:.7,marginBottom:12},children:["итог: ",u," + ",a," × ",d," ="," ",x,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV(E,{tableConfig:{containerStyle:{height:420},headerRowHeight:u,groupHeaderRowHeight:a},columnConfig:f,rows:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:160,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HeaderRowHeight/TableCanvas.headerRowHeight.stories.tsx",lineNumber:134,columnNumber:7},void 0)}};var l,h,m,g,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:`Ползунок динамически меняет \`tableConfig.headerRowHeight\` на
объединённой шапке в 3 уровня (2 уровня групп + листовой ряд). Значение
применяется к каждому уровню одновременно, поэтому итоговая высота шапки
равна headerRowHeight * (1 + число уровней групп).`,...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.description}}};var p,w,H,v,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Своя высота групповых заголовков (groupHeaderRowHeight)',
  render: () => {
    const [headerRowHeight, setHeaderRowHeight] = useState<number>(56);
    const [groupHeaderRowHeight, setGroupHeaderRowHeight] = useState<number>(28);

    // 2 уровня групп над листовым рядом.
    const groupLevels = 2;
    const total = headerRowHeight + groupHeaderRowHeight * groupLevels;
    return <div>
        <div style={{
        maxWidth: 360,
        marginBottom: 16
      }}>
          <div>headerRowHeight (листовой ряд): {headerRowHeight}px</div>
          <Slider value={headerRowHeight} onChange={setHeaderRowHeight} min={24} max={96} step={1} />
          <div style={{
          marginTop: 12
        }}>
            groupHeaderRowHeight (каждый уровень групп): {groupHeaderRowHeight}
            px
          </div>
          <Slider value={groupHeaderRowHeight} onChange={setGroupHeaderRowHeight} min={20} max={96} step={1} />
        </div>
        <p style={{
        opacity: 0.7,
        marginBottom: 12
      }}>
          итог: {headerRowHeight} + {groupHeaderRowHeight} × {groupLevels} ={' '}
          {total}px
        </p>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 420
        },
        headerRowHeight,
        groupHeaderRowHeight
      }} columnConfig={threeLevelColumns} rows={rows} />
      </div>;
  }
}`,...(H=(w=r.parameters)==null?void 0:w.docs)==null?void 0:H.source},description:{story:"`tableConfig.groupHeaderRowHeight` задаёт высоту уровней объединённых заголовков\nотдельно от листового ряда: нижний ряд можно сделать выше (например, под перенос\nназваний колонок), а группы над ним оставить компактными.",...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};const N=["Playground","GroupHeaderRowHeight"],L=Object.freeze(Object.defineProperty({__proto__:null,GroupHeaderRowHeight:r,Playground:o,__namedExportsOrder:N,default:k},Symbol.toStringTag,{value:"Module"}));export{L as T};
