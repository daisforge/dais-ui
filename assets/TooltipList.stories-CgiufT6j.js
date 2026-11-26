import{r as y,j as u}from"./react-DYHuXpTF.js";import{S as m}from"./Combobox-BxkYMH6M.js";import{T as b}from"./TooltipList-BajRDP8T.js";import{T as e}from"./Typography-DEItZ0E3.js";const h={title:"Локальные компоненты/TooltipList",tags:["!autodocs"]},l={render:()=>{const t=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"},{label:"Блок 4",value:"4"},{label:"Блок 5",value:"5"}],[o,p]=y.useState([]),d=o.map(n=>{var a;return(a=t.find(c=>c.value===n))==null?void 0:a.label}).filter(n=>!!n);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[u.jsx(e,{variant:"BodyM",bold:!0,children:"Пример с выпадающим списком"}),u.jsx(b,{groupLabel:"Выбранные блоки",items:d,trigger:o.length>0?"hover":"none",children:u.jsx(m,{size:"s",multiple:!0,value:o,onChange:p,items:t,placeholder:"Выберите блоки",style:{width:"100%"}})}),u.jsx(e,{variant:"BodyM",bold:!0,children:"Как это работает"}),u.jsxs("ul",{style:{marginTop:0},children:[u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Выберите несколько элементов в Combobox"})}),u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Наведите на поле ввода - увидите Tooltip с выбранными значениями"})}),u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Если ничего не выбрано - Tooltip не показывается"})})]})]})}};var s,r,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const mockOptions = [{
      label: 'Блок 1',
      value: '1'
    }, {
      label: 'Блок 2',
      value: '2'
    }, {
      label: 'Блок 3',
      value: '3'
    }, {
      label: 'Блок 4',
      value: '4'
    }, {
      label: 'Блок 5',
      value: '5'
    }];
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const selectedLabels = selectedValues.map(value => mockOptions.find(opt => opt.value === value)?.label).filter((label): label is string => Boolean(label));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 300
    }}>
        <Typography variant="BodyM" bold>
          Пример с выпадающим списком
        </Typography>

        <TooltipList groupLabel="Выбранные блоки" items={selectedLabels} trigger={selectedValues.length > 0 ? 'hover' : 'none'}>
          <Combobox size="s" multiple value={selectedValues} onChange={setSelectedValues} items={mockOptions} placeholder="Выберите блоки" style={{
          width: '100%'
        }} />
        </TooltipList>

        <Typography variant="BodyM" bold>
          Как это работает
        </Typography>
        <ul style={{
        marginTop: 0
      }}>
          <li>
            <Typography variant="BodyS">
              Выберите несколько элементов в Combobox
            </Typography>
          </li>
          <li>
            <Typography variant="BodyS">
              Наведите на поле ввода - увидите Tooltip с выбранными значениями
            </Typography>
          </li>
          <li>
            <Typography variant="BodyS">
              Если ничего не выбрано - Tooltip не показывается
            </Typography>
          </li>
        </ul>
      </div>;
  }
}`,...(i=(r=l.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const v=["WithCombobox"],E=Object.freeze(Object.defineProperty({__proto__:null,WithCombobox:l,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{E as T,l as W};
