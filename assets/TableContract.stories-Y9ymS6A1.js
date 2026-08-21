import{j,p as y,s as C,k,l as A,g as v,c as z}from"./subRows.routes-9QGbWQwG.js";import{T as M}from"./TableContract-DljTGunh.js";const q={title:"Локальные компоненты/TableContract",tags:["!autodocs"],parameters:{screenshot:{skip:!0}},component:M},e=w=>async({params:i,pathParams:p,...G})=>fetch(`${w}${p?`/${p}`:""}${i?`?${i}`:""}`,G),r={args:{fetcher:e(j.ENDPOINT)}},a={args:{fetcher:e(y.ENDPOINT)}},t={args:{fetcher:e(C.ENDPOINT)}},s={args:{fetcher:e(k.ENDPOINT)}},o={args:{fetcher:e(A.ENDPOINT)}},c={args:{fetcher:e(v.ENDPOINT)}},n={args:{fetcher:e(z.ENDPOINT)}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(simpleRoute.ENDPOINT)
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,d,N;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(paginationRoute.ENDPOINT)
  }
}`,...(N=(d=a.parameters)==null?void 0:d.docs)==null?void 0:N.source}}};var h,E,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(searchingRoute.ENDPOINT)
  }
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,S,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(sortingRoute.ENDPOINT)
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var O,P,D;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(subRowsRoute.ENDPOINT)
  }
}`,...(D=(P=o.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var I,F,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(editingExampleGetRoute.ENDPOINT)
  }
}`,...(b=(F=c.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var x,_,$;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fetcher: createFetcher(allFeatsExampleGetRoute.ENDPOINT)
  }
}`,...($=(_=n.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const B=["Simple","Pagination","Searching","Sorting","SubRows","Editing","AllFeats"],K=Object.freeze(Object.defineProperty({__proto__:null,AllFeats:n,Editing:c,Pagination:a,Searching:t,Simple:r,Sorting:s,SubRows:o,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{a as P,r as S,K as T,t as a,s as b,o as c};
