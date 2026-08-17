import{d as o,r as J}from"./react-D2T61mpp.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{P as s}from"./PopoverDF-tAQYn8oN.js";import{s as h}from"./constants-B3b49qmU.js";import{cx as Q,cL as v,cK as D,b0 as g}from"./@salutejs/sdds-themes-DMMPng_c.js";import{b as a,F as U}from"./@salutejs/sdds-finai-CPdoK_07.js";const X={m:"xs",s:"xxs"},Y=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],Z=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ee=["top-left","top-right","bottom-left","bottom-right"],e={control:!1,table:{disable:!0}},oe={size:e,target:e,placement:e,trigger:e,defaultOpened:e,opened:e,onToggle:e,hasTail:e,flip:e,shift:e,offset:e,outsideClick:e,delayOpen:e,delayClose:e,showCloseButton:e,withHeaderSlot:e,withBody:e,withFooter:e,resizable:e,resizableDisabled:e,resizableDirections:e,resizableHiddenIcons:e,resizableDefaultSize:e,resizableMinWidth:e,resizableMinHeight:e,resizableMaxWidth:e,resizableMaxHeight:e,resizableIconSize:e},F=`import { useState } from 'react';
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
`,re=`${F}
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
}`,se=`${F}
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
}`,te={title:"Локальные компоненты/PopoverDF",component:s,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["m","s"],control:{type:"inline-radio"}},target:{control:!1,table:{disable:!0}},placement:{options:Y,control:{type:"select"}},trigger:{options:["click","hover","focus"],control:{type:"select"}},defaultOpened:{control:"boolean"},hasTail:{control:"boolean"},flip:{control:"boolean"},shift:{control:"boolean"},offset:{control:"number"},outsideClick:{control:"boolean"},delayOpen:{control:"number"},delayClose:{control:"number"},showCloseButton:{control:"boolean"},withHeaderSlot:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:Z},resizableHiddenIcons:{control:"check",options:ee},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"bottom",trigger:"click",defaultOpened:!1,hasTail:!0,flip:!1,shift:!1,offset:8,outsideClick:!0,delayOpen:0,delayClose:0,showCloseButton:!0,withHeaderSlot:!0,withBody:!0,withFooter:!0,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableDefaultSize:{width:320,height:180},resizableMinWidth:240,resizableMinHeight:120,resizableIconSize:"s"}},ie={minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",padding:h.x16,backgroundColor:Q},ne={minHeight:"56px",border:`1px solid ${g}`,background:D,display:"flex",alignItems:"center",color:v,padding:"12px"},ae={minHeight:"56px",border:`1px solid ${g}`,background:D,display:"flex",alignItems:"center",justifyContent:"center",color:v,padding:"12px"};function le({children:r}){return o.jsxDEV("div",{style:ie,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:355,columnNumber:10},this)}function ue(){return o.jsxDEV("div",{style:ne,children:"PopoverDF.Header / bottomBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:359,columnNumber:10},this)}function x(){return o.jsxDEV("div",{style:ae,children:"PopoverDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:363,columnNumber:10},this)}function ce({size:r="m"}){const t=X[r];return o.jsxDEV(U,{mainAxisGap:h.x2,children:[o.jsxDEV(a,{size:t,view:"secondary",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:371,columnNumber:7},this),o.jsxDEV(a,{size:t,view:"accent",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:374,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:370,columnNumber:5},this)}function k({size:r="m"}){return o.jsxDEV("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:o.jsxDEV(ce,{size:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:384,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:383,columnNumber:5},this)}function de({size:r="m",placement:t="bottom",trigger:y="click",defaultOpened:N=!1,hasTail:w=!0,flip:z=!1,shift:S=!1,offset:E=8,outsideClick:j=!0,delayOpen:B=0,delayClose:V=0,showCloseButton:H=!0,withHeaderSlot:C=!0,withBody:T=!0,withFooter:O=!0,resizable:l,resizableDisabled:I=!1,resizableDirections:M,resizableHiddenIcons:A,resizableDefaultSize:W,resizableMinWidth:_,resizableMinHeight:$,resizableMaxWidth:L,resizableMaxHeight:G,resizableIconSize:K}){const R=o.jsxDEV(o.Fragment,{children:[o.jsxDEV(s.Header,{title:"Title",description:"Description",showCloseButton:H,bottomBlock:C?o.jsxDEV(ue,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:422,columnNumber:39},this):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:418,columnNumber:7},this),T&&o.jsxDEV(s.Body,{children:o.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:426,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:425,columnNumber:9},this),O&&o.jsxDEV(s.Footer,{children:o.jsxDEV(k,{size:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:431,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:430,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:417,columnNumber:5},this),q=l?{disabled:I,directions:M,hiddenIcons:A,defaultSize:W,minWidth:_,minHeight:$,maxWidth:L,maxHeight:G,iconSize:K}:void 0;return o.jsxDEV(s,{target:o.jsxDEV(a,{children:"Открыть PopoverDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:453,columnNumber:15},this),placement:t,trigger:y,defaultOpened:N,flip:z,shift:S,offset:E,outsideClick:j,delayOpen:B,delayClose:V,size:r,hasTail:w,resizable:q,style:l?void 0:{width:"320px"},children:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:452,columnNumber:5},this)}function P(r){return o.jsxDEV(le,{children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:474,columnNumber:10},this)}function pe(){const[r,t]=J.useState(!1);return o.jsxDEV(s,{target:o.jsxDEV(a,{onClick:()=>t(!0),children:"Открыть PopoverDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:483,columnNumber:9},this),opened:r,onToggle:t,placement:"bottom-start",offset:8,size:"m",style:{width:"320px"},children:[o.jsxDEV(s.Header,{title:"Title",description:"Description"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:492,columnNumber:7},this),o.jsxDEV(s.Body,{children:o.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:494,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:493,columnNumber:7},this),o.jsxDEV(s.Footer,{children:o.jsxDEV(k,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:497,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:496,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:481,columnNumber:5},this)}const i={name:"Simple",argTypes:oe,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...f({code:re,previewSource:"shown"}),render:()=>P(o.jsxDEV(pe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:519,columnNumber:31},void 0))},n={name:"Playground",...f({code:se,previewSource:"shown"}),render:r=>P(o.jsxDEV(de,{...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx",lineNumber:525,columnNumber:35},void 0))};var u,c,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopoverDFPlaygroundExample {...args} />)
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const me=["Simple","Playground"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Simple:i,__namedExportsOrder:me,default:te},Symbol.toStringTag,{value:"Module"}));export{Fe as P};
