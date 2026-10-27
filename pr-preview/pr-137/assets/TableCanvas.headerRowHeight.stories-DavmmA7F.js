import{r as o,j as u}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import h from"./DocStoryTemplate-Cf946dgV.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-DlX-Wh2b.js";import{af as w}from"./@salutejs/sdds-finai-CKhMjg07.js";const y={title:"Локальные компоненты/TableCanvas/HeaderRowHeight",tags:["!autodocs"],parameters:{docs:{page:h}}},E=`
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,D=p(0,40),v=[{key:"id",name:"ID",width:90},{key:"metrics",name:"Показатели",children:[{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:180},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:"Прогресс",children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}]}],n={...m({preCode:E,previewSource:"shown",type:"code"}),name:"Высота шапки (3 уровня)",render:()=>{const[e,d]=o.useState(33),t=3,c=o.useMemo(()=>e*t,[e]);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16,maxWidth:520},children:[u.jsx("div",{style:{flex:1},children:u.jsx(w,{value:e,onChange:d,min:24,max:96,step:1})}),u.jsxs("span",{style:{whiteSpace:"nowrap"},children:["headerRowHeight: ",e,"px"]}),u.jsxs("span",{style:{whiteSpace:"nowrap",opacity:.7},children:["итог: ",e," × ",t," = ",c,"px"]})]}),u.jsx(g,{tableConfig:{containerStyle:{height:420},headerRowHeight:e},columnConfig:v,rows:D})]})}};var r,a,s,i,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Высота шапки (3 уровня)',
  render: () => {
    const [headerRowHeight, setHeaderRowHeight] = useState<number>(33);

    // 2 уровня групп + листовой ряд => всего 3 уровня.
    const levels = 3;
    const total = useMemo(() => headerRowHeight * levels, [headerRowHeight]);
    return <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 16,
        maxWidth: 520
      }}>
          <div style={{
          flex: 1
        }}>
            <Slider value={headerRowHeight} onChange={setHeaderRowHeight} min={24} max={96} step={1} />
          </div>
          <span style={{
          whiteSpace: 'nowrap'
        }}>
            headerRowHeight: {headerRowHeight}px
          </span>
          <span style={{
          whiteSpace: 'nowrap',
          opacity: 0.7
        }}>
            итог: {headerRowHeight} × {levels} = {total}px
          </span>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 420
        },
        headerRowHeight
      }} columnConfig={threeLevelColumns} rows={rows} />
      </div>;
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source},description:{story:`Ползунок динамически меняет \`tableConfig.headerRowHeight\` на
объединённой шапке в 3 уровня (2 уровня групп + листовой ряд). Значение
применяется к каждому уровню одновременно, поэтому итоговая высота шапки
равна headerRowHeight * (1 + число уровней групп).`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.description}}};const C=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{b as T};
