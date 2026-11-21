import{b as u}from"./react-UEdzNlUe.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{w as A,e as o,u as h,a as y}from"./index-Dgmteq0e.js";import{T as r}from"./TextCollapsing-CpQscvsn.js";import{dr as L,G as R}from"./@sddsjs/sdds_finai-CqI1dsZV.js";const j={title:"Локальные компоненты/TextCollapsing",component:r,parameters:{layout:"fullscreen"},tags:["!autodocs"],args:{collapsedLines:4},argTypes:{children:{control:!1},collapsedLines:{control:{type:"number",min:1,step:1}}}},g=`import { TextCollapsing } from '@daisforge/ui';

`,s={name:"Сворачиваемый текст",...d({preCode:`import type { CSSProperties } from 'react';
import { backgroundPrimary, surfaceSolidCard, TextCollapsing } from '@daisforge/ui';

`,previewSource:"shown",type:"code"}),render:({collapsedLines:e=4})=>{const n={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:R};return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:L},children:[u.jsxDEV("div",{style:n,children:u.jsxDEV(r,{collapsedLines:e,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:56,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:55,columnNumber:9},void 0),u.jsxDEV("div",{style:n,children:u.jsxDEV(r,{collapsedLines:e,children:"Короткий текст помещается целиком, кнопка не нужна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:61,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:60,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:46,columnNumber:7},void 0)}},a={name:"Настройка числа строк",argTypes:{children:{control:"text"}},args:{children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},...d({preCode:g,previewSource:"shown",type:"code"}),render:({collapsedLines:e=4,children:n})=>u.jsxDEV("div",{style:{maxWidth:480},children:u.jsxDEV(r,{collapsedLines:e,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:79,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:78,columnNumber:5},void 0)},i={name:"Раскрытие и сворачивание",...d({preCode:g,previewSource:"shown",type:"code"}),play:async({canvasElement:e,args:{collapsedLines:n=4}})=>{if(document.documentElement.dataset.storybookTestRunner!=="true")return;const p=A(e),t=p.getByText(/^Длинный текст/),F=parseFloat(getComputedStyle(t).lineHeight),m=t.getBoundingClientRect().height,H=Number.isFinite(n)?Math.max(1,Math.floor(n)):4;if(await o(Math.abs(m-Math.min(H*F,t.scrollHeight))).toBeLessThan(1),t.scrollHeight<=m+1){await o(p.queryByRole("button")).toBeNull();return}const c=await p.findByRole("button",{name:"Показать полностью"});await h.click(c),await o(c).toHaveAttribute("aria-expanded","true");const x=t.parentElement;if(!x)throw new Error("Не найдена область сворачиваемого текста");await y(()=>o(x.getBoundingClientRect().height).toBe(t.scrollHeight)),c.focus(),await h.keyboard("{Enter}"),await o(c).toHaveAccessibleName("Показать полностью"),await y(()=>o(t.getBoundingClientRect().height).toBe(m))},render:({collapsedLines:e=4})=>u.jsxDEV("div",{style:{maxWidth:480},children:u.jsxDEV(r,{collapsedLines:e,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:130,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:129,columnNumber:5},void 0)},l={name:"Текст помещается целиком",...d({preCode:g,previewSource:"shown",type:"code"}),play:async({canvasElement:e})=>{await o(A(e).queryByRole("button")).toBeNull()},render:({collapsedLines:e=4})=>u.jsxDEV(r,{collapsedLines:e,children:"Короткая подпись."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextCollapsing/TextCollapsing.stories.tsx",lineNumber:144,columnNumber:5},void 0)};var C,b,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Сворачиваемый текст',
  ...storySourceDoc({
    preCode: "import type { CSSProperties } from 'react';\\nimport { backgroundPrimary, surfaceSolidCard, TextCollapsing } from '@daisforge/ui';\\n\\n",
    previewSource: 'shown',
    type: 'code'
  }),
  render: ({
    collapsedLines = 4
  }) => {
    const cardStyle: CSSProperties = {
      width: 640,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '32px 40px',
      borderRadius: 24,
      background: surfaceSolidCard
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 24,
      background: backgroundPrimary
    }}>
        <div style={cardStyle}>
          <TextCollapsing collapsedLines={collapsedLines}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </TextCollapsing>
        </div>
        <div style={cardStyle}>
          <TextCollapsing collapsedLines={collapsedLines}>
            Короткий текст помещается целиком, кнопка не нужна.
          </TextCollapsing>
        </div>
      </div>;
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var f,w,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Настройка числа строк',
  argTypes: {
    children: {
      control: 'text'
    }
  },
  args: {
    children: 'Длинный текст, который можно свернуть и развернуть. '.repeat(14)
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ({
    collapsedLines = 4,
    children
  }) => <div style={{
    maxWidth: 480
  }}>
      <TextCollapsing collapsedLines={collapsedLines}>
        {children}
      </TextCollapsing>
    </div>
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var D,T,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Раскрытие и сворачивание',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  play: async ({
    canvasElement,
    args: {
      collapsedLines = 4
    }
  }) => {
    // В обычном Storybook пользователь раскрывает текст вручную.
    if (document.documentElement.dataset.storybookTestRunner !== 'true') return;
    const canvas = within(canvasElement);
    const text = canvas.getByText(/^Длинный текст/);
    const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
    const collapsedHeight = text.getBoundingClientRect().height;
    const lines = Number.isFinite(collapsedLines) ? Math.max(1, Math.floor(collapsedLines)) : 4;
    await expect(Math.abs(collapsedHeight - Math.min(lines * lineHeight, text.scrollHeight))).toBeLessThan(1);
    if (text.scrollHeight <= collapsedHeight + 1) {
      await expect(canvas.queryByRole('button')).toBeNull();
      return;
    }
    const button = await canvas.findByRole('button', {
      name: 'Показать полностью'
    });
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    const viewport = text.parentElement;
    if (!viewport) throw new Error('Не найдена область сворачиваемого текста');
    await waitFor(() => expect(viewport.getBoundingClientRect().height).toBe(text.scrollHeight));
    button.focus();
    await userEvent.keyboard('{Enter}');
    await expect(button).toHaveAccessibleName('Показать полностью');
    await waitFor(() => expect(text.getBoundingClientRect().height).toBe(collapsedHeight));
  },
  render: ({
    collapsedLines = 4
  }) => <div style={{
    maxWidth: 480
  }}>
      <TextCollapsing collapsedLines={collapsedLines}>
        {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
      </TextCollapsing>
    </div>
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var k,S,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Текст помещается целиком',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
  },
  render: ({
    collapsedLines = 4
  }) => <TextCollapsing collapsedLines={collapsedLines}>
      Короткая подпись.
    </TextCollapsing>
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const P=["Default","Playground","Expanded","ShortText"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Expanded:i,Playground:a,ShortText:l,__namedExportsOrder:P,default:j},Symbol.toStringTag,{value:"Module"}));export{z as T};
