import{j as e,r as le}from"./react-CAOzMBF_.js";import{w as $,I as X,v as K,T as J,A as Z,y as V,z as U}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{fb as G,hY as h,kX as se,jr as oe}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{H as i}from"./styled-components-DCFsnh-i.js";import{t as ue,s as Q,W as de,X as ce,J as pe,Y as W,p as M,Z as fe,S as me,x as ye,w as _e}from"./@salutejs/sdds-finai-CKhMjg07.js";import{E as he}from"./EmptyState-BCYMGuYF.js";import{a as p}from"./AiAgentPopup-zRx4ytCb.js";import{bH as xe}from"./vendor-DmWczWMC.js";function o(a){return a!=null}function _(a){return Array.isArray(a)&&a.length>0}function Ce(a){const u=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long"}),l=new Intl.DateTimeFormat("ru-RU",{hour:"2-digit",minute:"2-digit",hour12:!1}),r=new Date,t=new Map;for(const s of a){const n=new Date(s.actionDate),f=n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()?"Сегодня":u.format(n),L=l.format(n),m={status:s.status,title:s.actionTitle,time:L};let d=t.get(f);d===void 0&&(d=[],t.set(f,d)),d.push(m)}return Array.from(t,([s,n])=>({date:s,actions:n}))}const ge={DEFAULT:e.jsx(h,{size:"xs",color:J}),WAIT:e.jsx(oe,{size:"xs",color:K}),SUCCESSFUL:e.jsx(h,{size:"xs",color:X}),FAILURE:e.jsx(G,{size:"xs",color:$})},P={DEFAULT:e.jsx(h,{size:"xs",color:J}),WAIT:e.jsx(se,{size:"xs",color:K}),SUCCESSFUL:e.jsx(h,{size:"xs",color:X}),FAILURE:e.jsx(G,{size:"xs",color:$})},ve={DEFAULT:"inactive",WAIT:"active",SUCCESSFUL:"completed",FAILURE:"completed"},Ae={DEFAULT:"default",WAIT:"warning",SUCCESSFUL:"positive",FAILURE:"negative"},Te={LIFE_CYCLE:"Жизненный цикл",HISTORY:"История изменений"},x=i.div`
  min-width: 360px;
  min-height: 600px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 4px 12px 16px;
  background: ${()=>Z};
  ${({$css:a})=>a}
`,q=i.div`
  margin-top: 20px;
  min-height: 0;
  flex-direction: column;
  display: flex;
  flex: 1;
`,j=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`,S=i.div`
  overflow-y: auto;
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 12px;
`,E=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,C=i.div`
  > *:not(:first-child) {
    margin-top: 8px;
  }

  > .comment:not(:first-child) {
    margin-top: 2px;
  }
`,I=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=i.div`
  display: flex;
  gap: 4px;
`,B=i.div`
  display: flex;
  gap: 16px;
`,v=i(ue)`
  margin-top: 8px;
`,N=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: 12px;
  overflow-y: auto;
  padding-right: 12px;
`,H=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,F=i.div`
  top: 0px;
  position: sticky;
  display: flex;
  justify-content: center;
  width: 100%;
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Y=i(Q)`
  flex-shrink: 0;
  white-space: nowrap;
`;try{x.displayName="ApprovalCenterContainer",x.__docgenInfo={description:"",displayName:"ApprovalCenterContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{q.displayName="ApprovalCenterContentWrapper",q.__docgenInfo={description:"",displayName:"ApprovalCenterContentWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{j.displayName="PreviewContainer",j.__docgenInfo={description:"",displayName:"PreviewContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{S.displayName="LifeCycleContainer",S.__docgenInfo={description:"",displayName:"LifeCycleContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{E.displayName="LifeCycleAccordionTitle",E.__docgenInfo={description:"",displayName:"LifeCycleAccordionTitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{C.displayName="LifeCycleStageContent",C.__docgenInfo={description:"",displayName:"LifeCycleStageContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{I.displayName="LifeCycleAssignees",I.__docgenInfo={description:"",displayName:"LifeCycleAssignees",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{g.displayName="LifeCycleButtonsWrapper",g.__docgenInfo={description:"",displayName:"LifeCycleButtonsWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{B.displayName="LifeCycleStageButtonsWrapper",B.__docgenInfo={description:"",displayName:"LifeCycleStageButtonsWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{v.displayName="LifeCycleStyledButton",v.__docgenInfo={description:"",displayName:"LifeCycleStyledButton",props:{}}}catch{}try{N.displayName="HistoryContainer",N.__docgenInfo={description:"",displayName:"HistoryContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{H.displayName="HistoryDay",H.__docgenInfo={description:"",displayName:"HistoryDay",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{F.displayName="HistoryDate",F.__docgenInfo={description:"",displayName:"HistoryDate",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{b.displayName="HistoryActions",b.__docgenInfo={description:"",displayName:"HistoryActions",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{Y.displayName="HistoryStyledBadge",Y.__docgenInfo={description:"",displayName:"HistoryStyledBadge",props:{}}}catch{}const A=a=>{const{historyByDay:u}=a;return e.jsx(N,{children:u.map(l=>e.jsxs(H,{children:[e.jsx(F,{children:e.jsx(Q,{size:"m",text:l.date,view:"light",customColor:V,customBackgroundColor:Z})}),e.jsx(b,{children:l.actions.map(r=>e.jsx(de,{size:"s",title:r.title,subtitle:r.time,contentLeft:ge[r.status]}))})]},l.date))})};try{A.displayName="History",A.__docgenInfo={description:"",displayName:"History",props:{historyByDay:{defaultValue:null,description:"",name:"historyByDay",required:!0,type:{name:"HistoryDay[]"}}}}}catch{}const T=a=>{const{lifeCycle:u}=a,l=u.map(r=>({title:r.title,status:ve[r.status],completedItemView:Ae[r.status],content:o(r.stages)?e.jsxs(e.Fragment,{children:[e.jsx(ce,{size:"s",view:"clear",defaultActiveEventKey:r.stages.reduce((t,s,n)=>(s.open&&t.push(n),t),[]),children:r.stages.map((t,s)=>e.jsx(xe,{contentLeft:o(t.tooltip)?e.jsx(W,{view:"onDark",children:e.jsx(M,{maxWidth:250,offset:[2,11],target:P[t.status],trigger:"hover",placement:"top-start",text:t.tooltip.text})}):P[t.status],title:e.jsxs(E,{children:[e.jsx(p,{variant:"TextS",children:t.title}),o(t.mark)&&(t.mark.tooltip?e.jsx(W,{view:"onDark",children:e.jsx(M,{maxWidth:250,offset:[2,11],target:t.mark.icon,trigger:"hover",placement:"top-start",text:t.mark.tooltip.text})}):t.mark.icon)]}),eventKey:s,children:e.jsxs(C,{children:[_(t.assignee)&&e.jsx(I,{children:t.assignee.map(n=>e.jsx(p,{variant:"TextXS",bold:!0,color:U,children:n},n))}),o(t.comment)&&e.jsx(p,{variant:"TextXS",color:U,children:t.comment}),_(t.buttons)&&e.jsx(B,{children:t.buttons.map(n=>e.jsx(pe,{contentLeft:n.contentLeft,text:n.text,size:"xxs",onClick:n.onClick},n.text))}),o(t.actionTitle)&&e.jsx(p,{variant:"TextXS",color:V,children:t.actionTitle})]})},t.title))}),_(r.buttons)&&e.jsx(g,{children:r.buttons.map(t=>e.jsx(v,{text:t.text,contentLeft:t.contentLeft,view:"secondary",size:"xs"}))})]}):e.jsxs(C,{children:[e.jsx(p,{variant:"BodyXS",color:V,children:r.actionTitle}),_(r.buttons)&&e.jsx(g,{children:r.buttons.map(t=>e.jsx(v,{text:t.text,contentLeft:t.contentLeft,view:"secondary",size:"xs"}))})]})}));return e.jsx(S,{children:e.jsx(fe,{style:{paddingTop:"1px",height:"auto"},items:l,orientation:"vertical",size:"m"})})};try{T.displayName="LifeCycle",T.__docgenInfo={description:"",displayName:"LifeCycle",props:{lifeCycle:{defaultValue:null,description:"Параметры жизненного цикла",name:"lifeCycle",required:!0,type:{name:"LifeCycleItem[]"}}}}}catch{}const w=a=>{const{preview:u}=a,{button:l,loading:r}=u??{},t=o(l);return e.jsx(j,{children:r?e.jsx(me,{size:"l",view:"default"}):e.jsx(he,{size:"m",variant:"no-content",buttons:t?[{props:{text:l.text,children:l.text,view:"accent",onClick:l.onClick},type:"link"}]:void 0})})};try{w.displayName="Preview",w.__docgenInfo={description:"",displayName:"Preview",props:{preview:{defaultValue:null,description:"Параметры превью",name:"preview",required:!1,type:{name:"ApprovalCenterPreview"}}}}}catch{}const O=a=>{const{className:u,$css:l,preview:r,tabs:t,lifeCycle:s,history:n}=a,[c,f]=le.useState(t.active),L=t.available.length>1,m=t.available[0],d=m==="LIFE_CYCLE",ee=m==="HISTORY",te=c==="LIFE_CYCLE",ae=c==="HISTORY",R=o(s),re=o(n),z=o(r),D=re?Ce(n):null,k=o(D);if(L){const ie=e.jsxs(q,{children:[R&&te&&e.jsx(T,{lifeCycle:s}),k&&ae&&e.jsx(A,{historyByDay:D})]});return e.jsx(x,{className:u,$css:l,children:z?e.jsx(w,{preview:r}):e.jsxs(e.Fragment,{children:[e.jsx(ye,{view:"divider",size:"s",orientation:"horizontal",children:t.available.map(y=>e.jsx(_e,{view:"divider",size:"s",selected:y===c,onClick:()=>f(y),children:Te[y]},y))}),ie]})})}const ne=e.jsxs(e.Fragment,{children:[R&&d&&e.jsx(T,{lifeCycle:s}),k&&ee&&e.jsx(A,{historyByDay:D})]});return e.jsx(x,{children:z?e.jsx(w,{preview:r}):ne})};try{O.displayName="ApprovalCenter",O.__docgenInfo={description:"",displayName:"ApprovalCenter",props:{className:{defaultValue:null,description:"Дополнительный класс для корневого элемента",name:"className",required:!1,type:{name:"string"}},$css:{defaultValue:null,description:"Кастомные CSS-стили для контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},preview:{defaultValue:null,description:"Параметры превью",name:"preview",required:!1,type:{name:"ApprovalCenterPreview"}},tabs:{defaultValue:null,description:"Параметры вкладок",name:"tabs",required:!0,type:{name:"ApprovalCenterTabs"}},lifeCycle:{defaultValue:null,description:"Параметры вкладки жизненного цикла",name:"lifeCycle",required:!1,type:{name:"LifeCycleItem[]"}},history:{defaultValue:null,description:"Параметры вкладки истории",name:"history",required:!1,type:{name:"HistoryItem[]"}}}}}catch{}export{O as A};
