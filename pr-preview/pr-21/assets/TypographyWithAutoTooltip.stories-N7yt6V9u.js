import{d as e,r as a}from"./react-D2T61mpp.js";import{T as n}from"./AnalyticalWidget-DZrcjNXy.js";const T={title:"Локальные компоненты/TypographyWithAutoTooltip",component:n,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["DsplL","DsplM","DsplS","H1","H2","H3","H4","H5","BodyL","BodyM","BodyS","BodyXS","BodyXXS","TextL","TextM","TextS","TextXS"]},bold:{control:"boolean"},lines:{control:{type:"number",min:1,max:5,step:1}}},args:{variant:"BodyM",bold:!1,lines:1,tooltipText:"Это всплывающая подсказка для обрезанного текста",children:"Очень длинный текст, который не помещается в отведённую ширину и будет обрезан с многоточием"}},u={render:i=>e.jsxDEV("div",{style:{width:"200px"},children:e.jsxDEV(n,{...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:53,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:52,columnNumber:5},void 0)},o={render:i=>{const[t,c]=a.useState(200),[r,g]=a.useState(1);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:"400px"},children:[e.jsxDEV("label",{htmlFor:"widthRange",children:["Ширина контейнера: ",t,"px "]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:72,columnNumber:11},void 0),e.jsxDEV("input",{id:"widthRange",type:"range",min:"100",max:"500",step:"10",value:t,onChange:s=>c(Number(s.target.value)),style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:73,columnNumber:11},void 0),e.jsxDEV("label",{htmlFor:"linesRange",children:["Макс. количество строк: ",r]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:84,columnNumber:11},void 0),e.jsxDEV("input",{id:"linesRange",type:"range",min:"1",max:"10",step:"1",value:r,onChange:s=>g(Number(s.target.value)),style:{width:"100%"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:85,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:64,columnNumber:9},void 0),e.jsxDEV("div",{style:{width:`${t}px`,border:"1px dashed #ccc",padding:8},children:e.jsxDEV(n,{...i,lines:r,children:"Этот текст будет обрезаться в зависимости от выбранной ширины контейнера и количества строк. Наведите курсор на текст, чтобы увидеть подсказку, если текст обрезан"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:103,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:96,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TypographyWithTooltip/TypographyWithAutoTooltip.stories.tsx",lineNumber:63,columnNumber:7},void 0)}};var l,p,d;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '200px'
  }}>
      <TypographyWithAutoTooltip {...args} />
    </div>
}`,...(d=(p=u.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,m,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [width, setWidth] = useState(200);
    const [lines, setLines] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: '400px'
      }}>
          <label htmlFor="widthRange">Ширина контейнера: {width}px </label>
          <input id="widthRange" type="range" min="100" max="500" step="10" value={width} onChange={e => setWidth(Number(e.target.value))} style={{
          width: '100%'
        }} />

          <label htmlFor="linesRange">Макс. количество строк: {lines}</label>
          <input id="linesRange" type="range" min="1" max="10" step="1" value={lines} onChange={e => setLines(Number(e.target.value))} style={{
          width: '100%'
        }} />
        </div>
        <div style={{
        width: \`\${width}px\`,
        border: '1px dashed #ccc',
        padding: 8
      }}>
          <TypographyWithAutoTooltip {...args} lines={lines}>
            Этот текст будет обрезаться в зависимости от выбранной ширины
            контейнера и количества строк. Наведите курсор на текст, чтобы
            увидеть подсказку, если текст обрезан
          </TypographyWithAutoTooltip>
        </div>
      </div>;
  }
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const x=["Default","InteractiveDemo"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:u,InteractiveDemo:o,__namedExportsOrder:x,default:T},Symbol.toStringTag,{value:"Module"}));export{v as T};
