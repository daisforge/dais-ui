import{d as e,r as n}from"./react-D2T61mpp.js";import{s as N}from"./storySourceDoc-tVKyHcEN.js";import{P as r}from"./PopupDF-BJdf0aIc.js";import{s as a,c as A}from"./constants-DM2G2kGu.js";import{cx as W,P as M,cL as m,cK as b,b0 as h}from"./@salutejs/sdds-themes-CZ516YZq.js";import{b as d,I as le,F as pe,G as ce}from"./@salutejs/sdds-finai-T191Q1_H.js";import{ck as v,bf as w}from"./vendor-BxGjgi7L.js";import{jA as de,jB as me,k$ as be}from"./@salutejs/plasma-icons-zpxl9Ixy.js";const he={l:"s",m:"xs",s:"xxs"},fe={l:"s",m:"xs",s:"xxs"},xe=["center","top","bottom","right","left","top-right","top-left","bottom-right","bottom-left"],De=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ge=["top-left","top-right","bottom-left","bottom-right"],o={control:!1,table:{disable:!0}},$={size:o,opened:o,defaultOpened:o,onToggle:o,placement:o,offset:o,offsetX:o,offsetY:o,frame:o,style:o,showCloseButton:o,showBackButton:o,withSubHeader:o,withRightBlock:o,withBody:o,withFooter:o,draggable:o,resizable:o,resizableDisabled:o,resizableDirections:o,resizableHiddenIcons:o,resizableDefaultSize:o,resizableMinWidth:o,resizableMinHeight:o,resizableMaxWidth:o,resizableMaxHeight:o,resizableIconSize:o},G=`import { useState } from 'react';
import {
  Button,
  Flow,
  LinkButton,
  PopupDF,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';

// Контент футера — обычные кнопки, которые вы кладёте в PopupDF.Footer
function FooterActions() {
  return (
    <Flow mainAxisGap={8}>
      <LinkButton href="/" size="xs">
        LinkButton
      </LinkButton>
      <Button size="xs" view="secondary">
        Отмена
      </Button>
      <Button size="xs" view="accent">
        Применить
      </Button>
    </Flow>
  );
}
`,ke=`${G}
function Example() {
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`,Pe=`${G}
function Example() {
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          offset={[0, 0]}
          draggable
          resizable={{ minWidth: 240, minHeight: 120, iconSize: 's' }}
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
            showCloseButton
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`,Fe={title:"Локальные компоненты/PopupDF",component:r,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["l","m","s"],control:{type:"inline-radio"}},placement:{options:xe,control:{type:"select"}},offsetX:{control:"number"},offsetY:{control:"number"},showCloseButton:{control:"boolean"},showBackButton:{control:"boolean"},withSubHeader:{control:"boolean"},withRightBlock:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},draggable:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:De},resizableHiddenIcons:{control:"check",options:ge},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"center",offsetX:0,offsetY:0,showCloseButton:!0,showBackButton:!1,withSubHeader:!0,withRightBlock:!0,withBody:!0,withFooter:!0,draggable:!1,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableIconSize:"s",resizableDefaultSize:{width:300,height:180},resizableMinWidth:240,resizableMinHeight:120}},ye={minHeight:"560px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:a.x16,backgroundColor:W},Ne={position:"relative",width:"100%",maxWidth:"920px",minHeight:"480px",background:M,borderRadius:A.l,overflow:"hidden",padding:a.x8},ve={minHeight:"40px",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",color:m,padding:"10px 12px"},we={minHeight:"56px",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"};function Se({children:s}){return e.jsxDEV(v,{children:e.jsxDEV(w,{children:e.jsxDEV("div",{style:ye,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:389,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:388,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:387,columnNumber:5},this)}function Z({children:s}){const i=n.useRef(null);return e.jsxDEV("div",{ref:i,style:Ne,children:s(i)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:403,columnNumber:5},this)}function ze(){return e.jsxDEV("div",{style:ve,children:"subHeader"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:410,columnNumber:10},this)}const Be={l:"32px",m:"32px",s:"24px"};function X({size:s="m"}){return e.jsxDEV("div",{style:{height:Be[s],display:"flex",alignItems:"center",padding:"0 8px",border:`1px solid ${h}`,background:b,color:m,whiteSpace:"nowrap",boxSizing:"border-box"},children:"rightBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:421,columnNumber:5},this)}function Y(){return e.jsxDEV("div",{style:we,children:"PopupDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:440,columnNumber:10},this)}function S({size:s="m"}){const i=he[s],t=fe[s];return e.jsxDEV("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:a.x4},children:e.jsxDEV(pe,{mainAxisGap:a.x2,children:[e.jsxDEV(ce,{href:"/",size:t,onClick:u=>u.preventDefault(),children:"LinkButton"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:458,columnNumber:9},this),e.jsxDEV(d,{size:i,view:"secondary",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:465,columnNumber:9},this),e.jsxDEV(d,{size:i,view:"accent",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:468,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:457,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:448,columnNumber:5},this)}function Ee({size:s="m",placement:i="center",offsetX:t=0,offsetY:u=0,showCloseButton:f=!0,showBackButton:x=!1,withSubHeader:g=!0,withRightBlock:k=!0,withBody:P=!0,withFooter:F=!0,draggable:D,resizable:U,resizableDisabled:q=!1,resizableDirections:J,resizableHiddenIcons:Q,resizableDefaultSize:ee,resizableMinWidth:oe,resizableMinHeight:se,resizableMaxWidth:ie,resizableMaxHeight:re,resizableIconSize:te}){const[ne,z]=n.useState(!0),ue=U?{disabled:q,directions:J,hiddenIcons:Q,defaultSize:ee,minWidth:oe,minHeight:se,maxWidth:ie,maxHeight:re,iconSize:te}:void 0;return e.jsxDEV(Z,{children:ae=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(d,{onClick:()=>z(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:518,columnNumber:11},this),e.jsxDEV(r,{opened:ne,onToggle:z,frame:ae,placement:i,offset:[t,u],size:s,draggable:D,resizable:ue,style:{width:"396px"},children:[e.jsxDEV(r.Header,{title:"Title",description:"Description",subHeader:g?e.jsxDEV(ze,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:533,columnNumber:42},this):void 0,rightBlock:k?e.jsxDEV(X,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:535,columnNumber:34},this):void 0,showCloseButton:f,onBackButtonClick:x?()=>{}:void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:530,columnNumber:13},this),P&&e.jsxDEV(r.Body,{children:e.jsxDEV(Y,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:542,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:541,columnNumber:15},this),F&&e.jsxDEV(r.Footer,{children:e.jsxDEV(S,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:547,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:546,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:519,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:517,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:515,columnNumber:5},this)}function K(s){return e.jsxDEV(Se,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:558,columnNumber:10},this)}function je(){const[s,i]=n.useState(!1);return e.jsxDEV(v,{children:e.jsxDEV(w,{children:e.jsxDEV(Z,{children:t=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(d,{onClick:()=>i(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:570,columnNumber:15},this),e.jsxDEV(r,{opened:s,onToggle:i,frame:t,size:"m",placement:"center",style:{width:"396px"},children:[e.jsxDEV(r.Header,{title:"Title",description:"Description",rightBlock:e.jsxDEV(X,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:582,columnNumber:31},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:579,columnNumber:17},this),e.jsxDEV(r.Body,{children:e.jsxDEV(Y,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:585,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:584,columnNumber:17},this),e.jsxDEV(r.Footer,{children:e.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:588,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:587,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:571,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:569,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:567,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:566,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:565,columnNumber:5},this)}const l={name:"Simple",argTypes:$,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...N({code:ke,previewSource:"shown"}),render:()=>K(e.jsxDEV(je,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:615,columnNumber:31},void 0))},p={name:"Playground",...N({code:Pe,previewSource:"shown"}),render:s=>K(e.jsxDEV(Ee,{...s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:621,columnNumber:35},void 0))},y=280,B=600,E=600,j=24,Ve={minHeight:"820px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:a.x16,backgroundColor:W},Ie={position:"relative",width:"100%",maxWidth:"960px",minHeight:"720px",background:M,borderRadius:A.l,overflow:"hidden",padding:a.x8},He={height:"100%",boxSizing:"border-box",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"},Ce={height:"40px",display:"flex",alignItems:"center",gap:"8px",padding:"0 12px",border:`1px solid ${h}`,background:b,color:m,boxSizing:"border-box"};function Te(){const[s,i]=n.useState(!0),[t,u]=n.useState(!1),[f,x]=n.useState(!0),g=()=>{x(!1),window.setTimeout(()=>u(!0),30)},k=()=>{u(!1),window.setTimeout(()=>x(!0),y+40)},P=t?de:me,F={width:t?`calc(100% - ${j*2}px)`:`${B}px`,height:t?`calc(100% - ${j*2}px)`:`${E}px`,maxWidth:"100%",maxHeight:"100%",transition:`width ${y}ms ease, height ${y}ms ease`,display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr"},D=n.useRef(null);return e.jsxDEV(v,{children:e.jsxDEV(w,{children:e.jsxDEV("div",{style:Ve,children:e.jsxDEV("div",{ref:D,style:Ie,children:[e.jsxDEV(d,{onClick:()=>i(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:726,columnNumber:13},this),e.jsxDEV(r,{opened:s,onToggle:i,frame:D,size:"l",placement:"center",offset:[0,0],draggable:f,resizable:f?{defaultSize:{width:B,height:E},minWidth:320,minHeight:220,iconSize:"s"}:!1,style:F,children:[e.jsxDEV(r.Header,{title:"Заголовок PopupDF размера L",description:"Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой.",subHeader:e.jsxDEV("div",{style:Ce,children:[e.jsxDEV(be,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:758,columnNumber:21},this),e.jsxDEV("span",{children:"Кастомный слот"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:759,columnNumber:21},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:757,columnNumber:19},this),rightBlock:e.jsxDEV(le,{size:"xs",view:"secondary",pin:"circle-circle",title:t?"Свернуть":"Развернуть",onClick:()=>t?k():g(),children:e.jsxDEV(P,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:770,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:763,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:753,columnNumber:15},this),e.jsxDEV(r.Body,{children:e.jsxDEV("div",{style:He,children:"PopupDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:775,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:774,columnNumber:15},this),e.jsxDEV(r.Footer,{children:e.jsxDEV(S,{size:"l"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:778,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:777,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:727,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:725,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:724,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:723,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:722,columnNumber:5},this)}const Le=`import { useRef, useState } from 'react';
import {
  Button,
  IconButton,
  PopupDF,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';
import { IconFullscreenOff, IconFullscreenOn } from '@daisforge/ui/icons';

// Разворот на весь экран собираем сами из пропсов PopupDF:
// сначала выключаем resizable и draggable, чтобы попап вернулся к обычному
// размеру, затем следующим тиком плавно растим его до краёв frame.
function Example() {
  const frameRef = useRef(null);
  const [opened, setOpened] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [interactive, setInteractive] = useState(true);

  const expand = () => {
    setInteractive(false);
    window.setTimeout(() => setFullscreen(true), 30);
  };

  const collapse = () => {
    setFullscreen(false);
    window.setTimeout(() => setInteractive(true), 320);
  };

  const IconFullS = fullscreen ? IconFullscreenOff : IconFullscreenOn;

  const sizeStyle = {
    width: fullscreen ? 'calc(100% - 48px)' : '600px',
    height: fullscreen ? 'calc(100% - 48px)' : '600px',
    maxWidth: '100%',
    maxHeight: '100%',
    transition: 'width 280ms ease, height 280ms ease',
    // grid тянет карточку на всю заданную высоту, иначе внешний узел Popup
    // сжимается по контенту и height не применяется (600 даёт только ширину).
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

  return (
    <SSRProvider>
      <PopupProvider>
        {/* frame — контейнер, внутри которого живёт и разворачивается попап */}
        <div ref={frameRef} style={{ position: 'relative', minHeight: 720 }}>
          <PopupDF
            opened={opened}
            onToggle={setOpened}
            frame={frameRef}
            size="l"
            placement="center"
            draggable={interactive}
            resizable={
              interactive
                ? {
                    // стартовый размер контейнера при включённом resizable
                    defaultSize: { width: 600, height: 600 },
                    minWidth: 320,
                    minHeight: 220,
                    iconSize: 's',
                  }
                : false
            }
            style={sizeStyle}
          >
            <PopupDF.Header
              title="Заголовок PopupDF размера L"
              description="Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой."
              subHeader={
                <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                  Кастомный слот
                </div>
              }
              rightBlock={
                <IconButton
                  size="xs"
                  view="secondary"
                  pin="circle-circle"
                  title={fullscreen ? 'Свернуть' : 'Развернуть'}
                  onClick={() => (fullscreen ? collapse() : expand())}
                >
                  <IconFullS size="xs" />
                </IconButton>
              }
            />
            {/* высота 100%, чтобы контент тела рос при ресайзе попапа */}
            <PopupDF.Body>
              <div style={{ height: '100%' }}>Контент попапа</div>
            </PopupDF.Body>
            <PopupDF.Footer>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
                <Button size="s" view="secondary">
                  Отмена
                </Button>
                <Button size="s" view="accent">
                  Применить
                </Button>
              </div>
            </PopupDF.Footer>
          </PopupDF>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}`,c={name:"Size L",argTypes:$,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...N({code:Le,previewSource:"shown"}),render:()=>e.jsxDEV(Te,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:914,columnNumber:17},void 0)};var V,I,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Simple',
  argTypes: simpleArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({
    code: simpleCode,
    previewSource: 'shown'
  }),
  render: () => renderInStage(<PopupDFSimpleExample />)
}`,...(H=(I=l.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var C,T,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopupDFPlaygroundExample {...args} />)
}`,...(L=(T=p.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,O,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size L',
  argTypes: simpleArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({
    code: sizeLCode,
    previewSource: 'shown'
  }),
  render: () => <PopupDFSizeLExample />
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Re=["Simple","Playground","SizeL"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Playground:p,Simple:l,SizeL:c,__namedExportsOrder:Re,default:Fe},Symbol.toStringTag,{value:"Module"}));export{Xe as P};
