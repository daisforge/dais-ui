import{b as e,r as C}from"./react-UEdzNlUe.js";import{N as we}from"./NumberFormatAmount-DmFGr9W-.js";import{s as De}from"./constants-Brx3fuKM.js";import{D as Ve}from"./DocPair-cCeIXFsk.js";import{E as Be}from"./EdgeMeasure-4OBEPhyg.js";import{b as Te,a6 as je}from"./@salutejs/plasma-icons-BxPMDQ8m.js";import{k as Se}from"./@salutejs/sdds-finai-Z0nbsN1t.js";const Le={title:"Локальные компоненты/NumberFormatAmount/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}}}},ve="1234567.89",n=({initial:u=ve,clear:r=!0,width:w=300,...Ce})=>{const[Ae,A]=C.useState(u);return e.jsxDEV("div",{style:{width:w,maxWidth:"100%"},children:e.jsxDEV(we,{size:"s",thousandSeparator:" ",decimalSeparator:".",decimalScale:2,placeholder:"Сумма",...Ce,value:Ae,onChange:v=>{var V;return A(((V=v==null?void 0:v.target)==null?void 0:V.value)??"")},onClear:r?()=>A(""):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:50,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:49,columnNumber:5},void 0)},ye=({width:u=300,...r})=>e.jsxDEV("div",{style:{width:u,maxWidth:"100%"},children:e.jsxDEV(we,{size:"s",thousandSeparator:" ",placeholder:"Сумма",...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:68,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:67,columnNumber:3},void 0),o=u=>e.jsxDEV(je,{size:u==="s"?"s":"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:72,columnNumber:30},void 0),Re=({children:u})=>e.jsxDEV(Se,{style:{marginBottom:De.x4},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:75,columnNumber:3},void 0),a=(u=220)=>({display:"grid",gridTemplateColumns:`repeat(auto-fill, minmax(${u}px, 1fr))`,gap:De.x8,alignItems:"start"}),i=({caption:u,children:r})=>e.jsxDEV("div",{children:[e.jsxDEV(Re,{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:87,columnNumber:5},void 0),r]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:86,columnNumber:3},void 0),t={name:"Живая настройка",args:{Size:"s",Label:!0,"Title Caption":!1,Optional:!1,Required:!1,"Has Hint":!1,Value:"Filled",View:"default",Disabled:!1,ReadOnly:!1,LeftIcon:!1,Clear:!0,RightIcon:!1,HintInner:!1,HintOuter:!1,TB:!1,TA:!1,"Left caption":!0,"Разделитель дробной части":".","Знаков после разделителя":2},argTypes:{Size:{control:"inline-radio",options:["s","xs"],description:"Размер: 40 S или 32 XS"},Label:{control:"boolean",description:"Заголовок Title над полем"},"Title Caption":{control:"boolean",description:"Подпись справа над полем",if:{arg:"Label",truthy:!0}},Optional:{control:"boolean",description:"Пометка необязательного поля",if:{arg:"Label",truthy:!0}},Required:{control:"boolean",description:"Красная точка обязательного поля"},"Has Hint":{control:"boolean",description:"Иконка подсказки у Title",if:{arg:"Label",truthy:!0}},Value:{control:"inline-radio",options:["Empty","Filled"],description:"Пустое поле или с числом"},View:{control:"inline-radio",options:["default","positive","negative","warning"],description:"Цвет поля и подписи под ним"},Disabled:{control:"boolean",description:"Поле недоступно"},ReadOnly:{control:"boolean",description:"Только чтение"},LeftIcon:{control:"boolean",description:"Иконка слева"},Clear:{control:"boolean",description:"Крестик очистки, когда в поле есть число"},RightIcon:{control:"boolean",description:"Иконка справа"},HintInner:{control:"boolean",description:"Подсказка внутри поля, когда Label выключен",if:{arg:"Label",truthy:!1}},HintOuter:{control:"boolean",description:"Подсказка справа от поля, когда Label выключен",if:{arg:"Label",truthy:!1}},TB:{control:"boolean",description:"Текст до значения"},TA:{control:"boolean",description:"Текст после значения"},"Left caption":{control:"boolean",description:"Подпись под полем"},"Разделитель дробной части":{control:"inline-radio",options:[".",","],description:"Точка или запятая. Настраивает разработчик"},"Знаков после разделителя":{control:{type:"number",min:0,max:6},description:"Сколько знаков помещается после разделителя. Настраивает разработчик"}},render:u=>{const r=u.Label?u["Has Hint"]:u.HintInner||u.HintOuter;return e.jsxDEV(n,{initial:u.Value==="Filled"?ve:"",size:u.Size,label:u.Label?"Title":void 0,titleCaption:u.Label&&u["Title Caption"]?"Title Caption":void 0,optional:u.Label&&u.Optional,required:u.Required,hasRequiredIndicator:u.Required,hintText:r?"Подсказка":void 0,hintTargetPlacement:!u.Label&&u.HintInner?"inner":"outer",view:u.View,disabled:u.Disabled,readOnly:u.ReadOnly,contentLeft:u.LeftIcon?o(u.Size):void 0,contentRight:u.RightIcon?o(u.Size):void 0,clear:u.Clear,textBefore:u.TB?"TB":void 0,textAfter:u.TA?"TA":void 0,leftHelper:u["Left caption"]?"Left caption":void 0,decimalSeparator:u["Разделитель дробной части"],decimalScale:u["Знаков после разделителя"],width:340},[u.Value,u.Clear,u["Разделитель дробной части"],u["Знаков после разделителя"]].join("-"),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:178,columnNumber:7},void 0)}},s=".input-wrapper",Oe=[{a:"label",ae:"bottom",b:s,be:"top"},{a:s,ae:"top",b:s,be:"bottom",aside:!0},{a:s,ae:"bottom",b:".nf-helper",be:"top"},{a:s,ae:"left",b:".nf-left",be:"left"},{a:".nf-left",ae:"right",b:"input",be:"left"},{a:".nf-right",ae:"right",b:s,be:"right"}],He=[{a:s,ae:"left",b:"input",be:"left"},{a:s,ae:"top",b:s,be:"bottom",aside:!0}],D=({size:u,plain:r=!1})=>e.jsxDEV(Be,{gaps:r?He:Oe,children:e.jsxDEV("div",{style:{padding:"4px 48px 24px 0"},children:r?e.jsxDEV(n,{size:u,width:280,clear:!1,label:u==="s"?"40 S":"32 XS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:228,columnNumber:9},void 0):e.jsxDEV(n,{size:u,width:280,clear:!1,label:u==="s"?"40 S":"32 XS",contentLeft:e.jsxDEV("span",{className:"nf-left",style:{display:"inline-flex"},children:o(u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:235,columnNumber:24},void 0),contentRight:e.jsxDEV("span",{className:"nf-right",style:{display:"inline-flex"},children:o(u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:236,columnNumber:25},void 0),leftHelper:e.jsxDEV("span",{className:"nf-helper",style:{display:"block"},children:"Left caption"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:237,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:230,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:226,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:225,columnNumber:3},void 0),m={name:"Отступы на живом компоненте",render:()=>e.jsxDEV("div",{style:a(330),children:[e.jsxDEV(D,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:248,columnNumber:7},void 0),e.jsxDEV(D,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:249,columnNumber:7},void 0),e.jsxDEV(D,{size:"s",plain:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:250,columnNumber:7},void 0),e.jsxDEV(D,{size:"xs",plain:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:251,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:247,columnNumber:5},void 0)},l={name:"Label",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"С Label",children:e.jsxDEV(n,{label:"Title",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:263,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:262,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Без Label",children:e.jsxDEV(n,{width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:266,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:265,columnNumber:7},void 0),e.jsxDEV(i,{caption:"С Title Caption",children:e.jsxDEV(n,{label:"Title",titleCaption:"Title Caption",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:269,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:268,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:261,columnNumber:5},void 0)},d={name:"Optional",render:()=>e.jsxDEV(n,{label:"Title",optional:!0,width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:277,columnNumber:17},void 0)},c={name:"Required",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"С Label",children:e.jsxDEV(n,{label:"Title",required:!0,hasRequiredIndicator:!0,width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:285,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:284,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Без Label",children:e.jsxDEV(n,{required:!0,hasRequiredIndicator:!0,width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:288,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:287,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:283,columnNumber:5},void 0)},p={name:"Пара: одна подсказка",render:()=>e.jsxDEV(Ve,{goodText:"Одна подсказка у Title",badText:"Две подсказки: у Title и внутри поля",good:e.jsxDEV(n,{label:"Title",hintText:"Подсказка",width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:302,columnNumber:13},void 0),bad:e.jsxDEV(n,{label:"Title",hintText:"Подсказка",width:260,contentRight:e.jsxDEV(Te,{size:"s",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:308,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:304,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:299,columnNumber:5},void 0)},b={name:"Value",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"Empty, 40 S",children:e.jsxDEV(n,{label:"Title",initial:"",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:322,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:321,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Filled, 40 S",children:e.jsxDEV(n,{label:"Title",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:325,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:324,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Empty, 32 XS",children:e.jsxDEV(n,{size:"xs",label:"Title",initial:"",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:328,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:327,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Filled, 32 XS",children:e.jsxDEV(n,{size:"xs",label:"Title",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:331,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:330,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:320,columnNumber:5},void 0)},N={name:"View",render:()=>e.jsxDEV("div",{style:a(),children:["default","positive","negative","warning"].map(u=>e.jsxDEV(i,{caption:u,children:e.jsxDEV(n,{view:u,leftHelper:"Left caption",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:343,columnNumber:11},void 0)},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:342,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:340,columnNumber:5},void 0)},qe=()=>{const u=C.useRef(null);return C.useLayoutEffect(()=>{var r,w;(w=(r=u.current)==null?void 0:r.querySelector("input"))==null||w.focus({preventScroll:!0})},[]),e.jsxDEV("div",{ref:u,children:e.jsxDEV(n,{label:"Focused",contentRight:o("s"),width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:360,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:359,columnNumber:5},void 0)},f={name:"Focused, Disabled, ReadOnly",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(qe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:369,columnNumber:7},void 0),e.jsxDEV(n,{label:"Disabled",disabled:!0,contentRight:o("s"),width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:370,columnNumber:7},void 0),e.jsxDEV(n,{label:"ReadOnly",readOnly:!0,contentRight:o("s"),width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:371,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:368,columnNumber:5},void 0)},g={name:"LeftIcon, ContentRight, HintOuter",render:()=>e.jsxDEV("div",{style:a(240),children:[e.jsxDEV(i,{caption:"LeftIcon",children:e.jsxDEV(n,{contentLeft:o("s"),clear:!1,width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:383,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:382,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Clear, RightIcon и HintInner",children:e.jsxDEV(n,{contentRight:o("s"),hintText:"Подсказка",hintTargetPlacement:"inner",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:386,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:385,columnNumber:7},void 0),e.jsxDEV(i,{caption:"HintOuter",children:e.jsxDEV(n,{hintText:"Подсказка",hintTargetPlacement:"outer",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:389,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:388,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:381,columnNumber:5},void 0)},x={name:"TB и TA",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"Со значением",children:e.jsxDEV(n,{textBefore:"TB",textAfter:"TA",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:400,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:399,columnNumber:7},void 0),e.jsxDEV(i,{caption:"С плейсхолдером",children:e.jsxDEV(n,{textBefore:"TB",textAfter:"TA",initial:"",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:403,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:402,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Сумма в рублях",children:e.jsxDEV(n,{label:"Сумма",textAfter:"₽",initial:"150000",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:406,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:405,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:398,columnNumber:5},void 0)},F={name:"Дробная часть",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"Разделитель точка",children:e.jsxDEV(n,{label:"Сумма",initial:"1234.5",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:419,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:418,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Разделитель запятая",children:e.jsxDEV(n,{label:"Сумма",decimalSeparator:",",initial:"1234,5",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:422,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:421,columnNumber:7},void 0),e.jsxDEV(i,{caption:"2 знака: 1234567.899 показано так",children:e.jsxDEV(n,{label:"Сумма",initial:"1234567.899",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:425,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:424,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Фиксированные 2 знака: 12 показано так",children:e.jsxDEV(n,{label:"Сумма",fixedDecimalScale:!0,initial:"12",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:428,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:427,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:417,columnNumber:5},void 0)},h={name:"Отрицательные числа",render:()=>e.jsxDEV("div",{style:a(),children:[e.jsxDEV(i,{caption:"Отрицательное число",children:e.jsxDEV(n,{label:"Сумма",initial:"-1500",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:439,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:438,columnNumber:7},void 0),e.jsxDEV(i,{caption:"Отрицательные запрещены: минус не вводится",children:e.jsxDEV(n,{label:"Сумма",allowNegative:!1,initial:"",placeholder:"Попробуйте ввести -5",width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:442,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:441,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:437,columnNumber:5},void 0)},E={name:"Нули в начале",render:()=>e.jsxDEV(i,{caption:"Введите 000123 и уйдите из поля: останется 123",children:e.jsxDEV(n,{label:"Сумма",initial:"",placeholder:"000123",width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:452,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:451,columnNumber:5},void 0)},I={name:"Вставка числа",render:()=>e.jsxDEV(i,{caption:"Скопируйте 1234.56 и вставьте в поле: точка станет запятой",children:e.jsxDEV(ye,{label:"Сумма",decimalSeparator:",",decimalScale:2,width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:461,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:460,columnNumber:5},void 0)},k={name:"Максимальная длина",render:()=>e.jsxDEV(i,{caption:"Длина 5: помещается 1 234",children:e.jsxDEV(n,{label:"Сумма",maxLength:5,initial:"",placeholder:"Введите 12345",width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:470,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/NumberFormatInput/NumberFormatInput.examples.stories.tsx",lineNumber:469,columnNumber:5},void 0)};var B,T,j;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Живая настройка',
  args: {
    Size: 's',
    Label: true,
    'Title Caption': false,
    Optional: false,
    Required: false,
    'Has Hint': false,
    Value: 'Filled',
    View: 'default',
    Disabled: false,
    ReadOnly: false,
    LeftIcon: false,
    Clear: true,
    RightIcon: false,
    HintInner: false,
    HintOuter: false,
    TB: false,
    TA: false,
    'Left caption': true,
    'Разделитель дробной части': '.',
    'Знаков после разделителя': 2
  },
  argTypes: {
    Size: {
      control: 'inline-radio',
      options: ['s', 'xs'],
      description: 'Размер: 40 S или 32 XS'
    },
    Label: {
      control: 'boolean',
      description: 'Заголовок Title над полем'
    },
    'Title Caption': {
      control: 'boolean',
      description: 'Подпись справа над полем',
      if: {
        arg: 'Label',
        truthy: true
      }
    },
    Optional: {
      control: 'boolean',
      description: 'Пометка необязательного поля',
      if: {
        arg: 'Label',
        truthy: true
      }
    },
    Required: {
      control: 'boolean',
      description: 'Красная точка обязательного поля'
    },
    'Has Hint': {
      control: 'boolean',
      description: 'Иконка подсказки у Title',
      if: {
        arg: 'Label',
        truthy: true
      }
    },
    Value: {
      control: 'inline-radio',
      options: ['Empty', 'Filled'],
      description: 'Пустое поле или с числом'
    },
    View: {
      control: 'inline-radio',
      options: ['default', 'positive', 'negative', 'warning'],
      description: 'Цвет поля и подписи под ним'
    },
    Disabled: {
      control: 'boolean',
      description: 'Поле недоступно'
    },
    ReadOnly: {
      control: 'boolean',
      description: 'Только чтение'
    },
    LeftIcon: {
      control: 'boolean',
      description: 'Иконка слева'
    },
    Clear: {
      control: 'boolean',
      description: 'Крестик очистки, когда в поле есть число'
    },
    RightIcon: {
      control: 'boolean',
      description: 'Иконка справа'
    },
    HintInner: {
      control: 'boolean',
      description: 'Подсказка внутри поля, когда Label выключен',
      if: {
        arg: 'Label',
        truthy: false
      }
    },
    HintOuter: {
      control: 'boolean',
      description: 'Подсказка справа от поля, когда Label выключен',
      if: {
        arg: 'Label',
        truthy: false
      }
    },
    TB: {
      control: 'boolean',
      description: 'Текст до значения'
    },
    TA: {
      control: 'boolean',
      description: 'Текст после значения'
    },
    'Left caption': {
      control: 'boolean',
      description: 'Подпись под полем'
    },
    'Разделитель дробной части': {
      control: 'inline-radio',
      options: ['.', ','],
      description: 'Точка или запятая. Настраивает разработчик'
    },
    'Знаков после разделителя': {
      control: {
        type: 'number',
        min: 0,
        max: 6
      },
      description: 'Сколько знаков помещается после разделителя. Настраивает разработчик'
    }
  },
  render: args => {
    const hint = args.Label ? args['Has Hint'] : args.HintInner || args.HintOuter;
    return <Amount key={[args.Value, args.Clear, args['Разделитель дробной части'], args['Знаков после разделителя']].join('-')} initial={args.Value === 'Filled' ? AMOUNT : ''} size={args.Size} label={args.Label ? 'Title' : undefined} titleCaption={args.Label && args['Title Caption'] ? 'Title Caption' : undefined} optional={args.Label && args.Optional} required={args.Required} hasRequiredIndicator={args.Required} hintText={hint ? 'Подсказка' : undefined} hintTargetPlacement={!args.Label && args.HintInner ? 'inner' : 'outer'} view={args.View} disabled={args.Disabled} readOnly={args.ReadOnly} contentLeft={args.LeftIcon ? icon(args.Size) : undefined} contentRight={args.RightIcon ? icon(args.Size) : undefined} clear={args.Clear} textBefore={args.TB ? 'TB' : undefined} textAfter={args.TA ? 'TA' : undefined} leftHelper={args['Left caption'] ? 'Left caption' : undefined} decimalSeparator={args['Разделитель дробной части']} decimalScale={args['Знаков после разделителя']} width={340} />;
  }
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,L,y;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <div style={grid(330)}>
      <SpacingField size="s" />
      <SpacingField size="xs" />
      <SpacingField size="s" plain />
      <SpacingField size="xs" plain />
    </div>
}`,...(y=(L=m.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var R,O,H;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Label',
  render: () => <div style={grid()}>
      <Cell caption="С Label">
        <Amount label="Title" width={240} />
      </Cell>
      <Cell caption="Без Label">
        <Amount width={240} />
      </Cell>
      <Cell caption="С Title Caption">
        <Amount label="Title" titleCaption="Title Caption" width={240} />
      </Cell>
    </div>
}`,...(H=(O=l.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var q,z,P;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Optional',
  render: () => <Amount label="Title" optional width={260} />
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var _,X,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div style={grid()}>
      <Cell caption="С Label">
        <Amount label="Title" required hasRequiredIndicator width={240} />
      </Cell>
      <Cell caption="Без Label">
        <Amount required hasRequiredIndicator width={240} />
      </Cell>
    </div>
}`,...(M=(X=c.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var G,U,W;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Пара: одна подсказка',
  render: () => <DocPair goodText="Одна подсказка у Title" badText="Две подсказки: у Title и внутри поля" good={<Amount label="Title" hintText="Подсказка" width={260} />} bad={<Amount label="Title" hintText="Подсказка" width={260} contentRight={<IconInfoCircleOutline size="s" color="inherit" />} />} />
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Z,$,J;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Value',
  render: () => <div style={grid()}>
      <Cell caption="Empty, 40 S">
        <Amount label="Title" initial="" width={240} />
      </Cell>
      <Cell caption="Filled, 40 S">
        <Amount label="Title" width={240} />
      </Cell>
      <Cell caption="Empty, 32 XS">
        <Amount size="xs" label="Title" initial="" width={240} />
      </Cell>
      <Cell caption="Filled, 32 XS">
        <Amount size="xs" label="Title" width={240} />
      </Cell>
    </div>
}`,...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,Y;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'View',
  render: () => <div style={grid()}>
      {(['default', 'positive', 'negative', 'warning'] as const).map(view => <Cell key={view} caption={view}>
          <Amount view={view} leftHelper="Left caption" width={240} />
        </Cell>)}
    </div>
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ue,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Focused, Disabled, ReadOnly',
  render: () => <div style={grid()}>
      <FocusedAmount />
      <Amount label="Disabled" disabled contentRight={icon('s')} width={240} />
      <Amount label="ReadOnly" readOnly contentRight={icon('s')} width={240} />
    </div>
}`,...(ne=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ne.source}}};var ie,re,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'LeftIcon, ContentRight, HintOuter',
  render: () => <div style={grid(240)}>
      <Cell caption="LeftIcon">
        <Amount contentLeft={icon('s')} clear={false} width={240} />
      </Cell>
      <Cell caption="Clear, RightIcon и HintInner">
        <Amount contentRight={icon('s')} hintText="Подсказка" hintTargetPlacement="inner" width={240} />
      </Cell>
      <Cell caption="HintOuter">
        <Amount hintText="Подсказка" hintTargetPlacement="outer" width={240} />
      </Cell>
    </div>
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'TB и TA',
  render: () => <div style={grid()}>
      <Cell caption="Со значением">
        <Amount textBefore="TB" textAfter="TA" width={240} />
      </Cell>
      <Cell caption="С плейсхолдером">
        <Amount textBefore="TB" textAfter="TA" initial="" width={240} />
      </Cell>
      <Cell caption="Сумма в рублях">
        <Amount label="Сумма" textAfter="₽" initial="150000" width={240} />
      </Cell>
    </div>
}`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var me,le,de;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Дробная часть',
  render: () => <div style={grid()}>
      <Cell caption="Разделитель точка">
        <Amount label="Сумма" initial="1234.5" width={240} />
      </Cell>
      <Cell caption="Разделитель запятая">
        <Amount label="Сумма" decimalSeparator="," initial="1234,5" width={240} />
      </Cell>
      <Cell caption="2 знака: 1234567.899 показано так">
        <Amount label="Сумма" initial="1234567.899" width={240} />
      </Cell>
      <Cell caption="Фиксированные 2 знака: 12 показано так">
        <Amount label="Сумма" fixedDecimalScale initial="12" width={240} />
      </Cell>
    </div>
}`,...(de=(le=F.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,be;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Отрицательные числа',
  render: () => <div style={grid()}>
      <Cell caption="Отрицательное число">
        <Amount label="Сумма" initial="-1500" width={240} />
      </Cell>
      <Cell caption="Отрицательные запрещены: минус не вводится">
        <Amount label="Сумма" allowNegative={false} initial="" placeholder="Попробуйте ввести -5" width={240} />
      </Cell>
    </div>
}`,...(be=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Ne,fe,ge;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Нули в начале',
  render: () => <Cell caption="Введите 000123 и уйдите из поля: останется 123">
      <Amount label="Сумма" initial="" placeholder="000123" width={260} />
    </Cell>
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,Fe,he;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Вставка числа',
  render: () => <Cell caption="Скопируйте 1234.56 и вставьте в поле: точка станет запятой">
      <FreeAmount label="Сумма" decimalSeparator="," decimalScale={2} width={260} />
    </Cell>
}`,...(he=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:he.source}}};var Ee,Ie,ke;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Максимальная длина',
  render: () => <Cell caption="Длина 5: помещается 1 234">
      <Amount label="Сумма" maxLength={5} initial="" placeholder="Введите 12345" width={260} />
    </Cell>
}`,...(ke=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const ze=["Playground","SpacingLive","LabelExample","OptionalExample","RequiredExample","PairHint","ValueExample","ViewExample","States","ContentExample","TextBeforeAfter","Decimal","Negative","LeadingZeros","Paste","MaxLength"],Ze=Object.freeze(Object.defineProperty({__proto__:null,ContentExample:g,Decimal:F,LabelExample:l,LeadingZeros:E,MaxLength:k,Negative:h,OptionalExample:d,PairHint:p,Paste:I,Playground:t,RequiredExample:c,SpacingLive:m,States:f,TextBeforeAfter:x,ValueExample:b,ViewExample:N,__namedExportsOrder:ze,default:Le},Symbol.toStringTag,{value:"Module"}));export{g as C,F as D,Ze as E,l as L,k as M,h as N,d as O,t as P,c as R,m as S,x as T,b as V,p as a,N as b,f as c,E as d,I as e};
