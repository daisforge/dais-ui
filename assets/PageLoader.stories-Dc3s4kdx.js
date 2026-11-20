import{j as o}from"./react-DYHuXpTF.js";import{B as c}from"./Box-C_lQk7q2.js";import{P as u}from"./PageLoader-DJoWjXtL.js";const d={title:"Композиции/PageLoader",component:u,tags:["!autodocs"],args:{title:"Загрузка страницы",subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},a="import { Box, PageLoader } from '@daisforge/ui';",e={name:"Загрузка страницы",parameters:{docs:{canvas:{sourceState:"shown"},source:{preCode:a,type:"dynamic",transform:r=>`${a}

${r}`}}},render:r=>o.jsx(c,{display:"flex",height:"480px",children:o.jsx(u,{...r})})};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Загрузка страницы',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        preCode,
        type: 'dynamic',
        transform: (source: string) => \`\${preCode}\\n\\n\${source}\`
      }
    }
  },
  render: args => <Box display="flex" height="480px">
      <PageLoader {...args} />
    </Box>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const m=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{g as P};
