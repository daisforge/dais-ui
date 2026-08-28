import{r as a,d as e}from"./react-D2T61mpp.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as n}from"./TextField-BT0br7pC.js";import{d9 as c}from"./@salutejs/plasma-icons-CT3auX7M.js";const w={title:"Локальные компоненты/TextField",component:n,tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Заполните поле",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1,required:!1,optional:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},optional:{control:{type:"boolean"}}}},v=`
import { TextField } from '@daisforge/ui';
`,o={name:"Default",...g({preCode:v}),render:u=>{const[i,l]=a.useState("Значение поля");return e.jsxDEV("div",{style:{width:"400px"},children:e.jsxDEV(n,{...u,value:i,onChange:d=>l(d.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:79,columnNumber:7},void 0)}},m={name:"Размеры",...g({preCode:v}),render:u=>{const i=["s","xs"],[l,d]=a.useState({l:"",m:"",s:"",xs:""});return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:i.map(t=>a.createElement(n,{...u,key:t,size:t,label:`Size: ${t}`,placeholder:"Заполните поле",value:l[t],onChange:p=>d(x=>({...x,[t]:p.target.value}))}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:107,columnNumber:7},void 0)}},r={name:"Различные варианты",...g({preCode:v}),render:u=>{const[i,l]=a.useState("Текст для очистки"),[d,t]=a.useState("Текст с иконкой"),[p,x]=a.useState(""),[R,S]=a.useState("Текст");return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsxDEV(n,{...u,label:"onClear + value → крестик",value:i,onChange:s=>l(s.target.value),onClear:()=>l("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:163,columnNumber:9},void 0),e.jsxDEV(n,{...u,label:"onClear + value + contentRight → рядом",value:d,contentRight:e.jsxDEV(c,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:178,columnNumber:25},void 0),onChange:s=>t(s.target.value),onClear:()=>t("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:174,columnNumber:9},void 0),e.jsxDEV(n,{...u,label:"Пустое значение — крестик скрыт",value:p,contentRight:e.jsxDEV(c,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:190,columnNumber:25},void 0),onChange:s=>x(s.target.value),onClear:()=>x("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:186,columnNumber:9},void 0),e.jsxDEV(n,{...u,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:e.jsxDEV(c,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:203,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:198,columnNumber:9},void 0),e.jsxDEV(n,{...u,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:e.jsxDEV(c,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:213,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:208,columnNumber:9},void 0),e.jsxDEV(n,{...u,label:"Только contentRight, без onClear",value:R,contentRight:e.jsxDEV(c,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:222,columnNumber:25},void 0),onChange:s=>S(s.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:218,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextField/TextField.stories.tsx",lineNumber:154,columnNumber:7},void 0)}};var b,C,f,h,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"### Базовый TextField\n\nОбёртка над `TextField` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.description}}};var F,T,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var y,A,k,N,V;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(A=r.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(V=(N=r.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};const z=["Default","Sizes","WithClear"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Sizes:m,WithClear:r,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{H as T};
