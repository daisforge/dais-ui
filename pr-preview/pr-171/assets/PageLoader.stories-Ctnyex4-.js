import{r as m,d as u}from"./react-D2T61mpp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as g}from"./Box-HfshwQ72.js";import{a as i}from"./AiAgentPopup-zBYz23hP.js";import{a as f,b as x,z as E,y as D}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as d}from"./styled-components-CyOceNjt.js";import{S as P}from"./@salutejs/sdds-finai-B4e86Xc-.js";import{P as b}from"./PageTitle-CZI-Ufqv.js";const h=d.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${f};
  text-align: center;
`,N=d.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: ${x};
`,r=m.forwardRef(({title:a="Загрузка страницы",subtitle:o="Данные обрабатываются, обычно это занимает не более 10 секунд",...l},c)=>u.jsxDEV(h,{role:"status","aria-live":"polite","aria-atomic":"true",...l,ref:c,children:[u.jsxDEV(P,{view:"secondary",width:36,height:36,"aria-hidden":"true"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:26,columnNumber:7},void 0),u.jsxDEV(N,{children:[u.jsxDEV(i,{variant:"H3",as:"h3",bold:!0,color:E,breakWord:!0,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:28,columnNumber:9},void 0),o&&u.jsxDEV(i,{variant:"BodyM",as:"p",color:D,breakWord:!0,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:32,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:27,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:19,columnNumber:5},void 0));r.displayName="PageLoader";try{r.displayName="PageLoader",r.__docgenInfo={description:"Состояние первоначальной загрузки. Показывается вместо контента страницы.",displayName:"PageLoader",props:{title:{defaultValue:{value:"Загрузка страницы"},description:"Заголовок загрузки.",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"Данные обрабатываются, обычно это занимает не более 10 секунд"},description:"Описание загрузки. Передайте null или пустую строку, чтобы скрыть описание.",name:"subtitle",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Композиции/PageLoader",component:r,tags:["!autodocs"],args:{title:"Загрузка страницы",subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},e={name:"Загрузка страницы",...p({previewSource:"shown"}),render:a=>u.jsxDEV(g,{display:"flex",flexDirection:"column",height:"480px",gap:"24px",children:[u.jsxDEV(b,{title:"Отчёты"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:25,columnNumber:7},void 0),u.jsxDEV(r,{...a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:26,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:24,columnNumber:5},void 0)};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Загрузка страницы',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: args => <Box display="flex" flexDirection="column" height="480px" gap="24px">
      <PageTitle title="Отчёты" />
      <PageLoader {...args} />
    </Box>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const y=["Default"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,default:k},Symbol.toStringTag,{value:"Module"}));export{V as P};
