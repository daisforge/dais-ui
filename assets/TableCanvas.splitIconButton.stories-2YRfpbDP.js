import{r as o,d as u}from"./react-D2T61mpp.js";import{c as S}from"./tableData-UCfjiBCh.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{T as I,S as s}from"./TableCanvas-B4E6Mz_Q.js";import{v as T}from"./@salutejs/sdds-themes-DMMPng_c.js";import{tL as m,r5 as t,hT as h}from"./@salutejs/plasma-icons-Dn1uY4zn.js";const F={title:"Локальные компоненты/TableCanvas/ControlBlock/SplitIconButton",tags:["!autodocs"]},x=`import {
  ColumnConfig,
  SplitIconButton,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';`,n={...A({preCode:x,previewSource:"shown"}),name:"SplitIconButton как кастомные фичи ControlBlock",render:()=>{const[p]=o.useState(S),B=o.useMemo(()=>[{key:"id",name:"ID",resizable:!0},{key:"task",name:"Task",resizable:!0},{key:"priority",name:"Priority",resizable:!0},{key:"developer",name:"Developer",resizable:!0}],[]),[a,l]=o.useState("important"),k=[{value:"important",label:"Важное"},{value:"urgent",label:"Срочное"},{value:"later",label:"На потом"}],D=e=>({contentLeft:u.jsxDEV("span",{style:{display:"inline-flex",visibility:a===e?"visible":"hidden"},children:u.jsxDEV(h,{size:"s",color:T},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:62,columnNumber:9},void 0)}),r=k.map(e=>({...e,...D(e.value)})),[f,i]=o.useState("csv"),c=[{value:"csv",label:"CSV"},{value:"xlsx",label:"Excel"},{value:"pdf",label:"PDF"}];return u.jsxDEV(I,{tableConfig:{containerStyle:{height:"60vh"},fullScreenEnabled:!0,rowSize:{default:"big",showInControl:!0},searching:{enabled:!0},controlBlock:{show:!0,size:"m",customFeatures:[{value:"label",CustomIconRender:()=>u.jsxDEV(s,{icon:u.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:102,columnNumber:27},void 0),chevronSize:"xs",size:"m",items:r,onItemSelect:e=>l(String(e.value)),onIconClick:()=>alert("Клик по иконке метки")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:101,columnNumber:19},void 0),canBeCompressedInToolsMenu:!0,details:{type:"select",label:"Метка",value:a,options:r,onChange:l,icon:()=>u.jsxDEV(m,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:118,columnNumber:31},void 0)}},{value:"export",CustomIconRender:()=>u.jsxDEV(s,{icon:u.jsxDEV(t,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:125,columnNumber:27},void 0),chevronSize:"xs",size:"m",items:c,onItemSelect:e=>i(String(e.value)),onIconClick:()=>alert("Клик по иконке экспорта")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:124,columnNumber:19},void 0),canBeCompressedInToolsMenu:!0,details:{type:"select",label:"Экспорт",value:f,options:c,onChange:i,icon:()=>u.jsxDEV(t,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:140,columnNumber:31},void 0)}},{value:"copy",CustomIconRender:()=>u.jsxDEV(s,{icon:u.jsxDEV(t,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:148,columnNumber:27},void 0),chevronSize:"xs",size:"m",onIconClick:()=>alert("Скопировать"),onChevronClick:()=>alert("Дополнительно")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:147,columnNumber:19},void 0)}]}},columnConfig:B,rows:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.splitIconButton.stories.tsx",lineNumber:85,columnNumber:7},void 0)}};var b,C,d,v,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(C=n.parameters)==null?void 0:C.docs)==null?void 0:d.source},description:{story:`Несколько SplitIconButton как кастомные фичи ControlBlock. Включены поиск,
rowSize и полноэкранный режим — сузьте окно, чтобы сработала компрессия:
фичи уедут в overflow-дропдаун ("…"), и там их свёрнутый вид описывается
через details фичи (например select с галочкой активного пункта).`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};const y=["AsCustomFeatures"],R=Object.freeze(Object.defineProperty({__proto__:null,AsCustomFeatures:n,__namedExportsOrder:y,default:F},Symbol.toStringTag,{value:"Module"}));export{R as S};
