import{j as e,r as i}from"./react-CAOzMBF_.js";import{g as P}from"./getFuncAsString-DnrLf2YT.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{B as we}from"./Box-DvvYTz20.js";import{L as W}from"./LeftPanel-bnl-ylDT.js";import{P as Le}from"./PageTitle-C84J6eqs.js";import{S as D}from"./SplitView-9-RV5VCp.js";import{a as Be}from"./TextField-DpKf-85P.js";import{W as u}from"./Widget-CvkMap1n.js";import{L as l}from"./Layout-Bvy9di06.js";import{P as r}from"./PageLayout-K0JVJg5v.js";import{A as Fe}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as m}from"./styled-components-DCFsnh-i.js";import{F as v,t as o,I as f,D as Ee,a9 as Pe}from"./@salutejs/sdds-finai-CKhMjg07.js";import{k0 as b,sL as De,kC as ve}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{cm as be}from"./vendor-DmWczWMC.js";const fe=72,ye=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  --global-header-height: ${fe}px;
  background: ${Fe};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`,Ae=m.div`
  display: flex;
  align-items: center;
  height: ${fe}px;
  font-size: 14px;
  gap: 12px;
`,h=({children:t})=>e.jsx(ye,{children:e.jsx(r,{paddingTop:0,paddingBottom:0,minHeight:0,children:e.jsx(Ae,{children:t})})}),n=m(we)`
  background: ${({$bg:t})=>t??"#f0f0f0"};
  border-radius: 8px;
  padding: 16px;
  min-height: 120px;
`,H=m.div`
  display: flex;
  height: 100%;
`,T=m.div`
  flex: 1;
  min-width: 0;
`,A=m.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=e.jsx(Le,{breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Раздел"}]},title:"Заголовок страницы",subtitle:"Описание страницы или подзаголовок",titleSlot:e.jsx(o,{size:"xs",view:"secondary",children:"Действие"}),rightSlot:e.jsxs(v,{mainAxisGap:8,children:[e.jsx(o,{size:"s",view:"secondary",children:"Отмена"}),e.jsx(o,{size:"s",view:"accent",children:"Сохранить"})]})}),Ce=[{label:"Дашборд",value:"dashboard"},{label:"Аналитика",value:"analytics"},{label:"Отчёты",value:"reports"},{label:"Справочники",value:"references"},{label:"Журнал операций",value:"journal"},{label:"Пользователи",value:"users"},{label:"Роли и доступы",value:"roles"},{label:"Настройки",value:"settings"}],z=()=>e.jsxs(u,{$css:{overflow:"hidden"},children:[e.jsx(u.Header,{title:"Навигация",$css:{overflow:"hidden"},bottomBlock:e.jsx(Be,{})}),e.jsx(u.Content,{children:e.jsx(Pe,{children:Ce.map(t=>e.jsx(be,{children:t.label},t.value))})}),e.jsx(u.Footer,{children:e.jsx(o,{view:"secondary",stretching:"filled",size:"s",children:"Все разделы"})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"s",view:"secondary",children:e.jsx(De,{})}),e.jsx(f,{size:"s",view:"secondary",children:e.jsx(b,{})}),e.jsx(Ee,{items:Ce,portal:"document",children:e.jsx(f,{size:"s",view:"secondary",children:e.jsx(ve,{})})})]}),$=({count:t=15})=>e.jsx(e.Fragment,{children:Array.from({length:t},(a,s)=>e.jsxs(n,{style:{marginBottom:12},children:["Блок контента #",s+1]},s))}),p=`
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
`,Ve={title:"Композиции/PageLayout",component:r,tags:["!autodocs"],parameters:{layout:"fullscreen",docs:{toc:!0}}},g={name:"Базовый",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(r,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Основной контент"}),e.jsx(n,{children:"Ещё один блок контента"})]})})})]})},j={name:"Двухколоночная раскладка",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(r,{children:e.jsx(l,{variant:"V2_1",marginBottom:"0",headerSlot:c,mainSlot:[e.jsx(n,{$bg:"#dfffdf",children:"Левая колонка (основная)"},"left"),e.jsx(n,{$bg:"#dfdfff",children:"Правая колонка"},"right")]})})]})},S={name:"Страничный скролл",...d({preCode:p}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(r,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsx($,{count:20})})})]})};function ke(){const[t,a]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:t?"secondary":"accent",onClick:()=>a(s=>!s),children:t?"Закрыть сайдбар":"Открыть сайдбар"})]}),e.jsx(r,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Основной контент. SplitView с insidePageLayout компенсирует padding-inline PageLayout через отрицательный margin-right."}),e.jsx(n,{children:"Ещё один блок"})]})}),sidebar:{content:e.jsxs(A,{children:[e.jsxs(u,{children:[e.jsx(u.Header,{title:"Детали"}),e.jsx(u.Content,{children:"Информация о записи"})]}),e.jsxs(u,{children:[e.jsx(u.Header,{title:"Действия"}),e.jsx(u.Content,{children:e.jsxs(v,{mainAxisGap:8,orientation:"vertical",children:[e.jsx(o,{size:"s",view:"accent",stretching:"filled",children:"Утвердить"}),e.jsx(o,{size:"s",view:"secondary",stretching:"filled",children:"Отклонить"})]})})]})]}),isOpened:t,defaultWidthPercent:30}})})]})}const We=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","WithSplitViewTemplate")}
`,C={name:"SplitView (toggle sidebar)",...d({previewSource:"shown",code:We}),render:ke};function He(){const[t,a]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsxs(o,{size:"xs",view:"secondary",onClick:()=>a(s=>!s),children:[t?"Скрыть":"Показать"," сайдбар"]})]}),e.jsx(r,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",headerSlot:c,mainSlot:e.jsx($,{count:25})}),sidebar:{content:e.jsx(A,{children:e.jsxs(u,{children:[e.jsx(u.Header,{title:"Фильтры"}),e.jsx(u.Content,{children:"Sticky sidebar — не скроллится вместе с основным контентом"})]})}),isOpened:t,defaultWidthPercent:25}})})]})}const Te=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","SplitViewLongContentTemplate")}
`,w={name:"SplitView + длинный контент",...d({previewSource:"shown",code:Te}),render:He};function ze(){const[t,a]=i.useState(!1),[s,y]=i.useState(280);return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Шапка микрофронта (fixed)"}),e.jsx(r,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(H,{children:[e.jsx(W,{collapseState:[t,a],widthState:[s,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(f,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsxs(T,{children:[e.jsx(n,{children:"Контент страницы «Дашборд»"}),e.jsx(n,{style:{marginTop:12},children:"LeftPanel сворачивается / разворачивается. Layout адаптируется."}),e.jsx(n,{style:{marginTop:12},children:"Дополнительный блок контента"}),e.jsx(n,{style:{marginTop:12},children:"Ещё один блок для демонстрации высоты"})]})]})})})]})}const _e=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","WithLeftPanelTemplate")}
`,L={name:"LeftPanel + Layout",...d({previewSource:"shown",code:_e}),render:ze};function $e(){const[t,a]=i.useState(!1),[s,y]=i.useState(260),[x,V]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:x?"secondary":"accent",onClick:()=>V(k=>!k),children:x?"Скрыть детали":"Показать детали"})]}),e.jsx(r,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",style:{height:"100%"},headerSlot:c,mainSlot:e.jsxs(H,{children:[e.jsx(W,{collapseState:[t,a],widthState:[s,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(f,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsxs(T,{children:[e.jsx(n,{children:"Таблица или список записей. Выбор записи открывает панель деталей справа через SplitView."}),e.jsx(n,{style:{marginTop:12},children:"Ещё один блок контента"})]})]})}),sidebar:{content:e.jsxs(A,{children:[e.jsxs(u,{children:[e.jsx(u.Header,{title:"Детали записи"}),e.jsxs(u.Content,{children:[e.jsx("p",{children:"ID: 12345"}),e.jsx("p",{children:"Статус: Активна"}),e.jsx("p",{children:"Дата: 15.03.2026"})]})]}),e.jsxs(u,{children:[e.jsx(u.Header,{title:"Действия"}),e.jsx(u.Content,{children:e.jsxs(v,{mainAxisGap:8,orientation:"vertical",children:[e.jsx(o,{size:"s",view:"accent",stretching:"filled",children:"Редактировать"}),e.jsx(o,{size:"s",view:"secondary",stretching:"filled",children:"Архивировать"})]})})]})]}),isOpened:x,defaultWidthPercent:30}})})]})}const Oe=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","LeftPanelWithSplitViewTemplate")}
`,B={name:"LeftPanel + SplitView",...d({previewSource:"shown",code:Oe}),render:$e};function Ie(){const[t,a]=i.useState(!1),[s,y]=i.useState(260),[x,V]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Шапка микрофронта (fixed)",e.jsx(o,{size:"xs",view:"secondary",onClick:()=>V(k=>!k),children:x?"Скрыть":"Показать"})]}),e.jsx(r,{children:e.jsx(D,{insidePageLayout:!0,mainContent:e.jsx(l,{variant:"V1_1",marginTop:"0",marginBottom:"0",paddingTop:"16px",style:{height:"100%"},headerSlot:c,mainSlot:e.jsxs(H,{children:[e.jsx(W,{collapseState:[t,a],widthState:[s,y],maxWidth:360,expandedContent:e.jsx(z,{}),collapsedContent:e.jsx(_,{}),collapsedFooterContent:e.jsx(f,{size:"s",view:"secondary",children:e.jsx(b,{})})}),e.jsx(T,{children:e.jsx($,{count:20})})]})}),sidebar:{content:e.jsx(A,{children:e.jsxs(u,{children:[e.jsx(u.Header,{title:"Sticky sidebar"}),e.jsx(u.Content,{children:"Этот sidebar остаётся на месте при прокрутке основного контента."})]})}),isOpened:x,defaultWidthPercent:25}})})]})}const Ge=`${p}
${P("packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx","FullComboLongTemplate")}
`,F={name:"LeftPanel + SplitView + скролл",...d({previewSource:"shown",code:Ge}),render:Ie},Me=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`,E={name:"Для шапки микрофронта",...d({preCode:p,previewSource:"shown"}),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(r,{paddingTop:0,paddingBottom:0,minHeight:0,children:e.jsxs(Me,{children:[e.jsx("span",{style:{fontWeight:600},children:"Логотип"}),e.jsxs(v,{mainAxisGap:8,children:[e.jsx(o,{size:"s",view:"secondary",children:"Раздел 1"}),e.jsx(o,{size:"s",view:"secondary",children:"Раздел 2"}),e.jsx(o,{size:"s",view:"accent",children:"Профиль"})]})]})})}),e.jsx(r,{children:e.jsx(l,{variant:"V1_1",marginBottom:"0",headerSlot:c,mainSlot:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["Основной контент страницы. Шапка сверху обёрнута в PageLayout с paddingTop=","{0}",", paddingBottom=","{0}"," и minHeight=","{0}","."]}),e.jsx(n,{children:"Ещё один блок контента"}),e.jsx(n,{children:"Третий блок"})]})})})]})};var O,I,G,M,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(I=g.parameters)==null?void 0:I.docs)==null?void 0:G.source},description:{story:"##### Базовый пример\n\n`PageLayout` + `Layout V1_1` + имитация fixed-шапки микрофронта.\nШапка задаёт CSS-переменную `--global-header-height`, `PageLayout`\nавтоматически подхватывает её для `padding-top`.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(R=(M=g.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var q,J,K,N,Q;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"##### Двухколоночная раскладка\n\n`PageLayout` + `Layout V2_1` — основная колонка слева, дополнительная справа.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(Q=(N=j.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};var U,X,Y,Z,ee;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"##### Страничный скролл\n\nДлинный контент внутри `PageLayout`. `min-height: 100dvh` обеспечивает\nкорректную работу скролла страницы.\n\nℹ️ Для просмотра примера нажми `Show code`.",...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ue,te,ne;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'SplitView (toggle sidebar)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withSplitViewCode
  }),
  render: WithSplitViewTemplate
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,se,re;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'SplitView + длинный контент',
  ...storySourceDoc({
    previewSource: 'shown',
    code: splitViewLongContentCode
  }),
  render: SplitViewLongContentTemplate
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,ie,de;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(xe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ge,je,Se;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Se=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};const Re=["Basic","WithTwoColumns","WithLongContent","WithSplitView","SplitViewWithLongContent","WithLeftPanel","LeftPanelWithSplitView","FullComboLongContent","ForMicroFrontHeader"],au=Object.freeze(Object.defineProperty({__proto__:null,Basic:g,ForMicroFrontHeader:E,FullComboLongContent:F,LeftPanelWithSplitView:B,SplitViewWithLongContent:w,WithLeftPanel:L,WithLongContent:S,WithSplitView:C,WithTwoColumns:j,__namedExportsOrder:Re,default:Ve},Symbol.toStringTag,{value:"Module"}));export{au as P};
