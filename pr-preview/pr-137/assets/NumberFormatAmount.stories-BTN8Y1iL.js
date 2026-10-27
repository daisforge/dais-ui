import{r as c,j as e}from"./react-CAOzMBF_.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{N as r}from"./NumberFormatAmount-CJN1lRqa.js";import{rf as g}from"./@salutejs/plasma-icons-Do5ggeDI.js";const I={title:"Локальные компоненты/NumberFormatAmount",component:r,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Сумма",disabled:!1,readOnly:!1,thousandSeparator:" ",decimalSeparator:".",decimalScale:2},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},x=`
import { NumberFormatAmount } from '@daisforge/ui';
`,i={name:"Default",...C({preCode:x}),render:n=>{const[p,s]=c.useState("");return e.jsx("div",{style:{padding:"20px",width:"500px"},children:e.jsx(r,{...n,value:p,onChange:o=>{var t;return s(((t=o==null?void 0:o.target)==null?void 0:t.value)??"")},onClear:()=>s("")})})}},d={name:"Размеры",...C({preCode:x}),render:n=>{const p=["s","xs"],[s,o]=c.useState({s:"123456.78",xs:"123456.78"});return e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:p.map(t=>c.createElement(r,{...n,key:t,size:t,placeholder:`Size: ${t}`,value:s[t],onChange:l=>o(v=>{var h;return{...v,[t]:((h=l==null?void 0:l.target)==null?void 0:h.value)??""}}),onClear:()=>o(l=>({...l,[t]:""}))}))})}},m={name:"Различные варианты",...C({preCode:x}),render:n=>{const[p,s]=c.useState("123456.78"),[o,t]=c.useState("999.99"),[l,v]=c.useState(""),[h,w]=c.useState("500");return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:[e.jsx(r,{...n,placeholder:"onClear + value → крестик",value:p,onChange:u=>{var a;return s(((a=u==null?void 0:u.target)==null?void 0:a.value)??"")},onClear:()=>s("")}),e.jsx(r,{...n,placeholder:"onClear + value + contentRight → рядом",value:o,contentRight:e.jsx(g,{size:"s"}),onChange:u=>{var a;return t(((a=u==null?void 0:u.target)==null?void 0:a.value)??"")},onClear:()=>t("")}),e.jsx(r,{...n,placeholder:"Пустое значение — крестик скрыт",value:l,contentRight:e.jsx(g,{size:"s"}),onChange:u=>{var a;return v(((a=u==null?void 0:u.target)==null?void 0:a.value)??"")},onClear:()=>v("")}),e.jsx(r,{...n,placeholder:"ReadOnly — замок",value:"1000",readOnly:!0,contentRight:e.jsx(g,{size:"s"}),onClear:()=>{}}),e.jsx(r,{...n,placeholder:"Disabled — замок",value:"1000",disabled:!0,contentRight:e.jsx(g,{size:"s"}),onClear:()=>{}}),e.jsx(r,{...n,placeholder:"Только contentRight, без onClear",value:h,contentRight:e.jsx(g,{size:"s"}),onChange:u=>{var a;return w(((a=u==null?void 0:u.target)==null?void 0:a.value)??"")}})]})}};var A,S,b,E,y;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const [value, setValue] = useState('');
    return <div style={{
      padding: '20px',
      width: '500px'
    }}>
        <NumberFormatAmount {...args} value={value} onChange={e => setValue(e?.target?.value ?? '')} onClear={() => setValue('')} />
      </div>;
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:`### Базовый NumberFormatAmount

Поле ввода суммы с жирным шрифтом и опциональной кнопкой очистки.`,...(y=(E=i.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};var F,D,f,z,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      s: '123456.78',
      xs: '123456.78'
    });
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px'
    }}>
        {sizes.map(size => <NumberFormatAmount {...args} key={size} size={size} placeholder={\`Size: \${size}\`} value={values[size]} onChange={e => setValues(prev => ({
        ...prev,
        [size]: e?.target?.value ?? ''
      }))} onClear={() => setValues(prev => ({
        ...prev,
        [size]: ''
      }))} />)}
      </div>;
  }
}`,...(f=(D=d.parameters)==null?void 0:D.docs)==null?void 0:f.source},description:{story:"### Все размеры",...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.description}}};var R,j,N,B,O;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const [value1, setValue1] = useState('123456.78');
    const [value2, setValue2] = useState('999.99');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('500');
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px'
    }}>
        <NumberFormatAmount {...args} placeholder="onClear + value → крестик" value={value1} onChange={e => setValue1(e?.target?.value ?? '')} onClear={() => setValue1('')} />

        <NumberFormatAmount {...args} placeholder="onClear + value + contentRight → рядом" value={value2} contentRight={<IconSb size="s" />} onChange={e => setValue2(e?.target?.value ?? '')} onClear={() => setValue2('')} />

        <NumberFormatAmount {...args} placeholder="Пустое значение — крестик скрыт" value={value3} contentRight={<IconSb size="s" />} onChange={e => setValue3(e?.target?.value ?? '')} onClear={() => setValue3('')} />

        <NumberFormatAmount {...args} placeholder="ReadOnly — замок" value="1000" readOnly contentRight={<IconSb size="s" />} onClear={() => {}} />

        <NumberFormatAmount {...args} placeholder="Disabled — замок" value="1000" disabled contentRight={<IconSb size="s" />} onClear={() => {}} />

        <NumberFormatAmount {...args} placeholder="Только contentRight, без onClear" value={value4} contentRight={<IconSb size="s" />} onChange={e => setValue4(e?.target?.value ?? '')} />
      </div>;
  }
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"### С кнопкой очистки (onClear) и contentRight\n\nПри передаче `onClear` автоматически появляется крестик, если поле содержит значение.\nЕсли одновременно передан `contentRight`, он отображается правее крестика.",...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};const _=["Default","Sizes","WithClear"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Sizes:d,WithClear:m,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{$ as N};
