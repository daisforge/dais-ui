import{g as o}from"./getFuncAsString-BvnkA1Hm.js";import{k as l}from"./TableGlide-2COAR0Yt.js";function m({variant:t=0,width:a=96,height:e=96,transparent:s=!1}={}){const{tokens:r}=l,n=[r.dataBlue,r.dataPink,r.dataPositive,r.dataViolet,r.dataOrange],v=n[t%n.length]??n[0],i=Math.min(a,e)*.18;return`<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${e}" viewBox="0 0 ${a} ${e}">
    ${s?"":`<rect width="100%" height="100%" fill="${r.surfaceAccentMinor}" />`}
    <circle cx="${a/2}" cy="${e*.35}" r="${i}" fill="${r.dataWarningMinor}" />
    <ellipse cx="${a/2}" cy="${e}" rx="${a*.38}" ry="${e*.43}" fill="${v}" />
  </svg>`}function c(t={}){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(m(t))}`}function u(){return["Анна Иванова","Борис Петров","Вера Соколова","Глеб Орлов","Дарья Белова"].map((t,a)=>({id:`person-${a+1}`,name:t,url:c({variant:a}),tooltip:t}))}const p=u(),f=c({variant:2,transparent:!0}),A=`
import { tableCanvasTheme } from '@daisforge/ui/components/TableCanvas';

${o("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/avatarFixtures.ts","createAvatarSvg")}
${o("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/avatarFixtures.ts","createAvatarImage")}
${o("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/avatarFixtures.ts","createAvatarItems")}
const avatarItems = createAvatarItems();
const transparentAvatarImage = createAvatarImage({ variant: 2, transparent: true });
`;function x(t,a=t.length){const e=t.map(r=>r.name||r.customText||"Участник").join(", "),s=Math.max(0,a-t.length);return[e,s?`ещё ${s} участников`:""].filter(Boolean).join("; ")}export{p as a,A as b,m as c,x as d,c as e,f as t};
