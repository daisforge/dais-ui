import{r,j as u}from"./react-CAOzMBF_.js";import{c as S}from"./tableData-DVJFoYoT.js";import B from"./DocStoryTemplate-B68YIrJ_.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as D}from"./TableCanvas-Cp0bp_v3.js";import{af as i}from"./@salutejs/sdds-finai-Yd8FRL4L.js";const f={title:"Локальные компоненты/TableCanvas/HeaderRowHeight",tags:["!autodocs"],parameters:{docs:{page:B}}},R=`
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`,x=S(0,40),y=[{key:"id",name:"ID",width:90},{key:"metrics",name:"Показатели",children:[{key:"work",name:"Работа",children:[{key:"task",name:"Задача",width:180},{key:"priority",name:"Приоритет",width:140}]},{key:"progress",name:"Прогресс",children:[{key:"developer",name:"Исполнитель",width:160},{key:"complete",name:"% Готовности",width:140}]}]}],o={...C({preCode:R,previewSource:"shown",type:"code"}),name:"Высота шапки (3 уровня)",render:()=>{const[e,a]=r.useState(33),n=3,s=r.useMemo(()=>e*n,[e]);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16,maxWidth:520},children:[u.jsx("div",{style:{flex:1},children:u.jsx(i,{value:e,onChange:a,min:24,max:96,step:1})}),u.jsxs("span",{style:{whiteSpace:"nowrap"},children:["headerRowHeight: ",e,"px"]}),u.jsxs("span",{style:{whiteSpace:"nowrap",opacity:.7},children:["итог: ",e," × ",n," = ",s,"px"]})]}),u.jsx(D,{tableConfig:{containerStyle:{height:420},headerRowHeight:e},columnConfig:y,rows:x})]})}},t={...C({preCode:R,previewSource:"shown",type:"code"}),name:"Своя высота групповых заголовков (groupHeaderRowHeight)",render:()=>{const[e,a]=r.useState(56),[n,s]=r.useState(28),d=2,F=e+n*d;return u.jsxs("div",{children:[u.jsxs("div",{style:{maxWidth:360,marginBottom:16},children:[u.jsxs("div",{children:["headerRowHeight (листовой ряд): ",e,"px"]}),u.jsx(i,{value:e,onChange:a,min:24,max:96,step:1}),u.jsxs("div",{style:{marginTop:12},children:["groupHeaderRowHeight (каждый уровень групп): ",n,"px"]}),u.jsx(i,{value:n,onChange:s,min:20,max:96,step:1})]}),u.jsxs("p",{style:{opacity:.7,marginBottom:12},children:["итог: ",e," + ",n," × ",d," ="," ",F,"px"]}),u.jsx(D,{tableConfig:{containerStyle:{height:420},headerRowHeight:e,groupHeaderRowHeight:n},columnConfig:y,rows:x})]})}};var h,p,g,l,c;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:`Ползунок динамически меняет \`tableConfig.headerRowHeight\` на
объединённой шапке в 3 уровня (2 уровня групп + листовой ряд). Значение
применяется к каждому уровню одновременно, поэтому итоговая высота шапки
равна headerRowHeight * (1 + число уровней групп).`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var m,w,H,E,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  name: 'Своя высота групповых заголовков (groupHeaderRowHeight)',
  render: () => {
    const [headerRowHeight, setHeaderRowHeight] = useState<number>(56);
    const [groupHeaderRowHeight, setGroupHeaderRowHeight] = useState<number>(28);

    // 2 уровня групп над листовым рядом.
    const groupLevels = 2;
    const total = headerRowHeight + groupHeaderRowHeight * groupLevels;
    return <div>
        <div style={{
        maxWidth: 360,
        marginBottom: 16
      }}>
          <div>headerRowHeight (листовой ряд): {headerRowHeight}px</div>
          <Slider value={headerRowHeight} onChange={setHeaderRowHeight} min={24} max={96} step={1} />
          <div style={{
          marginTop: 12
        }}>
            groupHeaderRowHeight (каждый уровень групп): {groupHeaderRowHeight}
            px
          </div>
          <Slider value={groupHeaderRowHeight} onChange={setGroupHeaderRowHeight} min={20} max={96} step={1} />
        </div>
        <p style={{
        opacity: 0.7,
        marginBottom: 12
      }}>
          итог: {headerRowHeight} + {groupHeaderRowHeight} × {groupLevels} ={' '}
          {total}px
        </p>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 420
        },
        headerRowHeight,
        groupHeaderRowHeight
      }} columnConfig={threeLevelColumns} rows={rows} />
      </div>;
  }
}`,...(H=(w=t.parameters)==null?void 0:w.docs)==null?void 0:H.source},description:{story:"`tableConfig.groupHeaderRowHeight` задаёт высоту уровней объединённых заголовков\nотдельно от листового ряда: нижний ряд можно сделать выше (например, под перенос\nназваний колонок), а группы над ним оставить компактными.",...(v=(E=t.parameters)==null?void 0:E.docs)==null?void 0:v.description}}};const b=["Playground","GroupHeaderRowHeight"],_=Object.freeze(Object.defineProperty({__proto__:null,GroupHeaderRowHeight:t,Playground:o,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{_ as T};
