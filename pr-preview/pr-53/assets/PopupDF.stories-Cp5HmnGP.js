import{d as e,r as n}from"./react-D2T61mpp.js";import{s as _}from"./storySourceDoc-tVKyHcEN.js";import{P as r}from"./PopupDF-DrFxQHpT.js";import{s as a,c as A}from"./constants-DM2G2kGu.js";import{cx as M,P as $,cL as m,cK as b,b0 as h}from"./@salutejs/sdds-themes-CZ516YZq.js";import{b as d,I as le,F as pe,G as ce}from"./@salutejs/sdds-finai-Bs5lVnWZ.js";import{ck as y,bf as w}from"./vendor-DEqZzPsi.js";import{jA as de,jB as me,k$ as be}from"./@salutejs/plasma-icons-Bi2vmzc3.js";const he={l:"s",m:"xs",s:"xxs"},fe={l:"s",m:"xs",s:"xxs"},De=["center","top","bottom","right","left","top-right","top-left","bottom-right","bottom-left"],xe=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ke=["top-left","top-right","bottom-left","bottom-right"],o={control:!1,table:{disable:!0}},W={size:o,opened:o,defaultOpened:o,onToggle:o,placement:o,offset:o,offsetX:o,offsetY:o,frame:o,style:o,showCloseButton:o,showBackButton:o,withSubHeader:o,withRightBlock:o,withBody:o,withFooter:o,draggable:o,resizable:o,resizableDisabled:o,resizableDirections:o,resizableHiddenIcons:o,resizableDefaultSize:o,resizableMinWidth:o,resizableMinHeight:o,resizableMaxWidth:o,resizableMaxHeight:o,resizableIconSize:o},G=`import { useState } from 'react';
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
`,ge=`${G}
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
}`,Fe={title:"Локальные компоненты/PopupDF",component:r,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["l","m","s"],control:{type:"inline-radio"}},placement:{options:De,control:{type:"select"}},offsetX:{control:"number"},offsetY:{control:"number"},showCloseButton:{control:"boolean"},showBackButton:{control:"boolean"},withSubHeader:{control:"boolean"},withRightBlock:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},draggable:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:xe},resizableHiddenIcons:{control:"check",options:ke},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"center",offsetX:0,offsetY:0,showCloseButton:!0,showBackButton:!1,withSubHeader:!0,withRightBlock:!0,withBody:!0,withFooter:!0,draggable:!1,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableIconSize:"s",resizableDefaultSize:{width:300,height:180},resizableMinWidth:240,resizableMinHeight:120}},Ne={minHeight:"560px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:a.x16,backgroundColor:M},ye={position:"relative",width:"100%",maxWidth:"920px",minHeight:"480px",background:$,borderRadius:A.l,overflow:"hidden",padding:a.x8},we={minHeight:"40px",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",color:m,padding:"10px 12px"},ve={minHeight:"56px",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"};function Se({children:s}){return e.jsxDEV(y,{children:e.jsxDEV(w,{children:e.jsxDEV("div",{style:Ne,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:389,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:388,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:387,columnNumber:5},this)}function Z({children:s}){const i=n.useRef(null);return e.jsxDEV("div",{ref:i,style:ye,children:s(i)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:403,columnNumber:5},this)}function ze(){return e.jsxDEV("div",{style:we,children:"subHeader"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:410,columnNumber:10},this)}const Ee={l:"32px",m:"32px",s:"24px"};function X({size:s="m"}){return e.jsxDEV("div",{style:{height:Ee[s],display:"flex",alignItems:"center",padding:"0 8px",border:`1px solid ${h}`,background:b,color:m,whiteSpace:"nowrap",boxSizing:"border-box"},children:"rightBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:421,columnNumber:5},this)}function Y(){return e.jsxDEV("div",{style:ve,children:"PopupDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:440,columnNumber:10},this)}function v({size:s="m"}){const i=he[s],t=fe[s];return e.jsxDEV("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:a.x4},children:e.jsxDEV(pe,{mainAxisGap:a.x2,children:[e.jsxDEV(ce,{href:"/",size:t,onClick:u=>u.preventDefault(),children:"LinkButton"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:458,columnNumber:9},this),e.jsxDEV(d,{size:i,view:"secondary",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:465,columnNumber:9},this),e.jsxDEV(d,{size:i,view:"accent",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:468,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:457,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:448,columnNumber:5},this)}function je({size:s="m",placement:i="center",offsetX:t=0,offsetY:u=0,showCloseButton:f=!0,showBackButton:D=!1,withSubHeader:k=!0,withRightBlock:g=!0,withBody:P=!0,withFooter:F=!0,draggable:x,resizable:U,resizableDisabled:q=!1,resizableDirections:J,resizableHiddenIcons:Q,resizableDefaultSize:ee,resizableMinWidth:oe,resizableMinHeight:se,resizableMaxWidth:ie,resizableMaxHeight:re,resizableIconSize:te}){const[ne,S]=n.useState(!0),ue=U?{disabled:q,directions:J,hiddenIcons:Q,defaultSize:ee,minWidth:oe,minHeight:se,maxWidth:ie,maxHeight:re,iconSize:te}:void 0;return e.jsxDEV(Z,{children:ae=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(d,{onClick:()=>S(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:518,columnNumber:11},this),e.jsxDEV(r,{opened:ne,onToggle:S,frame:ae,placement:i,offset:[t,u],size:s,draggable:x,resizable:ue,style:{width:"396px"},children:[e.jsxDEV(r.Header,{title:"Title",description:"Description",subHeader:k?e.jsxDEV(ze,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:533,columnNumber:42},this):void 0,rightBlock:g?e.jsxDEV(X,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:535,columnNumber:34},this):void 0,showCloseButton:f,onBackButtonClick:D?()=>{}:void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:530,columnNumber:13},this),P&&e.jsxDEV(r.Body,{children:e.jsxDEV(Y,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:542,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:541,columnNumber:15},this),F&&e.jsxDEV(r.Footer,{children:e.jsxDEV(v,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:547,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:546,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:519,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:517,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:515,columnNumber:5},this)}function K(s){return e.jsxDEV(Se,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:558,columnNumber:10},this)}function Be(){const[s,i]=n.useState(!1);return e.jsxDEV(y,{children:e.jsxDEV(w,{children:e.jsxDEV(Z,{children:t=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(d,{onClick:()=>i(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:570,columnNumber:15},this),e.jsxDEV(r,{opened:s,onToggle:i,frame:t,size:"m",placement:"center",style:{width:"396px"},children:[e.jsxDEV(r.Header,{title:"Title",description:"Description",rightBlock:e.jsxDEV(X,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:582,columnNumber:31},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:579,columnNumber:17},this),e.jsxDEV(r.Body,{children:e.jsxDEV(Y,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:585,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:584,columnNumber:17},this),e.jsxDEV(r.Footer,{children:e.jsxDEV(v,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:588,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:587,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:571,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:569,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:567,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:566,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:565,columnNumber:5},this)}const l={name:"Simple",argTypes:W,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},..._({code:ge,previewSource:"shown"}),render:()=>K(e.jsxDEV(Be,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:615,columnNumber:31},void 0))},p={name:"Playground",..._({code:Pe,previewSource:"shown"}),render:s=>K(e.jsxDEV(je,{...s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:621,columnNumber:35},void 0))},N=280,z=600,E=600,j=24,Ve={minHeight:"820px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:a.x16,backgroundColor:M},He={position:"relative",width:"100%",maxWidth:"960px",minHeight:"720px",background:$,borderRadius:A.l,overflow:"hidden",padding:a.x8},Ie={height:"100%",boxSizing:"border-box",border:`1px solid ${h}`,background:b,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"},Ce={height:"40px",display:"flex",alignItems:"center",gap:"8px",padding:"0 12px",border:`1px solid ${h}`,background:b,color:m,boxSizing:"border-box"};function Te(){const[s,i]=n.useState(!0),[t,u]=n.useState(!1),[f,D]=n.useState(!0),k=()=>{D(!1),window.setTimeout(()=>u(!0),30)},g=()=>{u(!1),window.setTimeout(()=>D(!0),N+40)},P=t?de:me,F={width:t?`calc(100% - ${j*2}px)`:`${z}px`,height:t?`calc(100% - ${j*2}px)`:`${E}px`,maxWidth:"100%",maxHeight:"100%",transition:`width ${N}ms ease, height ${N}ms ease`,display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr"},x=n.useRef(null);return e.jsxDEV(y,{children:e.jsxDEV(w,{children:e.jsxDEV("div",{style:Ve,children:e.jsxDEV("div",{ref:x,style:He,children:[e.jsxDEV(d,{onClick:()=>i(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:726,columnNumber:13},this),e.jsxDEV(r,{opened:s,onToggle:i,frame:x,size:"l",placement:"center",offset:[0,0],draggable:f,resizable:f?{defaultSize:{width:z,height:E},minWidth:320,minHeight:220,iconSize:"s"}:!1,style:F,children:[e.jsxDEV(r.Header,{title:"Заголовок PopupDF размера L",description:"Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой.",subHeader:e.jsxDEV("div",{style:Ce,children:[e.jsxDEV(be,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:758,columnNumber:21},this),e.jsxDEV("span",{children:"Кастомный слот"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:759,columnNumber:21},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:757,columnNumber:19},this),rightBlock:e.jsxDEV(le,{size:"xs",view:"secondary",pin:"circle-circle",title:t?"Свернуть":"Развернуть",onClick:()=>t?g():k(),children:e.jsxDEV(P,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:770,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:763,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:753,columnNumber:15},this),e.jsxDEV(r.Body,{children:e.jsxDEV("div",{style:Ie,children:"PopupDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:775,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:774,columnNumber:15},this),e.jsxDEV(r.Footer,{children:e.jsxDEV(v,{size:"l"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:778,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:777,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:727,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:725,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:724,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:723,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:722,columnNumber:5},this)}const c={name:"Size L",argTypes:W,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},render:()=>e.jsxDEV(Te,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:803,columnNumber:17},void 0)};var B,V,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(V=l.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var I,C,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopupDFPlaygroundExample {...args} />)
}`,...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var L,R,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  render: () => <PopupDFSizeLExample />
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const Le=["Simple","Playground","SizeL"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Playground:p,Simple:l,SizeL:c,__namedExportsOrder:Le,default:Fe},Symbol.toStringTag,{value:"Module"}));export{Ze as P};
