import{j as e}from"./react-CAOzMBF_.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{B as u}from"./Box-DvvYTz20.js";import{q as M,u as I,w as N}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{L as V}from"./@salutejs/sdds-finai-CKhMjg07.js";const q={title:"Локальные компоненты/Box",component:u,args:{hidden:!1},argTypes:{$css:{description:"Кастомные стили styled-components для корневого узла"},as:{description:"Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонента. (Например: `li`, `p`, `button` и т.д.)",control:{type:"text"},table:{defaultValue:{summary:"div"},type:{summary:"string"}}},hidden:{description:"Скрытие элемента",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},tags:["!autodocs"]},o={name:"Box",...a({preCode:`
// textAccent - токен акцентного цвета
import { Box, textAccent, textNegative } from '@daisforge/ui';

`,previewSource:"shown"}),render:()=>e.jsxs(u,{$css:{height:"200px",width:"500px",display:"flex",justifyContent:"center",alignItems:"center",gap:16,background:M,borderRadius:16,color:"white"},children:["Box №1",e.jsx(u,{height:100,background:N,children:"Box №2"})]})},r={name:"Стилизация через CSS Object",...a({preCode:`import { Box, textAccent } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsx(u,{$css:{height:"200px",width:"500px",background:M,borderRadius:16,color:"white"}})},n={name:"Стилизация через CSS String",...a({preCode:`import { Box, textPositive } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsx(u,{$css:`
            height: 100px;
            width: 300px;
            background: ${I};
            border-radius: 8px;
        `})},t={name:"Стилизация через props",...a({preCode:`import { Box } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsx(u,{height:200,width:200,background:"yellow",border:"8px solid green"})},s={name:"React компонент корневого узла",...a({preCode:`import { Box, Button } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsx(u,{as:V,onClick:()=>alert("Я кнопка"),children:"Теперь это кнопка (нажми на меня)"})},i={name:"HTML корневого узла",...a({preCode:`import { Box } from '@daisforge/ui';

    `,previewSource:"shown"}),render:()=>e.jsx(u,{as:"input",placeholder:"Теперь это Input"})};var c,p,d,m,E;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"```ts\nimport { Box, BoxProps } from '@daisforge/ui';\n```\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(E=(m=o.parameters)==null?void 0:m.docs)==null?void 0:E.description}}};var x,B,C,F,D;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"`Box` позволяет добавить стили через пропс `$css`, которые трансформируются в хешируемый класс, а не в inline стили.\nВ данном примере стили добавляются через объект `CSSObject`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(D=(F=r.parameters)==null?void 0:F.docs)==null?void 0:D.description}}};var S,g,l,h,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(l=(g=n.parameters)==null?void 0:g.docs)==null?void 0:l.source},description:{story:"В данном примере стили `$css` добавляются через `string`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var f,y,b,A,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Стилизация через props',
  ...storySourceDoc({
    preCode: \`import { Box } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box height={200} width={200} background="yellow" border="8px solid green" />
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"В `Box` заложен функционал стилизации напрямую через `props`. Например можно установть `width`, `background`, `margin` и т.д.\nВ данном примере стили добавляются напрямую через `props`.\n\n*Примечание: присутствуют не все варианты стилей из `CSSProperties`.*\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(v=(A=t.parameters)==null?void 0:A.docs)==null?void 0:v.description}}};var j,k,$,P,L;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'React компонент корневого узла',
  ...storySourceDoc({
    preCode: \`import { Box, Button } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box as={Link} onClick={() => alert('Я кнопка')}>
      Теперь это кнопка (нажми на меня)
    </Box>
}`,...($=(k=s.parameters)==null?void 0:k.docs)==null?void 0:$.source},description:{story:"`Box` позволяет устанавливать любой React-компонент в качестве корневого узла через пропс `as`.\nВ данном примере в качестве узлового элемента используется `Link` из SDDS.\n\n#####ℹ️ Для просмотра примера нажми `Show code`",...(L=(P=s.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var O,R,H,T,_;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'HTML корневого узла',
  ...storySourceDoc({
    preCode: \`import { Box } from '@daisforge/ui';

    \`,
    previewSource: 'shown'
  }),
  render: () => <Box as="input" placeholder="Теперь это Input" />
}`,...(H=(R=i.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:"`Box` позволяет устанавливать любой HTML элемент (через `string`) в качестве корневого узла через пропс `as` (например: `li`, `p`, `input` и т.д.).\nВ данном примере в качестве узлового элемента используется `input`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`",...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};const z=["Default","CSSObject","CSSString","CSSProps","BoxAnyComponent","BoxHtmlComponent"],W=Object.freeze(Object.defineProperty({__proto__:null,BoxAnyComponent:s,BoxHtmlComponent:i,CSSObject:r,CSSProps:t,CSSString:n,Default:o,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{W as B};
