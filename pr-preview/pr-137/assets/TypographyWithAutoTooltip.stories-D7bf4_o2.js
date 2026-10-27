import{j as u,r}from"./react-CAOzMBF_.js";import{T as o}from"./AiAgentPopup-zRx4ytCb.js";const y={title:"Локальные компоненты/TypographyWithAutoTooltip",component:o,tags:["!autodocs"],argTypes:{variant:{control:"select",options:["DsplL","DsplM","DsplS","H1","H2","H3","H4","H5","BodyL","BodyM","BodyS","BodyXS","BodyXXS","TextL","TextM","TextS","TextXS"]},bold:{control:"boolean"},lines:{control:{type:"number",min:1,max:5,step:1}}},args:{variant:"BodyM",bold:!1,lines:1,tooltipText:"Это всплывающая подсказка для обрезанного текста",children:"Очень длинный текст, который не помещается в отведённую ширину и будет обрезан с многоточием"}},e={render:n=>u.jsx("div",{style:{width:"200px"},children:u.jsx(o,{...n})})},t={render:n=>{const[i,m]=r.useState(200),[s,g]=r.useState(1);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:"400px"},children:[u.jsxs("label",{htmlFor:"widthRange",children:["Ширина контейнера: ",i,"px "]}),u.jsx("input",{id:"widthRange",type:"range",min:"100",max:"500",step:"10",value:i,onChange:a=>m(Number(a.target.value)),style:{width:"100%"}}),u.jsxs("label",{htmlFor:"linesRange",children:["Макс. количество строк: ",s]}),u.jsx("input",{id:"linesRange",type:"range",min:"1",max:"10",step:"1",value:s,onChange:a=>g(Number(a.target.value)),style:{width:"100%"}})]}),u.jsx("div",{style:{width:`${i}px`,border:"1px dashed #ccc",padding:8},children:u.jsx(o,{...n,lines:s,children:"Этот текст будет обрезаться в зависимости от выбранной ширины контейнера и количества строк. Наведите курсор на текст, чтобы увидеть подсказку, если текст обрезан"})})]})}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '200px'
  }}>
      <TypographyWithAutoTooltip {...args} />
    </div>
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,h,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const v=["Default","InteractiveDemo"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,InteractiveDemo:t,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{b as T};
