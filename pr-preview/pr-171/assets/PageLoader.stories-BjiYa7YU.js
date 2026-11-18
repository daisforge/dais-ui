import{r as m,d as u}from"./react-D2T61mpp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as g}from"./Box-HfshwQ72.js";import{a as i}from"./AiAgentPopup-Bf5wrkF2.js";import{a as f,b as x,z as E,y as D}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as d}from"./styled-components-CyOceNjt.js";import{S as h}from"./@salutejs/sdds-finai-B4e86Xc-.js";const b=d.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${f};
  text-align: center;
`,y=d.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: ${x};
`,r=m.forwardRef(({title:a="Загрузка страницы",subtitle:o="Данные обрабатываются, обычно это занимает не более 10 секунд",...l},c)=>u.jsxDEV(b,{role:"status","aria-live":"polite","aria-atomic":"true",...l,ref:c,children:[u.jsxDEV(h,{view:"secondary",width:36,height:36,"aria-hidden":"true"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:26,columnNumber:7},void 0),u.jsxDEV(y,{children:[u.jsxDEV(i,{variant:"H3",as:"h3",bold:!0,color:E,breakWord:!0,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:28,columnNumber:9},void 0),o&&u.jsxDEV(i,{variant:"BodyM",as:"p",color:D,breakWord:!0,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:32,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:27,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:19,columnNumber:5},void 0));r.displayName="PageLoader";try{r.displayName="PageLoader",r.__docgenInfo={description:"Состояние первоначальной загрузки. Показывается вместо контента страницы.",displayName:"PageLoader",props:{title:{defaultValue:{value:"Загрузка страницы"},description:"Заголовок загрузки.",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"Данные обрабатываются, обычно это занимает не более 10 секунд"},description:"Описание загрузки. Передайте null или пустую строку, чтобы скрыть описание.",name:"subtitle",required:!1,type:{name:"string"}}}}}catch{}const N={title:"Композиции/PageLoader",component:r,tags:["!autodocs"],args:{title:"Загрузка страницы",subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},e={name:"Загрузка страницы",...p({previewSource:"shown"}),render:a=>u.jsxDEV(g,{display:"flex",height:"480px",children:u.jsxDEV(r,{...a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:23,columnNumber:5},void 0)};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Загрузка страницы',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: args => <Box display="flex" height="480px">
      <PageLoader {...args} />
    </Box>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const P=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{A as P};
