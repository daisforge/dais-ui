import{r as u,d as l}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import M from"./DocStoryTemplate-DwKiq8z4.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{f as m}from"./Table-ocwmzH40.js";const I={title:"Локальные компоненты/Table/ControlBlock/MassPanelAction",tags:["!autodocs"],parameters:{docs:{page:M}}},p=`
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

`,r={name:"Базовая панель массовых действий",...y({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(d),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return l.jsxDEV(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>{alert("Экспорт выбранных строк")}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>{alert("Архивирование выбранных строк")}},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>{alert("Дублирование выбранных строк")}},{type:"button",text:"Accent",view:"accent",onClick:()=>{alert("Accent click")}}]}}},columnConfig:e,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:69,columnNumber:7},void 0)}},a={name:"Панель с accent кнопками",...y({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(d),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return l.jsxDEV(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Обычная кнопка 1",view:"secondary",onClick:()=>alert("Кнопка 1")},{type:"button",text:"Обычная кнопка 2",view:"secondary",onClick:()=>alert("Кнопка 2")},{type:"button",text:"Еще одна кнопка",view:"secondary",onClick:()=>alert("Accent Button")},{type:"button",text:"Обычная кнопка 3",view:"secondary",onClick:()=>alert("Кнопка 3")},{type:"button",text:"Accent кнопка (всегда видима)",view:"accent",onClick:()=>alert("Accent кнопка")}]}}},columnConfig:e,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:158,columnNumber:7},void 0)}},i={name:"Панель с кнопками типа Button",...y({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(d),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsxDEV(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>alert("Отменить")},{type:"button",text:"Действие",view:"secondary",onClick:()=>alert("Действие")},{type:"button",text:"Сохранить",view:"accent",onClick:()=>alert("Сохранить")}]}}},columnConfig:e,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:241,columnNumber:7},void 0)}},c={name:"Панель с disabled кнопками",...y({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(d),o=u.useState(()=>new Set),[e]=o,n=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsxDEV(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:R=>R.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",disabled:e.size===0,disabledTooltipProps:{text:"Выберите хотя бы одну строку для экспорта"},onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",disabled:e.size<2,disabledTooltipProps:{text:"Выберите минимум 2 строки для архивирования"},onClick:()=>alert("Архивировать")},{type:"button",text:"Accent",view:"accent",disabled:e.size===0,disabledTooltipProps:{text:"Выберите строки для удаления"},onClick:()=>alert("Accent")}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:312,columnNumber:7},void 0)}},s={name:"Уменьшенная панель (size XS)",...y({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(d),o=u.useState(()=>new Set(t.slice(0,3).map(n=>n.id))),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return l.jsxDEV(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{size:"xs",buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивировать")},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>alert("Дублировать")},{type:"button",text:"Accent",view:"accent",onClick:()=>alert("Accent")}]}}},columnConfig:e,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:396,columnNumber:7},void 0)}};var w,C,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Базовая панель массовых действий',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
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
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: row => row.id
      },
      controlBlock: {
        massActionPanel: {
          buttons: [{
            type: 'button',
            text: 'Экспорт',
            view: 'secondary',
            onClick: () => {
              alert('Экспорт выбранных строк');
            }
          }, {
            type: 'button',
            text: 'Архивировать',
            view: 'secondary',
            onClick: () => {
              alert('Архивирование выбранных строк');
            }
          }, {
            type: 'button',
            text: 'Дублировать',
            view: 'secondary',
            onClick: () => {
              alert('Дублирование выбранных строк');
            }
          }, {
            type: 'button',
            text: 'Accent',
            view: 'accent',
            onClick: () => {
              alert('Accent click');
            }
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,A,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Панель с accent кнопками',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
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
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: row => row.id
      },
      controlBlock: {
        massActionPanel: {
          buttons: [{
            type: 'button',
            text: 'Обычная кнопка 1',
            view: 'secondary',
            onClick: () => alert('Кнопка 1')
          }, {
            type: 'button',
            text: 'Обычная кнопка 2',
            view: 'secondary',
            onClick: () => alert('Кнопка 2')
          }, {
            type: 'button',
            text: 'Еще одна кнопка',
            view: 'secondary',
            onClick: () => alert('Accent Button')
          }, {
            type: 'button',
            text: 'Обычная кнопка 3',
            view: 'secondary',
            onClick: () => alert('Кнопка 3')
          }, {
            type: 'button',
            text: 'Accent кнопка (всегда видима)',
            view: 'accent',
            onClick: () => alert('Accent кнопка')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var D,g,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Панель с кнопками типа Button',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: row => row.id
      },
      controlBlock: {
        massActionPanel: {
          buttons: [{
            type: 'button',
            text: 'Отменить',
            view: 'secondary',
            onClick: () => alert('Отменить')
          }, {
            type: 'button',
            text: 'Действие',
            view: 'secondary',
            onClick: () => alert('Действие')
          }, {
            type: 'button',
            text: 'Сохранить',
            view: 'accent',
            onClick: () => alert('Сохранить')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var B,x,v;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Панель с disabled кнопками',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const [selectedCount] = selectingRowStateAndSetter;
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: row => row.id
      },
      controlBlock: {
        massActionPanel: {
          buttons: [{
            type: 'button',
            text: 'Экспорт',
            view: 'secondary',
            disabled: selectedCount.size === 0,
            disabledTooltipProps: {
              text: 'Выберите хотя бы одну строку для экспорта'
            },
            onClick: () => alert('Экспорт')
          }, {
            type: 'button',
            text: 'Архивировать',
            view: 'secondary',
            disabled: selectedCount.size < 2,
            disabledTooltipProps: {
              text: 'Выберите минимум 2 строки для архивирования'
            },
            onClick: () => alert('Архивировать')
          }, {
            type: 'button',
            text: 'Accent',
            view: 'accent',
            disabled: selectedCount.size === 0,
            disabledTooltipProps: {
              text: 'Выберите строки для удаления'
            },
            onClick: () => alert('Accent')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,T,f,P,h;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Уменьшенная панель (size XS)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    // Предвыбираем несколько строк, чтобы панель сразу была видна (со счётчиком и «Сбросить всё»).
    const selectingRowStateAndSetter = useState<ReadonlySet<string | number>>(() => new Set(rows.slice(0, 3).map(r => r.id)));
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
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
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: row => row.id
      },
      controlBlock: {
        massActionPanel: {
          // Размер панели задаётся извне, независимо от вьюпорта.
          size: 'xs',
          buttons: [{
            type: 'button',
            text: 'Экспорт',
            view: 'secondary',
            onClick: () => alert('Экспорт')
          }, {
            type: 'button',
            text: 'Архивировать',
            view: 'secondary',
            onClick: () => alert('Архивировать')
          }, {
            type: 'button',
            text: 'Дублировать',
            view: 'secondary',
            onClick: () => alert('Дублировать')
          }, {
            type: 'button',
            text: 'Accent',
            view: 'accent',
            onClick: () => alert('Accent')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source},description:{story:"Уменьшенная панель массовых действий — размер `size: 'xs'`.\n\nРазмер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта\n(медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),\nиконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.",...(h=(P=s.parameters)==null?void 0:P.docs)==null?void 0:h.description}}};const z=["MassPanelActionBasic","MassPanelActionWithAccent","MassPanelActionWithButton","MassPanelActionWithDisabled","MassPanelActionSizeXS"],X=Object.freeze(Object.defineProperty({__proto__:null,MassPanelActionBasic:r,MassPanelActionSizeXS:s,MassPanelActionWithAccent:a,MassPanelActionWithButton:i,MassPanelActionWithDisabled:c,__namedExportsOrder:z,default:I},Symbol.toStringTag,{value:"Module"}));export{X as T};
