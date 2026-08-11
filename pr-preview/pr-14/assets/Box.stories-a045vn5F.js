import{d as e}from"./react-D2T61mpp.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{B as u}from"./Box-aaX20gNQ.js";import{n as T,q as _,u as M}from"./@salutejs/sdds-themes-DMMPng_c.js";import{L as I}from"./@salutejs/sdds-finai-Czf81g_D.js";const q={title:"Локальные компоненты/Box",component:u,args:{hidden:!1},argTypes:{$css:{description:"Кастомные стили styled-components для корневого узла"},as:{description:"Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонента. (Например: `li`, `p`, `button` и т.д.)",control:{type:"text"},table:{defaultValue:{summary:"div"},type:{summary:"string"}}},hidden:{description:"Скрытие элемента",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},tags:["!autodocs"]},o={name:"Box",...a({preCode:`
// textAccent - токен акцентного цвета
import { Box, textAccent, textNegative } from '@daisforge/ui';

`,previewSource:"shown"}),render:()=>e.jsxDEV(u,{$css:{height:"200px",width:"500px",display:"flex",justifyContent:"center",alignItems:"center",gap:16,background:T,borderRadius:16,color:"white"},children:["Box №1",e.jsxDEV(u,{height:100,background:M,children:"Box №2"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:82,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:68,columnNumber:5},void 0)},r={name:"Стилизация через CSS Object",...a({preCode:`import { Box, textAccent } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsxDEV(u,{$css:{height:"200px",width:"500px",background:T,borderRadius:16,color:"white"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:105,columnNumber:5},void 0)},n={name:"Стилизация через CSS String",...a({preCode:`import { Box, textPositive } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsxDEV(u,{$css:`
            height: 100px;
            width: 300px;
            background: ${_};
            border-radius: 8px;
        `},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:132,columnNumber:5},void 0)},s={name:"Стилизация через props",...a({preCode:`import { Box } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsxDEV(u,{height:200,width:200,background:"yellow",border:"8px solid green"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:161,columnNumber:5},void 0)},t={name:"React компонент корневого узла",...a({preCode:`import { Box, Button } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsxDEV(u,{as:I,onClick:()=>alert("Я кнопка"),children:"Теперь это кнопка (нажми на меня)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:186,columnNumber:5},void 0)},i={name:"HTML корневого узла",...a({preCode:`import { Box } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsxDEV(u,{as:"input",placeholder:"Теперь это Input"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Box/Box.stories.tsx",lineNumber:207,columnNumber:17},void 0)};var c,d,p,m,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Box',
  ...storySourceDoc({
    preCode: \`
// textAccent - токен акцентного цвета
import { Box, textAccent, textNegative } from '@daisforge/ui';

\`,
    previewSource: 'shown'
  }),
  render: () => <Box $css={{
    height: '200px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    background: textAccent,
    borderRadius: 16,
    color: 'white'
  }}>
      Box №1
      <Box height={100} background={textNegative}>
        Box №2
      </Box>
    </Box>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"```ts\nimport { Box, BoxProps } from '@daisforge/ui';\n```\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var B,E,l,C,F;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Стилизация через CSS Object',
  ...storySourceDoc({
    preCode: \`import { Box, textAccent } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box $css={{
    height: '200px',
    width: '500px',
    background: textAccent,
    borderRadius: 16,
    color: 'white'
  }} />
}`,...(l=(E=r.parameters)==null?void 0:E.docs)==null?void 0:l.source},description:{story:"`Box` позволяет добавить стили через пропс `$css`, которые трансформируются в хешируемый класс, а не в inline стили.\nВ данном примере стили добавляются через объект `CSSObject`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var D,g,h,f,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Стилизация через CSS String',
  ...storySourceDoc({
    preCode: \`import { Box, textPositive } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box $css={\`
            height: 100px;
            width: 300px;
            background: \${textPositive};
            border-radius: 8px;
        \`} />
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"В данном примере стили `$css` добавляются через `string`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var b,w,y,k,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Стилизация через props',
  ...storySourceDoc({
    preCode: \`import { Box } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box height={200} width={200} background="yellow" border="8px solid green" />
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"В `Box` заложен функционал стилизации напрямую через `props`. Например можно установть `width`, `background`, `margin` и т.д.\nВ данном примере стили добавляются напрямую через `props`.\n\n*Примечание: присутствуют не все варианты стилей из `CSSProperties`.*\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var v,N,j,$,P;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'React компонент корневого узла',
  ...storySourceDoc({
    preCode: \`import { Box, Button } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box as={Link} onClick={() => alert('Я кнопка')}>
      Теперь это кнопка (нажми на меня)
    </Box>
}`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"`Box` позволяет устанавливать любой React-компонент в качестве корневого узла через пропс `as`.\nВ данном примере в качестве узлового элемента используется `Link` из SDDS.\n\n#####ℹ️ Для просмотра примера нажми `Show code`",...(P=($=t.parameters)==null?void 0:$.docs)==null?void 0:P.description}}};var V,L,O,R,H;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'HTML корневого узла',
  ...storySourceDoc({
    preCode: \`import { Box } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box as="input" placeholder="Теперь это Input" />
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:"`Box` позволяет устанавливать любой HTML элемент (через `string`) в качестве корневого узла через пропс `as` (например: `li`, `p`, `input` и т.д.).\nВ данном примере в качестве узлового элемента используется `input`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`",...(H=(R=i.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};const z=["Default","CSSObject","CSSString","CSSProps","BoxAnyComponent","BoxHtmlComponent"],W=Object.freeze(Object.defineProperty({__proto__:null,BoxAnyComponent:t,BoxHtmlComponent:i,CSSObject:r,CSSProps:s,CSSString:n,Default:o,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{W as B};
