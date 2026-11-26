import{b as a}from"./react-UEdzNlUe.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{w as E,e,u as r,a as b}from"./index-Dgmteq0e.js";import{T as i,n as V}from"./TypographyWithCollapse-CE7RDEVD.js";import{db as L,G as M}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";const P={title:"Локальные компоненты/TypographyWithCollapse",component:i,parameters:{layout:"fullscreen"},tags:["!autodocs"],args:{lines:4},argTypes:{children:{control:!1},lines:{control:{type:"number",min:1,step:1}}}},w=`import { TypographyWithCollapse } from '@daisforge/ui';

`,l={name:"Сворачиваемый текст",...y({preCode:`import type { CSSProperties } from 'react';
import { backgroundPrimary, surfaceSolidCard, TypographyWithCollapse } from '@daisforge/ui';

`,previewSource:"shown",type:"code"}),render:({lines:t=4})=>{const n={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:M};return a.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:L},children:[a.jsxDEV("div",{style:n,children:a.jsxDEV(i,{lines:t,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:57,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:56,columnNumber:9},void 0),a.jsxDEV("div",{style:n,children:a.jsxDEV(i,{lines:t,children:"Короткий текст помещается целиком, кнопка не нужна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:47,columnNumber:7},void 0)}},p={name:"Настройка числа строк",argTypes:{children:{control:"text"}},args:{children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},...y({preCode:w,previewSource:"shown",type:"code"}),render:({lines:t=4,children:n})=>a.jsxDEV("div",{style:{maxWidth:480},children:a.jsxDEV(i,{lines:t,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:80,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:79,columnNumber:5},void 0)},d={name:"Раскрытый текст и переключение с клавиатуры",...y({preCode:w,previewSource:"shown",type:"code"}),play:async({canvasElement:t,args:{lines:n=4}})=>{const o=E(t),u=o.getByText(/^Длинный текст/),j=parseFloat(getComputedStyle(u).lineHeight),m=u.getBoundingClientRect().height;if(await e(Math.abs(m-Math.min(V(n)*j,u.scrollHeight))).toBeLessThan(1),u.scrollHeight<=m+1){await e(o.queryByRole("button")).toBeNull();return}const s=await o.findByRole("button",{name:"Показать полностью"});await r.click(s),await e(s).toHaveAttribute("aria-expanded","true");const g=u.parentElement;if(!g)throw new Error("Не найдена область сворачиваемого текста");await b(()=>e(Math.abs(g.getBoundingClientRect().height-u.scrollHeight)).toBeLessThan(1)),s.focus(),await r.keyboard("{Enter}"),await e(s).toHaveAccessibleName("Показать полностью"),await b(()=>e(Math.abs(u.getBoundingClientRect().height-m)).toBeLessThan(1)),await r.keyboard(" "),await e(s).toHaveAttribute("aria-expanded","true"),await b(()=>e(Math.abs(g.getBoundingClientRect().height-u.scrollHeight)).toBeLessThan(1))},render:({lines:t=4})=>a.jsxDEV("div",{style:{maxWidth:480},children:a.jsxDEV(i,{lines:t,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:135,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:134,columnNumber:5},void 0)},c={name:"Текст помещается целиком",...y({preCode:w,previewSource:"shown",type:"code"}),play:async({canvasElement:t})=>{await e(E(t).queryByRole("button")).toBeNull()},render:({lines:t=4})=>a.jsxDEV(i,{lines:t,children:"Короткая подпись."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:149,columnNumber:5},void 0)},h={name:"Фокус на ссылках и обычная высота строки",render:()=>a.jsxDEV("div",{style:{width:320},children:a.jsxDEV(i,{as:"div",lines:2,style:{lineHeight:"normal"},children:["Длинный текст, который можно свернуть и развернуть. ".repeat(12),a.jsxDEV("a",{href:"#hidden-link",children:"Ссылка в конце текста"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:165,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:159,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithCollapse/TypographyWithCollapse.stories.tsx",lineNumber:158,columnNumber:5},void 0),play:async({canvasElement:t})=>{const n=E(t),o=await n.findByRole("button",{name:"Показать полностью"}),u=n.getByText("Ссылка в конце текста");if(!u.parentElement)throw new Error("Не найден элемент типографики");await e(getComputedStyle(u.parentElement).lineHeight).toBe("normal"),await e(u).toHaveAttribute("tabindex","-1"),await r.tab(),await e(o).toHaveFocus(),await r.keyboard("{Enter}"),await e(o).toHaveAttribute("aria-expanded","true"),await e(u).not.toHaveAttribute("tabindex","-1"),await r.tab({shift:!0}),await e(u).toHaveFocus(),o.focus(),await r.keyboard("{Enter}"),await e(u).toHaveAttribute("tabindex","-1"),o.blur()}};var x,C,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,B,k;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(B=p.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var D,T,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var W,N,S;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var H,F,R;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Фокус на ссылках и обычная высота строки',
  render: () => <div style={{
    width: 320
  }}>
      <TypographyWithCollapse as="div" lines={2} style={{
      lineHeight: 'normal'
    }}>
        {'Длинный текст, который можно свернуть и развернуть. '.repeat(12)}
        <a href="#hidden-link">Ссылка в конце текста</a>
      </TypographyWithCollapse>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button', {
      name: 'Показать полностью'
    });
    const link = canvas.getByText('Ссылка в конце текста');
    if (!link.parentElement) throw new Error('Не найден элемент типографики');
    await expect(getComputedStyle(link.parentElement).lineHeight).toBe('normal');
    await expect(link).toHaveAttribute('tabindex', '-1');
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(link).not.toHaveAttribute('tabindex', '-1');
    await userEvent.tab({
      shift: true
    });
    await expect(link).toHaveFocus();
    button.focus();
    await userEvent.keyboard('{Enter}');
    await expect(link).toHaveAttribute('tabindex', '-1');
    // Кадр показывает исходное свёрнутое состояние.
    button.blur();
  }
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const _=["Default","Playground","Expanded","ShortText","HiddenLink"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Expanded:d,HiddenLink:h,Playground:p,ShortText:c,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{J as T};
