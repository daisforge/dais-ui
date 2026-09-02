import{d as e}from"./react-D2T61mpp.js";import{g as f}from"./getFuncAsString-Bp1PYzKJ.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{A as s}from"./AiAgentPopover-B5mn_-_p.js";import{w as P}from"./@salutejs/sdds-themes-CZ516YZq.js";import{h as x,p as k,b as i}from"./@salutejs/sdds-finai-T191Q1_H.js";const y={title:"Локальные компоненты/AiAgentPopover",component:s,tags:["!autodocs"],parameters:{layout:"fullscreen"}};function b({onClose:t}){return e.jsxDEV("div",{style:{minWidth:"224px",display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxDEV(x,{children:"AI Assistant"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:37,columnNumber:7},this),e.jsxDEV(k,{style:{margin:"8px 0",color:P},children:"Пример содержимого AI-ассистента"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:38,columnNumber:7},this),e.jsxDEV("div",{style:{display:"flex",gap:"8px",width:"100%",marginTop:"auto"},children:[e.jsxDEV(i,{size:"s",view:"secondary",onClick:t,style:{flexGrow:1},children:"Отмена"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:49,columnNumber:9},this),e.jsxDEV(i,{size:"s",view:"accent",style:{flexGrow:1},children:"Применить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:57,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:41,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:29,columnNumber:5},this)}const h=`
import { AiAgentPopover } from '@daisforge/ui';

${f("packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx","PopoverContent")}

`,o={name:"Resizable",...v({preCode:h,previewSource:"shown"}),render(){return e.jsxDEV("div",{style:{height:"100vh"},children:e.jsxDEV(s,{draggable:!0,defaultPosition:"bottom-right",dragBoundary:{bottom:10,top:10,left:10,right:10},resizable:()=>({minWidth:250}),onResizeStart:()=>{console.debug("resize start")},onResizeEnd:()=>{console.debug("resize end")},useStorage:!0,targetDataAttributes:{"data-testid":"aiAgentPopover"},children:e.jsxDEV(b,{onClose:()=>alert("close")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:114,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:91,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:86,columnNumber:7},this)}},r={name:"Example",...v({preCode:h,previewSource:"shown"}),render(){return e.jsxDEV("div",{style:{height:"100vh"},children:e.jsxDEV(s,{draggable:!0,defaultPosition:"bottom-right",dragBoundary:{bottom:10,top:10,left:10,right:10},onPositionChange:t=>{console.debug("pos",t)},useStorage:!0,targetDataAttributes:{"data-testid":"aiAgentPopover"},children:e.jsxDEV(b,{onClose:()=>alert("close")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:155,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:137,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx",lineNumber:132,columnNumber:7},this)}};var n,u,a,l,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Resizable',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render() {
    return <div style={{
      height: '100vh'
    }}>
        <AiAgentPopover draggable defaultPosition="bottom-right" dragBoundary={{
        bottom: 10,
        top: 10,
        left: 10,
        right: 10
      }} resizable={() => ({
        minWidth: 250
      })} onResizeStart={() => {
        // eslint-disable-next-line no-console
        console.debug('resize start');
      }} onResizeEnd={() => {
        // eslint-disable-next-line no-console
        console.debug('resize end');
      }} useStorage targetDataAttributes={{
        'data-testid': 'aiAgentPopover'
      }}>
          <PopoverContent onClose={() => alert('close')} />
        </AiAgentPopover>
      </div>;
  }
}`,...(a=(u=o.parameters)==null?void 0:u.docs)==null?void 0:a.source},description:{story:"Пример с поддержкой ресайза контента popover.",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var c,m,p,g,A;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Example',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render() {
    return <div style={{
      height: '100vh'
    }}>
        <AiAgentPopover draggable defaultPosition="bottom-right" dragBoundary={{
        bottom: 10,
        top: 10,
        left: 10,
        right: 10
      }} onPositionChange={pos => {
        // eslint-disable-next-line no-console
        console.debug('pos', pos);
      }} useStorage targetDataAttributes={{
        'data-testid': 'aiAgentPopover'
      }}>
          <PopoverContent onClose={() => alert('close')} />
        </AiAgentPopover>
      </div>;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Состояние открытия управляется внутри компонента.",...(A=(g=r.parameters)==null?void 0:g.docs)==null?void 0:A.description}}};const N=["Resizable","Uncontrolled"],j=Object.freeze(Object.defineProperty({__proto__:null,Resizable:o,Uncontrolled:r,__namedExportsOrder:N,default:y},Symbol.toStringTag,{value:"Module"}));export{j as A};
