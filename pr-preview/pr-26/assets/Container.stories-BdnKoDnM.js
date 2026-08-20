import{d as e}from"./react-D2T61mpp.js";import{B as n}from"./Box-_3jV5Wqs.js";import{C as S}from"./Container-2vq_eQ4-.js";import{r as V}from"./@salutejs/sdds-finai-O6aB6XRK.js";const D={title:"Композиции/Container",component:S,tags:["!autodocs"],decorators:[E=>e.jsxDEV(n,{height:200,children:e.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:13,columnNumber:7},void 0)],argTypes:{children:{description:`Контент контейнера. В split-режиме принимает массив из 2 или 3 элементов
      (для view '1/1/1' и '1/3/1' требуется 3 элемента)`,table:{defaultValue:{summary:"undefined"},type:{summary:"ReactNode | [ReactElement, ReactElement] | [ReactElement, ReactElement, ReactElement]"}}},stretch:{description:"Растянуть контейнер на все доступное пространство",table:{defaultValue:{summary:"false"}}},split:{description:`Разделить контейнер на колонки.
                
 В \`children\` при этом нужно передать массив элементов:
                
 - 2 элемента для view: '30/70', '20/80', '70/30', '80/20', 'fixed-fluid'
                
 - 3 элемента для view: '1/1/1', '1/3/1'`,table:{defaultValue:{summary:"false"}}},view:{options:["30/70","20/80","70/30","80/20","1/1/1","1/3/1","fixed-fluid"],control:{type:"select"},description:`Варианты отображения колонок:
            
 - '30/70', '20/80', '70/30', '80/20' - две колонки с разным соотношением
            
 - '1/1/1' - три равные колонки
            
 - '1/3/1' - две узкие колонки по бокам (20%) и широкая в центре (60%)
            
 - 'fixed-fluid' - фиксированная левая колонка и гибкая правая
            
 Можно задать только когда \`split === true\``,table:{defaultValue:{summary:"30/70"}}},className:{description:"prop для задания class-а",table:{defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},css:{description:"prop для задания стилей",table:{type:{summary:"CSSObject | string | undefined"},defaultValue:{summary:"undefined"}}},fixedWidth:{description:"Ширина фиксированной колонки (только для view='fixed-fluid')",table:{type:{summary:"string | undefined"},defaultValue:{summary:"288px"}},if:{arg:"view",eq:"fixed-fluid"}}}},r={name:"Контейнер",args:{children:e.jsxDEV(n,{height:"100%",background:"#ffdfdf",children:e.jsxDEV(V,{children:"Some content in container"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:106,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:105,columnNumber:7},void 0)},parameters:{docs:{source:{format:"dedent",code:`
                    import { BodyL, Box, Container } from '@daisforge/ui';

                    <Box height={200}>
                        <Container>
                            <Box height="100%" background="#ffdfdf">
                               <BodyL>Some content in container</BodyL>
                            </Box>
                        </Container>
                    </Box>
                `}}}},o={args:{children:e.jsxDEV(n,{height:"100%",background:"#ffdfdf"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:132,columnNumber:15},void 0),stretch:!0},name:"Растянуть",parameters:{docs:{source:{format:"dedent",code:`
                import { BodyL, Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch>
                        <Box height="100%" background="#ffdfdf" />
                    </Container>
                </Box>
            `}}}},i={args:{children:[e.jsxDEV(n,{height:"100%",background:"#ffdfdf"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:157,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfffdf"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:158,columnNumber:7},void 0)],stretch:!0,split:!0,view:"30/70"},name:"Сплит (30/70)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="30/70">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `}}}},t={args:{children:[e.jsxDEV(n,{height:"100%",background:"#ffdfdf"},"left",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:187,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfffdf"},"center",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:188,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfdfff"},"right",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:189,columnNumber:7},void 0)],stretch:!0,split:!0,view:"1/1/1"},name:"Сплит (1/1/1)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="1/1/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `}}}},a={args:{children:[e.jsxDEV(n,{height:"100%",background:"#ffdfdf"},"left",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:219,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfffdf"},"center",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:220,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfdfff"},"right",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:221,columnNumber:7},void 0)],stretch:!0,split:!0,view:"1/3/1"},name:"Сплит (1/3/1)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={400}>
                    <Container stretch split view="1/3/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `}}}},s={args:{children:[e.jsxDEV(n,{height:"100%",background:"#ffdfdf"},"left",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:251,columnNumber:7},void 0),e.jsxDEV(n,{height:"100%",background:"#dfffdf"},"right",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Container/Container.stories.tsx",lineNumber:252,columnNumber:7},void 0)],stretch:!0,split:!0,view:"fixed-fluid",fixedWidth:"300px"},name:"Сплит (fixed-fluid)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="fixed-fluid" >
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `}}}};var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Контейнер',
  args: {
    children: <Box height="100%" background="#ffdfdf">
        <BodyL>Some content in container</BodyL>
      </Box>
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                    import { BodyL, Box, Container } from '@daisforge/ui';

                    <Box height={200}>
                        <Container>
                            <Box height="100%" background="#ffdfdf">
                               <BodyL>Some content in container</BodyL>
                            </Box>
                        </Container>
                    </Box>
                \`
      }
    }
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var c,m,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Box height="100%" background="#ffdfdf" />,
    stretch: true
  },
  name: 'Растянуть',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                import { BodyL, Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch>
                        <Box height="100%" background="#ffdfdf" />
                    </Container>
                </Box>
            \`
      }
    }
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var l,g,x;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [<Box height="100%" background="#ffdfdf" />, <Box height="100%" background="#dfffdf" />],
    stretch: true,
    split: true,
    view: '30/70'
  },
  name: 'Сплит (30/70)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="30/70">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            \`
      }
    }
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var p,b,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<Box key="left" height="100%" background="#ffdfdf" />, <Box key="center" height="100%" background="#dfffdf" />, <Box key="right" height="100%" background="#dfdfff" />],
    stretch: true,
    split: true,
    view: '1/1/1'
  },
  name: 'Сплит (1/1/1)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="1/1/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            \`
      }
    }
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var B,C,y;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: [<Box key="left" height="100%" background="#ffdfdf" />, <Box key="center" height="100%" background="#dfffdf" />, <Box key="right" height="100%" background="#dfdfff" />],
    stretch: true,
    split: true,
    view: '1/3/1'
  },
  name: 'Сплит (1/3/1)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                import { Box, Container } from '@daisforge/ui';

                <Box height={400}>
                    <Container stretch split view="1/3/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            \`
      }
    }
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var N,w,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: [<Box key="left" height="100%" background="#ffdfdf" />, <Box key="right" height="100%" background="#dfffdf" />],
    stretch: true,
    split: true,
    view: 'fixed-fluid',
    fixedWidth: '300px'
  },
  name: 'Сплит (fixed-fluid)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: \`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="fixed-fluid" >
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            \`
      }
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const j=["Default","Stretch","Split","SplitThreeEqualColumns","SplitWideCenterColumn","SplitFixedFluid"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Split:i,SplitFixedFluid:s,SplitThreeEqualColumns:t,SplitWideCenterColumn:a,Stretch:o,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{W as C};
