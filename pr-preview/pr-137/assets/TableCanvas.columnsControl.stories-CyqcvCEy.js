import{r as e,j as u}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import $4 from"./DocStoryTemplate-Cf946dgV.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{co as P4,cp as R,cv as I,cq as z4}from"./vendor-DmWczWMC.js";import{B as h}from"./Box-DvvYTz20.js";import{C as l,T as C}from"./TableCanvas-DlX-Wh2b.js";import{ax as V4,x as P}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as O4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{oX as L4,hX as G4,eQ as O,co as T,e as M,u1 as _4}from"./@salutejs/plasma-icons-Do5ggeDI.js";const N4={title:"Локальные компоненты/TableCanvas/ColumnsControl",tags:["!autodocs"],parameters:{docs:{page:$4}}},y=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,j=n=>P4(n).queryAllByRole("columnheader",{hidden:!0}).map(t=>{var a;return((a=t.textContent)==null?void 0:a.trim())??""}),M4=async({canvasElement:n})=>{const t=P4(n);await R(()=>I(j(n)).toContain("Title"),{timeout:5e3}),await I(j(n)).not.toContain("Developer"),await z4.click(t.getByRole("button",{name:"Добавить колонку Developer"})),await R(()=>{const a=j(n);I(a).toContain("Developer"),I(a.indexOf("Developer")).toBe(a.indexOf("Title")+1)},{timeout:5e3})},H=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Issue Type",width:140},{key:"developer",name:"Developer",width:160},{key:"tr1",name:"TR",width:120},{key:"complete",name:"% Complete",width:140}],b={...m({preCode:y,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),t=e.useMemo(()=>[{key:"id",name:"ID",renderCell(a){return u.jsx(l.Button,{id:"header-tooltip-drag",portalHoverEnabled:!0,onClick:()=>{},children:"123"})}},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsx(C,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:a,hidden:i,pinned:c},s)=>{alert(`
                                    order: ${a.join(", ")}
                                    pinned: ${c.join(", ")}
                                    hidden: ${i.join(", ")}
                                `)}}},columnConfig:t,rows:n})}},E={...m({preCode:y,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),[t,a]=e.useState([]),i=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx(h,{"data-testid":"confirm-log",$css:{height:"96px",overflowY:"auto",padding:"8px 12px",borderRadius:"8px",backgroundColor:V4,fontSize:"12px",lineHeight:"18px",fontFamily:"monospace",whiteSpace:"pre"},children:t.length?t.join(`
`):"Вызовы onConfirm: откройте настройки колонок и измените что-нибудь"}),u.jsx(C,{tableConfig:{containerStyle:{height:600},columnsControl:{enable:!0,applyMode:"instant",disableHiding:["id"],disablePinning:["developer"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:c,hidden:s,pinned:r,changed:d})=>{a(D=>[[`#${D.length+1} изменилось: ${Object.keys(d).join(", ")}`,`    order:  ${c.join(", ")}`,`    pinned: ${r.join(", ")}`,`    hidden: ${s.join(", ")}`].join(`
`),...D])}}},columnConfig:i,rows:n})]})}},v={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: динамическое добавление колонки",play:M4,render:()=>{const[n]=e.useState(p),[t,a]=e.useState(!1),i=e.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),c=e.useState([]),s=e.useCallback(d=>d.hovered.rowHover?{bgCell:d.theme.bgHeader}:{},[]),r=e.useMemo(()=>[{key:"id",name:"ID",themeOverride:s},{key:"task",name:"Title",themeOverride:s,minWidth:200,width:250},...t?[{key:"developer",name:"Developer",themeOverride:s}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:s,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:d=>d.priority,filter:{typeOfValue:"single",filteringType:(d,D)=>d!=="All"?D===d:!0}}},{key:"issueType",name:"Issue Type",themeOverride:s,filtering:{component:"input",filter:"includes",valueInRow:d=>`${d.task} ${d.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:s}],[t,s]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx(h,{children:u.jsx(O4,{size:"s",view:"secondary",onClick:()=>a(d=>!d),children:t?"Удалить колонку Developer":"Добавить колонку Developer"})}),u.jsx(C,{tableConfig:{containerStyle:{height:"60vh"},highlightActiveType:"row",columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0},filtering:{state:i,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:c}},columnConfig:r,rows:n})]})}},f={...m({preCode:y,previewSource:"shown"}),name:"SimpleTable: динамическое добавление колонки",play:M4,render:()=>{const[n]=e.useState(p),[t,a]=e.useState(!0),[i,c]=e.useState(!1),s=e.useState({id:"",task:"",priority:"All",issueType:[],complete:"",date:"",globalFilter:""}),r=e.useCallback(o=>o.hovered.rowHover?{bgCell:o.theme.bgHeader}:{},[]),d=e.useMemo(()=>[{key:"id",name:"id",themeOverride:r,renderHeaderCell:({theme:o})=>u.jsxs(l.Container,{direction:"row",alignItems:"center",gap:8,padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[u.jsxs(l.Container,{position:"relative",children:[u.jsx(l.Icon,{icon:u.jsx(O,{})}),u.jsx(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(T,{color:"#d70101",size:"xs"})})]}),u.jsxs(l.Container,{position:"relative",children:[u.jsx(l.Icon,{icon:u.jsx(M,{})}),u.jsx(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(T,{color:"#d70101",size:"xs"})})]})]}),renderCell:({theme:o})=>u.jsxs(l.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[u.jsxs(l.Container,{position:"relative",children:[u.jsx(l.Icon,{icon:u.jsx(O,{})}),u.jsx(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(T,{color:"#d70101",size:"xs"})})]}),u.jsxs(l.Container,{position:"relative",children:[u.jsx(l.Icon,{icon:u.jsx(M,{})}),u.jsx(l.Icon,{position:"absolute",top:-5,right:-5,icon:u.jsx(T,{color:"#d70101",size:"xs"})})]})]})},{key:"task",name:"Title",themeOverride:r,minWidth:200,width:250,renderCell:({row:o,theme:g})=>u.jsxs(l.Container,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:8,wrap:"wrap",padding:{left:g.cellHorizontalPadding,right:g.cellHorizontalPadding},style:{width:"100%"},children:[u.jsxs(l.Container,{direction:"column",gap:2,children:[u.jsx(l.Text,{font:g.baseFontStyle,color:g.accentFg,style:{flexGrow:1},children:o.task??"—"}),u.jsx(l.Text,{font:g.baseFontStyle,color:g.textHeader,style:{flexGrow:1},children:o.priority??"—"})]}),u.jsx(l.Button,{portalHoverEnabled:!0,variant:"secondary",onClick:()=>console.log("Подробнее по сотруднику",o.complete),children:"Подробнее"})]})},...i?[{key:"developer",name:"Developer",themeOverride:r}]:[],{key:"priority",name:"Priority",sortingType:"stringSort",themeOverride:r,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:o=>o.priority,filter:{typeOfValue:"single",filteringType:(o,g)=>o!=="All"?g===o:!0}}},{key:"issueType",name:"Issue Type",themeOverride:r,filtering:{component:"input",filter:"includes",valueInRow:o=>`${o.task} ${o.id}`,keyInFilterState:"task"}},{key:"complete",name:"% Complete",themeOverride:r}],[i,r]),D=e.useState([]);return u.jsxs(h,{$css:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx(h,{children:u.jsx(O4,{size:"s",view:"secondary",onClick:()=>c(o=>!o),children:i?"Удалить колонку Developer":"Добавить колонку Developer"})}),u.jsx(C,{tableConfig:{containerStyle:{height:"60vh"},rowSize:{default:"big",showInControl:!0},highlightActiveType:"row",fullScreenEnabled:!0,controlBlock:{customFeatures:[{value:"favorite",label:"Удалить из избранного",Icon:_4,onClick:()=>{},mandatory:!0,details:{type:"switch",label:"В избранном",checked:t,onChange:o=>a(o.target.checked)}}]},filtering:{state:s,filtersInfo:{id:{label:"id",clearedValue:""},task:{label:"task",clearedValue:""},priority:{label:"Some Label",clearedValue:"All"},issueType:{label:"issueType",clearedValue:[]},complete:{label:"complete",clearedValue:""},date:{label:"Дата",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},sorting:{state:D}},columnConfig:d,rows:n})]})}},w={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: доп. пункты меню закрепления",render:()=>{const[n]=e.useState(p),[t,a]=e.useState(!0),[i,c]=e.useState(!1),s=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return u.jsx(C,{tableConfig:{containerStyle:{height:700},unstickyHeader:!t,notifications:{onNotification:r=>{alert(r.message)}},columnsControl:{enable:!0,pinning:!0,disablePinning:["developer"],pinnedDefault:["complete"]},controlBlock:{pinningMenu:{items:[{value:"pin-rows",label:"Закрепить строки",order:300,dividerAfter:!0,icon:r=>u.jsx(L4,{size:r.rowSize==="small"?"xs":"s",color:i?P:"inherit"}),onClick:()=>c(r=>!r)},{value:"pin-header",label:"Закрепить шапку",order:400,icon:r=>u.jsx(h,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:t?"visible":"hidden"},children:u.jsx(G4,{size:r.rowSize==="small"?"xs":"s",color:P})}),onClick:()=>a(r=>!r)}]}}},columnConfig:s,rows:n})}},x={...m({preCode:y,previewSource:"shown"}),render:()=>{const[n]=e.useState(p),t=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]),a=e.useState(()=>new Set);return u.jsx(C,{tableConfig:{selecting:{rowCheckboxDisabled:i=>i.id===2,rowShowCheckbox:i=>i.id!==3,state:a,rowKeyGetter:i=>i.id+i.issueType,showDefault:!1},containerStyle:{height:700},columnsControl:{enable:!0,hiding:!0,disableHiding:["id"],pinning:!0,disablePinning:["developer"],reorderingAside:!0,reorderingHeader:!0,columnsLabel:{task:"Задачи"},orderDefault:["id","issueType","task"],hiddenDefault:["tr1"],pinnedDefault:["complete"],onConfirm:({order:i,hidden:c,pinned:s},r)=>{alert(`
                                    order: ${i.join(", ")}
                                    pinned: ${s.join(", ")}
                                    hidden: ${c.join(", ")}
                                `)}}},columnConfig:t,rows:n})}},A={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов",render:()=>{const[n]=e.useState(p);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer","tr1"]}},columnConfig:H,rows:n})}},B={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов по бокам",render:()=>{const[n]=e.useState(p);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,pinning:!0,pinnedDefault:["task"],hiddenDefault:["id","complete"]}},columnConfig:H,rows:n})}},k={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов выключен",render:()=>{const[n]=e.useState(p);return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenColumnsIndicator:!1,hiddenDefault:["priority"]}},columnConfig:H,rows:n})}},S={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в группе",render:()=>{const[n]=e.useState(p),t=[{key:"id",name:"ID",width:120},{key:"metrics",name:"Показатели",children:[{key:"task",name:"План",width:130},{key:"priority",name:"Факт",width:130},{key:"issueType",name:"Прогноз",width:130}]},{key:"grade",name:"Оценка",children:[{key:"developer",name:"Инд",width:130},{key:"complete",name:"Итог",width:130}]}];return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["priority","developer"]}},columnConfig:t,rows:n})}},F={...m({preCode:y,previewSource:"shown"}),name:"ColumnsControl: индикатор скрытых столбцов в скваш-колонках",render:()=>{const[n]=e.useState(p),t=[{key:"id",name:"ID",width:100},{key:"deep",name:"Глубокая",children:[{key:"sub",name:"Подгруппа",children:[{key:"task",name:"A",width:110},{key:"priority",name:"B",width:110},{key:"issueType",name:"B1",width:110}]}]},{key:"developer",name:"Ср",width:130},{key:"shallow",name:"Мелкая",children:[{key:"complete",name:"C",width:160}]}];return u.jsx(C,{tableConfig:{containerStyle:{height:420},rowMarkers:{startIndex:1},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,hiding:!0,hiddenDefault:["issueType","developer"]}},columnConfig:t,rows:n})}};var $,z,V;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(z=b.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var L,G,_,N,q;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(G=E.parameters)==null?void 0:G.docs)==null?void 0:_.source},description:{story:`### Мгновенное применение (applyMode: 'instant')

Кнопок «Отменить» и «Применить» в панели нет: каждое действие (свитч
видимости, пин, перенос, «открепить все», «сбросить порядок») сразу меняет
таблицу. \`onConfirm\` вызывается после каждого действия с тем же контрактом,
что и по кнопке «Применить». Журнал вызовов показан над таблицей.`,...(q=(N=E.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var W,X,K,Y,Q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(X=v.parameters)==null?void 0:X.docs)==null?void 0:K.source},description:{story:`### Динамическое добавление колонки

Кнопка над таблицей добавляет колонку Developer в \`columnConfig\` между Title и
Priority, повторный клик удаляет её. Управление колонками включено
(\`columnsControl.enable\`), поэтому порядок колонок хранится внутри таблицы —
стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.`,...(Q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var J,U,Z,u4,e4;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:`### Динамическое добавление колонки (SimpleTable)

Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
добавляет колонку Developer в \`columnConfig\` между Title и Priority, повторный
клик удаляет её.`,...(e4=(u4=f.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var n4,o4,t4,r4,i4;w.parameters={...w.parameters,docs:{...(n4=w.parameters)==null?void 0:n4.docs,source:{originalSource:`{
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
}`,...(t4=(o4=w.parameters)==null?void 0:o4.docs)==null?void 0:t4.source},description:{story:`### Доп. пункты меню закрепления (pinningMenu)

Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
закрепления своими пунктами через \`controlBlock.pinningMenu.items\`: порядок
задаётся \`order\`, разделитель — \`dividerAfter\`, состояние/иконку контролирует
продукт. «Закрепить шапку» реально переключает залипание шапки через
\`tableConfig.unstickyHeader\` (по умолчанию закреплена — галочка есть; клик
откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
добавить.`,...(i4=(r4=w.parameters)==null?void 0:r4.docs)==null?void 0:i4.description}}};var l4,a4,s4;x.parameters={...x.parameters,docs:{...(l4=x.parameters)==null?void 0:l4.docs,source:{originalSource:`{
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
}`,...(s4=(a4=x.parameters)==null?void 0:a4.docs)==null?void 0:s4.source}}};var d4,c4,p4,m4,C4;A.parameters={...A.parameters,docs:{...(d4=A.parameters)==null?void 0:d4.docs,source:{originalSource:`{
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
}`,...(p4=(c4=A.parameters)==null?void 0:c4.docs)==null?void 0:p4.source},description:{story:`Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
границу продолжает работать.

Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
весь промежуток).`,...(C4=(m4=A.parameters)==null?void 0:m4.docs)==null?void 0:C4.description}}};var y4,g4,h4,D4,E4;B.parameters={...B.parameters,docs:{...(y4=B.parameters)==null?void 0:y4.docs,source:{originalSource:`{
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
}`,...(h4=(g4=B.parameters)==null?void 0:g4.docs)==null?void 0:h4.source},description:{story:`Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
вместе со своей границей.`,...(E4=(D4=B.parameters)==null?void 0:D4.docs)==null?void 0:E4.description}}};var v4,f4,w4,A4,B4;k.parameters={...k.parameters,docs:{...(v4=k.parameters)==null?void 0:v4.docs,source:{originalSource:`{
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
}`,...(w4=(f4=k.parameters)==null?void 0:f4.docs)==null?void 0:w4.source},description:{story:`Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
без подсветки границ.`,...(B4=(A4=k.parameters)==null?void 0:A4.docs)==null?void 0:B4.description}}};var k4,S4,F4,b4,x4;S.parameters={...S.parameters,docs:{...(k4=S.parameters)==null?void 0:k4.docs,source:{originalSource:`{
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
}`,...(F4=(S4=S.parameters)==null?void 0:S4.docs)==null?void 0:F4.source},description:{story:`Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
(внутри группы «Оценка»).`,...(x4=(b4=S.parameters)==null?void 0:b4.docs)==null?void 0:x4.description}}};var I4,T4,j4,H4,R4;F.parameters={...F.parameters,docs:{...(I4=F.parameters)==null?void 0:I4.docs,source:{originalSource:`{
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
}`,...(j4=(T4=F.parameters)==null?void 0:T4.docs)==null?void 0:j4.source},description:{story:`Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
(B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.`,...(R4=(H4=F.parameters)==null?void 0:H4.docs)==null?void 0:R4.description}}};const q4=["ColumnsControl","ColumnsControlInstantApply","ColumnsControlDynamicColumn","SimpleTableDynamicColumn","ColumnsControlPinningMenu","ColumnsControlWithServiceColumnsForTest","HiddenColumnsIndicator","HiddenColumnsIndicatorEdges","HiddenColumnsIndicatorDisabled","HiddenColumnsIndicatorGrouped","HiddenColumnsIndicatorSquashed"],nu=Object.freeze(Object.defineProperty({__proto__:null,ColumnsControl:b,ColumnsControlDynamicColumn:v,ColumnsControlInstantApply:E,ColumnsControlPinningMenu:w,ColumnsControlWithServiceColumnsForTest:x,HiddenColumnsIndicator:A,HiddenColumnsIndicatorDisabled:k,HiddenColumnsIndicatorEdges:B,HiddenColumnsIndicatorGrouped:S,HiddenColumnsIndicatorSquashed:F,SimpleTableDynamicColumn:f,__namedExportsOrder:q4,default:N4},Symbol.toStringTag,{value:"Module"}));export{nu as T};
