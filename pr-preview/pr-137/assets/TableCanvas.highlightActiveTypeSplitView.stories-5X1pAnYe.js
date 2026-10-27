import{r as p,j as u}from"./react-CAOzMBF_.js";import{a as D}from"./tableData-DVJFoYoT.js";import{s as j}from"./storySourceDoc-tVKyHcEN.js";import{S as R}from"./SplitView-9-RV5VCp.js";import{T as C}from"./TableCanvas-DlX-Wh2b.js";import{W as i}from"./Widget-CvkMap1n.js";import{s as v}from"./constants-DatVHdkd.js";import{cF as E}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as F}from"./styled-components-DCFsnh-i.js";import{s as S,F as g,I as m,ab as B,t as w}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as k,e_ as T}from"./@salutejs/plasma-icons-Do5ggeDI.js";const z={title:"Локальные компоненты/TableCanvas/HighlightActiveType/SplitView",tags:["!autodocs"]},H=F.div`
  position: sticky;
  top: 0;
  height: 72px;
  display: flex;
  align-items: center;
  font-weight: 600;
`,V=[{key:"block",name:"Блок / Трайб / Продукт",width:320,subRow:{keyOfColumnInSubRow:e=>e===0?"block":e===1?"tribe":"product",isColumnWithArrow:!0,hideHeaderExpandAllArrow:!1}},{key:"blockActivity",name:"Активность",width:160},{key:"q1",name:"Q1",width:90,subRow:{parentKeyAsDefault:!0}},{key:"q2",name:"Q2",width:90,subRow:{parentKeyAsDefault:!0}},{key:"q3",name:"Q3",width:90,subRow:{parentKeyAsDefault:!0}},{key:"q4",name:"Q4",width:90,subRow:{parentKeyAsDefault:!0}}],I=e=>typeof e.id=="number"?0:String(e.id).endsWith("tribe")?1:2,P={0:"Блок",1:"Трайб",2:"Продукт"},_={display:"flex",justifyContent:"space-between",gap:16,padding:"10px 0",borderBottom:"1px solid #eef1f5",fontSize:13};function o({label:e,value:s}){return u.jsxs("div",{style:_,children:[u.jsx("span",{style:{color:"#8893a5"},children:e}),u.jsx("b",{children:s})]})}function L({row:e,avatarSize:s,fullScreened:c,onClose:d,onToggleFullScreen:x}){var t;if(!e)return null;const n=I(e),l=n===0?e.block:n===1?e.tribe:e.product,a=((t=e.subRows)==null?void 0:t.length)??0,h=e.blockActivity==="Активный";return u.jsxs(i,{containerType:c?"modal":"splitView",children:[u.jsx(i.Header,{onClose:d,fullScreened:c,toggleFullScreened:x,title:l,titleLeftSlot:u.jsx(B,{size:s,name:l}),rightBlock:u.jsxs(u.Fragment,{children:[u.jsx(i.IconButtonDots,{size:"xs",iconSize:"xs",iconOrientation:"vertical",dropdownProps:{items:[{label:"Открыть карточку",value:"1"},{label:"Скопировать ссылку",value:"2"}]}}),u.jsx(i.Divider,{}),u.jsxs(g,{mainAxisGap:v.x2,children:[u.jsx(m,{view:"secondary",size:"xs",children:u.jsx(k,{size:"xs"})}),u.jsx(m,{view:"secondary",size:"xs",children:u.jsx(T,{size:"xs"})})]})]}),badge:{text:P[n]},bottomBlock:u.jsxs("div",{style:{display:"flex",gap:v.x2},children:[u.jsx(S,{size:"s",transparent:!0,view:h?"accent":"negative",text:e.blockActivity}),a>0&&u.jsx(S,{size:"s",transparent:!0,view:"accent",text:`${n===0?"Трайбов":"Продуктов"}: ${a}`})]})}),u.jsx(i.Content,{children:u.jsxs("div",{style:{padding:16},children:[u.jsx(o,{label:"ID",value:String(e.id)}),u.jsx(o,{label:"Блок",value:e.block}),u.jsx(o,{label:"Трайб",value:e.tribe}),u.jsx(o,{label:"Продукт",value:e.product}),u.jsx(o,{label:"Зона трайба",value:e.tribeZone}),u.jsx(o,{label:"Q1–Q4",value:[e.q1,e.q2,e.q3,e.q4].join(" · ")})]})}),u.jsx(i.Footer,{leftBlock:u.jsxs(g,{mainAxisGap:v.x4,children:[u.jsx(w,{text:"На согласование",size:"xs",view:"secondary"}),u.jsx(i.IconButtonDots,{size:"xs"})]}),rightBlock:u.jsxs(g,{mainAxisGap:v.x4,children:[u.jsx(w,{text:"Отмена",size:"xs",view:"secondary",onClick:d}),u.jsx(w,{text:"Сохранить",size:"xs",view:"accent"})]})})]})}const r={name:"HighlightActiveType + SplitView (дерево)",...j({previewSource:"shown"}),render:()=>{const[e]=p.useState(()=>D()),s=p.useState(void 0),[c,d]=s,[x,n]=p.useState(null),[l,a]=p.useState(!1),h=()=>{d(void 0),a(!1),setTimeout(()=>n(null),300)};return u.jsxs("div",{style:{backgroundColor:E},children:[u.jsx(H,{children:"Header FinAI"}),u.jsx(R,{mainContent:u.jsx(C,{tableConfig:{containerStyle:{height:"70vh"},subRows:{getSubRows:t=>t==null?void 0:t.subRows,rowKeyGetter:t=>t.id},cellsSelection:{mode:"range-cell"},highlightActiveType:"row",highlightActiveRow:{state:s,onChange:({row:t})=>n(t??null)}},columnConfig:V,rows:e}),sidebar:{isOpened:c!==void 0,isFullScreened:l,defaultWidthPercent:35,content:({avatarSize:t})=>u.jsx(L,{row:x,avatarSize:t,fullScreened:l,onClose:h,onToggleFullScreen:()=>a(y=>!y)})}})]})}};var b,f,A;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'HighlightActiveType + SplitView (дерево)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(() => createRowsTree());

    // Controlled-подсветка: индексом подсвеченной строки владеет внешний стейт.
    // Он же — признак «панель открыта»: панель показывается, пока строка
    // подсвечена.
    const activeRowState = useState<number | undefined>(undefined);
    const [activeRow, setActiveRow] = activeRowState;

    // Объект подсвеченной строки приходит из highlightActiveRow.onChange —
    // таблица сама резолвит узел дерева по флэт-индексу, onCellClicked не нужен.
    const [activeRowData, setActiveRowData] = useState<TreeRow | null>(null);
    const [fullScreened, setFullScreened] = useState(false);

    // Закрытие панели → обратное связывание: гасим подсветку строки. Данные
    // чистим после анимации закрытия, чтобы контент не мигал.
    const closePanel = () => {
      setActiveRow(undefined);
      setFullScreened(false);
      setTimeout(() => setActiveRowData(null), 300);
    };
    return <div style={{
      backgroundColor: backgroundPrimary
    }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView mainContent={<TableCanvas tableConfig={{
        containerStyle: {
          height: '70vh'
        },
        subRows: {
          getSubRows: row => row?.subRows,
          rowKeyGetter: row => row.id
        },
        cellsSelection: {
          mode: 'range-cell'
        },
        highlightActiveType: 'row',
        highlightActiveRow: {
          state: activeRowState,
          // И индекс, и сам узел дерева приходят сюда — без onCellClicked.
          onChange: ({
            row
          }) => setActiveRowData(row ?? null)
        }
      }} columnConfig={TREE_COLUMNS} rows={rows} />} sidebar={{
        isOpened: activeRow !== undefined,
        isFullScreened: fullScreened,
        defaultWidthPercent: 35,
        content: ({
          avatarSize
        }: SplitViewSlotSizesProps) => <RowDetailsWidget row={activeRowData} avatarSize={avatarSize} fullScreened={fullScreened} onClose={closePanel} onToggleFullScreen={() => setFullScreened(prev => !prev)} />
      }} />
      </div>;
  }
}`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const O=["HighlightActiveTypeSplitView"],X=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveTypeSplitView:r,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{X as S};
