import{r as p,j as o}from"./react-CAOzMBF_.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{T as g,C as r}from"./TableCanvas-DlX-Wh2b.js";import{sL as I}from"./@salutejs/plasma-icons-Do5ggeDI.js";const T=[{id:1,longText:["Очень длинный русский текст переносится на несколько строк внутри узкой canvas-ячейки.","При maxLines нужно показать только разрешенное количество строк и поставить многоточие в конце последней видимой строки."].join(" "),iconText:["Длинное значение рядом с иконкой поиска должно занимать оставшееся место","и не налезать на правый графический элемент."].join(" "),shortText:"Короткий текст помещается полностью",unicode:["Unicode и emoji 👨‍👩‍👧‍👦 🇷🇺 café должны обрезаться без разрыва видимых символов.","Последняя строка получает аккуратный ellipsis."].join(" ")},{id:2,longText:["Табличная ячейка может содержать длинное описание на русском языке,","которое пользователь ожидает увидеть в одну или две строки без налезания на соседние колонки."].join(" "),iconText:["Значение статуса операции длиннее доступной области,","но иконка справа должна оставаться видимой."].join(" "),shortText:"Две короткие строки",unicode:"Короткий Unicode 👋 помещается"},{id:3,longText:["Select-like trigger оставляет справа место под управляющие элементы.","Текст переносится и clamp-ится внутри своей области, не уходя под иконку."].join(" "),iconText:["Поиск по контрагентам возвращает длинное название,","которое нужно показать рядом с иконкой без визуального конфликта."].join(" "),shortText:"Без обрезки",unicode:"Комбинируемые символы: З͑͗͒ӓ́͐м̈́͋е͑͝т́͗к͂̈́а͆͝ проверяют grapheme split"}],P={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasText",tags:["!autodocs"]},G=`
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
`,D=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;var y;const x={name:"Canvas.Text",args:{text:((y=T[0])==null?void 0:y.longText)??"",color:"#13181BF5",font:"14px",wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",ellipsis:"…",maxLines:2,lineHeight:1.2},argTypes:{text:{control:"text"},color:{control:"color"},font:{control:"text"},wordWrap:{control:"boolean"},overflow:{control:"radio",options:["visible","hidden"]},textOverflow:{control:"radio",options:["ellipsis","clip"]},ellipsis:{control:"text"},maxLines:{control:{type:"number",min:0,step:1}},lineHeight:{control:{type:"number",min:1,max:2,step:.1}}},...v({code:G,previewSource:"shown"}),render:d=>{const{text:t,color:i,font:a,wordWrap:e,overflow:n,textOverflow:c,ellipsis:u,maxLines:f,lineHeight:w}=d,C=f>0?f:void 0,A=p.useMemo(()=>[{key:"longText",name:"Длинный текст",width:230,renderCell:({row:l,theme:s})=>o.jsx(r.Container,{padding:8,alignItems:"center",children:o.jsx(r.Text,{color:i||s.textDark,font:a||s.baseFontStyle,wordWrap:e,overflow:n,textOverflow:c,ellipsis:u,maxLines:C,lineHeight:w,style:{flexGrow:1},autoTooltip:{enabled:!0},children:l.id===1?t:l.longText})})},{key:"iconText",name:"Текст + иконка",width:240,renderCell:({row:l,theme:s})=>o.jsxs(r.Container,{direction:"row",alignItems:"center",columnGap:8,padding:8,style:{width:"100%"},children:[o.jsx(r.Text,{color:i||s.textDark,font:a||s.baseFontStyle,wordWrap:e,overflow:n,textOverflow:c,ellipsis:u,maxLines:C,lineHeight:w,style:{flexGrow:1},children:l.iconText}),o.jsx(r.Icon,{icon:o.jsx(I,{}),size:16,color:s.tokens.textAccent,style:{flexShrink:0}})]})},{key:"shortText",name:"Короткий текст",width:190,renderCell:({row:l,theme:s})=>o.jsx(r.Container,{padding:8,alignItems:"center",children:o.jsx(r.Text,{color:i||s.textDark,font:a||s.baseFontStyle,wordWrap:e,overflow:n,textOverflow:c,ellipsis:u,maxLines:C,lineHeight:w,style:{flexGrow:1},children:l.shortText})})},{key:"unicode",name:"Unicode",width:230,renderCell:({row:l,theme:s})=>o.jsx(r.Container,{padding:8,alignItems:"center",children:o.jsx(r.Text,{color:i||s.textDark,font:a||s.baseFontStyle,wordWrap:e,overflow:n,textOverflow:c,ellipsis:u,maxLines:C,lineHeight:w,style:{flexGrow:1},children:l.unicode})})}],[t,i,a,e,n,c,u,C,w]);return o.jsx(g,{tableConfig:{containerStyle:{height:"320px"},rowHeight:()=>72},columnConfig:A,rows:T})}},E=[{id:"1",shortName:"СКМ Премьер",departPath:"Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Очень длинный хвост / Дополнительный участок проверки",subRows:[{id:"1-1",shortName:"Дочерняя роль",departPath:"Территориальный банк / ГОСБ / ВСП / Еще одно очень длинное подразделение для проверки ellipsis / Финальный отдел сопровождения"}]},{id:"2",shortName:"Руководитель ВСП",departPath:"Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Дополнительный длинный участок",subRows:[{id:"2-1",shortName:"Заместитель руководителя",departPath:"Территориальный банк / Аппарат ТБ / Еще более длинная организационная цепочка / Подразделение методологии и контроля"}]}],m={...v({preCode:D,previewSource:"shown"}),name:"Canvas.Text / built-in tree chevron ellipsis",render:()=>{const d=p.useMemo(()=>{const t=(e,n)=>o.jsxs(r.Container,{direction:"column",gap:10,padding:{top:n.cellVerticalPadding},style:{width:"100%"},children:[o.jsx(r.Link,{children:e.shortName}),o.jsx(r.Text,{color:n.tokens.textSecondary,wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",maxLines:1,style:{width:"100%"},children:e.departPath})]});return[{key:"shortName",name:"Краткое название",width:360,renderCell:({row:e,theme:n})=>t(e,n),subRow:{isColumnWithArrow:!0,renderSubRowCell:({row:e,theme:n})=>t(e,n)}}]},[]);return o.jsx(g,{tableConfig:{containerStyle:{height:"320px"},rowHeight:()=>72,subRows:{getSubRows:t=>t.subRows,rowKeyGetter:t=>t.id}},columnConfig:d,rows:E})}},h={...v({preCode:D,previewSource:"shown"}),name:"Canvas.Text / built-in tree chevron two-line ellipsis",render:()=>{const d=p.useMemo(()=>{const t=(e,n)=>o.jsxs(r.Container,{direction:"column",gap:10,padding:{top:n.cellVerticalPadding},style:{width:"100%"},children:[o.jsx(r.Link,{children:e.shortName}),o.jsx(r.Text,{color:n.tokens.textSecondary,wordWrap:!0,overflow:"hidden",textOverflow:"ellipsis",maxLines:2,style:{width:"100%"},children:e.departPath})]});return[{key:"shortName",name:"Краткое название",width:360,renderCell:({row:e,theme:n})=>t(e,n),subRow:{isColumnWithArrow:!0,renderSubRowCell:({row:e,theme:n})=>t(e,n)}}]},[]);return o.jsx(g,{tableConfig:{containerStyle:{height:"380px"},rowHeight:()=>96,subRows:{getSubRows:t=>t.subRows,rowKeyGetter:t=>t.id}},columnConfig:d,rows:E})}};var b,S,R;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(S=x.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,k,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var W,H,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const M=["Default","BuiltInTreeChevronEllipsisRegression","BuiltInTreeChevronTwoLineEllipsisRegression"],K=Object.freeze(Object.defineProperty({__proto__:null,BuiltInTreeChevronEllipsisRegression:m,BuiltInTreeChevronTwoLineEllipsisRegression:h,Default:x,__namedExportsOrder:M,default:P},Symbol.toStringTag,{value:"Module"}));export{K as C};
