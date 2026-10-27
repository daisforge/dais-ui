import{r as i,j as e}from"./react-CAOzMBF_.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{A as a}from"./Autocomplete-DE_6PTST.js";import{d9 as C}from"./@salutejs/plasma-icons-Do5ggeDI.js";const o=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"}],k={title:"Локальные компоненты/Autocomplete",component:a,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",view:"default",label:"Лейбл",labelPlacement:"outer",placeholder:"Начните вводить",leftHelper:"Подсказка к полю",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},view:{options:["default","positive","warning","negative"],control:{type:"select"}},labelPlacement:{options:["outer","inner"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},A=`
import { Autocomplete } from '@daisforge/ui';
`,c={name:"Default",...v({preCode:A}),render:t=>{const[m,l]=i.useState("");return e.jsx("div",{style:{width:"400px",minHeight:"300px"},children:e.jsx(a,{...t,value:m,onChange:s=>l(s.target.value),onSuggestionSelect:s=>l(s.label),suggestions:o})})}},g={name:"Размеры",...v({preCode:A}),render:t=>{const m=["s","xs"],[l,s]=i.useState({l:"",m:"",s:"",xs:""});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px",minHeight:"300px"},children:m.map(n=>i.createElement(a,{...t,key:n,size:n,label:`Size: ${n}`,placeholder:"Начните вводить",value:l[n],onChange:d=>s(r=>({...r,[n]:d.target.value})),onSuggestionSelect:d=>s(r=>({...r,[n]:d.label})),suggestions:o}))})}},p={name:"Различные варианты",...v({preCode:A}),render:t=>{const[m,l]=i.useState("Алексей"),[s,n]=i.useState("Екатерина"),[d,r]=i.useState(""),[I,h]=i.useState("Дмитрий");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px",minHeight:"300px"},children:[e.jsx(a,{...t,label:"onClear + value → крестик",value:m,onChange:u=>l(u.target.value),onSuggestionSelect:u=>l(u.label),onClear:()=>l(""),suggestions:o}),e.jsx(a,{...t,label:"onClear + value + contentRight → рядом",value:s,contentRight:e.jsx(C,{size:"s"}),onChange:u=>n(u.target.value),onSuggestionSelect:u=>n(u.label),onClear:()=>n(""),suggestions:o}),e.jsx(a,{...t,label:"Пустое значение — крестик скрыт",value:d,contentRight:e.jsx(C,{size:"s"}),onChange:u=>r(u.target.value),onSuggestionSelect:u=>r(u.label),onClear:()=>r(""),suggestions:o}),e.jsx(a,{...t,label:"ReadOnly — замок вместо крестика и contentRight",value:"Только для чтения",readOnly:!0,contentRight:e.jsx(C,{size:"s"}),onClear:()=>{},suggestions:o}),e.jsx(a,{...t,label:"Disabled — замок вместо крестика и contentRight",value:"Заблокировано",disabled:!0,contentRight:e.jsx(C,{size:"s"}),onClear:()=>{},suggestions:o}),e.jsx(a,{...t,label:"Только contentRight, без onClear",value:I,contentRight:e.jsx(C,{size:"s"}),onChange:u=>h(u.target.value),onSuggestionSelect:u=>h(u.label),suggestions:o})]})}};var E,b,S,D,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:"### Базовый Autocomplete\n\nОбёртка над `Autocomplete` из `@salutejs/sdds-finai`.\n\nПри `disabled` или `readOnly` автоматически отображается иконка замка справа.",...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var y,R,f,V,z;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(R=g.parameters)==null?void 0:R.docs)==null?void 0:f.source},description:{story:"### Все размеры\n\nДемонстрация Autocomplete во всех доступных размерах: `l`, `m`, `s`, `xs`.",...(z=(V=g.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};var j,B,O,F,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};const w=["Default","Sizes","WithClear"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Sizes:g,WithClear:p,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{_ as A};
