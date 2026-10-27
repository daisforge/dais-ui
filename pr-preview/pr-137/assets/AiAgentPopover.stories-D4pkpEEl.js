import{j as e}from"./react-CAOzMBF_.js";import{g as x}from"./getFuncAsString-DnrLf2YT.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{A as r}from"./AiAgentPopover-D68wEWcZ.js";import{y}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{f,m as P,t as s}from"./@salutejs/sdds-finai-CKhMjg07.js";const S={title:"Локальные компоненты/AiAgentPopover",component:r,tags:["!autodocs"],parameters:{layout:"fullscreen"}};function v({onClose:n}){return e.jsxs("div",{style:{minWidth:"224px",display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx(f,{children:"AI Assistant"}),e.jsx(P,{style:{margin:"8px 0",color:y},children:"Пример содержимого AI-ассистента"}),e.jsxs("div",{style:{display:"flex",gap:"8px",width:"100%",marginTop:"auto"},children:[e.jsx(s,{size:"s",view:"secondary",onClick:n,style:{flexGrow:1},children:"Отмена"}),e.jsx(s,{size:"s",view:"accent",style:{flexGrow:1},children:"Применить"})]})]})}const b=`
import { AiAgentPopover } from '@daisforge/ui';

${x("packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx","PopoverContent")}

`,o={name:"Resizable",...A({preCode:b,previewSource:"shown"}),render(){return e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{draggable:!0,defaultPosition:"bottom-right",dragBoundary:{bottom:10,top:10,left:10,right:10},resizable:()=>({minWidth:250}),onResizeStart:()=>{console.debug("resize start")},onResizeEnd:()=>{console.debug("resize end")},useStorage:!0,targetDataAttributes:{"data-testid":"aiAgentPopover"},children:e.jsx(v,{onClose:()=>alert("close")})})})}},t={name:"Example",...A({preCode:b,previewSource:"shown"}),render(){return e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{draggable:!0,defaultPosition:"bottom-right",dragBoundary:{bottom:10,top:10,left:10,right:10},onPositionChange:n=>{console.debug("pos",n)},useStorage:!0,targetDataAttributes:{"data-testid":"aiAgentPopover"},children:e.jsx(v,{onClose:()=>alert("close")})})})}};var i,u,a,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(u=o.parameters)==null?void 0:u.docs)==null?void 0:a.source},description:{story:"Пример с поддержкой ресайза контента popover.",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var c,p,g,m,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"Состояние открытия управляется внутри компонента.",...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};const z=["Resizable","Uncontrolled"],R=Object.freeze(Object.defineProperty({__proto__:null,Resizable:o,Uncontrolled:t,__namedExportsOrder:z,default:S},Symbol.toStringTag,{value:"Module"}));export{R as A};
