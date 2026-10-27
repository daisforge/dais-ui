import{r as m,d as U}from"./react-D2T61mpp.js";import{c as V}from"./tableData-DVJFoYoT.js";import{T as Z}from"./TableCanvas-DlwK2Uyp.js";import{l as H}from"./TableGlide-Wx5FEu-J.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DQxdQErP.js";import"./styled-components-ccjJug2H.js";import"./react-is-Clcustum.js";import"./vendor-DyX3yqNp.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BZMI6rrq.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-QpggHt6I.js";import"./IconButton-B6fBl0RH.js";import"./Box-D-OropPv.js";import"./TextField--CPz6SHF.js";import"./sharedUtilsInputs-Cm96x1-i.js";import"./AiAgentPopup-D2bTNZh3.js";import"./TextArea-Di4Qtf2V.js";import"./sharedUtilsResizable-Blk5Lffw.js";import"./Table-Dlwr-Ud6.js";import"./Collapse-CRdO4IOl.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-9JF0xyYS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BUz5u9gE.js";import"./ListOfFilters-Bovvq5fg.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BelZyhKZ.js";import"./EmptyState-HtYn0o0B.js";import"./MassActions-BVt6ggSo.js";import"./Autocomplete-D4kazqKR.js";import"./@glideappsfinal/glide-data-grid-DnsAjn7G.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage--JsKV23W.js";const A=(e,t,r,o,a,n=t)=>({light:e,dark:t,betaCoreLight:r,betaCoreDark:o,highContrastLight:a,highContrastDark:n}),q={textSecondary:{name:"text-secondary",values:A("#485056B0","#D5DFE69E","#475158B0","#CFDBE49E","#03070CB0"),hover:A("#485056FF","#D5DFE6FF","#475158FF","#CFDBE4FF","#03070CFF"),active:A("#485056D3","#D5DFE6D3","#475158D3","#CFDBE4D3","#03070CD3")},surfaceTransparentPrimary:{name:"surface-transparent-primary",values:A("#D5DFE642","#FFFFFF0F","#CFDBE442","#FFFFFF0F","#AFC0CB4D")}},z={textHeaderClean:{source:"textSecondary",state:"rest",paints:"чистый вид: текст шапки, групповой и выделенной шапки"},bgZebraRow:{source:"surfaceTransparentPrimary",state:"rest",paints:"зебра: строка с чётным индексом"},bgZebraRowHovered:{source:"surfaceTransparentPrimary",state:"hover",paints:"зебра: строка с чётным индексом под курсором"},bgZebraRowActive:{source:"surfaceTransparentPrimary",state:"active",paints:"зебра: выделенные ячейки строки с чётным индексом"},bgZebraRowActiveHovered:{source:"surfaceTransparentPrimary",state:"hoverActive",paints:"зебра: выделенные ячейки строки с чётным индексом под курсором"}},l=(e,t,r,o,a=null,n=t)=>({light:e,dark:t,betaCoreLight:r,betaCoreDark:o,highContrastLight:a,highContrastDark:n}),k={light:{mode:"light"},dark:{mode:"dark"},betaCoreLight:{mode:"light"},betaCoreDark:{mode:"dark"},highContrastLight:{mode:"light",stepFactor:1,note:"множитель ступени подобрать глазами на стенде"},highContrastDark:{mode:"dark",note:"sdds_finai_high_contrast 0.1.2; множитель как у dark, уточнить на стенде"}},J=e=>e,T=e=>({betaCoreLight:e,betaCoreDark:e,highContrastLight:e,highContrastDark:e}),w=J({surfaceSolidCard:{name:"surface-solid-card",values:l("#FFFFFFFF","#060A0C","#FFFFFF","#060A0D","#FFFFFF")},surfaceSolidPrimary:{name:"surface-solid-primary",values:l("#F2F5F8","#13181B","#F3F7FA","#14191D","#D6DFE7")},backgroundPrimary:{name:"background-primary",values:l("#F2F5F8","#060A0C","#F3F7FA","#060A0D","#E5EBF1")},surfaceAccentMinor:{name:"surface-accent-minor",values:l("#ECF6FCFF","#071A26FF","#EFF8FF","#0C1A24","#CFE5F2FF")},surfaceAccent:{name:"surface-accent",values:l("#199AF0","#199AF0","#1F9EEB","#1F9EEB","#0076D2","#118CDF")},outlineAccent:{name:"outline-accent",values:l("#0B7ECB","#199AF0","#0087CD","#1F9EEB","#0058A2")},outlineSolidPrimary:{name:"outline-solid-primary",values:l("#D5DFE6","#23292D","#CFDBE4","#262626","#A3ACB4","#25262D")},surfaceNegative:{name:"surface-negative",values:l("#FF293E","#FF293E","#F81C42","#F81C42","#E7002F")},surfaceTransparentAccent:{name:"surface-transparent-accent",values:l("#118CDF1F","#118CDF33","#0090DA1F","#0090DA33","#0076D240")},surfaceTransparentPositive:{name:"surface-transparent-positive",values:l("#1A9E321F","#1A9E3233","#21A0381F","#21A03833","#198A004D")},surfaceTransparentWarning:{name:"surface-transparent-warning",values:l("#FA5F051F","#FA5F0533","#E154001F","#E1540033","#D958004D")},surfacePositiveMinor:{name:"surface-positive-minor",values:l("#9EFAAF","#0A2B10","#AFFFB1","#0F2D11","#96DAA1")},surfaceNegativeMinor:{name:"surface-negative-minor",values:l("#FFE0E3","#4A0D13","#FEDFDE","#480B11","#F8BDC4")},surfaceWarningMinor:{name:"surface-warning-minor",values:l("#FEE2D2","#3D1D0A","#FEE1D6","#3C1C0F","#F7C29D")},surfaceInfoMinor:{name:"surface-info-minor",values:l("#CFECFF","#0C283B","#D3EBFF","#09283D","#9CD5FF")},dataYellowLight:{name:"data-yellow-light",names:T("data-yellow-on-light"),values:l("#FFE4AE","#211807","#FFE3BD","#211607","#F1DDB8","#211807")},dataBlueLight:{name:"data-blue-light",names:T("data-blue-on-light"),values:l("#EDF8FF","#0A1924","#EFF8FF","#0C1A24","#DAE8F1","#0A1924")},dataYellow:{name:"data-yellow",values:l("#F3A912","#A16B00","#E9A431","#9A6700","#D49100")},textPrimary:{name:"text-primary",values:l("#13181BF5","#F2F5F8F5","#14191DF5","#F3F7FAF5","#13181BF5"),hover:l("#13181B93","#F2F5F893","#151A1E93","#F4F8FA93","#13181B93"),active:l("#13181BC4","#F2F5F8C4","#151A1EC4","#F4F8FAC4","#13181BC4")}}),Q={card:w.surfaceSolidCard,primary:w.surfaceSolidPrimary,selection:w.surfaceTransparentAccent},X={bgCell:{source:"surfaceSolidCard",state:"rest",paints:"фон ячейки"},bgRowHovered:{source:"surfaceSolidCard",state:"hover",paints:"строка под курсором"},bgHeader:{source:"surfaceAccentMinor",state:"rest",paints:"шапка, итоговая строка"},bgHeaderHasFocus:{source:"surfaceAccentMinor",state:"rest",paints:"шапка в фокусе"},bgGroupHeader:{source:"surfaceAccentMinor",state:"rest",paints:"групповая шапка"},bgHeaderHovered:{source:"surfaceAccentMinor",state:"hover",paints:"шапка под курсором"},bgGroupHeaderHovered:{source:"surfaceAccentMinor",state:"hover",paints:"групповая шапка под курсором"},selectionServiceActiveBg:{source:"surfaceAccentMinor",state:"active",paints:"шапка и служебная зона при выделении"},bgHeaderSelectedHovered:{source:"surfaceAccentMinor",state:"hoverActive",paints:"выделенная шапка под курсором"},selectionCheckboxBg:{source:"surfaceAccentMinor",state:"rest",paints:"отмеченная строка; выбранная строка (highlightActiveType = row)"},selectionServiceBg:{source:"surfaceAccentMinor",state:"rest",paints:"служебные колонки в покое"},bgSelectedRowHovered:{source:"surfaceAccentMinor",state:"hover",paints:"отмеченная строка под курсором; выбранная строка под курсором; выбранная строка с нажатым чекбоксом"},bgSelectedRowActiveHovered:{source:"surfaceAccentMinor",state:"hover2",paints:"выбранная строка с нажатым чекбоксом под курсором"},bgServiceRowHovered:{source:"surfaceAccentMinor",state:"hover",paints:"служебные колонки строки под курсором"},selectionServiceActiveHoveredBg:{source:"surfaceAccentMinor",state:"hoverActive",paints:"выделенная служебная зона под курсором"},selectionActiveBg:{source:"surfaceSolidCard",state:"active",paints:"активная ячейка, выделенные колонка/строка на белом"},accentLight:{source:"surfaceSolidCard",state:"active",paints:"заливка диапазона Glide на белом"},selectionActiveCheckboxBg:{source:"surfaceAccentMinor",state:"active",paints:"активная ячейка в отмеченной строке"},selectionActiveHoveredBg:{source:"surfaceSolidCard",state:"hoverActive",paints:"выделение в строке под курсором (= выделение)"},selectionActiveCheckboxHoveredBg:{source:"surfaceAccentMinor",state:"hoverActive",paints:"выделение в отмеченной строке под курсором"},bgEditableCell:{source:"dataYellowLight",state:"rest",paints:"редактируемая ячейка"},bgEditableCellHovered:{source:"dataYellowLight",state:"hover",paints:"редактируемая ячейка под курсором"},bgEditableCellActive:{source:"dataYellowLight",state:"active",paints:"редактируемая ячейка в диапазоне выделения"},bgEditableCellActiveHovered:{source:"dataYellowLight",state:"hoverActive",paints:"редактируемая ячейка в выделении под курсором"},bgEditableCellRowActiveHovered:{source:"dataYellowLight",state:"hover2",paints:"редактируемая ячейка выбранной строки под курсором"},editedSuccessfullyCellColor:{source:"dataBlueLight",state:"rest",paints:"успешно сохранённая ячейка"},editedSuccessfullyCellHoverColor:{source:"dataBlueLight",state:"hover",paints:"сохранённая ячейка под курсором"},editedSuccessfullyCellActiveColor:{source:"dataBlueLight",state:"active",paints:"сохранённая ячейка в диапазоне выделения"},editedSuccessfullyCellActiveHoverColor:{source:"dataBlueLight",state:"hoverActive",paints:"сохранённая ячейка в выделении под курсором"},editedSuccessfullyCellRowActiveHoverColor:{source:"dataBlueLight",state:"hover2",paints:"сохранённая ячейка выбранной строки под курсором"},bgCellPositive:{source:"surfaceTransparentPositive",state:"rest",paints:"ячейка со статусом positive"},bgCellPositiveHovered:{source:"surfaceTransparentPositive",state:"hover",paints:"positive под курсором"},bgCellPositiveActive:{source:"surfaceTransparentPositive",state:"active",paints:"positive в выделении"},bgCellPositiveActiveHovered:{source:"surfaceTransparentPositive",state:"hoverActive",paints:"positive в выделении под курсором"},bgCellPositiveRowActiveHovered:{source:"surfaceTransparentPositive",state:"hover2",paints:"positive в выбранной строке под курсором"},bgCellNegative:{source:"surfaceNegativeMinor",state:"rest",paints:"ячейка со статусом negative"},bgCellNegativeHovered:{source:"surfaceNegativeMinor",state:"hover",paints:"negative под курсором"},bgCellNegativeActive:{source:"surfaceNegativeMinor",state:"active",paints:"negative в выделении"},bgCellNegativeActiveHovered:{source:"surfaceNegativeMinor",state:"hoverActive",paints:"negative в выделении под курсором"},bgCellNegativeRowActiveHovered:{source:"surfaceNegativeMinor",state:"hover2",paints:"negative в выбранной строке под курсором"},bgCellWarning:{source:"surfaceTransparentWarning",state:"rest",paints:"ячейка со статусом warning"},bgCellWarningHovered:{source:"surfaceTransparentWarning",state:"hover",paints:"warning под курсором"},bgCellWarningActive:{source:"surfaceTransparentWarning",state:"active",paints:"warning в выделении"},bgCellWarningActiveHovered:{source:"surfaceTransparentWarning",state:"hoverActive",paints:"warning в выделении под курсором"},bgCellWarningRowActiveHovered:{source:"surfaceTransparentWarning",state:"hover2",paints:"warning в выбранной строке под курсором"},bgCellInfo:{source:"surfaceInfoMinor",state:"rest",paints:"ячейка со статусом info"},bgCellInfoHovered:{source:"surfaceInfoMinor",state:"hover",paints:"info под курсором"},bgCellInfoActive:{source:"surfaceInfoMinor",state:"active",paints:"info в выделении"},bgCellInfoActiveHovered:{source:"surfaceInfoMinor",state:"hoverActive",paints:"info в выделении под курсором"},bgCellInfoRowActiveHovered:{source:"surfaceInfoMinor",state:"hover2",paints:"info в выбранной строке под курсором"},textDark:{source:"textPrimary",state:"rest",paints:"текст ячеек"},textHeader:{source:"textPrimary",state:"rest",paints:"текст шапки"},textHeaderSelected:{source:"textPrimary",state:"rest",paints:"текст выделенной шапки"},textGroupHeader:{source:"textPrimary",state:"rest",paints:"текст групповой шапки"},borderColor:{source:"outlineSolidPrimary",state:"rest",paints:"сетка"},accentColor:{source:"outlineAccent",state:"rest",paints:"рамка выделения и редактора"},hiddenColumnsIndicatorColor:{source:"outlineAccent",state:"rest",paints:"индикатор скрытых столбцов"},errorOutlineColor:{source:"surfaceNegative",state:"rest",usage:"outline",paints:"рамка ячейки с ошибкой"},fadeWhite:{source:"surfaceSolidCard",state:"rest",usage:"static",paints:"затухание на белом блоке"},fadeGray:{source:"backgroundPrimary",state:"rest",paints:"затухание на сером блоке"}},W=["light","dark","betaCoreLight","betaCoreDark","highContrastLight","highContrastDark"],ee=.025,te={light:1,dark:1.2},G=.004,$=e=>e.replace(/^--/,"").replace(/[-_]/g,"").toLowerCase(),K=e=>{const t=$(e);return t.startsWith("surface")?"surface":t.startsWith("text")||t.startsWith("inversetext")||/^on(dark|light)text/.test(t)?"text":t.startsWith("outline")?"outline":t.startsWith("data")?"data":t.startsWith("background")?"background":"other"},j=e=>e==="text"?"text":e==="outline"?"outline":e==="background"?"static":"fill",re=e=>$(e)==="surfacesolidcard",B=e=>{let t=e.trim().replace("#","");if(t.length===3&&(t=t.split("").map(r=>r+r).join("")),t.length===6&&(t+="FF"),!/^[0-9a-fA-F]{8}$/.test(t))throw new Error(`Не hex: ${e}`);return[0,2,4,6].map(r=>parseInt(t.slice(r,r+2),16)/255)},Y=e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0"),ae=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,ne=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,g=(e,t="#FFFFFF")=>{const r=B(e),o=B(t),a=r[3];return"#"+[0,1,2].map(n=>Y(Math.round((r[n]*a+o[n]*(1-a))*255)/255)).join("").toUpperCase()},y=e=>{const[t,r,o]=B(e).slice(0,3).map(ae),a=Math.cbrt(.4122214708*t+.5363325363*r+.0514459929*o),n=Math.cbrt(.2119034982*t+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*t+.2817188376*r+.6299787005*o),u=.2104542553*a+.793617785*n-.0040720468*s,i=1.9779984951*a-2.428592205*n+.4505937099*s,c=.0259040371*a+.7827717662*n-.808675766*s;return{l:u,c:Math.hypot(i,c),h:(Math.atan2(c,i)*180/Math.PI+360)%360}},M=({l:e,c:t,h:r})=>{const o=t*Math.cos(r*Math.PI/180),a=t*Math.sin(r*Math.PI/180),n=(e+.3963377774*o+.2158037573*a)**3,s=(e-.1055613458*o-.0638541728*a)**3,u=(e-.0894841775*o-1.291485548*a)**3;return[4.0767416621*n-3.3077115913*s+.2309699292*u,-1.2684380046*n+2.6097574011*s-.3413193965*u,-.0041960863*n-.7034186147*s+1.707614701*u]},x=e=>e.every(t=>t>=-1e-6&&t<=1+1e-6),oe=e=>{const t={...e,l:Math.min(1,Math.max(0,e.l))};let r=M(t);if(!x(r)){let o=0,a=t.c;for(let n=0;n<24;n+=1){const s=(o+a)/2;x(M({...t,c:s}))?o=s:a=s}r=M({...t,c:o})}return"#"+r.map(o=>Y(ne(Math.min(1,Math.max(0,o))))).join("").toUpperCase()},v=(e,t,r,o)=>{const a=y(e),n=r==="light"?1:0,s=o?y(o):a,u=Math.abs(s.l-n),i=u>1e-6?s.c/u:0,c=t/Math.sqrt(1+i*i),d=r==="light"?a.l-c:a.l+c;return oe({l:d,c:i*Math.abs(d-n),h:s.h})},p=(e,t)=>(e==null?void 0:e[t])??null,se=(e,t,r,o,a)=>{const n=p(e.values,r),s=p(a.card.values,r),u=o[r];if(!n||!s||!u)return null;const i=g(s);if(t!=="fill"){const c=(C,f)=>{const D=p(C,r);return D?t==="text"?D.toUpperCase():g(D,i):f},d=t==="text"?n.toUpperCase():g(n,i),h=c(e.hover,d),F=c(e.active,d);return{rest:d,hover:h,hover2:h,active:F,hoverActive:c(e.hoverActive,F)}}return ue(n,u.mode,{stepFactor:u.stepFactor,cardHex:i,primaryHex:p(a.primary.values,r),selectionHex:p(a.selection.values,r),achromatic:re(e.name)})},ie=(e,t,r,o)=>{if(!e)return null;const a=y(e).c<G;return v(e,t,r,a?o:void 0)},ue=(e,t,r={})=>{const o=g(r.cardHex??(t==="light"?"#FFFFFF":"#000000")),a=g(e,o),n=ee*(r.stepFactor??te[t]),s=r.selectionHex?g(r.selectionHex,a):null,u=r.primaryHex?g(r.primaryHex,o):void 0,i=ie(s,n,t,u);if(r.achromatic||y(a).c<G){if(!u)return{rest:a,hover:null,hover2:null,active:s,hoverActive:i};const d=v(a,n,t,u);return{rest:a,hover:d,hover2:v(d,n,t,u),active:s,hoverActive:i}}const c=v(a,n,t);return{rest:a,hover:c,hover2:v(c,n,t),active:s,hoverActive:i}},ce=(e,t,r,o=j(K(e.name)))=>{const a={};for(const n of W)a[n]=se(e,o,n,t,r);return a},le=(e,t,r,o)=>{const a=new Map,n={};for(const[s,u]of Object.entries(e)){const i=t[u.source];if(!i)throw new Error(`Нет семантического токена ${u.source} для ${s}`);const c=u.usage??j(K(i.name)),d=`${u.source}/${c}`;let h=a.get(d);h||(h=ce(i,r,o,c),a.set(d,h));const F=h;n[s]=Object.fromEntries(W.map(C=>{var f;return[C,((f=F[C])==null?void 0:f[u.state])??null]}))}return n},S=["highContrastLight","highContrastDark"],R=e=>{const t=k[e];return t.stepFactor??(t.mode==="dark"?1.2:1)},de=e=>{const t={...k};S.forEach(a=>{t[a]={...k[a],stepFactor:e[a]}});const r=le({...X,...z},{...w,...q},t,Q),o=a=>Object.fromEntries(Object.entries(r).map(([n,s])=>[n,s[a]]).filter(([,n])=>typeof n=="string"));return Object.fromEntries(S.map(a=>[a,o(a)]))},L={control:{type:"range",min:.5,max:2.5,step:.05}},et={title:"Локальные компоненты/TableCanvas/ColoringStates",tags:["!autodocs"],args:{hoverRow:!0,highlightActiveType:"row",cellsSelectionMode:"range-cell",checkboxSelecting:!0,editingEnabled:!0,rowMarkers:!0,mergedCells:!0,hcLightStepFactor:R("highContrastLight"),hcDarkStepFactor:R("highContrastDark")},argTypes:{hcLightStepFactor:{name:"множитель шага: контрастная светлая",...L},hcDarkStepFactor:{name:"множитель шага: контрастная тёмная",...L},hoverRow:{name:"hoverEffects.row",control:"boolean"},highlightActiveType:{name:"highlightActiveType",control:"inline-radio",options:["row","disabled"]},cellsSelectionMode:{name:"cellsSelection.mode",control:"inline-radio",options:["range-cell","multi-range-cell","cell","disabled"]},checkboxSelecting:{name:"selecting (чекбоксы)",control:"boolean"},editingEnabled:{name:"editing (редактирование)",control:"boolean"},rowMarkers:{name:"rowMarkers (нумерация)",control:"boolean"},mergedCells:{name:"объединённые строки (Отдел, Команда)",control:"boolean"}}},b=({row:e,column:t})=>{var r;return((r=e.values.find(o=>o.columnId===t.key))==null?void 0:r.value)??""},he={Critical:"bgCellNegative",High:"bgCellWarning",Medium:"bgCellInfo",Low:"bgCellPositive"},ge=(e,t)=>{const r=he[e];return r?{bgCell:t[r]}:void 0},P=["Продажи","Разработка","Поддержка","Финансы"],I=["Север","Юг","Запад"],me=e=>e.map((t,r)=>({...t,dept:P[Math.floor(r/12)%P.length]??"",team:I[Math.floor(r/4)%I.length]??""})),E={name:"Состояния цветов (универсальный)",render:e=>{const[t,r]=m.useState(()=>me(V(0,40))),o=m.useState(()=>new Set),a=m.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`строк: ${t.length}`}]}],[t.length]),n=m.useMemo(()=>[{key:"dept",name:"Отдел",width:130,renderSummaryCell:b},{key:"team",name:"Команда",width:120,renderSummaryCell:b},{key:"id",name:"ID",width:70,renderSummaryCell:b},{key:"task",name:"Задача (редактируемая, ошибка на id % 7 = 0)",width:320,renderSummaryCell:b,editingCell:{component:"inputString",editable:!0,error:{value:i=>Number(i.id)%7===0}}},{key:"priority",name:"Приоритет (статусный цвет)",width:220,themeOverride:({row:i,theme:c})=>ge(i.priority,c)},{key:"complete",name:"% (редактируемая)",width:160,editingCell:{component:"inputNumber",editable:!0}},{key:"issueType",name:"Тип",width:140},{key:"developer",name:"Разработчик",width:220}],[]),s={highContrastLight:e.hcLightStepFactor,highContrastDark:e.hcDarkStepFactor},u=`${s.highContrastLight}/${s.highContrastDark}`;return m.useMemo(()=>{const i=de(s);S.forEach(c=>{H(c,{colors:i[c],stepFactor:s[c]})})},[u]),m.useEffect(()=>()=>S.forEach(i=>H(i,void 0)),[]),U.jsxDEV(Z,{tableConfig:{containerStyle:{height:"560px"},hoverEffects:{row:e.hoverRow},summaryRows:{showDefault:!0,showInControl:!1},highlightActiveType:e.highlightActiveType,cellsSelection:{mode:e.cellsSelectionMode},...e.mergedCells&&{mergeCells:{mergeByCellValues:["dept","team"]}},...e.rowMarkers&&{rowMarkers:{startIndex:1}},...e.checkboxSelecting&&{selecting:{state:o,rowKeyGetter:i=>i.id}},...e.editingEnabled&&{editing:{onRowsChange:i=>r([...i]),rowKeyGetter:i=>i.id,defaultEnabled:!0}}},columnConfig:n,bottomSummaryRows:a,rows:t},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColoringStates/TableCanvas.coloringStates.stories.tsx",lineNumber:244,columnNumber:7},void 0)}};var N,_,O;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Состояния цветов (универсальный)',
  render: args => {
    const [rows, setRows] = useState<StandRow[]>(() => withBlocks(createRows(0, 40)));
    const selectingState = useState<ReadonlySet<string | number>>(() => new Set());

    // Итоговая строка: красится bgHeader, hover/подсветку не получает.
    const bottomSummaryRows = useMemo((): SummaryRow[] => [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`строк: \${rows.length}\`
      }]
    }], [rows.length]);
    const columnConfig = useMemo((): ColumnConfig<StandRow, SummaryRow>[] => [{
      key: 'dept',
      name: 'Отдел',
      width: 130,
      renderSummaryCell
    }, {
      key: 'team',
      name: 'Команда',
      width: 120,
      renderSummaryCell
    }, {
      key: 'id',
      name: 'ID',
      width: 70,
      renderSummaryCell
    }, {
      key: 'task',
      name: 'Задача (редактируемая, ошибка на id % 7 = 0)',
      width: 320,
      renderSummaryCell,
      editingCell: {
        component: 'inputString',
        editable: true,
        error: {
          value: row => Number(row.id) % 7 === 0
        }
      }
    }, {
      key: 'priority',
      name: 'Приоритет (статусный цвет)',
      width: 220,
      themeOverride: ({
        row,
        theme
      }) => priorityBgCell(row.priority, theme)
    }, {
      key: 'complete',
      name: '% (редактируемая)',
      width: 160,
      editingCell: {
        component: 'inputNumber',
        editable: true
      }
    }, {
      key: 'issueType',
      name: 'Тип',
      width: 140
    }, {
      key: 'developer',
      name: 'Разработчик',
      width: 220
    }], []);

    // Палитра контрастных тем с множителями из ползунков. Подмена ставится
    // до отрисовки таблицы, а key пересоздаёт таблицу, чтобы тема собралась
    // заново с новыми цветами.
    const factors = {
      highContrastLight: args.hcLightStepFactor,
      highContrastDark: args.hcDarkStepFactor
    };
    const paletteKey = \`\${factors.highContrastLight}/\${factors.highContrastDark}\`;
    useMemo(() => {
      const palette = buildHcPalette(factors);
      HC_THEMES.forEach(theme => {
        setTablePaletteOverride(theme, {
          colors: palette[theme],
          stepFactor: factors[theme]
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paletteKey]);
    useEffect(() => () => HC_THEMES.forEach(theme => setTablePaletteOverride(theme, undefined)), []);
    return <TableCanvas key={paletteKey} tableConfig={{
      containerStyle: {
        height: '560px'
      },
      hoverEffects: {
        row: args.hoverRow
      },
      summaryRows: {
        showDefault: true,
        showInControl: false
      },
      highlightActiveType: args.highlightActiveType,
      cellsSelection: {
        mode: args.cellsSelectionMode
      },
      ...(args.mergedCells && {
        mergeCells: {
          mergeByCellValues: ['dept', 'team']
        }
      }),
      ...(args.rowMarkers && {
        rowMarkers: {
          startIndex: 1
        }
      }),
      ...(args.checkboxSelecting && {
        selecting: {
          state: selectingState,
          rowKeyGetter: (r: StandRow) => r.id
        }
      }),
      ...(args.editingEnabled && {
        editing: {
          onRowsChange: (newRows: StandRow[]) => setRows([...newRows]),
          rowKeyGetter: (r: StandRow) => r.id,
          defaultEnabled: true
        }
      })
    }} columnConfig={columnConfig} bottomSummaryRows={bottomSummaryRows} rows={rows} />;
  }
}`,...(O=(_=E.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const tt=["ColoringStates"];export{E as ColoringStates,tt as __namedExportsOrder,et as default};
