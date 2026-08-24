import{d as e,r as c}from"./react-D2T61mpp.js";import{g as b}from"./getFuncAsString-C1kndaLg.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{P as t}from"./PopoverDF-DmCEttVK.js";import{s as y}from"./constants-B3b49qmU.js";import{cx as ee,cL as N,cK as w,b0 as S}from"./@salutejs/sdds-themes-DMMPng_c.js";import{b as l,F as oe}from"./@salutejs/sdds-finai-4F5vcRwZ.js";const re={m:"xs",s:"xxs"},se=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],te=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ie=["top-left","top-right","bottom-left","bottom-right"],o={control:!1,table:{disable:!0}},ne={size:o,target:o,placement:o,trigger:o,defaultOpened:o,opened:o,onToggle:o,hasTail:o,flip:o,shift:o,offset:o,outsideClick:o,delayOpen:o,delayClose:o,showCloseButton:o,withHeaderSlot:o,withBody:o,withFooter:o,resizable:o,resizableDisabled:o,resizableDirections:o,resizableHiddenIcons:o,resizableDefaultSize:o,resizableMinWidth:o,resizableMinHeight:o,resizableMaxWidth:o,resizableMaxHeight:o,resizableIconSize:o},z=`import { useState } from 'react';
import { Button, Flow, PopoverDF } from '@daisforge/ui';

// Контент футера — обычные кнопки, которые вы кладёте в PopoverDF.Footer
function FooterActions() {
  return (
    <Flow mainAxisGap={8}>
      <Button size="xs" view="secondary">
        Отмена
      </Button>
      <Button size="xs" view="accent">
        Применить
      </Button>
    </Flow>
  );
}
`,ae=`${z}
function Example() {
  const [opened, setOpened] = useState(false);

  return (
    <PopoverDF
      target={
        <Button onClick={() => setOpened(true)}>Открыть PopoverDF</Button>
      }
      opened={opened}
      onToggle={setOpened}
      placement="bottom-start"
      offset={8}
      size="m"
      style={{ width: '320px' }}
    >
      <PopoverDF.Header title="Title" description="Description" />
      <PopoverDF.Body>Контент поповера</PopoverDF.Body>
      <PopoverDF.Footer>
        <FooterActions />
      </PopoverDF.Footer>
    </PopoverDF>
  );
}`,le=`${z}
function Example() {
  const [opened, setOpened] = useState(false);

  return (
    <PopoverDF
      target={
        <Button onClick={() => setOpened(true)}>Открыть PopoverDF</Button>
      }
      opened={opened}
      onToggle={setOpened}
      placement="bottom"
      trigger="click"
      size="m"
      hasTail
      offset={8}
      resizable={{
        defaultSize: { width: 320, height: 180 },
        minWidth: 240,
        minHeight: 120,
        iconSize: 's',
      }}
    >
      <PopoverDF.Header
        title="Title"
        description="Description"
        showCloseButton
      />
      <PopoverDF.Body>Контент поповера</PopoverDF.Body>
      <PopoverDF.Footer>
        <FooterActions />
      </PopoverDF.Footer>
    </PopoverDF>
  );
}`,ue={title:"Локальные компоненты/PopoverDF",component:t,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["m","s"],control:{type:"inline-radio"}},target:{control:!1,table:{disable:!0}},placement:{options:se,control:{type:"select"}},trigger:{options:["click","hover","focus"],control:{type:"select"}},defaultOpened:{control:"boolean"},hasTail:{control:"boolean"},flip:{control:"boolean"},shift:{control:"boolean"},offset:{control:"number"},outsideClick:{control:"boolean"},delayOpen:{control:"number"},delayClose:{control:"number"},showCloseButton:{control:"boolean"},withHeaderSlot:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:te},resizableHiddenIcons:{control:"check",options:ie},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"bottom",trigger:"click",defaultOpened:!1,hasTail:!0,flip:!1,shift:!1,offset:8,outsideClick:!0,delayOpen:0,delayClose:0,showCloseButton:!0,withHeaderSlot:!0,withBody:!0,withFooter:!0,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableDefaultSize:{width:320,height:180},resizableMinWidth:240,resizableMinHeight:120,resizableIconSize:"s"}},ce={minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",padding:y.x16,backgroundColor:ee},de={minHeight:"56px",border:`1px solid ${S}`,background:w,display:"flex",alignItems:"center",color:N,padding:"12px"},pe={minHeight:"56px",border:`1px solid ${S}`,background:w,display:"flex",alignItems:"center",justifyContent:"center",color:N,padding:"12px"};function me({children:r}){return e.jsxDEV("div",{style:ce,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:357,columnNumber:10},this)}function be(){return e.jsxDEV("div",{style:de,children:"PopoverDF.Header / bottomBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:361,columnNumber:10},this)}function E(){return e.jsxDEV("div",{style:pe,children:"PopoverDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:365,columnNumber:10},this)}function fe({size:r="m"}){const s=re[r];return e.jsxDEV(oe,{mainAxisGap:y.x2,children:[e.jsxDEV(l,{size:s,view:"secondary",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:373,columnNumber:7},this),e.jsxDEV(l,{size:s,view:"accent",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:376,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:372,columnNumber:5},this)}function j({size:r="m"}){return e.jsxDEV("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:e.jsxDEV(fe,{size:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:386,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:385,columnNumber:5},this)}function ve({size:r="m",placement:s="bottom",trigger:u="click",defaultOpened:T=!1,hasTail:B=!0,flip:C=!1,shift:V=!1,offset:H=8,outsideClick:O=!0,delayOpen:I=0,delayClose:A=0,showCloseButton:M=!0,withHeaderSlot:R=!0,withBody:W=!0,withFooter:$=!0,resizable:m,resizableDisabled:_=!1,resizableDirections:L,resizableHiddenIcons:G,resizableDefaultSize:K,resizableMinWidth:q,resizableMinHeight:J,resizableMaxWidth:Q,resizableMaxHeight:U,resizableIconSize:X}){const Y=e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t.Header,{title:"Title",description:"Description",showCloseButton:M,bottomBlock:R?e.jsxDEV(be,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:424,columnNumber:39},this):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:420,columnNumber:7},this),W&&e.jsxDEV(t.Body,{children:e.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:428,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:427,columnNumber:9},this),$&&e.jsxDEV(t.Footer,{children:e.jsxDEV(j,{size:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:433,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:432,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:419,columnNumber:5},this),Z=m?{disabled:_,directions:L,hiddenIcons:G,defaultSize:K,minWidth:q,minHeight:J,maxWidth:Q,maxHeight:U,iconSize:X}:void 0;return e.jsxDEV(t,{target:e.jsxDEV(l,{children:"Открыть PopoverDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:455,columnNumber:15},this),placement:s,trigger:u,defaultOpened:T,flip:C,shift:V,offset:H,outsideClick:O,delayOpen:I,delayClose:A,size:r,hasTail:B,resizable:Z,style:m?void 0:{width:"320px"},children:Y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:454,columnNumber:5},this)}function p(r){return e.jsxDEV(me,{children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:476,columnNumber:10},this)}function De(){const[r,s]=c.useState(!1);return e.jsxDEV(t,{target:e.jsxDEV(l,{onClick:()=>s(!0),children:"Открыть PopoverDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:485,columnNumber:9},this),opened:r,onToggle:s,placement:"bottom-start",offset:8,size:"m",style:{width:"320px"},children:[e.jsxDEV(t.Header,{title:"Title",description:"Description"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:494,columnNumber:7},this),e.jsxDEV(t.Body,{children:e.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:496,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:495,columnNumber:7},this),e.jsxDEV(t.Footer,{children:e.jsxDEV(j,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:499,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:498,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:483,columnNumber:5},this)}function he({children:r,...s},u){return e.jsxDEV("button",{ref:u,type:"button",...s,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:510,columnNumber:5},this)}const ge=c.forwardRef(he);function Fe(){const[r,s]=c.useState(!1);return e.jsxDEV(t,{target:e.jsxDEV(ge,{children:"Открыть PopoverDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:523,columnNumber:15},this),opened:r,onToggle:s,placement:"bottom",hasTail:!0,flip:!0,shift:!0,offset:8,children:e.jsxDEV(t.Body,{children:"Контент всплывающего окна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:532,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:522,columnNumber:5},this)}const Pe=`import { forwardRef, useState } from 'react';
import type { ButtonHTMLAttributes, ForwardedRef } from 'react';

import { PopoverDF } from '@daisforge/ui';

const PopoverTarget = forwardRef(PopoverTargetRender);
`,ke=`${Pe}
${b("packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx","PopoverTargetRender")}
${b("packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx","PopoverDFCustomTargetExample")}`,i={name:"Simple",argTypes:ne,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...d({code:ae,previewSource:"shown"}),render:()=>p(e.jsxDEV(De,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:571,columnNumber:31},void 0))},n={name:"Playground",...d({code:le,previewSource:"shown"}),render:r=>p(e.jsxDEV(ve,{...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:577,columnNumber:35},void 0))},a={name:"Кастомный target",...d({code:ke,previewSource:"shown"}),render:()=>p(e.jsxDEV(Fe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:583,columnNumber:31},void 0))};var f,v,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  render: () => renderInStage(<PopoverDFSimpleExample />)
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,g,F;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopoverDFPlaygroundExample {...args} />)
}`,...(F=(g=n.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var P,k,x;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Кастомный target',
  ...storySourceDoc({
    code: customTargetCode,
    previewSource: 'shown'
  }),
  render: () => renderInStage(<PopoverDFCustomTargetExample />)
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const xe=["Simple","Playground","CustomTarget"],Te=Object.freeze(Object.defineProperty({__proto__:null,CustomTarget:a,Playground:n,Simple:i,__namedExportsOrder:xe,default:ue},Symbol.toStringTag,{value:"Module"}));export{Te as P};
