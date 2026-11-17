import{r as m,d as e}from"./react-D2T61mpp.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{cp as C,cq as c,cs as o}from"./vendor-_h_CmnQT.js";import{B as g}from"./Box-CD7Aw3Vn.js";import{s as F,db as H,a as q,z as T,b as $,y as z,d5 as O,cU as W}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as t,A}from"./styled-components-D7_wlBS0.js";import{S as M,t as I}from"./@salutejs/sdds-finai-DVA7rxuT.js";import{P as j}from"./PageTitle-BVqcW-HS.js";import{T as S}from"./TextField-Cl3BpbLe.js";const U=t.div`
  position: relative;
  isolation: isolate;
  display: grid;
  flex: 1;
  min-width: 0;
  min-height: 0;
`,G=t.div`
  position: relative;
  z-index: 0;
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
`,J=t.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: ${F};
  background: ${H};
  border-radius: inherit;
  text-align: center;
`,K=t.div`
  display: flex;
  flex: none;
  margin-bottom: ${q};
`,Q=t.h3`
  ${()=>A(O)}
  max-width: 100%;
  margin: 0;
  color: ${T};
  overflow-wrap: anywhere;
`,X=t.p`
  ${()=>A(W)}
  max-width: 100%;
  margin: ${$} 0 0;
  color: ${z};
  overflow-wrap: anywhere;
`,i=m.forwardRef(({active:u=!0,title:r="Загрузка страницы",subtitle:a="Данные обрабатываются, обычно это занимает не более 10 секунд",children:p,...x},_)=>{const f=m.useRef(null);return m.useEffect(()=>{var b;u&&document.activeElement instanceof HTMLElement&&((b=f.current)!=null&&b.contains(document.activeElement))&&document.activeElement.blur()},[u]),e.jsxDEV(U,{...x,ref:_,"aria-busy":u,children:[e.jsxDEV(G,{ref:f,...u?{inert:""}:{},"aria-hidden":u||void 0,children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:40,columnNumber:9},void 0),u&&e.jsxDEV(J,{role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsxDEV(K,{"aria-hidden":"true",children:e.jsxDEV(M,{view:"secondary",width:36,height:36},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:50,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:49,columnNumber:13},void 0),e.jsxDEV(Q,{children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:52,columnNumber:13},void 0),a&&e.jsxDEV(X,{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:53,columnNumber:26},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:48,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageLoader/PageLoader.tsx",lineNumber:39,columnNumber:7},void 0)});i.displayName="PageLoader";try{i.displayName="PageLoader",i.__docgenInfo={description:"Оверлей загрузки области контента. Заголовок страницы размещается снаружи.",displayName:"PageLoader",props:{active:{defaultValue:{value:"true"},description:"Показывать оверлей и блокировать взаимодействие с контентом.",name:"active",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"Загрузка страницы"},description:"Заголовок загрузки.",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:"Данные обрабатываются, обычно это занимает не более 10 секунд"},description:"Описание загрузки. Передайте null или пустую строку, чтобы скрыть описание.",name:"subtitle",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Композиции/PageLoader",component:i,tags:["!autodocs"],args:{active:!0,title:"Загрузка страницы",subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},s={name:"Загрузка страницы",...R({previewSource:"shown"}),render:u=>e.jsxDEV(g,{display:"flex",flexDirection:"column",minHeight:"480px",gap:"24px",children:[e.jsxDEV(j,{title:"Отчёты"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:30,columnNumber:7},void 0),e.jsxDEV(i,{...u,children:e.jsxDEV(S,{label:"Название отчёта",defaultValue:"Годовой отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:32,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:31,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:29,columnNumber:5},void 0)},n={name:"Без описания",args:{subtitle:null},render:u=>e.jsxDEV(g,{display:"flex",minHeight:"320px",children:e.jsxDEV(i,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:43,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:42,columnNumber:5},void 0)},l={name:"Узкая область контента",render:u=>e.jsxDEV(g,{display:"flex",width:"280px",maxWidth:"100%",minHeight:"320px",children:e.jsxDEV(i,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:52,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:51,columnNumber:5},void 0)},d={name:"Сохранение контента при загрузке",render:function(r){const[a,p]=m.useState(!1);return e.jsxDEV(g,{display:"flex",flexDirection:"column",minHeight:"480px",gap:"24px",children:[e.jsxDEV(j,{title:"Отчёты",rightSlot:e.jsxDEV(I,{onClick:()=>p(x=>!x),children:a?"Завершить загрузку":"Начать загрузку"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:67,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:64,columnNumber:9},this),e.jsxDEV(i,{...r,active:a,children:e.jsxDEV(S,{label:"Название отчёта",defaultValue:"Черновик"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:73,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:72,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/PageLoader/PageLoader.stories.tsx",lineNumber:63,columnNumber:7},this)},play:async({canvasElement:u})=>{const r=C(u),a=r.getByRole("textbox");await c.clear(a),await c.type(a,"Годовой отчёт"),await c.click(r.getByRole("button",{name:"Начать загрузку"})),await o(r.getByRole("status")).toBeVisible(),await o(a.closest("[inert]")).not.toBeNull(),await o(r.queryByRole("textbox")).toBeNull(),await c.click(r.getByRole("button",{name:"Завершить загрузку"})),await o(r.queryByRole("status")).toBeNull(),await o(r.getByRole("textbox")).toBe(a),await o(a).toHaveValue("Годовой отчёт"),await o(a.closest("[inert]")).toBeNull()}};var E,h,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Загрузка страницы',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: args => <Box display="flex" flexDirection="column" minHeight="480px" gap="24px">
      <PageTitle title="Отчёты" />
      <PageLoader {...args}>
        <TextField label="Название отчёта" defaultValue="Годовой отчёт" />
      </PageLoader>
    </Box>
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var v,y,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Без описания',
  args: {
    subtitle: null
  },
  render: args => <Box display="flex" minHeight="320px">
      <PageLoader {...args} />
    </Box>
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,P,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Узкая область контента',
  render: args => <Box display="flex" width="280px" maxWidth="100%" minHeight="320px">
      <PageLoader {...args} />
    </Box>
}`,...(B=(P=l.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,L,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Сохранение контента при загрузке',
  render: function Render(args) {
    const [active, setActive] = useState(false);
    return <Box display="flex" flexDirection="column" minHeight="480px" gap="24px">
        <PageTitle title="Отчёты" rightSlot={<Button onClick={() => setActive(value => !value)}>
              {active ? 'Завершить загрузку' : 'Начать загрузку'}
            </Button>} />
        <PageLoader {...args} active={active}>
          <TextField label="Название отчёта" defaultValue="Черновик" />
        </PageLoader>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, 'Годовой отчёт');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Начать загрузку'
    }));
    await expect(canvas.getByRole('status')).toBeVisible();
    await expect(input.closest('[inert]')).not.toBeNull();
    await expect(canvas.queryByRole('textbox')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Завершить загрузку'
    }));
    await expect(canvas.queryByRole('status')).toBeNull();
    await expect(canvas.getByRole('textbox')).toBe(input);
    await expect(input).toHaveValue('Годовой отчёт');
    await expect(input.closest('[inert]')).toBeNull();
  }
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const Z=["Default","WithoutSubtitle","Narrow","PreserveContent"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Narrow:l,PreserveContent:d,WithoutSubtitle:n,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{le as P};
