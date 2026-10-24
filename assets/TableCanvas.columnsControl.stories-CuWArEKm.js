import{r as e,d as u}from"./react-D2T61mpp.js";import{c as m}from"./tableData-DVJFoYoT.js";import Ou from"./DocStoryTemplate-CjcIKVa0.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{co as Hu,cp as V,cv as F,cq as Mu}from"./vendor-BotQo-m5.js";import{B as y}from"./Box-jWxNdqW7.js";import{C as t,T as p}from"./TableCanvas-DlNruHcU.js";import{ax as $u,x as H}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as Ru}from"./@salutejs/sdds-finai-BtdE48Lf.js";import{oX as zu,hX as Lu,eQ as R,co as I,e as P,u1 as Gu}from"./@salutejs/plasma-icons-BBqnx34S.js";const _u={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:Ou}}},b=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,N=n=>Hu(n).queryAllByRole("columnheader",{hidden:!0}).map(r=>{var i;return((i=r.textContent)==null?void 0:i.trim())??""}),Pu=async({canvasElement:n})=>{const r=Hu(n);await V(()=>F(N(n)).toContain("Title"),{timeout:5e3}),await F(N(n)).not.toContain("Developer"),await Mu.click(r.getByRole("button",{name:"Добавить колонку Developer"})),await V(()=>{const i=N(n);F(i).toContain("Developer"),F(i.indexOf("Developer")).toBe(i.indexOf("Title")+1)},{timeout:5e3})},j=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],x={...C({preCode:b,previewSource:"shown"}),render:()=>{const[n]=e.useState(m),r=e.useMemo(()=>[{key:"id",name:"ID",renderCell(i){return u.jsxDEV(t.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:111,columnNumber:15},this)}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:i,hidden:a,pinned:c},l)=>{alert(`
                                    order: ${i.join(", ")}
                                    pinned: ${c.join(", ")}
                                    hidden: ${a.join(", ")}
                                `)}}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:150,columnNumber:7},void 0)}},g={...C({preCode:b,previewSource:"shown"}),render:()=>{const[n]=e.useState(m),[r,i]=e.useState([]),a=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(y,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:$u,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:r.length?r.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:216,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:c,hidden:l,pinned:s,changed:d})=>{i(f=>[[`#${f.length+1} изменилось: ${Object.keys(d).join(", ")}`,`    order:  ${c.join(", ")}`,`    pinned: ${s.join(", ")}`,`    hidden: ${l.join(", ")}`].join(`
`),...f])}}},columnConfig:a,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:215,columnNumber:7},void 0)}},h={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:Pu,render:()=>{const[n]=e.useState(m),[r,i]=e.useState(!1),a=e.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),c=e.useState([]),l=e.useCallback(d=>d.hovered.rowHover?{bgCell:d.theme.bgHeader}:{},[]),s=e.useMemo(()=>[{key:"id",name:"ID",themeOverride:l},{key:"task",name:"Title",themeOverride:l,minWidth:200,width:250},...r?[{key:"developer",name:"Developer",themeOverride:l}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:l,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:d=>d.priority,filter:{typeOfValue:"single",filteringType:(d,f)=>d!=="All"?f===d:!0}}},{key:"issueType",name:"Issue Type",themeOverride:l,filtering:{component:"input",filter:"includes",valueInRow:d=>`${d.task} ${d.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:l}],[r,l]);return u.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(y,{children:u.jsxDEV(Ru,{size:"s",view:"secondary",onClick:()=>i(d=>!d),children:r?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:377,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:376,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:a,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:c}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:387,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:375,columnNumber:7},void 0)}},k={...C({preCode:b,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:Pu,render:()=>{const[n]=e.useState(m),[r,i]=e.useState(!0),[a,c]=e.useState(!1),l=e.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),s=e.useCallback(o=>o.hovered.rowHover?{bgCell:o.theme.bgHeader}:{},[]),d=e.useMemo(()=>[{key:"id",name:"id",themeOverride:s,renderHeaderCell:({theme:o})=>u.jsxDEV(t.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[u.jsxDEV(t.Container,{position:"relative",children:[u.jsxDEV(t.Icon,{icon:u.jsxDEV(R,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:476,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:476,columnNumber:17},void 0),u.jsxDEV(t.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(I,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:481,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:477,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:475,columnNumber:15},void 0),u.jsxDEV(t.Container,{position:"relative",children:[u.jsxDEV(t.Icon,{icon:u.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:485,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:485,columnNumber:17},void 0),u.jsxDEV(t.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(I,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:490,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:486,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:484,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:466,columnNumber:13},void 0),renderCell:({theme:o})=>u.jsxDEV(t.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[u.jsxDEV(t.Container,{position:"relative",children:[u.jsxDEV(t.Icon,{icon:u.jsxDEV(R,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:507,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:507,columnNumber:17},void 0),u.jsxDEV(t.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(I,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:512,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:508,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:506,columnNumber:15},void 0),u.jsxDEV(t.Container,{position:"relative",children:[u.jsxDEV(t.Icon,{icon:u.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:516,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:516,columnNumber:17},void 0),u.jsxDEV(t.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(I,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:521,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:517,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:515,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:496,columnNumber:13},void 0)},{key:"task",name:"Title",themeOverride:s,minWidth:200,width:250,renderCell:({row:o,theme:v})=>u.jsxDEV(t.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:v.cellHorizontalPadding,right:v.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxDEV(t.Container,{direction:"column",gap:2,children:[u.jsxDEV(t.Text,{font:v.baseFontStyle,color:v.accentFg,style:{flexGrow:1},children:o.task??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:547,columnNumber:17},void 0),u.jsxDEV(t.Text,{font:v.baseFontStyle,color:v.textHeader,style:{flexGrow:1},children:o.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:554,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:546,columnNumber:15},void 0),u.jsxDEV(t.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",o.complete),children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:562,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:534,columnNumber:13},void 0)},...a?[{key:"developer",name:"Developer",themeOverride:s}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:s,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:o=>o.priority,filter:{typeOfValue:"single",filteringType:(o,v)=>o!=="All"?v===o:!0}}},{key:"issueType",name:"Issue Type",themeOverride:s,filtering:{component:"input",filter:"includes",valueInRow:o=>`${o.task} ${o.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:s}],[a,s]),f=e.useState([]);return u.jsxDEV(y,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(y,{children:u.jsxDEV(Ru,{size:"s",view:"secondary",onClick:()=>c(o=>!o),children:a?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:637,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:636,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:Gu,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:r,onChange:o=>i(o.target.checked)}}]},filtering:{state:l,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:f}},columnConfig:d,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:647,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:635,columnNumber:7},void 0)}},D={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[n]=e.useState(m),[r,i]=e.useState(!0),[a,c]=e.useState(!1),l=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:700},unstickyHeader:!r,notifications:{onNotification:s=>{alert(s.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:s=>u.jsxDEV(zu,{size:s.rowSize==="small"?"xs":"s",color:a?H:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:787,columnNumber:21},void 0),onClick:()=>c(s=>!s)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:s=>u.jsxDEV(y,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:r?"visible":"hidden"},children:u.jsxDEV(Lu,{size:s.rowSize==="small"?"xs":"s",color:H},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:807,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:799,columnNumber:21},void 0),onClick:()=>i(s=>!s)}]}}},columnConfig:l,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:757,columnNumber:7},void 0)}},S={...C({preCode:b,previewSource:"shown"}),render:()=>{const[n]=e.useState(m),r=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),i=e.useState(()=>new Set);return u.jsxDEV(p,{tableConfig:{selecting:{rowCheckboxDisabled:a=>a.id===2,rowShowCheckbox:a=>a.id!==3,state:i,rowKeyGetter:a=>a.id+a.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:a,hidden:c,pinned:l},s)=>{alert(`
                                    order: ${a.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:873,columnNumber:7},void 0)}},E={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[n]=e.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:j,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:930,columnNumber:7},void 0)}},w={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[n]=e.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:j,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:959,columnNumber:7},void 0)}},T={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[n]=e.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:j,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:989,columnNumber:7},void 0)}},A={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[n]=e.useState(m),r=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1040,columnNumber:7},void 0)}},B={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[n]=e.useState(m),r=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1095,columnNumber:7},void 0)}};var O,M,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      renderCell(cellInfo) {
        return <Canvas.Button id="header-tooltip-drag" portalHoverEnabled onClick={() => {}}>
                123
              </Canvas.Button>;
      }
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...($=(M=x.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var z,L,G,_,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [confirmLog, setConfirmLog] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Box data-testid="confirm-log" $css={{
        height: '96px',
        overflowY: 'auto',
        padding: '8px 12px',
        borderRadius: '8px',
        backgroundColor: surfaceTransparentPrimary,
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: 'monospace',
        whiteSpace: 'pre'
      }}>
          {confirmLog.length ? confirmLog.join('\\n') : 'Вызовы onConfirm: откройте настройки колонок и измените что-нибудь'}
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 600
        },
        columnsControl: {
          enable: true,
          applyMode: 'instant',
          disableHiding: ['id'],
          disablePinning: ['developer'],
          hiddenDefault: ['tr1'],
          pinnedDefault: ['complete'],
          onConfirm: ({
            order,
            hidden,
            pinned,
            changed
          }) => {
            setConfirmLog(prev => [[\`#\${prev.length + 1} изменилось: \${Object.keys(changed).join(', ')}\`, \`    order:  \${order.join(', ')}\`, \`    pinned: \${pinned.join(', ')}\`, \`    hidden: \${hidden.join(', ')}\`].join('\\n'), ...prev]);
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(G=(L=g.parameters)==null?void 0:L.docs)==null?void 0:G.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var W,X,K,Y,Q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const themeOverride = useCallback<NonNullable<ColumnConfig<Row>['themeOverride']>>(cellInfo => {
      if (cellInfo.hovered.rowHover) {
        return {
          bgCell: cellInfo.theme.bgHeader
        };
      }
      return {};
    }, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      themeOverride
    }, {
      key: 'task',
      name: 'Title',
      themeOverride,
      minWidth: 200,
      width: 250
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer',
      themeOverride
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      themeOverride,
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      themeOverride,
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      themeOverride
    }], [developerIsShown, themeOverride]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '60vh'
        },
        highlightActiveType: 'row',
        columnsControl: {
          enable: true,
          hiding: true,
          pinning: true,
          reorderingAside: true,
          reorderingHeader: true
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            id: {
              label: 'id',
              clearedValue: ''
            },
            task: {
              label: 'task',
              clearedValue: ''
            },
            priority: {
              label: 'Some Label',
              clearedValue: 'All'
            },
            issueType: {
              label: 'issueType',
              clearedValue: []
            },
            complete: {
              label: 'complete',
              clearedValue: ''
            },
            date: {
              label: 'Дата',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        sorting: {
          state: sortingStateAndSetter
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(K=(X=h.parameters)==null?void 0:X.docs)==null?void 0:K.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.`,...(Q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var J,U,Z,uu,eu;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SimpleTable: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [isFavorite, setIsFavorite] = useState(true);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const themeOverride = useCallback<NonNullable<ColumnConfig<Row>['themeOverride']>>(cellInfo => {
      if (cellInfo.hovered.rowHover) {
        return {
          bgCell: cellInfo.theme.bgHeader
        };
      }
      return {};
    }, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id',
      themeOverride,
      renderHeaderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>,
      renderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'task',
      name: 'Title',
      themeOverride,
      minWidth: 200,
      width: 250,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} wrap="wrap" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} style={{
        width: '100%'
      }}>
              <Canvas.Container direction="column" gap={2}>
                <Canvas.Text font={theme.baseFontStyle} color={theme.accentFg} style={{
            flexGrow: 1
          }}>
                  {row.task ?? '—'}
                </Canvas.Text>
                <Canvas.Text font={theme.baseFontStyle} color={theme.textHeader} style={{
            flexGrow: 1
          }}>
                  {row.priority ?? '—'}
                </Canvas.Text>
              </Canvas.Container>
              <Canvas.Button portalHoverEnabled variant="secondary" onClick={() =>
        // eslint-disable-next-line no-console
        console.log('Подробнее по сотруднику', row.complete)}>
                Подробнее
              </Canvas.Button>
            </Canvas.Container>
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer',
      themeOverride
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      themeOverride,
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      themeOverride,
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      themeOverride
    }], [developerIsShown, themeOverride]);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '60vh'
        },
        rowSize: {
          default: 'big',
          showInControl: true
        },
        highlightActiveType: 'row',
        fullScreenEnabled: true,
        controlBlock: {
          customFeatures: [
          // Обязательная кастомная фича
          {
            value: 'favorite',
            label: 'Удалить из избранного',
            Icon: IconStar,
            onClick: () => {},
            mandatory: true,
            details: {
              type: 'switch',
              label: 'В избранном',
              checked: isFavorite,
              onChange: e => setIsFavorite(e.target.checked)
            }
          }]
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            id: {
              label: 'id',
              clearedValue: ''
            },
            task: {
              label: 'task',
              clearedValue: ''
            },
            priority: {
              label: 'Some Label',
              clearedValue: 'All'
            },
            issueType: {
              label: 'issueType',
              clearedValue: []
            },
            complete: {
              label: 'complete',
              clearedValue: ''
            },
            date: {
              label: 'Дата',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        sorting: {
          state: sortingStateAndSetter
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(Z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(eu=(uu=k.parameters)==null?void 0:uu.docs)==null?void 0:eu.description}}};var nu,ou,ru,su,au;D.parameters={...D.parameters,docs:{...(nu=D.parameters)==null?void 0:nu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: доп. пункты меню закрепления',
  render: () => {
    const [rows] = useState(createRows);
    // Шапка по умолчанию закреплена (unstickyHeader=false) → галочка есть.
    const [isHeaderPinned, setIsHeaderPinned] = useState(true);
    const [isRowsPinned, setIsRowsPinned] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      // Реальное залипание шапки — «Закрепить шапку» переключает его.
      unstickyHeader: !isHeaderPinned,
      // Клик «Закрепить столбцы» без выделения → событие pin/no-selection.
      notifications: {
        onNotification: e => {
          // eslint-disable-next-line no-alert
          alert(e.message);
        }
      },
      columnsControl: {
        enable: true,
        pinning: true,
        disablePinning: ['developer'],
        pinnedDefault: ['complete']
      },
      controlBlock: {
        pinningMenu: {
          // Мёржатся с нативными (Открепить всё order=100, Закрепить
          // столбцы order=200). Итог: … → Закрепить строки → divider →
          // Закрепить шапку.
          items: [{
            value: 'pin-rows',
            label: 'Закрепить строки',
            order: 300,
            dividerAfter: true,
            icon: ctx => <IconPinListOutline size={ctx.rowSize === 'small' ? 'xs' : 's'} color={isRowsPinned ? textInfo : 'inherit'} />,
            onClick: () => setIsRowsPinned(prev => !prev)
          }, {
            value: 'pin-header',
            label: 'Закрепить шапку',
            order: 400,
            icon: ctx => <Box $css={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility: isHeaderPinned ? 'visible' : 'hidden'
            }}>
                      <IconDone size={ctx.rowSize === 'small' ? 'xs' : 's'} color={textInfo} />
                    </Box>,
            onClick: () => setIsHeaderPinned(prev => !prev)
          }]
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(ru=(ou=D.parameters)==null?void 0:ou.docs)==null?void 0:ru.source},description:{story:`### Доп. пункты меню закрепления (pinningMenu)

Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
закрепления своими пунктами через \`controlBlock.pinningMenu.items\`: порядок
задаётся \`order\`, разделитель — \`dividerAfter\`, состояние/иконку контролирует
продукт. «Закрепить шапку» реально переключает залипание шапки через
\`tableConfig.unstickyHeader\` (по умолчанию закреплена — галочка есть; клик
откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
добавить.`,...(au=(su=D.parameters)==null?void 0:su.docs)==null?void 0:au.description}}};var tu,iu,lu;S.parameters={...S.parameters,docs:{...(tu=S.parameters)==null?void 0:tu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <TableCanvas tableConfig={{
      selecting: {
        rowCheckboxDisabled: row => row.id === 2,
        rowShowCheckbox: row => row.id !== 3,
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: false
      },
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(lu=(iu=S.parameters)==null?void 0:iu.docs)==null?void 0:lu.source}}};var du,cu,mu,Cu,pu;E.parameters={...E.parameters,docs:{...(du=E.parameters)==null?void 0:du.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['priority', 'developer', 'tr1']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...(mu=(cu=E.parameters)==null?void 0:cu.docs)==null?void 0:mu.source},description:{story:`Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
весь промежуток).`,...(pu=(Cu=E.parameters)==null?void 0:Cu.docs)==null?void 0:pu.description}}};var bu,vu,yu,fu,gu;w.parameters={...w.parameters,docs:{...(bu=w.parameters)==null?void 0:bu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов по бокам',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        pinning: true,
        pinnedDefault: ['task'],
        hiddenDefault: ['id', 'complete']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...(yu=(vu=w.parameters)==null?void 0:vu.docs)==null?void 0:yu.source},description:{story:`Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
вместе со своей границей.`,...(gu=(fu=w.parameters)==null?void 0:fu.docs)==null?void 0:gu.description}}};var hu,ku,Du,Eu,wu;T.parameters={...T.parameters,docs:{...(hu=T.parameters)==null?void 0:hu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов выключен',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenColumnsIndicator: false,
        hiddenDefault: ['priority']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...(Du=(ku=T.parameters)==null?void 0:ku.docs)==null?void 0:Du.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
без подсветки границ.`,...(wu=(Eu=T.parameters)==null?void 0:Eu.docs)==null?void 0:wu.description}}};var Tu,Au,Bu,xu,Su;A.parameters={...A.parameters,docs:{...(Tu=A.parameters)==null?void 0:Tu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов в группе',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 120
    }, {
      key: 'metrics',
      name: 'Показатели',
      children: [{
        key: 'task',
        name: 'План',
        width: 130
      }, {
        key: 'priority',
        name: 'Факт',
        width: 130
      }, {
        key: 'issueType',
        name: 'Прогноз',
        width: 130
      }]
    }, {
      key: 'grade',
      name: 'Оценка',
      children: [{
        key: 'developer',
        name: 'Инд',
        width: 130
      }, {
        key: 'complete',
        name: 'Итог',
        width: 130
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['priority', 'developer']
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(Bu=(Au=A.parameters)==null?void 0:Au.docs)==null?void 0:Bu.source},description:{story:`Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
(внутри группы «Оценка»).`,...(Su=(xu=A.parameters)==null?void 0:xu.docs)==null?void 0:Su.description}}};var Fu,Iu,Nu,ju,Vu;B.parameters={...B.parameters,docs:{...(Fu=B.parameters)==null?void 0:Fu.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов в скваш-колонках',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 100
    }, {
      key: 'deep',
      name: 'Глубокая',
      children: [{
        key: 'sub',
        name: 'Подгруппа',
        children: [{
          key: 'task',
          name: 'A',
          width: 110
        }, {
          key: 'priority',
          name: 'B',
          width: 110
        }, {
          key: 'issueType',
          name: 'B1',
          width: 110
        }]
      }]
    }, {
      key: 'developer',
      name: 'Ср',
      width: 130
    }, {
      key: 'shallow',
      name: 'Мелкая',
      children: [{
        key: 'complete',
        name: 'C',
        width: 160
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsGrouping: {
        squashEmptyCells: true
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['issueType', 'developer']
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(Nu=(Iu=B.parameters)==null?void 0:Iu.docs)==null?void 0:Nu.source},description:{story:`Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
(B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(Vu=(ju=B.parameters)==null?void 0:ju.docs)==null?void 0:Vu.description}}};const qu=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],ne=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:x,ColumnsControlDynamicColumn:h,ColumnsControlInstantApply:g,ColumnsControlPinningMenu:D,ColumnsControlWithServiceColumnsForTest:S,HiddenColumnsIndicator:E,HiddenColumnsIndicatorDisabled:T,HiddenColumnsIndicatorEdges:w,HiddenColumnsIndicatorGrouped:A,HiddenColumnsIndicatorSquashed:B,SimpleTableDynamicColumn:k,__namedExportsOrder:qu,default:_u},Symbol.toStringTag,{value:"Module"}));export{ne as T};
