import{r as t,j as u}from"./react-CAOzMBF_.js";import{c as I}from"./tableData-DVJFoYoT.js";import{s as F}from"./storySourceDoc-tVKyHcEN.js";import{T as f,S as o}from"./TableCanvas-DlX-Wh2b.js";import{x as z}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{u1 as E,rf as s,hX as h}from"./@salutejs/plasma-icons-Do5ggeDI.js";const x={title:"Локальные компоненты/TableCanvas/ControlBlock/SplitIconButton",tags:["!autodocs"]},y=`import {
  ColumnConfig,
  SplitIconButton,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';`,n={...F({preCode:y,previewSource:"shown"}),name:"SplitIconButton как кастомные фичи ControlBlock",render:()=>{const[v]=t.useState(I),b=t.useMemo(()=>[{key:"id",name:"ID",resizable:!0},{key:"task",name:"Task",resizable:!0},{key:"priority",name:"Priority",resizable:!0},{key:"developer",name:"Developer",resizable:!0}],[]),[l,a]=t.useState("important"),D=[{value:"important",label:"Важное"},{value:"urgent",label:"Срочное"},{value:"later",label:"На потом"}],B=e=>({contentLeft:u.jsx("span",{style:{display:"inline-flex",visibility:l===e?"visible":"hidden"},children:u.jsx(h,{size:"s",color:z})})}),r=D.map(e=>({...e,...B(e.value)})),[d,i]=t.useState("csv"),c=[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}];return u.jsx(f,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},controlBlock:{show:!0,size:"m",customFeatures:[{value:"label",CustomIconRender:()=>u.jsx(o,{icon:u.jsx(E,{size:"s"}),chevronSize:"xs",size:"m",items:r,onItemSelect:e=>a(String(e.value)),onIconClick:()=>alert("Клик по иконке метки")}),canBeCompressedInToolsMenu:!0,details:{type:"select",label:"Метка",value:l,options:r,onChange:a,icon:()=>u.jsx(E,{size:"s"})}},{value:"export",CustomIconRender:()=>u.jsx(o,{icon:u.jsx(s,{size:"s"}),chevronSize:"xs",size:"m",items:c,onItemSelect:e=>i(String(e.value)),onIconClick:()=>alert("Клик по иконке экспорта")}),canBeCompressedInToolsMenu:!0,details:{type:"select",label:"Экспорт",value:d,options:c,onChange:i,icon:()=>u.jsx(s,{size:"s"})}},{value:"copy",CustomIconRender:()=>u.jsx(o,{icon:u.jsx(s,{size:"s"}),chevronSize:"xs",size:"m",onIconClick:()=>alert("Скопировать"),onChevronClick:()=>alert("Дополнительно")})}]}},columnConfig:b,rows:v})}};var m,C,p,S,A;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SplitIconButton как кастомные фичи ControlBlock',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      resizable: true
    }, {
      key: 'task',
      name: 'Task',
      resizable: true
    }, {
      key: 'priority',
      name: 'Priority',
      resizable: true
    }, {
      key: 'developer',
      name: 'Developer',
      resizable: true
    }], []);

    // Фича "Метка": один и тот же контент пунктов и в панели (items), и в
    // свёрнутом виде (details.options). Синюю галочку активного пункта рисует
    // сам разработчик через contentLeft — библиотека её не навязывает.
    const [label, setLabel] = useState('important');
    const LABELS = [{
      value: 'important',
      label: 'Важное'
    }, {
      value: 'urgent',
      label: 'Срочное'
    }, {
      value: 'later',
      label: 'На потом'
    }];
    const withCheck = (value: string) => ({
      contentLeft: <span style={{
        display: 'inline-flex',
        visibility: label === value ? 'visible' : 'hidden'
      }}>
          <IconDone size="s" color={textInfo} />
        </span>
    });
    const labelItems = LABELS.map(o => ({
      ...o,
      ...withCheck(o.value)
    }));

    // Фича "Экспорт": пункты без галочек — просто список форматов.
    const [fmt, setFmt] = useState('csv');
    const FORMATS = [{
      value: 'csv',
      label: 'CSV'
    }, {
      value: 'xlsx',
      label: 'Excel'
    }, {
      value: 'pdf',
      label: 'PDF'
    }];

    // Фича "Копирование": шеврон без дропдауна (items не заданы) —
    // обе кнопки работают как обычные действия.
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '60vh'
      },
      // Поиск + rowSize + fullScreen, чтобы можно было сузить окно и
      // увидеть компрессию фич в overflow-дропдаун.
      fullScreenEnabled: true,
      rowSize: {
        default: 'big',
        showInControl: true
      },
      searching: {
        enabled: true
      },
      controlBlock: {
        show: true,
        size: 'm',
        customFeatures: [{
          value: 'label',
          // Панель: SplitIconButton с выбором метки и галочкой.
          CustomIconRender: () => <SplitIconButton icon={<IconStar size="s" />} chevronSize="xs" size="m" items={labelItems} onItemSelect={item => setLabel(String(item.value))} onIconClick={() => alert('Клик по иконке метки')} />,
          canBeCompressedInToolsMenu: true,
          // Свёрнутый вид: тот же выбор как select с галочкой в contentLeft.
          details: {
            type: 'select',
            label: 'Метка',
            value: label,
            options: labelItems,
            onChange: setLabel,
            icon: () => <IconStar size="s" />
          }
        }, {
          value: 'export',
          CustomIconRender: () => <SplitIconButton icon={<IconSb size="s" />} chevronSize="xs" size="m" items={FORMATS} onItemSelect={item => setFmt(String(item.value))} onIconClick={() => alert('Клик по иконке экспорта')} />,
          canBeCompressedInToolsMenu: true,
          details: {
            type: 'select',
            label: 'Экспорт',
            value: fmt,
            options: FORMATS,
            onChange: setFmt,
            icon: () => <IconSb size="s" />
          }
        }, {
          value: 'copy',
          // Без items: шеврон становится обычной кнопкой (onChevronClick).
          CustomIconRender: () => <SplitIconButton icon={<IconSb size="s" />} chevronSize="xs" size="m" onIconClick={() => alert('Скопировать')} onChevronClick={() => alert('Дополнительно')} />
        }]
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(C=n.parameters)==null?void 0:C.docs)==null?void 0:p.source},description:{story:`Несколько SplitIconButton как кастомные фичи ControlBlock. Включены поиск,
rowSize и полноэкранный режим — сузьте окно, чтобы сработала компрессия:
фичи уедут в overflow-дропдаун ("…"), и там их свёрнутый вид описывается
через details фичи (например select с галочкой активного пункта).`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};const g=["AsCustomFeatures"],M=Object.freeze(Object.defineProperty({__proto__:null,AsCustomFeatures:n,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{M as S};
