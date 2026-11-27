import{j as n}from"./react-DYHuXpTF.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{w,e as u,u as o,a as E}from"./index-BmaccWcy.js";import{T as i,n as M}from"./TypographyWithCollapse-D_jZxz22.js";import{db as P,G as _}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";const N={title:"Локальные компоненты/TypographyWithCollapse",component:i,parameters:{layout:"fullscreen"},tags:["!autodocs"],args:{lines:4},argTypes:{children:{control:!1},lines:{control:{type:"number",min:1,step:1}}}},b=`import { TypographyWithCollapse } from '@daisforge/ui';

`,l={name:"Сворачиваемый текст",...y({preCode:`import type { CSSProperties } from 'react';
import { backgroundPrimary, surfaceSolidCard, TypographyWithCollapse } from '@daisforge/ui';

`,previewSource:"shown",type:"code"}),render:({lines:t=4})=>{const a={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:_};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:P},children:[n.jsx("div",{style:a,children:n.jsx(i,{lines:t,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)})}),n.jsx("div",{style:a,children:n.jsx(i,{lines:t,children:"Короткий текст помещается целиком, кнопка не нужна."})})]})}},c={name:"Настройка числа строк",argTypes:{children:{control:"text"}},args:{children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},...y({preCode:b,previewSource:"shown",type:"code"}),render:({lines:t=4,children:a})=>n.jsx("div",{style:{maxWidth:480},children:n.jsx(i,{lines:t,children:a})})},p={name:"Раскрытый текст и переключение с клавиатуры",...y({preCode:b,previewSource:"shown",type:"code"}),play:async({canvasElement:t,args:{lines:a=4}})=>{const r=w(t),e=r.getByText(/^Длинный текст/),L=parseFloat(getComputedStyle(e).lineHeight),g=e.getBoundingClientRect().height;if(await u(Math.abs(g-Math.min(M(a)*L,e.scrollHeight))).toBeLessThan(1),e.scrollHeight<=g+1){await u(r.queryByRole("button")).toBeNull();return}const s=await r.findByRole("button",{name:"Показать полностью"});await o.click(s),await u(s).toHaveAttribute("aria-expanded","true");const m=e.parentElement;if(!m)throw new Error("Не найдена область сворачиваемого текста");await E(()=>u(Math.abs(m.getBoundingClientRect().height-e.scrollHeight)).toBeLessThan(1)),s.focus(),await o.keyboard("{Enter}"),await u(s).toHaveAccessibleName("Показать полностью"),await E(()=>u(Math.abs(e.getBoundingClientRect().height-g)).toBeLessThan(1)),await o.keyboard(" "),await u(s).toHaveAttribute("aria-expanded","true"),await E(()=>u(Math.abs(m.getBoundingClientRect().height-e.scrollHeight)).toBeLessThan(1))},render:({lines:t=4})=>n.jsx("div",{style:{maxWidth:480},children:n.jsx(i,{lines:t,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)})})},d={name:"Текст помещается целиком",...y({preCode:b,previewSource:"shown",type:"code"}),play:async({canvasElement:t})=>{await u(w(t).queryByRole("button")).toBeNull()},render:({lines:t=4})=>n.jsx(i,{lines:t,children:"Короткая подпись."})},h={name:"Фокус на ссылках и обычная высота строки",render:()=>n.jsx("div",{style:{width:320},children:n.jsxs(i,{as:"div",lines:2,style:{lineHeight:"normal"},children:["Длинный текст, который можно свернуть и развернуть. ".repeat(12),n.jsx("a",{href:"#hidden-link",children:"Ссылка в конце текста"})]})}),play:async({canvasElement:t})=>{const a=w(t),r=await a.findByRole("button",{name:"Показать полностью"}),e=a.getByText("Ссылка в конце текста");if(!e.parentElement)throw new Error("Не найден элемент типографики");await u(getComputedStyle(e.parentElement).lineHeight).toBe("normal"),await u(e).toHaveAttribute("tabindex","-1"),await o.tab(),await u(r).toHaveFocus(),await o.keyboard("{Enter}"),await u(r).toHaveAttribute("aria-expanded","true"),await u(e).not.toHaveAttribute("tabindex","-1"),await o.tab({shift:!0}),await u(e).toHaveFocus(),r.focus(),await o.keyboard("{Enter}"),await u(e).toHaveAttribute("tabindex","-1"),r.blur()}};var x,v,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,A,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var f,S,H;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(S=p.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var T,k,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var W,R,j;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const z=["Default","Playground","Expanded","ShortText","HiddenLink"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Expanded:p,HiddenLink:h,Playground:c,ShortText:d,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{K as T};
