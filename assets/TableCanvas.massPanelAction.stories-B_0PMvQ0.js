import{r as u,d as a}from"./react-D2T61mpp.js";import{c as r}from"./tableData-UCfjiBCh.js";import G from"./DocStoryTemplate-BrdyFHCL.js";import{s as i}from"./storySourceDoc-tVKyHcEN.js";import{T as c}from"./TableCanvas-CSYw4X1n.js";const K={title:"Локальные компоненты/TableCanvas/ControlBlock/MassPanelAction",tags:["!autodocs"],parameters:{docs:{page:G}}},l=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

`,m={name:"Базовая панель массовых действий",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>{alert("Экспорт выбранных строк")}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>{alert("Архивирование выбранных строк")}},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>{alert("Дублирование выбранных строк")}},{type:"button",text:"Accent",view:"accent",onClick:()=>{alert("Accent click")}}]}}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:69,columnNumber:7},void 0)}},y={name:"Панель с accent кнопками",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Обычная кнопка 1",view:"secondary",onClick:()=>alert("Кнопка 1")},{type:"button",text:"Обычная кнопка 2",view:"secondary",onClick:()=>alert("Кнопка 2")},{type:"button",text:"Еще одна кнопка",view:"secondary",onClick:()=>alert("Accent Button")},{type:"button",text:"Обычная кнопка 3",view:"secondary",onClick:()=>alert("Кнопка 3")},{type:"button",text:"Accent кнопка (всегда видима)",view:"accent",onClick:()=>alert("Accent кнопка")}]}}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:158,columnNumber:7},void 0)}},d={name:"Панель с кнопками типа Button",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useState(()=>new Set),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>alert("Отменить")},{type:"button",text:"Действие",view:"secondary",onClick:()=>alert("Действие")},{type:"button",text:"Сохранить",view:"accent",onClick:()=>alert("Сохранить")}]}}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:241,columnNumber:7},void 0)}},C={name:"Панель с disabled кнопками",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useState(()=>new Set),[t]=n,o=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:z=>z.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",disabled:t.size===0,disabledTooltipProps:{text:"Выберите хотя бы одну строку для экспорта"},onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",disabled:t.size<2,disabledTooltipProps:{text:"Выберите минимум 2 строки для архивирования"},onClick:()=>alert("Архивировать")},{type:"button",text:"Accent",view:"accent",disabled:t.size===0,disabledTooltipProps:{text:"Выберите строки для удаления"},onClick:()=>alert("Accent")}]}}},columnConfig:o,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:312,columnNumber:7},void 0)}},w={name:"Панель без selecting (show: true)",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},controlBlock:{massActionPanel:{show:!0,buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>{alert("Отменить")}},{type:"button",text:"Сохранить",view:"accent",onClick:()=>{alert("Сохранить")}}]}}},columnConfig:n,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:396,columnNumber:7},void 0)}},s={name:"Уменьшенная панель (size XS)",...i({preCode:l,previewSource:"shown"}),render:()=>{const[e]=u.useState(r),n=u.useState(()=>new Set(e.slice(0,3).map(o=>o.id))),t=u.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return a.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:n,rowKeyGetter:o=>o.id},controlBlock:{massActionPanel:{size:"xs",buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивировать")},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>alert("Дублировать")},{type:"button",text:"Accent",view:"accent",onClick:()=>alert("Accent")}]}}},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ControlBlock/TableCanvas.massPanelAction/TableCanvas.massPanelAction.stories.tsx",lineNumber:462,columnNumber:7},void 0)}};var p,b,k;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var A,S,D;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(S=y.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var v,g,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var B,x,T;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(x=C.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var f,P,F;w.parameters={...w.parameters,docs:{...(f=w.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(P=w.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var h,R,M,I,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(R=s.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Уменьшенная панель массовых действий — размер `size: 'xs'`.\n\nРазмер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта\n(медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),\nиконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.",...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};const j=["MassPanelActionBasic","MassPanelActionWithAccent","MassPanelActionWithButton","MassPanelActionWithDisabled","MassPanelActionForceShow","MassPanelActionSizeXS"],q=Object.freeze(Object.defineProperty({__proto__:null,MassPanelActionBasic:m,MassPanelActionForceShow:w,MassPanelActionSizeXS:s,MassPanelActionWithAccent:y,MassPanelActionWithButton:d,MassPanelActionWithDisabled:C,__namedExportsOrder:j,default:K},Symbol.toStringTag,{value:"Module"}));export{q as T};
