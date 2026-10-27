import{j as e}from"./react-CAOzMBF_.js";import{B as n}from"./Box-DvvYTz20.js";import{C as L}from"./Container-C5dULQPk.js";import{o as E}from"./@salutejs/sdds-finai-CKhMjg07.js";const F={title:"Композиции/Container",component:L,tags:["!autodocs"],decorators:[j=>e.jsx(n,{height:200,children:e.jsx(j,{})})],argTypes:{children:{description:`Контент контейнера. В split-режиме принимает массив из 2 или 3 элементов
      (для view '1/1/1' и '1/3/1' требуется 3 элемента)`,table:{defaultValue:{summary:"undefined"},type:{summary:"ReactNode | [ReactElement, ReactElement] | [ReactElement, ReactElement, ReactElement]"}}},stretch:{description:"Растянуть контейнер на все доступное пространство",table:{defaultValue:{summary:"false"}}},split:{description:`Разделить контейнер на колонки.
                
 В \`children\` при этом нужно передать массив элементов:
                
 - 2 элемента для view: '30/70', '20/80', '70/30', '80/20', 'fixed-fluid'
                
 - 3 элемента для view: '1/1/1', '1/3/1'`,table:{defaultValue:{summary:"false"}}},view:{options:["30/70","20/80","70/30","80/20","1/1/1","1/3/1","fixed-fluid"],control:{type:"select"},description:`Варианты отображения колонок:
            
 - '30/70', '20/80', '70/30', '80/20' - две колонки с разным соотношением
            
 - '1/1/1' - три равные колонки
            
 - '1/3/1' - две узкие колонки по бокам (20%) и широкая в центре (60%)
            
 - 'fixed-fluid' - фиксированная левая колонка и гибкая правая
            
 Можно задать только когда \`split === true\``,table:{defaultValue:{summary:"30/70"}}},className:{description:"prop для задания class-а",table:{defaultValue:{summary:"undefined"},type:{summary:"string | undefined"}}},css:{description:"prop для задания стилей",table:{type:{summary:"CSSObject | string | undefined"},defaultValue:{summary:"undefined"}}},fixedWidth:{description:"Ширина фиксированной колонки (только для view='fixed-fluid')",table:{type:{summary:"string | undefined"},defaultValue:{summary:"288px"}},if:{arg:"view",eq:"fixed-fluid"}}}},r={name:"Контейнер",args:{children:e.jsx(n,{height:"100%",background:"#ffdfdf",children:e.jsx(E,{children:"Some content in container"})})},parameters:{docs:{source:{format:"dedent",code:`
                    import { BodyL, Box, Container } from '@daisforge/ui';

                    <Box height={200}>
                        <Container>
                            <Box height="100%" background="#ffdfdf">
                               <BodyL>Some content in container</BodyL>
                            </Box>
                        </Container>
                    </Box>
                `}}}},t={args:{children:e.jsx(n,{height:"100%",background:"#ffdfdf"}),stretch:!0},name:"Растянуть",parameters:{docs:{source:{format:"dedent",code:`
                import { BodyL, Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch>
                        <Box height="100%" background="#ffdfdf" />
                    </Container>
                </Box>
            `}}}},o={args:{children:[e.jsx(n,{height:"100%",background:"#ffdfdf"}),e.jsx(n,{height:"100%",background:"#dfffdf"})],stretch:!0,split:!0,view:"30/70"},name:"Сплит (30/70)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="30/70">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `}}}},d={args:{children:[e.jsx(n,{height:"100%",background:"#ffdfdf"},"left"),e.jsx(n,{height:"100%",background:"#dfffdf"},"center"),e.jsx(n,{height:"100%",background:"#dfdfff"},"right")],stretch:!0,split:!0,view:"1/1/1"},name:"Сплит (1/1/1)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="1/1/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `}}}},i={args:{children:[e.jsx(n,{height:"100%",background:"#ffdfdf"},"left"),e.jsx(n,{height:"100%",background:"#dfffdf"},"center"),e.jsx(n,{height:"100%",background:"#dfdfff"},"right")],stretch:!0,split:!0,view:"1/3/1"},name:"Сплит (1/3/1)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={400}>
                    <Container stretch split view="1/3/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `}}}},f={args:{children:[e.jsx(n,{height:"100%",background:"#ffdfdf"},"left"),e.jsx(n,{height:"100%",background:"#dfffdf"},"right")],stretch:!0,split:!0,view:"fixed-fluid",fixedWidth:"300px"},name:"Сплит (fixed-fluid)",parameters:{docs:{source:{format:"dedent",code:`
                import { Box, Container } from '@daisforge/ui';

                <Box height={200}>
                    <Container stretch split view="fixed-fluid" >
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `}}}};var a,s,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,l,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=o.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var p,B,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(B=d.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var k,C,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,v,w;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(v=f.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const R=["Default","Stretch","Split","SplitThreeEqualColumns","SplitWideCenterColumn","SplitFixedFluid"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Split:o,SplitFixedFluid:f,SplitThreeEqualColumns:d,SplitWideCenterColumn:i,Stretch:t,__namedExportsOrder:R,default:F},Symbol.toStringTag,{value:"Module"}));export{O as C};
