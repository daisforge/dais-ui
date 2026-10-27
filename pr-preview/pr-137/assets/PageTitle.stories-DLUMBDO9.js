import{j as u}from"./react-CAOzMBF_.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{P as s}from"./PageTitle-C84J6eqs.js";import{F as l,t}from"./@salutejs/sdds-finai-CKhMjg07.js";const F={title:"Композиции/PageTitle",tags:["!autodocs"],component:s},c=`
import { PageTitle } from '@daisforge/ui';
import { Button, Flow, IconButton } from '@daisforge/ui';
import { IconPlus } from '@daisforge/ui/icons';
import type { PageTitleSlotSizesProps } from '@daisforge/ui';

`,o={name:"PageTitle",...a({previewSource:"shown",preCode:c}),render:()=>u.jsx(s,{breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Раздел",href:"#"},{title:"Страница"}]},showBackButton:!0,onBackClick:()=>alert("onBackClick"),title:"Заголовок страницы",subtitle:"Описание страницы или подзаголовок",rightSlot:({buttonSize:e})=>u.jsxs(l,{mainAxisGap:8,children:[u.jsx(t,{size:e,view:"secondary",children:"Действие 1"}),u.jsx(t,{size:e,view:"accent",children:"Действие 2"})]})})},n={name:"PageTitle с кастомным слотом",...a({previewSource:"shown",preCode:c}),render:()=>u.jsx(s,{breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Раздел"}]},showBackButton:!0,onBackClick:()=>alert("onBackClick"),title:"Заголовок страницы",subtitle:"Описание страницы или подзаголовок",titleSlot:u.jsx(t,{size:"xs",view:"secondary",children:"Действие"}),rightSlot:({buttonSize:e})=>u.jsxs(l,{mainAxisGap:8,children:[u.jsx(t,{size:e,view:"secondary",children:"Отмена"}),u.jsx(t,{size:e,view:"accent",children:"Сохранить"})]})})},i={name:"PageTitle без breadcrumbs",...a({previewSource:"shown",preCode:c}),render:()=>u.jsx(s,{title:"Заголовок страницы",subtitle:"Описание страницы или подзаголовок",rightSlot:({buttonSize:e})=>u.jsxs(l,{mainAxisGap:8,children:[u.jsx(t,{size:e,view:"secondary",children:"Действие 1"}),u.jsx(t,{size:e,view:"accent",children:"Действие 2"})]})})},r={name:"PageTitle с длинным заголовком",...a({previewSource:"shown",preCode:c}),render:()=>u.jsx(s,{breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Раздел",href:"#"},{title:"Страница"}]},title:"Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip",subtitle:"Описание страницы или подзаголовок",titleTypographyProps:{tooltipText:"Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip",lines:1,bold:!0},rightSlot:({buttonSize:e})=>u.jsxs(l,{mainAxisGap:8,children:[u.jsx(t,{size:e,view:"secondary",children:"Действие 1"}),u.jsx(t,{size:e,view:"accent",children:"Действие 2"})]})})};var p,B,d,m,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'PageTitle',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode
  }),
  render: () => <PageTitle breadcrumbs={{
    items: [{
      title: 'Главная',
      href: '#'
    }, {
      title: 'Раздел',
      href: '#'
    }, {
      title: 'Страница'
    }]
  }} showBackButton onBackClick={() => alert('onBackClick')} title="Заголовок страницы" subtitle="Описание страницы или подзаголовок" rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>} />
}`,...(d=(B=o.parameters)==null?void 0:B.docs)==null?void 0:d.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(E=(m=o.parameters)==null?void 0:m.docs)==null?void 0:E.description}}};var h,S,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'PageTitle с кастомным слотом',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode
  }),
  render: () => <PageTitle breadcrumbs={{
    items: [{
      title: 'Главная',
      href: '#'
    }, {
      title: 'Раздел'
    }]
  }} showBackButton onBackClick={() => alert('onBackClick')} title="Заголовок страницы" subtitle="Описание страницы или подзаголовок" titleSlot={<Button size="xs" view="secondary">
          Действие
        </Button>} rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Отмена
          </Button>
          <Button size={buttonSize} view="accent">
            Сохранить
          </Button>
        </Flow>} />
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var g,D,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'PageTitle без breadcrumbs',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode
  }),
  render: () => <PageTitle title="Заголовок страницы" subtitle="Описание страницы или подзаголовок" rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>} />
}`,...(b=(D=i.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var T,C,x;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'PageTitle с длинным заголовком',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode
  }),
  render: () => <PageTitle breadcrumbs={{
    items: [{
      title: 'Главная',
      href: '#'
    }, {
      title: 'Раздел',
      href: '#'
    }, {
      title: 'Страница'
    }]
  }} title="Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip" subtitle="Описание страницы или подзаголовок" titleTypographyProps={{
    tooltipText: 'Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip',
    lines: 1,
    bold: true
  }} rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>} />
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const z=["Default","WithTitleSlot","WithoutBreadcrumbs","LongTitle"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,LongTitle:r,WithTitleSlot:n,WithoutBreadcrumbs:i,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{A as P};
