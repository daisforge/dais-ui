import{r as y,j as u}from"./react-CAOzMBF_.js";import{S as b}from"./Table-BQHrw1K6.js";import{a as e,b as m}from"./AiAgentPopup-zRx4ytCb.js";const h={title:"Локальные компоненты/TooltipList",tags:["!autodocs"]},l={render:()=>{const a=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"},{label:"Блок 4",value:"4"},{label:"Блок 5",value:"5"}],[n,p]=y.useState([]),d=n.map(o=>{var t;return(t=a.find(c=>c.value===o))==null?void 0:t.label}).filter(o=>!!o);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[u.jsx(e,{variant:"BodyM",bold:!0,children:"Пример с выпадающим списком"}),u.jsx(m,{groupLabel:"Выбранные блоки",items:d,trigger:n.length>0?"hover":"none",children:u.jsx(b,{size:"s",multiple:!0,value:n,onChange:p,items:a,placeholder:"Выберите блоки",style:{width:"100%"}})}),u.jsx(e,{variant:"BodyM",bold:!0,children:"Как это работает"}),u.jsxs("ul",{style:{marginTop:0},children:[u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Выберите несколько элементов в Combobox"})}),u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Наведите на поле ввода - увидите Tooltip с выбранными значениями"})}),u.jsx("li",{children:u.jsx(e,{variant:"BodyS",children:"Если ничего не выбрано - Tooltip не показывается"})})]})]})}};var s,r,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(r=l.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const v=["WithCombobox"],T=Object.freeze(Object.defineProperty({__proto__:null,WithCombobox:l,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{T,l as W};
