import{d as e,r as c}from"./react-D2T61mpp.js";import{s as F}from"./storySourceDoc-tVKyHcEN.js";import{P as i}from"./PopupDF-Bop2JMMP.js";import{s as a,c as Q}from"./constants-BudGGuoE.js";import{cx as U,P as Z,cL as d,cK as m,b0 as b}from"./@salutejs/sdds-themes-CUTvIVmO.js";import{b as l,F as ee,G as oe}from"./@salutejs/sdds-finai-Ck7lGlG8.js";import{ck as N,bf as y}from"./vendor-C18rJQsW.js";const se={m:"xs",s:"xxs"},re={m:"xs",s:"xxs"},ie=["center","top","bottom","right","left","top-right","top-left","bottom-right","bottom-left"],te=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ne=["top-left","top-right","bottom-left","bottom-right"],o={control:!1,table:{disable:!0}},ue={size:o,opened:o,defaultOpened:o,onToggle:o,placement:o,offset:o,offsetX:o,offsetY:o,frame:o,style:o,showCloseButton:o,showBackButton:o,withSubHeader:o,withRightBlock:o,withBody:o,withFooter:o,draggable:o,resizable:o,resizableDisabled:o,resizableDirections:o,resizableHiddenIcons:o,resizableDefaultSize:o,resizableMinWidth:o,resizableMinHeight:o,resizableMaxWidth:o,resizableMaxHeight:o,resizableIconSize:o},w=`import { useState } from 'react';
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
`,ae=`${w}
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
}`,le=`${w}
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
}`,pe={title:"Локальные компоненты/PopupDF",component:i,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["m","s"],control:{type:"inline-radio"}},placement:{options:ie,control:{type:"select"}},offsetX:{control:"number"},offsetY:{control:"number"},showCloseButton:{control:"boolean"},showBackButton:{control:"boolean"},withSubHeader:{control:"boolean"},withRightBlock:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},draggable:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:te},resizableHiddenIcons:{control:"check",options:ne},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"center",offsetX:0,offsetY:0,showCloseButton:!0,showBackButton:!1,withSubHeader:!0,withRightBlock:!0,withBody:!0,withFooter:!0,draggable:!1,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableIconSize:"s",resizableDefaultSize:{width:300,height:180},resizableMinWidth:240,resizableMinHeight:120}},ce={minHeight:"560px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:a.x16,backgroundColor:U},de={position:"relative",width:"100%",maxWidth:"920px",minHeight:"480px",background:Z,borderRadius:Q.l,overflow:"hidden",padding:a.x8},me={minHeight:"40px",border:`1px solid ${b}`,background:m,display:"flex",alignItems:"center",color:d,padding:"10px 12px"},be={minHeight:"56px",border:`1px solid ${b}`,background:m,display:"flex",alignItems:"center",justifyContent:"center",color:d,padding:"12px"};function he({children:s}){return e.jsxDEV(N,{children:e.jsxDEV(y,{children:e.jsxDEV("div",{style:ce,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:380,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:379,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:378,columnNumber:5},this)}function v({children:s}){const r=c.useRef(null);return e.jsxDEV("div",{ref:r,style:de,children:s(r)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:394,columnNumber:5},this)}function fe(){return e.jsxDEV("div",{style:me,children:"subHeader"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:401,columnNumber:10},this)}function S({size:s="m"}){return e.jsxDEV("div",{style:{height:s==="s"?"24px":"32px",display:"flex",alignItems:"center",padding:"0 8px",border:`1px solid ${b}`,background:m,color:d,whiteSpace:"nowrap",boxSizing:"border-box"},children:"rightBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:406,columnNumber:5},this)}function z(){return e.jsxDEV("div",{style:be,children:"PopupDF.Body"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:425,columnNumber:10},this)}function B({size:s="m"}){const r=se[s],t=re[s];return e.jsxDEV("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:a.x4},children:e.jsxDEV(ee,{mainAxisGap:a.x2,children:[e.jsxDEV(oe,{href:"/",size:t,onClick:p=>p.preventDefault(),children:"LinkButton"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:443,columnNumber:9},this),e.jsxDEV(l,{size:r,view:"secondary",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:450,columnNumber:9},this),e.jsxDEV(l,{size:r,view:"accent",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:453,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:442,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:433,columnNumber:5},this)}function De({size:s="m",placement:r="center",offsetX:t=0,offsetY:p=0,showCloseButton:j=!0,showBackButton:V=!1,withSubHeader:H=!0,withRightBlock:C=!0,withBody:I=!0,withFooter:T=!0,draggable:R,resizable:O,resizableDisabled:M=!1,resizableDirections:A,resizableHiddenIcons:L,resizableDefaultSize:W,resizableMinWidth:_,resizableMinHeight:$,resizableMaxWidth:G,resizableMaxHeight:X,resizableIconSize:Y}){const[K,h]=c.useState(!0),q=O?{disabled:M,directions:A,hiddenIcons:L,defaultSize:W,minWidth:_,minHeight:$,maxWidth:G,maxHeight:X,iconSize:Y}:void 0;return e.jsxDEV(v,{children:J=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{onClick:()=>h(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:503,columnNumber:11},this),e.jsxDEV(i,{opened:K,onToggle:h,frame:J,placement:r,offset:[t,p],size:s,draggable:R,resizable:q,style:{width:"396px"},children:[e.jsxDEV(i.Header,{title:"Title",description:"Description",subHeader:H?e.jsxDEV(fe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:518,columnNumber:42},this):void 0,rightBlock:C?e.jsxDEV(S,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:520,columnNumber:34},this):void 0,showCloseButton:j,onBackButtonClick:V?()=>{}:void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:515,columnNumber:13},this),I&&e.jsxDEV(i.Body,{children:e.jsxDEV(z,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:527,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:526,columnNumber:15},this),T&&e.jsxDEV(i.Footer,{children:e.jsxDEV(B,{size:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:532,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:531,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:504,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:502,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:500,columnNumber:5},this)}function E(s){return e.jsxDEV(he,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:543,columnNumber:10},this)}function ke(){const[s,r]=c.useState(!1);return e.jsxDEV(N,{children:e.jsxDEV(y,{children:e.jsxDEV(v,{children:t=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{onClick:()=>r(!0),children:"Открыть PopupDF"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:555,columnNumber:15},this),e.jsxDEV(i,{opened:s,onToggle:r,frame:t,size:"m",placement:"center",style:{width:"396px"},children:[e.jsxDEV(i.Header,{title:"Title",description:"Description",rightBlock:e.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:567,columnNumber:31},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:564,columnNumber:17},this),e.jsxDEV(i.Body,{children:e.jsxDEV(z,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:570,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:569,columnNumber:17},this),e.jsxDEV(i.Footer,{children:e.jsxDEV(B,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:573,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:572,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:556,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:554,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:552,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:551,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:550,columnNumber:5},this)}const n={name:"Simple",argTypes:ue,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...F({code:ae,previewSource:"shown"}),render:()=>E(e.jsxDEV(ke,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:600,columnNumber:31},void 0))},u={name:"Playground",...F({code:le,previewSource:"shown"}),render:s=>E(e.jsxDEV(De,{...s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PopupDF/PopupDF.stories.tsx",lineNumber:606,columnNumber:35},void 0))};var f,D,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(D=n.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var x,g,P;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopupDFPlaygroundExample {...args} />)
}`,...(P=(g=u.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const xe=["Simple","Playground"],Se=Object.freeze(Object.defineProperty({__proto__:null,Playground:u,Simple:n,__namedExportsOrder:xe,default:pe},Symbol.toStringTag,{value:"Module"}));export{Se as P};
