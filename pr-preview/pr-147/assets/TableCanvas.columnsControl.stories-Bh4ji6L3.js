import{r as n,d as u}from"./react-D2T61mpp.js";import{c as m}from"./tableData-DVJFoYoT.js";import Wu from"./DocStoryTemplate-DMKGmJ6t.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{cp as O,cr as j,cs as y,cq as R}from"./vendor-BrHBSlJK.js";import{B as g}from"./Box-CAphnu1o.js";import{C as i,T as p}from"./TableCanvas-cpRWq7p1.js";import{d2 as Yu,x as $}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{t as P}from"./@salutejs/sdds-finai-QR_WCRdF.js";import{oX as Ku,hX as Uu,eQ as z,co as V,e as L,u2 as Xu}from"./@salutejs/plasma-icons-DKlbVZSX.js";const Qu={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:Wu}}},b=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,h=e=>O(e).queryAllByRole("columnheader",{hidden:!0}).map(r=>{var o;return((o=r.textContent)==null?void 0:o.trim())??""}),qu=async({canvasElement:e})=>{const r=O(e);await j(()=>y(h(e)).toContain("Title"),{timeout:5e3}),await y(h(e)).not.toContain("Developer"),await R.click(r.getByRole("button",{name:"Добавить колонку Developer"})),await j(()=>{const o=h(e);y(o).toContain("Developer"),y(o.indexOf("Developer")).toBe(o.indexOf("Title")+1)},{timeout:5e3})},M=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],N={...C({preCode:b,previewSource:"shown"}),render:()=>{const[e]=n.useState(m),r=n.useMemo(()=>[{key:"id",name:"ID",renderCell(o){return u.jsxDEV(i.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:111,columnNumber:15},this)}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:o,hidden:a,pinned:c},l)=>{alert(`
                                    order: ${o.join(", ")}
                                    pinned: ${c.join(", ")}
                                    hidden: ${a.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:150,columnNumber:7},void 0)}},k={...C({preCode:b,previewSource:"shown"}),render:()=>{const[e]=n.useState(m),[r,o]=n.useState([]),a=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:Yu,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:r.length?r.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:216,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:c,hidden:l,pinned:s,changed:d})=>{o(v=>[[`#${v.length+1} изменилось: ${Object.keys(d).join(", ")}`,`    order:  ${c.join(", ")}`,`    pinned: ${s.join(", ")}`,`    hidden: ${l.join(", ")}`].join(`
`),...v])}}},columnConfig:a,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:215,columnNumber:7},void 0)}},H=["tr","loremIpsum"],Ju=async({canvasElement:e})=>{const r=O(e);await j(()=>y(h(e)).toContain("Title"),{timeout:5e3}),await y(h(e)).not.toContain("TR"),await y(h(e)).not.toContain("Comment"),await R.click(r.getByRole("button",{name:"Войти в редактирование"})),await j(()=>{const o=h(e);y(o).toContain("TR"),y(o).toContain("Comment")},{timeout:5e3}),await R.click(r.getByRole("button",{name:"Выйти из редактирования"})),await j(()=>{const o=h(e);y(o).not.toContain("TR"),y(o).not.toContain("Comment")},{timeout:5e3})},E={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: управление скрытыми столбцами извне",play:Ju,render:()=>{const[e,r]=n.useState(m),[o,a]=n.useState(!1),[c,l]=n.useState(H),s=()=>{a(!o),l(v=>o?[...new Set([...v,...H])]:v.filter(t=>!H.includes(t)))},d=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"tr",name:"TR",editingCell:{component:"inputString"}},{key:"loremIpsum",name:"Comment",width:300,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxDEV(g,{$css:{display:"flex",alignItems:"center",gap:"16px"},children:[u.jsxDEV(P,{onClick:s,children:o?"Выйти из редактирования":"Войти в редактирование"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:368,columnNumber:11},void 0),u.jsxDEV("span",{children:["Скрыто: ",c.length?c.join(", "):"ничего"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:371,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:367,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:600},editing:{enabled:o,onRowsChange:r,rowKeyGetter:v=>v.id},columnsControl:{enable:!0,applyMode:"instant",hiddenState:[c,l]}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:373,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:366,columnNumber:7},void 0)}},D={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:qu,render:()=>{const[e]=n.useState(m),[r,o]=n.useState(!1),a=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),c=n.useState([]),l=n.useCallback(d=>d.hovered.rowHover?{bgCell:d.theme.bgHeader}:{},[]),s=n.useMemo(()=>[{key:"id",name:"ID",themeOverride:l},{key:"task",name:"Title",themeOverride:l,minWidth:200,width:250},...r?[{key:"developer",name:"Developer",themeOverride:l}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:l,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:d=>d.priority,filter:{typeOfValue:"single",filteringType:(d,v)=>d!=="All"?v===d:!0}}},{key:"issueType",name:"Issue Type",themeOverride:l,filtering:{component:"input",filter:"includes",valueInRow:d=>`${d.task} ${d.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:l}],[r,l]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(P,{size:"s",view:"secondary",onClick:()=>o(d=>!d),children:r?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:506,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:505,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:a,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:c}},columnConfig:s,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:516,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:504,columnNumber:7},void 0)}},w={...C({preCode:b,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:qu,render:()=>{const[e]=n.useState(m),[r,o]=n.useState(!0),[a,c]=n.useState(!1),l=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),s=n.useCallback(t=>t.hovered.rowHover?{bgCell:t.theme.bgHeader}:{},[]),d=n.useMemo(()=>[{key:"id",name:"id",themeOverride:s,renderHeaderCell:({theme:t})=>u.jsxDEV(i.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:[u.jsxDEV(i.Container,{position:"relative",children:[u.jsxDEV(i.Icon,{icon:u.jsxDEV(z,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:605,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:605,columnNumber:17},void 0),u.jsxDEV(i.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(V,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:610,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:606,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:604,columnNumber:15},void 0),u.jsxDEV(i.Container,{position:"relative",children:[u.jsxDEV(i.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:614,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:614,columnNumber:17},void 0),u.jsxDEV(i.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(V,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:619,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:615,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:613,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:595,columnNumber:13},void 0),renderCell:({theme:t})=>u.jsxDEV(i.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:[u.jsxDEV(i.Container,{position:"relative",children:[u.jsxDEV(i.Icon,{icon:u.jsxDEV(z,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:636,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:636,columnNumber:17},void 0),u.jsxDEV(i.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(V,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:641,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:637,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:635,columnNumber:15},void 0),u.jsxDEV(i.Container,{position:"relative",children:[u.jsxDEV(i.Icon,{icon:u.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:645,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:645,columnNumber:17},void 0),u.jsxDEV(i.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsxDEV(V,{color:"#d70101",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:650,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:646,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:644,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:625,columnNumber:13},void 0)},{key:"task",name:"Title",themeOverride:s,minWidth:200,width:250,renderCell:({row:t,theme:f})=>u.jsxDEV(i.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:f.cellHorizontalPadding,right:f.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxDEV(i.Container,{direction:"column",gap:2,children:[u.jsxDEV(i.Text,{font:f.baseFontStyle,color:f.accentFg,style:{flexGrow:1},children:t.task??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:676,columnNumber:17},void 0),u.jsxDEV(i.Text,{font:f.baseFontStyle,color:f.textHeader,style:{flexGrow:1},children:t.priority??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:683,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:675,columnNumber:15},void 0),u.jsxDEV(i.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",t.complete),children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:691,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:663,columnNumber:13},void 0)},...a?[{key:"developer",name:"Developer",themeOverride:s}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:s,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:t=>t.priority,filter:{typeOfValue:"single",filteringType:(t,f)=>t!=="All"?f===t:!0}}},{key:"issueType",name:"Issue Type",themeOverride:s,filtering:{component:"input",filter:"includes",valueInRow:t=>`${t.task} ${t.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:s}],[a,s]),v=n.useState([]);return u.jsxDEV(g,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxDEV(g,{children:u.jsxDEV(P,{size:"s",view:"secondary",onClick:()=>c(t=>!t),children:a?"Удалить колонку Developer":"Добавить колонку Developer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:766,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:765,columnNumber:9},void 0),u.jsxDEV(p,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:Xu,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:r,onChange:t=>o(t.target.checked)}}]},filtering:{state:l,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:v}},columnConfig:d,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:776,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:764,columnNumber:7},void 0)}},B={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[e]=n.useState(m),[r,o]=n.useState(!0),[a,c]=n.useState(!1),l=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:700},unstickyHeader:!r,notifications:{onNotification:s=>{alert(s.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:s=>u.jsxDEV(Ku,{size:s.rowSize==="small"?"xs":"s",color:a?$:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:916,columnNumber:21},void 0),onClick:()=>c(s=>!s)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:s=>u.jsxDEV(g,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:r?"visible":"hidden"},children:u.jsxDEV(Uu,{size:s.rowSize==="small"?"xs":"s",color:$},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:936,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:928,columnNumber:21},void 0),onClick:()=>o(s=>!s)}]}}},columnConfig:l,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:886,columnNumber:7},void 0)}},I={...C({preCode:b,previewSource:"shown"}),render:()=>{const[e]=n.useState(m),r=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),o=n.useState(()=>new Set);return u.jsxDEV(p,{tableConfig:{selecting:{rowCheckboxDisabled:a=>a.id===2,rowShowCheckbox:a=>a.id!==3,state:o,rowKeyGetter:a=>a.id+a.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:a,hidden:c,pinned:l},s)=>{alert(`
                                    order: ${a.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1002,columnNumber:7},void 0)}},T={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[e]=n.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:M,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1059,columnNumber:7},void 0)}},A={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[e]=n.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:M,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1088,columnNumber:7},void 0)}},x={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[e]=n.useState(m);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:M,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1118,columnNumber:7},void 0)}},S={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[e]=n.useState(m),r=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1169,columnNumber:7},void 0)}},F={...C({preCode:b,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[e]=n.useState(m),r=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsxDEV(p,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:r,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.stories.tsx",lineNumber:1224,columnNumber:7},void 0)}};var _,G,q;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(G=N.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var W,Y,K,U,X;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:K.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(X=(U=k.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Q,J,Z,uu,eu;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Z.source},description:{story:`### Управление скрытыми столбцами извне (hiddenState)

Список скрытых столбцов хранится у потребителя и передаётся в таблицу парой
\`columnsControl.hiddenState\`. Столбцы TR и Comment нужны только при
редактировании: кнопка над таблицей в одном обработчике включает режим
редактирования и показывает их, при выходе снова скрывает. Таблица не
пересоздаётся, прокрутка и выделение сохраняются.

Свитчи в настройках столбцов пишут в то же состояние: строка над таблицей
показывает, что скрыто сейчас. Столбцы, которые скрыл пользователь, при
входе и выходе из редактирования не трогаются.`,...(eu=(uu=E.parameters)==null?void 0:uu.docs)==null?void 0:eu.description}}};var nu,ou,ru,tu,su;D.parameters={...D.parameters,docs:{...(nu=D.parameters)==null?void 0:nu.docs,source:{originalSource:`{
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
}`,...(ru=(ou=D.parameters)==null?void 0:ou.docs)==null?void 0:ru.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.`,...(su=(tu=D.parameters)==null?void 0:tu.docs)==null?void 0:su.description}}};var au,iu,lu,du,cu;w.parameters={...w.parameters,docs:{...(au=w.parameters)==null?void 0:au.docs,source:{originalSource:`{
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
}`,...(lu=(iu=w.parameters)==null?void 0:iu.docs)==null?void 0:lu.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(cu=(du=w.parameters)==null?void 0:du.docs)==null?void 0:cu.description}}};var mu,Cu,pu,bu,vu;B.parameters={...B.parameters,docs:{...(mu=B.parameters)==null?void 0:mu.docs,source:{originalSource:`{
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
}`,...(pu=(Cu=B.parameters)==null?void 0:Cu.docs)==null?void 0:pu.source},description:{story:`### Доп. пункты меню закрепления (pinningMenu)

Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
закрепления своими пунктами через \`controlBlock.pinningMenu.items\`: порядок
задаётся \`order\`, разделитель — \`dividerAfter\`, состояние/иконку контролирует
продукт. «Закрепить шапку» реально переключает залипание шапки через
\`tableConfig.unstickyHeader\` (по умолчанию закреплена — галочка есть; клик
откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
добавить.`,...(vu=(bu=B.parameters)==null?void 0:bu.docs)==null?void 0:vu.description}}};var yu,gu,fu;I.parameters={...I.parameters,docs:{...(yu=I.parameters)==null?void 0:yu.docs,source:{originalSource:`{
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
}`,...(fu=(gu=I.parameters)==null?void 0:gu.docs)==null?void 0:fu.source}}};var hu,ku,Eu,Du,wu;T.parameters={...T.parameters,docs:{...(hu=T.parameters)==null?void 0:hu.docs,source:{originalSource:`{
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
}`,...(Eu=(ku=T.parameters)==null?void 0:ku.docs)==null?void 0:Eu.source},description:{story:`Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
весь промежуток).`,...(wu=(Du=T.parameters)==null?void 0:Du.docs)==null?void 0:wu.description}}};var Bu,Tu,Au,xu,Su;A.parameters={...A.parameters,docs:{...(Bu=A.parameters)==null?void 0:Bu.docs,source:{originalSource:`{
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
}`,...(Au=(Tu=A.parameters)==null?void 0:Tu.docs)==null?void 0:Au.source},description:{story:`Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
вместе со своей границей.`,...(Su=(xu=A.parameters)==null?void 0:xu.docs)==null?void 0:Su.description}}};var Fu,Nu,Iu,ju,Vu;x.parameters={...x.parameters,docs:{...(Fu=x.parameters)==null?void 0:Fu.docs,source:{originalSource:`{
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
}`,...(Iu=(Nu=x.parameters)==null?void 0:Nu.docs)==null?void 0:Iu.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
без подсветки границ.`,...(Vu=(ju=x.parameters)==null?void 0:ju.docs)==null?void 0:Vu.description}}};var Hu,Ru,Ou,Pu,Mu;S.parameters={...S.parameters,docs:{...(Hu=S.parameters)==null?void 0:Hu.docs,source:{originalSource:`{
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
}`,...(Ou=(Ru=S.parameters)==null?void 0:Ru.docs)==null?void 0:Ou.source},description:{story:`Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
(внутри группы «Оценка»).`,...(Mu=(Pu=S.parameters)==null?void 0:Pu.docs)==null?void 0:Mu.description}}};var $u,zu,Lu,_u,Gu;F.parameters={...F.parameters,docs:{...($u=F.parameters)==null?void 0:$u.docs,source:{originalSource:`{
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
}`,...(Lu=(zu=F.parameters)==null?void 0:zu.docs)==null?void 0:Lu.source},description:{story:`Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
(B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(Gu=(_u=F.parameters)==null?void 0:_u.docs)==null?void 0:Gu.description}}};const Zu=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlHiddenState","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],d4=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:N,ColumnsControlDynamicColumn:D,ColumnsControlHiddenState:E,ColumnsControlInstantApply:k,ColumnsControlPinningMenu:B,ColumnsControlWithServiceColumnsForTest:I,HiddenColumnsIndicator:T,HiddenColumnsIndicatorDisabled:x,HiddenColumnsIndicatorEdges:A,HiddenColumnsIndicatorGrouped:S,HiddenColumnsIndicatorSquashed:F,SimpleTableDynamicColumn:w,__namedExportsOrder:Zu,default:Qu},Symbol.toStringTag,{value:"Module"}));export{d4 as T};
