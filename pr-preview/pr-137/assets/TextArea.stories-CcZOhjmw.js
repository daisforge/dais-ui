import{r as s,j as u}from"./react-CAOzMBF_.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{T as t}from"./TextArea-FtPqzh-q.js";import{rf as g}from"./@salutejs/plasma-icons-Do5ggeDI.js";const w={title:"Локальные компоненты/TextArea",component:t,tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Заполните поле",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1},argTypes:{size:{options:["s"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},C=`
import { TextArea } from '@daisforge/ui';
`,l={name:"Default",...x({preCode:C}),render:e=>{const[c,r]=s.useState("Значение поля");return u.jsx("div",{style:{width:"400px"},children:u.jsx(t,{...e,value:c,onChange:d=>r(d.target.value)})})}},o={name:"Размеры",...x({preCode:C}),render:e=>{const c=["s"],[r,d]=s.useState({l:"",m:"",s:"",xs:""});return u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:c.map(n=>s.createElement(t,{...e,key:n,size:n,label:`Size: ${n}`,placeholder:"Заполните поле",value:r[n],onChange:p=>d(v=>({...v,[n]:p.target.value}))}))})}},i={name:"Различные варианты",...x({preCode:C}),render:e=>{const[c,r]=s.useState("Текст для очистки"),[d,n]=s.useState("Текст с иконкой"),[p,v]=s.useState(""),[F,O]=s.useState("Текст");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[u.jsx(t,{...e,label:"onClear + value → крестик",value:c,onChange:a=>r(a.target.value),onClear:()=>r("")}),u.jsx(t,{...e,label:"onClear + value + contentRight → рядом",value:d,contentRight:u.jsx(g,{size:"s"}),onChange:a=>n(a.target.value),onClear:()=>n("")}),u.jsx(t,{...e,label:"Пустое значение — крестик скрыт",value:p,contentRight:u.jsx(g,{size:"s"}),onChange:a=>v(a.target.value),onClear:()=>v("")}),u.jsx(t,{...e,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:u.jsx(g,{size:"s"}),onClear:()=>{}}),u.jsx(t,{...e,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:u.jsx(g,{size:"s"}),onClear:()=>{}}),u.jsx(t,{...e,label:"Только contentRight, без onClear",value:F,contentRight:u.jsx(g,{size:"s"}),onChange:a=>O(a.target.value)})]})}};var A,m,h,E,b;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextAreaProps) => {
    const [value, setValue] = useState('Значение поля');
    return <div style={{
      width: '400px'
    }}>
        <TextArea {...args} value={value} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} />
      </div>;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"### Базовый TextArea\n\nОбёртка над `TextArea` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(b=(E=l.parameters)==null?void 0:E.docs)==null?void 0:b.description}}};var y,T,S,D,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextAreaProps) => {
    const sizes = ['s'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      l: '',
      m: '',
      s: '',
      xs: ''
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }}>
        {sizes.map(size => <TextArea {...args} key={size} size={size} label={\`Size: \${size}\`} placeholder="Заполните поле" value={values[size]} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues(prev => ({
        ...prev,
        [size]: e.target.value
      }))} />)}
      </div>;
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:"### Все размеры\n\nДемонстрация TextArea во всех доступных размерах: `l`, `m`, `s`, `xs`.",...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.description}}};var R,z,V,j,B;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextAreaProps) => {
    const [value1, setValue1] = useState('Текст для очистки');
    const [value2, setValue2] = useState('Текст с иконкой');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Текст');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px'
    }}>
        <TextArea {...args} label="onClear + value → крестик" value={value1} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue1(e.target.value)} onClear={() => setValue1('')} />

        <TextArea {...args} label="onClear + value + contentRight → рядом" value={value2} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue2(e.target.value)} onClear={() => setValue2('')} />

        <TextArea {...args} label="Пустое значение — крестик скрыт" value={value3} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue3(e.target.value)} onClear={() => setValue3('')} />

        <TextArea {...args} label="ReadOnly — замок вместо крестика и contentRight" value="Только для чтения" readOnly contentRight={<IconSb size="s" />} onClear={() => {}} />

        <TextArea {...args} label="Disabled — замок вместо крестика и contentRight" value="Заблокировано" disabled contentRight={<IconSb size="s" />} onClear={() => {}} />

        <TextArea {...args} label="Только contentRight, без onClear" value={value4} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue4(e.target.value)} />
      </div>;
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};const H=["Default","Sizes","WithClear"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Sizes:o,WithClear:i,__namedExportsOrder:H,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as T};
