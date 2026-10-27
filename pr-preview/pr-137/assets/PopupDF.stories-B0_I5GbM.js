import{j as e,r as l}from"./react-CAOzMBF_.js";import{s as B}from"./storySourceDoc-tVKyHcEN.js";import{P as r}from"./PopupDF-BKT-OsaX.js";import{s,c as M}from"./constants-DatVHdkd.js";import{cF as $,R as G,cT as m,cQ as x,b3 as g}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as u,I as ae,J as de,F as pe}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ci as v,bq as w}from"./vendor-DmWczWMC.js";import{jA as ue,jB as me,k$ as xe}from"./@salutejs/plasma-icons-Do5ggeDI.js";const ge={l:"s",m:"xs",s:"xxs"},he={l:"s",m:"xs",s:"xxs"},fe={l:s.x8,m:s.x6,s:s.x4},Se=["center","top","bottom","right","left","top-right","top-left","bottom-right","bottom-left"],be=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],ye=["top-left","top-right","bottom-left","bottom-right"],t={control:!1,table:{disable:!0}},Z={size:t,opened:t,defaultOpened:t,onToggle:t,placement:t,offset:t,offsetX:t,offsetY:t,frame:t,style:t,showCloseButton:t,showBackButton:t,withSubHeader:t,withRightBlock:t,withBody:t,withFooter:t,draggable:t,resizable:t,resizableDisabled:t,resizableDirections:t,resizableHiddenIcons:t,resizableDefaultSize:t,resizableMinWidth:t,resizableMinHeight:t,resizableMaxWidth:t,resizableMaxHeight:t,resizableIconSize:t},X=`import { useState } from 'react';
import {
  Button,
  Flow,
  LinkButton,
  PopupDF,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';

// Контент футера — обычные кнопки, которые вы кладёте в PopupDF.Footer
function FooterActions() {
  return (
    <Flow mainAxisGap={8}>
      <LinkButton href="/" size="xs">
        LinkButton
      </LinkButton>
      <Button size="xs" view="secondary">
        Отмена
      </Button>
      <Button size="xs" view="accent">
        Применить
      </Button>
    </Flow>
  );
}
`,ze=`${X}
function Example() {
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`,Pe=`${X}
function Example() {
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          offset={[0, 0]}
          draggable
          resizable={{ minWidth: 240, minHeight: 120, iconSize: 's' }}
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
            showCloseButton
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`,Fe={title:"Локальные компоненты/PopupDF",component:r,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{options:["l","m","s"],control:{type:"inline-radio"}},placement:{options:Se,control:{type:"select"}},offsetX:{control:"number"},offsetY:{control:"number"},showCloseButton:{control:"boolean"},showBackButton:{control:"boolean"},withSubHeader:{control:"boolean"},withRightBlock:{control:"boolean"},withBody:{control:"boolean"},withFooter:{control:"boolean"},draggable:{control:"boolean"},resizable:{control:"boolean"},resizableDisabled:{control:"boolean"},resizableDirections:{control:"check",options:be},resizableHiddenIcons:{control:"check",options:ye},resizableDefaultSize:{control:"object"},resizableMinWidth:{control:"number"},resizableMinHeight:{control:"number"},resizableMaxWidth:{control:"number"},resizableMaxHeight:{control:"number"},resizableIconSize:{options:["xs","s","m"],control:{type:"select"}}},args:{size:"m",placement:"center",offsetX:0,offsetY:0,showCloseButton:!0,showBackButton:!1,withSubHeader:!0,withRightBlock:!0,withBody:!0,withFooter:!0,draggable:!1,resizable:!1,resizableDisabled:!1,resizableDirections:void 0,resizableHiddenIcons:void 0,resizableIconSize:"s",resizableDefaultSize:{width:300,height:180},resizableMinWidth:240,resizableMinHeight:120}},Be={minHeight:"560px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:s.x16,backgroundColor:$},ve={position:"relative",width:"100%",maxWidth:"920px",minHeight:"480px",background:G,borderRadius:M.l,overflow:"hidden",padding:s.x8},we={minHeight:"40px",border:`1px solid ${g}`,background:x,display:"flex",alignItems:"center",color:m,padding:"10px 12px"},je={minHeight:"56px",border:`1px solid ${g}`,background:x,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"};function De({children:o}){return e.jsx(v,{children:e.jsx(w,{children:e.jsx("div",{style:Be,children:o})})})}function Y({children:o}){const n=l.useRef(null);return e.jsx("div",{ref:n,style:ve,children:o(n)})}function ke(){return e.jsx("div",{style:we,children:"subHeader"})}const Ie={l:"32px",m:"32px",s:"24px"};function N({size:o="m"}){return e.jsx("div",{style:{height:Ie[o],display:"flex",alignItems:"center",padding:"0 8px",border:`1px solid ${g}`,background:x,color:m,whiteSpace:"nowrap",boxSizing:"border-box"},children:"rightBlock"})}function q(){return e.jsx("div",{style:je,children:"PopupDF.Body"})}function j({size:o="m"}){const n=ge[o],i=he[o];return e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:fe[o]},children:[e.jsx(de,{href:"/",size:i,onClick:c=>c.preventDefault(),children:"LinkButton"}),e.jsxs(pe,{mainAxisGap:s.x2,children:[e.jsx(u,{size:n,view:"secondary",children:"Label"}),e.jsx(u,{size:n,view:"accent",children:"Label"})]})]})}function He({size:o="m",placement:n="center",offsetX:i=0,offsetY:c=0,showCloseButton:h=!0,showBackButton:f=!1,withSubHeader:b=!0,withRightBlock:y=!0,withBody:z=!0,withFooter:P=!0,draggable:S,resizable:Q,resizableDisabled:U=!1,resizableDirections:K,resizableHiddenIcons:V,resizableDefaultSize:ee,resizableMinWidth:te,resizableMinHeight:oe,resizableMaxWidth:ne,resizableMaxHeight:re,resizableIconSize:ie}){const[se,D]=l.useState(!0),le=Q?{disabled:U,directions:K,hiddenIcons:V,defaultSize:ee,minWidth:te,minHeight:oe,maxWidth:ne,maxHeight:re,iconSize:ie}:void 0;return e.jsx(Y,{children:ce=>e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>D(!0),children:"Открыть PopupDF"}),e.jsxs(r,{opened:se,onToggle:D,frame:ce,placement:n,offset:[i,c],size:o,draggable:S,resizable:le,style:{width:"396px"},children:[e.jsx(r.Header,{title:"Title",description:"Description",subHeader:b?e.jsx(ke,{}):void 0,rightBlock:y?e.jsx(N,{size:o}):void 0,showCloseButton:h,onBackButtonClick:f?()=>{}:void 0}),z&&e.jsx(r.Body,{children:e.jsx(q,{})}),P&&e.jsx(r.Footer,{children:e.jsx(j,{size:o})})]})]})})}function J(o){return e.jsx(De,{children:o})}function Le(){const[o,n]=l.useState(!1);return e.jsx(v,{children:e.jsx(w,{children:e.jsx(Y,{children:i=>e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Открыть PopupDF"}),e.jsxs(r,{opened:o,onToggle:n,frame:i,size:"m",placement:"center",style:{width:"396px"},children:[e.jsx(r.Header,{title:"Title",description:"Description",rightBlock:e.jsx(N,{})}),e.jsx(r.Body,{children:e.jsx(q,{})}),e.jsx(r.Footer,{children:e.jsx(j,{})})]})]})})})})}const a={name:"Simple",argTypes:Z,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...B({code:ze,previewSource:"shown"}),render:()=>J(e.jsx(Le,{}))},d={name:"Playground",...B({code:Pe,previewSource:"shown"}),render:o=>J(e.jsx(He,{...o}))},F=280,k=600,I=600,H=24,Te={minHeight:"820px",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:s.x16,backgroundColor:$},Ce={position:"relative",width:"100%",maxWidth:"960px",minHeight:"720px",background:G,borderRadius:M.l,overflow:"hidden",padding:s.x8},Re={height:"100%",boxSizing:"border-box",border:`1px solid ${g}`,background:x,display:"flex",alignItems:"center",justifyContent:"center",color:m,padding:"12px"},Oe={height:"40px",display:"flex",alignItems:"center",gap:"8px",padding:"0 12px",border:`1px solid ${g}`,background:x,color:m,boxSizing:"border-box"};function Ee(){const[o,n]=l.useState(!0),[i,c]=l.useState(!1),[h,f]=l.useState(!0),b=()=>{f(!1),window.setTimeout(()=>c(!0),30)},y=()=>{c(!1),window.setTimeout(()=>f(!0),F+40)},z=i?ue:me,P={width:i?`calc(100% - ${H*2}px)`:`${k}px`,height:i?`calc(100% - ${H*2}px)`:`${I}px`,maxWidth:"100%",maxHeight:"100%",transition:`width ${F}ms ease, height ${F}ms ease`,display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr"},S=l.useRef(null);return e.jsx(v,{children:e.jsx(w,{children:e.jsx("div",{style:Te,children:e.jsxs("div",{ref:S,style:Ce,children:[e.jsx(u,{onClick:()=>n(!0),children:"Открыть PopupDF"}),e.jsxs(r,{opened:o,onToggle:n,frame:S,size:"l",placement:"center",offset:[0,0],draggable:h,resizable:h?{defaultSize:{width:k,height:I},minWidth:320,minHeight:220,iconSize:"s"}:!1,style:P,children:[e.jsx(r.Header,{title:"Заголовок PopupDF размера L",description:"Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой.",subHeader:e.jsxs("div",{style:Oe,children:[e.jsx(xe,{size:"xs"}),e.jsx("span",{children:"Кастомный слот"})]}),rightBlock:e.jsx(ae,{size:"xs",view:"secondary",pin:"circle-circle",title:i?"Свернуть":"Развернуть",onClick:()=>i?y():b(),children:e.jsx(z,{size:"xs"})})}),e.jsx(r.Body,{children:e.jsx("div",{style:Re,children:"PopupDF.Body"})}),e.jsx(r.Footer,{children:e.jsx(j,{size:"l"})})]})]})})})})}const _e=`import { useRef, useState } from 'react';
import {
  Button,
  IconButton,
  LinkButton,
  PopupDF,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';
import { IconFullscreenOff, IconFullscreenOn } from '@daisforge/ui/icons';

// Разворот на весь экран собираем сами из пропсов PopupDF:
// сначала выключаем resizable и draggable, чтобы попап вернулся к обычному
// размеру, затем следующим тиком плавно растим его до краёв frame.
function Example() {
  const frameRef = useRef(null);
  const [opened, setOpened] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [interactive, setInteractive] = useState(true);

  const expand = () => {
    setInteractive(false);
    window.setTimeout(() => setFullscreen(true), 30);
  };

  const collapse = () => {
    setFullscreen(false);
    window.setTimeout(() => setInteractive(true), 320);
  };

  const IconFullS = fullscreen ? IconFullscreenOff : IconFullscreenOn;

  const sizeStyle = {
    width: fullscreen ? 'calc(100% - 48px)' : '600px',
    height: fullscreen ? 'calc(100% - 48px)' : '600px',
    maxWidth: '100%',
    maxHeight: '100%',
    transition: 'width 280ms ease, height 280ms ease',
    // grid тянет карточку на всю заданную высоту, иначе внешний узел Popup
    // сжимается по контенту и height не применяется (600 даёт только ширину).
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

  return (
    <SSRProvider>
      <PopupProvider>
        {/* frame — контейнер, внутри которого живёт и разворачивается попап */}
        <div ref={frameRef} style={{ position: 'relative', minHeight: 720 }}>
          <PopupDF
            opened={opened}
            onToggle={setOpened}
            frame={frameRef}
            size="l"
            placement="center"
            draggable={interactive}
            resizable={
              interactive
                ? {
                    // стартовый размер контейнера при включённом resizable
                    defaultSize: { width: 600, height: 600 },
                    minWidth: 320,
                    minHeight: 220,
                    iconSize: 's',
                  }
                : false
            }
            style={sizeStyle}
          >
            <PopupDF.Header
              title="Заголовок PopupDF размера L"
              description="Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой."
              subHeader={
                <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                  Кастомный слот
                </div>
              }
              rightBlock={
                <IconButton
                  size="xs"
                  view="secondary"
                  pin="circle-circle"
                  title={fullscreen ? 'Свернуть' : 'Развернуть'}
                  onClick={() => (fullscreen ? collapse() : expand())}
                >
                  <IconFullS size="xs" />
                </IconButton>
              }
            />
            {/* высота 100%, чтобы контент тела рос при ресайзе попапа */}
            <PopupDF.Body>
              <div style={{ height: '100%' }}>Контент попапа</div>
            </PopupDF.Body>
            <PopupDF.Footer>
              {/* LinkButton отделён от группы кнопок отступом 16px (L) */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <LinkButton href="/" size="s">
                  LinkButton
                </LinkButton>
                <div style={{ display: 'flex', gap: 4 }}>
                  <Button size="s" view="secondary">
                    Отмена
                  </Button>
                  <Button size="s" view="accent">
                    Применить
                  </Button>
                </div>
              </div>
            </PopupDF.Footer>
          </PopupDF>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}`,p={name:"Size L",argTypes:Z,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...B({code:_e,previewSource:"shown"}),render:()=>e.jsx(Ee,{})};var L,T,C;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Simple',
  argTypes: simpleArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({
    code: simpleCode,
    previewSource: 'shown'
  }),
  render: () => renderInStage(<PopupDFSimpleExample />)
}`,...(C=(T=a.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var R,O,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: args => renderInStage(<PopupDFPlaygroundExample {...args} />)
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,A,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Size L',
  argTypes: simpleArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({
    code: sizeLCode,
    previewSource: 'shown'
  }),
  render: () => <PopupDFSizeLExample />
}`,...(W=(A=p.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const Ae=["Simple","Playground","SizeL"],qe=Object.freeze(Object.defineProperty({__proto__:null,Playground:d,Simple:a,SizeL:p,__namedExportsOrder:Ae,default:Fe},Symbol.toStringTag,{value:"Module"}));export{qe as P};
