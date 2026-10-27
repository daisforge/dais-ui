import{r as g,j as n}from"./react-CAOzMBF_.js";import{b as K4}from"./tableData-DVJFoYoT.js";import Z4 from"./DocStoryTemplate-Cf946dgV.js";import{S as i}from"./StoryHint-AurwRlnz.js";import{s as L4}from"./storySourceDoc-tVKyHcEN.js";import{T as a,C as o}from"./TableCanvas-DlX-Wh2b.js";import{T as $4}from"./TextField-DpKf-85P.js";import{t as X4,A as Q4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{al as q4,u1 as U4,iN as J4}from"./@salutejs/plasma-icons-Do5ggeDI.js";const u0={title:"Локальные компоненты/TableCanvas/StickyRowsCols",tags:["!autodocs"],parameters:{docs:{page:Z4}}},d=L4({preCode:`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,previewSource:"shown"}),L=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],W4=["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"],H=["Кредиты","Депозиты","Карты","Ипотека","Страхование"],U=u=>u.reduce((e,t)=>e+t,0),G=u=>L.map((e,t)=>U(u.map(r=>r.months[t]??0)));function h(u=40){const e=K4(7),t=W4.map(s=>{const m=Array.from({length:u},(E,p)=>({kind:"item",region:s,manager:`Менеджер ${p+1}`,product:H[p%H.length]??"",months:L.map(()=>Math.round(e()*900+100))}));return{subtotal:{kind:"subtotal",region:s,manager:"—",product:`Итого: ${s}`,months:G(m)},items:m}});return[{kind:"total",region:"Все регионы",manager:"—",product:"Итого по банку",months:G(t.map(({subtotal:s})=>s))},...t.flatMap(({subtotal:s,items:m})=>[s,...m])].map((s,m)=>({...s,id:m+1,total:U(s.months)}))}const y=u=>u.toLocaleString("ru-RU"),P4={total:"rgba(46, 170, 220, 0.2)",subtotal:"rgba(46, 170, 220, 0.08)"},n0=({row:u})=>{const e=P4[u.kind];return e?{bgCell:e}:void 0},e0={Москва:"accent","Санкт-Петербург":"positive",Казань:"warning",Новосибирск:"dark",Екатеринбург:"negative"},t0=48,V=1e3,k=u=>({direction:"row",alignItems:"center",columnGap:8,padding:{left:u.cellHorizontalPadding,right:u.cellHorizontalPadding},style:{width:"100%"}}),Y=u=>u.baseFontStyle.replace(/^\d+/,"600"),o0=({row:u,theme:e})=>n.jsx(o.Container,{...k(e),children:n.jsx(o.Badge,{text:u.region,view:u.kind==="total"?"dark":e0[u.region]??"default",size:u.kind==="item"?"s":"m",pilled:!0})}),s0=({row:u,theme:e})=>n.jsx(o.Container,{...k(e),children:u.kind==="item"?n.jsx(o.Link,{onClick:()=>console.log("Открыть менеджера",u.manager),children:u.manager}):n.jsx(o.Text,{font:e.baseFontStyle,children:u.manager})}),r0=({row:u,theme:e})=>n.jsxs(o.Container,{...k(e),children:[n.jsx(o.Icon,{icon:u.kind==="item"?n.jsx(q4,{}):n.jsx(U4,{}),size:16,color:u.kind==="item"?e.tokens.textAccent:e.tokens.textWarning}),n.jsx(o.Text,{font:u.kind==="item"?e.baseFontStyle:Y(e),children:u.product})]}),i0=u=>({row:e,theme:t})=>{const r=e.months[u]??0,s=Math.max(2,Math.round(Math.min(r,V)/V*t0));return n.jsxs(o.Container,{...k(t),children:[e.kind==="item"&&n.jsx(o.Rect,{color:t.tokens.textAccent,style:{width:s,height:6}}),n.jsx(o.Text,{font:e.kind==="item"?t.baseFontStyle:Y(t),children:y(r)})]})},K=U(h().filter(u=>u.kind==="item").map(u=>u.total))/(W4.length*40),a0=({row:u,theme:e})=>n.jsxs(o.Container,{...k(e),children:[n.jsx(o.Text,{font:u.kind==="item"?e.baseFontStyle:Y(e),children:y(u.total)}),u.kind!=="item"&&n.jsx(o.Badge,{text:"Итог",view:"accent",size:"xs",transparent:!0}),u.kind==="item"&&n.jsx(o.Badge,{text:u.total>=K?"Выше плана":"Ниже плана",view:u.total>=K?"positive":"negative",size:"xs",transparent:!0})]}),c0=({row:u,theme:e})=>n.jsx(o.Container,{...k(e),children:u.kind==="item"&&n.jsx(o.Checkbox,{checked:u.id%3===0,size:16})}),l0=({row:u,theme:e,hovered:t})=>{const r=u.kind==="item"&&t.rowHover;return n.jsxs(o.Container,{...k(e),children:[u.kind!=="item"&&n.jsx(o.Button,{view:"accent",size:"xs",onClick:()=>console.log("Детали",u.region),children:"Детали"}),r&&n.jsx(o.Button,{view:"secondary",size:"xs",onClick:()=>console.log("Открыть",u.id),children:"Открыть"}),r&&n.jsx(o.IconButton,{icon:n.jsx(J4,{color:"#1d1d1f",size:"xs"}),view:"clear",buttonSize:"xs",tooltip:"Просмотр"}),r&&n.jsx(o.IconButton,{icon:n.jsx(U4,{color:"#1d1d1f",size:"xs"}),view:"clear",buttonSize:"xs",tooltip:"В избранное"})]})};function z({sortable:u=!1}={}){const e=u?"numberSort":void 0;return[{key:"id",name:"№",width:64,sortingType:e},{key:"region",name:"Регион",width:180,sortingType:u?"stringSort":void 0,renderCell:o0},{key:"manager",name:"Менеджер",width:150,renderCell:s0},{key:"product",name:"Продукт",width:240,renderCell:r0},...L.map((s,m)=>({key:`m${m+1}`,name:s,width:130,renderCell:i0(m)})),{key:"total",name:"Год",width:200,sortingType:e,renderCell:a0},{key:"checked",name:"Сверено",width:110,renderCell:c0},{key:"actions",name:"Действия",width:220,renderCell:l0}].map(s=>({...s,themeOverride:n0}))}const S=h(),l=z(),C={height:"600px"},v=u=>u.kind!=="item",A={...d,name:"Липкие колонки",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Прокрутите вправо: колонка ",n.jsx("b",{children:"Регион"})," прилипает к левому краю, а"," ",n.jsx("b",{children:"Год"})," встаёт рядом с ней, когда доедет."]}),n.jsx(a,{tableConfig:{containerStyle:C,stickyColumns:["region","total"]},columnConfig:l,rows:S})]})},d0=new Set(["m1","m4","m7","m10"]),b={...d,name:"Липкие колонки по условию",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Колонки заданы функцией: липкими становятся первые месяцы кварталов. Прокрутите вправо — ",n.jsx("b",{children:"Янв"}),", ",n.jsx("b",{children:"Апр"}),", ",n.jsx("b",{children:"Июл"}),", ",n.jsx("b",{children:"Окт"})," по очереди встают у левого края."]}),n.jsx(a,{tableConfig:{containerStyle:{height:"600px",width:"760px"},stickyColumns:u=>d0.has(u.key)},columnConfig:l,rows:S})]})},x={...d,name:"Липкие строки",render:()=>n.jsxs(n.Fragment,{children:[n.jsx(i,{children:"Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог каждого региона, до которого вы доскроллили."}),n.jsx(a,{tableConfig:{containerStyle:C,stickyRows:v},columnConfig:l,rows:S})]})},R={...d,name:"Строки и колонки вместе",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Липкие колонки ",n.jsx("b",{children:"Продукт"})," и ",n.jsx("b",{children:"Год"}),", липкие строки — общий итог и итог по Казани. Нумерация строк остаётся слева."]}),n.jsx(a,{tableConfig:{containerStyle:C,rowMarkers:{startIndex:1},stickyColumns:["product","total"],stickyRows:u=>u.kind==="total"||u.kind==="subtotal"&&u.region==="Казань"},columnConfig:l,rows:S})]})},F={...d,name:"Вместе с закреплёнными колонками",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Колонка ",n.jsx("b",{children:"№"})," закреплена всегда (",n.jsx("code",{children:"columnsControl.pinnedDefault"}),"), а ",n.jsx("b",{children:"Продукт"})," и"," ",n.jsx("b",{children:"Июн"})," прилипают правее неё. Закрепление можно менять в меню колонок."]}),n.jsx(a,{tableConfig:{containerStyle:C,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["id"]},stickyColumns:["product","m6"],stickyRows:u=>u.kind==="total"},columnConfig:l,rows:S})]})},m0=[{key:"group-info",name:"Подразделение",children:l.slice(0,4)},{key:"group-h1",name:"1 полугодие",children:l.slice(4,10)},{key:"group-h2",name:"2 полугодие",children:l.slice(10,16)},...l.slice(16)],w={...d,name:"С группировкой колонок",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Группа в шапке разрывается на границе липкой зоны: ",n.jsx("b",{children:"Регион"})," ","остаётся под «Подразделением», а ",n.jsx("b",{children:"Июл"})," прилипает вместе с подписью своей группы."]}),n.jsx(a,{tableConfig:{containerStyle:C,stickyColumns:["region","m7"],stickyRows:v},columnConfig:m0,rows:S})]})},E0=z({sortable:!0}),C0=h(15),B={...d,name:"С сортировкой",render:()=>{const u=g.useState([]);return n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Отсортируйте по ",n.jsx("b",{children:"Году"}),": итоги переедут на новые места, но останутся липкими — строки задаются условием, а не номером."]}),n.jsx(a,{tableConfig:{containerStyle:C,sorting:{state:u},stickyColumns:["region"],stickyRows:v},columnConfig:E0,rows:C0})]})}},g0={total:64,subtotal:48},f={...d,name:"Разная высота строк",render:()=>n.jsxs(n.Fragment,{children:[n.jsx(i,{children:"Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк растёт ступенями, строки под ней уходят без зазоров."}),n.jsx(a,{tableConfig:{containerStyle:C,rowHeight:(u,e)=>g0[u.kind]??e.rowSizeValue,stickyColumns:["product"],stickyRows:v},columnConfig:l,rows:S})]})},S0=[{label:"Сумма по строкам",total:U(S.filter(u=>u.kind==="item").map(u=>u.total))}],y0=u=>({row:e})=>u==="product"?e.label:u==="total"?y(e.total):"",p0=z().map(u=>({...u,renderSummaryCell:y0(u.key)})),D={...d,name:"С итоговой строкой снизу",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Итоги регионов прилипают сверху, а итоговая строка (",n.jsx("code",{children:"bottomSummaryRows"}),") всегда закреплена снизу."]}),n.jsx(a,{tableConfig:{containerStyle:C,summaryRows:{showDefault:!0,showInControl:!0},stickyColumns:["product","total"],stickyRows:u=>u.kind==="subtotal"},columnConfig:p0,rows:S,bottomSummaryRows:S0})]})},Y4=h(12),z4=l.map(u=>u.key==="region"?{...u,themeOverride:void 0,renderCell:void 0}:u),T={...d,name:"Со слитыми ячейками",render:()=>n.jsxs(n.Fragment,{children:[n.jsx(i,{children:"Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает, название региона переезжает в прилипшую строку, а остаток блока прокручивается под ней."}),n.jsx(a,{tableConfig:{containerStyle:C,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["product"],stickyRows:u=>u.kind==="subtotal"&&u.region==="Санкт-Петербург"},columnConfig:z4,rows:Y4})]})},O={...d,name:"Липкая колонка со слитыми ячейками",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Колонка ",n.jsx("b",{children:"Регион"})," слита по значениям и при этом липкая. Прокрутите вправо — слитые блоки регионов прилипают к левому краю целиком; прокрутите вниз — итоги регионов прилипают под шапкой, и название региона переезжает в прилипшую строку."]}),n.jsx(a,{tableConfig:{containerStyle:C,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["region"],stickyRows:u=>u.kind==="subtotal"},columnConfig:z4,rows:Y4})]})},j={...d,name:"20 000 строк",render:()=>{const[u]=g.useState(()=>h(4e3));return n.jsxs(n.Fragment,{children:[n.jsx(i,{children:"20 000 строк и 17 колонок: позиции считаются только по видимым строкам, поэтому прокрутка остаётся плавной."}),n.jsx(a,{tableConfig:{containerStyle:C,rowMarkers:{startIndex:1},stickyColumns:["region","total"],stickyRows:v},columnConfig:l,rows:u})]})}},W=5e4,k0=(u,e)=>(u*7+e*13)%89*10+100,h0=u=>{const t=`Регион ${Math.floor(u/W)+1}`;return u===0?{id:1,kind:"total",region:"Все регионы",product:"Итого"}:u%W===0?{id:u+1,kind:"subtotal",region:t,product:`Итого: ${t}`}:{id:u+1,kind:"item",region:t,product:H[u%H.length]??""}},P=(u,e)=>Array.from({length:e},(t,r)=>h0(u+r)),G4=[{key:"id",name:"№",width:100},{key:"region",name:"Регион",width:160},{key:"product",name:"Продукт",width:180},...L.map((u,e)=>({key:`m${e+1}`,name:u,width:110,renderCell:({row:t})=>y(k0(t.id,e))}))].map(u=>({...u,themeOverride:({row:e})=>{const t=P4[e.kind];return t?{bgCell:t}:void 0}})),A0=1e6,b0=[0,25e4,5e5,75e4],_={...d,name:"1 000 000 строк, липкие по индексам",render:()=>{const[u]=g.useState(()=>P(0,A0));return n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:["Миллион строк. Липкие строки переданы индексами (",n.jsx("code",{children:"stickyRows: [0, 250000, …]"}),") — таблица не проходит по строкам вообще. Перетащите ползунок прокрутки вниз."]}),n.jsx(a,{tableConfig:{containerStyle:C,stickyColumns:["region"],stickyRows:b0},columnConfig:G4,rows:u})]})}},M=W,N={...d,name:"Подгрузка чанками",render:()=>{const[u,e]=g.useState(()=>P(0,M)),t=g.useRef(0),[r,s]=g.useState(0),m=g.useCallback(E=>(t.current+=1,E.kind!=="item"),[]);g.useEffect(()=>s(t.current),[u]);const c=()=>e(E=>[...E,...P(E.length,M)]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsxs(i,{children:["Строки подгружаются чанками по ",y(M),". Липкие строки заданы предикатом; его результаты кешируются, поэтому после подгрузки он вызывается только для новых строк — счётчик растёт на размер чанка, а не на всю таблицу."]}),n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[n.jsxs(X4,{size:"s",view:"secondary",onClick:c,children:["Загрузить ещё ",y(M)]}),n.jsxs("span",{children:["Строк: ",n.jsx("b",{children:y(u.length)})," · вызовов предиката:"," ",n.jsx("b",{children:y(r)})]})]}),n.jsx(a,{tableConfig:{containerStyle:{height:"540px"},stickyColumns:["region"],stickyRows:m},columnConfig:G4,rows:u})]})}},x0=h(20),R0=u=>new Set(u.split(/[,\s]+/).map(Number).filter(Number.isInteger)),I={...L4({previewSource:"hidden"}),name:"Песочница",render:()=>{const[u,e]=g.useState(["region","total"]),[t,r]=g.useState("1, 2, 23"),s=g.useMemo(()=>{const c=R0(t);return E=>c.has(E.id)},[t]),m=(c,E)=>e(p=>E?[...p,c]:p.filter(V4=>V4!==c));return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsxs(i,{children:["Укажите номера липких строк (колонка ",n.jsx("b",{children:"№"}),") и отметьте липкие колонки — таблица обновится сразу."]}),n.jsx("div",{style:{width:320},children:n.jsx($4,{size:"s",label:"Липкие строки",labelPlacement:"outer",placeholder:"Например: 1, 2, 23",value:t,onChange:c=>r(c.target.value)})}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px"},children:l.map(({key:c,name:E})=>n.jsx(Q4,{size:"s",label:typeof E=="string"?E:c,checked:u.includes(c),onChange:p=>m(c,p.target.checked)},c))}),n.jsx(a,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},stickyColumns:u,stickyRows:s},columnConfig:l,rows:x0})]})}};var Z,$,X;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие колонки',
  render: () => <>
      <StoryHint>
        Прокрутите вправо: колонка <b>Регион</b> прилипает к левому краю, а{' '}
        <b>Год</b> встаёт рядом с ней, когда доедет.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyColumns: ['region', 'total']
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(X=($=A.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Q,q,J;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие колонки по условию',
  render: () => <>
      <StoryHint>
        Колонки заданы функцией: липкими становятся первые месяцы кварталов.
        Прокрутите вправо — <b>Янв</b>, <b>Апр</b>, <b>Июл</b>, <b>Окт</b> по
        очереди встают у левого края.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: {
        height: '600px',
        width: '760px'
      },
      stickyColumns: column => QUARTER_START_MONTHS.has(column.key)
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var u4,n4,e4;x.parameters={...x.parameters,docs:{...(u4=x.parameters)==null?void 0:u4.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие строки',
  render: () => <>
      <StoryHint>
        Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог
        каждого региона, до которого вы доскроллили.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyRows: isSubtotalOrTotal
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(e4=(n4=x.parameters)==null?void 0:n4.docs)==null?void 0:e4.source}}};var t4,o4,s4;R.parameters={...R.parameters,docs:{...(t4=R.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  ...source,
  name: 'Строки и колонки вместе',
  render: () => <>
      <StoryHint>
        Липкие колонки <b>Продукт</b> и <b>Год</b>, липкие строки — общий итог и
        итог по Казани. Нумерация строк остаётся слева.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      rowMarkers: {
        startIndex: 1
      },
      stickyColumns: ['product', 'total'],
      stickyRows: row => row.kind === 'total' || row.kind === 'subtotal' && row.region === 'Казань'
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(s4=(o4=R.parameters)==null?void 0:o4.docs)==null?void 0:s4.source}}};var r4,i4,a4;F.parameters={...F.parameters,docs:{...(r4=F.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  ...source,
  name: 'Вместе с закреплёнными колонками',
  render: () => <>
      <StoryHint>
        Колонка <b>№</b> закреплена всегда (
        <code>columnsControl.pinnedDefault</code>), а <b>Продукт</b> и{' '}
        <b>Июн</b> прилипают правее неё. Закрепление можно менять в меню
        колонок.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      columnsControl: {
        enable: true,
        pinning: true,
        pinnedDefault: ['id']
      },
      stickyColumns: ['product', 'm6'],
      stickyRows: row => row.kind === 'total'
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(a4=(i4=F.parameters)==null?void 0:i4.docs)==null?void 0:a4.source}}};var c4,l4,d4;w.parameters={...w.parameters,docs:{...(c4=w.parameters)==null?void 0:c4.docs,source:{originalSource:`{
  ...source,
  name: 'С группировкой колонок',
  render: () => <>
      <StoryHint>
        Группа в шапке разрывается на границе липкой зоны: <b>Регион</b>{' '}
        остаётся под «Подразделением», а <b>Июл</b> прилипает вместе с подписью
        своей группы.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyColumns: ['region', 'm7'],
      stickyRows: isSubtotalOrTotal
    }} columnConfig={GROUPED_COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(d4=(l4=w.parameters)==null?void 0:l4.docs)==null?void 0:d4.source}}};var m4,E4,C4;B.parameters={...B.parameters,docs:{...(m4=B.parameters)==null?void 0:m4.docs,source:{originalSource:`{
  ...source,
  name: 'С сортировкой',
  render: () => {
    const sortingState = useState<readonly SortColumn[]>([]);
    return <>
        <StoryHint>
          Отсортируйте по <b>Году</b>: итоги переедут на новые места, но
          останутся липкими — строки задаются условием, а не номером.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        sorting: {
          state: sortingState
        },
        stickyColumns: ['region'],
        stickyRows: isSubtotalOrTotal
      }} columnConfig={SORTABLE_COLUMNS} rows={SHORT_REPORT_ROWS} />
      </>;
  }
}`,...(C4=(E4=B.parameters)==null?void 0:E4.docs)==null?void 0:C4.source}}};var g4,S4,y4;f.parameters={...f.parameters,docs:{...(g4=f.parameters)==null?void 0:g4.docs,source:{originalSource:`{
  ...source,
  name: 'Разная высота строк',
  render: () => <>
      <StoryHint>
        Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк
        растёт ступенями, строки под ней уходят без зазоров.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      rowHeight: (row, size) => ROW_HEIGHT_BY_KIND[row.kind] ?? size.rowSizeValue,
      stickyColumns: ['product'],
      stickyRows: isSubtotalOrTotal
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(y4=(S4=f.parameters)==null?void 0:S4.docs)==null?void 0:y4.source}}};var p4,k4,h4;D.parameters={...D.parameters,docs:{...(p4=D.parameters)==null?void 0:p4.docs,source:{originalSource:`{
  ...source,
  name: 'С итоговой строкой снизу',
  render: () => <>
      <StoryHint>
        Итоги регионов прилипают сверху, а итоговая строка (
        <code>bottomSummaryRows</code>) всегда закреплена снизу.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      summaryRows: {
        showDefault: true,
        showInControl: true
      },
      stickyColumns: ['product', 'total'],
      stickyRows: row => row.kind === 'subtotal'
    }} columnConfig={COLUMNS_WITH_SUMMARY} rows={REPORT_ROWS} bottomSummaryRows={SUMMARY_ROWS} />
    </>
}`,...(h4=(k4=D.parameters)==null?void 0:k4.docs)==null?void 0:h4.source}}};var A4,b4,x4;T.parameters={...T.parameters,docs:{...(A4=T.parameters)==null?void 0:A4.docs,source:{originalSource:`{
  ...source,
  name: 'Со слитыми ячейками',
  render: () => <>
      <StoryHint>
        Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает,
        название региона переезжает в прилипшую строку, а остаток блока
        прокручивается под ней.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      mergeCells: {
        mergeByCellValues: ['region']
      },
      stickyColumns: ['product'],
      stickyRows: row => row.kind === 'subtotal' && row.region === 'Санкт-Петербург'
    }} columnConfig={MERGE_COLUMNS} rows={MERGE_REPORT_ROWS} />
    </>
}`,...(x4=(b4=T.parameters)==null?void 0:b4.docs)==null?void 0:x4.source}}};var R4,F4,w4;O.parameters={...O.parameters,docs:{...(R4=O.parameters)==null?void 0:R4.docs,source:{originalSource:`{
  ...source,
  name: 'Липкая колонка со слитыми ячейками',
  render: () => <>
      <StoryHint>
        Колонка <b>Регион</b> слита по значениям и при этом липкая. Прокрутите
        вправо — слитые блоки регионов прилипают к левому краю целиком;
        прокрутите вниз — итоги регионов прилипают под шапкой, и название
        региона переезжает в прилипшую строку.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      mergeCells: {
        mergeByCellValues: ['region']
      },
      stickyColumns: ['region'],
      stickyRows: row => row.kind === 'subtotal'
    }} columnConfig={MERGE_COLUMNS} rows={MERGE_REPORT_ROWS} />
    </>
}`,...(w4=(F4=O.parameters)==null?void 0:F4.docs)==null?void 0:w4.source}}};var B4,f4,D4;j.parameters={...j.parameters,docs:{...(B4=j.parameters)==null?void 0:B4.docs,source:{originalSource:`{
  ...source,
  name: '20 000 строк',
  render: () => {
    const [rows] = useState(() => createReportRows(4000));
    return <>
        <StoryHint>
          20 000 строк и 17 колонок: позиции считаются только по видимым
          строкам, поэтому прокрутка остаётся плавной.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        rowMarkers: {
          startIndex: 1
        },
        stickyColumns: ['region', 'total'],
        stickyRows: isSubtotalOrTotal
      }} columnConfig={COLUMNS} rows={rows} />
      </>;
  }
}`,...(D4=(f4=j.parameters)==null?void 0:f4.docs)==null?void 0:D4.source}}};var T4,O4,j4;_.parameters={..._.parameters,docs:{...(T4=_.parameters)==null?void 0:T4.docs,source:{originalSource:`{
  ...source,
  name: '1 000 000 строк, липкие по индексам',
  render: () => {
    const [rows] = useState(() => createBigRows(0, MILLION));
    return <>
        <StoryHint>
          Миллион строк. Липкие строки переданы индексами (
          <code>stickyRows: [0, 250000, …]</code>) — таблица не проходит по
          строкам вообще. Перетащите ползунок прокрутки вниз.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        stickyColumns: ['region'],
        stickyRows: MILLION_STICKY_ROWS
      }} columnConfig={BIG_COLUMNS} rows={rows} />
      </>;
  }
}`,...(j4=(O4=_.parameters)==null?void 0:O4.docs)==null?void 0:j4.source}}};var _4,N4,I4;N.parameters={...N.parameters,docs:{...(_4=N.parameters)==null?void 0:_4.docs,source:{originalSource:`{
  ...source,
  name: 'Подгрузка чанками',
  render: () => {
    const [rows, setRows] = useState(() => createBigRows(0, CHUNK_SIZE));
    const predicateCalls = useRef(0);
    const [callsShown, setCallsShown] = useState(0);
    const isSticky = useCallback((row: BigRow) => {
      predicateCalls.current += 1;
      return row.kind !== 'item';
    }, []);
    useEffect(() => setCallsShown(predicateCalls.current), [rows]);
    const loadChunk = () => setRows(current => [...current, ...createBigRows(current.length, CHUNK_SIZE)]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <StoryHint>
          Строки подгружаются чанками по {formatNumber(CHUNK_SIZE)}. Липкие
          строки заданы предикатом; его результаты кешируются, поэтому после
          подгрузки он вызывается только для новых строк — счётчик растёт на
          размер чанка, а не на всю таблицу.
        </StoryHint>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <Button size="s" view="secondary" onClick={loadChunk}>
            Загрузить ещё {formatNumber(CHUNK_SIZE)}
          </Button>
          <span>
            Строк: <b>{formatNumber(rows.length)}</b> · вызовов предиката:{' '}
            <b>{formatNumber(callsShown)}</b>
          </span>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '540px'
        },
        stickyColumns: ['region'],
        stickyRows: isSticky
      }} columnConfig={BIG_COLUMNS} rows={rows} />
      </div>;
  }
}`,...(I4=(N4=N.parameters)==null?void 0:N4.docs)==null?void 0:I4.source}}};var v4,M4,H4;I.parameters={...I.parameters,docs:{...(v4=I.parameters)==null?void 0:v4.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'hidden'
  }),
  name: 'Песочница',
  render: () => {
    const [stickyColumns, setStickyColumns] = useState(['region', 'total']);
    const [stickyIdsText, setStickyIdsText] = useState('1, 2, 23');
    const stickyRows = useMemo(() => {
      const ids = parseIds(stickyIdsText);
      return (row: ReportRow) => ids.has(row.id);
    }, [stickyIdsText]);
    const toggleColumn = (key: string, checked: boolean) => setStickyColumns(current => checked ? [...current, key] : current.filter(item => item !== key));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <StoryHint>
          Укажите номера липких строк (колонка <b>№</b>) и отметьте липкие
          колонки — таблица обновится сразу.
        </StoryHint>
        <div style={{
        width: 320
      }}>
          <TextField size="s" label="Липкие строки" labelPlacement="outer" placeholder="Например: 1, 2, 23" value={stickyIdsText} onChange={event => setStickyIdsText(event.target.value)} />
        </div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 20px'
      }}>
          {COLUMNS.map(({
          key,
          name
        }) => <Checkbox key={key} size="s" label={typeof name === 'string' ? name : key} checked={stickyColumns.includes(key)} onChange={event => toggleColumn(key, event.target.checked)} />)}
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        stickyColumns,
        stickyRows
      }} columnConfig={COLUMNS} rows={PLAYGROUND_ROWS} />
      </div>;
  }
}`,...(H4=(M4=I.parameters)==null?void 0:M4.docs)==null?void 0:H4.source}}};const F0=["StickyColumns","StickyColumnsByPredicate","StickyRows","RowsAndColumns","WithPinnedColumns","WithColumnGroups","WithSorting","VariableRowHeight","WithSummaryRows","WithMergedCells","StickyMergedColumn","LargeData","MillionRowsByIndexes","ChunkLoading","Playground"],I0=Object.freeze(Object.defineProperty({__proto__:null,ChunkLoading:N,LargeData:j,MillionRowsByIndexes:_,Playground:I,RowsAndColumns:R,StickyColumns:A,StickyColumnsByPredicate:b,StickyMergedColumn:O,StickyRows:x,VariableRowHeight:f,WithColumnGroups:w,WithMergedCells:T,WithPinnedColumns:F,WithSorting:B,WithSummaryRows:D,__namedExportsOrder:F0,default:u0},Symbol.toStringTag,{value:"Module"}));export{I0 as T};
