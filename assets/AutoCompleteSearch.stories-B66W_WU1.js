import{r as c,d as u}from"./react-D2T61mpp.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{A as n}from"./AutocompleteSearch-B43ZfysL.js";import{rb as h}from"./@salutejs/plasma-icons-BnddfUBU.js";const r=[{label:"Алексей Смирнов"},{label:"Екатерина Иванова"},{label:"Дмитрий Петров"},{label:"Ольга Васильева"},{label:"Сергей Сидоров"},{label:"Мария Кузнецова"},{label:"Андрей Попов"},{label:"Анна Николаева"},{label:"Иван Федоров"},{label:"Наталья Морозова"}],H={title:"Локальные компоненты/AutocompleteSearch",component:n,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Поиск",disabled:!1,readOnly:!1},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},S=`
import { AutocompleteSearch } from '@daisforge/ui';
`,m={name:"Default",...C({preCode:S}),render:o=>{const[g,s]=c.useState("");return u.jsxDEV("div",{style:{padding:"20px",minHeight:"500px",width:"500px"},children:u.jsxDEV(n,{...o,value:g,onChange:a=>s(a.target.value),onSuggestionSelect:a=>s(a.label),onClear:()=>s(""),suggestions:r,beforeListTotal:!0,beforeListTotalEntity:"[сущность]"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:76,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:75,columnNumber:7},void 0)}},d={name:"Размеры",...C({preCode:S}),render:o=>{const g=["s","xs"],[s,a]=c.useState({s:"",xs:""});return u.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px",minHeight:"500px"},children:g.map(t=>c.createElement(n,{...o,key:t,size:t,placeholder:`Size: ${t}`,value:s[t],onChange:l=>a(i=>({...i,[t]:l.target.value})),onSuggestionSelect:l=>a(i=>({...i,[t]:l.label})),onClear:()=>a(l=>({...l,[t]:""})),suggestions:r}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:111,columnNumber:7},void 0)}},p={name:"Различные варианты",...C({preCode:S}),render:o=>{const[g,s]=c.useState("Алексей"),[a,t]=c.useState("Екатерина"),[l,i]=c.useState(""),[F,A]=c.useState("Дмитрий");return u.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px",minHeight:"500px"},children:[u.jsxDEV(n,{...o,placeholder:"onClear + value → крестик",value:g,onChange:e=>s(e.target.value),onSuggestionSelect:e=>s(e.label),onClear:()=>s(""),suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:175,columnNumber:9},void 0),u.jsxDEV(n,{...o,placeholder:"onClear + value + contentRight → рядом",value:a,contentRight:u.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:192,columnNumber:25},void 0),onChange:e=>t(e.target.value),onSuggestionSelect:e=>t(e.label),onClear:()=>t(""),suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:188,columnNumber:9},void 0),u.jsxDEV(n,{...o,placeholder:"Пустое значение — крестик скрыт",value:l,contentRight:u.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:206,columnNumber:25},void 0),onChange:e=>i(e.target.value),onSuggestionSelect:e=>i(e.label),onClear:()=>i(""),suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:202,columnNumber:9},void 0),u.jsxDEV(n,{...o,placeholder:"ReadOnly — замок",value:"Только для чтения",readOnly:!0,contentRight:u.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:221,columnNumber:25},void 0),onClear:()=>{},suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:216,columnNumber:9},void 0),u.jsxDEV(n,{...o,placeholder:"Disabled — замок",value:"Заблокировано",disabled:!0,contentRight:u.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:232,columnNumber:25},void 0),onClear:()=>{},suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:227,columnNumber:9},void 0),u.jsxDEV(n,{...o,placeholder:"Только contentRight, без onClear",value:F,contentRight:u.jsxDEV(h,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:242,columnNumber:25},void 0),onChange:e=>A(e.target.value),onSuggestionSelect:e=>A(e.label),suggestions:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:238,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AutoCompleteSearch/AutoCompleteSearch.stories.tsx",lineNumber:164,columnNumber:7},void 0)}};var v,b,E,f,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source},description:{story:`### Базовый AutocompleteSearch

Поле поиска с автодополнением, иконкой лупы слева и крестиком очистки справа.`,...(x=(f=m.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var D,k,y,N,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"### Все размеры\n\nДемонстрация AutocompleteSearch в доступных размерах: `s`, `xs`.",...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var R,z,B,w,j;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"### С кнопкой очистки (onClear)\n\nПриоритет contentRight:\n1. `disabled`/`readOnly` → замок (заменяет всё)\n2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом\n3. `onClear` + `value` → только крестик\n4. иначе → `contentRight` как есть",...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};const I=["Default","Sizes","WithClear"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Sizes:d,WithClear:p,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{_ as A};
