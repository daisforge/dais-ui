import{r as n,j as u}from"./react-DYHuXpTF.js";import{c as g}from"./tableData-DKA5H0bF.js";import Q4 from"./DocStoryTemplate-BHnLMKCH.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{w as $,a as H,e as E,u as M}from"./index-BmaccWcy.js";import{B as h}from"./Box-DwiKSnnX.js";import{C as d,T as C}from"./TableCanvas-0M2beOZW.js";import{dt as Z4,D as V}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{c as z}from"./@salutejs/sdds-finai-BHH5Fs72.js";import{B as uu,w as eu,E as _,aE as O,am as N,aa as nu}from"./@salutejs/plasma-icons-DAdkqmmH.js";const ou={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:Q4}}},y=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,w=e=>$(e).queryAllByRole("columnheader",{hidden:!0}).map(r=>{var t;return((t=r.textContent)==null?void 0:t.trim())??""}),X4=async({canvasElement:e})=>{const r=$(e);await H(()=>E(w(e)).toContain("Title"),{timeout:5e3}),await E(w(e)).not.toContain("Developer"),await M.click(r.getByRole("button",{name:"Добавить колонку Developer"})),await H(()=>{const t=w(e);E(t).toContain("Developer"),E(t.indexOf("Developer")).toBe(t.indexOf("Title")+1)},{timeout:5e3})},L=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],j={...p({preCode:y,previewSource:"shown"}),render:()=>{const[e]=n.useState(g),r=n.useMemo(()=>[{key:"id",name:"ID",renderCell(t){return u.jsx(d.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"})}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsx(C,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:t,hidden:s,pinned:c},l)=>{alert(`
                                    order: ${t.join(", ")}
                                    pinned: ${c.join(", ")}
                                    hidden: ${s.join(", ")}
                                `)}}},columnConfig:r,rows:e})}},f={...p({preCode:y,previewSource:"shown"}),render:()=>{const[e]=n.useState(g),[r,t]=n.useState([]),s=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx(h,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:Z4,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:r.length?r.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"}),u.jsx(C,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:c,hidden:l,pinned:o,changed:a})=>{t(m=>[[`#${m.length+1} изменилось: ${Object.keys(a).join(", ")}`,`    order:  ${c.join(", ")}`,`    pinned: ${o.join(", ")}`,`    hidden: ${l.join(", ")}`].join(`
`),...m])}}},columnConfig:s,rows:e})]})}},B={name:"Сохранённый порядок колонок",...p({preCode:y,previewSource:"shown"}),render:()=>{const e="storybook.tableCanvas.columnsControl.order.v1",r=n.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"version",name:"Версия расчёта",width:180},{key:"model",name:"Модель",width:200}],[]),[t]=n.useState([{id:1,model:"Прогноз спроса",version:"Базовая"},{id:2,model:"План производства",version:"Сценарий 2"}]),[s]=n.useState(()=>["id","model","version"]),c=n.useMemo(()=>{try{const o=JSON.parse(localStorage.getItem(e)??"null");if(Array.isArray(o)&&o.every(a=>typeof a=="string"))return o}catch{}},[]),l=o=>{try{localStorage.setItem(e,JSON.stringify(o))}catch{}};return u.jsx(C,{rows:t,columnConfig:r,tableConfig:{containerStyle:{height:400},columnsControl:{enable:!0,applyMode:"instant",orderDefault:c,orderForReset:s,onConfirm:({order:o,changed:a})=>{a.order&&l(o)},onReorderingHeader:({newOrder:o})=>l(o.filter(a=>r.some(m=>m.key===a)))},sidebarConfig:{defaultOpen:!0,defaultActiveTabId:"tableSettings",defaultTabs:[{id:"tableSettings",showInSidebar:!1}]}}})}},P=["tr","loremIpsum"],tu=async({canvasElement:e})=>{const r=$(e);await H(()=>E(w(e)).toContain("Title"),{timeout:5e3}),await E(w(e)).not.toContain("TR"),await E(w(e)).not.toContain("Comment"),await M.click(r.getByRole("button",{name:"Войти в редактирование"})),await H(()=>{const t=w(e);E(t).toContain("TR"),E(t).toContain("Comment")},{timeout:5e3}),await M.click(r.getByRole("button",{name:"Выйти из редактирования"})),await H(()=>{const t=w(e);E(t).not.toContain("TR"),E(t).not.toContain("Comment")},{timeout:5e3})},A={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: управление скрытыми столбцами извне",play:tu,render:()=>{const[e,r]=n.useState(g),[t,s]=n.useState(!1),[c,l]=n.useState(P),o=()=>{s(!t),l(m=>t?[...new Set([...m,...P])]:m.filter(i=>!P.includes(i)))},a=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"tr",name:"TR",editingCell:{component:"inputString"}},{key:"loremIpsum",name:"Comment",width:300,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete"}],[]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs(h,{$css:{display:"flex",alignItems:"center",gap:"16px"},children:[u.jsx(z,{onClick:o,children:t?"Выйти из редактирования":"Войти в редактирование"}),u.jsxs("span",{children:["Скрыто: ",c.length?c.join(", "):"ничего"]})]}),u.jsx(C,{tableConfig:{containerStyle:{height:600},editing:{enabled:t,onRowsChange:r,rowKeyGetter:m=>m.id},columnsControl:{enable:!0,applyMode:"instant",hiddenState:[c,l]}},columnConfig:a,rows:e})]})}},v={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:X4,render:()=>{const[e]=n.useState(g),[r,t]=n.useState(!1),s=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),c=n.useState([]),l=n.useCallback(a=>a.hovered.rowHover?{bgCell:a.theme.bgHeader}:{},[]),o=n.useMemo(()=>[{key:"id",name:"ID",themeOverride:l},{key:"task",name:"Title",themeOverride:l,minWidth:200,width:250},...r?[{key:"developer",name:"Developer",themeOverride:l}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:l,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:a=>a.priority,filter:{typeOfValue:"single",filteringType:(a,m)=>a!=="All"?m===a:!0}}},{key:"issueType",name:"Issue Type",themeOverride:l,filtering:{component:"input",filter:"includes",valueInRow:a=>`${a.task} ${a.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:l}],[r,l]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx(h,{children:u.jsx(z,{size:"s",view:"secondary",onClick:()=>t(a=>!a),children:r?"Удалить колонку Developer":"Добавить колонку Developer"})}),u.jsx(C,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:s,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:c}},columnConfig:o,rows:e})]})}},S={...p({preCode:y,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:X4,render:()=>{const[e]=n.useState(g),[r,t]=n.useState(!0),[s,c]=n.useState(!1),l=n.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),o=n.useCallback(i=>i.hovered.rowHover?{bgCell:i.theme.bgHeader}:{},[]),a=n.useMemo(()=>[{key:"id",name:"id",themeOverride:o,renderHeaderCell:({theme:i})=>u.jsxs(d.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:i.cellHorizontalPadding,right:i.cellHorizontalPadding},children:[u.jsxs(d.Container,{position:"relative",children:[u.jsx(d.Icon,{icon:u.jsx(_,{})}),u.jsx(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(O,{color:"#d70101",size:"xs"})})]}),u.jsxs(d.Container,{position:"relative",children:[u.jsx(d.Icon,{icon:u.jsx(N,{})}),u.jsx(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(O,{color:"#d70101",size:"xs"})})]})]}),renderCell:({theme:i})=>u.jsxs(d.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:i.cellHorizontalPadding,right:i.cellHorizontalPadding},children:[u.jsxs(d.Container,{position:"relative",children:[u.jsx(d.Icon,{icon:u.jsx(_,{})}),u.jsx(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(O,{color:"#d70101",size:"xs"})})]}),u.jsxs(d.Container,{position:"relative",children:[u.jsx(d.Icon,{icon:u.jsx(N,{})}),u.jsx(d.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(O,{color:"#d70101",size:"xs"})})]})]})},{key:"task",name:"Title",themeOverride:o,minWidth:200,width:250,renderCell:({row:i,theme:D})=>u.jsxs(d.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:D.cellHorizontalPadding,right:D.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxs(d.Container,{direction:"column",gap:2,children:[u.jsx(d.Text,{font:D.baseFontStyle,color:D.accentFg,style:{flexGrow:1},children:i.task??"—"}),u.jsx(d.Text,{font:D.baseFontStyle,color:D.textHeader,style:{flexGrow:1},children:i.priority??"—"})]}),u.jsx(d.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",i.complete),children:"Подробнее"})]})},...s?[{key:"developer",name:"Developer",themeOverride:o}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:o,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:i=>i.priority,filter:{typeOfValue:"single",filteringType:(i,D)=>i!=="All"?D===i:!0}}},{key:"issueType",name:"Issue Type",themeOverride:o,filtering:{component:"input",filter:"includes",valueInRow:i=>`${i.task} ${i.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:o}],[s,o]),m=n.useState([]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx(h,{children:u.jsx(z,{size:"s",view:"secondary",onClick:()=>c(i=>!i),children:s?"Удалить колонку Developer":"Добавить колонку Developer"})}),u.jsx(C,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:nu,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:r,onChange:i=>t(i.target.checked)}}]},filtering:{state:l,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:m}},columnConfig:a,rows:e})]})}},k={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[e]=n.useState(g),[r,t]=n.useState(!0),[s,c]=n.useState(!1),l=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsx(C,{tableConfig:{containerStyle:{height:700},unstickyHeader:!r,notifications:{onNotification:o=>{alert(o.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:o=>u.jsx(uu,{size:o.rowSize==="small"?"xs":"s",color:s?V:"inherit"}),onClick:()=>c(o=>!o)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:o=>u.jsx(h,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:r?"visible":"hidden"},children:u.jsx(eu,{size:o.rowSize==="small"?"xs":"s",color:V})}),onClick:()=>t(o=>!o)}]}}},columnConfig:l,rows:e})}},R={...p({preCode:y,previewSource:"shown"}),render:()=>{const[e]=n.useState(g),r=n.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),t=n.useState(()=>new Set);return u.jsx(C,{tableConfig:{selecting:{rowCheckboxDisabled:s=>s.id===2,rowShowCheckbox:s=>s.id!==3,state:t,rowKeyGetter:s=>s.id+s.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:s,hidden:c,pinned:l},o)=>{alert(`
                                    order: ${s.join(", ")}
                                    pinned: ${l.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:r,rows:e})}},F={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[e]=n.useState(g);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:L,rows:e})}},b={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[e]=n.useState(g);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:L,rows:e})}},x={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[e]=n.useState(g);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:L,rows:e})}},I={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[e]=n.useState(g),r=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:r,rows:e})}},T={...p({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[e]=n.useState(g),r=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:r,rows:e})}};var G,K,W;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      renderCell(cellInfo) {
        return <Canvas.Button id="header-tooltip-drag" portalHoverEnabled onClick={() => {}}>
                123
              </Canvas.Button>;
      }
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(W=(K=j.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Y,q,J,U,X;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [confirmLog, setConfirmLog] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Box data-testid="confirm-log" $css={{
        height: '96px',
        overflowY: 'auto',
        padding: '8px 12px',
        borderRadius: '8px',
        backgroundColor: surfaceTransparentPrimary,
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: 'monospace',
        whiteSpace: 'pre'
      }}>
          {confirmLog.length ? confirmLog.join('\\n') : 'Вызовы onConfirm: откройте настройки колонок и измените что-нибудь'}
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 600
        },
        columnsControl: {
          enable: true,
          applyMode: 'instant',
          disableHiding: ['id'],
          disablePinning: ['developer'],
          hiddenDefault: ['tr1'],
          pinnedDefault: ['complete'],
          onConfirm: ({
            order,
            hidden,
            pinned,
            changed
          }) => {
            setConfirmLog(prev => [[\`#\${prev.length + 1} изменилось: \${Object.keys(changed).join(', ')}\`, \`    order:  \${order.join(', ')}\`, \`    pinned: \${pinned.join(', ')}\`, \`    hidden: \${hidden.join(', ')}\`].join('\\n'), ...prev]);
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Q,Z,u4,e4,n4;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Сохранённый порядок колонок',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    type ModelRow = {
      id: number;
      model: string;
      version: string;
    };
    const storageKey = 'storybook.tableCanvas.columnsControl.order.v1';
    const columnConfig = useMemo<readonly ColumnConfig<ModelRow>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'version',
      name: 'Версия расчёта',
      width: 180
    }, {
      key: 'model',
      name: 'Модель',
      width: 200
    }], []);
    const [rows] = useState<ModelRow[]>([{
      id: 1,
      model: 'Прогноз спроса',
      version: 'Базовая'
    }, {
      id: 2,
      model: 'План производства',
      version: 'Сценарий 2'
    }]);
    const [orderForReset] = useState(() => ['id', 'model', 'version']);
    const orderDefault = useMemo<string[] | undefined>(() => {
      try {
        const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
        if (Array.isArray(saved) && saved.every(key => typeof key === 'string')) return saved;
      } catch {
        // При недоступном хранилище или старом формате используется orderForReset.
      }
      return undefined;
    }, []);
    const saveOrder = (order: string[]) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(order));
      } catch {
        // При недоступном хранилище перестановка и сброс работают в текущей сессии.
      }
    };
    return <TableCanvas rows={rows} columnConfig={columnConfig} tableConfig={{
      containerStyle: {
        height: 400
      },
      columnsControl: {
        enable: true,
        applyMode: 'instant',
        orderDefault,
        orderForReset,
        onConfirm: ({
          order,
          changed
        }) => {
          if (changed.order) saveOrder(order);
        },
        onReorderingHeader: ({
          newOrder
        }) => saveOrder(newOrder.filter(key => columnConfig.some(column => column.key === key)))
      },
      sidebarConfig: {
        defaultOpen: true,
        defaultActiveTabId: 'tableSettings',
        defaultTabs: [{
          id: 'tableSettings',
          showInSidebar: false
        }]
      }
    }} />;
  }
}`,...(u4=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:"Сохранённый порядок можно сбросить первым действием после перезагрузки страницы.",...(n4=(e4=B.parameters)==null?void 0:e4.docs)==null?void 0:n4.description}}};var o4,t4,r4,i4,s4;A.parameters={...A.parameters,docs:{...(o4=A.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: управление скрытыми столбцами извне',
  play: playHiddenState,
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [editOn, setEditOn] = useState(false);
    const [hidden, setHidden] = useState<string[]>(EDIT_ONLY_COLUMNS);
    const toggleEdit = () => {
      setEditOn(!editOn);
      setHidden(prev => editOn ? [...new Set([...prev, ...EDIT_ONLY_COLUMNS])] : prev.filter(key => !EDIT_ONLY_COLUMNS.includes(key)));
    };
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'tr',
      name: 'TR',
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'loremIpsum',
      name: 'Comment',
      width: 300,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Box $css={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <Button onClick={toggleEdit}>
            {editOn ? 'Выйти из редактирования' : 'Войти в редактирование'}
          </Button>
          <span>Скрыто: {hidden.length ? hidden.join(', ') : 'ничего'}</span>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: 600
        },
        editing: {
          // Режим включает только кнопка над таблицей: она же показывает столбцы.
          enabled: editOn,
          onRowsChange: setRows,
          rowKeyGetter: (row: Row) => row.id
        },
        columnsControl: {
          enable: true,
          applyMode: 'instant',
          hiddenState: [hidden, setHidden]
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(r4=(t4=A.parameters)==null?void 0:t4.docs)==null?void 0:r4.source},description:{story:`### Управление скрытыми столбцами извне (hiddenState)

Список скрытых столбцов хранится у потребителя и передаётся в таблицу парой
\`columnsControl.hiddenState\`. Столбцы TR и Comment нужны только при
редактировании: кнопка над таблицей в одном обработчике включает режим
редактирования и показывает их, при выходе снова скрывает. Таблица не
пересоздаётся, прокрутка и выделение сохраняются.

Свитчи в настройках столбцов пишут в то же состояние: строка над таблицей
показывает, что скрыто сейчас. Столбцы, которые скрыл пользователь, при
входе и выходе из редактирования не трогаются.`,...(s4=(i4=A.parameters)==null?void 0:i4.docs)==null?void 0:s4.description}}};var a4,l4,d4,c4,m4;v.parameters={...v.parameters,docs:{...(a4=v.parameters)==null?void 0:a4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const themeOverride = useCallback<NonNullable<ColumnConfig<Row>['themeOverride']>>(cellInfo => {
      if (cellInfo.hovered.rowHover) {
        return {
          bgCell: cellInfo.theme.bgHeader
        };
      }
      return {};
    }, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      themeOverride
    }, {
      key: 'task',
      name: 'Title',
      themeOverride,
      minWidth: 200,
      width: 250
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer',
      themeOverride
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      themeOverride,
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      themeOverride,
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      themeOverride
    }], [developerIsShown, themeOverride]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '60vh'
        },
        highlightActiveType: 'row',
        columnsControl: {
          enable: true,
          hiding: true,
          pinning: true,
          reorderingAside: true,
          reorderingHeader: true
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            id: {
              label: 'id',
              clearedValue: ''
            },
            task: {
              label: 'task',
              clearedValue: ''
            },
            priority: {
              label: 'Some Label',
              clearedValue: 'All'
            },
            issueType: {
              label: 'issueType',
              clearedValue: []
            },
            complete: {
              label: 'complete',
              clearedValue: ''
            },
            date: {
              label: 'Дата',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        sorting: {
          state: sortingStateAndSetter
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(d4=(l4=v.parameters)==null?void 0:l4.docs)==null?void 0:d4.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.`,...(m4=(c4=v.parameters)==null?void 0:c4.docs)==null?void 0:m4.description}}};var p4,C4,y4,g4,E4;S.parameters={...S.parameters,docs:{...(p4=S.parameters)==null?void 0:p4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SimpleTable: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [isFavorite, setIsFavorite] = useState(true);
    const [developerIsShown, setDeveloperIsShown] = useState(false);
    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const themeOverride = useCallback<NonNullable<ColumnConfig<Row>['themeOverride']>>(cellInfo => {
      if (cellInfo.hovered.rowHover) {
        return {
          bgCell: cellInfo.theme.bgHeader
        };
      }
      return {};
    }, []);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'id',
      themeOverride,
      renderHeaderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>,
      renderCell: ({
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon position="absolute" top={-5} right={-5} icon={<IconBrightness0Fill color="#d70101" size="xs" />} />
              </Canvas.Container>
            </Canvas.Container>
    }, {
      key: 'task',
      name: 'Title',
      themeOverride,
      minWidth: 200,
      width: 250,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="row" alignItems="center" justifyContent="space-between" gap={8} wrap="wrap" padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }} style={{
        width: '100%'
      }}>
              <Canvas.Container direction="column" gap={2}>
                <Canvas.Text font={theme.baseFontStyle} color={theme.accentFg} style={{
            flexGrow: 1
          }}>
                  {row.task ?? '—'}
                </Canvas.Text>
                <Canvas.Text font={theme.baseFontStyle} color={theme.textHeader} style={{
            flexGrow: 1
          }}>
                  {row.priority ?? '—'}
                </Canvas.Text>
              </Canvas.Container>
              <Canvas.Button portalHoverEnabled variant="secondary" onClick={() =>
        // eslint-disable-next-line no-console
        console.log('Подробнее по сотруднику', row.complete)}>
                Подробнее
              </Canvas.Button>
            </Canvas.Container>
    }, ...(developerIsShown ? [{
      key: 'developer',
      name: 'Developer',
      themeOverride
    } satisfies ColumnConfig<Row>] : []), {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      themeOverride,
      filtering: {
        component: 'select',
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'All',
            text: 'All'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        },
        keyInFilterState: 'priority',
        valueInRow: r => r.priority,
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
        }
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      themeOverride,
      filtering: {
        component: 'input',
        filter: 'includes',
        valueInRow: r => \`\${r.task} \${r.id}\`,
        keyInFilterState: 'task'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      themeOverride
    }], [developerIsShown, themeOverride]);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    return <Box $css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Box>
          <Button size="s" view="secondary" onClick={() => setDeveloperIsShown(prev => !prev)}>
            {developerIsShown ? 'Удалить колонку Developer' : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '60vh'
        },
        rowSize: {
          default: 'big',
          showInControl: true
        },
        highlightActiveType: 'row',
        fullScreenEnabled: true,
        controlBlock: {
          customFeatures: [
          // Обязательная кастомная фича
          {
            value: 'favorite',
            label: 'Удалить из избранного',
            Icon: IconStar,
            onClick: () => {},
            mandatory: true,
            details: {
              type: 'switch',
              label: 'В избранном',
              checked: isFavorite,
              onChange: e => setIsFavorite(e.target.checked)
            }
          }]
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            id: {
              label: 'id',
              clearedValue: ''
            },
            task: {
              label: 'task',
              clearedValue: ''
            },
            priority: {
              label: 'Some Label',
              clearedValue: 'All'
            },
            issueType: {
              label: 'issueType',
              clearedValue: []
            },
            complete: {
              label: 'complete',
              clearedValue: ''
            },
            date: {
              label: 'Дата',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        sorting: {
          state: sortingStateAndSetter
        }
      }} columnConfig={columnConfig} rows={rows} />
      </Box>;
  }
}`,...(y4=(C4=S.parameters)==null?void 0:C4.docs)==null?void 0:y4.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(E4=(g4=S.parameters)==null?void 0:g4.docs)==null?void 0:E4.description}}};var h4,D4,w4,f4,B4;k.parameters={...k.parameters,docs:{...(h4=k.parameters)==null?void 0:h4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: доп. пункты меню закрепления',
  render: () => {
    const [rows] = useState(createRows);
    // Шапка по умолчанию закреплена (unstickyHeader=false) → галочка есть.
    const [isHeaderPinned, setIsHeaderPinned] = useState(true);
    const [isRowsPinned, setIsRowsPinned] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      // Реальное залипание шапки — «Закрепить шапку» переключает его.
      unstickyHeader: !isHeaderPinned,
      // Клик «Закрепить столбцы» без выделения → событие pin/no-selection.
      notifications: {
        onNotification: e => {
          // eslint-disable-next-line no-alert
          alert(e.message);
        }
      },
      columnsControl: {
        enable: true,
        pinning: true,
        disablePinning: ['developer'],
        pinnedDefault: ['complete']
      },
      controlBlock: {
        pinningMenu: {
          // Мёржатся с нативными (Открепить всё order=100, Закрепить
          // столбцы order=200). Итог: … → Закрепить строки → divider →
          // Закрепить шапку.
          items: [{
            value: 'pin-rows',
            label: 'Закрепить строки',
            order: 300,
            dividerAfter: true,
            icon: ctx => <IconPinListOutline size={ctx.rowSize === 'small' ? 'xs' : 's'} color={isRowsPinned ? textInfo : 'inherit'} />,
            onClick: () => setIsRowsPinned(prev => !prev)
          }, {
            value: 'pin-header',
            label: 'Закрепить шапку',
            order: 400,
            icon: ctx => <Box $css={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility: isHeaderPinned ? 'visible' : 'hidden'
            }}>
                      <IconDone size={ctx.rowSize === 'small' ? 'xs' : 's'} color={textInfo} />
                    </Box>,
            onClick: () => setIsHeaderPinned(prev => !prev)
          }]
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(w4=(D4=k.parameters)==null?void 0:D4.docs)==null?void 0:w4.source},description:{story:`### Доп. пункты меню закрепления (pinningMenu)

Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
закрепления своими пунктами через \`controlBlock.pinningMenu.items\`: порядок
задаётся \`order\`, разделитель — \`dividerAfter\`, состояние/иконку контролирует
продукт. «Закрепить шапку» реально переключает залипание шапки через
\`tableConfig.unstickyHeader\` (по умолчанию закреплена — галочка есть; клик
откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
добавить.`,...(B4=(f4=k.parameters)==null?void 0:f4.docs)==null?void 0:B4.description}}};var A4,v4,S4;R.parameters={...R.parameters,docs:{...(A4=R.parameters)==null?void 0:A4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <TableCanvas tableConfig={{
      selecting: {
        rowCheckboxDisabled: row => row.id === 2,
        rowShowCheckbox: row => row.id !== 3,
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: false
      },
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true,
        hiding: true,
        disableHiding: ['id'],
        pinning: true,
        disablePinning: ['developer'],
        reorderingAside: true,
        reorderingHeader: true,
        columnsLabel: {
          task: 'Задачи'
        },
        orderDefault: ['id', 'issueType', 'task'],
        hiddenDefault: ['tr1'],
        pinnedDefault: ['complete'],
        onConfirm: ({
          order,
          hidden,
          pinned
        }, _setters) => {
          // eslint-disable-next-line no-alert
          alert(\`
                                    order: \${order.join(', ')}
                                    pinned: \${pinned.join(', ')}
                                    hidden: \${hidden.join(', ')}
                                \`);
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(S4=(v4=R.parameters)==null?void 0:v4.docs)==null?void 0:S4.source}}};var k4,F4,b4,x4,I4;F.parameters={...F.parameters,docs:{...(k4=F.parameters)==null?void 0:k4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['priority', 'developer', 'tr1']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...(b4=(F4=F.parameters)==null?void 0:F4.docs)==null?void 0:b4.source},description:{story:`Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
весь промежуток).`,...(I4=(x4=F.parameters)==null?void 0:x4.docs)==null?void 0:I4.description}}};var T4,j4,R4,H4,O4;b.parameters={...b.parameters,docs:{...(T4=b.parameters)==null?void 0:T4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов по бокам',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        pinning: true,
        pinnedDefault: ['task'],
        hiddenDefault: ['id', 'complete']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...(R4=(j4=b.parameters)==null?void 0:j4.docs)==null?void 0:R4.source},description:{story:`Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
вместе со своей границей.`,...(O4=(H4=b.parameters)==null?void 0:H4.docs)==null?void 0:O4.description}}};var P4,M4,$4,z4,L4;x.parameters={...x.parameters,docs:{...(P4=x.parameters)==null?void 0:P4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов выключен',
  render: () => {
    const [rows] = useState(createRows);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenColumnsIndicator: false,
        hiddenDefault: ['priority']
      }
    }} columnConfig={INDICATOR_COLS} rows={rows} />;
  }
}`,...($4=(M4=x.parameters)==null?void 0:M4.docs)==null?void 0:$4.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
без подсветки границ.`,...(L4=(z4=x.parameters)==null?void 0:z4.docs)==null?void 0:L4.description}}};var V4,_4,N4,G4,K4;I.parameters={...I.parameters,docs:{...(V4=I.parameters)==null?void 0:V4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов в группе',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 120
    }, {
      key: 'metrics',
      name: 'Показатели',
      children: [{
        key: 'task',
        name: 'План',
        width: 130
      }, {
        key: 'priority',
        name: 'Факт',
        width: 130
      }, {
        key: 'issueType',
        name: 'Прогноз',
        width: 130
      }]
    }, {
      key: 'grade',
      name: 'Оценка',
      children: [{
        key: 'developer',
        name: 'Инд',
        width: 130
      }, {
        key: 'complete',
        name: 'Итог',
        width: 130
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['priority', 'developer']
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(N4=(_4=I.parameters)==null?void 0:_4.docs)==null?void 0:N4.source},description:{story:`Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
(внутри группы «Оценка»).`,...(K4=(G4=I.parameters)==null?void 0:G4.docs)==null?void 0:K4.description}}};var W4,Y4,q4,J4,U4;T.parameters={...T.parameters,docs:{...(W4=T.parameters)==null?void 0:W4.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'ColumnsControl: индикатор скрытых столбцов в скваш-колонках',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [{
      key: 'id',
      name: 'ID',
      width: 100
    }, {
      key: 'deep',
      name: 'Глубокая',
      children: [{
        key: 'sub',
        name: 'Подгруппа',
        children: [{
          key: 'task',
          name: 'A',
          width: 110
        }, {
          key: 'priority',
          name: 'B',
          width: 110
        }, {
          key: 'issueType',
          name: 'B1',
          width: 110
        }]
      }]
    }, {
      key: 'developer',
      name: 'Ср',
      width: 130
    }, {
      key: 'shallow',
      name: 'Мелкая',
      children: [{
        key: 'complete',
        name: 'C',
        width: 160
      }]
    }];
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 420
      },
      rowMarkers: {
        startIndex: 1
      },
      columnsGrouping: {
        squashEmptyCells: true
      },
      columnsControl: {
        enable: true,
        hiding: true,
        hiddenDefault: ['issueType', 'developer']
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(q4=(Y4=T.parameters)==null?void 0:Y4.docs)==null?void 0:q4.source},description:{story:`Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
(B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(U4=(J4=T.parameters)==null?void 0:J4.docs)==null?void 0:U4.description}}};const ru=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlPersistedOrder","ColumnsControlHiddenState","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],gu=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:j,ColumnsControlDynamicColumn:v,ColumnsControlHiddenState:A,ColumnsControlInstantApply:f,ColumnsControlPersistedOrder:B,ColumnsControlPinningMenu:k,ColumnsControlWithServiceColumnsForTest:R,HiddenColumnsIndicator:F,HiddenColumnsIndicatorDisabled:x,HiddenColumnsIndicatorEdges:b,HiddenColumnsIndicatorGrouped:I,HiddenColumnsIndicatorSquashed:T,SimpleTableDynamicColumn:S,__namedExportsOrder:ru,default:ou},Symbol.toStringTag,{value:"Module"}));export{gu as T};
