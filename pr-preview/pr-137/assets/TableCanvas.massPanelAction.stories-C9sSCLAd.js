import{r as u,j as r}from"./react-CAOzMBF_.js";import{c as a}from"./tableData-DVJFoYoT.js";import G from"./DocStoryTemplate-Cf946dgV.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{T as i}from"./TableCanvas-DlX-Wh2b.js";const K={title:"Локальные компоненты/TableCanvas/ControlBlock/MassPanelAction",tags:["!autodocs"],parameters:{docs:{page:G}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

`,y={name:"Базовая панель массовых действий",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>{alert("Экспорт выбранных строк")}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>{alert("Архивирование выбранных строк")}},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>{alert("Дублирование выбранных строк")}},{type:"button",text:"Accent",view:"accent",onClick:()=>{alert("Accent click")}}]}}},columnConfig:t,rows:e})}},m={name:"Панель с accent кнопками",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Обычная кнопка 1",view:"secondary",onClick:()=>alert("Кнопка 1")},{type:"button",text:"Обычная кнопка 2",view:"secondary",onClick:()=>alert("Кнопка 2")},{type:"button",text:"Еще одна кнопка",view:"secondary",onClick:()=>alert("Accent Button")},{type:"button",text:"Обычная кнопка 3",view:"secondary",onClick:()=>alert("Кнопка 3")},{type:"button",text:"Accent кнопка (всегда видима)",view:"accent",onClick:()=>alert("Accent кнопка")}]}}},columnConfig:t,rows:e})}},d={name:"Панель с кнопками типа Button",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>alert("Отменить")},{type:"button",text:"Действие",view:"secondary",onClick:()=>alert("Действие")},{type:"button",text:"Сохранить",view:"accent",onClick:()=>alert("Сохранить")}]}}},columnConfig:t,rows:e})}},C={name:"Панель с disabled кнопками",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useState(()=>new Set),[t]=n,o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:j=>j.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",disabled:t.size===0,disabledTooltipProps:{text:"Выберите хотя бы одну строку для экспорта"},onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",disabled:t.size<2,disabledTooltipProps:{text:"Выберите минимум 2 строки для архивирования"},onClick:()=>alert("Архивировать")},{type:"button",text:"Accent",view:"accent",disabled:t.size===0,disabledTooltipProps:{text:"Выберите строки для удаления"},onClick:()=>alert("Accent")}]}}},columnConfig:o,rows:e})}},w={name:"Панель без selecting (show: true)",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},controlBlock:{massActionPanel:{show:!0,buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>{alert("Отменить")}},{type:"button",text:"Сохранить",view:"accent",onClick:()=>{alert("Сохранить")}}]}}},columnConfig:n,rows:e})}},s={name:"Уменьшенная панель (size XS)",...c({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(a),n=u.useState(()=>new Set(e.slice(0,3).map(o=>o.id))),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return r.jsx(i,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{size:"xs",buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивировать")},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>alert("Дублировать")},{type:"button",text:"Accent",view:"accent",onClick:()=>alert("Accent")}]}}},columnConfig:t,rows:e})}};var p,S,k;y.parameters={...y.parameters,docs:{...(p=y.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(k=(S=y.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,D,b;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(b=(D=m.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var g,E,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var B,x,F;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(F=(x=C.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var h,T,P;w.parameters={...w.parameters,docs:{...(h=w.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Панель без selecting (show: true)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
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
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: 700
      },
      controlBlock: {
        massActionPanel: {
          show: true,
          buttons: [{
            type: 'button',
            text: 'Отменить',
            view: 'secondary',
            onClick: () => {
              alert('Отменить');
            }
          }, {
            type: 'button',
            text: 'Сохранить',
            view: 'accent',
            onClick: () => {
              alert('Сохранить');
            }
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(P=(T=w.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var f,R,M,I,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(M=(R=s.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Уменьшенная панель массовых действий — размер `size: 'xs'`.\n\nРазмер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта\n(медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),\nиконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.",...(z=(I=s.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};const W=["MassPanelActionBasic","MassPanelActionWithAccent","MassPanelActionWithButton","MassPanelActionWithDisabled","MassPanelActionForceShow","MassPanelActionSizeXS"],J=Object.freeze(Object.defineProperty({__proto__:null,MassPanelActionBasic:y,MassPanelActionForceShow:w,MassPanelActionSizeXS:s,MassPanelActionWithAccent:m,MassPanelActionWithButton:d,MassPanelActionWithDisabled:C,__namedExportsOrder:W,default:K},Symbol.toStringTag,{value:"Module"}));export{J as T};
