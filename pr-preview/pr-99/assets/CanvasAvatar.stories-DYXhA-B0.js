import{d as n}from"./react-D2T61mpp.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{C as s,T as C}from"./TableCanvas-DrPLrYqV.js";import{a as r,t as p,b as y}from"./avatarFixtures-DxWEtnCu.js";const b={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"]},m=["s","m","l","xxl"].map((u,e)=>({id:e,size:u})),f=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize, type CanvasAvatarItem } from '@daisforge/ui/components/TableCanvas';

${y}
const rows = ${JSON.stringify(m,null,2)} as { id: number; size: AvatarSize }[];
`,a={name:"Содержимое и размеры",...d({preCode:f,type:"code",previewSource:"hidden"}),render:()=>{const u=[{key:"size",name:"Размер",width:110,renderCell:({row:e})=>n.jsxDEV(s.Text,{children:e.size},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:47,columnNumber:34},void 0)},...[{key:"photo",name:"Фото",url:r[0].url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:r[0].url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.svg"},{key:"alpha",name:"SVG без фона",url:p}].map(({key:e,name:l,...v})=>({key:e,name:l,width:150,copyData:"Анна Иванова",renderCell:({row:c})=>n.jsxDEV(s.Container,{padding:8,children:n.jsxDEV(s.Avatar,{name:"Анна Иванова",size:c.size,...v,tooltip:"Анна Иванова"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:75,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:74,columnNumber:11},void 0)}))];return n.jsxDEV(C,{rows:m,columnConfig:u,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:86,columnNumber:7},void 0)}};var t,o,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    preCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: () => {
    const columns: ColumnConfig<(typeof rows)[number]>[] = [{
      key: 'size',
      name: 'Размер',
      width: 110,
      renderCell: ({
        row
      }) => <Canvas.Text>{row.size}</Canvas.Text>
    }, ...[{
      key: 'photo',
      name: 'Фото',
      url: avatarItems[0]!.url
    }, {
      key: 'initials',
      name: 'Инициалы'
    }, {
      key: 'custom',
      name: 'customText',
      customText: 'AI',
      url: avatarItems[0]!.url
    }, {
      key: 'broken',
      name: 'Ошибка первой загрузки',
      url: '/canvas-images/missing.svg'
    }, {
      key: 'alpha',
      name: 'SVG без фона',
      url: transparentAvatarImage
    }].map(({
      key,
      name,
      ...content
    }) => ({
      key,
      name,
      width: 150,
      copyData: 'Анна Иванова',
      renderCell: ({
        row
      }: {
        row: (typeof rows)[number];
      }) => <Canvas.Container padding={8}>
            <Canvas.Avatar name="Анна Иванова" size={row.size} {...content} tooltip="Анна Иванова" />
          </Canvas.Container>
    }))];
    return <TableCanvas rows={rows} columnConfig={columns} tableConfig={{
      rowHeight: 104,
      containerStyle: {
        height: '490px'
      }
    }} />;
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["ContentAndSizes"],h=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:a,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{h as C};
