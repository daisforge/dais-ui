import{b as u}from"./react-UEdzNlUe.js";import{E as t}from"./EmptyState-BVPgIYqR.js";import{P as Cu}from"./PageTitle-CK0h6pWV.js";import{s as i}from"./constants-D9pWgtfS.js";import{d2 as Bu,cG as Fu,cE as Au}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{D as ku}from"./DocPair-DZl9SYu9.js";import{M as B,a as wu}from"./Measure-xndn83Cc.js";import{e as ju}from"./emptyStateImages-UAX5ldD7.js";import{d as Vu,t as hu}from"./@salutejs/sdds-finai-CCc2M82T.js";import{a7 as zu}from"./@salutejs/plasma-icons-D87bzLqR.js";const Lu={title:"Композиции/EmptyState/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}},msw:{handlers:ju}}},s=({children:e})=>u.jsxDEV(hu,{style:{color:Au,marginBottom:i.x8},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:32,columnNumber:3},void 0),k={padding:i.x16,borderRadius:i.x8,backgroundColor:Fu},h=e=>({display:"grid",gridTemplateColumns:`repeat(auto-fit, minmax(${e}px, 1fr))`,gap:i.x12}),a=(e,n=!1)=>({type:"button",props:{text:e,view:"accent",contentLeft:n?u.jsxDEV(zu,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:49,columnNumber:54},void 0):void 0}}),o=e=>({type:"button",props:{text:e,view:"secondary"}}),r=(e,n="accent")=>({type:"link",props:{text:e,view:n}}),w=[["no-content","Нет контента"],["not-found","Ничего не найдено"],["loading","Загрузка"],["life-circle","Жизненный цикл"],["need-access","Нужен доступ"],["no-access","Нет доступа"],["success","Успех"]],j=[["400","400"],["401","401"],["403","403"],["404","404"],["409","409"],["500","500"],["502","502"],["503","503"],["unidentified","Неопознанная ошибка"]],Iu=Object.fromEntries([...w,...j]),Mu=(e,n)=>n===0?[]:e==="S"?[r("Создать отчёт")]:e==="M"?[o("Создать отчёт")]:n===2?[o("Обновить"),a("Создать отчёт")]:[a("Создать отчёт")],m={name:"Живая настройка",args:{Size:"M","3D Icon":"no-content",Title:"Отчётов пока нет",Subtitle:!0,Buttons:1,"Extra button":!1},argTypes:{Size:{control:"inline-radio",options:["S","M","L"],description:"Размер Empty State"},"3D Icon":{control:{type:"select",labels:Iu},options:[...w,...j].map(([e])=>e),description:"Иллюстрация над заголовком: 3D Icon или Error 3D Icon"},Title:{control:"text",description:"Заголовок"},Subtitle:{control:"boolean",description:"Описание под заголовком"},Buttons:{control:"inline-radio",options:[0,1,2],description:"Число кнопок. Две кнопки только в L. Уровень кнопки по размеру: S Accent Link, M Secondary Basic, L Accent Basic"},"Extra button":{control:"boolean",description:"Дополнительная кнопка под рядом кнопок, только в L",if:{arg:"Size",eq:"L"}}},render:e=>u.jsxDEV(t,{size:e.Size.toLowerCase(),variant:e["3D Icon"],title:e.Title,subtitle:e.Subtitle?"Здесь вы можете создавать отчёты и работать над ними":void 0,buttons:Mu(e.Size,e.Buttons),extraButton:e.Size==="L"&&e["Extra button"]?r("Справка","default"):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:150,columnNumber:5},void 0)},F=[{a:".emptyState__icon",b:".emptyState__title",dir:"v"},{a:".emptyState__title",b:".emptyState__subtitle",dir:"v"},{a:".emptyState__subtitle",b:".emptyState__buttons",dir:"v"},{a:".emptyState__buttons > :first-child",b:".emptyState__buttons > :nth-child(2)",dir:"h"},{a:".emptyState__buttons",b:".emptyState__extraButton",dir:"v"}],d={name:"Отступы на живом компоненте",render:()=>u.jsxDEV("div",{style:{display:"grid",gap:i.x24},children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"S"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:176,columnNumber:9},void 0),u.jsxDEV(B,{gaps:F,children:u.jsxDEV(t,{size:"s",variant:"no-content",title:"Пока ничего нет",subtitle:"Когда появятся, вы найдёте их здесь",buttons:[r("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:178,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:177,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:175,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"M"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:188,columnNumber:9},void 0),u.jsxDEV(B,{gaps:F,children:u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[o("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:190,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:189,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:187,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"L"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:200,columnNumber:9},void 0),u.jsxDEV(B,{gaps:F,children:u.jsxDEV(t,{size:"l",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[o("Обновить"),a("Создать отчёт")],extraButton:r("Справка","default")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:202,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:201,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:199,columnNumber:7},void 0),u.jsxDEV(wu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:212,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:174,columnNumber:5},void 0)},l={name:"S",render:()=>u.jsxDEV("div",{style:{...k,maxWidth:360},children:u.jsxDEV(t,{size:"s",variant:"no-content",title:"Пока ничего нет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:223,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:222,columnNumber:5},void 0)},c={name:"M",render:()=>u.jsxDEV(t,{size:"m",variant:"no-content",title:"[Отчётов] пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:231,columnNumber:5},void 0)},p={name:"L",render:()=>u.jsxDEV(t,{size:"l",variant:"no-content",title:"[Отчётов] пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:238,columnNumber:5},void 0)},V=({items:e})=>u.jsxDEV("div",{style:h(150),children:e.map(([n,C])=>u.jsxDEV("div",{style:{textAlign:"center"},children:u.jsxDEV(t,{size:"s",variant:n,title:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:248,columnNumber:9},void 0)},n,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:247,columnNumber:7},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:245,columnNumber:3},void 0),E={name:"3D Icon и Error 3D Icon",render:()=>u.jsxDEV("div",{style:{display:"grid",gap:i.x24},children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"3D Icon, размер S"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:259,columnNumber:9},void 0),u.jsxDEV(V,{items:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:260,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:258,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Error 3D Icon, размер S"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:263,columnNumber:9},void 0),u.jsxDEV(V,{items:j},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:264,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:262,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Одна иллюстрация в размерах S, M и L"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:267,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",alignItems:"flex-end",gap:i.x24,flexWrap:"wrap"},children:["s","m","l"].map(e=>u.jsxDEV(t,{size:e,variant:"no-content"},e,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:270,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:268,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:266,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:257,columnNumber:5},void 0)},g={name:"Subtitle",render:()=>u.jsxDEV("div",{style:h(300),children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Subtitle включён"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:283,columnNumber:9},void 0),u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:284,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:282,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Subtitle выключен"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:287,columnNumber:9},void 0),u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:288,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:286,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:281,columnNumber:5},void 0)},x={name:"Когда нужна кнопка",render:()=>u.jsxDEV("div",{style:h(280),children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Кнопка нужна: пользователь может создать отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:301,columnNumber:9},void 0),u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[o("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:302,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:300,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Кнопка не нужна: пользователь не может повлиять на пустое состояние"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:311,columnNumber:9},void 0),u.jsxDEV(t,{size:"m",variant:"success",title:"Отчётов пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:312,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:310,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Кнопка не нужна: контент добавляют на других страницах"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:315,columnNumber:9},void 0),u.jsxDEV(t,{size:"m",variant:"no-content",title:"Избранных сервисов пока нет",subtitle:"Добавляйте сервисы в избранное с помощью кнопки «Добавить в избранное»"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:316,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:314,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:299,columnNumber:5},void 0)},S={name:"Пара: Accent Basic Button",render:()=>u.jsxDEV(ku,{goodText:"Accent Basic Button в Empty State L",badText:"Accent Basic Button в Empty State M",good:u.jsxDEV(t,{size:"l",variant:"no-content",title:"[Справочников] пока нет",subtitle:"Здесь вы можете [создавать справочники] и работать над ними",buttons:[a("[Создать справочник]",!0)]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:334,columnNumber:9},void 0),bad:u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[a("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:343,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:330,columnNumber:5},void 0)},b={name:"Accent Link Button в M",render:()=>u.jsxDEV("div",{style:{display:"grid",gap:i.x24},children:[u.jsxDEV(Cu,{title:"Отчёты",rightSlot:({buttonSize:e})=>u.jsxDEV(Vu,{size:e,view:"accent",children:"Создать отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:362,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:359,columnNumber:7},void 0),u.jsxDEV("div",{style:k,children:u.jsxDEV(t,{size:"m",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[r("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:368,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:367,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:358,columnNumber:5},void 0)},f={name:"Accent Link Button в S",render:()=>u.jsxDEV("div",{style:{...k,maxWidth:360},children:u.jsxDEV(t,{size:"s",variant:"no-content",title:"Пока ничего нет",buttons:[r("Создать отчёт")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:384,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:383,columnNumber:5},void 0)},y={name:"Кнопки в L",render:()=>u.jsxDEV(t,{size:"l",variant:"no-content",title:"Отчётов пока нет",subtitle:"Здесь вы можете создавать отчёты и работать над ними",buttons:[o("Обновить"),a("Создать отчёт")],extraButton:r("Справка","default")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:392,columnNumber:5},void 0)},A=({title:e,children:n,style:C})=>u.jsxDEV("div",{style:{...k,display:"flex",flexDirection:"column",...C},children:[e?u.jsxDEV(hu,{style:{fontWeight:600,marginBottom:i.x8},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:407,columnNumber:14},void 0):null,u.jsxDEV("div",{style:{flex:1,display:"flex"},children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:408,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:406,columnNumber:3},void 0),N={name:"Пара: пустой левый блок",render:()=>u.jsxDEV(ku,{goodText:"Одно Empty State L на всю контентную часть страницы",badText:"Пустое состояние и в левом, и в центральном блоке",good:u.jsxDEV(A,{style:{minHeight:420},children:u.jsxDEV(t,{size:"l",centered:!0,variant:"no-content",title:"[Справочников] пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:420,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:419,columnNumber:9},void 0),bad:u.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"140px 1fr",gap:i.x8,minHeight:420},children:[u.jsxDEV(A,{title:"Справочники",children:u.jsxDEV(t,{size:"s",centered:!0,variant:"no-content",title:"Пока ничего нет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:432,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:431,columnNumber:11},void 0),u.jsxDEV(A,{children:u.jsxDEV(t,{size:"m",centered:!0,variant:"no-content",title:"[Справочников] пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:435,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:434,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:430,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:415,columnNumber:5},void 0)},D={name:"Пустой левый блок: с кнопкой и без",render:()=>u.jsxDEV("div",{style:h(320),children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Пользователь может добавить контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:448,columnNumber:9},void 0),u.jsxDEV(t,{size:"l",variant:"no-content",title:"[Справочников] пока нет",subtitle:"Здесь вы можете [создавать справочники] и работать над ними",buttons:[a("[Создать справочник]",!0)]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:449,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:447,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"Пользователь не может добавить контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:458,columnNumber:9},void 0),u.jsxDEV(t,{size:"l",variant:"no-content",title:"[Справочников] пока нет",subtitle:"Когда появятся, вы найдёте их здесь"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:459,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:457,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:446,columnNumber:5},void 0)},v={name:"Фон под Empty State",render:()=>u.jsxDEV("div",{style:h(320),children:[u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"На сером фоне страницы"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:470,columnNumber:9},void 0),u.jsxDEV("div",{style:{padding:i.x16,borderRadius:i.x8,backgroundColor:Bu,border:"1px solid rgba(8, 8, 8, 0.12)",minHeight:520,display:"flex"},children:u.jsxDEV(t,{size:"l",centered:!0,variant:"no-content",title:"[Справочников] пока нет",subtitle:"Здесь вы можете [создавать справочники] и работать над ними",buttons:[a("[Создать справочник]",!0)]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:472,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:471,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:469,columnNumber:7},void 0),u.jsxDEV("div",{children:[u.jsxDEV(s,{children:"В белом блоке"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:483,columnNumber:9},void 0),u.jsxDEV("div",{style:{...k,minHeight:520,display:"flex"},children:u.jsxDEV(t,{size:"l",centered:!0,variant:"no-content",title:"[Справочников] пока нет",subtitle:"Здесь вы можете [создавать справочники] и работать над ними",buttons:[a("[Создать справочник]",!0)]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:485,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:484,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:482,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/EmptyState/EmptyState.examples.stories.tsx",lineNumber:468,columnNumber:5},void 0)};var z,L,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Живая настройка',
  args: {
    Size: 'M',
    '3D Icon': 'no-content',
    Title: 'Отчётов пока нет',
    Subtitle: true,
    Buttons: 1,
    'Extra button': false
  },
  argTypes: {
    Size: {
      control: 'inline-radio',
      options: ['S', 'M', 'L'],
      description: 'Размер Empty State'
    },
    '3D Icon': {
      control: {
        type: 'select',
        labels: LABELS
      },
      options: [...ILLUSTRATIONS, ...ERRORS].map(([v]) => v),
      description: 'Иллюстрация над заголовком: 3D Icon или Error 3D Icon'
    },
    Title: {
      control: 'text',
      description: 'Заголовок'
    },
    Subtitle: {
      control: 'boolean',
      description: 'Описание под заголовком'
    },
    Buttons: {
      control: 'inline-radio',
      options: [0, 1, 2],
      description: 'Число кнопок. Две кнопки только в L. Уровень кнопки по размеру: S Accent Link, M Secondary Basic, L Accent Basic'
    },
    'Extra button': {
      control: 'boolean',
      description: 'Дополнительная кнопка под рядом кнопок, только в L',
      if: {
        arg: 'Size',
        eq: 'L'
      }
    }
  },
  render: args => <EmptyState size={args.Size.toLowerCase() as 's' | 'm' | 'l'} variant={args['3D Icon']} title={args.Title} subtitle={args.Subtitle ? 'Здесь вы можете создавать отчёты и работать над ними' : undefined} buttons={buttonsFor(args.Size, args.Buttons)} extraButton={args.Size === 'L' && args['Extra button'] ? link('Справка', 'default') : undefined} />
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var M,_,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <div style={{
    display: 'grid',
    gap: s.x24
  }}>
      <div>
        <Caption>S</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState size="s" variant="no-content" title="Пока ничего нет" subtitle="Когда появятся, вы найдёте их здесь" buttons={[link('Создать отчёт')]} />
        </Measure>
      </div>
      <div>
        <Caption>M</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[secondary('Создать отчёт')]} />
        </Measure>
      </div>
      <div>
        <Caption>L</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState size="l" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[secondary('Обновить'), accent('Создать отчёт')]} extraButton={link('Справка', 'default')} />
        </Measure>
      </div>
      <MeasureLegend />
    </div>
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var P,R,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'S',
  render: () => <div style={{
    ...card,
    maxWidth: 360
  }}>
      <EmptyState size="s" variant="no-content" title="Пока ничего нет" />
    </div>
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var W,H,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'M',
  render: () => <EmptyState size="m" variant="no-content" title="[Отчётов] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
}`,...(G=(H=c.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var U,q,$;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'L',
  render: () => <EmptyState size="l" variant="no-content" title="[Отчётов] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
}`,...($=(q=p.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '3D Icon и Error 3D Icon',
  render: () => <div style={{
    display: 'grid',
    gap: s.x24
  }}>
      <div>
        <Caption>3D Icon, размер S</Caption>
        <IllustrationGrid items={ILLUSTRATIONS} />
      </div>
      <div>
        <Caption>Error 3D Icon, размер S</Caption>
        <IllustrationGrid items={ERRORS} />
      </div>
      <div>
        <Caption>Одна иллюстрация в размерах S, M и L</Caption>
        <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: s.x24,
        flexWrap: 'wrap'
      }}>
          {(['s', 'm', 'l'] as const).map(size => <EmptyState key={size} size={size} variant="no-content" />)}
        </div>
      </div>
    </div>
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Subtitle',
  render: () => <div style={grid(300)}>
      <div>
        <Caption>Subtitle включён</Caption>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
      <div>
        <Caption>Subtitle выключен</Caption>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" />
      </div>
    </div>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var uu,eu,tu;x.parameters={...x.parameters,docs:{...(uu=x.parameters)==null?void 0:uu.docs,source:{originalSource:`{
  name: 'Когда нужна кнопка',
  render: () => <div style={grid(280)}>
      <div>
        <Caption>Кнопка нужна: пользователь может создать отчёт</Caption>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[secondary('Создать отчёт')]} />
      </div>
      <div>
        <Caption>Кнопка не нужна: пользователь не может повлиять на пустое состояние</Caption>
        <EmptyState size="m" variant="success" title="Отчётов пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
      <div>
        <Caption>Кнопка не нужна: контент добавляют на других страницах</Caption>
        <EmptyState size="m" variant="no-content" title="Избранных сервисов пока нет" subtitle="Добавляйте сервисы в избранное с помощью кнопки «Добавить в избранное»" />
      </div>
    </div>
}`,...(tu=(eu=x.parameters)==null?void 0:eu.docs)==null?void 0:tu.source}}};var su,iu,nu;S.parameters={...S.parameters,docs:{...(su=S.parameters)==null?void 0:su.docs,source:{originalSource:`{
  name: 'Пара: Accent Basic Button',
  render: () => <DocPair goodText="Accent Basic Button в Empty State L" badText="Accent Basic Button в Empty State M" good={<EmptyState size="l" variant="no-content" title="[Справочников] пока нет" subtitle="Здесь вы можете [создавать справочники] и работать над ними" buttons={[accent('[Создать справочник]', true)]} />} bad={<EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[accent('Создать отчёт')]} />} />
}`,...(nu=(iu=S.parameters)==null?void 0:iu.docs)==null?void 0:nu.source}}};var au,ru,ou;b.parameters={...b.parameters,docs:{...(au=b.parameters)==null?void 0:au.docs,source:{originalSource:`{
  name: 'Accent Link Button в M',
  render: () => <div style={{
    display: 'grid',
    gap: s.x24
  }}>
      <PageTitle title="Отчёты" rightSlot={({
      buttonSize
    }: {
      buttonSize: 's' | 'xs';
    }) => <Button size={buttonSize} view="accent">
            Создать отчёт
          </Button>} />
      <div style={card}>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[link('Создать отчёт')]} />
      </div>
    </div>
}`,...(ou=(ru=b.parameters)==null?void 0:ru.docs)==null?void 0:ou.source}}};var mu,du,lu;f.parameters={...f.parameters,docs:{...(mu=f.parameters)==null?void 0:mu.docs,source:{originalSource:`{
  name: 'Accent Link Button в S',
  render: () => <div style={{
    ...card,
    maxWidth: 360
  }}>
      <EmptyState size="s" variant="no-content" title="Пока ничего нет" buttons={[link('Создать отчёт')]} />
    </div>
}`,...(lu=(du=f.parameters)==null?void 0:du.docs)==null?void 0:lu.source}}};var cu,pu,Eu;y.parameters={...y.parameters,docs:{...(cu=y.parameters)==null?void 0:cu.docs,source:{originalSource:`{
  name: 'Кнопки в L',
  render: () => <EmptyState size="l" variant="no-content" title="Отчётов пока нет" subtitle="Здесь вы можете создавать отчёты и работать над ними" buttons={[secondary('Обновить'), accent('Создать отчёт')]} extraButton={link('Справка', 'default')} />
}`,...(Eu=(pu=y.parameters)==null?void 0:pu.docs)==null?void 0:Eu.source}}};var gu,xu,Su;N.parameters={...N.parameters,docs:{...(gu=N.parameters)==null?void 0:gu.docs,source:{originalSource:`{
  name: 'Пара: пустой левый блок',
  render: () => <DocPair goodText="Одно Empty State L на всю контентную часть страницы" badText="Пустое состояние и в левом, и в центральном блоке" good={<Block style={{
    minHeight: 420
  }}>
          <EmptyState size="l" centered variant="no-content" title="[Справочников] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
        </Block>} bad={<div style={{
    display: 'grid',
    gridTemplateColumns: '140px 1fr',
    gap: s.x8,
    minHeight: 420
  }}>
          <Block title="Справочники">
            <EmptyState size="s" centered variant="no-content" title="Пока ничего нет" />
          </Block>
          <Block>
            <EmptyState size="m" centered variant="no-content" title="[Справочников] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
          </Block>
        </div>} />
}`,...(Su=(xu=N.parameters)==null?void 0:xu.docs)==null?void 0:Su.source}}};var bu,fu,yu;D.parameters={...D.parameters,docs:{...(bu=D.parameters)==null?void 0:bu.docs,source:{originalSource:`{
  name: 'Пустой левый блок: с кнопкой и без',
  render: () => <div style={grid(320)}>
      <div>
        <Caption>Пользователь может добавить контент</Caption>
        <EmptyState size="l" variant="no-content" title="[Справочников] пока нет" subtitle="Здесь вы можете [создавать справочники] и работать над ними" buttons={[accent('[Создать справочник]', true)]} />
      </div>
      <div>
        <Caption>Пользователь не может добавить контент</Caption>
        <EmptyState size="l" variant="no-content" title="[Справочников] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
    </div>
}`,...(yu=(fu=D.parameters)==null?void 0:fu.docs)==null?void 0:yu.source}}};var Nu,Du,vu;v.parameters={...v.parameters,docs:{...(Nu=v.parameters)==null?void 0:Nu.docs,source:{originalSource:`{
  name: 'Фон под Empty State',
  render: () => <div style={grid(320)}>
      <div>
        <Caption>На сером фоне страницы</Caption>
        <div style={{
        padding: s.x16,
        borderRadius: s.x8,
        backgroundColor: backgroundPrimary,
        border: '1px solid rgba(8, 8, 8, 0.12)',
        minHeight: 520,
        display: 'flex'
      }}>
          <EmptyState size="l" centered variant="no-content" title="[Справочников] пока нет" subtitle="Здесь вы можете [создавать справочники] и работать над ними" buttons={[accent('[Создать справочник]', true)]} />
        </div>
      </div>
      <div>
        <Caption>В белом блоке</Caption>
        <div style={{
        ...card,
        minHeight: 520,
        display: 'flex'
      }}>
          <EmptyState size="l" centered variant="no-content" title="[Справочников] пока нет" subtitle="Здесь вы можете [создавать справочники] и работать над ними" buttons={[accent('[Создать справочник]', true)]} />
        </div>
      </div>
    </div>
}`,...(vu=(Du=v.parameters)==null?void 0:Du.docs)==null?void 0:vu.source}}};const _u=["Playground","SpacingLive","SizeS","SizeM","SizeL","Illustrations","Subtitle","WhenButton","PairAccent","LinkInM","LinkInS","ButtonsL","PairLeftBlock","LeftBlockButtons","Background"],Ju=Object.freeze(Object.defineProperty({__proto__:null,Background:v,ButtonsL:y,Illustrations:E,LeftBlockButtons:D,LinkInM:b,LinkInS:f,PairAccent:S,PairLeftBlock:N,Playground:m,SizeL:p,SizeM:c,SizeS:l,SpacingLive:d,Subtitle:g,WhenButton:x,__namedExportsOrder:_u,default:Lu},Symbol.toStringTag,{value:"Module"}));export{y as B,Ju as E,E as I,b as L,m as P,d as S,x as W,l as a,c as b,p as c,g as d,S as e,f,N as g,D as h,v as i};
