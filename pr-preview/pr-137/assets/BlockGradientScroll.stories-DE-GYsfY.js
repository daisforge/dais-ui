import{j as n,r as d0}from"./react-CAOzMBF_.js";import{B as r}from"./BlockGradientScroll-BktEv1mb.js";import{c as n0}from"./mixins-BSrWhZL1.js";import{b3 as o,A as y,z as x,u as s0,w as l0,x as c0,cS as b,cA as u0,q as e0}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as h}from"./styled-components-DCFsnh-i.js";import{t as f}from"./@salutejs/sdds-finai-CKhMjg07.js";const m=h.div`
  padding: 20px;
  background: ${y};
  border-radius: 8px;
`,r0=h.div`
  padding: 16px;
  margin-bottom: 12px;
  background: ${e0};
  border-radius: 6px;
  color: ${x};

  &:last-child {
    margin-bottom: 0;
  }
`,u=v=>Array.from({length:v},(g,t)=>n.jsx(r0,{children:n.jsxs("h3",{children:["Элемент ",t+1]})},t)),o0=h.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${y};
  border-radius: 8px;
  border: 1px solid ${e0};

  ${n0({padding:24,variant:"white"})}
`,p0=h.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${u0};
  border-radius: 8px;

  ${n0({padding:24,variant:"gray"})}
`,m0={title:"Локальные компоненты/BlockGradientScroll",component:r,tags:["!autodocs"],argTypes:{variant:{description:"Вариант цвета градиента (white/gray)",control:{type:"select"},options:["white","gray"]},children:{description:"Контент внутри scroll-контейнера",control:!1},className:{description:"CSS класс",control:{type:"text"}},style:{description:"Inline стили (padding автоматически подхватывается для градиента)",control:!1},$css:{description:"Кастомные стили styled-components",control:!1}}},a={name:"1. Базовый компонент",args:{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,background:y,borderRadius:8,border:`1px solid ${o}`},children:u(8)}},i={name:"2. Миксин (styled-components)",parameters:{controls:{disable:!0}},render:()=>n.jsx(m,{children:n.jsxs("div",{style:{display:"flex",gap:20},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"variant: white"}),n.jsx(o0,{children:u(6)})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"variant: gray"}),n.jsx(p0,{children:u(6)})]})]})})},d={name:"3. Мало контента (без скролла)",args:{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${o}`},children:u(2)}},s={name:"4. Несколько контейнеров",render:()=>n.jsx(m,{children:n.jsxs("div",{style:{display:"flex",gap:20},children:[n.jsx(r,{variant:"white",style:{flex:1,maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${o}`},children:u(6)}),n.jsx(r,{variant:"gray",style:{flex:1,maxHeight:300,overflowY:"auto",padding:24,background:u0,borderRadius:8,border:`1px solid ${o}`},children:u(6)}),n.jsx(r,{variant:"white",style:{flex:1,maxHeight:300,overflowY:"auto",padding:"0 16px 32px",borderRadius:8,border:`1px solid ${o}`},children:u(6)})]})})},l={name:"5. Динамический контент",render:function(){const[g,t]=d0.useState([1,2,3]),t0=()=>{t(e=>[...e,Math.max(...e,0)+1])},a0=()=>{t(e=>e.length>0?e.slice(0,-1):e)},i0=()=>{t([1,2,3])};return n.jsxs(m,{children:[n.jsxs("div",{style:{marginBottom:16,display:"flex",gap:8},children:[n.jsx(f,{onClick:t0,style:{background:s0,color:x,border:"none",borderRadius:4,cursor:"pointer"},children:"+ Добавить"}),n.jsx(f,{onClick:a0,style:{background:l0,color:x,border:"none",borderRadius:4,cursor:"pointer"},children:"− Удалить"}),n.jsx(f,{onClick:i0,style:{background:c0,color:x,border:"none",borderRadius:4,cursor:"pointer"},children:"Сбросить"}),n.jsxs("span",{style:{alignSelf:"center",marginLeft:8,color:b},children:["Элементов: ",g.length]})]}),n.jsxs(r,{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${o}`},children:[g.map(e=>n.jsx(r0,{children:n.jsxs("h3",{children:["Элемент ",e]})},e)),g.length===0&&n.jsx("div",{style:{color:b,textAlign:"center",padding:40},children:"Пусто. Добавь элементы."})]})]})}},c={name:"6. Способы стилизации (style, className, $css)",render:()=>n.jsxs(m,{children:[n.jsx("style",{children:`
          .custom-gradient-box {
            max-height: 200px;
            overflow-y: auto;
            padding: 20px;
            background: #fff8e1;
            border-radius: 8px;
            border: 2px dashed #ffa000;
          }
        `}),n.jsxs("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"1. Через style prop"}),n.jsx("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`<BlockGradientScroll
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
</BlockGradientScroll>`}),n.jsx(r,{variant:"white",style:{maxHeight:200,overflowY:"auto",padding:20,background:"#e8f5e9",borderRadius:8,border:"2px solid #4caf50"},children:u(5)})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"2. Через className"}),n.jsx("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`.custom-gradient-box {
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
</BlockGradientScroll>`}),n.jsx(r,{variant:"white",className:"custom-gradient-box",children:u(5)})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"3. Через $css (styled-components)"}),n.jsx("pre",{style:{color:"#000",background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginBottom:8,overflow:"auto"},children:`<BlockGradientScroll
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
</BlockGradientScroll>`}),n.jsx(r,{variant:"white",$css:`
              max-height: 200px;
              overflow-y: auto;
              padding: 20px;
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 8px;
              border: 2px solid #2196f3;
            `,children:u(5)})]})]})]})},p={name:"1280 Адаптив",parameters:{viewport:{defaultViewport:"mobile"}},render:()=>n.jsx(m,{children:n.jsxs("div",{style:{display:"flex",gap:20,flexDirection:"column"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"Компонент `BlockGradientScroll`"}),n.jsx(r,{variant:"white",style:{maxHeight:300,overflowY:"auto",padding:24,borderRadius:8,border:`1px solid ${o}`},children:u(8)})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:8,fontWeight:500},children:"Миксин `BlockGradientScrollMixin`"}),n.jsx(o0,{children:u(8)})]})]})})};var B,D,E,k,w;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:`Базовый пример использования компонента.
Padding автоматически подхватывается из style.`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var S,C,j,A,G;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:`Использование миксина в styled-components.
Миксин добавляется к существующему styled-компоненту.

⚠️ Controls не работают — стили зафиксированы при создании компонента.`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.description}}};var F,$,R,I,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=($=d.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:"Если контент помещается без скролла — градиент не появляется.",...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var M,H,Y,N,P;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(H=s.parameters)==null?void 0:H.docs)==null?void 0:Y.source},description:{story:`Несколько контейнеров на одной странице работают независимо.
Каждый компонент автоматически получает свои padding'и.`,...(P=(N=s.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var z,_,L,T,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:`Интерактивный пример: добавление и удаление элементов.
Градиент появляется/исчезает автоматически в зависимости от количества контента.`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var U,V,q,J,K;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:`Проверка что все способы кастомизации работают:
style, className, $css`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const g0=["Default","MixinUsage","NoScroll","MultipleContainers","DynamicContent","StylingMethods","AdaptiveLessThan1280"],B0=Object.freeze(Object.defineProperty({__proto__:null,AdaptiveLessThan1280:p,Default:a,DynamicContent:l,MixinUsage:i,MultipleContainers:s,NoScroll:d,StylingMethods:c,__namedExportsOrder:g0,default:m0},Symbol.toStringTag,{value:"Module"}));export{B0 as B,a as D,i as M,d as N,c as S,s as a};
