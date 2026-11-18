import{d as e}from"./react-D2T61mpp.js";import{cp as g,cq as d,cr as l,cs as h}from"./vendor-Ci1ldQR2.js";import{D as r}from"./DrawerDF-BsWU7Ibo.js";import{M as o}from"./ModalDF-BY8NnXGs.js";import{D as N}from"./@salutejs/sdds-finai-CXYSUkRi.js";import"./react-is-Clcustum.js";import"./styled-components-BU37qrha.js";import"./@tanstack/react-virtual-utuXu4t3.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/plasma-icons-CQ-FAqMV.js";import"./constants-BxGpUxiJ.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./Box-DKKGEblt.js";import"./Container-CpNScGOn.js";import"./utils-D7tYxEgh.js";import"./sharedUtilsDebug-BX_KjCjW.js";const _={title:"Локальные компоненты/Dropdown/Меню поверх модалки и шторки",component:N,args:{items:[]}},f={placement:"bottom-start",listWidth:"220px",items:[{value:"export",label:"Экспортировать данные"}]},k=async({canvasElement:v})=>{const n=v.ownerDocument,a=g(n.body),E=await a.findByRole("combobox",{name:"Действия документа"});await d(()=>l(n.getAnimations().some(t=>{var i;return t.playState==="running"&&Number.isFinite((i=t.effect)==null?void 0:i.getComputedTiming().endTime)})).toBe(!1)),await h.click(E),await d(()=>l(a.getByText("Экспортировать данные")).toBeVisible())},u={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(o,{opened:!0,onClose:()=>{},children:e.jsxDEV(o.Main,{children:[e.jsxDEV(o.Header,{title:"Документ",rightBlock:e.jsxDEV(o.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:55,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:52,columnNumber:9},void 0),e.jsxDEV(o.Content,{children:e.jsxDEV("div",{style:{height:160},children:"Меню не должно обрезаться границами модального окна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:51,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:50,columnNumber:5},void 0),play:k},s={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(r,{opened:!0,onClose:()=>{},header:e.jsxDEV(r.Header,{title:"Документ",rightBlock:e.jsxDEV(r.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:{...f,placement:"bottom-end"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:82,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:79,columnNumber:9},void 0),main:e.jsxDEV(r.Content,{children:"Меню доступно поверх содержимого панели."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:93,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:75,columnNumber:5},void 0),play:k};var p,m,c;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=u.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var D,w,b;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const q=["InsideModal","InsideDrawer"];export{s as InsideDrawer,u as InsideModal,q as __namedExportsOrder,_ as default};
