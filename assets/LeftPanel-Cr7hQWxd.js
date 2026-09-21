import{d as r,r as t}from"./react-D2T61mpp.js";import{B as J}from"./Box-CPQ5Zm8W.js";import{y as Q,s as b,d as U,b9 as Y,l as Z,bo as u4,i as z,cD as e4,cE as t4}from"./@salutejs/sdds-themes-p9DCXULv.js";import{H as f,C as n4}from"./styled-components-By-Qua6E.js";import{E as o4}from"./@salutejs/sdds-finai-CE284srQ.js";import{t as a4,s as i4,f as s4}from"./utils-LFsJSXST.js";import{G as r4}from"./@salutejs/plasma-icons-FFiKxxF2.js";const V={icon:"left-panel__toggle-button",leftBlockIsResizing:"left-panel__is-resizing"},l4=72,d4=56,q=240,c4=540,N=.2,p4=f(J)`
  width: 100%;
  height: 100%;
  min-width: ${({minWidth:u})=>u}px;
  display: flex;
  background-color: ${()=>Q};
  margin-right: ${({$isAdaptive1280:u})=>u?b:U};
  border-radius: ${b};
  box-shadow: ${()=>Y};
  /* Во время активного ресайза transition ширины отключаем — иначе панель
     тянется за курсором с инерцией. В остальных случаях (кнопка/внешний
     контрол) всегда плавно анимируем max-width в обе стороны — раньше при
     заданном width анимировалась только opacity, из-за чего открытие было
     мгновенным, а закрытие плавным (асимметрия). */
  transition: ${u=>u.$resizing?"none":`max-width ${N}s ease-in-out, opacity ${N}s ease-in-out`};
  max-width: ${u=>u.width!==void 0?`${Math.min(u.width,u.maxWidth)}px`:`${u.minWidth}px`};
  position: relative;
  overflow: hidden;
  padding-right: ${({showResizeable:u})=>u?Z:0};
`,m4=f.div`
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  overflow: hidden;
`,M=n4`
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
  opacity: ${({$active:u})=>u?1:0};
  visibility: ${({$active:u})=>u?"visible":"hidden"};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity ${N}s ease-in-out,
    visibility 0s ${({$active:u})=>u?"0s":`${N}s`};
`,f4=f.div`
  ${M};
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: relative;
`,E4=f.div`
  ${M};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({$isAdaptive1280:u,showResizeable:e})=>e?u?"6px":"10px":b};
  width: 100%;
`,D4=f.div`
  gap: ${b};
  display: flex;
  flex-direction: column;
`,h4=f(o4)`
  z-index: 1;
  position: ${u=>u.isAbsolute?"absolute":"static"};
  top: ${b};
  right: ${b};
  width: ${({$isAdaptive1280:u})=>u?32:40}px !important;
  height: ${({$isAdaptive1280:u})=>u?32:40}px !important;

  .left-panel__toggle-button {
    transform: ${u=>u.collapsed?"rotate(270deg)":"rotate(90deg)"};
  }
`,B4=f.div`
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
    top: ${`calc(50% - ${z} / 2)`};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 95px;
    width: 4px;
    height: ${z};
    background-color: ${()=>e4};
  }

  &:hover {
    &::after {
      background-color: ${()=>t4};
    }
  }
`,v=({onClick:u,collapsed:e=!1,isAbsolute:o=!1,isAdaptive1280:i=!1,...d})=>r.jsxDEV(h4,{onClick:u,$isAdaptive1280:i,collapsed:e,isAbsolute:o,view:"secondary",size:i?"s":"l",...d,children:r.jsxDEV(r4,{className:V.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/components/LeftPanelToggleButton.tsx",lineNumber:23,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/components/LeftPanelToggleButton.tsx",lineNumber:14,columnNumber:3},void 0);try{v.displayName="LeftPanelToggleButton",v.__docgenInfo={description:"",displayName:"LeftPanelToggleButton",props:{}}}catch{}const g4=({setWidth:u,isResizingRef:e,setIsResizing:o,panelRef:i,minWidth:d,maxWidth:P,parentRef:x,isCollapsed:F,onResize:E})=>{const A=t.useCallback(()=>{var c;document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.current=!0,o(!0),(c=i.current)==null||c.classList.add(V.leftBlockIsResizing)},[i,e,o]);return t.useEffect(()=>{const c=()=>{var y,a;document.body.style.cursor="auto",document.body.style.userSelect="",e.current=!1,o(!1),(y=i.current)==null||y.classList.remove(V.leftBlockIsResizing);const m=((a=i.current)==null?void 0:a.clientWidth)??0;m>d&&m<q&&u(d)},D=a4(m=>{if(!e.current||!i.current||!x.current)return;m.preventDefault();const l=x.current.getBoundingClientRect(),a=m.clientX-l.left,s=i4(d,a,P);u(s),!F&&E&&E(s)},16);return window.addEventListener("mousemove",D),window.addEventListener("mouseup",c),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",c)}},[u,e,o,i,d,P,x,F,E]),{startResizing:A}},C4=u=>({buttonSize:u?"xs":"s"}),b4=(u,e)=>e??(u?d4:l4),_=(u,e)=>typeof u=="function"?u(e):u,w=({widthState:u,minWidth:e,maxWidth:o=c4,disableMediaAdaptive:i=!1,collapseState:d,containerProps:P,contentProps:x,collapsedContentProps:F,expandedContent:E,collapsedContent:A,collapsedFooterContent:c,showToggleButton:$=!0,showResizeable:D=!0,onResize:m,onToggleCollapse:l})=>{const{down:y}=s4(),a=!i&&y("xl"),s=b4(a,e),h=t.useMemo(()=>C4(a),[a]),j=t.useMemo(()=>_(E,h),[E,h]),W=t.useMemo(()=>_(A,h),[A,h]),H=t.useMemo(()=>_(c,h),[c,h]),R=t.useState(!1),[n,L]=d??R,X=t.useState(Number(n?s:o)),[B,g]=u??X,k=t.useRef(null),T=t.useRef(null),S=t.useRef(!1),[O,G]=t.useState(!1),{startResizing:K}=g4({setWidth:g,isResizingRef:S,setIsResizing:G,panelRef:k,minWidth:s,maxWidth:o,parentRef:T,isCollapsed:n,onResize:m});t.useEffect(()=>{if(B!==void 0){const p=B<q;p!==n&&(L(p),l&&!S.current&&l(p))}},[B,n,l,L]),t.useEffect(()=>{!S.current&&n&&B!==s&&g(s)},[n,s,g,B]);const I=t.useCallback(()=>{L(p=>{const C=!p;return l&&l(C),g(C?s:o),C})},[l,L,g,s,o]);return r.jsxDEV(p4,{ref:k,collapsed:n,maxWidth:o,minWidth:s,width:B,$resizing:O,$isAdaptive1280:a,showResizeable:D,...P,children:[r.jsxDEV(m4,{children:[r.jsxDEV(f4,{$active:!n,"aria-hidden":n,...x,children:[$&&r.jsxDEV(v,{onClick:I,collapsed:n,isAdaptive1280:a,isAbsolute:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:157,columnNumber:13},void 0),j]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:151,columnNumber:9},void 0),r.jsxDEV(E4,{$active:n,"aria-hidden":!n,$isAdaptive1280:a,showResizeable:D,...F,children:[r.jsxDEV(D4,{children:[$&&r.jsxDEV(v,{onClick:I,collapsed:n,isAdaptive1280:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:175,columnNumber:15},void 0),W]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:173,columnNumber:11},void 0),H]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:166,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:149,columnNumber:7},void 0),D&&r.jsxDEV(B4,{onMouseDown:p=>{var C;p.preventDefault(),(C=k.current)!=null&&C.parentElement&&(T.current=k.current.parentElement),K()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:187,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:138,columnNumber:5},void 0)};w.LeftPanelToggleButton=v;try{w.displayName="LeftPanel",w.__docgenInfo={description:"",displayName:"LeftPanel",props:{minWidth:{defaultValue:{value:"72, на viewport <= 1280px — 56"},description:"Минимальная ширина",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"540"},description:"Максимальная ширина",name:"maxWidth",required:!1,type:{name:"number"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если `minWidth` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},collapseState:{defaultValue:null,description:"Состояние открытости или закрытости панели",name:"collapseState",required:!1,type:{name:"[boolean, Dispatch<SetStateAction<boolean>>]"}},widthState:{defaultValue:null,description:"Состояние ширины панели панели",name:"widthState",required:!1,type:{name:"[number, Dispatch<SetStateAction<number>>]"}},containerProps:{defaultValue:null,description:"Свойства для container элемента",name:"containerProps",required:!1,type:{name:"any"}},contentProps:{defaultValue:null,description:"Свойства для content открытой панели",name:"contentProps",required:!1,type:{name:'Omit<{ [x: string]: any; [x: number]: any; [x: symbol]: any; } & { theme?: DefaultTheme; } & { as?: string | ComponentType<any>; forwardedAs?: string | ComponentType<any>; }, "$active">'}},collapsedContentProps:{defaultValue:null,description:"Свойства для content закрытой панели",name:"collapsedContentProps",required:!1,type:{name:"PanelCollapsedContentProps"}},showToggleButton:{defaultValue:{value:"true"},description:"Скрытие кнопки открытия/закрытия панели",name:"showToggleButton",required:!1,type:{name:"boolean"}},showResizeable:{defaultValue:{value:"true"},description:"Скрытие сепаратора у resize",name:"showResizeable",required:!1,type:{name:"boolean"}},expandedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в открытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"expandedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedFooterContent:{defaultValue:null,description:`Кастомный класс для Content footer элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedFooterContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},onResize:{defaultValue:null,description:"Callback, который срабатывает при изменении ширины (только когда панель раскрыта)",name:"onResize",required:!1,type:{name:"(width: number) => void"}},onToggleCollapse:{defaultValue:null,description:"Callback, который срабатывает в моменте изменения",name:"onToggleCollapse",required:!1,type:{name:"(next: boolean) => void"}}}}}catch{}try{w.LeftPanelToggleButton.displayName="LeftPanel.LeftPanelToggleButton",w.LeftPanelToggleButton.__docgenInfo={description:"",displayName:"LeftPanel.LeftPanelToggleButton",props:{}}}catch{}export{w as L};
