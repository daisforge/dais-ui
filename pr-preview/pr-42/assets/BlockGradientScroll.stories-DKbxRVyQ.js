import{d as e,r as ae}from"./react-D2T61mpp.js";import{B as n}from"./BlockGradientScroll-C0NR87jl.js";import{c as ee}from"./mixins-DgNSKajO.js";import{b0 as u,y as x,x as f,q as le,u as de,v as ce,cJ as B,cs as re,n as oe}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as b}from"./styled-components-DsyoZJDS.js";import{b as g}from"./@salutejs/sdds-finai-IZHEqlfF.js";const k=b.div`
  padding: 20px;
  background: ${x};
  border-radius: 8px;
`,ne=b.div`
  padding: 16px;
  margin-bottom: 12px;
  background: ${oe};
  border-radius: 6px;
  color: ${f};

  &:last-child {
    margin-bottom: 0;
  }
`,r=h=>Array.from({length:h},(p,i)=>e.jsxDEV(ne,{children:e.jsxDEV("h3",{children:["Элемент ",i+1]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:40,columnNumber:7},void 0)},i,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:39,columnNumber:5},void 0)),ue=b.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${x};
  border-radius: 8px;
  border: 1px solid ${oe};

  ${ee({padding:24,variant:"white"})}
`,me=b.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${re};
  border-radius: 8px;

  ${ee({padding:24,variant:"gray"})}
`,ke={title:"Локальные компоненты/BlockGradientScroll",component:n,tags:["!autodocs"],argTypes:{variant:{description:"Вариант цвета градиента (white/gray)",control:{type:"select"},options:["white","gray"]},children:{description:"Контент внутри scroll-контейнера",control:!1},className:{description:"CSS класс",control:{type:"text"}},style:{description:"Inline стили (padding автоматически подхватывается для градиента)",control:!1},$css:{description:"Кастомные стили styled-components",control:!1}}},s={name:"1. Базовый компонент",args:{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,background:x,borderRadius:8,border:`1px solid ${u}`},children:r(8)}},t={name:"2. Миксин (styled-components)",parameters:{controls:{disable:!0}},render:()=>e.jsxDEV(k,{children:e.jsxDEV("div",{style:{display:"flex",gap:20},children:[e.jsxDEV("div",{style:{flex:1},children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"variant: white"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:132,columnNumber:11},void 0),e.jsxDEV(ue,{children:r(6)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:133,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:131,columnNumber:9},void 0),e.jsxDEV("div",{style:{flex:1},children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"variant: gray"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:136,columnNumber:11},void 0),e.jsxDEV(me,{children:r(6)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:137,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:135,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:130,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:129,columnNumber:5},void 0)},a={name:"3. Мало контента (без скролла)",args:{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${u}`},children:r(2)}},l={name:"4. Несколько контейнеров",render:()=>e.jsxDEV(k,{children:e.jsxDEV("div",{style:{display:"flex",gap:20},children:[e.jsxDEV(n,{variant:"white",style:{flex:1,maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${u}`},children:r(6)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:171,columnNumber:9},void 0),e.jsxDEV(n,{variant:"gray",style:{flex:1,maxHeight:300,overflowY:"auto",padding:24,background:re,borderRadius:8,border:`1px solid ${u}`},children:r(6)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:185,columnNumber:9},void 0),e.jsxDEV(n,{variant:"white",style:{flex:1,maxHeight:300,overflowY:"auto",padding:"0 16px 32px",borderRadius:8,border:`1px solid ${u}`},children:r(6)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:200,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:170,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:169,columnNumber:5},void 0)},d={name:"5. Динамический контент",render:function(){const[p,i]=ae.useState([1,2,3]),ie=()=>{i(o=>[...o,Math.max(...o,0)+1])},se=()=>{i(o=>o.length>0?o.slice(0,-1):o)},te=()=>{i([1,2,3])};return e.jsxDEV(k,{children:[e.jsxDEV("div",{style:{marginBottom:16,display:"flex",gap:8},children:[e.jsxDEV(g,{onClick:ie,style:{background:le,color:f,border:"none",borderRadius:4,cursor:"pointer"},children:"+ Добавить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:242,columnNumber:11},this),e.jsxDEV(g,{onClick:se,style:{background:de,color:f,border:"none",borderRadius:4,cursor:"pointer"},children:"− Удалить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:254,columnNumber:11},this),e.jsxDEV(g,{onClick:te,style:{background:ce,color:f,border:"none",borderRadius:4,cursor:"pointer"},children:"Сбросить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:266,columnNumber:11},this),e.jsxDEV("span",{style:{alignSelf:"center",marginLeft:8,color:B},children:["Элементов: ",p.length]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:278,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:241,columnNumber:9},this),e.jsxDEV(n,{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${u}`},children:[p.map(o=>e.jsxDEV(ne,{children:e.jsxDEV("h3",{children:["Элемент ",o]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:301,columnNumber:15},this)},o,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:300,columnNumber:13},this)),p.length===0&&e.jsxDEV("div",{style:{color:B,textAlign:"center",padding:40},children:"Пусто. Добавь элементы."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:305,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:289,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:240,columnNumber:7},this)}},c={name:"6. Способы стилизации (style, className, $css)",render:()=>e.jsxDEV(k,{children:[e.jsxDEV("style",{children:`
          .custom-gradient-box {
            max-height: 200px;
            overflow-y: auto;
            padding: 20px;
            background: #fff8e1;
            border-radius: 8px;
            border: 2px dashed #ffa000;
          }
        `},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:329,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"1. Через style prop"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:345,columnNumber:11},void 0),e.jsxDEV("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`<BlockGradientScroll
  variant="white"
  style={{
    maxHeight: 200,
    overflowY: 'auto',
    padding: 20,
    background: '#e8f5e9',
    border: '2px solid #4caf50',
  }}
>
  {children}
</BlockGradientScroll>`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:348,columnNumber:11},void 0),e.jsxDEV(n,{variant:"white",style:{maxHeight:200,overflowY:"auto",padding:20,background:"#e8f5e9",borderRadius:8,border:"2px solid #4caf50"},children:r(5)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:372,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:344,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"2. Через className"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:389,columnNumber:11},void 0),e.jsxDEV("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`.custom-gradient-box {
  max-height: 200px;
  overflow-y: auto;
  padding: 20px;
  background: #fff8e1;
  border: 2px dashed #ffa000;
}

<BlockGradientScroll
  variant="white"
  className="custom-gradient-box"
>
  {children}
</BlockGradientScroll>`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:390,columnNumber:11},void 0),e.jsxDEV(n,{variant:"white",className:"custom-gradient-box",children:r(5)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:416,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:388,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"3. Через $css (styled-components)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:423,columnNumber:11},void 0),e.jsxDEV("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`<BlockGradientScroll
  variant="white"
  $css={\`
    max-height: 200px;
    overflow-y: auto;
    padding: 20px;
    background: linear-gradient(...);
    border: 2px solid #2196f3;
  \`}
>
  {children}
</BlockGradientScroll>`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:426,columnNumber:11},void 0),e.jsxDEV(n,{variant:"white",$css:`
              max-height: 200px;
              overflow-y: auto;
              padding: 20px;
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 8px;
              border: 2px solid #2196f3;
            `,children:r(5)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:450,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:422,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:342,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:328,columnNumber:5},void 0)},m={name:"1280 Адаптив",parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxDEV(k,{children:e.jsxDEV("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"Компонент `BlockGradientScroll`"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:486,columnNumber:11},void 0),e.jsxDEV(n,{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${u}`},children:r(8)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:489,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:485,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{marginBottom:8,fontWeight:500},children:"Миксин `BlockGradientScrollMixin`"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:504,columnNumber:11},void 0),e.jsxDEV(ue,{children:r(8)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:507,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:503,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:478,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/BlockGradientScroll/BlockGradientScroll.stories.tsx",lineNumber:477,columnNumber:5},void 0)};var y,v,S,N,G;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '1. Базовый компонент',
  args: {
    variant: 'white',
    style: {
      maxHeight: 300,
      overflowY: 'auto',
      padding: 24,
      background: surfaceSolidCard,
      borderRadius: 8,
      border: \`1px solid \${outlineAccent}\`
    },
    children: generateItems(8)
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:`Базовый пример использования компонента.
Padding автоматически подхватывается из style.`,...(G=(N=s.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var D,E,w,C,j;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '2. Миксин (styled-components)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DemoContainer>
      <div style={{
      display: 'flex',
      gap: 20
    }}>
        <div style={{
        flex: 1
      }}>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>variant: white</p>
          <BoxWithMixin>{generateItems(6)}</BoxWithMixin>
        </div>
        <div style={{
        flex: 1
      }}>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>variant: gray</p>
          <BoxWithMixinGray>{generateItems(6)}</BoxWithMixinGray>
        </div>
      </div>
    </DemoContainer>
}`,...(w=(E=t.parameters)==null?void 0:E.docs)==null?void 0:w.source},description:{story:`Использование миксина в styled-components.
Миксин добавляется к существующему styled-компоненту.

⚠️ Controls не работают — стили зафиксированы при создании компонента.`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var V,A,F,$,R;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '3. Мало контента (без скролла)',
  args: {
    variant: 'white',
    style: {
      maxHeight: 300,
      overflowY: 'auto',
      padding: 24,
      borderRadius: 8,
      border: \`1px solid \${outlineAccent}\`
    },
    children: generateItems(2)
  }
}`,...(F=(A=a.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Если контент помещается без скролла — градиент не появляется.",...(R=($=a.parameters)==null?void 0:$.docs)==null?void 0:R.description}}};var I,W,M,H,Y;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '4. Несколько контейнеров',
  render: () => <DemoContainer>
      <div style={{
      display: 'flex',
      gap: 20
    }}>
        <BlockGradientScroll variant="white" style={{
        flex: 1,
        maxHeight: 300,
        overflowY: 'auto',
        padding: 24,
        borderRadius: 8,
        border: \`1px solid \${outlineAccent}\`
      }}>
          {generateItems(6)}
        </BlockGradientScroll>

        <BlockGradientScroll variant="gray" style={{
        flex: 1,
        maxHeight: 300,
        overflowY: 'auto',
        padding: 24,
        background: surfaceSolidPrimary,
        borderRadius: 8,
        border: \`1px solid \${outlineAccent}\`
      }}>
          {generateItems(6)}
        </BlockGradientScroll>

        <BlockGradientScroll variant="white" style={{
        flex: 1,
        maxHeight: 300,
        overflowY: 'auto',
        padding: '0 16px 32px',
        borderRadius: 8,
        border: \`1px solid \${outlineAccent}\`
      }}>
          {generateItems(6)}
        </BlockGradientScroll>
      </div>
    </DemoContainer>
}`,...(M=(W=l.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:`Несколько контейнеров на одной странице работают независимо.
Каждый компонент автоматически получает свои padding'и.`,...(Y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Y.description}}};var P,z,_,L,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '5. Динамический контент',
  render: function DynamicContentRender() {
    const [items, setItems] = useState([1, 2, 3]);
    const addItem = () => {
      setItems(prev => [...prev, Math.max(...prev, 0) + 1]);
    };
    const removeItem = () => {
      setItems(prev => prev.length > 0 ? prev.slice(0, -1) : prev);
    };
    const reset = () => {
      setItems([1, 2, 3]);
    };
    return <DemoContainer>
        <div style={{
        marginBottom: 16,
        display: 'flex',
        gap: 8
      }}>
          <Button onClick={addItem} style={{
          background: textPositive,
          color: textPrimary,
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}>
            + Добавить
          </Button>
          <Button onClick={removeItem} style={{
          background: textNegative,
          color: textPrimary,
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}>
            − Удалить
          </Button>
          <Button onClick={reset} style={{
          background: textInfo,
          color: textPrimary,
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}>
            Сбросить
          </Button>
          <span style={{
          alignSelf: 'center',
          marginLeft: 8,
          color: textWarningMinor
        }}>
            Элементов: {items.length}
          </span>
        </div>

        <BlockGradientScroll variant="white" style={{
        maxHeight: 300,
        overflowY: 'auto',
        padding: 24,
        borderRadius: 8,
        border: \`1px solid \${outlineAccent}\`
      }}>
          {items.map(id => <DemoItem key={id}>
              <h3>Элемент {id}</h3>
            </DemoItem>)}
          {items.length === 0 && <div style={{
          color: textWarningMinor,
          textAlign: 'center',
          padding: 40
        }}>
              Пусто. Добавь элементы.
            </div>}
        </BlockGradientScroll>
      </DemoContainer>;
  }
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:`Интерактивный пример: добавление и удаление элементов.
Градиент появляется/исчезает автоматически в зависимости от количества контента.`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.description}}};var O,U,q,J,K;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '6. Способы стилизации (style, className, $css)',
  render: () => <DemoContainer>
      <style>
        {\`
          .custom-gradient-box {
            max-height: 200px;
            overflow-y: auto;
            padding: 20px;
            background: #fff8e1;
            border-radius: 8px;
            border: 2px dashed #ffa000;
          }
        \`}
      </style>

      <div style={{
      display: 'flex',
      gap: 20,
      flexDirection: 'column'
    }}>
        {/* style prop */}
        <div>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>
            1. Через style prop
          </p>
          <pre style={{
          color: '#000',
          background: '#f5f5f5',
          padding: 12,
          borderRadius: 4,
          fontSize: 12,
          marginBottom: 8,
          overflow: 'auto'
        }}>
            {\`<BlockGradientScroll
  variant="white"
  style={{
    maxHeight: 200,
    overflowY: 'auto',
    padding: 20,
    background: '#e8f5e9',
    border: '2px solid #4caf50',
  }}
>
  {children}
</BlockGradientScroll>\`}
          </pre>
          <BlockGradientScroll variant="white" style={{
          maxHeight: 200,
          overflowY: 'auto',
          padding: 20,
          background: '#e8f5e9',
          borderRadius: 8,
          border: '2px solid #4caf50'
        }}>
            {generateItems(5)}
          </BlockGradientScroll>
        </div>

        {/* className prop */}
        <div>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>2. Через className</p>
          <pre style={{
          color: '#000',
          background: '#f5f5f5',
          padding: 12,
          borderRadius: 4,
          fontSize: 12,
          marginBottom: 8,
          overflow: 'auto'
        }}>
            {\`.custom-gradient-box {
  max-height: 200px;
  overflow-y: auto;
  padding: 20px;
  background: #fff8e1;
  border: 2px dashed #ffa000;
}

<BlockGradientScroll
  variant="white"
  className="custom-gradient-box"
>
  {children}
</BlockGradientScroll>\`}
          </pre>
          <BlockGradientScroll variant="white" className="custom-gradient-box">
            {generateItems(5)}
          </BlockGradientScroll>
        </div>

        {/* $css prop */}
        <div>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>
            3. Через $css (styled-components)
          </p>
          <pre style={{
          color: '#000',
          background: '#f5f5f5',
          padding: 12,
          borderRadius: 4,
          fontSize: 12,
          marginBottom: 8,
          overflow: 'auto'
        }}>
            {\`<BlockGradientScroll
  variant="white"
  $css={\\\`
    max-height: 200px;
    overflow-y: auto;
    padding: 20px;
    background: linear-gradient(...);
    border: 2px solid #2196f3;
  \\\`}
>
  {children}
</BlockGradientScroll>\`}
          </pre>
          <BlockGradientScroll variant="white" $css={\`
              max-height: 200px;
              overflow-y: auto;
              padding: 20px;
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 8px;
              border: 2px solid #2196f3;
            \`}>
            {generateItems(5)}
          </BlockGradientScroll>
        </div>
      </div>
    </DemoContainer>
}`,...(q=(U=c.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Проверка что все способы кастомизации работают:
style, className, $css`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '1280 Адаптив',
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  },
  render: () => <DemoContainer>
      <div style={{
      display: 'flex',
      gap: 20,
      flexDirection: 'column'
    }}>
        <div>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>
            Компонент \`BlockGradientScroll\`
          </p>
          <BlockGradientScroll variant="white" style={{
          maxHeight: 300,
          overflowY: 'auto',
          padding: 24,
          borderRadius: 8,
          border: \`1px solid \${outlineAccent}\`
        }}>
            {generateItems(8)}
          </BlockGradientScroll>
        </div>

        <div>
          <p style={{
          marginBottom: 8,
          fontWeight: 500
        }}>
            Миксин \`BlockGradientScrollMixin\`
          </p>
          <BoxWithMixin>{generateItems(8)}</BoxWithMixin>
        </div>
      </div>
    </DemoContainer>
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const pe=["Default","MixinUsage","NoScroll","MultipleContainers","DynamicContent","StylingMethods","AdaptiveLessThan1280"],ye=Object.freeze(Object.defineProperty({__proto__:null,AdaptiveLessThan1280:m,Default:s,DynamicContent:d,MixinUsage:t,MultipleContainers:l,NoScroll:a,StylingMethods:c,__namedExportsOrder:pe,default:ke},Symbol.toStringTag,{value:"Module"}));export{ye as B,s as D,t as M,a as N,c as S,l as a};
