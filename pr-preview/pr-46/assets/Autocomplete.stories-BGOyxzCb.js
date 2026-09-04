import{r as i,d as u}from"./react-D2T61mpp.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{A as n}from"./Autocomplete-BZQ1HRKY.js";import{d9 as A}from"./@salutejs/plasma-icons-DH_et0Tb.js";const l=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"}],F={title:"Локальные компоненты/Autocomplete",component:n,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Начните вводить",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},v=`
import { Autocomplete } from '@daisforge/ui';
`,c={name:"Default",...b({preCode:v}),render:t=>{const[g,s]=i.useState("");return u.jsxDEV("div",{style:{width:"400px",minHeight:"300px"},children:u.jsxDEV(n,{...t,value:g,onChange:a=>s(a.target.value),onSuggestionSelect:a=>s(a.label),suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:88,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:87,columnNumber:7},void 0)}},m={name:"Размеры",...b({preCode:v}),render:t=>{const g=["s","xs"],[s,a]=i.useState({l:"",m:"",s:"",xs:""});return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px",minHeight:"300px"},children:g.map(o=>i.createElement(n,{...t,key:o,size:o,label:`Size: ${o}`,placeholder:"Начните вводить",value:s[o],onChange:p=>a(r=>({...r,[o]:p.target.value})),onSuggestionSelect:p=>a(r=>({...r,[o]:p.label})),suggestions:l}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:122,columnNumber:7},void 0)}},d={name:"Различные варианты",...b({preCode:v}),render:t=>{const[g,s]=i.useState("Алексей"),[a,o]=i.useState("Екатерина"),[p,r]=i.useState(""),[O,C]=i.useState("Дмитрий");return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px",minHeight:"300px"},children:[u.jsxDEV(n,{...t,label:"onClear + value → крестик",value:g,onChange:e=>s(e.target.value),onSuggestionSelect:e=>s(e.label),onClear:()=>s(""),suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:184,columnNumber:9},void 0),u.jsxDEV(n,{...t,label:"onClear + value + contentRight → рядом",value:a,contentRight:u.jsxDEV(A,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:201,columnNumber:25},void 0),onChange:e=>o(e.target.value),onSuggestionSelect:e=>o(e.label),onClear:()=>o(""),suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:197,columnNumber:9},void 0),u.jsxDEV(n,{...t,label:"Пустое значение — крестик скрыт",value:p,contentRight:u.jsxDEV(A,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:215,columnNumber:25},void 0),onChange:e=>r(e.target.value),onSuggestionSelect:e=>r(e.label),onClear:()=>r(""),suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:211,columnNumber:9},void 0),u.jsxDEV(n,{...t,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:u.jsxDEV(A,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:230,columnNumber:25},void 0),onClear:()=>{},suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:225,columnNumber:9},void 0),u.jsxDEV(n,{...t,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:u.jsxDEV(A,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:241,columnNumber:25},void 0),onClear:()=>{},suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:236,columnNumber:9},void 0),u.jsxDEV(n,{...t,label:"Только contentRight, без onClear",value:O,contentRight:u.jsxDEV(A,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:251,columnNumber:25},void 0),onChange:e=>C(e.target.value),onSuggestionSelect:e=>C(e.label),suggestions:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:247,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Autocomplete/Autocomplete.stories.tsx",lineNumber:174,columnNumber:7},void 0)}};var h,f,E,D,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteProps) => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '400px',
      minHeight: '300px'
    }}>
        <Autocomplete {...args} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} onSuggestionSelect={item => setValue(item.label)} suggestions={mockData} />
      </div>;
  }
}`,...(E=(f=c.parameters)==null?void 0:f.docs)==null?void 0:E.source},description:{story:"### Базовый Autocomplete\n\nОбёртка над `Autocomplete` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var k,y,S,N,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteProps) => {
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
      width: '400px',
      minHeight: '300px'
    }}>
        {sizes.map(size => <Autocomplete {...args} key={size} size={size} label={\`Size: \${size}\`} placeholder="Начните вводить" value={values[size]} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues(prev => ({
        ...prev,
        [size]: e.target.value
      }))} onSuggestionSelect={item => setValues(prev => ({
        ...prev,
        [size]: item.label
      }))} suggestions={mockData} />)}
      </div>;
  }
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"### Все размеры\n\nДемонстрация Autocomplete во всех доступных размерах: `l`, `m`, `s`, `xs`.",...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var R,w,z,j,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteProps) => {
    const [value1, setValue1] = useState('Алексей');
    const [value2, setValue2] = useState('Екатерина');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Дмитрий');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '400px',
      minHeight: '300px'
    }}>
        {/* Сценарий 3: onClear + value → только крестик */}
        <Autocomplete {...args} label="onClear + value → крестик" value={value1} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)} onSuggestionSelect={item => setValue1(item.label)} onClear={() => setValue1('')} suggestions={mockData} />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <Autocomplete {...args} label="onClear + value + contentRight → рядом" value={value2} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} onSuggestionSelect={item => setValue2(item.label)} onClear={() => setValue2('')} suggestions={mockData} />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <Autocomplete {...args} label="Пустое значение — крестик скрыт" value={value3} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)} onSuggestionSelect={item => setValue3(item.label)} onClear={() => setValue3('')} suggestions={mockData} />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <Autocomplete {...args} label="ReadOnly — замок вместо крестика и contentRight" value="Только для чтения" readOnly contentRight={<IconCalendarOutline size="s" />} onClear={() => {}} suggestions={mockData} />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <Autocomplete {...args} label="Disabled — замок вместо крестика и contentRight" value="Заблокировано" disabled contentRight={<IconCalendarOutline size="s" />} onClear={() => {}} suggestions={mockData} />

        {/* Сценарий 4: только contentRight, без onClear */}
        <Autocomplete {...args} label="Только contentRight, без onClear" value={value4} contentRight={<IconCalendarOutline size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue4(e.target.value)} onSuggestionSelect={item => setValue4(item.label)} suggestions={mockData} />
      </div>;
  }
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};const H=["Default","Sizes","WithClear"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Sizes:m,WithClear:d,__namedExportsOrder:H,default:F},Symbol.toStringTag,{value:"Module"}));export{P as A};
