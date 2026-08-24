import{d as r,r as t}from"./react-D2T61mpp.js";import{B as J}from"./Box-BsCGp3nZ.js";import{y as Q,s as b,b8 as U,k as Y,bn as Z,i as I,cz as u4,cA as e4}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as f,C as t4}from"./styled-components-CdU5JEL5.js";import{E as n4}from"./@salutejs/sdds-finai-rsluPq8z.js";import{t as o4,s as a4,f as i4}from"./utils-ej044pNs.js";import{G as s4}from"./@salutejs/plasma-icons-BiMarbkF.js";const V={icon:"left-panel__toggle-button",leftBlockIsResizing:"left-panel__is-resizing"},r4=72,l4=56,q=240,d4=540,N=.2,c4=f(J)`
  width: 100%;
  height: 100%;
  min-width: ${({minWidth:u})=>u}px;
  display: flex;
  background-color: ${()=>Q};
  margin-right: ${b};
  border-radius: ${b};
  box-shadow: ${()=>U};
  /* Во время активного ресайза transition ширины отключаем — иначе панель
     тянется за курсором с инерцией. В остальных случаях (кнопка/внешний
     контрол) всегда плавно анимируем max-width в обе стороны — раньше при
     заданном width анимировалась только opacity, из-за чего открытие было
     мгновенным, а закрытие плавным (асимметрия). */
  transition: ${u=>u.$resizing?"none":`max-width ${N}s ease-in-out, opacity ${N}s ease-in-out`};
  max-width: ${u=>u.width!==void 0?`${Math.min(u.width,u.maxWidth)}px`:`${u.minWidth}px`};
  position: relative;
  overflow: hidden;
  padding-right: ${({showResizeable:u})=>u?Y:0};
`,p4=f.div`
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  overflow: hidden;
`,M=t4`
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
  opacity: ${({$active:u})=>u?1:0};
  visibility: ${({$active:u})=>u?"visible":"hidden"};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity ${N}s ease-in-out,
    visibility 0s ${({$active:u})=>u?"0s":`${N}s`};
`,m4=f.div`
  ${M};
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: relative;
`,f4=f.div`
  ${M};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({$isAdaptive1280:u,showResizeable:e})=>e?u?"6px":"10px":b};
  width: 100%;
`,E4=f.div`
  gap: ${b};
  display: flex;
  flex-direction: column;
`,D4=f(n4)`
  z-index: 1;
  position: ${u=>u.isAbsolute?"absolute":"static"};
  top: ${b};
  right: ${b};
  width: ${({$isAdaptive1280:u})=>u?32:40}px !important;
  height: ${({$isAdaptive1280:u})=>u?32:40}px !important;

  .left-panel__toggle-button {
    transform: ${u=>u.collapsed?"rotate(270deg)":"rotate(90deg)"};
  }
`,h4=f.div`
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
    background-color: ${()=>Z};
  }

  &::after {
    content: '';
    position: absolute;
    top: ${`calc(50% - ${I} / 2)`};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 95px;
    width: 4px;
    height: ${I};
    background-color: ${()=>u4};
  }

  &:hover {
    &::after {
      background-color: ${()=>e4};
    }
  }
`,v=({onClick:u,collapsed:e=!1,isAbsolute:o=!1,isAdaptive1280:a=!1,...d})=>r.jsxDEV(D4,{onClick:u,$isAdaptive1280:a,collapsed:e,isAbsolute:o,view:"secondary",size:a?"s":"l",...d,children:r.jsxDEV(s4,{className:V.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/components/LeftPanelToggleButton.tsx",lineNumber:23,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/components/LeftPanelToggleButton.tsx",lineNumber:14,columnNumber:3},void 0);try{v.displayName="LeftPanelToggleButton",v.__docgenInfo={description:"",displayName:"LeftPanelToggleButton",props:{}}}catch{}const B4=({setWidth:u,isResizingRef:e,setIsResizing:o,panelRef:a,minWidth:d,maxWidth:P,parentRef:x,isCollapsed:F,onResize:E})=>{const A=t.useCallback(()=>{var c;document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.current=!0,o(!0),(c=a.current)==null||c.classList.add(V.leftBlockIsResizing)},[a,e,o]);return t.useEffect(()=>{const c=()=>{var y,i;document.body.style.cursor="auto",document.body.style.userSelect="",e.current=!1,o(!1),(y=a.current)==null||y.classList.remove(V.leftBlockIsResizing);const m=((i=a.current)==null?void 0:i.clientWidth)??0;m>d&&m<q&&u(d)},D=o4(m=>{if(!e.current||!a.current||!x.current)return;m.preventDefault();const l=x.current.getBoundingClientRect(),i=m.clientX-l.left,s=a4(d,i,P);u(s),!F&&E&&E(s)},16);return window.addEventListener("mousemove",D),window.addEventListener("mouseup",c),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",c)}},[u,e,o,a,d,P,x,F,E]),{startResizing:A}},g4=u=>({buttonSize:u?"xs":"s"}),C4=(u,e)=>e??(u?l4:r4),_=(u,e)=>typeof u=="function"?u(e):u,w=({widthState:u,minWidth:e,maxWidth:o=d4,disableMediaAdaptive:a=!1,collapseState:d,containerProps:P,contentProps:x,collapsedContentProps:F,expandedContent:E,collapsedContent:A,collapsedFooterContent:c,showToggleButton:$=!0,showResizeable:D=!0,onResize:m,onToggleCollapse:l})=>{const{down:y}=i4(),i=!a&&y("xl"),s=C4(i,e),h=t.useMemo(()=>g4(i),[i]),j=t.useMemo(()=>_(E,h),[E,h]),W=t.useMemo(()=>_(A,h),[A,h]),H=t.useMemo(()=>_(c,h),[c,h]),R=t.useState(!1),[n,k]=d??R,X=t.useState(Number(n?s:o)),[B,g]=u??X,L=t.useRef(null),T=t.useRef(null),S=t.useRef(!1),[O,G]=t.useState(!1),{startResizing:K}=B4({setWidth:g,isResizingRef:S,setIsResizing:G,panelRef:L,minWidth:s,maxWidth:o,parentRef:T,isCollapsed:n,onResize:m});t.useEffect(()=>{if(B!==void 0){const p=B<q;p!==n&&(k(p),l&&!S.current&&l(p))}},[B,n,l,k]),t.useEffect(()=>{!S.current&&n&&B!==s&&g(s)},[n,s,g,B]);const z=t.useCallback(()=>{k(p=>{const C=!p;return l&&l(C),g(C?s:o),C})},[l,k,g,s,o]);return r.jsxDEV(c4,{ref:L,collapsed:n,maxWidth:o,minWidth:s,width:B,$resizing:O,showResizeable:D,...P,children:[r.jsxDEV(p4,{children:[r.jsxDEV(m4,{$active:!n,"aria-hidden":n,...x,children:[$&&r.jsxDEV(v,{onClick:z,collapsed:n,isAdaptive1280:i,isAbsolute:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:156,columnNumber:13},void 0),j]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:150,columnNumber:9},void 0),r.jsxDEV(f4,{$active:n,"aria-hidden":!n,$isAdaptive1280:i,showResizeable:D,...F,children:[r.jsxDEV(E4,{children:[$&&r.jsxDEV(v,{onClick:z,collapsed:n,isAdaptive1280:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:174,columnNumber:15},void 0),W]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:172,columnNumber:11},void 0),H]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:165,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:148,columnNumber:7},void 0),D&&r.jsxDEV(h4,{onMouseDown:p=>{var C;p.preventDefault(),(C=L.current)!=null&&C.parentElement&&(T.current=L.current.parentElement),K()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:186,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/LeftPanel/LeftPanel.tsx",lineNumber:138,columnNumber:5},void 0)};w.LeftPanelToggleButton=v;try{w.displayName="LeftPanel",w.__docgenInfo={description:"",displayName:"LeftPanel",props:{minWidth:{defaultValue:{value:"72, на viewport <= 1280px — 56"},description:"Минимальная ширина",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"540"},description:"Максимальная ширина",name:"maxWidth",required:!1,type:{name:"number"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если `minWidth` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},collapseState:{defaultValue:null,description:"Состояние открытости или закрытости панели",name:"collapseState",required:!1,type:{name:"[boolean, Dispatch<SetStateAction<boolean>>]"}},widthState:{defaultValue:null,description:"Состояние ширины панели панели",name:"widthState",required:!1,type:{name:"[number, Dispatch<SetStateAction<number>>]"}},containerProps:{defaultValue:null,description:"Свойства для container элемента",name:"containerProps",required:!1,type:{name:"any"}},contentProps:{defaultValue:null,description:"Свойства для content открытой панели",name:"contentProps",required:!1,type:{name:'Omit<{ [x: string]: any; [x: number]: any; [x: symbol]: any; } & { theme?: DefaultTheme; } & { as?: string | ComponentType<any>; forwardedAs?: string | ComponentType<any>; }, "$active">'}},collapsedContentProps:{defaultValue:null,description:"Свойства для content закрытой панели",name:"collapsedContentProps",required:!1,type:{name:"PanelCollapsedContentProps"}},showToggleButton:{defaultValue:{value:"true"},description:"Скрытие кнопки открытия/закрытия панели",name:"showToggleButton",required:!1,type:{name:"boolean"}},showResizeable:{defaultValue:{value:"true"},description:"Скрытие сепаратора у resize",name:"showResizeable",required:!1,type:{name:"boolean"}},expandedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в открытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"expandedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedContent:{defaultValue:null,description:`Кастомный класс для Content body элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},collapsedFooterContent:{defaultValue:null,description:`Кастомный класс для Content footer элемента в закрытом состоянии
Можно передать ReactNode или callback с размерами для адаптива.`,name:"collapsedFooterContent",required:!1,type:{name:"LeftPanelAdaptiveSlot"}},onResize:{defaultValue:null,description:"Callback, который срабатывает при изменении ширины (только когда панель раскрыта)",name:"onResize",required:!1,type:{name:"(width: number) => void"}},onToggleCollapse:{defaultValue:null,description:"Callback, который срабатывает в моменте изменения",name:"onToggleCollapse",required:!1,type:{name:"(next: boolean) => void"}}}}}catch{}try{w.LeftPanelToggleButton.displayName="LeftPanel.LeftPanelToggleButton",w.LeftPanelToggleButton.__docgenInfo={description:"",displayName:"LeftPanel.LeftPanelToggleButton",props:{}}}catch{}export{w as L};
