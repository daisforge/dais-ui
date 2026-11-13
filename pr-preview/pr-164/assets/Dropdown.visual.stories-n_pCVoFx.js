import{d as e}from"./react-D2T61mpp.js";import{cp as H,cq as R,cr as W,cs as _}from"./vendor-DeJLDLpI.js";import{D as u}from"./DrawerDF-DNxljuta.js";import{M as s}from"./ModalDF-Dbp26mbv.js";import{D,t as q}from"./@salutejs/sdds-finai-DA9CWr9W.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./constants-BxGpUxiJ.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./Box-DQw8sL1c.js";import"./Container-VthbEbB2.js";import"./utils-KF4aT_9e.js";import"./sharedUtilsDebug-BX_KjCjW.js";const te={title:"Локальные компоненты/Dropdown/Совместимость SDDS",component:D,args:{items:[]},parameters:{screenshot:{keepState:!0}}},n=({placement:o})=>e.jsxDEV("div",{style:{width:700,height:400,padding:"150px 250px"},children:e.jsxDEV(D,{placement:o,alwaysOpened:!0,listWidth:"160px",items:[{value:"edit",label:"Редактировать"},{value:"copy",label:"Копировать"}],children:e.jsxDEV(q,{text:"Действия",style:{width:200}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:25,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:24,columnNumber:3},void 0),a={render:()=>e.jsxDEV(n,{placement:"top"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:39,columnNumber:49},void 0)},i={render:()=>e.jsxDEV(n,{placement:"bottom"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:41,columnNumber:17},void 0)},t={render:()=>e.jsxDEV(n,{placement:"left"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:44,columnNumber:17},void 0)},d={render:()=>e.jsxDEV(n,{placement:"right"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:47,columnNumber:17},void 0)},l={render:()=>e.jsxDEV(n,{placement:"bottom-center"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:50,columnNumber:17},void 0)},m={render:()=>e.jsxDEV("div",{style:{width:700,height:400,padding:"40px 160px"},children:e.jsxDEV(D,{placement:"bottom",alwaysOpened:!0,listWidth:"200px",items:[{value:"export",label:"Экспорт",placement:"right",trigger:"click",items:[{value:"csv",label:"Скачать CSV"}]}],children:e.jsxDEV(q,{text:"Действия"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:70,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:56,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:55,columnNumber:5},void 0),play:async({canvasElement:o})=>{const r=H(o.ownerDocument.body);await R.click(await r.findByText("Экспорт")),await W(()=>_(r.getByText("Скачать CSV")).toBeVisible())}},z={placement:"bottom",listWidth:"220px",items:[{value:"export",label:"Экспортировать данные"}]},G=async({canvasElement:o})=>{const r=H(o.ownerDocument.body);await R.click(await r.findByRole("combobox",{name:"Действия документа"})),await W(()=>_(r.getByText("Экспортировать данные")).toBeVisible())},c={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(s,{opened:!0,onClose:()=>{},children:e.jsxDEV(s.Main,{children:[e.jsxDEV(s.Header,{title:"Документ",rightBlock:e.jsxDEV(s.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:107,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:104,columnNumber:9},void 0),e.jsxDEV(s.Content,{children:e.jsxDEV("div",{style:{height:160},children:"Меню не должно обрезаться границами модального окна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:114,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:113,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:103,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:102,columnNumber:5},void 0),play:G},p={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(u,{opened:!0,onClose:()=>{},header:e.jsxDEV(u.Header,{title:"Документ",rightBlock:e.jsxDEV(u.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:134,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:131,columnNumber:9},void 0),main:e.jsxDEV(u.Content,{children:"Меню доступно поверх содержимого панели."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:142,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:127,columnNumber:5},void 0),play:G};var w,b,g;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Alignment placement="top" />
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,f,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Alignment placement="bottom" />
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,h,N;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Alignment placement="left" />
}`,...(N=(h=t.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var y,E,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alignment placement="right" />
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,F,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Alignment placement="bottom-center" />
}`,...(B=(F=l.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var j,S,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 700,
    height: 400,
    padding: '40px 160px'
  }}>
      <Dropdown placement="bottom" alwaysOpened listWidth="200px" items={[{
      value: 'export',
      label: 'Экспорт',
      placement: 'right',
      trigger: 'click',
      items: [{
        value: 'csv',
        label: 'Скачать CSV'
      }]
    }]}>
        <Button text="Действия" />
      </Dropdown>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await page.findByText('Экспорт'));
    await waitFor(() => expect(page.getByText('Скачать CSV')).toBeVisible());
  }
}`,...(M=(S=m.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var A,L,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  render: () => <ModalDF opened onClose={() => {}}>
      <ModalDF.Main>
        <ModalDF.Header title="Документ" rightBlock={<ModalDF.DotsIconButton aria-label="Действия документа" dropdownProps={overlayDropdownProps} />} />
        <ModalDF.Content>
          <div style={{
          height: 160
        }}>
            Меню не должно обрезаться границами модального окна.
          </div>
        </ModalDF.Content>
      </ModalDF.Main>
    </ModalDF>,
  play: openOverlayMenu
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var I,O,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  render: () => <DrawerDF opened onClose={() => {}} header={<DrawerDF.Header title="Документ" rightBlock={<DrawerDF.DotsIconButton aria-label="Действия документа" dropdownProps={overlayDropdownProps} />} />} main={<DrawerDF.Content>
          Меню доступно поверх содержимого панели.
        </DrawerDF.Content>} />,
  play: openOverlayMenu
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const de=["LegacyTop","LegacyBottom","LegacyLeft","LegacyRight","NewCenter","NestedLegacyPlacement","InsideModal","InsideDrawer"];export{p as InsideDrawer,c as InsideModal,i as LegacyBottom,t as LegacyLeft,d as LegacyRight,a as LegacyTop,m as NestedLegacyPlacement,l as NewCenter,de as __namedExportsOrder,te as default};
