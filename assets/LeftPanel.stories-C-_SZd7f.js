import{r as m,j as u}from"./react-DYHuXpTF.js";import{s as W}from"./storySourceDoc-tVKyHcEN.js";import{B as C}from"./Box-DwiKSnnX.js";import{L as E}from"./LeftPanel-B93hV6PP.js";import{T as $}from"./TextField-WPWvh7a6.js";import{T as H}from"./Typography-DEItZ0E3.js";import{W as i}from"./Widget-D6QH-LP9.js";import{s as o,c as F}from"./constants-Des9Datc.js";import{G as k,dP as n,dM as r}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as G}from"./styled-components-C3-Vg48S.js";import{I as s,D as _,a7 as O,S as M,r as b,a8 as S,E as q,A as J,c as v,a0 as L,H as K}from"./@salutejs/sdds-finai-BHH5Fs72.js";import{ai as a,p as N,aj as Q,C as U}from"./@salutejs/plasma-icons-DAdkqmmH.js";import{df as V,cy as X,dh as P}from"./vendor-DQaMhftP.js";const Y={title:"Композиции/LeftPanel",tags:["!autodocs"],parameters:{docs:{toc:!0},layout:"fullscreen"},component:E},Z=`
    import { useState } from 'react';
    import {
        IconGroupOutline,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        H2,
        IconButton,
        LeftPanel,
        Widget,
    } from '@daisforge/ui';
    import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
`,f={name:"LeftPanel со слотами",...W({preCode:Z}),render:()=>{const[B,c]=m.useState(!1),[d,l]=m.useState(360),g=t=>{c(t),l(t?void 0:360)},p=t=>{l(t)};return u.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[u.jsx(E,{maxWidth:360,widthState:[d,l],onResize:p,onToggleCollapse:g,collapseState:[B,c],expandedContent:u.jsxs(i,{$css:{overflow:"hidden"},children:[u.jsx(i.Header,{title:"Title",$css:{overflow:"hidden"},bottomBlock:u.jsx(C,{style:{padding:o.x8,borderRadius:F.s,border:`1px solid ${n}`,color:n,backgroundColor:r},children:u.jsx(b,{children:"Widget.Header bottomBlock"})})}),u.jsx(i.Content,{children:u.jsx(C,{style:{padding:o.x8,borderRadius:F.s,border:`1px solid ${n}`,color:n,backgroundColor:r,height:"800px"},children:u.jsx(b,{children:"Widget.Content"})})}),u.jsx(i.Footer,{children:u.jsx(C,{style:{padding:o.x8,borderRadius:F.s,border:`1px solid ${n}`,color:n,width:"100%",backgroundColor:r},children:u.jsx(b,{children:"Widget.Footer"})})})]}),collapsedContent:({buttonSize:t})=>u.jsxs(u.Fragment,{children:[u.jsx(s,{size:t,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:r,color:n},children:u.jsx(a,{})}),u.jsx(s,{size:t,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:r,color:n},children:u.jsx(a,{})}),u.jsx(s,{size:t,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:r,color:n},children:u.jsx(a,{})})]}),collapsedFooterContent:({buttonSize:t})=>u.jsx(s,{size:t,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:r,color:n},children:u.jsx(a,{})})}),u.jsx("div",{style:{flex:1,padding:o.x8,boxShadow:"var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)",backgroundColor:k,borderRadius:o.x8},children:u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx(L,{style:{marginBottom:o.x8},children:"Контент"}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d&&u.jsxs(K,{style:{marginRight:o.x8},children:[d,"px"]}),u.jsx(v,{onClick:()=>g(!B),children:"Открыть/Закрыть"})]})]})})]})}},u4=`
    import { useState } from 'react';
    import {
        IconHierarchy,
        IconSearch,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        Dropdown,
        H2,
        IconButton,
        LeftPanel,
        LeftPanelProps,
        List,
        ListItem,
        SegmentGroup,
        SegmentItem,
        SegmentProvider,
        TextFieldSearch,
        Widget,
    } from '@daisforge/ui';
     import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
     import styled from 'styled-components';

`,e4=G(P)`
  & .cell-content {
    width: 100%;
  }
`,h={name:"Example",...W({preCode:u4}),render:()=>{const B=[{label:"label",value:"label1"},{label:"label",value:"label2"}],c=[{label:"Основной план",value:"label1"},{label:"План блока",value:"label2"},{label:"Персональный план",value:"label3"},{label:"Журнал публикаций",value:"label4"}],[d,l]=m.useState(!1),[g,p]=m.useState(360),t=m.useRef(null),y=e=>{l(e),p(e?void 0:360)},T=()=>{y(!1),requestAnimationFrame(()=>{var e;(e=t.current)==null||e.focus()})};return u.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[u.jsx(E,{maxWidth:360,widthState:[g,p],onToggleCollapse:y,collapseState:[d,l],expandedContent:({buttonSize:e})=>u.jsxs(i,{$css:{overflow:"hidden"},children:[u.jsx(i.Header,{title:"Title",badge:{text:"badge",size:"s"},$css:{overflow:"hidden",columnGap:"56px !important"},subTitle:u.jsx(b,{children:"description"}),bottomBlock:u.jsxs(u.Fragment,{children:[u.jsx(V,{defaultSelected:["item_0"],children:u.jsx(O,{style:{marginBottom:o.x8},hasBackground:!0,size:e,stretch:!0,children:B.map((R,x)=>u.jsx(M,{view:"secondary",value:`item_${x}`,label:`Label ${x+1}`,size:e},`item:${x}`))})}),u.jsxs("div",{style:{display:"flex",gap:o.x4},children:[u.jsx($,{size:e,ref:t}),u.jsx(s,{size:e,view:"secondary",style:{aspectRatio:"1 / 1"},children:u.jsx(a,{})}),u.jsx(s,{size:e,view:"secondary",style:{aspectRatio:"1 / 1"},children:u.jsx(a,{})})]})]})}),u.jsx(i.Content,{children:u.jsx(S,{children:c.map((R,x)=>u.jsx(e4,{children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx(H,{variant:"BodyM",children:"Текст"}),u.jsx(q,{size:"s",view:"default",children:u.jsx(U,{size:"xs"})})]}),u.jsx(J,{size:"s",view:"clear",stretching:"filled",children:u.jsx(X,{type:"arrow",title:"Короткий текст тут",children:u.jsx(S,{view:"default",size:"s",variant:"tight",children:u.jsxs(P,{children:["Aaa +"," ",x%2===0?"aaaaa aaaaaaaaa aaaaaaa aaaaaaaaa".repeat(10):""]})})})})]})}))})}),u.jsx(i.Footer,{children:u.jsx(v,{size:e,view:"secondary",stretching:"filled",children:"Какая-то кнопка"})})]}),collapsedContent:({buttonSize:e})=>u.jsxs(u.Fragment,{children:[u.jsx(s,{size:e,view:"secondary",onClick:T,children:u.jsx(N,{})}),u.jsx(s,{size:e,view:"secondary",children:u.jsx(a,{})}),u.jsx(s,{size:e,view:"secondary",children:u.jsx(a,{})}),u.jsx(_,{items:c,portal:"document",children:u.jsx(s,{size:e,view:"secondary",children:u.jsx(Q,{})})})]}),collapsedFooterContent:({buttonSize:e})=>u.jsx(s,{size:e,view:"secondary",children:u.jsx(a,{})})}),u.jsx("div",{style:{flex:1,padding:o.x8,boxShadow:"var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)",backgroundColor:k,borderRadius:o.x8},children:u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx(L,{style:{marginBottom:o.x8},children:"Контент"}),u.jsx(v,{onClick:()=>y(!d),children:"Открыть/Закрыть"})]})})]})}};var D,I,w;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'LeftPanel со слотами',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => {
    // Состояние отвечает за открытие/закрытие панели
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsCollapsed(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    // Вызывается для получения изменений ширины
    const handleResize = (width: number) => {
      setWidth(width);
    };
    return <div style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      backgroundColor: '#f5f5f5'
    }}>
        <LeftPanel
      // Максимальная ширина
      maxWidth={360}
      // State для управления ширины
      widthState={[width, setWidth]}
      // Коллбэк, вызывается при смене состояния
      onResize={handleResize}
      // Коллбэк, вызывается при смене состояния
      onToggleCollapse={handleToggle}
      // Управление состоянием панели
      collapseState={[isCollapsed, setIsCollapsed]}
      // Slot для раскрытой панели (рекомендуется использовать widget)
      expandedContent={<Widget $css={{
        overflow: 'hidden'
      }}>
              {/* Заголовок виджета */}
              <Widget.Header title="Title" $css={{
          overflow: 'hidden'
        }} bottomBlock={<Box style={{
          padding: s.x8,
          borderRadius: br.s,
          border: \`1px solid \${surfaceInfo}\`,
          color: surfaceInfo,
          backgroundColor: surfaceAccentMinor
        }}>
                    <BodyS>Widget.Header bottomBlock</BodyS>
                  </Box>} />
              {/* Основной контент со скроллом */}
              <Widget.Content>
                <Box style={{
            padding: s.x8,
            borderRadius: br.s,
            border: \`1px solid \${surfaceInfo}\`,
            color: surfaceInfo,
            backgroundColor: surfaceAccentMinor,
            height: '800px'
          }}>
                  <BodyS>Widget.Content</BodyS>
                </Box>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Box style={{
            padding: s.x8,
            borderRadius: br.s,
            border: \`1px solid \${surfaceInfo}\`,
            color: surfaceInfo,
            width: '100%',
            backgroundColor: surfaceAccentMinor
          }}>
                  <BodyS>Widget.Footer</BodyS>
                </Box>
              </Widget.Footer>
            </Widget>}
      // Контент в свернутом состоянии
      collapsedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
            </>}
      // Нижняя часть в свернутом состоянии
      collapsedFooterContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <IconButton size={buttonSize} view="accent" style={{
        border: \`1px solid \${surfaceInfo}\`,
        backgroundColor: surfaceAccentMinor,
        color: surfaceInfo
      }}>
              <IconGroupOutline />
            </IconButton>} />
        <div style={{
        flex: 1,
        padding: s.x8,
        boxShadow: 'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
        backgroundColor: surfaceSolidCard,
        borderRadius: s.x8
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <H2 style={{
            marginBottom: s.x8
          }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
              {width && <H4 style={{
              marginRight: s.x8
            }}>{width}px</H4>}
              <Button onClick={() => handleToggle(!isCollapsed)}>
                Открыть/Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(w=(I=f.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var j,A,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => {
    // Данные для кнопок
    const items = [{
      label: 'label',
      value: 'label1'
    }, {
      label: 'label',
      value: 'label2'
    }];

    // Данные для списка
    const contentItems = [{
      label: 'Основной план',
      value: 'label1'
    }, {
      label: 'План блока',
      value: 'label2'
    }, {
      label: 'Персональный план',
      value: 'label3'
    }, {
      label: 'Журнал публикаций',
      value: 'label4'
    }];

    // Состояние отвечает за открытие/закрытие панели
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Реф для поля поиска
    const searchRef = useRef<HTMLInputElement>(null);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsCollapsed(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    // Открывает панель и фокусирует поле поиска
    const handleSearchClick = () => {
      handleToggle(false);
      requestAnimationFrame(() => {
        searchRef.current?.focus();
      });
    };
    return <div style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      backgroundColor: '#f5f5f5'
    }}>
        <LeftPanel
      // Максимальная ширина
      maxWidth={360} widthState={[width, setWidth]}
      // Коллбэк, вызывается при смене состояния
      onToggleCollapse={handleToggle}
      // Управление состоянием панели
      collapseState={[isCollapsed, setIsCollapsed]}
      // Slot для раскрытой панели (рекомендуется использовать widget)
      expandedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <Widget $css={{
        overflow: 'hidden'
      }}>
              <Widget.Header title="Title" badge={{
          text: 'badge',
          size: 's'
        }} $css={{
          overflow: 'hidden',
          columnGap: '56px !important'
        }} subTitle={<BodyS>description</BodyS>} bottomBlock={<>
                    {/* Группа переключателей */}
                    <SegmentProvider defaultSelected={['item_0']}>
                      <SegmentGroup style={{
              marginBottom: s.x8
            }} hasBackground size={buttonSize} stretch>
                        {items.map((_, i) => <SegmentItem view="secondary"
              // eslint-disable-next-line react/no-array-index-key
              key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Label \${i + 1}\`} size={buttonSize} />)}
                      </SegmentGroup>
                    </SegmentProvider>

                    <div style={{
            display: 'flex',
            gap: s.x4
          }}>
                      {/* Поле поиска и кнопки */}
                      <TextFieldSearch size={buttonSize} ref={searchRef} />
                      <IconButton size={buttonSize} view="secondary" style={{
              aspectRatio: '1 / 1'
            }}>
                        <IconGroupOutline />
                      </IconButton>
                      <IconButton size={buttonSize} view="secondary" style={{
              aspectRatio: '1 / 1'
            }}>
                        <IconGroupOutline />
                      </IconButton>
                    </div>
                  </>} />
              {/* Основной список */}
              <Widget.Content>
                <List>
                  {contentItems.map((_, index) => <FullWidthListItem>
                      <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                        <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                          <Typography variant="BodyM">Текст</Typography>
                          <EmbedIconButton size="s" view="default">
                            <IconPinFill size="xs" />
                          </EmbedIconButton>
                        </div>
                        <Accordion size="s" view="clear" stretching="filled">
                          <AccordionItem type="arrow" title="Короткий текст тут">
                            <List view="default" size="s" variant="tight">
                              <ListItem>
                                Aaa +{' '}
                                {index % 2 === 0 ? 'aaaaa aaaaaaaaa aaaaaaa aaaaaaaaa'.repeat(
                        // eslint-disable-next-line prettier/prettier
                        10) : ''}
                              </ListItem>
                            </List>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </FullWidthListItem>)}
                </List>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Button size={buttonSize} view="secondary" stretching="filled">
                  Какая-то кнопка
                </Button>
              </Widget.Footer>
            </Widget>}
      // Slot для контента закрытой панели
      collapsedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <>
              <IconButton size={buttonSize} view="secondary" onClick={handleSearchClick}>
                <IconSearch />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <Dropdown items={contentItems} portal="document">
                <IconButton size={buttonSize} view="secondary">
                  <IconHierarchy />
                </IconButton>
              </Dropdown>
            </>}
      //   Slot для ниженй части закрытой панели
      collapsedFooterContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <IconButton size={buttonSize} view="secondary">
              <IconGroupOutline />
            </IconButton>} />
        <div style={{
        flex: 1,
        padding: s.x8,
        boxShadow: 'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
        backgroundColor: surfaceSolidCard,
        borderRadius: s.x8
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <H2 style={{
            marginBottom: s.x8
          }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <Button onClick={() => handleToggle(!isCollapsed)}>
              Открыть/Закрыть
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...(z=(A=h.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const n4=["LeftPanelSlots","LeftPanelExample"],m4=Object.freeze(Object.defineProperty({__proto__:null,LeftPanelExample:h,LeftPanelSlots:f,__namedExportsOrder:n4,default:Y},Symbol.toStringTag,{value:"Module"}));export{m4 as L};
