import{r as n,b as u}from"./react-UEdzNlUe.js";import{c as b}from"./tableData-DKA5H0bF.js";import Qu from"./DocStoryTemplate-BQuTbhJ9.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{w as P,a as V,e as y,u as R}from"./index-Dgmteq0e.js";import{B as g}from"./Box-Dwqy9xB3.js";import{C as l,T as C}from"./TableCanvas-CBlB33vP.js";import{dh as Zu,D as z}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{c as M}from"./@salutejs/sdds-finai-mlEHigyJ.js";import{r as u4,m as e4,v as L,aE as H,am as _,aa as n4}from"./@salutejs/plasma-icons-CWYH4jgn.js";const o4={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:Qu}}},p=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,E=e=>P(e).queryAllByRole("columnheader",{hidden:!0}).map(r=>{var o;return((o=r.textContent)==null?void 0:o.trim())??""}),Xu=async({canvasElement:e})=>{const r=P(e);await V(()=>y(E(e)).toContain("Title"),{timeout:5e3}),await y(E(e)).not.toContain("Developer"),await R.click(r.getByRole("button",{name:"Добавить колонку Developer"})),await V(()=>{const o=E(e);y(o).toContain("Developer"),y(o.indexOf("Developer")).toBe(o.indexOf("Title")+1)},{timeout:5e3})},$=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],I={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),r=n.useMemo(()=>[{key:"id",name:"ID",renderCell(o){return u.jsxDEV(l.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:111,columnNumber:15},this)}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:i,pinned:d},t)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${d.join(", ")}
                                    hidden: ${i.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:150,columnNumber:7},void 0)}},h={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),[r,o]=n.useState([]),i=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:Zu,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:r.length?r.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:216,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:d,hidden:t,pinned:s,changed:c})=>{o(v=>[[`#${v.length+1} изменилось: ${Object.keys(c).join(", ")}`,`    order:  ${d.join(", ")}`,`    pinned: ${s.join(", ")}`,`    hidden: ${t.join(", ")}`].join(`
`),...v])}}},columnConfig:i,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:215,columnNumber:7},void 0)}},k={name:"Сохранённый порядок колонок",...m({preCode:p,previewSource:"shown"}),render:()=>{const e="storybook.tableCanvas.columnsControl.order.v1",r=n.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"model",name:"Модель",width:200},{key:"version",name:"Версия расчёта",width:180}],[]),[o]=n.useState([{id:1,model:"Прогноз спроса",version:"Базовая"},{id:2,model:"План производства",version:"Сценарий 2"}]),i=n.useMemo(()=>{try{const t=JSON.parse(localStorage.getItem(e)??"null");if(Array.isArray(t)&&t.every(s=>typeof s=="string"))return t}catch{}},[]),d=t=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}};return u.jsxDEV(C,{rows:o,columnConfig:r,tableConfig:{containerStyle:{height:400},columnsControl:{enable:!0,applyMode:"instant",orderInitial:i,onConfirm:({order:t,changed:s})=>{s.order&&d(t)},onReorderingHeader:({newOrder:t})=>d(t)},sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"tableSettings",defaultTabs:[{id:"tableSettings",showInSidebar:!1}]}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:310,columnNumber:7},void 0)}},O=["tr","loremIpsum"],r4=async({canvasElement:e})=>{const r=P(e);await V(()=>y(E(e)).toContain("Title"),{timeout:5e3}),await y(E(e)).not.toContain("TR"),await y(E(e)).not.toContain("Comment"),await R.click(r.getByRole("button",{name:"Войти в редактирование"})),await V(()=>{const o=E(e);y(o).toContain("TR"),y(o).toContain("Comment")},{timeout:5e3}),await R.click(r.getByRole("button",{name:"Выйти из редактирования"})),await V(()=>{const o=E(e);y(o).not.toContain("TR"),y(o).not.toContain("Comment")},{timeout:5e3})},D={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: управление скрытыми столбцами извне",play:r4,render:()=>{const[e,r]=n.useState(b),[o,i]=n.useState(!1),[d,t]=n.useState(O),s=()=>{i(!o),t(v=>o?[...new Set([...v,...O])]:v.filter(a=>!O.includes(a)))},c=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"tr",name:"TR",editingCell:{component:"inputString"}},{key:"loremIpsum",name:"Comment",width:300,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{$css:{display:"flex",alignItems:"center",gap:"16px"},children:[u.jsxDEV(M,{onClick:s,children:o?"Выйти из редактирования":"Войти в редактирование"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:436,columnNumber:11},void 0),u.jsxDEV("span",{children:["Скрыто: ",d.length?d.join(", "):"ничего"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:439,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:435,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:600},editing:{enabled:o,onRowsChange:r,rowKeyGetter:v=>v.id},columnsControl:{enable:!0,applyMode:"instant",hiddenState:[d,t]}},columnConfig:c,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:441,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:434,columnNumber:7},void 0)}},w={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:Xu,render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!1),i=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),d=n.useState([]),t=n.useCallback(c=>c.hovered.rowHover?{bgCell:c.theme.bgHeader}:{},[]),s=n.useMemo(()=>[{key:"id",name:"ID",themeOverride:t},{key:"task",name:"Title",themeOverride:t,minWidth:200,width:250},...r?[{key:"developer",name:"Developer",themeOverride:t}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:t,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:c=>c.priority,filter:{typeOfValue:"single",filteringType:(c,v)=>c!=="All"?v===c:!0}}},{key:"issueType",name:"Issue Type",themeOverride:t,filtering:{component:"input",filter:"includes",valueInRow:c=>`${c.task} ${c.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:t}],[r,t]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(M,{size:"s",view:"secondary",onClick:()=>o(c=>!c),children:r?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:574,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:573,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:i,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:d}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:584,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:572,columnNumber:7},void 0)}},B={...m({preCode:p,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:Xu,render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!0),[i,d]=n.useState(!1),t=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),s=n.useCallback(a=>a.hovered.rowHover?{bgCell:a.theme.bgHeader}:{},[]),c=n.useMemo(()=>[{key:"id",name:"id",themeOverride:s,renderHeaderCell:({theme:a})=>u.jsxDEV(l.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:[u.jsxDEV(l.Container,{position:"relative",children:[u.jsxDEV(l.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:673,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:673,columnNumber:17},void 0),u.jsxDEV(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(H,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:678,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:674,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:672,columnNumber:15},void 0),u.jsxDEV(l.Container,{position:"relative",children:[u.jsxDEV(l.Icon,{icon:u.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:682,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:682,columnNumber:17},void 0),u.jsxDEV(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(H,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:687,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:683,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:681,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:663,columnNumber:13},void 0),renderCell:({theme:a})=>u.jsxDEV(l.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:[u.jsxDEV(l.Container,{position:"relative",children:[u.jsxDEV(l.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:704,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:704,columnNumber:17},void 0),u.jsxDEV(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(H,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:709,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:705,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:703,columnNumber:15},void 0),u.jsxDEV(l.Container,{position:"relative",children:[u.jsxDEV(l.Icon,{icon:u.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:713,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:713,columnNumber:17},void 0),u.jsxDEV(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(H,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:718,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:714,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:712,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:693,columnNumber:13},void 0)},{key:"task",name:"Title",themeOverride:s,minWidth:200,width:250,renderCell:({row:a,theme:f})=>u.jsxDEV(l.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:f.cellHorizontalPadding,right:f.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxDEV(l.Container,{direction:"column",gap:2,children:[u.jsxDEV(l.Text,{font:f.baseFontStyle,color:f.accentFg,style:{flexGrow:1},children:a.task??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:744,columnNumber:17},void 0),u.jsxDEV(l.Text,{font:f.baseFontStyle,color:f.textHeader,style:{flexGrow:1},children:a.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:751,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:743,columnNumber:15},void 0),u.jsxDEV(l.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",a.complete),children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:759,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:731,columnNumber:13},void 0)},...i?[{key:"developer",name:"Developer",themeOverride:s}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:s,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:a=>a.priority,filter:{typeOfValue:"single",filteringType:(a,f)=>a!=="All"?f===a:!0}}},{key:"issueType",name:"Issue Type",themeOverride:s,filtering:{component:"input",filter:"includes",valueInRow:a=>`${a.task} ${a.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:s}],[i,s]),v=n.useState([]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(M,{size:"s",view:"secondary",onClick:()=>d(a=>!a),children:i?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:834,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:833,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:n4,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:r,onChange:a=>o(a.target.checked)}}]},filtering:{state:t,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:v}},columnConfig:c,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:844,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:832,columnNumber:7},void 0)}},T={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[e]=n.useState(b),[r,o]=n.useState(!0),[i,d]=n.useState(!1),t=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:700},unstickyHeader:!r,notifications:{onNotification:s=>{alert(s.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:s=>u.jsxDEV(u4,{size:s.rowSize==="small"?"xs":"s",color:i?z:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:984,columnNumber:21},void 0),onClick:()=>d(s=>!s)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:s=>u.jsxDEV(g,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:r?"visible":"hidden"},children:u.jsxDEV(e4,{size:s.rowSize==="small"?"xs":"s",color:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1004,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:996,columnNumber:21},void 0),onClick:()=>o(s=>!s)}]}}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:954,columnNumber:7},void 0)}},j={...m({preCode:p,previewSource:"shown"}),render:()=>{const[e]=n.useState(b),r=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),o=n.useState(()=>new Set);return u.jsxDEV(C,{tableConfig:{selecting:{rowCheckboxDisabled:i=>i.id===2,rowShowCheckbox:i=>i.id!==3,state:o,rowKeyGetter:i=>i.id+i.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:i,hidden:d,pinned:t},s)=>{alert(`
                                    order: ${i.join(", ")}
                                    pinned: ${t.join(", ")}
                                    hidden: ${d.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1070,columnNumber:7},void 0)}},A={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1127,columnNumber:7},void 0)}},x={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1156,columnNumber:7},void 0)}},S={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[e]=n.useState(b);return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:$,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1186,columnNumber:7},void 0)}},F={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[e]=n.useState(b),r=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1237,columnNumber:7},void 0)}},N={...m({preCode:p,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[e]=n.useState(b),r=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsxDEV(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1292,columnNumber:7},void 0)}};var G,K,W;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    const [rows] = useState<ModelRow[]>([{
      id: 1,
      model: 'Прогноз спроса',
      version: 'Базовая'
    }, {
      id: 2,
      model: 'План производства',
      version: 'Сценарий 2'
    }]);
    const orderInitial = useMemo<string[] | undefined>(() => {
      try {
        const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
        if (Array.isArray(saved) && saved.every(key => typeof key === 'string')) return saved;
      } catch {
        // При недоступном хранилище или старом формате начинаем с порядка из конфига.
      }
      return undefined;
    }, []);
    const saveOrder = (order: string[]) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(order));
      } catch {
        // При недоступном хранилище перестановка и сброс работают в текущей сессии.
      }
    };
    return <TableCanvas rows={rows} columnConfig={columnConfig} tableConfig={{
      containerStyle: {
        height: 400
      },
      columnsControl: {
        enable: true,
        applyMode: 'instant',
        orderInitial,
        onConfirm: ({
          order,
          changed
        }) => {
          if (changed.order) saveOrder(order);
        },
        onReorderingHeader: ({
          newOrder
        }) => saveOrder(newOrder)
      },
      sidebarConfig: {
        defaultOpen: true,
        defaultActiveTabId: 'tableSettings',
        defaultTabs: [{
          id: 'tableSettings',
          showInSidebar: false
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
весь промежуток).`,...(Fu=(Su=A.parameters)==null?void 0:Su.docs)==null?void 0:Fu.description}}};var Nu,Iu,ju,Vu,Hu;x.parameters={...x.parameters,docs:{...(Nu=x.parameters)==null?void 0:Nu.docs,source:{originalSource:`{
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
вместе со своей границей.`,...(Hu=(Vu=x.parameters)==null?void 0:Vu.docs)==null?void 0:Hu.description}}};var Ou,Ru,Pu,Mu,$u;S.parameters={...S.parameters,docs:{...(Ou=S.parameters)==null?void 0:Ou.docs,source:{originalSource:`{
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
}`,...(Pu=(Ru=S.parameters)==null?void 0:Ru.docs)==null?void 0:Pu.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
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
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(Uu=(Ju=N.parameters)==null?void 0:Ju.docs)==null?void 0:Uu.description}}};const t4=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlPersistedOrder","ColumnsControlHiddenState","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],v4=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:I,ColumnsControlDynamicColumn:w,ColumnsControlHiddenState:D,ColumnsControlInstantApply:h,ColumnsControlPersistedOrder:k,ColumnsControlPinningMenu:T,ColumnsControlWithServiceColumnsForTest:j,HiddenColumnsIndicator:A,HiddenColumnsIndicatorDisabled:S,HiddenColumnsIndicatorEdges:x,HiddenColumnsIndicatorGrouped:F,HiddenColumnsIndicatorSquashed:N,SimpleTableDynamicColumn:B,__namedExportsOrder:t4,default:o4},Symbol.toStringTag,{value:"Module"}));export{v4 as T};
