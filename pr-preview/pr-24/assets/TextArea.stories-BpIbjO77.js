import{r,d as e}from"./react-D2T61mpp.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{T as a}from"./TextArea-BIfiU9sY.js";import{r5 as m}from"./@salutejs/plasma-icons-Cpu0f1vH.js";const B={title:"Локальные компоненты/TextArea",component:a,tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Заполните поле",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1},argTypes:{size:{options:["s"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},v=`
import { TextArea } from '@daisforge/ui';
`,o={name:"Default",...A({preCode:v}),render:u=>{const[d,n]=r.useState("Значение поля");return e.jsxDEV("div",{style:{width:"400px"},children:e.jsxDEV(a,{...u,value:d,onChange:c=>n(c.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:72,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:71,columnNumber:7},void 0)}},i={name:"Размеры",...A({preCode:v}),render:u=>{const d=["s"],[n,c]=r.useState({l:"",m:"",s:"",xs:""});return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:d.map(t=>r.createElement(a,{...u,key:t,size:t,label:`Size: ${t}`,placeholder:"Заполните поле",value:n[t],onChange:g=>c(x=>({...x,[t]:g.target.value}))}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:104,columnNumber:7},void 0)}},l={name:"Различные варианты",...A({preCode:v}),render:u=>{const[d,n]=r.useState("Текст для очистки"),[c,t]=r.useState("Текст с иконкой"),[g,x]=r.useState(""),[z,j]=r.useState("Текст");return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsxDEV(a,{...u,label:"onClear + value → крестик",value:d,onChange:s=>n(s.target.value),onClear:()=>n("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:159,columnNumber:9},void 0),e.jsxDEV(a,{...u,label:"onClear + value + contentRight → рядом",value:c,contentRight:e.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:173,columnNumber:25},void 0),onChange:s=>t(s.target.value),onClear:()=>t("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:169,columnNumber:9},void 0),e.jsxDEV(a,{...u,label:"Пустое значение — крестик скрыт",value:g,contentRight:e.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:184,columnNumber:25},void 0),onChange:s=>x(s.target.value),onClear:()=>x("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:180,columnNumber:9},void 0),e.jsxDEV(a,{...u,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:e.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:196,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:191,columnNumber:9},void 0),e.jsxDEV(a,{...u,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:e.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:205,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:200,columnNumber:9},void 0),e.jsxDEV(a,{...u,label:"Только contentRight, без onClear",value:z,contentRight:e.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:213,columnNumber:25},void 0),onChange:s=>j(s.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:209,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TextArea/TextArea.stories.tsx",lineNumber:151,columnNumber:7},void 0)}};var p,b,f,h,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"### Базовый TextArea\n\nОбёртка над `TextArea` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.description}}};var T,C,y,k,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source},description:{story:"### Все размеры\n\nДемонстрация TextArea во всех доступных размерах: `l`, `m`, `s`, `xs`.",...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var N,V,S,R,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(V=l.parameters)==null?void 0:V.docs)==null?void 0:S.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};const F=["Default","Sizes","WithClear"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Sizes:i,WithClear:l,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{L as T};
