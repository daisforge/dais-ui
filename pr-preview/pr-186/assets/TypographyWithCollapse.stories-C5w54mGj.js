import{b as u}from"./react-UEdzNlUe.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{w as N,e as t,u as m,a as g}from"./index-Dgmteq0e.js";import{T as r,n as H}from"./TypographyWithCollapse-DmdY9ih2.js";import{dr as F,G as R}from"./@sddsjs/sdds_finai-CqI1dsZV.js";const j={title:"Композиции/TypographyWithCollapse",component:r,parameters:{layout:"fullscreen"},tags:["!autodocs"],args:{lines:4},argTypes:{children:{control:!1},lines:{control:{type:"number",min:1,step:1}}}},b=`import { TypographyWithCollapse } from '@daisforge/ui';

`,i={name:"Сворачиваемый текст",...d({preCode:`import type { CSSProperties } from 'react';
import { backgroundPrimary, surfaceSolidCard, TypographyWithCollapse } from '@daisforge/ui';

`,previewSource:"shown",type:"code"}),render:({lines:e=4})=>{const n={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:R};return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:F},children:[u.jsxDEV("div",{style:n,children:u.jsxDEV(r,{lines:e,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:57,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:56,columnNumber:9},void 0),u.jsxDEV("div",{style:n,children:u.jsxDEV(r,{lines:e,children:"Короткий текст помещается целиком, кнопка не нужна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:47,columnNumber:7},void 0)}},s={name:"Настройка числа строк",argTypes:{children:{control:"text"}},args:{children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},...d({preCode:b,previewSource:"shown",type:"code"}),render:({lines:e=4,children:n})=>u.jsxDEV("div",{style:{maxWidth:480},children:u.jsxDEV(r,{lines:e,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:80,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:79,columnNumber:5},void 0)},l={name:"Раскрытый текст и переключение с клавиатуры",...d({preCode:b,previewSource:"shown",type:"code"}),play:async({canvasElement:e,args:{lines:n=4}})=>{const c=N(e),o=c.getByText(/^Длинный текст/),A=parseFloat(getComputedStyle(o).lineHeight),h=o.getBoundingClientRect().height;if(await t(Math.abs(h-Math.min(H(n)*A,o.scrollHeight))).toBeLessThan(1),o.scrollHeight<=h+1){await t(c.queryByRole("button")).toBeNull();return}const a=await c.findByRole("button",{name:"Показать полностью"});await m.click(a),await t(a).toHaveAttribute("aria-expanded","true");const y=o.parentElement;if(!y)throw new Error("Не найдена область сворачиваемого текста");await g(()=>t(Math.abs(y.getBoundingClientRect().height-o.scrollHeight)).toBeLessThan(1)),a.focus(),await m.keyboard("{Enter}"),await t(a).toHaveAccessibleName("Показать полностью"),await g(()=>t(Math.abs(o.getBoundingClientRect().height-h)).toBeLessThan(1)),await m.keyboard(" "),await t(a).toHaveAttribute("aria-expanded","true"),await g(()=>t(Math.abs(y.getBoundingClientRect().height-o.scrollHeight)).toBeLessThan(1))},render:({lines:e=4})=>u.jsxDEV("div",{style:{maxWidth:480},children:u.jsxDEV(r,{lines:e,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:135,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:134,columnNumber:5},void 0)},p={name:"Текст помещается целиком",...d({preCode:b,previewSource:"shown",type:"code"}),play:async({canvasElement:e})=>{await t(N(e).queryByRole("button")).toBeNull()},render:({lines:e=4})=>u.jsxDEV(r,{lines:e,children:"Короткая подпись."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:149,columnNumber:5},void 0)};var C,x,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Сворачиваемый текст',
  ...storySourceDoc({
    preCode: "import type { CSSProperties } from 'react';\\nimport { backgroundPrimary, surfaceSolidCard, TypographyWithCollapse } from '@daisforge/ui';\\n\\n",
    previewSource: 'shown',
    type: 'code'
  }),
  render: ({
    lines = 4
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
          <TypographyWithCollapse lines={lines}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </TypographyWithCollapse>
        </div>
        <div style={cardStyle}>
          <TypographyWithCollapse lines={lines}>
            Короткий текст помещается целиком, кнопка не нужна.
          </TypographyWithCollapse>
        </div>
      </div>;
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var E,f,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    lines = 4,
    children
  }) => <div style={{
    maxWidth: 480
  }}>
      <TypographyWithCollapse lines={lines}>{children}</TypographyWithCollapse>
    </div>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,B,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Раскрытый текст и переключение с клавиатуры',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  play: async ({
    canvasElement,
    args: {
      lines = 4
    }
  }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText(/^Длинный текст/);
    const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
    const collapsedHeight = text.getBoundingClientRect().height;
    await expect(Math.abs(collapsedHeight - Math.min(normalizeLines(lines) * lineHeight, text.scrollHeight))).toBeLessThan(1);
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
    await waitFor(() => expect(Math.abs(viewport.getBoundingClientRect().height - text.scrollHeight)).toBeLessThan(1));
    button.focus();
    await userEvent.keyboard('{Enter}');
    await expect(button).toHaveAccessibleName('Показать полностью');
    await waitFor(() => expect(Math.abs(text.getBoundingClientRect().height - collapsedHeight)).toBeLessThan(1));
    await userEvent.keyboard(' ');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(Math.abs(viewport.getBoundingClientRect().height - text.scrollHeight)).toBeLessThan(1));
  },
  render: ({
    lines = 4
  }) => <div style={{
    maxWidth: 480
  }}>
      <TypographyWithCollapse lines={lines}>
        {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
      </TypographyWithCollapse>
    </div>
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var k,W,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    lines = 4
  }) => <TypographyWithCollapse lines={lines}>
      Короткая подпись.
    </TypographyWithCollapse>
}`,...(S=(W=p.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const M=["Default","Playground","Expanded","ShortText"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Expanded:l,Playground:s,ShortText:p,__namedExportsOrder:M,default:j},Symbol.toStringTag,{value:"Module"}));export{q as T};
