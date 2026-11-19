import{r as n,j as u}from"./react-DNGZQ4GM.js";import{T as t}from"./Typography-CitaFUXa.js";import{a as l,b as d,z as c,y as p}from"./@sddsjs/sdds_finai-DkwmD3gE.js";import{q as i}from"./styled-components-DgpxuAGO.js";import{S as m}from"./@salutejs/sdds-finai-ChtfndFI.js";const x=i.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l};
  text-align: center;
`,f=i.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: ${d};
`,e=n.forwardRef(({title:r="Загрузка страницы",subtitle:a,...o},s)=>u.jsxs(x,{role:"status","aria-live":"polite","aria-atomic":"true",...o,ref:s,children:[u.jsx(m,{view:"secondary",width:36,height:36,"aria-hidden":"true"}),u.jsxs(f,{children:[u.jsx(t,{variant:"H3",as:"div",role:void 0,"aria-level":void 0,bold:!0,color:c,breakWord:!0,children:r}),a&&u.jsx(t,{variant:"BodyM",as:"p",color:p,breakWord:!0,children:a})]})]}));e.displayName="PageLoader";try{e.displayName="PageLoader",e.__docgenInfo={description:"Состояние первоначальной загрузки. Показывается вместо контента страницы.",displayName:"PageLoader",props:{title:{defaultValue:{value:"Загрузка страницы"},description:"Заголовок загрузки.",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"Описание загрузки. Отображается, если передана непустая строка.",name:"subtitle",required:!1,type:{name:"string"}}}}}catch{}export{e as P};
