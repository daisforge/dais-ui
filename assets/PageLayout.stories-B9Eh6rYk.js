import{j as e,r as i}from"./react-CAOzMBF_.js";import{g as P}from"./getFuncAsString-SqWQ2qo2.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{B as we}from"./Box-DBguVV_s.js";import{D as Le}from"./IconButton-LdqUAZ_9.js";import{L as W}from"./LeftPanel-DvnGljXd.js";import{P as Be}from"./PageTitle-Ctvu0ff7.js";import{S as D}from"./SplitView-BSpBkIUM.js";import{a as Fe}from"./TextField-DNzqWFXU.js";import{W as u}from"./Widget-D_-OtvRJ.js";import{L as l}from"./Layout-DC1GcK6O.js";import{P as s}from"./PageLayout-BH-N8CRY.js";import{A as Ee}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as m}from"./styled-components-BAnxJVQm.js";import{F as v,t as o,I as S,a9 as Pe}from"./@salutejs/sdds-finai-CrMFu5No.js";import{k0 as b,sM as De,kC as ve}from"./@salutejs/plasma-icons-DBF9uERs.js";import{cn as be}from"./vendor-CvBXOjQ8.js";const Se=72,ye=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  --global-header-height: ${Se}px;
  background: ${Ee};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`,Ae=m.div`
  display: flex;
  align-items: center;
  height: ${Se}px;
  font-size: 14px;
  gap: 12px;
`,h=({children:t})=>e.jsx(ye,{children:e.jsx(s,{paddingTop:0,paddingBottom:0,minHeight:0,children:e.jsx(Ae,{children:t})})}),n=m(we)`
  background: ${({$bg:t})=>t??"#f0f0f0"};
  border-radius: 8px;
  padding: 16px;
  min-height: 120px;
`,T=m.div`
  display: flex;
  height: 100%;
`,H=m.div`
  flex: 1;
  min-width: 0;
`,A=m.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=e.jsx(Be,{breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Раздел"}]},title:"Заголовок страницы",subtitle:"Описание страницы или подзаголовок",titleSlot:e.jsx(o,{size:"xs",view:"secondary",children:"Действие"}),rightSlot:e.jsxs(v,{mainAxisGap:8,children:[e.jsx(o,{size:"s",view:"secondary",children:"Отмена"}),e.jsx(o,{size:"s",view:"accent",children:"Сохранить"})]})}),Ce=[{label:"Дашборд",value:"dashboard"},{label:"Аналитика",value:"analytics"},{label:"Отчёты",value:"reports"},{label:"Справочники",value:"references"},{label:"Журнал операций",value:"journal"},{label:"Пользователи",value:"users"},{label:"Роли и доступы",value:"roles"},{label:"Настройки",value:"settings"}],z=()=>e.jsxs(u,{$css:{overflow:"hidden"},children:[e.jsx(u.Header,{title:"Навигация",$css:{overflow:"hidden"},bottomBlock:e.jsx(Fe,{})}),e.jsx(u.Content,{children:e.jsx(Pe,{children:Ce.map(t=>e.jsx(be,{children:t.label},t.value))})}),e.jsx(u.Footer,{children:e.jsx(o,{view:"secondary",stretching:"filled",size:"s",children:"Все разделы"})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{size:"s",view:"secondary",children:e.jsx(De,{})}),e.jsx(S,{size:"s",view:"secondary",children:e.jsx(b,{})}),e.jsx(Le,{items:Ce,portal:"document",children:e.jsx(S,{size:"s",view:"secondary",children:e.jsx(ve,{})})})]}),$=({count:t=15})=>e.jsx(e.Fragment,{children:Array.from({length:t},(a,r)=>e.jsxs(n,{style:{marginBottom:12},children:["Блок контента #",r+1]},r))}),p=`
    import { useState } from 'react';
    import {
        IconGroupOutline,
        IconHierarchy,
        IconSearch,
    } from '@daisforge/ui/icons';
    import {
        Button,
        Dropdown,
        IconButton,
        Layout,
        LeftPanel,
        List,
        ListItem,
        PageLayout,
        PageTitle,
        SplitView,
        TextFieldSearch,
        Widget,
    } from '@daisforge/ui';
    import styled from 'styled-components';

    const FlexContainer = styled.div\`
      display: flex;
      height: 100%;
    \`;

    const MainArea = styled.div\`
      flex: 1;
      min-width: 0;
    \`;
`,Ve={title:"Композиции/PageLayout",component:s,tags:["!autodocs"],parameters:{layout:"fullscreen",docs:{toc:!0}}},g={name:"Базовый",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(s,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Основной контент"}),e.jsx(n,{children:"Ещё один блок контента"})]})})})]})},j={name:"Двухколоночная раскладка",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(s,{children:e.jsx(l,{variant:"V2_1",marginBottom:"0",headerSlot:c,mainSlot:[e.jsx(n,{$bg:"#dfffdf",children:"Левая колонка (основная)"},"left"),e.jsx(n,{$bg:"#dfdfff",children:"Правая колонка"},"right")]})})]})},f={name:"Страничный скролл",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(s,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsx($,{count:20})})})]})};function ke(){const[t,a]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:t?"secondary":"accent",onClick:()=>a(r=>!r),children:t?"Закрыть сайдбар":"Открыть сайдбар"})]}),e.jsx(s,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Основной контент. SplitView с insidePageLayout компенсирует padding-inline PageLayout через отрицательный margin-right."}),e.jsx(n,{children:"Ещё один блок"})]})}),sidebar:{content:e.jsxs(A,{children:[e.jsxs(u,{children:[e.jsx(u.Header,{title:"Детали"}),e.jsx(u.Content,{children:"Информация о записи"})]}),e.jsxs(u,{children:[e.jsx(u.Header,{title:"Действия"}),e.jsx(u.Content,{children:e.jsxs(v,{mainAxisGap:8,orientation:"vertical",children:[e.jsx(o,{size:"s",view:"accent",stretching:"filled",children:"Утвердить"}),e.jsx(o,{size:"s",view:"secondary",stretching:"filled",children:"Отклонить"})]})})]})]}),isOpened:t,defaultWidthPercent:30}})})]})}const We=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","WithSplitViewTemplate")}
`,C={name:"SplitView (toggle sidebar)",...d({previewSource:"shown",code:We}),render:ke};function Te(){const[t,a]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsxs(o,{size:"xs",view:"secondary",onClick:()=>a(r=>!r),children:[t?"Скрыть":"Показать"," сайдбар"]})]}),e.jsx(s,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",headerSlot:c,mainSlot:e.jsx($,{count:25})}),sidebar:{content:e.jsx(A,{children:e.jsxs(u,{children:[e.jsx(u.Header,{title:"Фильтры"}),e.jsx(u.Content,{children:"Sticky sidebar — не скроллится вместе с основным контентом"})]})}),isOpened:t,defaultWidthPercent:25}})})]})}const He=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","SplitViewLongContentTemplate")}
`,w={name:"SplitView + длинный контент",...d({previewSource:"shown",code:He}),render:Te};function ze(){const[t,a]=i.useState(!1),[r,y]=i.useState(280);return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(s,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(T,{children:[e.jsx(W,{collapseState:[t,a],widthState:[r,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(S,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsxs(H,{children:[e.jsx(n,{children:"Контент страницы «Дашборд»"}),e.jsx(n,{style:{marginTop:12},children:"LeftPanel сворачивается / разворачивается. Layout адаптируется."}),e.jsx(n,{style:{marginTop:12},children:"Дополнительный блок контента"}),e.jsx(n,{style:{marginTop:12},children:"Ещё один блок для демонстрации высоты"})]})]})})})]})}const _e=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","WithLeftPanelTemplate")}
`,L={name:"LeftPanel + Layout",...d({previewSource:"shown",code:_e}),render:ze};function $e(){const[t,a]=i.useState(!1),[r,y]=i.useState(260),[x,V]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:x?"secondary":"accent",onClick:()=>V(k=>!k),children:x?"Скрыть детали":"Показать детали"})]}),e.jsx(s,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",style:{height:"100%"},headerSlot:c,mainSlot:e.jsxs(T,{children:[e.jsx(W,{collapseState:[t,a],widthState:[r,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(S,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsxs(H,{children:[e.jsx(n,{children:"Таблица или список записей. Выбор записи открывает панель деталей справа через SplitView."}),e.jsx(n,{style:{marginTop:12},children:"Ещё один блок контента"})]})]})}),sidebar:{content:e.jsxs(A,{children:[e.jsxs(u,{children:[e.jsx(u.Header,{title:"Детали записи"}),e.jsxs(u.Content,{children:[e.jsx("p",{children:"ID: 12345"}),e.jsx("p",{children:"Статус: Активна"}),e.jsx("p",{children:"Дата: 15.03.2026"})]})]}),e.jsxs(u,{children:[e.jsx(u.Header,{title:"Действия"}),e.jsx(u.Content,{children:e.jsxs(v,{mainAxisGap:8,orientation:"vertical",children:[e.jsx(o,{size:"s",view:"accent",stretching:"filled",children:"Редактировать"}),e.jsx(o,{size:"s",view:"secondary",stretching:"filled",children:"Архивировать"})]})})]})]}),isOpened:x,defaultWidthPercent:30}})})]})}const Oe=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","LeftPanelWithSplitViewTemplate")}
`,B={name:"LeftPanel + SplitView",...d({previewSource:"shown",code:Oe}),render:$e};function Ie(){const[t,a]=i.useState(!1),[r,y]=i.useState(260),[x,V]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:"secondary",onClick:()=>V(k=>!k),children:x?"Скрыть":"Показать"})]}),e.jsx(s,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",style:{height:"100%"},headerSlot:c,mainSlot:e.jsxs(T,{children:[e.jsx(W,{collapseState:[t,a],widthState:[r,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(S,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsx(H,{children:e.jsx($,{count:20})})]})}),sidebar:{content:e.jsx(A,{children:e.jsxs(u,{children:[e.jsx(u.Header,{title:"Sticky sidebar"}),e.jsx(u.Content,{children:"Этот sidebar остаётся на месте при прокрутке основного контента."})]})}),isOpened:x,defaultWidthPercent:25}})})]})}const Me=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","FullComboLongTemplate")}
`,F={name:"LeftPanel + SplitView + скролл",...d({previewSource:"shown",code:Me}),render:Ie},Ge=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`,E={name:"Для шапки микрофронта",...d({preCode:p,previewSource:"shown"}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(s,{paddingTop:0,paddingBottom:0,minHeight:0,children:e.jsxs(Ge,{children:[e.jsx("span",{style:{fontWeight:600},children:"Логотип"}),e.jsxs(v,{mainAxisGap:8,children:[e.jsx(o,{size:"s",view:"secondary",children:"Раздел 1"}),e.jsx(o,{size:"s",view:"secondary",children:"Раздел 2"}),e.jsx(o,{size:"s",view:"accent",children:"Профиль"})]})]})})}),e.jsx(s,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["Основной контент страницы. Шапка сверху обёрнута в PageLayout с paddingTop=","{0}",", paddingBottom=","{0}"," и minHeight=","{0}","."]}),e.jsx(n,{children:"Ещё один блок контента"}),e.jsx(n,{children:"Третий блок"})]})})})]})};var O,I,M,G,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Базовый',
  ...storySourceDoc({
    preCode
  }),
  render: () => <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout variant="V1_1" marginBottom="0" headerSlot={DefaultPageHeader} mainSlot={<>
              <ContentBlock>Основной контент</ContentBlock>
              <ContentBlock>Ещё один блок контента</ContentBlock>
            </>} />
      </PageLayout>
    </>
}`,...(M=(I=g.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"##### Базовый пример\n\n`PageLayout` + `Layout V1_1` + имитация fixed-шапки микрофронта.\nШапка задаёт CSS-переменную `--global-header-height`, `PageLayout`\nавтоматически подхватывает её для `padding-top`.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:q.description}}};var R,J,K,N,Q;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Двухколоночная раскладка',
  ...storySourceDoc({
    preCode
  }),
  render: () => <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout variant="V2_1" marginBottom="0" headerSlot={DefaultPageHeader} mainSlot={[<ContentBlock key="left" $bg="#dfffdf">
              Левая колонка (основная)
            </ContentBlock>, <ContentBlock key="right" $bg="#dfdfff">
              Правая колонка
            </ContentBlock>]} />
      </PageLayout>
    </>
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"##### Двухколоночная раскладка\n\n`PageLayout` + `Layout V2_1` — основная колонка слева, дополнительная справа.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(Q=(N=j.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};var U,X,Y,Z,ee;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Страничный скролл',
  ...storySourceDoc({
    preCode
  }),
  render: () => <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout variant="V1_1" marginBottom="0" headerSlot={DefaultPageHeader} mainSlot={<LongContentBlocks count={20} />} />
      </PageLayout>
    </>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"##### Страничный скролл\n\nДлинный контент внутри `PageLayout`. `min-height: 100dvh` обеспечивает\nкорректную работу скролла страницы.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ue,te,ne;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'SplitView (toggle sidebar)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withSplitViewCode
  }),
  render: WithSplitViewTemplate
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'SplitView + длинный контент',
  ...storySourceDoc({
    previewSource: 'shown',
    code: splitViewLongContentCode
  }),
  render: SplitViewLongContentTemplate
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ie,de;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'LeftPanel + Layout',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withLeftPanelCode
  }),
  render: WithLeftPanelTemplate
}`,...(de=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ce,pe;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'LeftPanel + SplitView',
  ...storySourceDoc({
    previewSource: 'shown',
    code: leftPanelWithSplitViewCode
  }),
  render: LeftPanelWithSplitViewTemplate
}`,...(pe=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var he,me,xe;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'LeftPanel + SplitView + скролл',
  ...storySourceDoc({
    previewSource: 'shown',
    code: fullComboLongCode
  }),
  render: FullComboLongTemplate
}`,...(xe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ge,je,fe;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Для шапки микрофронта',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => <>
      <FixedHeaderWrapper>
        <PageLayout paddingTop={0} paddingBottom={0} minHeight={0}>
          <MicroFrontHeaderContent>
            <span style={{
            fontWeight: 600
          }}>Логотип</span>
            <Flow mainAxisGap={8}>
              <Button size="s" view="secondary">
                Раздел 1
              </Button>
              <Button size="s" view="secondary">
                Раздел 2
              </Button>
              <Button size="s" view="accent">
                Профиль
              </Button>
            </Flow>
          </MicroFrontHeaderContent>
        </PageLayout>
      </FixedHeaderWrapper>
      <PageLayout>
        <Layout variant="V1_1" marginBottom="0" headerSlot={DefaultPageHeader} mainSlot={<>
              <ContentBlock>
                Основной контент страницы. Шапка сверху обёрнута в PageLayout с
                paddingTop={'{0}'}, paddingBottom={'{0}'} и minHeight={'{0}'}.
              </ContentBlock>
              <ContentBlock>Ещё один блок контента</ContentBlock>
              <ContentBlock>Третий блок</ContentBlock>
            </>} />
      </PageLayout>
    </>
}`,...(fe=(je=E.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};const qe=["Basic","WithTwoColumns","WithLongContent","WithSplitView","SplitViewWithLongContent","WithLeftPanel","LeftPanelWithSplitView","FullComboLongContent","ForMicroFrontHeader"],iu=Object.freeze(Object.defineProperty({__proto__:null,Basic:g,ForMicroFrontHeader:E,FullComboLongContent:F,LeftPanelWithSplitView:B,SplitViewWithLongContent:w,WithLeftPanel:L,WithLongContent:f,WithSplitView:C,WithTwoColumns:j,__namedExportsOrder:qe,default:Ve},Symbol.toStringTag,{value:"Module"}));export{iu as P};
