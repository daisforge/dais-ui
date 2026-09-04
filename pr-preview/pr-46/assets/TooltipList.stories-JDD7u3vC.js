import{r as c,d as e}from"./react-D2T61mpp.js";import{S as b}from"./Table-D4798a1r.js";import{a as u,b as y}from"./AnalyticalWidget-B4B1POp3.js";const f={title:"Локальные компоненты/TooltipList",tags:["!autodocs"]},o={render:()=>{const t=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"},{label:"Блок 4",value:"4"},{label:"Блок 5",value:"5"}],[i,d]=c.useState([]),p=i.map(s=>{var l;return(l=t.find(m=>m.value===s))==null?void 0:l.label}).filter(s=>!!s);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[e.jsxDEV(u,{variant:"BodyM",bold:!0,children:"Пример с выпадающим списком"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:41,columnNumber:9},void 0),e.jsxDEV(y,{groupLabel:"Выбранные блоки",items:p,trigger:i.length>0?"hover":"none",children:e.jsxDEV(b,{size:"s",multiple:!0,value:i,onChange:d,items:t,placeholder:"Выберите блоки",style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:50,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:45,columnNumber:9},void 0),e.jsxDEV(u,{variant:"BodyM",bold:!0,children:"Как это работает"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:61,columnNumber:9},void 0),e.jsxDEV("ul",{style:{marginTop:0},children:[e.jsxDEV("li",{children:e.jsxDEV(u,{variant:"BodyS",children:"Выберите несколько элементов в Combobox"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:70,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:69,columnNumber:11},void 0),e.jsxDEV("li",{children:e.jsxDEV(u,{variant:"BodyS",children:"Наведите на поле ввода - увидите Tooltip с выбранными значениями"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:75,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:74,columnNumber:11},void 0),e.jsxDEV("li",{children:e.jsxDEV(u,{variant:"BodyS",children:"Если ничего не выбрано - Tooltip не показывается"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:79,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:64,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TooltipList/TooltipList.stories.tsx",lineNumber:33,columnNumber:7},void 0)}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const h=["WithCombobox"],x=Object.freeze(Object.defineProperty({__proto__:null,WithCombobox:o,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{x as T,o as W};
