import{r as i,j as e}from"./react-CAOzMBF_.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{A as s}from"./AutocompleteSearch-Bk_hdeQT.js";import{rf as h}from"./@salutejs/plasma-icons-Do5ggeDI.js";const l=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"}],k={title:"Локальные компоненты/AutocompleteSearch",component:s,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Поиск",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},v=`
import { AutocompleteSearch } from '@daisforge/ui';
`,g={name:"Default",...C({preCode:v}),render:n=>{const[m,a]=i.useState("");return e.jsx("div",{style:{padding:"20px",minHeight:"500px",width:"500px"},children:e.jsx(s,{...n,value:m,onChange:o=>a(o.target.value),onSuggestionSelect:o=>a(o.label),onClear:()=>a(""),suggestions:l,beforeListTotal:!0,beforeListTotalEntity:"[сущность]"})})}},p={name:"Размеры",...C({preCode:v}),render:n=>{const m=["s","xs"],[a,o]=i.useState({s:"",xs:""});return e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px",minHeight:"500px"},children:m.map(t=>i.createElement(s,{...n,key:t,size:t,placeholder:`Size: ${t}`,value:a[t],onChange:r=>o(c=>({...c,[t]:r.target.value})),onSuggestionSelect:r=>o(c=>({...c,[t]:r.label})),onClear:()=>o(r=>({...r,[t]:""})),suggestions:l}))})}},d={name:"Различные варианты",...C({preCode:v}),render:n=>{const[m,a]=i.useState("Алексей"),[o,t]=i.useState("Екатерина"),[r,c]=i.useState(""),[T,S]=i.useState("Дмитрий");return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px",minHeight:"500px"},children:[e.jsx(s,{...n,placeholder:"onClear + value → крестик",value:m,onChange:u=>a(u.target.value),onSuggestionSelect:u=>a(u.label),onClear:()=>a(""),suggestions:l}),e.jsx(s,{...n,placeholder:"onClear + value + contentRight → рядом",value:o,contentRight:e.jsx(h,{size:"s"}),onChange:u=>t(u.target.value),onSuggestionSelect:u=>t(u.label),onClear:()=>t(""),suggestions:l}),e.jsx(s,{...n,placeholder:"Пустое значение — крестик скрыт",value:r,contentRight:e.jsx(h,{size:"s"}),onChange:u=>c(u.target.value),onSuggestionSelect:u=>c(u.label),onClear:()=>c(""),suggestions:l}),e.jsx(s,{...n,placeholder:"ReadOnly — замок",value:"Только для чтения",readOnly:!0,contentRight:e.jsx(h,{size:"s"}),onClear:()=>{},suggestions:l}),e.jsx(s,{...n,placeholder:"Disabled — замок",value:"Заблокировано",disabled:!0,contentRight:e.jsx(h,{size:"s"}),onClear:()=>{},suggestions:l}),e.jsx(s,{...n,placeholder:"Только contentRight, без onClear",value:T,contentRight:e.jsx(h,{size:"s"}),onChange:u=>S(u.target.value),onSuggestionSelect:u=>S(u.label),suggestions:l})]})}};var A,E,x,D,b;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteSearchProps) => {
    const [value, setValue] = useState('');
    return <div style={{
      padding: '20px',
      minHeight: '500px',
      width: '500px'
    }}>
        <AutocompleteSearch {...args} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} onSuggestionSelect={item => setValue(item.label)} onClear={() => setValue('')} suggestions={mockData} beforeListTotal beforeListTotalEntity="[сущность]" />
      </div>;
  }
}`,...(x=(E=g.parameters)==null?void 0:E.docs)==null?void 0:x.source},description:{story:`### Базовый AutocompleteSearch

Поле поиска с автодополнением, иконкой лупы слева и крестиком очистки справа.`,...(b=(D=g.parameters)==null?void 0:D.docs)==null?void 0:b.description}}};var y,V,f,R,z;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteSearchProps) => {
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
      width: '500px',
      minHeight: '500px'
    }}>
        {sizes.map(size => <AutocompleteSearch {...args} key={size} size={size} placeholder={\`Size: \${size}\`} value={values[size]} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues(prev => ({
        ...prev,
        [size]: e.target.value
      }))} onSuggestionSelect={item => setValues(prev => ({
        ...prev,
        [size]: item.label
      }))} onClear={() => setValues(prev => ({
        ...prev,
        [size]: ''
      }))} suggestions={mockData} />)}
      </div>;
  }
}`,...(f=(V=p.parameters)==null?void 0:V.docs)==null?void 0:f.source},description:{story:"### Все размеры\n\nДемонстрация AutocompleteSearch в доступных размерах: `s`, `xs`.",...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var B,j,F,H,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteSearchProps) => {
    const [value1, setValue1] = useState('Алексей');
    const [value2, setValue2] = useState('Екатерина');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Дмитрий');
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px',
      minHeight: '500px'
    }}>
        {/* Сценарий 3: onClear + value → только крестик */}
        <AutocompleteSearch {...args} placeholder="onClear + value → крестик" value={value1} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)} onSuggestionSelect={item => setValue1(item.label)} onClear={() => setValue1('')} suggestions={mockData} />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <AutocompleteSearch {...args} placeholder="onClear + value + contentRight → рядом" value={value2} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} onSuggestionSelect={item => setValue2(item.label)} onClear={() => setValue2('')} suggestions={mockData} />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <AutocompleteSearch {...args} placeholder="Пустое значение — крестик скрыт" value={value3} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)} onSuggestionSelect={item => setValue3(item.label)} onClear={() => setValue3('')} suggestions={mockData} />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <AutocompleteSearch {...args} placeholder="ReadOnly — замок" value="Только для чтения" readOnly contentRight={<IconSb size="s" />} onClear={() => {}} suggestions={mockData} />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <AutocompleteSearch {...args} placeholder="Disabled — замок" value="Заблокировано" disabled contentRight={<IconSb size="s" />} onClear={() => {}} suggestions={mockData} />

        {/* Сценарий 4: только contentRight, без onClear */}
        <AutocompleteSearch {...args} placeholder="Только contentRight, без onClear" value={value4} contentRight={<IconSb size="s" />} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue4(e.target.value)} onSuggestionSelect={item => setValue4(item.label)} suggestions={mockData} />
      </div>;
  }
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const O=["Default","Sizes","WithClear"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Sizes:p,WithClear:d,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{P as A};
