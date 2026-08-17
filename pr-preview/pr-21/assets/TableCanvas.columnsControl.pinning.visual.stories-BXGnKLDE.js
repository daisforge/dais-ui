import{d as h,r as F4}from"./react-D2T61mpp.js";import{c as C4}from"./tableData-UCfjiBCh.js";import{ca as f,cb as g,ch as A,cc as T4}from"./vendor-DT6IGIg7.js";import{T as f4}from"./TableCanvas-DUN5IMzS.js";import"./react-is-Clcustum.js";import"./styled-components-DjqeMLnE.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BxuYXTNS.js";import"./IconButton-BqsDas1S.js";import"./@salutejs/plasma-icons-Bh_nR5gr.js";import"./@salutejs/sdds-finai-OscaemT7.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-B0jiz9uc.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Curqfp0b.js";import"./TextField-D15TFDUC.js";import"./sharedUtilsInputs-CTvZ117t.js";import"./AnalyticalWidget-Dk1w1sdc.js";import"./Collapse-DkbjZlXL.js";import"./Table-BELlqsOv.js";import"./react-data-grid-DCYFgulB.js";import"./TableTabs-DlXzx-dj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Dim2iQoo.js";import"./ListOfFilters-DCKwALDU.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DHEvehsw.js";import"./EmptyState-BuW7ddIy.js";import"./MassActions-DqjTYCEF.js";import"./Autocomplete-rx3eo4Vr.js";import"./TableGlide-LdomYxD7.js";import"./@glideappsfinal/glide-data-grid-DxOPSZEW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Bi8zGKv-.js";const c0={title:"Локальные компоненты/TableCanvas/ColumnsControl/Визуальные тесты закрепления",tags:["!autodocs"]},m4=F4.createRef(),E4="pinning-icon",B4=1,k=["id","task","priority","issueType","complete"],g4=C4().slice(0,6),h4=[{key:"id",name:"ID",width:140},{key:"task",name:"Title",width:140},{key:"priority",name:"Priority",width:140},{key:"issueType",name:"Type",width:140},{key:"complete",name:"%",width:140}],i=(u=[])=>()=>h.jsxDEV("div",{style:{padding:8},children:h.jsxDEV(f4,{refTable:m4,tableConfig:{containerStyle:{height:"360px",width:"900px"},rowSize:{default:"medium",showInControl:!1},rowMarkers:{startIndex:1},cellsSelection:{mode:"range-cell",enableColumnSelection:!0,enableRowSelection:!0,enableSelectAll:!0},columnsControl:{enable:!0,pinning:!0,pinnedDefault:u},controlBlock:{pinningMenu:{iconDomMetadata:{dataAttributes:{"data-testid":E4}}}}},columnConfig:h4,rows:g4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.pinning.visual.stories.tsx",lineNumber:72,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ColumnsControl/TableCanvas.columnsControl.pinning.visual.stories.tsx",lineNumber:71,columnNumber:7},void 0),a=()=>new Promise(u=>setTimeout(u,250));async function r(u){return g(()=>{const e=u.querySelector(".dvn-scroller")??u.querySelector('[data-testid="data-grid-canvas"]');if(!e)throw new Error("Grid canvas not found");return e})}function w4(u,e){var t;const n=(t=m4.current)==null?void 0:t.getBounds(u,e);if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&n.width>0&&n.height>0)return{x:n.x+n.width/2,y:n.y+n.height/2}}async function s(){await a(),await g(()=>w4(B4,-1)!==void 0,{timeout:3e3})}function k4(u,e){const n=e.filter(T=>k.includes(T)),t=k.filter(T=>!n.includes(T));return[...n,...t].indexOf(u)}function y4(u,e=[]){const n=w4(k4(u,e)+B4,-1);if(!n)throw new Error(`getBounds не готов для шапки '${u}' — grid не смерился`);return n}function D4(u,e,n={}){const t={clientX:e.x,clientY:e.y,pointerType:"mouse",...n};A.pointerDown(u,{...t,button:0,buttons:1}),A.pointerUp(u,{...t,button:0,buttons:0})}async function c(u,e,n=[]){D4(u,y4(e,n)),await a()}async function x4(u,e,n=[]){D4(u,y4(e,n),{shiftKey:!0}),await a()}async function A4(){return g(()=>{const u=document.querySelector(`[data-testid="${E4}"]`);if(!u)throw new Error("Кнопка закрепления не найдена (data-testid)");return u},{timeout:3e3})}async function F(){const u=await A4();A.click(u),await a()}async function D(){let e=await A4();for(;e&&e.querySelectorAll("button").length<2;)e=e.parentElement;const n=e==null?void 0:e.querySelectorAll("button"),t=n==null?void 0:n[n.length-1];if(!t)throw new Error("Шеврон меню закрепления не найден");A.click(t),await a()}async function C(u){const e=await f(document.body).findByText(u);await T4.click(e),await a()}const o={parameters:{screenshot:{keepState:!0}}},l={name:"Меню закрепления — открывается с нужными пунктами",parameters:{screenshot:{skip:!0}},render:i(),play:async({canvasElement:u})=>{await r(u),await s(),await a();for(let e=0;e<3;e+=1){await D();try{await f(document.body).findByText("Закрепить столбцы",void 0,{timeout:1500}),await f(document.body).findByText("Открепить всё");return}catch{await a()}}throw new Error("Меню закрепления не открылось с пунктами (3 попытки)")}},d={name:"Один столбец (Title) → «Закрепить столбцы» через дропдаун",...o,render:i(),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"task"),await D(),await C("Закрепить столбцы")}},p={name:"Один столбец (Title) → закрепить кликом по левой иконке",...o,render:i(),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"task"),await F()}},m={name:"Shift-диапазон Title..Type → «Закрепить столбцы» (выделение сохраняется)",...o,render:i(),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"task"),await x4(e,"issueType"),await D(),await C("Закрепить столбцы")}},E={name:"Левая иконка: закрепить выбранный, затем открепить (тоглер)",...o,render:i(),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"task"),await F(),await F()}},B={name:"«Открепить всё» через дропдаун (из закреплённых по умолчанию)",...o,render:i(["task","issueType"]),play:async({canvasElement:u})=>{await r(u),await s(),await D(),await C("Открепить всё")}},w={name:"Уже закреплён Title, выделяем Type → «Закрепить» (закреплены оба)",...o,render:i(["task"]),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"issueType",["task"]),await D(),await C("Закрепить столбцы")}},y={name:"Два закреплены, выделен один Title → левая иконка открепляет только его (Type остаётся)",...o,render:i(["task","issueType"]),play:async({canvasElement:u})=>{const e=await r(u);await s(),await c(e,"task",["task","issueType"]),await F()}};var x,b,v,S,P;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Меню закрепления — открывается с нужными пунктами',
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: renderGrid(),
  play: async ({
    canvasElement
  }) => {
    await getGridTarget(canvasElement);
    await ready();
    await settle();
    // Холодный старт первой стори: контрл-блок дорисовывается/ре-рендерится и может
    // закрыть только что открытое меню. Переоткрываем до 3 попыток, пока пункты не
    // окажутся в портале (у остальных стори прогрев даёт предшествующий selectColumn).
    // eslint-disable-next-line no-restricted-syntax
    for (let attempt = 0; attempt < 3; attempt += 1) {
      // eslint-disable-next-line no-await-in-loop
      await openPinningMenu();
      try {
        // eslint-disable-next-line no-await-in-loop
        await within(document.body).findByText('Закрепить столбцы', undefined, {
          timeout: 1500
        });
        // eslint-disable-next-line no-await-in-loop
        await within(document.body).findByText('Открепить всё');
        return;
      } catch {
        // eslint-disable-next-line no-await-in-loop
        await settle();
      }
    }
    throw new Error('Меню закрепления не открылось с пунктами (3 попытки)');
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"1. Меню открывается и содержит оба нативных пункта (функционально, без скрина).",...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.description}}};var I,G,M,V,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Один столбец (Title) → «Закрепить столбцы» через дропдаун',
  ...screenshot,
  render: renderGrid(),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"2. Один столбец → «Закрепить столбцы» через дропдаун.",...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.description}}};var O,R,U,L,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Один столбец (Title) → закрепить кликом по левой иконке',
  ...screenshot,
  render: renderGrid(),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await clickPinIcon();
  }
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:"3. Один столбец → закрепить кликом по ЛЕВОЙ иконке (не через дропдаун).",...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.description}}};var K,_,j,Y,$;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Shift-диапазон Title..Type → «Закрепить столбцы» (выделение сохраняется)',
  ...screenshot,
  render: renderGrid(),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // Title → Shift-клик Type = смежный диапазон Title, Priority, Type.
    await selectColumn(el, 'task');
    await shiftSelectTo(el, 'issueType');
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"4. Диапазон столбцов (Shift) → «Закрепить столбцы»; выделение сохраняется.",...($=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var z,W,X,H,J;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Левая иконка: закрепить выбранный, затем открепить (тоглер)',
  ...screenshot,
  render: renderGrid(),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await clickPinIcon(); // action=pin → Title закреплён
    await clickPinIcon(); // тот же выбор уже закреплён → action=unpin → откреплён
  }
}`,...(X=(W=E.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"5. Закрепили левой иконкой, затем ей же открепили (тоглер pin→unpin).",...(J=(H=E.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,Z,u4,e4,n4;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '«Открепить всё» через дропдаун (из закреплённых по умолчанию)',
  ...screenshot,
  render: renderGrid(['task', 'issueType']),
  play: async ({
    canvasElement
  }) => {
    await getGridTarget(canvasElement);
    await ready();
    await openPinningMenu();
    await clickMenuItem('Открепить всё');
  }
}`,...(u4=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:"6. «Открепить всё» через дропдаун — снимает закрепление со всех.",...(n4=(e4=B.parameters)==null?void 0:e4.docs)==null?void 0:n4.description}}};var t4,a4,i4,r4,s4;w.parameters={...w.parameters,docs:{...(t4=w.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'Уже закреплён Title, выделяем Type → «Закрепить» (закреплены оба)',
  ...screenshot,
  render: renderGrid(['task']),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // task уже закреплён (уехал влево) → issueType адресуем с учётом этого.
    await selectColumn(el, 'issueType', ['task']);
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
}`,...(i4=(a4=w.parameters)==null?void 0:a4.docs)==null?void 0:i4.source},description:{story:"7. Добавление к уже закреплённому: task закреплён, выделяем Type и закрепляем — оба.",...(s4=(r4=w.parameters)==null?void 0:r4.docs)==null?void 0:s4.description}}};var o4,c4,l4,d4,p4;y.parameters={...y.parameters,docs:{...(o4=y.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Два закреплены, выделен один Title → левая иконка открепляет только его (Type остаётся)',
  ...screenshot,
  render: renderGrid(['task', 'issueType']),
  play: async ({
    canvasElement
  }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // Оба закреплены → task на визуальной позиции 0.
    await selectColumn(el, 'task', ['task', 'issueType']);
    await clickPinIcon(); // выбран закреплённый → action=unpin → откреплён только task
  }
}`,...(l4=(c4=y.parameters)==null?void 0:c4.docs)==null?void 0:l4.source},description:{story:"8. Выборочное открепление: из двух закреплённых открепляем только выбранный.",...(p4=(d4=y.parameters)==null?void 0:d4.docs)==null?void 0:p4.description}}};const l0=["DropdownOpens","PinSingleViaDropdown","PinViaLeftIcon","PinRangeViaDropdown","UnpinViaLeftIcon","UnpinAllViaDropdown","AddPinToExisting","UnpinSelectedKeepsOthers"];export{w as AddPinToExisting,l as DropdownOpens,m as PinRangeViaDropdown,d as PinSingleViaDropdown,p as PinViaLeftIcon,B as UnpinAllViaDropdown,y as UnpinSelectedKeepsOthers,E as UnpinViaLeftIcon,l0 as __namedExportsOrder,c0 as default};
