import{j as e}from"./react-CAOzMBF_.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{W as u}from"./Widget-CvkMap1n.js";import{s as n}from"./constants-DatVHdkd.js";import{cF as d}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{l as E}from"./utils-ChnhBB6l.js";import{F as o,t,A as W,z as I,s as a,I as l,ab as z}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as A,e_ as D}from"./@salutejs/plasma-icons-Do5ggeDI.js";const S={title:"Композиции/Widget",parameters:{docs:{toc:!0}},tags:["!autodocs"],component:u},s={name:"Widget",...c({previewSource:"shown",preCode:`
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    `}),render:()=>e.jsx("div",{style:{backgroundColor:d},children:e.jsxs(u,{$css:{marginInline:"auto",height:600},children:[e.jsx(u.Header,{onClose:()=>{},fullScreened:!1,toggleFullScreened:()=>{},title:"Обработка документов по задаче №2",titleLeftSlot:e.jsx(z,{size:"l",name:"Задача №2"}),rightBlock:e.jsxs(e.Fragment,{children:[e.jsx(u.IconButtonDots,{size:"xs",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}}),e.jsx(u.Divider,{}),e.jsxs(o,{mainAxisGap:n.x2,children:[e.jsx(l,{view:"secondary",size:"xs",children:e.jsx(A,{size:"xs"})}),e.jsx(l,{view:"secondary",size:"xs",children:e.jsx(D,{size:"xs"})})]})]}),badge:{text:"Бейдж"},bottomBlock:e.jsxs("div",{style:{display:"flex",gap:n.x2},children:[e.jsx(a,{size:"s",transparent:!0,view:"accent",text:"В работе"}),e.jsx(a,{size:"s",transparent:!0,view:"negative",text:"2-й раз"})]})}),e.jsx(u.Content,{children:e.jsx("div",{style:{height:"2000px",backgroundColor:"goldenrod"},children:e.jsx("span",{style:{position:"absolute",right:0,width:"4px",backgroundColor:"teal"}})})}),e.jsx(u.Footer,{leftBlock:e.jsxs(o,{mainAxisGap:n.x4,children:[e.jsx(t,{text:"Кнопка 1",size:"s",view:"secondary"}),e.jsx(u.IconButtonDots,{size:"s"})]}),rightBlock:e.jsxs(o,{mainAxisGap:n.x4,children:[e.jsx(t,{text:"Кнопка",size:"s",view:"secondary"}),e.jsx(t,{text:"Главная кнопка",size:"s",view:"accent"})]})})]})})},i={name:"WidgetTextContent",...c({previewSource:"shown",preCode:`
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    `}),render:()=>e.jsx("div",{style:{backgroundColor:d},children:e.jsxs(u,{$css:{marginInline:"auto",height:600},children:[e.jsx(u.Header,{onClose:()=>{},fullScreened:!1,toggleFullScreened:()=>{},title:"Обработка документов по задаче №2",titleLeftSlot:e.jsx(z,{size:"l",name:"Задача №2"}),rightBlock:e.jsxs(e.Fragment,{children:[e.jsx(u.IconButtonDots,{size:"xs",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}}),e.jsx(u.Divider,{}),e.jsxs(o,{mainAxisGap:n.x2,children:[e.jsx(l,{view:"secondary",size:"xs",children:e.jsx(A,{size:"xs"})}),e.jsx(l,{view:"secondary",size:"xs",children:e.jsx(D,{size:"xs"})})]})]}),badge:{text:"Бейдж"},bottomBlock:e.jsxs("div",{style:{display:"flex",gap:n.x2},children:[e.jsx(a,{size:"s",transparent:!0,view:"accent",text:"В работе"}),e.jsx(a,{size:"s",transparent:!0,view:"negative",text:"2-й раз"})]})}),e.jsx(u.Content,{children:e.jsxs("div",{style:{height:"2000px"},children:[e.jsx("span",{children:E()}),e.jsx("span",{style:{position:"absolute",right:0,width:"4px",backgroundColor:"teal"}})]})}),e.jsx(u.Footer,{leftBlock:e.jsxs(o,{mainAxisGap:n.x4,children:[e.jsx(t,{text:"Кнопка 1",size:"s",view:"secondary"}),e.jsx(u.IconButtonDots,{size:"s"})]}),rightBlock:e.jsxs(o,{mainAxisGap:n.x4,children:[e.jsx(t,{text:"Кнопка",size:"s",view:"secondary"}),e.jsx(t,{text:"Главная кнопка",size:"s",view:"accent"})]})})]})})},r={name:"Footer leftBlock — проблема вертикального центрирования",...c({previewSource:"shown",preCode:`
import {
  backgroundPrimary,
  Button,
  Checkbox,
  Counter,
  Flow,
  s,
  Widget,
} from '@daisforge/ui';

    `}),render:()=>e.jsx("div",{style:{backgroundColor:d},children:e.jsxs(u,{$css:{marginInline:"auto",height:400},children:[e.jsx(u.Header,{onClose:()=>{},fullScreened:!1,toggleFullScreened:()=>{},title:"Footer leftBlock — баг вертикального центрирования"}),e.jsx(u.Content,{children:e.jsx("div",{style:{padding:n.x8},children:e.jsx("p",{children:"Посмотри на футер: в leftBlock — Checkbox и Counter, в rightBlock — кнопки. Контент leftBlock прижат к верху ячейки, а не центрирован по вертикали относительно rightBlock."})})}),e.jsx(u.Footer,{leftBlock:e.jsxs("div",{style:{display:"flex",gap:n.x4,alignItems:"center"},children:[e.jsx(W,{size:"s",label:"Выбрать всё"}),e.jsx(I,{count:5,view:"accent",size:"xs"})]}),rightBlock:e.jsxs(o,{mainAxisGap:n.x4,children:[e.jsx(t,{text:"Отмена",size:"s",view:"secondary"}),e.jsx(t,{text:"Применить",size:"s",view:"accent"})]})})]})})};var x,g,p,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Widget',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    \`
  }),
  render: () => <div style={{
    backgroundColor: backgroundPrimary
  }}>
      <Widget $css={{
      marginInline: 'auto',
      height: 600
    }}>
        <Widget.Header onClose={() => {}} fullScreened={false} toggleFullScreened={() => {}} title="Обработка документов по задаче №2" titleLeftSlot={<Avatar size="l" name="Задача №2" />} rightBlock={<>
              <Widget.IconButtonDots size="xs" dropdownProps={{
          items: [{
            label: 'label 1',
            value: '1'
          }, {
            label: 'label 2',
            value: '2'
          }]
        }} />
              <Widget.Divider />
              <Flow mainAxisGap={s.x2}>
                <IconButton view="secondary" size="xs">
                  <IconChevronLeft size="xs" />
                </IconButton>
                <IconButton view="secondary" size="xs">
                  <IconChevronRight size="xs" />
                </IconButton>
              </Flow>
            </>} badge={{
        text: 'Бейдж'
      }} bottomBlock={<div style={{
        display: 'flex',
        gap: s.x2
      }}>
              <Badge size="s" transparent view="accent" text="В работе" />
              <Badge size="s" transparent view="negative" text="2-й раз" />
            </div>} />

        <Widget.Content>
          <div style={{
          height: '2000px',
          backgroundColor: 'goldenrod'
        }}>
            <span style={{
            position: 'absolute',
            right: 0,
            width: '4px',
            backgroundColor: 'teal'
          }} />
          </div>
        </Widget.Content>

        <Widget.Footer leftBlock={<Flow mainAxisGap={s.x4}>
              <Button text="Кнопка 1" size="s" view="secondary" />
              <Widget.IconButtonDots size="s" />
            </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
              <Button text="Кнопка" size="s" view="secondary" />
              <Button text="Главная кнопка" size="s" view="accent" />
            </Flow>} />
      </Widget>
    </div>
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var m,B,C,F,w;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'WidgetTextContent',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    \`
  }),
  render: () => <div style={{
    backgroundColor: backgroundPrimary
  }}>
      <Widget $css={{
      marginInline: 'auto',
      height: 600
    }}>
        <Widget.Header onClose={() => {}} fullScreened={false} toggleFullScreened={() => {}} title="Обработка документов по задаче №2" titleLeftSlot={<Avatar size="l" name="Задача №2" />} rightBlock={<>
              <Widget.IconButtonDots size="xs" dropdownProps={{
          items: [{
            label: 'label 1',
            value: '1'
          }, {
            label: 'label 2',
            value: '2'
          }]
        }} />
              <Widget.Divider />
              <Flow mainAxisGap={s.x2}>
                <IconButton view="secondary" size="xs">
                  <IconChevronLeft size="xs" />
                </IconButton>
                <IconButton view="secondary" size="xs">
                  <IconChevronRight size="xs" />
                </IconButton>
              </Flow>
            </>} badge={{
        text: 'Бейдж'
      }} bottomBlock={<div style={{
        display: 'flex',
        gap: s.x2
      }}>
              <Badge size="s" transparent view="accent" text="В работе" />
              <Badge size="s" transparent view="negative" text="2-й раз" />
            </div>} />

        <Widget.Content>
          <div style={{
          height: '2000px'
        }}>
            <span>{longText()}</span>
            <span style={{
            position: 'absolute',
            right: 0,
            width: '4px',
            backgroundColor: 'teal'
          }} />
          </div>
        </Widget.Content>

        <Widget.Footer leftBlock={<Flow mainAxisGap={s.x4}>
              <Button text="Кнопка 1" size="s" view="secondary" />
              <Widget.IconButtonDots size="s" />
            </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
              <Button text="Кнопка" size="s" view="secondary" />
              <Button text="Главная кнопка" size="s" view="accent" />
            </Flow>} />
      </Widget>
    </div>
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(w=(F=i.parameters)==null?void 0:F.docs)==null?void 0:w.description}}};var y,f,j,k,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Footer leftBlock — проблема вертикального центрирования',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
import {
  backgroundPrimary,
  Button,
  Checkbox,
  Counter,
  Flow,
  s,
  Widget,
} from '@daisforge/ui';

    \`
  }),
  render: () => <div style={{
    backgroundColor: backgroundPrimary
  }}>
      <Widget $css={{
      marginInline: 'auto',
      height: 400
    }}>
        <Widget.Header onClose={() => {}} fullScreened={false} toggleFullScreened={() => {}} title="Footer leftBlock — баг вертикального центрирования" />

        <Widget.Content>
          <div style={{
          padding: s.x8
        }}>
            <p>
              Посмотри на футер: в leftBlock — Checkbox и Counter, в rightBlock
              — кнопки. Контент leftBlock прижат к верху ячейки, а не
              центрирован по вертикали относительно rightBlock.
            </p>
          </div>
        </Widget.Content>

        <Widget.Footer leftBlock={<div style={{
        display: 'flex',
        gap: s.x4,
        alignItems: 'center'
      }}>
              <Checkbox size="s" label="Выбрать всё" />
              <Counter count={5} view="accent" size="xs" />
            </div>} rightBlock={<Flow mainAxisGap={s.x4}>
              <Button text="Отмена" size="s" view="secondary" />
              <Button text="Применить" size="s" view="accent" />
            </Flow>} />
      </Widget>
    </div>
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:`#####ℹ️ Bug MYBRUN: leftBlock контент не центрируется по вертикали.

Checkbox + Counter в leftBlock прижаты к верху,
а кнопки в rightBlock выше — видно смещение.`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.description}}};const P=["WidgetStory","WidgetStoryText","WidgetFooterAlignBug"],M=Object.freeze(Object.defineProperty({__proto__:null,WidgetFooterAlignBug:r,WidgetStory:s,WidgetStoryText:i,__namedExportsOrder:P,default:S},Symbol.toStringTag,{value:"Module"}));export{M as W};
