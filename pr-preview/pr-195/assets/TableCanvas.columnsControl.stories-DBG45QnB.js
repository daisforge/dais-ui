import{r as n,b as u,R as Qu}from"./react-UEdzNlUe.js";import{c as b}from"./tableData-DKA5H0bF.js";import Zu from"./DocStoryTemplate-CKJLB13y.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{w as M,a as V,e as y,u as P}from"./index-Dgmteq0e.js";import{B as g}from"./Box-CZ_ZQ2uM.js";import{C as d,T as C}from"./TableCanvas-oTsUZkGN.js";import{dh as u4,D as z}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{c as R}from"./@salutejs/sdds-finai-CkM2RoIx.js";import{r as e4,m as n4,v as L,aE as O,am as _,aa as o4}from"./@salutejs/plasma-icons-BPl9HMYM.js";const r4={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:Zu}}},p=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,E=e=>M(e).queryAllByRole("columnheader",{hidden:!0}).map(r=>{var o;return((o=r.textContent)==null?void 0:o.trim())??""}),Xu=async({canvasElement:e})=>{const r=M(e);await V(()=>y(E(e)).toContain("Title"),{timeout:5e3}),await y(E(e)).not.toContain("Developer"),await P.click(r.getByRole("button",{name:"Добавить колонку Developer"})),await V(()=>{const o=E(e);y(o).toContain("Developer"),y(o.indexOf("Developer")).toBe(o.indexOf("Title")+1)},{timeout:5e3})},$=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],I={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),r=n.useMemo(()=>[{key:"id",name:"ID",renderCell(o){return u.jsxDEV(d.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:111,columnNumber:15},this)}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:a,pinned:c},i)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${c.join(", ")}
                                    hidden: ${a.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:150,columnNumber:7},void 0)}},h={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),[r,o]=n.useState([]),a=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:u4,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:r.length?r.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:216,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:c,hidden:i,pinned:t,changed:l})=>{o(v=>[[`#${v.length+1} изменилось: ${Object.keys(l).join(", ")}`,`    order:  ${c.join(", ")}`,`    pinned: ${t.join(", ")}`,`    hidden: ${i.join(", ")}`].join(`
`),...v])}}},columnConfig:a,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:215,columnNumber:7},void 0)}},k={name:"Сохранённый порядок колонок",...m({preCode:p,previewSource:"shown"}),render:()=>{const e="storybook.tableCanvas.columnsControl.order.v1",r=n.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"model",name:"Модель",width:200},{key:"version",name:"Версия расчёта",width:180}],[]),o=n.useMemo(()=>r.map(t=>t.key),[r]),[a]=n.useState([{id:1,model:"Прогноз спроса",version:"Базовая"},{id:2,model:"План производства",version:"Сценарий 2"}]),[c,i]=n.useState(()=>{try{const t=JSON.parse(localStorage.getItem(e)??"null");if(Array.isArray(t)&&t.every(l=>typeof l=="string"))return t}catch{}return o});return Qu.useEffect(()=>{try{localStorage.setItem(e,JSON.stringify(c))}catch{}},[c]),u.jsxDEV(C,{rows:a,columnConfig:r,tableConfig:{containerStyle:{height:400},columnsControl:{enable:!0,applyMode:"instant",orderState:[c,i]},sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"tableSettings",defaultTabs:[{id:"tableSettings",showInSidebar:!1},{id:"columns",titleRightSlot:u.jsxDEV(R,{size:"xs",onClick:()=>i(o),children:"Вид по умолчанию"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:332,columnNumber:19},void 0)}]}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:314,columnNumber:7},void 0)}},H=["tr","loremIpsum"],t4=async({canvasElement:e})=>{const r=M(e);await V(()=>y(E(e)).toContain("Title"),{timeout:5e3}),await y(E(e)).not.toContain("TR"),await y(E(e)).not.toContain("Comment"),await P.click(r.getByRole("button",{name:"Войти в редактирование"})),await V(()=>{const o=E(e);y(o).toContain("TR"),y(o).toContain("Comment")},{timeout:5e3}),await P.click(r.getByRole("button",{name:"Выйти из редактирования"})),await V(()=>{const o=E(e);y(o).not.toContain("TR"),y(o).not.toContain("Comment")},{timeout:5e3})},D={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: управление скрытыми столбцами извне",play:t4,render:()=>{const[e,r]=n.useState(b),[o,a]=n.useState(!1),[c,i]=n.useState(H),t=()=>{a(!o),i(v=>o?[...new Set([...v,...H])]:v.filter(s=>!H.includes(s)))},l=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"tr",name:"TR",editingCell:{component:"inputString"}},{key:"loremIpsum",name:"Comment",width:300,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{$css:{display:"flex",alignItems:"center",gap:"16px"},children:[u.jsxDEV(R,{onClick:t,children:o?"Выйти из редактирования":"Войти в редактирование"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:446,columnNumber:11},void 0),u.jsxDEV("span",{children:["Скрыто: ",c.length?c.join(", "):"ничего"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:449,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:445,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:600},editing:{enabled:o,onRowsChange:r,rowKeyGetter:v=>v.id},columnsControl:{enable:!0,applyMode:"instant",hiddenState:[c,i]}},columnConfig:l,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:451,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:444,columnNumber:7},void 0)}},w={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:Xu,render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!1),a=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),c=n.useState([]),i=n.useCallback(l=>l.hovered.rowHover?{bgCell:l.theme.bgHeader}:{},[]),t=n.useMemo(()=>[{key:"id",name:"ID",themeOverride:i},{key:"task",name:"Title",themeOverride:i,minWidth:200,width:250},...r?[{key:"developer",name:"Developer",themeOverride:i}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:i,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:l=>l.priority,filter:{typeOfValue:"single",filteringType:(l,v)=>l!=="All"?v===l:!0}}},{key:"issueType",name:"Issue Type",themeOverride:i,filtering:{component:"input",filter:"includes",valueInRow:l=>`${l.task} ${l.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:i}],[r,i]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(R,{size:"s",view:"secondary",onClick:()=>o(l=>!l),children:r?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:584,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:583,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:a,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:c}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:594,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:582,columnNumber:7},void 0)}},B={...m({preCode:p,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:Xu,render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!0),[a,c]=n.useState(!1),i=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),t=n.useCallback(s=>s.hovered.rowHover?{bgCell:s.theme.bgHeader}:{},[]),l=n.useMemo(()=>[{key:"id",name:"id",themeOverride:t,renderHeaderCell:({theme:s})=>u.jsxDEV(d.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:s.cellHorizontalPadding,right:s.cellHorizontalPadding},children:[u.jsxDEV(d.Container,{position:"relative",children:[u.jsxDEV(d.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:683,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:683,columnNumber:17},void 0),u.jsxDEV(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(O,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:688,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:684,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:682,columnNumber:15},void 0),u.jsxDEV(d.Container,{position:"relative",children:[u.jsxDEV(d.Icon,{icon:u.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:692,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:692,columnNumber:17},void 0),u.jsxDEV(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(O,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:697,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:693,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:691,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:673,columnNumber:13},void 0),renderCell:({theme:s})=>u.jsxDEV(d.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:s.cellHorizontalPadding,right:s.cellHorizontalPadding},children:[u.jsxDEV(d.Container,{position:"relative",children:[u.jsxDEV(d.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:714,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:714,columnNumber:17},void 0),u.jsxDEV(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(O,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:719,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:715,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:713,columnNumber:15},void 0),u.jsxDEV(d.Container,{position:"relative",children:[u.jsxDEV(d.Icon,{icon:u.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:723,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:723,columnNumber:17},void 0),u.jsxDEV(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(O,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:728,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:724,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:722,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:703,columnNumber:13},void 0)},{key:"task",name:"Title",themeOverride:t,minWidth:200,width:250,renderCell:({row:s,theme:f})=>u.jsxDEV(d.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:f.cellHorizontalPadding,right:f.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxDEV(d.Container,{direction:"column",gap:2,children:[u.jsxDEV(d.Text,{font:f.baseFontStyle,color:f.accentFg,style:{flexGrow:1},children:s.task??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:754,columnNumber:17},void 0),u.jsxDEV(d.Text,{font:f.baseFontStyle,color:f.textHeader,style:{flexGrow:1},children:s.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:761,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:753,columnNumber:15},void 0),u.jsxDEV(d.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",s.complete),children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:769,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:741,columnNumber:13},void 0)},...a?[{key:"developer",name:"Developer",themeOverride:t}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:t,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:s=>s.priority,filter:{typeOfValue:"single",filteringType:(s,f)=>s!=="All"?f===s:!0}}},{key:"issueType",name:"Issue Type",themeOverride:t,filtering:{component:"input",filter:"includes",valueInRow:s=>`${s.task} ${s.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:t}],[a,t]),v=n.useState([]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(R,{size:"s",view:"secondary",onClick:()=>c(s=>!s),children:a?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:844,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:843,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:o4,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:r,onChange:s=>o(s.target.checked)}}]},filtering:{state:i,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:v}},columnConfig:l,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:854,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:842,columnNumber:7},void 0)}},T={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!0),[a,c]=n.useState(!1),i=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:700},unstickyHeader:!r,notifications:{onNotification:t=>{alert(t.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:t=>u.jsxDEV(e4,{size:t.rowSize==="small"?"xs":"s",color:a?z:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:994,columnNumber:21},void 0),onClick:()=>c(t=>!t)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:t=>u.jsxDEV(g,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:r?"visible":"hidden"},children:u.jsxDEV(n4,{size:t.rowSize==="small"?"xs":"s",color:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1014,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1006,columnNumber:21},void 0),onClick:()=>o(t=>!t)}]}}},columnConfig:i,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:964,columnNumber:7},void 0)}},j={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),r=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),o=n.useState(()=>new Set);return u.jsxDEV(C,{tableConfig:{selecting:{rowCheckboxDisabled:a=>a.id===2,rowShowCheckbox:a=>a.id!==3,state:o,rowKeyGetter:a=>a.id+a.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:a,hidden:c,pinned:i},t)=>{alert(`
                                    order: ${a.join(", ")}
                                    pinned: ${i.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1080,columnNumber:7},void 0)}},A={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1137,columnNumber:7},void 0)}},x={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1166,columnNumber:7},void 0)}},S={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1196,columnNumber:7},void 0)}},F={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[e]=n.useState(b),r=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1247,columnNumber:7},void 0)}},N={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[e]=n.useState(b),r=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1302,columnNumber:7},void 0)}};var G,K,W;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(K=I.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Y,q,J,U,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Q,Z,uu,eu,nu;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Сохранённый порядок колонок',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    type ModelRow = {
      id: number;
      model: string;
      version: string;
    };
    const storageKey = 'storybook.tableCanvas.columnsControl.order.v1';
    const columnConfig = useMemo<readonly ColumnConfig<ModelRow>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'model',
      name: 'Модель',
      width: 200
    }, {
      key: 'version',
      name: 'Версия расчёта',
      width: 180
    }], []);
    const defaultOrder = useMemo(() => columnConfig.map(col => col.key), [columnConfig]);
    const [rows] = useState<ModelRow[]>([{
      id: 1,
      model: 'Прогноз спроса',
      version: 'Базовая'
    }, {
      id: 2,
      model: 'План производства',
      version: 'Сценарий 2'
    }]);
    const [order, setOrder] = useState<string[]>(() => {
      try {
        const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
        if (Array.isArray(saved) && saved.every(key => typeof key === 'string')) return saved;
      } catch {
        // При недоступном хранилище или старом формате начинаем с порядка из конфига.
      }
      return defaultOrder;
    });
    React.useEffect(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(order));
      } catch {
        // Настройки продолжают работать в текущей сессии.
      }
    }, [order]);
    return <TableCanvas rows={rows} columnConfig={columnConfig} tableConfig={{
      containerStyle: {
        height: 400
      },
      columnsControl: {
        enable: true,
        applyMode: 'instant',
        orderState: [order, setOrder]
      },
      sidebarConfig: {
        defaultOpen: true,
        defaultActiveTabId: 'tableSettings',
        defaultTabs: [{
          id: 'tableSettings',
          showInSidebar: false
        }, {
          id: 'columns',
          titleRightSlot: <Button size="xs" onClick={() => setOrder(defaultOrder)}>
                    Вид по умолчанию
                  </Button>
        }]
      }
    }} />;
  }
}`,...(uu=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:uu.source},description:{story:"Сохранённый порядок можно сбросить первым действием после перезагрузки страницы.",...(nu=(eu=k.parameters)==null?void 0:eu.docs)==null?void 0:nu.description}}};var ou,ru,tu,su,au;D.parameters={...D.parameters,docs:{...(ou=D.parameters)==null?void 0:ou.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: управление скрытыми столбцами извне',
  play: playHiddenState,
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [editOn, setEditOn] = useState(false);
    const [hidden, setHidden] = useState<string[]>(EDIT_ONLY_COLUMNS);
    const toggleEdit = () => {
      setEditOn(!editOn);
      setHidden(prev => editOn ? [...new Set([...prev, ...EDIT_ONLY_COLUMNS])] : prev.filter(key => !EDIT_ONLY_COLUMNS.includes(key)));
    };
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
      key: 'tr',
      name: 'TR',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'loremIpsum',
      name: 'Comment',
      width: 300,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Box $css={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <Button onClick={toggleEdit}>
            {editOn ? 'Выйти из редактирования' : 'Войти в редактирование'}
          </Button>
          <span>Скрыто: {hidden.length ? hidden.join(', ') : 'ничего'}</span>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 600
        },
        editing: {
          // Режим включает только кнопка над таблицей: она же показывает столбцы.
          enabled: editOn,
          onRowsChange: setRows,
          rowKeyGetter: (row: Row) => row.id
        },
        columnsControl: {
          enable: true,
          applyMode: 'instant',
          hiddenState: [hidden, setHidden]
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(tu=(ru=D.parameters)==null?void 0:ru.docs)==null?void 0:tu.source},description:{story:`### Управление скрытыми столбцами извне (hiddenState)

Список скрытых столбцов хранится у потребителя и передаётся в таблицу парой
\`columnsControl.hiddenState\`. Столбцы TR и Comment нужны только при
редактировании: кнопка над таблицей в одном обработчике включает режим
редактирования и показывает их, при выходе снова скрывает. Таблица не
пересоздаётся, прокрутка и выделение сохраняются.

Свитчи в настройках столбцов пишут в то же состояние: строка над таблицей
показывает, что скрыто сейчас. Столбцы, которые скрыл пользователь, при
входе и выходе из редактирования не трогаются.`,...(au=(su=D.parameters)==null?void 0:su.docs)==null?void 0:au.description}}};var iu,lu,du,cu,mu;w.parameters={...w.parameters,docs:{...(iu=w.parameters)==null?void 0:iu.docs,source:{originalSource:`{
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
}`,...(du=(lu=w.parameters)==null?void 0:lu.docs)==null?void 0:du.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.`,...(mu=(cu=w.parameters)==null?void 0:cu.docs)==null?void 0:mu.description}}};var Cu,pu,bu,vu,yu;B.parameters={...B.parameters,docs:{...(Cu=B.parameters)==null?void 0:Cu.docs,source:{originalSource:`{
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
}`,...(bu=(pu=B.parameters)==null?void 0:pu.docs)==null?void 0:bu.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(yu=(vu=B.parameters)==null?void 0:vu.docs)==null?void 0:yu.description}}};var gu,fu,Eu,hu,ku;T.parameters={...T.parameters,docs:{...(gu=T.parameters)==null?void 0:gu.docs,source:{originalSource:`{
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
}`,...(Eu=(fu=T.parameters)==null?void 0:fu.docs)==null?void 0:Eu.source},description:{story:`### Доп. пункты меню закрепления (pinningMenu)

Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
закрепления своими пунктами через \`controlBlock.pinningMenu.items\`: порядок
задаётся \`order\`, разделитель — \`dividerAfter\`, состояние/иконку контролирует
продукт. «Закрепить шапку» реально переключает залипание шапки через
\`tableConfig.unstickyHeader\` (по умолчанию закреплена — галочка есть; клик
откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
добавить.`,...(ku=(hu=T.parameters)==null?void 0:hu.docs)==null?void 0:ku.description}}};var Du,wu,Bu;j.parameters={...j.parameters,docs:{...(Du=j.parameters)==null?void 0:Du.docs,source:{originalSource:`{
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
}`,...(Bu=(wu=j.parameters)==null?void 0:wu.docs)==null?void 0:Bu.source}}};var Tu,Au,xu,Su,Fu;A.parameters={...A.parameters,docs:{...(Tu=A.parameters)==null?void 0:Tu.docs,source:{originalSource:`{
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
}`,...(xu=(Au=A.parameters)==null?void 0:Au.docs)==null?void 0:xu.source},description:{story:`Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
весь промежуток).`,...(Fu=(Su=A.parameters)==null?void 0:Su.docs)==null?void 0:Fu.description}}};var Nu,Iu,ju,Vu,Ou;x.parameters={...x.parameters,docs:{...(Nu=x.parameters)==null?void 0:Nu.docs,source:{originalSource:`{
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
}`,...(ju=(Iu=x.parameters)==null?void 0:Iu.docs)==null?void 0:ju.source},description:{story:`Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
вместе со своей границей.`,...(Ou=(Vu=x.parameters)==null?void 0:Vu.docs)==null?void 0:Ou.description}}};var Ru,Hu,Pu,Mu,$u;S.parameters={...S.parameters,docs:{...(Ru=S.parameters)==null?void 0:Ru.docs,source:{originalSource:`{
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
}`,...(Pu=(Hu=S.parameters)==null?void 0:Hu.docs)==null?void 0:Pu.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
без подсветки границ.`,...($u=(Mu=S.parameters)==null?void 0:Mu.docs)==null?void 0:$u.description}}};var zu,Lu,_u,Gu,Ku;F.parameters={...F.parameters,docs:{...(zu=F.parameters)==null?void 0:zu.docs,source:{originalSource:`{
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
}`,...(_u=(Lu=F.parameters)==null?void 0:Lu.docs)==null?void 0:_u.source},description:{story:`Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
(внутри группы «Оценка»).`,...(Ku=(Gu=F.parameters)==null?void 0:Gu.docs)==null?void 0:Ku.description}}};var Wu,Yu,qu,Ju,Uu;N.parameters={...N.parameters,docs:{...(Wu=N.parameters)==null?void 0:Wu.docs,source:{originalSource:`{
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
}`,...(qu=(Yu=N.parameters)==null?void 0:Yu.docs)==null?void 0:qu.source},description:{story:`Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
(B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(Uu=(Ju=N.parameters)==null?void 0:Ju.docs)==null?void 0:Uu.description}}};const s4=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlPersistedOrder","ColumnsControlHiddenState","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],y4=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:I,ColumnsControlDynamicColumn:w,ColumnsControlHiddenState:D,ColumnsControlInstantApply:h,ColumnsControlPersistedOrder:k,ColumnsControlPinningMenu:T,ColumnsControlWithServiceColumnsForTest:j,HiddenColumnsIndicator:A,HiddenColumnsIndicatorDisabled:S,HiddenColumnsIndicatorEdges:x,HiddenColumnsIndicatorGrouped:F,HiddenColumnsIndicatorSquashed:N,SimpleTableDynamicColumn:B,__namedExportsOrder:s4,default:r4},Symbol.toStringTag,{value:"Module"}));export{y4 as T};
