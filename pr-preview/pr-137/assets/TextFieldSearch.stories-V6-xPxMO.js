import{r as s,j as e}from"./react-CAOzMBF_.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{a as t}from"./TextField-DpKf-85P.js";import{rf as h}from"./@salutejs/plasma-icons-Do5ggeDI.js";const O={title:"Локальные компоненты/TextFieldSearch",component:t,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Поиск",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},x=`
import { TextFieldSearch } from '@daisforge/ui';
`,o={name:"Default",...v({preCode:x}),render:u=>{const[d,a]=s.useState("");return e.jsx("div",{style:{padding:"20px",width:"500px"},children:e.jsx(t,{...u,value:d,onChange:l=>a(l.target.value),onClear:()=>a("")})})}},c={name:"Размеры",...v({preCode:x}),render:u=>{const d=["s","xs"],[a,l]=s.useState({s:"",xs:""});return e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:d.map(n=>s.createElement(t,{...u,key:n,size:n,placeholder:`Size: ${n}`,value:a[n],onChange:p=>l(g=>({...g,[n]:p.target.value})),onClear:()=>l(p=>({...p,[n]:""}))}))})}},i={name:"Различные варианты",...v({preCode:x}),render:u=>{const[d,a]=s.useState("Поисковый запрос"),[l,n]=s.useState("С иконкой"),[p,g]=s.useState(""),[B,I]=s.useState("Текст");return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:[e.jsx(t,{...u,placeholder:"onClear + value → крестик",value:d,onChange:r=>a(r.target.value),onClear:()=>a("")}),e.jsx(t,{...u,placeholder:"onClear + value + contentRight → рядом",value:l,contentRight:e.jsx(h,{size:"s"}),onChange:r=>n(r.target.value),onClear:()=>n("")}),e.jsx(t,{...u,placeholder:"Пустое значение — крестик скрыт",value:p,contentRight:e.jsx(h,{size:"s"}),onChange:r=>g(r.target.value),onClear:()=>g("")}),e.jsx(t,{...u,placeholder:"ReadOnly — замок",value:"Только для чтения",readOnly:!0,contentRight:e.jsx(h,{size:"s"}),onClear:()=>{}}),e.jsx(t,{...u,placeholder:"Disabled — замок",value:"Заблокировано",disabled:!0,contentRight:e.jsx(h,{size:"s"}),onClear:()=>{}}),e.jsx(t,{...u,placeholder:"Только contentRight, без onClear",value:B,contentRight:e.jsx(h,{size:"s"}),onChange:r=>I(r.target.value)})]})}};var C,m,E,S,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(m=o.parameters)==null?void 0:m.docs)==null?void 0:E.source},description:{story:`### Базовый TextFieldSearch

Поле поиска с иконкой лупы слева и крестиком очистки справа.`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.description}}};var F,A,D,T,f;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"### Все размеры\n\nДемонстрация TextFieldSearch в доступных размерах: `s`, `xs`.",...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};var z,V,R,j,b;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(V=i.parameters)==null?void 0:V.docs)==null?void 0:R.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};const M=["Default","Sizes","WithClear"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Sizes:c,WithClear:i,__namedExportsOrder:M,default:O},Symbol.toStringTag,{value:"Module"}));export{P as T};
