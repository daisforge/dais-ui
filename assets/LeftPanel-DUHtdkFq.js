import{j as r,r as t}from"./react-CAOzMBF_.js";import{B as J}from"./Box-V-E_7_e1.js";import{A as Q,s as y,d as U,d1 as Y,i as Z,dd as u4,j as q,de as e4,df as t4}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as m,A as n4}from"./styled-components-BD-2WP2k.js";import{E as o4}from"./@salutejs/sdds-finai-Yd8FRL4L.js";import{t as a4,x as s4,h as i4}from"./utils-I85SwEfQ.js";import{G as r4}from"./@salutejs/plasma-icons-CkR551sF.js";const z={icon:"left-panel__toggle-button",leftBlockIsResizing:"left-panel__is-resizing"},l4=72,d4=56,V=240,c4=540,P=.2,p4=m(J)`
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
  transition: ${u=>u.$resizing?"none":`max-width ${P}s ease-in-out, opacity ${P}s ease-in-out`};
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
  transition: opacity ${P}s ease-in-out,
    visibility 0s ${({$active:u})=>u?"0s":`${P}s`};
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
`,h4=m.div`
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
`,F=({onClick:u,collapsed:e=!1,isAbsolute:o=!1,isAdaptive1280:s=!1,...d})=>r.jsx(D4,{onClick:u,$isAdaptive1280:s,collapsed:e,isAbsolute:o,view:"secondary",size:s?"s":"l",...d,children:r.jsx(r4,{className:z.icon})});try{F.displayName="LeftPanelToggleButton",F.__docgenInfo={description:"",displayName:"LeftPanelToggleButton",props:{}}}catch{}const C4=({setWidth:u,isResizingRef:e,setIsResizing:o,panelRef:s,minWidth:d,maxWidth:v,parentRef:A,isCollapsed:w,onResize:E})=>{const _=t.useCallback(()=>{var c;document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.current=!0,o(!0),(c=s.current)==null||c.classList.add(z.leftBlockIsResizing)},[s,e,o]);return t.useEffect(()=>{const c=()=>{var x,a;document.body.style.cursor="auto",document.body.style.userSelect="",e.current=!1,o(!1),(x=s.current)==null||x.classList.remove(z.leftBlockIsResizing);const f=((a=s.current)==null?void 0:a.clientWidth)??0;f>d&&f<V&&u(d)},B=a4(f=>{if(!e.current||!s.current||!A.current)return;f.preventDefault();const l=A.current.getBoundingClientRect(),a=f.clientX-l.left,i=s4(d,a,v);u(i),!w&&E&&E(i)},16);return window.addEventListener("mousemove",B),window.addEventListener("mouseup",c),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",c)}},[u,e,o,s,d,v,A,w,E]),{startResizing:_}},g4=u=>({buttonSize:u?"xs":"s"}),y4=(u,e)=>e??(u?d4:l4),I=(u,e)=>typeof u=="function"?u(e):u,b=({widthState:u,minWidth:e,maxWidth:o=c4,disableMediaAdaptive:s=!1,collapseState:d,containerProps:v,contentProps:A,collapsedContentProps:w,expandedContent:E,collapsedContent:_,collapsedFooterContent:c,showToggleButton:L=!0,showResizeable:B=!0,onResize:f,onToggleCollapse:l})=>{const{down:x}=i4(),a=!s&&x("xl"),i=y4(a,e),D=t.useMemo(()=>g4(a),[a]),M=t.useMemo(()=>I(E,D),[E,D]),W=t.useMemo(()=>I(_,D),[_,D]),R=t.useMemo(()=>I(c,D),[c,D]),X=t.useState(!1),[n,$]=d??X,H=t.useState(Number(n?i:o)),[h,C]=u??H,S=t.useRef(null),N=t.useRef(null),k=t.useRef(!1),[O,G]=t.useState(!1),{startResizing:K}=C4({setWidth:C,isResizingRef:k,setIsResizing:G,panelRef:S,minWidth:i,maxWidth:o,parentRef:N,isCollapsed:n,onResize:f});t.useEffect(()=>{if(h!==void 0){const p=h<V;p!==n&&($(p),l&&!k.current&&l(p))}},[h,n,l,$]),t.useEffect(()=>{!k.current&&n&&h!==i&&C(i)},[n,i,C,h]);const T=t.useCallback(()=>{$(p=>{const g=!p;return l&&l(g),C(g?i:o),g})},[l,$,C,i,o]);return r.jsxs(p4,{ref:S,collapsed:n,maxWidth:o,minWidth:i,width:h,$resizing:O,$isAdaptive1280:a,showResizeable:B,...v,children:[r.jsxs(f4,{children:[r.jsxs(m4,{$active:!n,"aria-hidden":n,...A,children:[L&&r.jsx(F,{onClick:T,collapsed:n,isAdaptive1280:a,isAbsolute:!0}),M]}),r.jsxs(E4,{$active:n,"aria-hidden":!n,$isAdaptive1280:a,showResizeable:B,...w,children:[r.jsxs(B4,{children:[L&&r.jsx(F,{onClick:T,collapsed:n,isAdaptive1280:a}),W]}),R]})]}),B&&r.jsx(h4,{onMouseDown:p=>{var g;p.preventDefault(),(g=S.current)!=null&&g.parentElement&&(N.current=S.current.parentElement),K()}})]})};b.LeftPanelToggleButton=F;try{b.displayName="LeftPanel",b.__docgenInfo={description:"",displayName:"LeftPanel",props:{minWidth:{defaultValue:{value:"72, на viewport <= 1280px — 56"},description:"Минимальная ширина",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"540"},description:"Максимальная ширина",name:"maxWidth",required:!1,type:{name:"number"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если `minWidth` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},collapseState:{defaultValue:null,description:"Состояние открытости или закрытости панели",name:"collapseState",required:!1,type:{name:"[boolean, Dispatch<SetStateAction<boolean>>]"}},widthState:{defaultValue:null,description:"Состояние ширины панели панели",name:"widthState",required:!1,type:{name:"[number, Dispatch<SetStateAction<number>>]"}},containerProps:{defaultValue:null,description:"Свойства для container элемента",name:"containerProps",required:!1,type:{name:"any"}},contentProps:{defaultValue:null,description:"Свойства для content открытой панели",name:"contentProps",required:!1,type:{name:'Omit<{ [x: string]: any; [x: number]: any; [x: symbol]: any; } & { theme?: DefaultTheme; } & { as?: string | ComponentType<any>; forwardedAs?: string | ComponentType<any>; }, "$active">'}},collapsedContentProps:{defaultValue:null,description:"Свойства для content закрытой панели",name:"collapsedContentProps",required:!1,type:{name:"PanelCollapsedContentProps"}},showToggleButton:{defaultValue:{value:"true"},description:"Скрытие кнопки открытия/закрытия панели",name:"showToggleButton",required:!1,type:{name:"boolean"}},showResizeable:{defaultValue:{value:"true"},description:"Скрытие сепаратора у resize",name:"showResizeable",required:!1,type:{name:"boolean"}},expandedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в открытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"expandedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedFooterContent:{defaultValue:null,description:`Кастомный класс для Content footer элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedFooterContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},onResize:{defaultValue:null,description:"Callback, который срабатывает при изменении ширины (только когда панель раскрыта)",name:"onResize",required:!1,type:{name:"(width: number) => void"}},onToggleCollapse:{defaultValue:null,description:"Callback, который срабатывает в моменте изменения",name:"onToggleCollapse",required:!1,type:{name:"(next: boolean) => void"}}}}}catch{}try{b.LeftPanelToggleButton.displayName="LeftPanel.LeftPanelToggleButton",b.LeftPanelToggleButton.__docgenInfo={description:"",displayName:"LeftPanel.LeftPanelToggleButton",props:{}}}catch{}export{b as L};
