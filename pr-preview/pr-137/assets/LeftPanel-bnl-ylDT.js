import{j as r,r as t}from"./react-CAOzMBF_.js";import{B as J}from"./Box-DvvYTz20.js";import{A as Q,s as y,d as U,bb as Y,i as Z,bq as u4,j as q,cG as e4,cH as t4}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as m,C as n4}from"./styled-components-DCFsnh-i.js";import{E as o4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{t as a4,x as s4,h as i4}from"./utils-EIxGvR70.js";import{G as r4}from"./@salutejs/plasma-icons-Do5ggeDI.js";const z={icon:"left-panel__toggle-button",leftBlockIsResizing:"left-panel__is-resizing"},l4=72,d4=56,V=240,c4=540,_=.2,p4=m(J)`
  width: 100%;
  height: 100%;
  min-width: ${({minWidth:u})=>u}px;
  display: flex;
  background-color: ${()=>Q};
  margin-right: ${({$isAdaptive1280:u})=>u?y:U};
  border-radius: ${y};
  box-shadow: ${()=>Y};
  /* Во время активного ресайза transition ширины отключаем — иначе панель
     тянется за курсором с инерцией. В остальных случаях (кнопка/внешний
     контрол) всегда плавно анимируем max-width в обе стороны — раньше при
     заданном width анимировалась только opacity, из-за чего открытие было
     мгновенным, а закрытие плавным (асимметрия). */
  transition: ${u=>u.$resizing?"none":`max-width ${_}s ease-in-out, opacity ${_}s ease-in-out`};
  max-width: ${u=>u.width!==void 0?`${Math.min(u.width,u.maxWidth)}px`:`${u.minWidth}px`};
  position: relative;
  overflow: hidden;
  padding-right: ${({showResizeable:u})=>u?Z:0};
`,f4=m.div`
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  overflow: hidden;
`,j=n4`
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
  opacity: ${({$active:u})=>u?1:0};
  visibility: ${({$active:u})=>u?"visible":"hidden"};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity ${_}s ease-in-out,
    visibility 0s ${({$active:u})=>u?"0s":`${_}s`};
`,m4=m.div`
  ${j};
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: relative;
`,E4=m.div`
  ${j};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({$isAdaptive1280:u,showResizeable:e})=>e?u?"6px":"10px":y};
  width: 100%;
`,B4=m.div`
  gap: ${y};
  display: flex;
  flex-direction: column;
`,D4=m(o4)`
  z-index: 1;
  position: ${u=>u.isAbsolute?"absolute":"static"};
  top: ${y};
  right: ${y};
  width: ${({$isAdaptive1280:u})=>u?32:40}px !important;
  height: ${({$isAdaptive1280:u})=>u?32:40}px !important;

  .left-panel__toggle-button {
    transform: ${u=>u.collapsed?"rotate(270deg)":"rotate(90deg)"};
  }
`,C4=m.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 12px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 100%;
    background-color: ${()=>u4};
  }

  &::after {
    content: '';
    position: absolute;
    top: ${`calc(50% - ${q} / 2)`};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 95px;
    width: 4px;
    height: ${q};
    background-color: ${()=>e4};
  }

  &:hover {
    &::after {
      background-color: ${()=>t4};
    }
  }
`,A=({onClick:u,collapsed:e=!1,isAbsolute:o=!1,isAdaptive1280:s=!1,...d})=>r.jsx(D4,{onClick:u,$isAdaptive1280:s,collapsed:e,isAbsolute:o,view:"secondary",size:s?"s":"l",...d,children:r.jsx(r4,{className:z.icon})});try{A.displayName="LeftPanelToggleButton",A.__docgenInfo={description:"",displayName:"LeftPanelToggleButton",props:{}}}catch{}const h4=({setWidth:u,isResizingRef:e,setIsResizing:o,panelRef:s,minWidth:d,maxWidth:v,parentRef:x,isCollapsed:w,onResize:E})=>{const $=t.useCallback(()=>{var c;document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.current=!0,o(!0),(c=s.current)==null||c.classList.add(z.leftBlockIsResizing)},[s,e,o]);return t.useEffect(()=>{const c=()=>{var F,a;document.body.style.cursor="auto",document.body.style.userSelect="",e.current=!1,o(!1),(F=s.current)==null||F.classList.remove(z.leftBlockIsResizing);const f=((a=s.current)==null?void 0:a.clientWidth)??0;f>d&&f<V&&u(d)},B=a4(f=>{if(!e.current||!s.current||!x.current)return;f.preventDefault();const l=x.current.getBoundingClientRect(),a=f.clientX-l.left,i=s4(d,a,v);u(i),!w&&E&&E(i)},16);return window.addEventListener("mousemove",B),window.addEventListener("mouseup",c),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",c)}},[u,e,o,s,d,v,x,w,E]),{startResizing:$}},g4=u=>({buttonSize:u?"xs":"s"}),y4=(u,e)=>e??(u?d4:l4),I=(u,e)=>typeof u=="function"?u(e):u,b=({widthState:u,minWidth:e,maxWidth:o=c4,disableMediaAdaptive:s=!1,collapseState:d,containerProps:v,contentProps:x,collapsedContentProps:w,expandedContent:E,collapsedContent:$,collapsedFooterContent:c,showToggleButton:L=!0,showResizeable:B=!0,onResize:f,onToggleCollapse:l})=>{const{down:F}=i4(),a=!s&&F("xl"),i=y4(a,e),D=t.useMemo(()=>g4(a),[a]),M=t.useMemo(()=>I(E,D),[E,D]),W=t.useMemo(()=>I($,D),[$,D]),H=t.useMemo(()=>I(c,D),[c,D]),R=t.useState(!1),[n,S]=d??R,X=t.useState(Number(n?i:o)),[C,h]=u??X,P=t.useRef(null),N=t.useRef(null),k=t.useRef(!1),[O,G]=t.useState(!1),{startResizing:K}=h4({setWidth:h,isResizingRef:k,setIsResizing:G,panelRef:P,minWidth:i,maxWidth:o,parentRef:N,isCollapsed:n,onResize:f});t.useEffect(()=>{if(C!==void 0){const p=C<V;p!==n&&(S(p),l&&!k.current&&l(p))}},[C,n,l,S]),t.useEffect(()=>{!k.current&&n&&C!==i&&h(i)},[n,i,h,C]);const T=t.useCallback(()=>{S(p=>{const g=!p;return l&&l(g),h(g?i:o),g})},[l,S,h,i,o]);return r.jsxs(p4,{ref:P,collapsed:n,maxWidth:o,minWidth:i,width:C,$resizing:O,$isAdaptive1280:a,showResizeable:B,...v,children:[r.jsxs(f4,{children:[r.jsxs(m4,{$active:!n,"aria-hidden":n,...x,children:[L&&r.jsx(A,{onClick:T,collapsed:n,isAdaptive1280:a,isAbsolute:!0}),M]}),r.jsxs(E4,{$active:n,"aria-hidden":!n,$isAdaptive1280:a,showResizeable:B,...w,children:[r.jsxs(B4,{children:[L&&r.jsx(A,{onClick:T,collapsed:n,isAdaptive1280:a}),W]}),H]})]}),B&&r.jsx(C4,{onMouseDown:p=>{var g;p.preventDefault(),(g=P.current)!=null&&g.parentElement&&(N.current=P.current.parentElement),K()}})]})};b.LeftPanelToggleButton=A;try{b.displayName="LeftPanel",b.__docgenInfo={description:"",displayName:"LeftPanel",props:{minWidth:{defaultValue:{value:"72, на viewport <= 1280px — 56"},description:"Минимальная ширина",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"540"},description:"Максимальная ширина",name:"maxWidth",required:!1,type:{name:"number"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если `minWidth` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},collapseState:{defaultValue:null,description:"Состояние открытости или закрытости панели",name:"collapseState",required:!1,type:{name:"[boolean, Dispatch<SetStateAction<boolean>>]"}},widthState:{defaultValue:null,description:"Состояние ширины панели панели",name:"widthState",required:!1,type:{name:"[number, Dispatch<SetStateAction<number>>]"}},containerProps:{defaultValue:null,description:"Свойства для container элемента",name:"containerProps",required:!1,type:{name:"any"}},contentProps:{defaultValue:null,description:"Свойства для content открытой панели",name:"contentProps",required:!1,type:{name:'Omit<{ [x: string]: any; [x: number]: any; [x: symbol]: any; } & { theme?: DefaultTheme; } & { as?: string | ComponentType<any>; forwardedAs?: string | ComponentType<any>; }, "$active">'}},collapsedContentProps:{defaultValue:null,description:"Свойства для content закрытой панели",name:"collapsedContentProps",required:!1,type:{name:"PanelCollapsedContentProps"}},showToggleButton:{defaultValue:{value:"true"},description:"Скрытие кнопки открытия/закрытия панели",name:"showToggleButton",required:!1,type:{name:"boolean"}},showResizeable:{defaultValue:{value:"true"},description:"Скрытие сепаратора у resize",name:"showResizeable",required:!1,type:{name:"boolean"}},expandedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в открытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"expandedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedFooterContent:{defaultValue:null,description:`Кастомный класс для Content footer элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedFooterContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},onResize:{defaultValue:null,description:"Callback, который срабатывает при изменении ширины (только когда панель раскрыта)",name:"onResize",required:!1,type:{name:"(width: number) => void"}},onToggleCollapse:{defaultValue:null,description:"Callback, который срабатывает в моменте изменения",name:"onToggleCollapse",required:!1,type:{name:"(next: boolean) => void"}}}}}catch{}try{b.LeftPanelToggleButton.displayName="LeftPanel.LeftPanelToggleButton",b.LeftPanelToggleButton.__docgenInfo={description:"",displayName:"LeftPanel.LeftPanelToggleButton",props:{}}}catch{}export{b as L};
