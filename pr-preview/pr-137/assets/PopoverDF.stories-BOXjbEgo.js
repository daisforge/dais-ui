import{j as e,r as d}from"./react-CAOzMBF_.js";import{g}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{P as n}from"./PopoverDF-CWujlpg5.js";import{s as S}from"./constants-DatVHdkd.js";import{cF as ee,cT as z,cQ as w,b3 as j}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as l,F as oe}from"./@salutejs/sdds-finai-CKhMjg07.js";const te={m:"xs",s:"xxs"},re=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],ne=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],se=["top-left","top-right","bottom-left","bottom-right"],o={control:!1,table:{disable:!0}},ie={size:o,target:o,placement:o,trigger:o,defaultOpened:o,opened:o,onToggle:o,hasTail:o,flip:o,shift:o,offset:o,outsideClick:o,delayOpen:o,delayClose:o,showCloseButton:o,withHeaderSlot:o,withBody:o,withFooter:o,resizable:o,resizableDisabled:o,resizableDirections:o,resizableHiddenIcons:o,resizableDefaultSize:o,resizableMinWidth:o,resizableMinHeight:o,resizableMaxWidth:o,resizableMaxHeight:o,resizableIconSize:o},T=`import { useState } from 'react';
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
`,ae=`${T}
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
}`,le=`${T}
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
}`,ce={title:"Локальные компоненты/PopoverDF",component:n,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["m","s"],control:{type:"inline-radio"}},target:{control:!1,table:{disable:!0}},placement:{options:re,control:{type:"select"}},trigger:{options:["click","hover","focus"],control:{type:"select"}},defaultOpened:{control:"boolean"},hasTail:{control:"boolean"},flip:{control:"boolean"},shift:{control:"boolean"},offset:{control:"number"},outsideClick:{control:"boolean"},delayOpen:{control:"number"},delayClose:{control:"number"},showCloseButton:{control:"boolean"},withHeaderSlot:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:ne},resizableHiddenIcons:{control:"check",options:se},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"bottom",trigger:"click",defaultOpened:!1,hasTail:!0,flip:!1,shift:!1,offset:8,outsideClick:!0,delayOpen:0,delayClose:0,showCloseButton:!0,withHeaderSlot:!0,withBody:!0,withFooter:!0,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableDefaultSize:{width:320,height:180},resizableMinWidth:240,resizableMinHeight:120,resizableIconSize:"s"}},de={minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",padding:S.x16,backgroundColor:ee},pe={minHeight:"56px",border:`1px solid ${j}`,background:w,display:"flex",alignItems:"center",color:z,padding:"12px"},ue={minHeight:"56px",border:`1px solid ${j}`,background:w,display:"flex",alignItems:"center",justifyContent:"center",color:z,padding:"12px"};function me({children:t}){return e.jsx("div",{style:de,children:t})}function ge(){return e.jsx("div",{style:pe,children:"PopoverDF.Header / bottomBlock"})}function B(){return e.jsx("div",{style:ue,children:"PopoverDF.Body"})}function fe({size:t="m"}){const r=te[t];return e.jsxs(oe,{mainAxisGap:S.x2,children:[e.jsx(l,{size:r,view:"secondary",children:"Label"}),e.jsx(l,{size:r,view:"accent",children:"Label"})]})}function C({size:t="m"}){return e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:e.jsx(fe,{size:t})})}function be({size:t="m",placement:r="bottom",trigger:c="click",defaultOpened:H=!1,hasTail:k=!0,flip:O=!1,shift:I=!1,offset:A=8,outsideClick:E=!0,delayOpen:M=0,delayClose:R=0,showCloseButton:W=!0,withHeaderSlot:$=!0,withBody:_=!0,withFooter:L=!0,resizable:m,resizableDisabled:G=!1,resizableDirections:Q,resizableHiddenIcons:q,resizableDefaultSize:J,resizableMinWidth:K,resizableMinHeight:N,resizableMaxWidth:U,resizableMaxHeight:V,resizableIconSize:X}){const Y=e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"Title",description:"Description",showCloseButton:W,bottomBlock:$?e.jsx(ge,{}):void 0}),_&&e.jsx(n.Body,{children:e.jsx(B,{})}),L&&e.jsx(n.Footer,{children:e.jsx(C,{size:t})})]}),Z=m?{disabled:G,directions:Q,hiddenIcons:q,defaultSize:J,minWidth:K,minHeight:N,maxWidth:U,maxHeight:V,iconSize:X}:void 0;return e.jsx(n,{target:e.jsx(l,{children:"Открыть PopoverDF"}),placement:r,trigger:c,defaultOpened:H,flip:O,shift:I,offset:A,outsideClick:E,delayOpen:M,delayClose:R,size:t,hasTail:k,resizable:Z,style:m?void 0:{width:"320px"},children:Y})}function u(t){return e.jsx(me,{children:t})}function he(){const[t,r]=d.useState(!1);return e.jsxs(n,{target:e.jsx(l,{onClick:()=>r(!0),children:"Открыть PopoverDF"}),opened:t,onToggle:r,placement:"bottom-start",offset:8,size:"m",style:{width:"320px"},children:[e.jsx(n.Header,{title:"Title",description:"Description"}),e.jsx(n.Body,{children:e.jsx(B,{})}),e.jsx(n.Footer,{children:e.jsx(C,{})})]})}function xe({children:t,...r},c){return e.jsx("button",{ref:c,type:"button",...r,children:t})}const ye=d.forwardRef(xe);function ve(){const[t,r]=d.useState(!1);return e.jsx(n,{target:e.jsx(ye,{children:"Открыть PopoverDF"}),opened:t,onToggle:r,placement:"bottom",hasTail:!0,flip:!0,shift:!0,offset:8,children:e.jsx(n.Body,{children:"Контент всплывающего окна."})})}const Fe=`import { forwardRef, useState } from 'react';
import type { ButtonHTMLAttributes, ForwardedRef } from 'react';

import { PopoverDF } from '@daisforge/ui';

const PopoverTarget = forwardRef(PopoverTargetRender);
`,De=`${Fe}
${g("packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx","PopoverTargetRender")}
${g("packages/storybook/src/stories/PopoverDF/PopoverDF.stories.tsx","PopoverDFCustomTargetExample")}`,s={name:"Simple",argTypes:ie,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...p({code:ae,previewSource:"shown"}),render:()=>u(e.jsx(he,{}))},i={name:"Playground",...p({code:le,previewSource:"shown"}),render:t=>u(e.jsx(be,{...t}))},a={name:"Кастомный target",...p({code:De,previewSource:"shown"}),render:()=>u(e.jsx(ve,{}))};var f,b,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopoverDFPlaygroundExample {...args} />)
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var F,D,P;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Кастомный target',
  ...storySourceDoc({
    code: customTargetCode,
    previewSource: 'shown'
  }),
  render: () => renderInStage(<PopoverDFCustomTargetExample />)
}`,...(P=(D=a.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const Pe=["Simple","Playground","CustomTarget"],He=Object.freeze(Object.defineProperty({__proto__:null,CustomTarget:a,Playground:i,Simple:s,__namedExportsOrder:Pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{He as P};
