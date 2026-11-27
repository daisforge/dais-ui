import{j as n}from"./react-UEdzNlUe.js";import{df as r}from"./vendor-BjJ6Dniq.js";import{M as l,T as o}from"./WithTooltip-KJL26V4Q-8sW6qWBN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";function i(s){const e={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{parameters:{layout:"centered"},title:"Images/IconSvgSprite"}),`
`,n.jsx(o,{children:"IconSvgSprite"}),`
`,n.jsx(e.h3,{id:"компонент-для-отрисовки-svg-спрайтов",children:"Компонент для отрисовки SVG спрайтов"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h4,{id:"использование",children:"Использование"}),`
`,n.jsxs(e.p,{children:["В ",n.jsx(e.code,{children:"iconUrl"})," передается url ",n.jsx(e.code,{children:"https://cdn.dddd.ru/FileWithSprites.svg"})," на файл содержащий спрайты иконок и ссылка на необходимую иконку ",n.jsx(e.code,{children:"#IconId"}),`.
Используется в finai-admin, finai-header, finai-platform.
Для этих микрофронтов url к картинке приходит в формате `,n.jsx(e.code,{children:"/pl/static-res/finai_icons/sprite-{size}-1.svg#IconAvatar-{size}"}),`,
в которых плейсхолдер `,n.jsx(e.code,{children:"{size}"})," в компоненте заменяется пропсом ",n.jsx(e.code,{children:"size"}),". При отсутствии плейсхолдеров будет использоваться исходный url к спрайту."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconSprite } from '@daisforge/ui';

<IconSprite iconUrl="https://cdn.dddd.ru/FileWithSprites.svg#IconId" />;
`})}),`
`,n.jsx(e.h3,{id:"пропсы",children:"Пропсы"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`type Props = {
  // url иконки
  iconUrl: string,
  // размер иконки, default = 's'
  size?: 'xs' | 's' | 'm',
  // цвет иконки
  color?: string,
  // css класс
  className?: string
};
`})}),`
`,n.jsx(e.h3,{id:"механизм-работы-svg-спрайтов",children:"Механизм работы SVG спрайтов"}),`
`,n.jsxs(e.p,{children:["Документация ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol",rel:"nofollow",children:"<symbol>"})," ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use",rel:"nofollow",children:"<use>"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'<symbol id="Icon-1">'})," - определяем иконку внутри тэга ",n.jsx(e.code,{children:"symbol"}),", атрибут ",n.jsx(e.code,{children:"id"})," используется в качестве ссылки на иконку"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-svg",children:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;" ... >
  <symbol id="Icon1" width="100%" viewBox="0 0 24 24" ... >
    <g><path ... </g>
  </symbol>
  <symbol id="Icon2" width="100%" viewBox="0 0 24 24" ... >
     <g><path ... </g>
  </symbol>
</svg>
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Используем иконку с помощью тэга ",n.jsx(e.code,{children:"<use>"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-svg",children:`<svg width="100%" viewBox="0 0 16 16" ... >
  <use xlinkHref="https://cdn.dddd.ru/FileWithSprites.svg#Icon1" />
</svg>

`})})]})}function f(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{f as default};
