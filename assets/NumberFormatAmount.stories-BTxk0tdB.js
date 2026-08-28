import{r as m,d as u}from"./react-D2T61mpp.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{N as a}from"./NumberFormatAmount-Duf9YYq8.js";import{rb as b}from"./@salutejs/plasma-icons-BcApNSC-.js";const O={title:"Локальные компоненты/NumberFormatAmount",component:a,parameters:{docs:{toc:!0}},tags:["!autodocs"],args:{size:"s",placeholder:"Сумма",disabled:!1,readOnly:!1,thousandSeparator:" ",decimalSeparator:".",decimalScale:2},argTypes:{size:{options:["s","xs"],control:{type:"select"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},h=`
import { NumberFormatAmount } from '@daisforge/ui';
`,l={name:"Default",...v({preCode:h}),render:t=>{const[p,s]=m.useState("");return u.jsxDEV("div",{style:{padding:"20px",width:"500px"},children:u.jsxDEV(a,{...t,value:p,onChange:n=>{var r;return s(((r=n==null?void 0:n.target)==null?void 0:r.value)??"")},onClear:()=>s("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:66,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:65,columnNumber:7},void 0)}},d={name:"Размеры",...v({preCode:h}),render:t=>{const p=["s","xs"],[s,n]=m.useState({s:"123456.78",xs:"123456.78"});return u.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:p.map(r=>m.createElement(a,{...t,key:r,size:r,placeholder:`Size: ${r}`,value:s[r],onChange:i=>n(N=>{var g;return{...N,[r]:((g=i==null?void 0:i.target)==null?void 0:g.value)??""}}),onClear:()=>n(i=>({...i,[r]:""}))}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:93,columnNumber:7},void 0)}},c={name:"Различные варианты",...v({preCode:h}),render:t=>{const[p,s]=m.useState("123456.78"),[n,r]=m.useState("999.99"),[i,N]=m.useState(""),[g,B]=m.useState("500");return u.jsxDEV("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"1rem",width:"500px"},children:[u.jsxDEV(a,{...t,placeholder:"onClear + value → крестик",value:p,onChange:e=>{var o;return s(((o=e==null?void 0:e.target)==null?void 0:o.value)??"")},onClear:()=>s("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:150,columnNumber:9},void 0),u.jsxDEV(a,{...t,placeholder:"onClear + value + contentRight → рядом",value:n,contentRight:u.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:162,columnNumber:25},void 0),onChange:e=>{var o;return r(((o=e==null?void 0:e.target)==null?void 0:o.value)??"")},onClear:()=>r("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:158,columnNumber:9},void 0),u.jsxDEV(a,{...t,placeholder:"Пустое значение — крестик скрыт",value:i,contentRight:u.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:171,columnNumber:25},void 0),onChange:e=>{var o;return N(((o=e==null?void 0:e.target)==null?void 0:o.value)??"")},onClear:()=>N("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:167,columnNumber:9},void 0),u.jsxDEV(a,{...t,placeholder:"ReadOnly — замок",value:"1000",readOnly:!0,contentRight:u.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:181,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:176,columnNumber:9},void 0),u.jsxDEV(a,{...t,placeholder:"Disabled — замок",value:"1000",disabled:!0,contentRight:u.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:190,columnNumber:25},void 0),onClear:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:185,columnNumber:9},void 0),u.jsxDEV(a,{...t,placeholder:"Только contentRight, без onClear",value:g,contentRight:u.jsxDEV(b,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:198,columnNumber:25},void 0),onChange:e=>{var o;return B(((o=e==null?void 0:e.target)==null?void 0:o.value)??"")}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:194,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/NumberFormatAmount/NumberFormatAmount.stories.tsx",lineNumber:141,columnNumber:7},void 0)}};var f,A,F,x,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:`### Базовый NumberFormatAmount

Поле ввода суммы с жирным шрифтом и опциональной кнопкой очистки.`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var E,k,y,D,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"### Все размеры",...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var S,z,w,R,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source},description:{story:"### С кнопкой очистки (onClear) и contentRight\n\nПри передаче `onClear` автоматически появляется крестик, если поле содержит значение.\nЕсли одновременно передан `contentRight`, он отображается правее крестика.",...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};const I=["Default","Sizes","WithClear"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Sizes:d,WithClear:c,__namedExportsOrder:I,default:O},Symbol.toStringTag,{value:"Module"}));export{$ as N};
