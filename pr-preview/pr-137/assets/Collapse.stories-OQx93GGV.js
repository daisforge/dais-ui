import{j as n,r as Q}from"./react-CAOzMBF_.js";import{B as V}from"./Box-DvvYTz20.js";import{C as L}from"./Collapse-CblE70vy.js";import{t as d}from"./@salutejs/sdds-finai-CKhMjg07.js";const e=u=>{const[l,C]=Q.useState(!1);return n.jsxs(V,{display:"flex",flexDirection:"column",gap:16,children:[n.jsx(d,{onClick:()=>C(c=>!c),children:l?"Закрыть":"Открыть"}),n.jsx(L,{isOpen:l,...u,children:n.jsx(d,{onClick:()=>C(c=>!c),children:l?"Закрыть":"Открыть"})})]})},X={title:"Локальные компоненты/Collapse",component:L,tags:["!autodocs"]},i={name:"Collapse",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} {...args}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},o={args:{orientation:"horizontal"},name:"Горизонтальная ориентация",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} orientation={'horizontal'}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},s={args:{unMountOnClose:!0},name:"Unmount",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} unMountOnClose>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},t={args:{duration:5},name:"Длительность анимации",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} duration={5}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},r={args:{animation:{open:"steps(3)",close:"cubic-bezier(.29, 1.01, 1, -0.68)"},duration:2},name:"Тип анимации",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse
                                isOpen={isOpen}
                                duration={2}
                                animation={{
                                    open: 'steps(3)',
                                    close: 'cubic-bezier(.29, 1.01, 1, -0.68)',
                                }}
                            >
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},p={args:{sizeOnOpen:20},name:"Размер открытого контейнера",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnOpen={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})},a={args:{sizeOnClose:20},name:"Размер закрытого контейнера",parameters:{docs:{source:{format:"dedent",code:`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnClose={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `}}},render:u=>n.jsx(e,{...u})};var B,m,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Collapse',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} {...args}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(O=(m=i.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};var f,x,E,D,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  name: 'Горизонтальная ориентация',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} orientation={'horizontal'}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Просом `orientation` можно задавать направление открытия/закрытия.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.description}}};var F,A,S,I,y;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    unMountOnClose: true
  },
  name: 'Unmount',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} unMountOnClose>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"`unMountOnClose: true` - При закрытии элемента, элемент будет размонтирован\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.description}}};var k,z,b,h,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  name: 'Длительность анимации',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} duration={5}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(b=(z=t.parameters)==null?void 0:z.docs)==null?void 0:b.source},description:{story:"Есть возможность задать длительность анимации `duration: number` в секундах.\nВ данном примере анимация длится 5 секунд\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.description}}};var R,M,T,w,_;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    animation: {
      open: 'steps(3)',
      close: 'cubic-bezier(.29, 1.01, 1, -0.68)'
    },
    duration: 2
  },
  name: 'Тип анимации',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse
                                isOpen={isOpen}
                                duration={2}
                                animation={{
                                    open: 'steps(3)',
                                    close: 'cubic-bezier(.29, 1.01, 1, -0.68)',
                                }}
                            >
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"Есть возможность задать тип анимации (default - `linear`). [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)\n\n`animation?: TransitionTimingFunction | { open: TransitionTimingFunction, close: TransitionTimingFunction }`\n\nВ данном примере анимация раскрытия `steps(3)`, а анимация закрытия `cubic-bezier(.29, 1.01, 1, -0.68)`\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(_=(w=r.parameters)==null?void 0:w.docs)==null?void 0:_.description}}};var U,v,H,N,P;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    sizeOnOpen: 20
  },
  name: 'Размер открытого контейнера',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnOpen={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(H=(v=p.parameters)==null?void 0:v.docs)==null?void 0:H.source},description:{story:"Есть возможность контролировать размер раскрытия контейнера `sizeOnOpen`.\nВ данном примере контейнер раскрывается на `20px`.\n\n*`Collapse` работает более корректно, когда установлен размер*\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var W,q,G,J,K;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    sizeOnClose: 20
  },
  name: 'Размер закрытого контейнера',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { Box, Button, Collapse } from '@daisforge/ui';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnClose={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                \`
      }
    }
  },
  render: args => <StoryRender {...args} />
}`,...(G=(q=a.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Есть возможность контролировать размер контейнера в закрытом состоянии `sizeOnClose`.\nВ данном примере контейнер недоскрывается на `20px`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const Y=["Default","Horizontal","Unmount","Duration","Animation","OpenedSize","ClosedSize"],e4=Object.freeze(Object.defineProperty({__proto__:null,Animation:r,ClosedSize:a,Default:i,Duration:t,Horizontal:o,OpenedSize:p,Unmount:s,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{e4 as C};
