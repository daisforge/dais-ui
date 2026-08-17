import{r as a,d as e}from"./react-D2T61mpp.js";import{a as Q,B as h,P as J,T as U,c as k}from"./tableData-UCfjiBCh.js";import W from"./DocStoryTemplate-CGbvb4bP.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as c,T as b}from"./TableCanvas-DHmHfkEK.js";import{a1 as F}from"./@salutejs/sdds-finai-DNM8nTh9.js";const Y={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill",tags:["!autodocs"],parameters:{docs:{page:W}}},X=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],Z=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],p={name:"Полный пример (все возможности)",...C({previewSource:"shown"}),render:()=>{a.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[s,t]=a.useState(()=>Q()),[i,u]=a.useState("row"),[o,l]=a.useState("range-cell"),r=a.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===h[1],component:"select",options:{type:"constant",options:h.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"},renderCell:({row:n})=>e.jsxDEV(c.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(c.Badge,{text:n.blockActivity,view:n.blockActivity==="Активный"?"positive":"warning",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:117,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:116,columnNumber:13},void 0),copyData:n=>n.blockActivity??"",subRow:{keyOfColumnInSubRow:"blockActivity",editingCell:{component:"inputString"}}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"}},renderCell:({row:n,theme:T})=>e.jsxDEV(c.Container,{padding:8,children:e.jsxDEV(c.Text,{color:T.textDark,children:n.tribe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:142,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:141,columnNumber:13},void 0),copyData:n=>n.tribe??"",subRow:{keyOfColumnInSubRow:"tribe",editingCell:{component:"inputString"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}},subRow:{keyOfColumnInSubRow:"product",editingCell:{component:"inputString"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber"}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=a.useMemo(()=>({tribeOptions:U.map(n=>({text:n,value:n})),productOptions:J.map(n=>({text:n,value:n}))}),[]),m=a.useRef(null);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[e.jsxDEV(F,{label:"Режим выделения",value:o,onChange:n=>l(n),items:Z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:231,columnNumber:11},void 0),e.jsxDEV(F,{label:"highlightActiveType (подсветка)",value:i,onChange:n=>u(n),items:X},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:237,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:228,columnNumber:9},void 0),e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[e.jsxDEV("b",{children:"Copy:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:248,columnNumber:11},void 0)," работает всегда (Ctrl+C). ",e.jsxDEV("b",{children:"Paste/Fill:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:248,columnNumber:50},void 0)," только в режиме редактирования.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:250,columnNumber:11},void 0),e.jsxDEV("b",{children:"Выделение строк:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:251,columnNumber:11},void 0)," клик/драг по колонке нумерации — строка(и);"," ",e.jsxDEV("b",{children:"Ctrl/Cmd+клик"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:252,columnNumber:11},void 0)," по номерам — набор отдельных строк (группа). Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:254,columnNumber:11},void 0),e.jsxDEV("b",{children:"Выделение колонок:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:255,columnNumber:11},void 0)," клик по шапке (Ctrl/Shift — мультивыбор), copy/paste по колонкам.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:257,columnNumber:11},void 0),e.jsxDEV("b",{children:"Колонки:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:258,columnNumber:11},void 0)," Блок (select, readonly часть), Активность (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select), Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:261,columnNumber:11},void 0),e.jsxDEV("b",{children:"Debug:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:262,columnNumber:11},void 0)," логи включены (DevTools → Verbose)."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:247,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},highlightActiveType:i,rowMarkers:{startIndex:1},cellsSelection:{mode:o,enableColumnSelection:!0},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){m.current=JSON.parse(JSON.stringify(s)),n()},onCancel(n){m.current&&t(m.current),n()},onSave(n){m.current=null,n()},onRowsChange:t,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==h[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:r,rows:s,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:265,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:227,columnNumber:7},void 0)}},y={name:"Перехват onBeforeCopy / onBeforePaste",...C({previewSource:"shown"}),render:()=>{const[s,t]=a.useState(k),i=a.useMemo(()=>[{key:"id",name:"ID",width:90,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[e.jsxDEV("b",{children:"onBeforeCopy:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:359,columnNumber:11},void 0)," при Ctrl+C в консоль выводятся скопированные данные, колонки и rawValue каждой ячейки.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:361,columnNumber:11},void 0),e.jsxDEV("b",{children:"onBeforePaste:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:362,columnNumber:11},void 0)," при Ctrl+V выводятся вставляемые данные и info о target-ячейках. Если вставляется больше 5 строк, вставка блокируется (return false)."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:358,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"500px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{onBeforeCopy:(u,o)=>{var l;return console.log("[onBeforeCopy] data:",u),console.log("[onBeforeCopy] колонки:",(l=o.cells[0])==null?void 0:l.map(r=>r.column.key)),console.log("[onBeforeCopy] rawValues:",o.cells.map(r=>r.map(d=>d.rawValue))),u},onBeforePaste:(u,o)=>(console.log("[onBeforePaste] data:",u),console.log("[onBeforePaste] target:",o.target),console.log("[onBeforePaste] targetCells:",o.targetCells.map(l=>l.map(r=>`${r.column.key} (${r.column.editingCell?"editable":"readonly"})`))),u.length>5?(console.warn("[onBeforePaste] Блокировка: больше 5 строк"),!1):u)},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0},resizableColumn:!0},columnConfig:i,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:367,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:357,columnNumber:7},void 0)}},w={name:"copyData для кастомных ячеек",...C({previewSource:"shown"}),render:()=>{const[s,t]=a.useState(k),i=a.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (Badge + copyData)",width:220,editingCell:{component:"inputString"},renderCell:({row:u})=>e.jsxDEV(c.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(c.Badge,{text:u.priority,view:u.priority==="Critical"?"negative":"default",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:449,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:448,columnNumber:13},void 0),copyData:u=>u.priority??""},{key:"issueType",name:"Type (Text + copyData)",width:200,editingCell:{component:"inputString"},renderCell:({row:u,theme:o})=>e.jsxDEV(c.Container,{padding:8,children:e.jsxDEV(c.Text,{color:o.textDark,children:u.issueType},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:465,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:464,columnNumber:13},void 0),copyData:u=>u.issueType??""},{key:"complete",name:"% Complete",width:140,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[e.jsxDEV("b",{children:"Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:483,columnNumber:11},void 0)," — Canvas.Badge с ",e.jsxDEV("code",{children:"copyData"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:483,columnNumber:44},void 0),". ",e.jsxDEV("b",{children:"Type"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:483,columnNumber:67},void 0)," — Canvas.Text с ",e.jsxDEV("code",{children:"copyData"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:484,columnNumber:25},void 0),".",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:485,columnNumber:11},void 0),'Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется текст бейджа (например "Critical"), а не пустая строка.']},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:482,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:490,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:481,columnNumber:7},void 0)}},v={name:"Валидация типов при вставке",...C({previewSource:"shown"}),render:()=>{a.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[s,t]=a.useState(k),i=a.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (строка)",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (select)",width:180,editingCell:{component:"select",options:{type:"constant",options:[{value:"Critical",text:"Critical"},{value:"High",text:"High"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}}},{key:"complete",name:"% Complete (число)",width:180,editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" "}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[e.jsxDEV("b",{children:"Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:566,columnNumber:11},void 0),' — select (Critical / High / Medium / Low). Вставка "Unknown" пропустится.',e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:568,columnNumber:11},void 0),e.jsxDEV("b",{children:"% Complete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:569,columnNumber:11},void 0),' — число. Вставка "hello" пропустится.',e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:570,columnNumber:11},void 0),e.jsxDEV("b",{children:"Title"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:571,columnNumber:11},void 0)," — строка, принимает всё.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:572,columnNumber:11},void 0),"Debug логи включены — смотрите"," ",e.jsxDEV("code",{children:"[TableCanvas/paste] skipped by validation"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:574,columnNumber:11},void 0)," в консоли."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:565,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:577,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:564,columnNumber:7},void 0)}},g={name:"Fill Handle — доступ к source row (onBeforeFill)",...C({previewSource:"shown"}),render:()=>{const[s,t]=a.useState(k),i=a.useRef(null),u=a.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:["Выделите ячейку в колонке ",e.jsxDEV("b",{children:"% Complete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:643,columnNumber:37},void 0)," и перетащите fill handle вниз.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:645,columnNumber:11},void 0),e.jsxDEV("b",{children:"onRowsChange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:646,columnNumber:11},void 0)," получает ",e.jsxDEV("code",{children:"type: 'fill'"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:646,columnNumber:40},void 0)," и"," ",e.jsxDEV("code",{children:"fillMeta"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:647,columnNumber:11},void 0)," с source row, что позволяет дополнительно скопировать ",e.jsxDEV("b",{children:"priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:648,columnNumber:23},void 0)," из исходной строки."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:642,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"500px"},highlightActiveType:"range-cell",rowSize:{default:"medium",showInControl:!0},cellTransfer:{fillHandle:!0,onBeforeFill:(o,l)=>{var r,d;return console.log("[onBeforeFill] source row:",(d=(r=l.sourceCells[0])==null?void 0:r[0])==null?void 0:d.row),console.log("[onBeforeFill] data:",o),o}},editing:{onEnableEditing(o){i.current=JSON.parse(JSON.stringify(s)),o()},onCancel(o){i.current&&(t(i.current),i.current=null),o()},onRowsChange:(o,{indexes:l,column:r,type:d,fillMeta:m})=>{var n,T;if(d==="fill"&&m&&r.key==="complete"){const E=(T=(n=m.sourceCells[0])==null?void 0:n[0])==null?void 0:T.row;if(E){const L=o.map((N,$)=>l.includes($)?{...N,priority:E.priority}:N);t(L);return}}t(o)},rowKeyGetter:o=>`${o.id}`,defaultEnabled:!1},resizableColumn:!0},columnConfig:u,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:651,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:641,columnNumber:7},void 0)}},f={name:"Кастомные хоткеи",...C({previewSource:"shown"}),render:()=>{const[s,t]=a.useState(k),i=a.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:["Copy: ",e.jsxDEV("b",{children:"Ctrl+Alt+C"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:752,columnNumber:17},void 0),". Paste: ",e.jsxDEV("b",{children:"Ctrl+Alt+V"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:752,columnNumber:43},void 0),".",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:753,columnNumber:11},void 0),"Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует дефолт, когда задан кастомный хоткей."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:751,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{hotkeys:{copy:{code:"KeyC",ctrl:!0,alt:!0},paste:{code:"KeyV",ctrl:!0,alt:!0}}},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:758,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:750,columnNumber:7},void 0)}};var x,D,S;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Полный пример (все возможности)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    useEffect(() => {
      (window as unknown as Record<string, boolean>).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);
    const [rows, setRows] = useState(() => createRowsTree());
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок',
      editingCell: {
        editable: r => r.block === BLOCKS[1],
        component: 'select',
        options: {
          type: 'constant',
          options: BLOCKS.map(i => ({
            text: i,
            value: i
          }))
        }
      },
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        },
        editingCell: {
          component: 'inputString',
          inputProps: {
            placeholder: 'Введите значение'
          }
        },
        isColumnWithArrow: true
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.blockActivity} view={row.blockActivity === 'Активный' ? 'positive' : 'warning'} size="s" />
            </Canvas.Container>,
      copyData: (row: TreeRow) => row.blockActivity ?? '',
      subRow: {
        keyOfColumnInSubRow: 'blockActivity',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'tribe',
      name: 'Трайб',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'tribeOptions'
        }
      },
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.tribe}</Canvas.Text>
            </Canvas.Container>,
      copyData: (row: TreeRow) => row.tribe ?? '',
      subRow: {
        keyOfColumnInSubRow: 'tribe',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'product',
      name: 'Продукт',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'productOptions'
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'product',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      editingCell: {
        component: 'inputNumber'
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' ',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q2',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q3',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q4',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }], []);
    const rowContextValue = useMemo(() => ({
      tribeOptions: TRIBES.map(i => ({
        text: i,
        value: i
      })),
      productOptions: PRODUCTS.map(i => ({
        text: i,
        value: i
      }))
    }), []);
    const savedRowsRef = useRef<null | typeof rows>(null);
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        maxWidth: 760,
        marginBottom: 12
      }}>
          <Select label="Режим выделения" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
          <Select label="highlightActiveType (подсветка)" value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS} />
        </div>

        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>Copy:</b> работает всегда (Ctrl+C). <b>Paste/Fill:</b> только в
          режиме редактирования.
          <br />
          <b>Выделение строк:</b> клик/драг по колонке нумерации — строка(и);{' '}
          <b>Ctrl/Cmd+клик</b> по номерам — набор отдельных строк (группа).
          Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.
          <br />
          <b>Выделение колонок:</b> клик по шапке (Ctrl/Shift — мультивыбор),
          copy/paste по колонкам.
          <br />
          <b>Колонки:</b> Блок (select, readonly часть), Активность
          (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select),
          Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).
          <br />
          <b>Debug:</b> логи включены (DevTools → Verbose).
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '700px'
        },
        // Подсветка строки — отдельная визуальная ось (Фаза 2+).
        highlightActiveType,
        // Нумерация строк: клик/драг по ней выделяет строку(и); Ctrl/Meta —
        // накопительный выбор отдельных строк. Copy/Paste работают по строкам.
        rowMarkers: {
          startIndex: 1
        },
        // Режим выделения ячеек: по нему работают copy/paste и рамка.
        // Выделение колонок по клику на шапку (по умолчанию включено).
        cellsSelection: {
          mode: selectionMode,
          enableColumnSelection: true
        },
        rowSize: {
          showInControl: true,
          default: 'big'
        },
        editing: {
          onEnableEditing(enableEditorMode) {
            savedRowsRef.current = JSON.parse(JSON.stringify(rows));
            enableEditorMode();
          },
          onCancel(disableEditorMode) {
            if (savedRowsRef.current) setRows(savedRowsRef.current);
            disableEditorMode();
          },
          onSave(disableEditorMode) {
            savedRowsRef.current = null;
            disableEditorMode();
          },
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          rowEditable: r => r.block !== BLOCKS[1]
        },
        subRows: {
          getSubRows: row => row?.subRows,
          rowKeyGetter: row => row.id
        },
        resizableColumn: true
      }} columnConfig={columns} rows={rows} rowContextValue={rowContextValue} />
      </div>;
  }
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var P,B,R;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Перехват onBeforeCopy / onBeforePaste',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 90,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>onBeforeCopy:</b> при Ctrl+C в консоль выводятся скопированные
          данные, колонки и rawValue каждой ячейки.
          <br />
          <b>onBeforePaste:</b> при Ctrl+V выводятся вставляемые данные и info о
          target-ячейках. Если вставляется больше 5 строк, вставка блокируется
          (return false).
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '500px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          onBeforeCopy: (data, meta) => {
            console.log('[onBeforeCopy] data:', data);
            console.log('[onBeforeCopy] колонки:', meta.cells[0]?.map(c => c.column.key));
            console.log('[onBeforeCopy] rawValues:', meta.cells.map(row => row.map(c => c.rawValue)));
            return data;
          },
          onBeforePaste: (data, meta) => {
            console.log('[onBeforePaste] data:', data);
            console.log('[onBeforePaste] target:', meta.target);
            console.log('[onBeforePaste] targetCells:', meta.targetCells.map(row => row.map(c => \`\${c.column.key} (\${c.column.editingCell ? 'editable' : 'readonly'})\`)));
            if (data.length > 5) {
              console.warn('[onBeforePaste] Блокировка: больше 5 строк');
              return false;
            }
            return data;
          }
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        },
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(R=(B=y.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var A,V,I;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'copyData для кастомных ячеек',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 240,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority (Badge + copyData)',
      width: 220,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.priority} view={row.priority === 'Critical' ? 'negative' : 'default'} size="s" />
            </Canvas.Container>,
      copyData: (row: Row) => row.priority ?? ''
    }, {
      key: 'issueType',
      name: 'Type (Text + copyData)',
      width: 200,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.issueType}</Canvas.Text>
            </Canvas.Container>,
      copyData: (row: Row) => row.issueType ?? ''
    }, {
      key: 'complete',
      name: '% Complete',
      width: 140,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>Priority</b> — Canvas.Badge с <code>copyData</code>. <b>Type</b> —
          Canvas.Text с <code>copyData</code>.
          <br />
          Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется
          текст бейджа (например &quot;Critical&quot;), а не пустая строка.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(I=(V=w.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var j,O,M;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Валидация типов при вставке',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    useEffect(() => {
      (window as unknown as Record<string, boolean>).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'task',
      name: 'Title (строка)',
      width: 240,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority (select)',
      width: 180,
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: [{
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        }
      }
    }, {
      key: 'complete',
      name: '% Complete (число)',
      width: 180,
      editingCell: {
        component: 'inputNumber'
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' '
      }
    }], []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>Priority</b> — select (Critical / High / Medium / Low). Вставка
          &quot;Unknown&quot; пропустится.
          <br />
          <b>% Complete</b> — число. Вставка &quot;hello&quot; пропустится.
          <br />
          <b>Title</b> — строка, принимает всё.
          <br />
          Debug логи включены — смотрите{' '}
          <code>[TableCanvas/paste] skipped by validation</code> в консоли.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(M=(O=v.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var _,z,K;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Fill Handle — доступ к source row (onBeforeFill)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const savedRowsRef = useRef<Row[] | null>(null);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          Выделите ячейку в колонке <b>% Complete</b> и перетащите fill handle
          вниз.
          <br />
          <b>onRowsChange</b> получает <code>type: &apos;fill&apos;</code> и{' '}
          <code>fillMeta</code> с source row, что позволяет дополнительно
          скопировать <b>priority</b> из исходной строки.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '500px'
        },
        highlightActiveType: 'range-cell',
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          fillHandle: true,
          onBeforeFill: (data, meta) => {
            console.log('[onBeforeFill] source row:', meta.sourceCells[0]?.[0]?.row);
            console.log('[onBeforeFill] data:', data);
            return data;
          }
        },
        editing: {
          onEnableEditing(enableEditorMode) {
            savedRowsRef.current = JSON.parse(JSON.stringify(rows));
            enableEditorMode();
          },
          onCancel(disableEditorMode) {
            if (savedRowsRef.current) {
              setRows(savedRowsRef.current);
              savedRowsRef.current = null;
            }
            disableEditorMode();
          },
          onRowsChange: (newRows, {
            indexes,
            column,
            type,
            fillMeta
          }) => {
            if (type === 'fill' && fillMeta && column.key === 'complete') {
              const sourceRow = fillMeta.sourceCells[0]?.[0]?.row as Row | undefined;
              if (sourceRow) {
                const updated = newRows.map((row, i) => indexes.includes(i) ? {
                  ...row,
                  priority: sourceRow.priority
                } : row);
                setRows(updated);
                return;
              }
            }
            setRows(newRows);
          },
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: false
        },
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(K=(z=g.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var H,q,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Кастомные хоткеи',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          Copy: <b>Ctrl+Alt+C</b>. Paste: <b>Ctrl+Alt+V</b>.
          <br />
          Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует
          дефолт, когда задан кастомный хоткей.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          hotkeys: {
            copy: {
              code: 'KeyC',
              ctrl: true,
              alt: true
            },
            paste: {
              code: 'KeyV',
              ctrl: true,
              alt: true
            }
          }
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ee=["ClipboardFullDemo","InterceptCopyPaste","CopyDataExample","TypeCheckValidation","FillHandleWithSourceRow","CustomHotkeys"],se=Object.freeze(Object.defineProperty({__proto__:null,ClipboardFullDemo:p,CopyDataExample:w,CustomHotkeys:f,FillHandleWithSourceRow:g,InterceptCopyPaste:y,TypeCheckValidation:v,__namedExportsOrder:ee,default:Y},Symbol.toStringTag,{value:"Module"}));export{se as T};
