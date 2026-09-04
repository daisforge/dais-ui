import{r as t,d as e}from"./react-D2T61mpp.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{a as r}from"./TextField-BST07fwN.js";import{rb as h}from"./@salutejs/plasma-icons-DVXBUOYV.js";const j={title:"Локальные компоненты/TextFieldSearch",component:r,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Поиск",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},g=`
import { TextFieldSearch } from '@daisforge/ui';
`,i={name:"Default",...x({preCode:g}),render:u=>{const[c,s]=t.useState("");return e.jsxDEV("div",{style:{padding:"20px",width:"500px"},children:e.jsxDEV(r,{...u,value:c,onChange:o=>s(o.target.value),onClear:()=>s("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:63,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:62,columnNumber:7},void 0)}},l={name:"Размеры",...x({preCode:g}),render:u=>{const c=["s","xs"],[s,o]=t.useState({s:"",xs:""});return e.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:c.map(a=>t.createElement(r,{...u,key:a,size:a,placeholder:`Size: ${a}`,value:s[a],onChange:m=>o(p=>({...p,[a]:m.target.value})),onClear:()=>o(m=>({...m,[a]:""}))}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:94,columnNumber:7},void 0)}},d={name:"Различные варианты",...x({preCode:g}),render:u=>{const[c,s]=t.useState("Поисковый запрос"),[o,a]=t.useState("С иконкой"),[m,p]=t.useState(""),[R,w]=t.useState("Текст");return e.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:[e.jsxDEV(r,{...u,placeholder:"onClear + value → крестик",value:c,onChange:n=>s(n.target.value),onClear:()=>s("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:151,columnNumber:9},void 0),e.jsxDEV(r,{...u,placeholder:"onClear + value + contentRight → рядом",value:o,contentRight:e.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:165,columnNumber:25},void 0),onChange:n=>a(n.target.value),onClear:()=>a("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:161,columnNumber:9},void 0),e.jsxDEV(r,{...u,placeholder:"Пустое значение — крестик скрыт",value:m,contentRight:e.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:176,columnNumber:25},void 0),onChange:n=>p(n.target.value),onClear:()=>p("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:172,columnNumber:9},void 0),e.jsxDEV(r,{...u,placeholder:"ReadOnly — замок",value:"Только для чтения",readOnly:!0,contentRight:e.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:188,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:183,columnNumber:9},void 0),e.jsxDEV(r,{...u,placeholder:"Disabled — замок",value:"Заблокировано",disabled:!0,contentRight:e.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:197,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:192,columnNumber:9},void 0),e.jsxDEV(r,{...u,placeholder:"Только contentRight, без onClear",value:R,contentRight:e.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:205,columnNumber:25},void 0),onChange:n=>w(n.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:201,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextFieldSearch/TextFieldSearch.stories.tsx",lineNumber:142,columnNumber:7},void 0)}};var v,S,f,b,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldSearchProps) => {
    const [value, setValue] = useState('');
    return <div style={{
      padding: '20px',
      width: '500px'
    }}>
        <TextFieldSearch {...args} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} onClear={() => setValue('')} />
      </div>;
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:`### Базовый TextFieldSearch

Поле поиска с иконкой лупы слева и крестиком очистки справа.`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var F,C,T,y,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldSearchProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      s: '',
      xs: ''
    });
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px'
    }}>
        {sizes.map(size => <TextFieldSearch {...args} key={size} size={size} placeholder={\`Size: \${size}\`} value={values[size]} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues(prev => ({
        ...prev,
        [size]: e.target.value
      }))} onClear={() => setValues(prev => ({
        ...prev,
        [size]: ''
      }))} />)}
      </div>;
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"### Все размеры\n\nДемонстрация TextFieldSearch в доступных размерах: `s`, `xs`.",...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var N,D,V,A,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldSearchProps) => {
    const [value1, setValue1] = useState('Поисковый запрос');
    const [value2, setValue2] = useState('С иконкой');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Текст');
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px'
    }}>
        <TextFieldSearch {...args} placeholder="onClear + value → крестик" value={value1} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)} onClear={() => setValue1('')} />

        <TextFieldSearch {...args} placeholder="onClear + value + contentRight → рядом" value={value2} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} onClear={() => setValue2('')} />

        <TextFieldSearch {...args} placeholder="Пустое значение — крестик скрыт" value={value3} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)} onClear={() => setValue3('')} />

        <TextFieldSearch {...args} placeholder="ReadOnly — замок" value="Только для чтения" readOnly contentRight={<IconSb size="s" />} onClear={() => {}} />

        <TextFieldSearch {...args} placeholder="Disabled — замок" value="Заблокировано" disabled contentRight={<IconSb size="s" />} onClear={() => {}} />

        <TextFieldSearch {...args} placeholder="Только contentRight, без onClear" value={value4} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue4(e.target.value)} />
      </div>;
  }
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};const B=["Default","Sizes","WithClear"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Sizes:l,WithClear:d,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{L as T};
