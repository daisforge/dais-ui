import{r as u,j as l}from"./react-CAOzMBF_.js";import{c as y}from"./tableData-DVJFoYoT.js";import M from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as m}from"./Table-BQHrw1K6.js";const I={title:"Локальные компоненты/Table/ControlBlock/MassPanelAction",tags:["!autodocs"],parameters:{docs:{page:M}}},p=`
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

`,r={name:"Базовая панель массовых действий",...d({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(y),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return l.jsx(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>{alert("Экспорт выбранных строк")}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>{alert("Архивирование выбранных строк")}},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>{alert("Дублирование выбранных строк")}},{type:"button",text:"Accent",view:"accent",onClick:()=>{alert("Accent click")}}]}}},columnConfig:e,rows:t})}},a={name:"Панель с accent кнопками",...d({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(y),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return l.jsx(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Обычная кнопка 1",view:"secondary",onClick:()=>alert("Кнопка 1")},{type:"button",text:"Обычная кнопка 2",view:"secondary",onClick:()=>alert("Кнопка 2")},{type:"button",text:"Еще одна кнопка",view:"secondary",onClick:()=>alert("Accent Button")},{type:"button",text:"Обычная кнопка 3",view:"secondary",onClick:()=>alert("Кнопка 3")},{type:"button",text:"Accent кнопка (всегда видима)",view:"accent",onClick:()=>alert("Accent кнопка")}]}}},columnConfig:e,rows:t})}},c={name:"Панель с кнопками типа Button",...d({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(y),o=u.useState(()=>new Set),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsx(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>alert("Отменить")},{type:"button",text:"Действие",view:"secondary",onClick:()=>alert("Действие")},{type:"button",text:"Сохранить",view:"accent",onClick:()=>alert("Сохранить")}]}}},columnConfig:e,rows:t})}},i={name:"Панель с disabled кнопками",...d({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(y),o=u.useState(()=>new Set),[e]=o,n=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsx(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:R=>R.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",disabled:e.size===0,disabledTooltipProps:{text:"Выберите хотя бы одну строку для экспорта"},onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",disabled:e.size<2,disabledTooltipProps:{text:"Выберите минимум 2 строки для архивирования"},onClick:()=>alert("Архивировать")},{type:"button",text:"Accent",view:"accent",disabled:e.size===0,disabledTooltipProps:{text:"Выберите строки для удаления"},onClick:()=>alert("Accent")}]}}},columnConfig:n,rows:t})}},s={name:"Уменьшенная панель (size XS)",...d({preCode:p,previewSource:"shown"}),render:()=>{const[t]=u.useState(y),o=u.useState(()=>new Set(t.slice(0,3).map(n=>n.id))),e=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return l.jsx(m,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:n=>n.id},controlBlock:{massActionPanel:{size:"xs",buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивировать")},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>alert("Дублировать")},{type:"button",text:"Accent",view:"accent",onClick:()=>alert("Accent")}]}}},columnConfig:e,rows:t})}};var w,C,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,k,D;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(k=a.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var b,g,E;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(g=c.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var B,x,v;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,P,T,f,h;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:"Уменьшенная панель массовых действий — размер `size: 'xs'`.\n\nРазмер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта\n(медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),\nиконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const z=["MassPanelActionBasic","MassPanelActionWithAccent","MassPanelActionWithButton","MassPanelActionWithDisabled","MassPanelActionSizeXS"],_=Object.freeze(Object.defineProperty({__proto__:null,MassPanelActionBasic:r,MassPanelActionSizeXS:s,MassPanelActionWithAccent:a,MassPanelActionWithButton:c,MassPanelActionWithDisabled:i,__namedExportsOrder:z,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as T};
