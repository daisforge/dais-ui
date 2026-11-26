import{b as e}from"./react-UEdzNlUe.js";import{w as g,a as d,e as p,u as h}from"./index-Dgmteq0e.js";import{D as r}from"./DrawerDF-Dm5V6T2q.js";import{M as o}from"./ModalDF-Beuem94M.js";import{D as N}from"./@salutejs/sdds-finai-DfKFI7EK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFB8ouFt.js";import"./@salutejs/plasma-icons-CJ8E-azk.js";import"./styled-components-1kmEus0U.js";import"./react-is-CJ4CjPIR.js";import"./vendor-2C5_55Sm.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./constants-Des9Datc.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./Box-BOi9y4XS.js";import"./Container-SyT9KcgF.js";import"./utils-C_hbAdEU.js";import"./sharedUtilsDebug-BX_KjCjW.js";const G={title:"Локальные компоненты/Dropdown/Меню поверх модалки и шторки",component:N,args:{items:[]}},f={placement:"bottom-start",listWidth:"220px",items:[{value:"export",label:"Экспортировать данные"}]},k=async({canvasElement:v})=>{const s=v.ownerDocument,a=g(s.body),E=await a.findByRole("combobox",{name:"Действия документа"});await d(()=>p(s.getAnimations().some(t=>{var i;return t.playState==="running"&&Number.isFinite((i=t.effect)==null?void 0:i.getComputedTiming().endTime)})).toBe(!1)),await h.click(E),await d(()=>p(a.getByText("Экспортировать данные")).toBeVisible())},u={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(o,{opened:!0,onClose:()=>{},children:e.jsxDEV(o.Main,{children:[e.jsxDEV(o.Header,{title:"Документ",rightBlock:e.jsxDEV(o.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:55,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:52,columnNumber:9},void 0),e.jsxDEV(o.Content,{children:e.jsxDEV("div",{style:{height:160},children:"Меню не должно обрезаться границами модального окна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:51,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:50,columnNumber:5},void 0),play:k},n={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(r,{opened:!0,onClose:()=>{},header:e.jsxDEV(r.Header,{title:"Документ",rightBlock:e.jsxDEV(r.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:{...f,placement:"bottom-end"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:82,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:79,columnNumber:9},void 0),main:e.jsxDEV(r.Content,{children:"Меню доступно поверх содержимого панели."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:93,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:75,columnNumber:5},void 0),play:k};var l,m,c;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=u.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var D,w,b;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  render: () => <DrawerDF opened onClose={() => {}} header={<DrawerDF.Header title="Документ" rightBlock={<DrawerDF.DotsIconButton aria-label="Действия документа" dropdownProps={{
    ...overlayDropdownProps,
    placement: 'bottom-end'
  }} />} />} main={<DrawerDF.Content>
          Меню доступно поверх содержимого панели.
        </DrawerDF.Content>} />,
  play: openOverlayMenu
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const J=["InsideModal","InsideDrawer"];export{n as InsideDrawer,u as InsideModal,J as __namedExportsOrder,G as default};
