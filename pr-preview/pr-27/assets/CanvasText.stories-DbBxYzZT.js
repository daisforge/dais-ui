import{r as h,d as o}from"./react-D2T61mpp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as f,C as s}from"./TableCanvas-BKybB4-_.js";import{sz as V}from"./@salutejs/plasma-icons-C9J8k7cv.js";const b=[{id:1,longText:["Очень длинный русский текст переносится на несколько строк внутри узкой canvas-ячейки.","При maxLines нужно показать только разрешенное количество строк и поставить многоточие в конце последней видимой строки."].join(" "),iconText:["Длинное значение рядом с иконкой поиска должно занимать оставшееся место","и не налезать на правый графический элемент."].join(" "),shortText:"Короткий текст помещается полностью",unicode:["Unicode и emoji 👨‍👩‍👧‍👦 🇷🇺 café должны обрезаться без разрыва видимых символов.","Последняя строка получает аккуратный ellipsis."].join(" ")},{id:2,longText:["Табличная ячейка может содержать длинное описание на русском языке,","которое пользователь ожидает увидеть в одну или две строки без налезания на соседние колонки."].join(" "),iconText:["Значение статуса операции длиннее доступной области,","но иконка справа должна оставаться видимой."].join(" "),shortText:"Две короткие строки",unicode:"Короткий Unicode 👋 помещается"},{id:3,longText:["Select-like trigger оставляет справа место под управляющие элементы.","Текст переносится и clamp-ится внутри своей области, не уходя под иконку."].join(" "),iconText:["Поиск по контрагентам возвращает длинное название,","которое нужно показать рядом с иконкой без визуального конфликта."].join(" "),shortText:"Без обрезки",unicode:"Комбинируемые символы: З͑͗͒ӓ́͐м̈́͋е͑͝т́͗к͂̈́а͆͝ проверяют grapheme split"}],A={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasText",tags:["!autodocs"]},I=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'description',
    name: 'Описание',
    width: 230,
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8} alignItems="center">
        <Canvas.Text
          color={theme.textDark}
          font={theme.baseFontStyle}
          wordWrap
          overflow="hidden"
          textOverflow="ellipsis"
          maxLines={2}
          lineHeight={1.2}
          style={{ flexGrow: 1 }}
        >
          {row.description}
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{
    containerStyle: { height: '320px' },
    rowHeight: () => 72,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`,W=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;var g;const x={name:"Canvas.Text",args:{text:((g=b[0])==null?void 0:g.longText)??"",color:"#13181BF5",font:"14px",wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",ellipsis:"…",maxLines:2,lineHeight:1.2},argTypes:{text:{control:"text"},color:{control:"color"},font:{control:"text"},wordWrap:{control:"boolean"},overflow:{control:"radio",options:["visible","hidden"]},textOverflow:{control:"radio",options:["ellipsis","clip"]},ellipsis:{control:"text"},maxLines:{control:{type:"number",min:0,step:1}},lineHeight:{control:{type:"number",min:1,max:2,step:.1}}},...p({code:I,previewSource:"shown"}),render:d=>{const{text:r,color:i,font:l,wordWrap:e,overflow:n,textOverflow:u,ellipsis:c,maxLines:T,lineHeight:m}=d,C=T>0?T:void 0,O=h.useMemo(()=>[{key:"longText",name:"Длинный текст",width:230,renderCell:({row:a,theme:t})=>o.jsxDEV(s.Container,{padding:8,alignItems:"center",children:o.jsxDEV(s.Text,{color:i||t.textDark,font:l||t.baseFontStyle,wordWrap:e,overflow:n,textOverflow:u,ellipsis:c,maxLines:C,lineHeight:m,style:{flexGrow:1},autoTooltip:{enabled:!0},children:a.id===1?r:a.longText},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:186,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:185,columnNumber:13},void 0)},{key:"iconText",name:"Текст + иконка",width:240,renderCell:({row:a,theme:t})=>o.jsxDEV(s.Container,{direction:"row",alignItems:"center",columnGap:8,padding:8,style:{width:"100%"},children:[o.jsxDEV(s.Text,{color:i||t.textDark,font:l||t.baseFontStyle,wordWrap:e,overflow:n,textOverflow:u,ellipsis:c,maxLines:C,lineHeight:m,style:{flexGrow:1},children:a.iconText},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:217,columnNumber:15},void 0),o.jsxDEV(s.Icon,{icon:o.jsxDEV(V,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:231,columnNumber:23},void 0),size:16,color:t.tokens.textAccent,style:{flexShrink:0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:230,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:210,columnNumber:13},void 0)},{key:"shortText",name:"Короткий текст",width:190,renderCell:({row:a,theme:t})=>o.jsxDEV(s.Container,{padding:8,alignItems:"center",children:o.jsxDEV(s.Text,{color:i||t.textDark,font:l||t.baseFontStyle,wordWrap:e,overflow:n,textOverflow:u,ellipsis:c,maxLines:C,lineHeight:m,style:{flexGrow:1},children:a.shortText},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:245,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:244,columnNumber:13},void 0)},{key:"unicode",name:"Unicode",width:230,renderCell:({row:a,theme:t})=>o.jsxDEV(s.Container,{padding:8,alignItems:"center",children:o.jsxDEV(s.Text,{color:i||t.textDark,font:l||t.baseFontStyle,wordWrap:e,overflow:n,textOverflow:u,ellipsis:c,maxLines:C,lineHeight:m,style:{flexGrow:1},children:a.unicode},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:267,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:266,columnNumber:13},void 0)}],[r,i,l,e,n,u,c,C,m]);return o.jsxDEV(f,{tableConfig:{containerStyle:{height:"320px"},rowHeight:()=>72},columnConfig:O,rows:b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:298,columnNumber:7},void 0)}},H=[{id:"1",shortName:"СКМ Премьер",departPath:"Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Очень длинный хвост / Дополнительный участок проверки",subRows:[{id:"1-1",shortName:"Дочерняя роль",departPath:"Территориальный банк / ГОСБ / ВСП / Еще одно очень длинное подразделение для проверки ellipsis / Финальный отдел сопровождения"}]},{id:"2",shortName:"Руководитель ВСП",departPath:"Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Дополнительный длинный участок",subRows:[{id:"2-1",shortName:"Заместитель руководителя",departPath:"Территориальный банк / Аппарат ТБ / Еще более длинная организационная цепочка / Подразделение методологии и контроля"}]}],v={...p({preCode:W,previewSource:"shown"}),name:"Canvas.Text / built-in tree chevron ellipsis",render:()=>{const d=h.useMemo(()=>{const r=(e,n)=>o.jsxDEV(s.Container,{direction:"column",gap:10,padding:{top:n.cellVerticalPadding},style:{width:"100%"},children:[o.jsxDEV(s.Link,{children:e.shortName},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:379,columnNumber:11},void 0),o.jsxDEV(s.Text,{color:n.tokens.textSecondary,wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",maxLines:1,style:{width:"100%"},children:e.departPath},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:381,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:371,columnNumber:9},void 0);return[{key:"shortName",name:"Краткое название",width:360,renderCell:({row:e,theme:n})=>r(e,n),subRow:{isColumnWithArrow:!0,renderSubRowCell:({row:e,theme:n})=>r(e,n)}}]},[]);return o.jsxDEV(f,{tableConfig:{containerStyle:{height:"320px"},rowHeight:()=>72,subRows:{getSubRows:r=>r.subRows,rowKeyGetter:r=>r.id}},columnConfig:d,rows:H},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:421,columnNumber:7},void 0)}},w={...p({preCode:W,previewSource:"shown"}),name:"Canvas.Text / built-in tree chevron two-line ellipsis",render:()=>{const d=h.useMemo(()=>{const r=(e,n)=>o.jsxDEV(s.Container,{direction:"column",gap:10,padding:{top:n.cellVerticalPadding},style:{width:"100%"},children:[o.jsxDEV(s.Link,{children:e.shortName},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:460,columnNumber:11},void 0),o.jsxDEV(s.Text,{color:n.tokens.textSecondary,wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",maxLines:2,style:{width:"100%"},children:e.departPath},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:462,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:452,columnNumber:9},void 0);return[{key:"shortName",name:"Краткое название",width:360,renderCell:({row:e,theme:n})=>r(e,n),subRow:{isColumnWithArrow:!0,renderSubRowCell:({row:e,theme:n})=>r(e,n)}}]},[]);return o.jsxDEV(f,{tableConfig:{containerStyle:{height:"380px"},rowHeight:()=>96,subRows:{getSubRows:r=>r.subRows,rowKeyGetter:r=>r.id}},columnConfig:d,rows:H},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasText/CanvasText.stories.tsx",lineNumber:502,columnNumber:7},void 0)}};var k,y,N;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Canvas.Text',
  args: {
    text: rows[0]?.longText ?? '',
    color: '#13181BF5',
    font: '14px',
    wordWrap: true,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ellipsis: '…',
    maxLines: 2,
    lineHeight: 1.2
  },
  argTypes: {
    text: {
      control: 'text'
    },
    color: {
      control: 'color'
    },
    font: {
      control: 'text'
    },
    wordWrap: {
      control: 'boolean'
    },
    overflow: {
      control: 'radio',
      options: ['visible', 'hidden']
    },
    textOverflow: {
      control: 'radio',
      options: ['ellipsis', 'clip']
    },
    ellipsis: {
      control: 'text'
    },
    maxLines: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    },
    lineHeight: {
      control: {
        type: 'number',
        min: 1,
        max: 2,
        step: 0.1
      }
    }
  },
  ...storySourceDoc({
    code: canvasTextCode,
    previewSource: 'shown'
  }),
  render: args => {
    const {
      text,
      color,
      font,
      wordWrap,
      overflow,
      textOverflow,
      ellipsis,
      maxLines,
      lineHeight
    } = args as CanvasTextStoryArgs;
    const resolvedMaxLines = maxLines > 0 ? maxLines : undefined;
    const columnConfig = useMemo<readonly ColumnConfig<CanvasTextRow>[]>(() => [{
      key: 'longText',
      name: 'Длинный текст',
      width: 230,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text color={color || theme.textDark} font={font || theme.baseFontStyle} wordWrap={wordWrap} overflow={overflow} textOverflow={textOverflow} ellipsis={ellipsis} maxLines={resolvedMaxLines} lineHeight={lineHeight} style={{
          flexGrow: 1
        }} autoTooltip={{
          enabled: true
        }}>
                {row.id === 1 ? text : row.longText}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'iconText',
      name: 'Текст + иконка',
      width: 240,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" columnGap={8} padding={8} style={{
        width: '100%'
      }}>
              <Canvas.Text color={color || theme.textDark} font={font || theme.baseFontStyle} wordWrap={wordWrap} overflow={overflow} textOverflow={textOverflow} ellipsis={ellipsis} maxLines={resolvedMaxLines} lineHeight={lineHeight} style={{
          flexGrow: 1
        }}>
                {row.iconText}
              </Canvas.Text>
              <Canvas.Icon icon={<IconSearch />} size={16} color={theme.tokens.textAccent} style={{
          flexShrink: 0
        }} />
            </Canvas.Container>
    }, {
      key: 'shortText',
      name: 'Короткий текст',
      width: 190,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text color={color || theme.textDark} font={font || theme.baseFontStyle} wordWrap={wordWrap} overflow={overflow} textOverflow={textOverflow} ellipsis={ellipsis} maxLines={resolvedMaxLines} lineHeight={lineHeight} style={{
          flexGrow: 1
        }}>
                {row.shortText}
              </Canvas.Text>
            </Canvas.Container>
    }, {
      key: 'unicode',
      name: 'Unicode',
      width: 230,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text color={color || theme.textDark} font={font || theme.baseFontStyle} wordWrap={wordWrap} overflow={overflow} textOverflow={textOverflow} ellipsis={ellipsis} maxLines={resolvedMaxLines} lineHeight={lineHeight} style={{
          flexGrow: 1
        }}>
                {row.unicode}
              </Canvas.Text>
            </Canvas.Container>
    }], [text, color, font, wordWrap, overflow, textOverflow, ellipsis, resolvedMaxLines, lineHeight]);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '320px'
      },
      rowHeight: () => 72
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(N=(y=x.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var E,S,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: treeChevronEllipsisPreCode,
    previewSource: 'shown'
  }),
  name: 'Canvas.Text / built-in tree chevron ellipsis',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<CanvasTextTreeRow>[]>(() => {
      const renderCellContent = (row: CanvasTextTreeRow, theme: CanvasTextTreeCellTheme) => <Canvas.Container direction="column" gap={10} padding={{
        top: theme.cellVerticalPadding
      }} style={{
        width: '100%'
      }}>
          <Canvas.Link>{row.shortName}</Canvas.Link>

          <Canvas.Text color={theme.tokens.textSecondary} wordWrap overflow="hidden" textOverflow="ellipsis" maxLines={1} style={{
          width: '100%'
        }}>
            {row.departPath}
          </Canvas.Text>
        </Canvas.Container>;
      const renderCell: CanvasTextTreeRenderCell = ({
        row,
        theme
      }) => renderCellContent(row, theme);
      const renderSubRowCell: CanvasTextTreeSubRowRenderCell = ({
        row,
        theme
      }) => renderCellContent(row as CanvasTextTreeRow, theme as CanvasTextTreeCellTheme);
      return [{
        key: 'shortName',
        name: 'Краткое название',
        width: 360,
        renderCell,
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell
        }
      }];
    }, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '320px'
      },
      rowHeight: () => 72,
      subRows: {
        getSubRows: row => row.subRows,
        rowKeyGetter: row => row.id
      }
    }} columnConfig={columnConfig} rows={treeEllipsisRows} />;
  }
}`,...(R=(S=v.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var D,L,j;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: treeChevronEllipsisPreCode,
    previewSource: 'shown'
  }),
  name: 'Canvas.Text / built-in tree chevron two-line ellipsis',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<CanvasTextTreeRow>[]>(() => {
      const renderCellContent = (row: CanvasTextTreeRow, theme: CanvasTextTreeCellTheme) => <Canvas.Container direction="column" gap={10} padding={{
        top: theme.cellVerticalPadding
      }} style={{
        width: '100%'
      }}>
          <Canvas.Link>{row.shortName}</Canvas.Link>

          <Canvas.Text color={theme.tokens.textSecondary} wordWrap overflow="hidden" textOverflow="ellipsis" maxLines={2} style={{
          width: '100%'
        }}>
            {row.departPath}
          </Canvas.Text>
        </Canvas.Container>;
      const renderCell: CanvasTextTreeRenderCell = ({
        row,
        theme
      }) => renderCellContent(row, theme);
      const renderSubRowCell: CanvasTextTreeSubRowRenderCell = ({
        row,
        theme
      }) => renderCellContent(row as CanvasTextTreeRow, theme as CanvasTextTreeCellTheme);
      return [{
        key: 'shortName',
        name: 'Краткое название',
        width: 360,
        renderCell,
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell
        }
      }];
    }, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '380px'
      },
      rowHeight: () => 96,
      subRows: {
        getSubRows: row => row.subRows,
        rowKeyGetter: row => row.id
      }
    }} columnConfig={columnConfig} rows={treeEllipsisRows} />;
  }
}`,...(j=(L=w.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const P=["Default","BuiltInTreeChevronEllipsisRegression","BuiltInTreeChevronTwoLineEllipsisRegression"],_=Object.freeze(Object.defineProperty({__proto__:null,BuiltInTreeChevronEllipsisRegression:v,BuiltInTreeChevronTwoLineEllipsisRegression:w,Default:x,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{_ as C};
