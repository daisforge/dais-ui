import{r as l,j as u}from"./react-CAOzMBF_.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as n}from"./TextField-DpKf-85P.js";import{d9 as d}from"./@salutejs/plasma-icons-Do5ggeDI.js";const B={title:"Локальные компоненты/TextField",component:n,tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Заполните поле",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1,required:!1,optional:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},optional:{control:{type:"boolean"}}}},h=`
import { TextField } from '@daisforge/ui';
`,o={name:"Default",...C({preCode:h}),render:e=>{const[i,s]=l.useState("Значение поля");return u.jsx("div",{style:{width:"400px"},children:u.jsx(n,{...e,value:i,onChange:c=>s(c.target.value)})})}},p={name:"Размеры",...C({preCode:h}),render:e=>{const i=["s","xs"],[s,c]=l.useState({l:"",m:"",s:"",xs:""});return u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:i.map(t=>l.createElement(n,{...e,key:t,size:t,label:`Size: ${t}`,placeholder:"Заполните поле",value:s[t],onChange:v=>c(g=>({...g,[t]:v.target.value}))}))})}},r={name:"Различные варианты",...C({preCode:h}),render:e=>{const[i,s]=l.useState("Текст для очистки"),[c,t]=l.useState("Текст с иконкой"),[v,g]=l.useState(""),[V,j]=l.useState("Текст");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[u.jsx(n,{...e,label:"onClear + value → крестик",value:i,onChange:a=>s(a.target.value),onClear:()=>s("")}),u.jsx(n,{...e,label:"onClear + value + contentRight → рядом",value:c,contentRight:u.jsx(d,{size:"s"}),onChange:a=>t(a.target.value),onClear:()=>t("")}),u.jsx(n,{...e,label:"Пустое значение — крестик скрыт",value:v,contentRight:u.jsx(d,{size:"s"}),onChange:a=>g(a.target.value),onClear:()=>g("")}),u.jsx(n,{...e,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:u.jsx(d,{size:"s"}),onClear:()=>{}}),u.jsx(n,{...e,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:u.jsx(d,{size:"s"}),onClear:()=>{}}),u.jsx(n,{...e,label:"Только contentRight, без onClear",value:V,contentRight:u.jsx(d,{size:"s"}),onChange:a=>j(a.target.value)})]})}};var E,m,x,A,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
    const [value, setValue] = useState('Значение поля');
    return <div style={{
      width: '400px'
    }}>
        <TextField {...args} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
      </div>;
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:"### Базовый TextField\n\nОбёртка над `TextField` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var y,F,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
    const sizes = ['s', 'xs'] as const;
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
        {sizes.map(size => <TextField {...args} key={size} size={size} label={\`Size: \${size}\`} placeholder="Заполните поле" value={values[size]} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues(prev => ({
        ...prev,
        [size]: e.target.value
      }))} />)}
      </div>;
  }
}`,...(b=(F=p.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var f,R,T,S,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
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
        {/* Сценарий 3: onClear + value → только крестик */}
        <TextField {...args} label="onClear + value → крестик" value={value1} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)} onClear={() => setValue1('')} />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <TextField {...args} label="onClear + value + contentRight → рядом" value={value2} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} onClear={() => setValue2('')} />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <TextField {...args} label="Пустое значение — крестик скрыт" value={value3} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)} onClear={() => setValue3('')} />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <TextField {...args} label="ReadOnly — замок вместо крестика и contentRight" value="Только для чтения" readOnly contentRight={<IconCalendarOutline size="s" />} onClear={() => {}} />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <TextField {...args} label="Disabled — замок вместо крестика и contentRight" value="Заблокировано" disabled contentRight={<IconCalendarOutline size="s" />} onClear={() => {}} />

        {/* Сценарий 4: только contentRight, без onClear */}
        <TextField {...args} label="Только contentRight, без onClear" value={value4} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue4(e.target.value)} />
      </div>;
  }
}`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};const O=["Default","Sizes","WithClear"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Sizes:p,WithClear:r,__namedExportsOrder:O,default:B},Symbol.toStringTag,{value:"Module"}));export{L as T};
