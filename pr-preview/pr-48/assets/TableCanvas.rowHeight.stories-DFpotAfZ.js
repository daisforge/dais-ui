import{r as t,d as o}from"./react-D2T61mpp.js";import{c as w}from"./tableData-UCfjiBCh.js";import f from"./DocStoryTemplate-BCVoxXef.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{a as v}from"./StoriesUtils-B9VkOxbU.js";import{C as i,c as k,T as S}from"./TableCanvas-C0Fue0uU.js";const T={title:"Локальные компоненты/TableCanvas/RowHeight",tags:["!autodocs"],parameters:{docs:{page:f}},component:v},H=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,n={...y({preCode:H,previewSource:"shown"}),name:"Row height",render:()=>{const[m]=t.useState(w),c=t.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"loremIpsum",name:"Длинный текст",width:500,renderCell:({row:a,theme:e})=>o.jsxDEV(i.Container,{padding:8,children:o.jsxDEV(i.Container,{children:o.jsxDEV(i.Text,{font:e.baseFontStyle,lineHeight:1.85,wordWrap:!0,children:a.loremIpsum},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"complete",name:"% Complete"}],[]),d=t.useCallback((a,e)=>{const h=Math.round(40.69565217391305),g=22-2,C=a.loremIpsum.length,p=Math.ceil(C/h),b=Number(k[e.rowSizeName].cell["padding-block"].slice(0,-2)),s=g*p+b*2;return s>e.rowSizeValue?s:e.rowSizeValue},[]);return o.jsxDEV(S,{tableConfig:{containerStyle:{height:700},rowHeight:d},columnConfig:c,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.RowHeight/TableCanvas.rowHeight.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,l,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'loremIpsum',
      name: 'Длинный текст',
      width: 500,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Container>
                <Canvas.Text font={theme.baseFontStyle} lineHeight={1.85} wordWrap>
                  {row.loremIpsum}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;
      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;
      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2));
      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;
      return neededHeight > currenRowSize.rowSizeValue ? neededHeight : currenRowSize.rowSizeValue;
    }, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      rowHeight
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const O=["RowHeight"],j=Object.freeze(Object.defineProperty({__proto__:null,RowHeight:n,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{j as T};
