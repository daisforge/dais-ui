import{j as e,r as c}from"./react-CAOzMBF_.js";import{v as he,t as ge,w as Z,p as ee,l as fe,q as ye,n as be,ck as B,cg as _e,ch as ve}from"./vendor-CvBXOjQ8.js";import{g as L}from"./generateId-BYGzgL1y.js";import{M as je}from"./ModalDFConfirmation-DMUamcLU.js";import{T as Ce}from"./TextArea-DNeH37UW.js";import{r as R,q as we,cv as Ne,dA as ke,z as Se,cz as z,dB as Te}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as y,A}from"./styled-components-BAnxJVQm.js";import{C as Ie}from"./CopyButton-BUYFYCNm.js";import{Y as Me,I as te,L as Be,m as Le,H as Y,e as Re,f as ze,g as Ae,r as Ve,v as T,t as Ee}from"./@salutejs/sdds-finai-CrMFu5No.js";import{hX as He,gw as De,sV as ae,lx as Pe,mF as $e,vX as K}from"./@salutejs/plasma-icons-DBF9uERs.js";import{S as x,v as qe}from"./react-syntax-highlighter--qB1ehEi.js";import{M as Oe}from"./react-markdown-9YOwSH1P.js";import{r as Fe}from"./rehype-sanitize-bzoXl1Bj.js";import{r as Ge}from"./remark-gfm-DFcwPO4v.js";import{G as Qe}from"./styles-CHSrWWAF.js";import"./react-is-vVGXX3JE.js";import"./@tanstack/react-virtual-Dq53HtnB.js";import"./tslib-DoU9Jm1N.js";import"./ModalDF-DGdz2a6t.js";import"./constants-ChwOYBdp.js";import"./IconButton-LdqUAZ_9.js";import"./utils-D7J-sht1.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DBguVV_s.js";import"./Container-CZvn4hI_.js";import"./sharedUtilsInputs-DgLlM9Qo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./mixins-DAqqInVM.js";import"./@salutejs/plasma-typo-_m8jB2K3.js";const N="typing",X={dev:"Например: Какие пропсы у Button?",editorial:"Например: Как оформить ссылку в тексте?",design:"Например: Какие отступы у карточки?"},Ye={dev:"Задай вопрос про компоненты библиотеки",editorial:"Задай вопрос про оформление текстов",design:"Задай вопрос про гайды, дизайн паттерны, компоненты дизайна"},Ke={dev:[{text:"Какие пропсы у Button?"},{text:"Как активировать фичу фильтрации в TableCanvas?"},{text:"Пример модального окна ModalDF"}],editorial:[{text:"Как правильно сформулировать текст ошибки?"},{text:"Как назвать вторичную кнопку, если основная — «Отменить»?"},{text:"Как оформить заголовок модального окна?"}],design:[{text:"Как переключить расположение файлов в Attach — в строку или столбец?"},{text:"Как в Switch добавить текст-пояснение (подпись) рядом с переключателем?"},{text:"Как в Pagination добавить возможность быстрого перехода на страницу по номеру?"}]},Xe="https://sberchat.bbbb.ru/#/chat/group28033339",se={contentType:"dais-chat-contentType"},f={messages:[],chatHistory:[],inputValue:"",contentType:localStorage.getItem(se.contentType)||"dev"},ne=[{value:"dev",label:"Разработка"},{value:"editorial",label:"Редполитика"},{value:"design",label:"Дизайн (atoms)"}];function V({text:s}){return e.jsx(Ie,{size:"xxs",view:"clear",text:"Скопировать ответ",textOnCopied:"Скопировано",copyText:s})}try{V.displayName="CopyMessageButton",V.__docgenInfo={description:"",displayName:"CopyMessageButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}function E({code:s}){const[i,o]=c.useState(!1),m=()=>{navigator.clipboard.writeText(s).then(()=>{o(!0),setTimeout(()=>o(!1),2e3)})};return e.jsx(Me,{view:"onDark",style:{position:"absolute",bottom:"8px",right:"8px"},children:e.jsx(te,{size:"xxs",view:"clear",onClick:m,title:i?"Скопировано":"Скопировать код",onMouseEnter:d=>{d.currentTarget.style.opacity="1"},onMouseLeave:d=>{d.currentTarget.style.opacity="0.6"},children:i?e.jsx(He,{size:"xs",color:"inherit"}):e.jsx(De,{size:"xs",color:"inherit"})})})}try{E.displayName="CopyCodeAbsoluteButton",E.__docgenInfo={description:"",displayName:"CopyCodeAbsoluteButton",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}}}}}catch{}x.registerLanguage("tsx",he);x.registerLanguage("jsx",ge);x.registerLanguage("typescript",Z);x.registerLanguage("ts",Z);x.registerLanguage("javascript",ee);x.registerLanguage("js",ee);x.registerLanguage("bash",fe);x.registerLanguage("json",ye);x.registerLanguage("css",be);const J={h1:y(Ae)({marginBlock:"6px 10px"}),h2:y(ze)({marginBlock:"6px 8px"}),h3:y(Re)({marginBlock:"4px 6px"}),h4:y(Y)({marginBlock:"4px 6px"}),h5:y(Y)({marginBlock:"2px 4px"}),p:y(Le)({marginBlock:"2px 2px"}),a:({children:s,...i})=>e.jsx(Be,{view:"accent",target:"_blank",rel:"noopener noreferrer",...i,children:s}),table:y.table({width:"100%",marginBlock:10,borderSpacing:0,borderRadius:6,boxShadow:`0 0 0 0.5px ${R}`,overflow:"hidden","th, td":{padding:"12px",textAlign:"left",borderBottom:`0.5px solid ${R}`,borderRight:`0.5px solid ${R}`},"th:last-child, td:last-child":{borderRight:"none"},"tr:last-child td":{borderBottom:"none"},th:{backgroundColor:"#ECF6FC",fontWeight:"bold"}}),code({className:s,children:i,...o}){const m=/language-(\w+)/.exec(s||""),d=m?m[1]:"",h=String(i).replace(/\n$/,"");return d?e.jsxs("div",{style:{position:"relative"},children:[e.jsx(x,{style:qe,language:d,PreTag:"div",customStyle:{margin:"8px 0",padding:"12px 16px",borderRadius:"8px",fontSize:"13px",lineHeight:"1.5"},children:h}),e.jsx(E,{code:h})]}):e.jsx("code",{className:s,style:{background:"rgba(0,0,0,0.08)",padding:"1px 5px",borderRadius:"4px",fontSize:"13px"},...o,children:i})}};try{h1.displayName="h1",h1.__docgenInfo={description:"",displayName:"h1",props:{}}}catch{}try{h2.displayName="h2",h2.__docgenInfo={description:"",displayName:"h2",props:{}}}catch{}try{h3.displayName="h3",h3.__docgenInfo={description:"",displayName:"h3",props:{}}}catch{}try{h4.displayName="h4",h4.__docgenInfo={description:"",displayName:"h4",props:{}}}catch{}try{h5.displayName="h5",h5.__docgenInfo={description:"",displayName:"h5",props:{}}}catch{}try{p.displayName="p",p.__docgenInfo={description:"",displayName:"p",props:{}}}catch{}try{a.displayName="a",a.__docgenInfo={description:"",displayName:"a",props:{node:{defaultValue:null,description:"passed when `passNode` is on.",name:"node",required:!1,type:{name:"Element"}}}}}catch{}try{table.displayName="table",table.__docgenInfo={description:"",displayName:"table",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{code.displayName="code",code.__docgenInfo={description:"",displayName:"code",props:{node:{defaultValue:null,description:"passed when `passNode` is on.",name:"node",required:!1,type:{name:"Element"}}}}}catch{}var W;const Je={...B,attributes:{...B.attributes,code:[...((W=B.attributes)==null?void 0:W.code)||[],["className",/^language-./]]}};function Ue(s){return s.toLowerCase().includes("отсутствует в документации")}function We(s){switch(s){case"dev":return"разработки";case"editorial":return"редполитики";case"design":return"дизайна";default:return""}}function H({message:s,contentType:i,onSwitchContentType:o,send:m}){var b,C;const d=s.role==="assistant",h=(C=(b=s.className)==null?void 0:b.includes)==null?void 0:C.call(b,N),[j,I]=c.useState(ne.filter(l=>l.value!==i&&!l.disabled).map(l=>l.value)),u=d&&!h&&s.text&&o&&s.userQuestion&&Ue(s.text),M=d&&!h&&s.text&&!u;return e.jsxs("div",{className:`message ${s.role}`,children:[e.jsxs("div",{className:"bubble",children:[h&&e.jsxs("div",{className:N,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),d&&s.text?e.jsx(Oe,{remarkPlugins:[Ge],components:J,rehypePlugins:[[Fe,Je]],children:s.text}):s.text,M&&e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"4px"},children:e.jsx(V,{text:s.text})}),u&&j.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ve,{className:"no-info-divider"}),e.jsxs("div",{className:"no-info-text",children:["Можно задать этот вопрос в"," ",e.jsx(J.a,{href:Xe,children:"чате поддержки"})," ","или:"]}),e.jsx("div",{className:"no-info-chips",children:j.map(l=>e.jsx(T,{pilled:!0,size:"xs",text:`Искать в разделе ${We(l)}`,view:"accent",appearance:"transparent",hasClear:!1,onClick:()=>{o==null||o(l),I([]),s.userQuestion&&m(s.userQuestion)},contentRight:e.jsx(ae,{size:"xs",color:"inherit"})},l))})]})]}),s.sources&&s.sources.length>0&&e.jsx("div",{className:"sources",children:s.sources.map(l=>e.jsx(T,{className:"source-tag",text:`${l.componentName} · ${l.chunkType}`,size:"xxs",title:l.meta.url,view:"accent",appearance:"transparent",onClick:()=>{window.open(l.meta.url,"_blank","noopener,noreferrer")},hasClear:!1,contentRight:e.jsx(Pe,{size:"xs",color:"inherit"})},l.componentName))})]})}try{H.displayName="MessageBubble",H.__docgenInfo={description:"",displayName:"MessageBubble",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"Message"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!0,type:{name:"enum",value:[{value:'"dev"'},{value:'"editorial"'},{value:'"design"'}]}},onSwitchContentType:{defaultValue:null,description:"",name:"onSwitchContentType",required:!1,type:{name:"(type: ContentType) => void"}},send:{defaultValue:null,description:"",name:"send",required:!0,type:{name:"(text?: string) => void"}}}}}catch{}const Ze=()=>{const[s,i]=c.useState(!1),[o,m]=c.useState(f.messages),[d,h]=c.useState(f.chatHistory),[j,I]=c.useState(f.inputValue),[u,M]=c.useState(f.contentType),[b,C]=c.useState(!1),l=o.length===0,D=c.useRef(null),P=c.useRef(null),w=t=>{m(r=>{let n=r;return typeof t!="function"?n=t:n=t(r),f.messages=n.filter(v=>{var g;return!((g=v.className)!=null&&g.includes(N))}),n})},$=t=>{h(r=>{let n=r;return typeof t!="function"?n=t:n=t(r),f.chatHistory=n,n})},q=t=>{I(r=>{let n=r;return typeof t!="function"?n=t:n=t(r),f.inputValue=n,n})},O=t=>{M(r=>{let n=r;return typeof t!="function"?n=t:n=t(r),f.contentType=n,localStorage.setItem(se.contentType,n??""),n})};c.useEffect(()=>{var t;(t=D.current)==null||t.scrollIntoView({behavior:"smooth"})},[o]);const re=t=>{O(t||null)},k=c.useCallback((t,r,n,v)=>{w(g=>[...g,{id:L(),role:t,text:r,sources:v,userQuestion:n}])},[]),ie=c.useCallback(()=>{const t=`${N}-${L()}`;return w(r=>[...r,{id:t,className:N,role:"assistant",text:"",sources:void 0,userQuestion:null}]),t},[]),F=c.useCallback(t=>{w(r=>r.filter(n=>n.id!==t))},[]),S=async t=>{const r=(t??j).trim();if(!r||b)return;q(""),C(!0),o.length===0&&w([]),k("user",r,"");const n=ie();try{const g=await fetch("/ai-rag-api/v0/rag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:L(),message:r,chat_history:d,content_type:u})}),_=await g.json();F(n);const Q=_.detail??_.message??"неизвестная ошибка";g.status>=400&&Q?k("assistant",`⚠️ Ошибка: ${JSON.stringify(Q)}`,null):(k("assistant",_.response,r,_.sources),$(me=>[...me,{role:"human",content:r},{role:"ai",content:_.response}]))}catch{F(n),k("assistant","⚠️ Не удалось связаться с сервером.",null)}C(!1)},oe=t=>{S(t)},le=t=>{O(t)},ce=()=>{w([]),$([]),i(!1)},de=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),S())},pe=t=>{q(t.target.value)},ue=X[u||"dev"]||X.dev,[xe,G]=c.useState(!1);return c.useEffect(()=>{const t=P.current;if(!t)return;const r=new ResizeObserver(n=>{n.forEach(v=>{const _=Math.round(v.contentRect.height)>52;G(!!_)})});return r.observe(t),()=>r.disconnect()},[]),e.jsxs(e.Fragment,{children:[e.jsx(Qe,{}),e.jsx(et,{className:"sb-unstyled",children:e.jsxs("div",{className:"chat-wrapper",children:[e.jsxs("div",{className:"chat-header",children:[e.jsx("span",{children:"◈"})," DAIS ассистент FinAI"]}),e.jsxs("div",{className:"messages",children:[o.length===0&&e.jsxs("div",{className:"empty-state",children:[e.jsx($e,{color:"inherit"}),e.jsx("div",{children:Ye[u||"dev"]}),l&&e.jsx("div",{className:"quick-chips",children:(Ke[u||"dev"]||[]).map(t=>e.jsx(T,{view:"accent",appearance:"transparent",pilled:!0,size:"xs",text:t.text,hasClear:!1,onClick:()=>oe(t.text)},t.text))})]}),o.map(t=>e.jsx(H,{message:t,contentType:u,onSwitchContentType:le,send:S},t.id)),e.jsx("div",{ref:D})]}),e.jsxs("div",{className:"bottom-bar",children:[e.jsx("div",{className:"filter-bar",children:ne.map(t=>e.jsx(T,{size:"xs",value:t.value??"",text:t.label,view:u===t.value||u===(t==null?void 0:t.value2)?"accent":"clear",hasClear:!1,onClick:()=>re(t.value||null),disabled:t.disabled},t.value))}),e.jsx("div",{className:"bottom-bar-right",children:e.jsx(Ee,{disabled:o.length===0,view:"secondary",size:"xxs",className:"clear-history-btn",onClick:()=>i(!0),title:"Очистить историю поиска",type:"button",contentRight:e.jsx(K,{color:"inherit",size:"xs"}),children:"Очистить историю поиска"})})]}),e.jsx("div",{className:"chat-input-area",children:e.jsxs("div",{className:"input-wrapper",ref:P,children:[e.jsx(Ce,{id:"input",autoResize:!0,maxAuto:5,value:j,placeholder:ue,onKeyDown:de,onChange:pe}),e.jsx("div",{className:"send-button-wrapper",style:{"--offsetBottom":xe?"6px":"4.5px"},children:e.jsx(te,{view:"accent",size:"xs",id:"send",onClick:()=>S(),type:"button",disabled:b,children:e.jsx(ae,{size:"xs",color:"inherit"})})})]})})]})}),e.jsx(je,{view:"negative",icon:e.jsx(K,{color:"inherit"}),opened:s,onClose:()=>i(!1),content:{header:"Очистить историю поиска?",body:"Будут удалены все вопросы агенту и ответы на них. Восстановить историю поиска не получится",mainButton:{text:"Очистить",view:"negative",onClick:ce},secondaryButton:{text:"Отменить",onClick:()=>i(!1)}}})]})},et=y.div`
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

    ${()=>A(Te)}
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
    ${()=>A(z)}
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
    background: ${()=>we};
    color: ${()=>Ne};

    border-bottom-right-radius: 4px;
  }

  .message.assistant .bubble {
    background: ${()=>ke};
    color: ${()=>Se};
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
    height: ${z.lineHeight};
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

    ${()=>A(z)}
  }
`;function U(s){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{title:"DAIS"}),`
`,e.jsx(Ze,{})]})}function Mt(s={}){const{wrapper:i}={..._e(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(U,{...s})}):U()}export{Mt as default};
