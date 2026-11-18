import{d as e}from"./react-D2T61mpp.js";import{cp as w,cq as b,cr as k,cs as f}from"./vendor-DeJLDLpI.js";import{D as r}from"./DrawerDF-DNxljuta.js";import{M as o}from"./ModalDF-Dbp26mbv.js";import{D as v}from"./@salutejs/sdds-finai-DA9CWr9W.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./constants-BxGpUxiJ.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./Box-DQw8sL1c.js";import"./Container-VthbEbB2.js";import"./utils-KF4aT_9e.js";import"./sharedUtilsDebug-BX_KjCjW.js";const H={title:"Локальные компоненты/Dropdown/Меню поверх модалки и шторки",component:v,args:{items:[]}},m={placement:"bottom-start",listWidth:"220px",items:[{value:"export",label:"Экспортировать данные"}]},c=async({canvasElement:D})=>{const n=w(D.ownerDocument.body);await b.click(await n.findByRole("combobox",{name:"Действия документа"})),await k(()=>f(n.getByText("Экспортировать данные")).toBeVisible())},u={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(o,{opened:!0,onClose:()=>{},children:e.jsxDEV(o.Main,{children:[e.jsxDEV(o.Header,{title:"Документ",rightBlock:e.jsxDEV(o.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:41,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:38,columnNumber:9},void 0),e.jsxDEV(o.Content,{children:e.jsxDEV("div",{style:{height:160},children:"Меню не должно обрезаться границами модального окна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:48,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:47,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:37,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:36,columnNumber:5},void 0),play:c},s={parameters:{screenshot:{capture:"page",keepState:!0}},render:()=>e.jsxDEV(r,{opened:!0,onClose:()=>{},header:e.jsxDEV(r.Header,{title:"Документ",rightBlock:e.jsxDEV(r.DotsIconButton,{"aria-label":"Действия документа",dropdownProps:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:68,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:65,columnNumber:9},void 0),main:e.jsxDEV(r.Content,{children:"Меню доступно поверх содержимого панели."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:76,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Dropdown/Dropdown.visual.stories.tsx",lineNumber:61,columnNumber:5},void 0),play:c};var a,i,t;u.parameters={...u.parameters,docs:{...(a=u.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(t=(i=u.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["InsideModal","InsideDrawer"];export{s as InsideDrawer,u as InsideModal,O as __namedExportsOrder,H as default};
