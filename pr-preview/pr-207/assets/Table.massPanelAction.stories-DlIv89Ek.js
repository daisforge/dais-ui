import{r as e,b as s}from"./react-UEdzNlUe.js";import{c as a}from"./tableData-DKA5H0bF.js";import O from"./DocStoryTemplate-DUafcp_1.js";import{s as i}from"./storySourceDoc-tVKyHcEN.js";import{w as k,u as S,e as B}from"./index-Dgmteq0e.js";import{c}from"./Table-ryqDLWSW.js";const q={title:"Локальные компоненты/Table/ControlBlock/MassPanelAction",tags:["!autodocs"],parameters:{docs:{page:O}}},l=`
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

`,d={name:"Базовая панель массовых действий",...i({preCode:l,previewSource:"shown"}),render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set),n=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:u=>u.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>{alert("Экспорт выбранных строк")}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>{alert("Архивирование выбранных строк")}},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>{alert("Дублирование выбранных строк")}},{type:"button",text:"Accent",view:"accent",onClick:()=>{alert("Accent click")}}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:70,columnNumber:7},void 0)}},m={name:"Панель с accent кнопками",...i({preCode:l,previewSource:"shown"}),render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set),n=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:u=>u.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Обычная кнопка 1",view:"secondary",onClick:()=>alert("Кнопка 1")},{type:"button",text:"Обычная кнопка 2",view:"secondary",onClick:()=>alert("Кнопка 2")},{type:"button",text:"Еще одна кнопка",view:"secondary",onClick:()=>alert("Accent Button")},{type:"button",text:"Обычная кнопка 3",view:"secondary",onClick:()=>alert("Кнопка 3")},{type:"button",text:"Accent кнопка (всегда видима)",view:"accent",onClick:()=>alert("Accent кнопка")}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:159,columnNumber:7},void 0)}},y={name:"Панель с кнопками типа Button",...i({preCode:l,previewSource:"shown"}),render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set),n=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:u=>u.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Отменить",view:"secondary",onClick:()=>alert("Отменить")},{type:"button",text:"Действие",view:"secondary",onClick:()=>alert("Действие")},{type:"button",text:"Сохранить",view:"accent",onClick:()=>alert("Сохранить")}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:242,columnNumber:7},void 0)}},w={name:"Панель с disabled кнопками",...i({preCode:l,previewSource:"shown"}),render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set),[n]=o,u=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:C=>C.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",disabled:n.size===0,disabledTooltipProps:{text:"Выберите хотя бы одну строку для экспорта"},onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",disabled:n.size<2,disabledTooltipProps:{text:"Выберите минимум 2 строки для архивирования"},onClick:()=>alert("Архивировать")},{type:"button",text:"Accent",view:"accent",disabled:n.size===0,disabledTooltipProps:{text:"Выберите строки для удаления"},onClick:()=>alert("Accent")}]}}},columnConfig:u,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:313,columnNumber:7},void 0)}},r={name:"Уменьшенная панель (size XS)",...i({preCode:l,previewSource:"shown"}),render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set(t.slice(0,3).map(u=>u.id))),n=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:u=>u.id},controlBlock:{massActionPanel:{size:"xs",buttons:[{type:"button",text:"Экспорт",view:"secondary",onClick:()=>alert("Экспорт")},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивировать")},{type:"button",text:"Дублировать",view:"secondary",onClick:()=>alert("Дублировать")},{type:"button",text:"Accent",view:"accent",onClick:()=>alert("Accent")}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:397,columnNumber:7},void 0)}},A=i({preCode:l,previewSource:"shown"}),p={...A,name:"Кнопка с выпадающим меню",parameters:{..."parameters"in A?A.parameters:{},screenshot:{capture:"page",keepState:!0}},play:async({canvasElement:t})=>{const o=k(t),n=(await o.findAllByRole("checkbox"))[1];if(!n)throw new Error("Нет чекбокса первой строки");await S.click(n);const u=(await o.findAllByRole("combobox")).find(E=>E.textContent==="Экспорт"&&E.getBoundingClientRect().left>=0);if(!u)throw new Error("Нет видимой кнопки «Экспорт»");await S.click(u);const C=t.querySelector(".rdg-container-all");if(!C)throw new Error("Нет контейнера таблицы");const D=await k(C).findByRole("option",{name:"В Excel"});await B(D).toBeVisible();const b=u.closest("div[id]");await B(b==null?void 0:b.contains(D)).toBe(!1)},render:()=>{const[t]=e.useState(a),o=e.useState(()=>new Set),n=e.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return s.jsxDEV(c,{tableConfig:{containerStyle:{height:700},selecting:{state:o,rowKeyGetter:u=>u.id},controlBlock:{massActionPanel:{buttons:[{type:"button",text:"Экспорт",view:"secondary",dropdown:{items:[{value:"excel",label:"В Excel"},{value:"csv",label:"В CSV"}],onItemSelect:u=>alert(`Экспорт: ${u.label}`)}},{type:"button",text:"Архивировать",view:"secondary",onClick:()=>alert("Архивирование выбранных строк")}]}}},columnConfig:n,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.controlBlock/Table.massPanelAction.stories.tsx",lineNumber:518,columnNumber:7},void 0)}};var g,x,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,F,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(F=m.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var T,R,P;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(R=y.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,I,N;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(I=w.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,G,K,V,j;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(G=r.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Уменьшенная панель массовых действий — размер `size: 'xs'`.\n\nРазмер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта\n(медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),\nиконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.",...(j=(V=r.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var W,X,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...withDropdownDocs,
  name: 'Кнопка с выпадающим меню',
  parameters: {
    ...('parameters' in withDropdownDocs ? withDropdownDocs.parameters : {}),
    // Меню открывается вниз за пределы таблицы, а по умолчанию снимается
    // только #storybook-root высотой с таблицу
    screenshot: {
      capture: 'page',
      keepState: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Первый чекбокс — выбор всех строк в заголовке, второй — первая строка
    const firstRowCheckbox = (await canvas.findAllByRole('checkbox'))[1];
    if (!firstRowCheckbox) throw new Error('Нет чекбокса первой строки');
    await userEvent.click(firstRowCheckbox);

    // Dropdown ставит триггеру role="combobox" без имени, поэтому ищем по
    // тексту. Панель держит копии кнопок в скрытом измерительном контейнере
    // за левым краем экрана (left: -9999px) — берём видимую
    const exportTrigger = (await canvas.findAllByRole('combobox')).find(trigger => trigger.textContent === 'Экспорт' && trigger.getBoundingClientRect().left >= 0);
    if (!exportTrigger) throw new Error('Нет видимой кнопки «Экспорт»');
    await userEvent.click(exportTrigger);
    const tableContainer = canvasElement.querySelector<HTMLElement>('.rdg-container-all');
    if (!tableContainer) throw new Error('Нет контейнера таблицы');
    const option = await within(tableContainer).findByRole('option', {
      name: 'В Excel'
    });
    await expect(option).toBeVisible();
    // TableDropdown выносит меню порталом в контейнер таблицы. Обычный
    // Dropdown держит его внутри своего корня (ближайший к кнопке элемент
    // с id), а кнопка тоже лежит в контейнере — поэтому проверка выше
    // одна их не различает
    const dropdownRoot = exportTrigger.closest('div[id]');
    await expect(dropdownRoot?.contains(option)).toBe(false);
  },
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
            text: 'Экспорт',
            view: 'secondary',
            dropdown: {
              items: [{
                value: 'excel',
                label: 'В Excel'
              }, {
                value: 'csv',
                label: 'В CSV'
              }],
              onItemSelect: item => alert(\`Экспорт: \${item.label}\`)
            }
          }, {
            type: 'button',
            text: 'Архивировать',
            view: 'secondary',
            onClick: () => alert('Архивирование выбранных строк')
          }]
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(_=(X=p.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const $=["MassPanelActionBasic","MassPanelActionWithAccent","MassPanelActionWithButton","MassPanelActionWithDisabled","MassPanelActionSizeXS","MassPanelActionWithDropdown"],Z=Object.freeze(Object.defineProperty({__proto__:null,MassPanelActionBasic:d,MassPanelActionSizeXS:r,MassPanelActionWithAccent:m,MassPanelActionWithButton:y,MassPanelActionWithDisabled:w,MassPanelActionWithDropdown:p,__namedExportsOrder:$,default:q},Symbol.toStringTag,{value:"Module"}));export{Z as T};
