import{d as e,r as L}from"./react-D2T61mpp.js";import{B as Q}from"./Box-CTSbJM1M.js";import{C as K}from"./Collapse-u4wVL0Hd.js";import{b as C}from"./@salutejs/sdds-finai-DNM8nTh9.js";const n=u=>{const[l,d]=L.useState(!1);return e.jsxDEV(Q,{display:"flex",flexDirection:"column",gap:16,children:[e.jsxDEV(C,{onClick:()=>d(c=>!c),children:l?"Закрыть":"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:11,columnNumber:7},void 0),e.jsxDEV(K,{isOpen:l,...u,children:e.jsxDEV(C,{onClick:()=>d(c=>!c),children:l?"Закрыть":"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:15,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:14,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:10,columnNumber:5},void 0)},X={title:"Локальные компоненты/Collapse",component:K,tags:["!autodocs"]},p={name:"Collapse",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:60,columnNumber:21},void 0)},o={args:{orientation:"horizontal"},name:"Горизонтальная ориентация",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:98,columnNumber:21},void 0)},s={args:{unMountOnClose:!0},name:"Unmount",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:136,columnNumber:21},void 0)},t={args:{duration:5},name:"Длительность анимации",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:175,columnNumber:21},void 0)},r={args:{animation:{open:"steps(3)",close:"cubic-bezier(.29, 1.01, 1, -0.68)"},duration:2},name:"Тип анимации",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:228,columnNumber:21},void 0)},i={args:{sizeOnOpen:20},name:"Размер открытого контейнера",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:269,columnNumber:21},void 0)},a={args:{sizeOnClose:20},name:"Размер закрытого контейнера",parameters:{docs:{source:{format:"dedent",code:`
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
                `}}},render:u=>e.jsxDEV(n,{...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Collapse/Collapse.stories.tsx",lineNumber:308,columnNumber:21},void 0)};var m,B,O;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var f,x,E,D,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Просом `orientation` можно задавать направление открытия/закрытия.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.description}}};var k,F,A,b,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(F=s.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"`unMountOnClose: true` - При закрытии элемента, элемент будет размонтирован\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var I,y,N,z,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(y=t.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:"Есть возможность задать длительность анимации `duration: number` в секундах.\nВ данном примере анимация длится 5 секунд\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(h=(z=t.parameters)==null?void 0:z.docs)==null?void 0:h.description}}};var w,j,v,V,R;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(j=r.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:"Есть возможность задать тип анимации (default - `linear`). [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)\n\n`animation?: TransitionTimingFunction | { open: TransitionTimingFunction, close: TransitionTimingFunction }`\n\nВ данном примере анимация раскрытия `steps(3)`, а анимация закрытия `cubic-bezier(.29, 1.01, 1, -0.68)`\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(R=(V=r.parameters)==null?void 0:V.docs)==null?void 0:R.description}}};var M,T,_,U,H;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"Есть возможность контролировать размер раскрытия контейнера `sizeOnOpen`.\nВ данном примере контейнер раскрывается на `20px`.\n\n*`Collapse` работает более корректно, когда установлен размер*\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(H=(U=i.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};var P,W,q,G,J;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(W=a.parameters)==null?void 0:W.docs)==null?void 0:q.source},description:{story:"Есть возможность контролировать размер контейнера в закрытом состоянии `sizeOnClose`.\nВ данном примере контейнер недоскрывается на `20px`.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(J=(G=a.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const Y=["Default","Horizontal","Unmount","Duration","Animation","OpenedSize","ClosedSize"],n4=Object.freeze(Object.defineProperty({__proto__:null,Animation:r,ClosedSize:a,Default:p,Duration:t,Horizontal:o,OpenedSize:i,Unmount:s,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{n4 as C};
