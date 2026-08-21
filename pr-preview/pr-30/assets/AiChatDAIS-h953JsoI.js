import{d as s,r as u,j as A}from"./react-D2T61mpp.js";import{t as fe,g as xe,h as ee,j as se,d as ge,f as ye,e as Ne,c5 as V,c2 as ke,c3 as Ae}from"./vendor-CJM8PqzG.js";import{g as M}from"./generateId-BYGzgL1y.js";import{M as Ce}from"./ModalDFConfirmation-Ds_lg030.js";import{T as De}from"./TextArea-CN7iu1hv.js";import{p as B,n as ve,I as Se,cI as Ie,x as we,T,br as _e}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as g,C as L}from"./styled-components-0ntxfV3u.js";import{C as je}from"./CopyButton-qrhC8tzg.js";import{W as Ee,I as te,L as Ve,p as Me,H as Y,g as Be,h as Te,i as Le,a as Re,t as _,b as ze}from"./@salutejs/sdds-finai-C2SF6wx_.js";import{hT as He,gs as $e,sG as ie,lt as Pe,mz as Oe,vz as X}from"./@salutejs/plasma-icons-D_nZvWxn.js";import{S as m,v as qe}from"./react-syntax-highlighter-BXiAWQES.js";import{M as Fe}from"./react-markdown-BdPtveOs.js";import{r as Ge}from"./rehype-sanitize-Lda3OHu7.js";import{r as Qe}from"./remark-gfm-0qiqThJv.js";import{G as Ke}from"./styles-JDjmXKjw.js";import"./react-is-Clcustum.js";import"./tslib-De9GV7Vy.js";import"./ModalDF-DMf5DVk0.js";import"./constants-B3b49qmU.js";import"./Container-DnB8hj3o.js";import"./utils-D6duxx9X.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-g-29Fp6U.js";import"./sharedUtilsInputs-CojTWdX8.js";import"./sharedUtilsCopy-CJCD6cY9.js";import"./mixins-CYGAQ7Ug.js";import"./@salutejs/plasma-typo-2r2YTX2b.js";import"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-Bu0hKhen.js";import"./@salutejs-ds/sdds_finai_high_contrast-CPXOkEAe.js";const S="typing",J={dev:"Например: Какие пропсы у Button?",editorial:"Например: Как оформить ссылку в тексте?",design:"Например: Какие отступы у карточки?"},Ye={dev:"Задай вопрос про компоненты библиотеки",editorial:"Задай вопрос про оформление текстов",design:"Задай вопрос про гайды, дизайн паттерны, компоненты дизайна"},Xe={dev:[{text:"Какие пропсы у Button?"},{text:"Как активировать фичу фильтрации в TableCanvas?"},{text:"Пример модального окна ModalDF"}],editorial:[{text:"Как правильно сформулировать текст ошибки?"},{text:'Как назвать вторичную кнопку, если основная — "Отменить"?'},{text:"Как оформить заголовок модального окна?"}],design:[{text:"Как переключить расположение файлов в Attach — в строку или столбец?"},{text:"Как в Switch добавить текст-пояснение (подпись) рядом с переключателем?"},{text:"Как в Pagination добавить возможность быстрого перехода на страницу по номеру?"}]},Je="https://sberchat.bbbb.ru/#/chat/group28033339",ae={contentType:"dais-chat-contentType"},x={messages:[],chatHistory:[],inputValue:"",contentType:localStorage.getItem(ae.contentType)||"dev"},oe=[{value:"dev",label:"Разработка"},{value:"editorial",label:"Редполитика"},{value:"design",label:"Дизайн (atoms)"}];function R({text:t}){return s.jsxDEV(je,{size:"xxs",view:"clear",text:"Скопировать ответ",textOnCopied:"Скопировано",copyText:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/CopyMessageButton.tsx",lineNumber:5,columnNumber:5},this)}try{R.displayName="CopyMessageButton",R.__docgenInfo={description:"",displayName:"CopyMessageButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}function z({code:t}){const[r,n]=u.useState(!1),h=()=>{navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})};return s.jsxDEV(Ee,{view:"onDark",style:{position:"absolute",bottom:"8px",right:"8px"},children:s.jsxDEV(te,{size:"xxs",view:"clear",onClick:h,title:r?"Скопировано":"Скопировать код",onMouseEnter:c=>{c.currentTarget.style.opacity="1"},onMouseLeave:c=>{c.currentTarget.style.opacity="0.6"},children:r?s.jsxDEV(He,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/CopyCodeAbsoluteButton.tsx",lineNumber:38,columnNumber:11},this):s.jsxDEV($e,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/CopyCodeAbsoluteButton.tsx",lineNumber:40,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/CopyCodeAbsoluteButton.tsx",lineNumber:25,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/CopyCodeAbsoluteButton.tsx",lineNumber:17,columnNumber:5},this)}try{z.displayName="CopyCodeAbsoluteButton",z.__docgenInfo={description:"",displayName:"CopyCodeAbsoluteButton",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}}}}}catch{}m.registerLanguage("tsx",fe);m.registerLanguage("jsx",xe);m.registerLanguage("typescript",ee);m.registerLanguage("ts",ee);m.registerLanguage("javascript",se);m.registerLanguage("js",se);m.registerLanguage("bash",ge);m.registerLanguage("json",ye);m.registerLanguage("css",Ne);const U={h1:g(Le)({marginBlock:"6px 10px"}),h2:g(Te)({marginBlock:"6px 8px"}),h3:g(Be)({marginBlock:"4px 6px"}),h4:g(Y)({marginBlock:"4px 6px"}),h5:g(Y)({marginBlock:"2px 4px"}),p:g(Me)({marginBlock:"2px 2px"}),a:({children:t,...r})=>s.jsxDEV(Ve,{view:"accent",target:"_blank",rel:"noopener noreferrer",...r,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MDComponents.tsx",lineNumber:36,columnNumber:5},void 0),table:g.table({width:"100%",marginBlock:10,borderSpacing:0,borderRadius:6,boxShadow:`0 0 0 0.5px ${B}`,overflow:"hidden","th, td":{padding:"12px",textAlign:"left",borderBottom:`0.5px solid ${B}`,borderRight:`0.5px solid ${B}`},"th:last-child, td:last-child":{borderRight:"none"},"tr:last-child td":{borderBottom:"none"},th:{backgroundColor:"#ECF6FC",fontWeight:"bold"}}),code({className:t,children:r,...n}){const h=/language-(\w+)/.exec(t||""),c=h?h[1]:"",b=String(r).replace(/\n$/,"");return c?s.jsxDEV("div",{style:{position:"relative"},children:[s.jsxDEV(m,{style:qe,language:c,PreTag:"div",customStyle:{margin:"8px 0",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",lineHeight:"1.5"},children:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MDComponents.tsx",lineNumber:72,columnNumber:11},this),s.jsxDEV(z,{code:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MDComponents.tsx",lineNumber:86,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MDComponents.tsx",lineNumber:71,columnNumber:9},this):s.jsxDEV("code",{className:t,style:{background:"rgba(0,0,0,0.08)",padding:"1px 5px",borderRadius:"4px",fontSize:"13px"},...n,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MDComponents.tsx",lineNumber:92,columnNumber:7},this)}};try{h1.displayName="h1",h1.__docgenInfo={description:"",displayName:"h1",props:{}}}catch{}try{h2.displayName="h2",h2.__docgenInfo={description:"",displayName:"h2",props:{}}}catch{}try{h3.displayName="h3",h3.__docgenInfo={description:"",displayName:"h3",props:{}}}catch{}try{h4.displayName="h4",h4.__docgenInfo={description:"",displayName:"h4",props:{}}}catch{}try{h5.displayName="h5",h5.__docgenInfo={description:"",displayName:"h5",props:{}}}catch{}try{p.displayName="p",p.__docgenInfo={description:"",displayName:"p",props:{}}}catch{}try{a.displayName="a",a.__docgenInfo={description:"",displayName:"a",props:{node:{defaultValue:null,description:"passed when `passNode` is on.",name:"node",required:!1,type:{name:"Element"}}}}}catch{}try{table.displayName="table",table.__docgenInfo={description:"",displayName:"table",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{code.displayName="code",code.__docgenInfo={description:"",displayName:"code",props:{node:{defaultValue:null,description:"passed when `passNode` is on.",name:"node",required:!1,type:{name:"Element"}}}}}catch{}var Z;const Ue={...V,attributes:{...V.attributes,code:[...((Z=V.attributes)==null?void 0:Z.code)||[],["className",/^language-./]]}};function We(t){return t.toLowerCase().includes("отсутствует в документации")}function Ze(t){switch(t){case"dev":return"разработки";case"editorial":return"редполитики";case"design":return"дизайна";default:return""}}function H({message:t,contentType:r,onSwitchContentType:n,send:h}){var y,D;const c=t.role==="assistant",b=(D=(y=t.className)==null?void 0:y.includes)==null?void 0:D.call(y,S),[C,j]=u.useState(oe.filter(l=>l.value!==r&&!l.disabled).map(l=>l.value)),d=c&&!b&&t.text&&n&&t.userQuestion&&We(t.text),E=c&&!b&&t.text&&!d;return s.jsxDEV("div",{className:`message ${t.role}`,children:[s.jsxDEV("div",{className:"bubble",children:[b&&s.jsxDEV("div",{className:S,children:[s.jsxDEV("span",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:85,columnNumber:13},this),s.jsxDEV("span",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:86,columnNumber:13},this),s.jsxDEV("span",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:87,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:84,columnNumber:11},this),c&&t.text?s.jsxDEV(Fe,{remarkPlugins:[Qe],components:U,rehypePlugins:[[Ge,Ue]],children:t.text},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:91,columnNumber:11},this):t.text,E&&s.jsxDEV("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"4px"},children:s.jsxDEV(R,{text:t.text},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:109,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:102,columnNumber:11},this),d&&C.length>0&&s.jsxDEV(s.Fragment,{children:[s.jsxDEV(Re,{className:"no-info-divider"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:116,columnNumber:13},this),s.jsxDEV("div",{className:"no-info-text",children:["Можно задать этот вопрос в"," ",s.jsxDEV(U.a,{href:Je,children:"чате поддержки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:119,columnNumber:15},this)," ","или:"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:117,columnNumber:13},this),s.jsxDEV("div",{className:"no-info-chips",children:C.map(l=>s.jsxDEV(_,{pilled:!0,size:"xs",text:`Искать в разделе ${Ze(l)}`,view:"accent",appearance:"transparent",hasClear:!1,onClick:()=>{n==null||n(l),j([]),t.userQuestion&&h(t.userQuestion)},contentRight:s.jsxDEV(ie,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:139,columnNumber:33},this)},l,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:124,columnNumber:17},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:122,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:115,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:82,columnNumber:7},this),t.sources&&t.sources.length>0&&s.jsxDEV("div",{className:"sources",children:t.sources.map(l=>s.jsxDEV(_,{className:"source-tag",text:`${l.componentName} · ${l.chunkType}`,size:"xxs",title:l.meta.url,view:"accent",appearance:"transparent",onClick:()=>{window.open(l.meta.url,"_blank","noopener,noreferrer")},hasClear:!1,contentRight:s.jsxDEV(Pe,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:161,columnNumber:29},this)},l.componentName,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:149,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:147,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/components/MessageBubble.tsx",lineNumber:81,columnNumber:5},this)}try{H.displayName="MessageBubble",H.__docgenInfo={description:"",displayName:"MessageBubble",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"Message"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!0,type:{name:"enum",value:[{value:'"dev"'},{value:'"editorial"'},{value:'"design"'}]}},onSwitchContentType:{defaultValue:null,description:"",name:"onSwitchContentType",required:!1,type:{name:"(type: ContentType) => void"}},send:{defaultValue:null,description:"",name:"send",required:!0,type:{name:"(text?: string) => void"}}}}}catch{}const es=()=>{const[t,r]=u.useState(!1),[n,h]=u.useState(x.messages),[c,b]=u.useState(x.chatHistory),[C,j]=u.useState(x.inputValue),[d,E]=u.useState(x.contentType),[y,D]=u.useState(!1),l=n.length===0,$=u.useRef(null),P=u.useRef(null),v=e=>{h(o=>{let i=o;return typeof e!="function"?i=e:i=e(o),x.messages=i.filter(k=>{var f;return!((f=k.className)!=null&&f.includes(S))}),i})},O=e=>{b(o=>{let i=o;return typeof e!="function"?i=e:i=e(o),x.chatHistory=i,i})},q=e=>{j(o=>{let i=o;return typeof e!="function"?i=e:i=e(o),x.inputValue=i,i})},F=e=>{E(o=>{let i=o;return typeof e!="function"?i=e:i=e(o),x.contentType=i,localStorage.setItem(ae.contentType,i??""),i})};u.useEffect(()=>{var e;(e=$.current)==null||e.scrollIntoView({behavior:"smooth"})},[n]);const re=e=>{F(e||null)},I=u.useCallback((e,o,i,k)=>{v(f=>[...f,{id:M(),role:e,text:o,sources:k,userQuestion:i}])},[]),ne=u.useCallback(()=>{const e=`${S}-${M()}`;return v(o=>[...o,{id:e,className:S,role:"assistant",text:"",sources:void 0,userQuestion:null}]),e},[]),G=u.useCallback(e=>{v(o=>o.filter(i=>i.id!==e))},[]),w=async e=>{const o=(e??C).trim();if(!o||y)return;q(""),D(!0),n.length===0&&v([]),I("user",o,"");const i=ne();try{const f=await fetch("/ai-rag-api/v0/rag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:M(),message:o,chat_history:c,content_type:d})}),N=await f.json();G(i);const K=N.detail??N.message??"неизвестная ошибка";f.status>=400&&K?I("assistant",`⚠️ Ошибка: ${JSON.stringify(K)}`,null):(I("assistant",N.response,o,N.sources),O(be=>[...be,{role:"human",content:o},{role:"ai",content:N.response}]))}catch{G(i),I("assistant","⚠️ Не удалось связаться с сервером.",null)}D(!1)},le=e=>{w(e)},ue=e=>{F(e)},ce=()=>{v([]),O([]),r(!1)},de=e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),w())},me=e=>{q(e.target.value)},pe=J[d||"dev"]||J.dev,[he,Q]=u.useState(!1);return u.useEffect(()=>{const e=P.current;if(!e)return;const o=new ResizeObserver(i=>{i.forEach(k=>{const N=Math.round(k.contentRect.height)>52;Q(!!N)})});return o.observe(e),()=>o.disconnect()},[]),s.jsxDEV(s.Fragment,{children:[s.jsxDEV(Ke,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:295,columnNumber:7},void 0),s.jsxDEV(ss,{className:"sb-unstyled",children:s.jsxDEV("div",{className:"chat-wrapper",children:[s.jsxDEV("div",{className:"chat-header",children:[s.jsxDEV("span",{children:"◈"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:299,columnNumber:13},void 0)," DAIS ассистент FinAI"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:298,columnNumber:11},void 0),s.jsxDEV("div",{className:"messages",children:[n.length===0&&s.jsxDEV("div",{className:"empty-state",children:[s.jsxDEV(Oe,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:305,columnNumber:17},void 0),s.jsxDEV("div",{children:Ye[d||"dev"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:306,columnNumber:17},void 0),l&&s.jsxDEV("div",{className:"quick-chips",children:(Xe[d||"dev"]||[]).map(e=>s.jsxDEV(_,{view:"accent",appearance:"transparent",pilled:!0,size:"xs",text:e.text,hasClear:!1,onClick:()=>le(e.text)},e.text,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:311,columnNumber:25},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:308,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:304,columnNumber:15},void 0),n.map(e=>s.jsxDEV(H,{message:e,contentType:d,onSwitchContentType:ue,send:w},e.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:328,columnNumber:15},void 0)),s.jsxDEV("div",{ref:$},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:336,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:302,columnNumber:11},void 0),s.jsxDEV("div",{className:"bottom-bar",children:[s.jsxDEV("div",{className:"filter-bar",children:oe.map(e=>s.jsxDEV(_,{size:"xs",value:e.value??"",text:e.label,view:d===e.value||d===(e==null?void 0:e.value2)?"accent":"clear",hasClear:!1,onClick:()=>re(e.value||null),disabled:e.disabled},e.value,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:342,columnNumber:17},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:340,columnNumber:13},void 0),s.jsxDEV("div",{className:"bottom-bar-right",children:s.jsxDEV(ze,{disabled:n.length===0,view:"secondary",size:"xxs",className:"clear-history-btn",onClick:()=>r(!0),title:"Очистить историю поиска",type:"button",contentRight:s.jsxDEV(X,{color:"inherit",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:368,columnNumber:31},void 0),children:"Очистить историю поиска"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:360,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:359,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:339,columnNumber:11},void 0),s.jsxDEV("div",{className:"chat-input-area",children:s.jsxDEV("div",{className:"input-wrapper",ref:P,children:[s.jsxDEV(De,{id:"input",autoResize:!0,maxAuto:5,value:C,placeholder:pe,onKeyDown:de,onChange:me},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:377,columnNumber:15},void 0),s.jsxDEV("div",{className:"send-button-wrapper",style:{"--offsetBottom":he?"6px":"4.5px"},children:s.jsxDEV(te,{view:"accent",size:"xs",id:"send",onClick:()=>w(),type:"button",disabled:y,children:s.jsxDEV(ie,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:402,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:394,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:386,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:376,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:375,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:297,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:296,columnNumber:7},void 0),s.jsxDEV(Ce,{view:"negative",icon:s.jsxDEV(X,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:411,columnNumber:15},void 0),opened:t,onClose:()=>r(!1),content:{header:"Очистить историю поиска?",body:"Будут удалены все вопросы агенту и ответы на них. Восстановить историю поиска не получится",mainButton:{text:"Очистить",view:"negative",onClick:ce},secondaryButton:{text:"Отменить",onClick:()=>r(!1)}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:409,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.tsx",lineNumber:294,columnNumber:5},void 0)},ss=g.div`
  & :where(*:not([class])),
  & :where(*:not([class])::before),
  & :where(*:not([class])::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  height: 100%;
  max-height: 87dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .chat-wrapper {
    width: 100%;
    max-width: 780px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .chat-header {
    padding: 16px 0px;

    display: flex;
    align-items: center;
    gap: 8px;

    ${()=>L(_e)}
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 85%;
  }

  .message.user {
    align-self: flex-end;
    align-items: flex-end;
  }

  .message.assistant {
    align-self: flex-start;
    align-items: flex-start;
  }

  .bubble {
    max-width: 100%; // нужен, чтобы внутренний контент не растягивал контейнеры
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.6;
    ${()=>L(T)}
  }
  .no-info-divider {
    margin-block: 8px;
  }
  .no-info-text {
    margin-top: 6px;
  }
  .no-info-chips {
    margin-top: 12px;
    display: flex;
    gap: 8px;
  }

  .message.user .bubble {
    background: ${()=>ve};
    color: ${()=>Se};

    border-bottom-right-radius: 4px;
  }

  .message.assistant .bubble {
    background: ${()=>Ie};
    color: ${()=>we};
    border-bottom-left-radius: 4px;
  }

  .bubble code {
    background: rgba(0, 0, 0, 0.08);
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 13px;
  }

  .bubble p {
    margin-bottom: 6px;
  }

  .bubble p:last-child {
    margin-bottom: 0;
  }

  .bubble ul,
  .bubble ol {
    padding-left: 18px;
    margin-bottom: 6px;
  }

  .sources {
    display: flex;
    flex-direction: column;
    align-items: start;

    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }

  .typing {
    display: flex;
    gap: 4px;
    background: #f4f4f5;
    border-radius: 12px;
    border-bottom-left-radius: 4px;

    align-items: center;
    height: ${T.lineHeight};
  }

  .typing span {
    width: 7px;
    height: 7px;
    background: #9ca3af;
    border-radius: 50%;
    animation: bounce 1.2s infinite;
  }

  .typing span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-6px);
    }
  }

  /* Блок с чипами и кнопкой очистки внизу над инпутом */
  .bottom-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-top: 1px solid #eee;

    .filter-bar {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .bottom-bar-right {
      display: flex;
      align-items: center;
      margin-left: auto;
      flex-shrink: 0;
    }
  }

  .quick-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Инпут с кнопкой отправки внутри */
  .chat-input-area {
    display: flex;

    .input-wrapper {
      display: flex;
      align-items: flex-end;
      gap: 0;
      width: 100%;
      position: relative;

      .send-button-wrapper {
        position: absolute;
        bottom: var(--offsetBottom, 4px);
        right: 6px;
      }
    }
  }

  .empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #9ca3af;

    ${()=>L(T)}
  }
`;function W(t){return A.jsxs(A.Fragment,{children:[A.jsx(Ae,{title:"DAIS"}),`
`,A.jsx(es,{})]})}function Es(t={}){const{wrapper:r}={...ke(),...t.components};return r?A.jsx(r,{...t,children:A.jsx(W,{...t})}):W()}export{Es as default};
