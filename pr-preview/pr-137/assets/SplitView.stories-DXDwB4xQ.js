import{r as i,j as e}from"./react-CAOzMBF_.js";import{c as W}from"./tableData-DVJFoYoT.js";import{g as P}from"./getFuncAsString-DnrLf2YT.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{S as I}from"./SplitView-9-RV5VCp.js";import{f as Q}from"./Table-BQHrw1K6.js";import{W as s}from"./Widget-CvkMap1n.js";import{s as t}from"./constants-DatVHdkd.js";import{cF as H}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as U}from"./styled-components-DCFsnh-i.js";import{h as L}from"./utils-EIxGvR70.js";import{s as w,F as d,I as v,ab as $,t as c,g as G,x as X,ac as Y,r as ee}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as M,e_ as _,pc as ne}from"./@salutejs/plasma-icons-Do5ggeDI.js";const Z=U.div`
  position: sticky;
  top: 0;
  height: 72px;
  padding-top: 16px;
  margin-top: -16px;
  background-color: teal;
  z-index: 1;
`,te={title:"Композиции/SplitView",parameters:{docs:{toc:!0}},tags:["!autodocs"],component:I};function q({rows:p,setOpenedTask:n}){const u=i.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx(Q,{tableConfig:{containerStyle:{height:700},onCellClick({row:x}){n(x)}},columnConfig:u,rows:p})}const a={name:"SplitView",...R({previewSource:"shown",preCode:`
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Flow,
  H2,
  IconButton,
  s,
  Table,
  Widget,
} from '@daisforge/ui';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${P("packages/storybook/src/stories/SplitView/SplitView.stories.tsx","SplitViewTableComponent")}


    `}),render:()=>{const[p]=i.useState(W),[n,u]=i.useState(null),[x,m]=i.useState(!1),[o,S]=i.useState(!1),{down:b}=L(),f=b("xl")?530:void 0,h=r=>{u(r),m(!0)},y=()=>{S(r=>!r)},F=()=>{S(!1),m(!1),setTimeout(()=>{u(null)},300)};return e.jsxs("div",{style:{backgroundColor:H},children:[e.jsx(Z,{children:"Header FinAI"}),e.jsx(I,{$css:{marginInline:-16,paddingLeft:16},mainContent:e.jsxs("div",{style:{paddingBlock:t.x12},children:[e.jsx(G,{style:{paddingBlock:t.x8},children:"Основной контент"}),e.jsx(q,{rows:p,setOpenedTask:h})]}),sidebar:{isOpened:x,isFullScreened:o,minWidthPx:f,paddingLeftOnClosed:16,content:({avatarSize:r})=>e.jsxs(s,{containerType:o?"modal":"splitView",children:[e.jsx(s.Header,{onClose:F,fullScreened:o,toggleFullScreened:y,title:`Обработка документов по ${n==null?void 0:n.id}`,titleLeftSlot:e.jsx($,{size:r,name:(n==null?void 0:n.task)??""}),rightBlock:e.jsxs(e.Fragment,{children:[e.jsx(s.IconButtonDots,{size:"xs",iconSize:"xs",iconOrientation:"vertical",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}}),e.jsx(s.Divider,{}),e.jsxs(d,{mainAxisGap:t.x2,children:[e.jsx(v,{view:"secondary",size:"xs",children:e.jsx(M,{size:"xs"})}),e.jsx(v,{view:"secondary",size:"xs",children:e.jsx(_,{size:"xs"})})]})]}),badge:{text:"Бейдж"},bottomBlock:e.jsxs("div",{style:{display:"flex",gap:t.x2},children:[e.jsx(w,{size:"s",transparent:!0,view:"accent",text:"В работе"}),e.jsx(w,{size:"s",transparent:!0,view:"negative",text:"2-й раз"})]})}),e.jsx(s.Content,{children:e.jsx("div",{style:{height:"2000px",backgroundColor:"goldenrod"},children:e.jsx("span",{style:{position:"absolute",right:0,width:"4px",backgroundColor:"teal"}})})}),e.jsx(s.Footer,{leftBlock:e.jsxs(d,{mainAxisGap:t.x4,children:[e.jsx(c,{text:"Кнопка 1",size:"xs",view:"secondary"}),e.jsx(s.IconButtonDots,{size:"xs"})]}),rightBlock:e.jsxs(d,{mainAxisGap:t.x4,children:[e.jsx(c,{text:"Кнопка",size:"xs",view:"secondary"}),e.jsx(c,{text:"Главная кнопка",size:"xs",view:"accent"})]})})]})}})]})}},l={name:"SplitView + Tabs Icon Vertical",...R({previewSource:"shown",preCode:`
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Divider,
  Flow,
  H2,
  IconButton,
  IconTabItem,
  s,
  Table,
  Tabs,
  Widget,
} from '@daisforge/ui';
import { IconPlasma } from '@ui-kit/icons';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${P("packages/storybook/src/stories/SplitView/SplitView.stories.tsx","SplitViewTableComponent")}


    `}),render:()=>{const[p]=i.useState(W),[n,u]=i.useState(null),[x,m]=i.useState(!1),[o,S]=i.useState(!1),[b,f]=i.useState(0),{down:h}=L(),y=h("xl")?530:void 0,F=[0,1,2,3,4],r=g=>{u(g),m(!0)},J=()=>{S(g=>!g)},K=()=>{S(!1),m(!1),setTimeout(()=>{u(null)},300)};return e.jsxs("div",{style:{backgroundColor:H},children:[e.jsx(Z,{children:"Header FinAI"}),e.jsx(I,{$css:{marginInline:-16,paddingLeft:16},mainContent:e.jsxs("div",{style:{paddingBlock:t.x12},children:[e.jsx(G,{style:{paddingBlock:t.x8},children:"Основной контент"}),e.jsx(q,{rows:p,setOpenedTask:r})]}),sidebar:{isOpened:x,isFullScreened:o,minWidthPx:y,paddingLeftOnClosed:16,content:({avatarSize:g})=>e.jsxs("div",{style:{display:"flex",height:"100%"},children:[e.jsx(X,{orientation:"vertical",size:"s",view:"divider",style:{alignSelf:"flex-start",paddingTop:t.x8},children:F.map((N,k)=>e.jsx(Y,{selected:k===b,onClick:()=>f(k),orientation:"vertical",view:"divider",size:"s",tabIndex:0,style:{padding:`${t.x4} 10px ${t.x3} 10px`},children:e.jsx(ne,{color:"inherit"})},`tab:${N}`))}),e.jsx(ee,{orientation:"vertical"}),e.jsxs(s,{containerType:o?"modal":"splitView",style:{flex:1,minWidth:0},children:[e.jsx(s.Header,{onClose:K,fullScreened:o,toggleFullScreened:J,title:`Обработка документов по ${n==null?void 0:n.id}`,titleLeftSlot:e.jsx($,{size:g,name:(n==null?void 0:n.task)??""}),rightBlock:e.jsxs(e.Fragment,{children:[e.jsx(s.IconButtonDots,{size:"xs",iconSize:"xs",iconOrientation:"vertical",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}}),e.jsx(s.Divider,{}),e.jsxs(d,{mainAxisGap:t.x2,children:[e.jsx(v,{view:"secondary",size:"xs",children:e.jsx(M,{size:"xs"})}),e.jsx(v,{view:"secondary",size:"xs",children:e.jsx(_,{size:"xs"})})]})]}),badge:{text:"Бейдж"},bottomBlock:e.jsxs("div",{style:{display:"flex",gap:t.x2},children:[e.jsx(w,{size:"s",transparent:!0,view:"accent",text:"В работе"}),e.jsx(w,{size:"s",transparent:!0,view:"negative",text:"2-й раз"})]})}),e.jsx(s.Content,{children:e.jsxs("div",{style:{height:"2000px",backgroundColor:"goldenrod"},children:["Кастомный слот — Tab ",b+1]})}),e.jsx(s.Footer,{leftBlock:e.jsxs(d,{mainAxisGap:t.x4,children:[e.jsx(c,{text:"Кнопка 1",size:"xs",view:"secondary"}),e.jsx(s.IconButtonDots,{size:"xs"})]}),rightBlock:e.jsxs(d,{mainAxisGap:t.x4,children:[e.jsx(c,{text:"Кнопка",size:"xs",view:"secondary"}),e.jsx(c,{text:"Главная кнопка",size:"xs",view:"accent"})]})})]})]})}})]})}};var B,C,T,j,z;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'SplitView',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Flow,
  H2,
  IconButton,
  s,
  Table,
  Widget,
} from '@daisforge/ui';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


\${getFuncAsString('packages/storybook/src/stories/SplitView/SplitView.stories.tsx', 'SplitViewTableComponent')}


    \`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const {
      down
    } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;
    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened(prev => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };
    return <div style={{
      backgroundColor: backgroundPrimary
    }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView
      // стилизация для примера
      $css={{
        marginInline: -16,
        paddingLeft: 16
      }} mainContent={<div style={{
        paddingBlock: s.x12
      }}>
              <H2 style={{
          paddingBlock: s.x8
        }}>Основной контент</H2>
              <SplitViewTableComponent rows={rows} setOpenedTask={openTaskSidebar} />
            </div>} sidebar={{
        isOpened: sidebarIsOpened,
        isFullScreened: sidebarIsFullScreened,
        minWidthPx: sidebarMinWidthPx,
        // стилизация для примера
        paddingLeftOnClosed: 16,
        content: ({
          avatarSize
        }: SplitViewSlotSizesProps) => <Widget containerType={sidebarIsFullScreened ? 'modal' : 'splitView'}>
                <Widget.Header onClose={onSidebarEsc} fullScreened={sidebarIsFullScreened} toggleFullScreened={toggleFullScreen} title={\`Обработка документов по \${openedTask?.id}\`} titleLeftSlot={<Avatar size={avatarSize} name={openedTask?.task ?? ''} />} rightBlock={<>
                      <Widget.IconButtonDots size="xs" iconSize="xs" iconOrientation="vertical" dropdownProps={{
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
                      <Button text="Кнопка 1" size="xs" view="secondary" />
                      <Widget.IconButtonDots size="xs" />
                    </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
                      <Button text="Кнопка" size="xs" view="secondary" />
                      <Button text="Главная кнопка" size="xs" view="accent" />
                    </Flow>} />
              </Widget>
      }} />
      </div>;
  }
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Кликните на любую ячейку таблицы для открытия SplitView.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(z=(j=a.parameters)==null?void 0:j.docs)==null?void 0:z.description}}};var D,A,E,V,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'SplitView + Tabs Icon Vertical',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Divider,
  Flow,
  H2,
  IconButton,
  IconTabItem,
  s,
  Table,
  Tabs,
  Widget,
} from '@daisforge/ui';
import { IconPlasma } from '@ui-kit/icons';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


\${getFuncAsString('packages/storybook/src/stories/SplitView/SplitView.stories.tsx', 'SplitViewTableComponent')}


    \`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const {
      down
    } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;
    const tabItems = [0, 1, 2, 3, 4];
    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened(prev => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };
    return <div style={{
      backgroundColor: backgroundPrimary
    }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView $css={{
        marginInline: -16,
        paddingLeft: 16
      }} mainContent={<div style={{
        paddingBlock: s.x12
      }}>
              <H2 style={{
          paddingBlock: s.x8
        }}>Основной контент</H2>
              <SplitViewTableComponent rows={rows} setOpenedTask={openTaskSidebar} />
            </div>} sidebar={{
        isOpened: sidebarIsOpened,
        isFullScreened: sidebarIsFullScreened,
        minWidthPx: sidebarMinWidthPx,
        paddingLeftOnClosed: 16,
        content: ({
          avatarSize
        }: SplitViewSlotSizesProps) => <div style={{
          display: 'flex',
          height: '100%'
        }}>
                {/* Tabs Icon Vertical S — СЛЕВА */}
                <Tabs orientation="vertical" size="s" view="divider" style={{
            alignSelf: 'flex-start',
            paddingTop: s.x8
          }}>
                  {tabItems.map((id, i) => <IconTabItem key={\`tab:\${id}\`} selected={i === activeTab} onClick={() => setActiveTab(i)} orientation="vertical" view="divider" size="s" tabIndex={0} style={{
              padding: \`\${s.x4} 10px \${s.x3} 10px\`
            }}>
                      <IconPlasma color="inherit" />
                    </IconTabItem>)}
                </Tabs>

                {/* Divider вертикальный между табами и Widget */}
                <Divider orientation="vertical" />

                {/* Основной контент Widget — СПРАВА */}
                <Widget containerType={sidebarIsFullScreened ? 'modal' : 'splitView'} style={{
            flex: 1,
            minWidth: 0
          }}>
                  <Widget.Header onClose={onSidebarEsc} fullScreened={sidebarIsFullScreened} toggleFullScreened={toggleFullScreen} title={\`Обработка документов по \${openedTask?.id}\`} titleLeftSlot={<Avatar size={avatarSize} name={openedTask?.task ?? ''} />} rightBlock={<>
                        <Widget.IconButtonDots size="xs" iconSize="xs" iconOrientation="vertical" dropdownProps={{
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
                      Кастомный слот — Tab {activeTab + 1}
                    </div>
                  </Widget.Content>

                  <Widget.Footer leftBlock={<Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка 1" size="xs" view="secondary" />
                        <Widget.IconButtonDots size="xs" />
                      </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка" size="xs" view="secondary" />
                        <Button text="Главная кнопка" size="xs" view="accent" />
                      </Flow>} />
                </Widget>
              </div>
      }} />
      </div>;
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:`SplitView с вертикальными иконочными табами справа.
При включении табов контентная часть sidebar уменьшается.
Используется компонент Tabs/Icon/Vertical/Tabs S + Divider.

#####ℹ️ Для просмотра примера нажми \`Show code\`.`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};const se=["SplitViewStory","SplitViewWithTabsStory"],be=Object.freeze(Object.defineProperty({__proto__:null,SplitViewStory:a,SplitViewWithTabsStory:l,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{be as S};
