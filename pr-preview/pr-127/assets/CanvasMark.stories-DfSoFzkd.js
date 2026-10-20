import{r as l,d as a}from"./react-D2T61mpp.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as u,T as d}from"./TableCanvas-dSeoqcn-.js";const m=[{id:1,text:"Подсветка фрагмента внутри строки: часть текста выделена пластиной."},{id:2,text:"Длинный текст с выделенным фрагментом переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."},{id:3,text:"Без выделения: обычный текст без Canvas.Mark."}],c={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasMark",tags:["!autodocs"]},v=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'text',
    name: 'Текст',
    width: 420,
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          Подсветка <Canvas.Mark color="#ffe27a">фрагмента</Canvas.Mark> внутри строки
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '320px' }, rowHeight: 'auto' }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,e={name:"Canvas.Mark",...C({code:v,previewSource:"shown"}),render:()=>{const t=l.useMemo(()=>[{key:"id",name:"id",width:60},{key:"text",name:"Текст с выделением",width:420,renderCell:({row:n,theme:i})=>a.jsxDEV(u.Container,{padding:{left:8,right:8},children:a.jsxDEV(u.Text,{font:i.baseFontStyle,wordWrap:!0,children:[n.id===1&&a.jsxDEV(a.Fragment,{children:["Подсветка"," ",a.jsxDEV(u.Mark,{color:"#ffe27a",children:"фрагмента"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:77,columnNumber:21},void 0)," внутри строки"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:75,columnNumber:19},void 0),n.id===2&&a.jsxDEV(a.Fragment,{children:["Длинный текст с"," ",a.jsxDEV(u.Mark,{color:"#ffe27a",children:"выделенным фрагментом"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:84,columnNumber:21},void 0)," ","переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:82,columnNumber:19},void 0),n.id===3&&n.text]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:73,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:72,columnNumber:13},void 0)}],[]);return a.jsxDEV(d,{tableConfig:{containerStyle:{height:320},rowHeight:"auto"},columnConfig:t,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasMark/CanvasMark.stories.tsx",lineNumber:101,columnNumber:7},void 0)}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Canvas.Mark',
  ...storySourceDoc({
    code: canvasMarkCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<CanvasMarkRow>[]>(() => [{
      key: 'id',
      name: 'id',
      width: 60
    }, {
      key: 'text',
      name: 'Текст с выделением',
      width: 420,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={{
        left: 8,
        right: 8
      }}>
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.id === 1 && <>
                    Подсветка{' '}
                    <Canvas.Mark color="#ffe27a">фрагмента</Canvas.Mark> внутри
                    строки
                  </>}
                {row.id === 2 && <>
                    Длинный текст с{' '}
                    <Canvas.Mark color="#ffe27a">
                      выделенным фрагментом
                    </Canvas.Mark>{' '}
                    переносится на несколько строк, и пластина ложится на каждую
                    строку, где есть фрагмент.
                  </>}
                {row.id === 3 && row.text}
              </Canvas.Text>
            </Canvas.Container>
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 320
      },
      rowHeight: 'auto'
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const f=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:c},Symbol.toStringTag,{value:"Module"}));export{h as C};
