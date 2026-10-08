import{d as B,R as _}from"./react-D2T61mpp.js";import{co as m,cq as n,cp as a,cw as t,cx as h}from"./vendor-DeTnNj4Y.js";import{A as b}from"./TableCanvas.bottomSheet.example-CpXkNexF.js";import"./react-is-Clcustum.js";import"./styled-components-DdokC5aN.js";import"./@tanstack/react-virtual-De5X9U1Y.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BOhkYRWC.js";import"./IconButton-CiN1tqM5.js";import"./@salutejs/plasma-icons-DO39JMB0.js";import"./@salutejs/sdds-finai-CR2jG7gG.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./utils-CnqbZkiM.js";import"./constants-DI5pidOH.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DX5ST7G7.js";import"./TextField-Dr5BOjh4.js";import"./sharedUtilsInputs-DMjRfQ_3.js";import"./AnalyticalWidget-_Usa-H1c.js";import"./Collapse-CfczhZGb.js";import"./Table-DdyMGdwT.js";import"./react-data-grid-hjNugmjj.js";import"./TableTabs-B8A6oUgt.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DxWLNWqW.js";import"./ListOfFilters-B36bCL_T.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-dFRrOuxH.js";import"./EmptyState-DWWHkzJG.js";import"./MassActions-CfwEqYJq.js";import"./Autocomplete-1PW07WU4.js";import"./TableCanvas-jn5O-zoQ.js";import"./TableGlide-qhhQfs6u.js";import"./@glideappsfinal/glide-data-grid-CAo2RqHF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CDm9rAI0.js";const T=_.createRef(),qe={title:"Локальные компоненты/TableCanvas/BottomSheet/Проверки взаимодействий",parameters:{layout:"fullscreen"},tags:["!autodocs"]},y={name:"Динамические размеры, состояния и collapse",render:()=>B.jsxDEV(b,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:18,columnNumber:17},void 0),play:async({canvasElement:o})=>{const e=m(o),u=c=>{const p=o.querySelector(c);if(!p)throw new Error(`Missing panel element: ${c}`);return p},s=u(".rdg-container-all"),i=u(".rdg-table-sidebar-layout-table-container"),d=u(".rdg-table-bottom-sheet"),r=u('[data-table-sidebar="left"]');await a(()=>t(Math.round(d.getBoundingClientRect().height)).toBe(32));const g=i.getBoundingClientRect().height;await n.click(e.getByRole("button",{name:"Открыть лог"}));const l=[];await a(()=>{const c=d.getBoundingClientRect().height;l.push(c),t(Math.round(s.getBoundingClientRect().height)).toBe(620),t(Math.round(c)).toBe(220)},{interval:16}),t(l.some(c=>c>32&&c<219)).toBe(!0),t(Math.round(s.getBoundingClientRect().height)).toBe(620),t(Math.abs(g-i.getBoundingClientRect().height-188)).toBeLessThanOrEqual(1),await n.click(e.getByRole("button",{name:"Ширина 360"})),await a(()=>t(Math.round(r.getBoundingClientRect().width)).toBe(404)),await n.click(e.getByRole("button",{name:"Большой лог"})),await a(()=>t(Math.round(i.getBoundingClientRect().height)).toBe(120)),t(d.getBoundingClientRect().bottom).toBeLessThanOrEqual(s.getBoundingClientRect().bottom),await n.click(e.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(s.getBoundingClientRect().height)).toBe(40)),t(s.querySelector(".rdg-table-sidebar-layout")).toHaveAttribute("inert"),await n.click(e.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(s.getBoundingClientRect().height)).toBe(620)),await n.click(e.getByRole("button",{name:"Закрыть лог"})),await n.click(e.getByRole("button",{name:"Ширина 25%"}));const w=u(".rdg-table-sidebar-layout");await a(()=>t(Math.round(r.getBoundingClientRect().width)).toBe(Math.round(w.getBoundingClientRect().width*.25+44))),await n.click(e.getByRole("button",{name:"Лог 35%"})),await a(()=>t(Math.round(d.getBoundingClientRect().height)).toBe(Math.round(w.getBoundingClientRect().height*.35))),await n.click(e.getByRole("button",{name:"Error state"})),await a(()=>t(e.getByText("Не удалось загрузить отчёты")).toBeVisible()),await a(()=>t(Math.round(d.getBoundingClientRect().height)).toBe(Math.round(w.getBoundingClientRect().height*.35))),await n.click(e.getByRole("button",{name:"Error state"})),await n.click(e.getByRole("button",{name:"Empty state"})),await a(()=>t(e.getByText("Отчётов пока нет")).toBeVisible()),await n.click(e.getByRole("button",{name:"Empty state"})),await n.click(e.getByRole("button",{name:"Удалить вкладку"})),await a(()=>t(e.getByText("Книги отчётов")).toBeVisible()),await n.click(e.getByRole("button",{name:"Открытие извне"})),await a(()=>t(Math.round(r.getBoundingClientRect().width)).toBe(44)),await n.click(e.getByRole("button",{name:"Открытие извне"})),await a(()=>t(Math.round(r.getBoundingClientRect().width)).toBe(Math.round(w.getBoundingClientRect().width*.25+44)))}},Y=async(o,e,u)=>{const s=m(o),i=o.querySelector(".rdg-container-all");if(!i)throw new Error("Missing TableCanvas");await n.click(s.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(i.getBoundingClientRect().height)).toBe(u)),t(i.querySelector(".rdg-table-sidebar-layout")).toHaveAttribute("inert"),await n.click(s.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(i.getBoundingClientRect().height)).toBe(e))},v={name:"Collapse сверху",render:()=>B.jsxDEV(b,{placement:"above"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:153,columnNumber:17},void 0),play:async({canvasElement:o})=>Y(o,620,80)},E={name:"Компактный control block без компрессии",render:()=>B.jsxDEV(b,{controlBlockSize:"xs",adaptive:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:159,columnNumber:17},void 0),play:async({canvasElement:o})=>Y(o,620,32)},R={name:"Начальное свёрнутое состояние",render:()=>B.jsxDEV(b,{initialCollapsed:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:165,columnNumber:17},void 0),play:async({canvasElement:o})=>{const e=o.querySelector(".rdg-container-all");if(!e)throw new Error("Missing TableCanvas");await a(()=>t(Math.round(e.getBoundingClientRect().height)).toBe(40)),t(e.querySelector(".rdg-table-sidebar-layout")).toHaveAttribute("inert");const u=m(o);await n.click(u.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(e.getBoundingClientRect().height)).toBe(620)),t(e.querySelector(".rdg-table-sidebar-layout")).not.toHaveAttribute("inert"),await n.click(u.getByRole("button",{name:/^Collapse$/})),await a(()=>t(Math.round(e.getBoundingClientRect().height)).toBe(40))}},C={name:"Структуры, локальная подгрузка и состояния layout",render:()=>B.jsxDEV(b,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:192,columnNumber:17},void 0),play:async({canvasElement:o})=>{const e=m(o),u=e.getByTestId("bottom-sheet-all-features"),s=e.getByRole("combobox",{name:"Структура данных"}),i=e.getByRole("combobox",{name:"Получение данных"}),d=e.getByRole("combobox",{name:"Состояние таблицы"}),r=async l=>a(()=>t(u).toHaveAttribute("data-visible-rows",String(l)));await r(20),await n.selectOptions(i,"all"),await r(100),await["group-tree","group-merged"].reduce(async(l,w)=>{await l,await n.selectOptions(s,w),await r(100),t(i).toBeDisabled(),t(u).toHaveAttribute("data-data-mode","all")},Promise.resolve()),await n.selectOptions(s,"subrows-tree"),t(i).toBeEnabled(),await n.selectOptions(i,"pagination"),await r(20),await n.selectOptions(s,"subrows-merged"),await r(20),await n.selectOptions(s,"flat"),await n.selectOptions(i,"infinity"),await r(20);const g=e.getByRole("button",{name:"Загрузить ещё 20 строк"});await[40,60,80,100].reduce(async(l,w)=>{await l,await n.click(g),await r(w)},Promise.resolve()),await a(()=>t(g).toBeDisabled()),await n.selectOptions(d,"skeleton"),await a(()=>t(o.querySelector(".rdg-table-bottom-sheet")).toBeInTheDocument()),await n.selectOptions(d,"overlay"),await a(()=>t(o.querySelector(".rdg-table-sidebar-layout")).not.toBeInTheDocument()),await a(()=>t(e.getByText("Загрузка отчётов")).toBeVisible()),await n.selectOptions(d,"normal"),await a(()=>t(o.querySelector(".rdg-table-bottom-sheet")).toBeInTheDocument()),await n.selectOptions(i,"pagination"),await r(20)}},x={name:"Обе панели, fullscreen и изменение контейнера",render:()=>B.jsxDEV(b,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:263,columnNumber:17},void 0),play:async({canvasElement:o})=>{const e=m(o),u=()=>{const i=o.ownerDocument.querySelector(".rdg-container-all");if(!i)throw new Error("Missing TableCanvas");return i},s=o.querySelector('[data-table-sidebar="right"]');if(!s)throw new Error("Missing TableCanvas layout");await n.click(e.getByRole("button",{name:"Правая панель"})),await a(()=>t(Math.round(s.getBoundingClientRect().width)).toBe(444)),await n.click(e.getByRole("button",{name:"Открыть лог"})),await n.click(e.getByTestId("bottom-sheet-fullscreen")),await a(()=>{t(Math.round(u().getBoundingClientRect().height)).toBe(window.innerHeight-32),t(Math.round(u().getBoundingClientRect().width)).toBe(window.innerWidth-32)}),await n.click(m(o.ownerDocument.body).getByTestId("bottom-sheet-fullscreen")),await a(()=>t(Math.round(u().getBoundingClientRect().height)).toBe(620)),await n.click(e.getByRole("button",{name:"Высота контейнера"})),await a(()=>t(Math.round(u().getBoundingClientRect().height)).toBe(350)),await n.click(e.getByRole("button",{name:"Ширина контейнера"})),await n.click(e.getByRole("button",{name:"Нижний слот"})),await a(()=>t(o.querySelector(".rdg-table-bottom-sheet")).not.toBeInTheDocument()),await n.click(e.getByRole("button",{name:"Нижний слот"})),await a(()=>t(o.querySelector(".rdg-table-bottom-sheet")).toBeInTheDocument()),await n.click(e.getByRole("button",{name:"Высота контейнера"})),await n.click(e.getByRole("button",{name:"Ширина контейнера"}))}},k={name:"Копирование и вставка между страницами",render:()=>B.jsxDEV(b,{refTable:T},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.visual.stories.tsx",lineNumber:334,columnNumber:17},void 0),play:async({canvasElement:o})=>{const e=m(o),u=()=>e.getByTestId("data-grid-canvas");await a(()=>t(u()).toBeInTheDocument());const s=async()=>{await a(()=>{var l;const g=(l=T.current)==null?void 0:l.getBounds(3,0);t(g&&Number.isFinite(g.x)).toBe(!0)});const r=(g,l,w=!1)=>{var D;const c=(D=T.current)==null?void 0:D.getBounds(g,l);if(!c)throw new Error("Missing cell bounds");const p={clientX:c.x+c.width/2,clientY:c.y+c.height/2,pointerType:"mouse",shiftKey:w};h.pointerDown(u(),{...p,button:0,buttons:1}),h.pointerUp(u(),{...p,button:0,buttons:0})};r(3,0),await new Promise(g=>{window.setTimeout(g,120)}),r(4,1,!0),await a(()=>t(e.getAllByText("Выделение ячеек: 2 × 2").length).toBeGreaterThan(0))},i=r=>{h.keyDown(u(),{key:r,code:r==="c"?"KeyC":"KeyV",ctrlKey:!0}),h.keyUp(u(),{key:r,code:r==="c"?"KeyC":"KeyV",ctrlKey:!0})};await n.click(e.getByRole("button",{name:/^Редактировать$/})),await s(),i("c"),await a(async()=>t(await navigator.clipboard.readText()).toContain("Задача 1:"));const d=await navigator.clipboard.readText();await n.click(e.getByRole("button",{name:/^2$/})),await s(),i("v"),await a(()=>t(e.getByText(/paste: изменено строк 2/)).toBeInTheDocument()),i("c"),await a(async()=>t(await navigator.clipboard.readText()).toBe(d)),await n.click(e.getByRole("button",{name:"Открыть лог"}))}};var M,f,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Динамические размеры, состояния и collapse',
  render: () => <AllFeaturesExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const getElement = (selector: string) => {
      const element = canvasElement.querySelector<HTMLElement>(selector);
      if (!element) throw new Error(\`Missing panel element: \${selector}\`);
      return element;
    };
    const root = getElement('.rdg-container-all');
    const viewport = getElement('.rdg-table-sidebar-layout-table-container');
    const sheet = getElement('.rdg-table-bottom-sheet');
    const left = getElement('[data-table-sidebar="left"]');
    await waitFor(() => expect(Math.round(sheet.getBoundingClientRect().height)).toBe(32));
    const initialHeight = viewport.getBoundingClientRect().height;
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открыть лог'
    }));
    const intermediateHeights: number[] = [];
    await waitFor(() => {
      const currentHeight = sheet.getBoundingClientRect().height;
      intermediateHeights.push(currentHeight);
      expect(Math.round(root.getBoundingClientRect().height)).toBe(620);
      expect(Math.round(currentHeight)).toBe(220);
    }, {
      interval: 16
    });
    expect(intermediateHeights.some(value => value > 32 && value < 219)).toBe(true);
    expect(Math.round(root.getBoundingClientRect().height)).toBe(620);
    expect(Math.abs(initialHeight - viewport.getBoundingClientRect().height - 188)).toBeLessThanOrEqual(1);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Ширина 360'
    }));
    await waitFor(() => expect(Math.round(left.getBoundingClientRect().width)).toBe(404));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Большой лог'
    }));
    await waitFor(() => expect(Math.round(viewport.getBoundingClientRect().height)).toBe(120));
    expect(sheet.getBoundingClientRect().bottom).toBeLessThanOrEqual(root.getBoundingClientRect().bottom);
    await userEvent.click(canvas.getByRole('button', {
      name: /^Collapse$/
    }));
    await waitFor(() => expect(Math.round(root.getBoundingClientRect().height)).toBe(40));
    expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute('inert');
    await userEvent.click(canvas.getByRole('button', {
      name: /^Collapse$/
    }));
    await waitFor(() => expect(Math.round(root.getBoundingClientRect().height)).toBe(620));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Закрыть лог'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Ширина 25%'
    }));
    const workspace = getElement('.rdg-table-sidebar-layout');
    await waitFor(() => expect(Math.round(left.getBoundingClientRect().width)).toBe(Math.round(workspace.getBoundingClientRect().width * 0.25 + 44)));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Лог 35%'
    }));
    await waitFor(() => expect(Math.round(sheet.getBoundingClientRect().height)).toBe(Math.round(workspace.getBoundingClientRect().height * 0.35)));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Error state'
    }));
    await waitFor(() => expect(canvas.getByText('Не удалось загрузить отчёты')).toBeVisible());
    await waitFor(() => expect(Math.round(sheet.getBoundingClientRect().height)).toBe(Math.round(workspace.getBoundingClientRect().height * 0.35)));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Error state'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Empty state'
    }));
    await waitFor(() => expect(canvas.getByText('Отчётов пока нет')).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Empty state'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Удалить вкладку'
    }));
    await waitFor(() => expect(canvas.getByText('Книги отчётов')).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открытие извне'
    }));
    await waitFor(() => expect(Math.round(left.getBoundingClientRect().width)).toBe(44));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открытие извне'
    }));
    await waitFor(() => expect(Math.round(left.getBoundingClientRect().width)).toBe(Math.round(workspace.getBoundingClientRect().width * 0.25 + 44)));
  }
}`,...(F=(f=y.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var A,S,q;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Collapse сверху',
  render: () => <AllFeaturesExample placement="above" />,
  play: async ({
    canvasElement
  }) => verifyCollapsedLayout(canvasElement, 620, 80)
}`,...(q=(S=v.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var H,O,I;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Компактный control block без компрессии',
  render: () => <AllFeaturesExample controlBlockSize="xs" adaptive={false} />,
  play: async ({
    canvasElement
  }) => verifyCollapsedLayout(canvasElement, 620, 32)
}`,...(I=(O=E.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var N,V,$;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Начальное свёрнутое состояние',
  render: () => <AllFeaturesExample initialCollapsed />,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector<HTMLElement>('.rdg-container-all');
    if (!root) throw new Error('Missing TableCanvas');
    await waitFor(() => expect(Math.round(root.getBoundingClientRect().height)).toBe(40));
    expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute('inert');
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /^Collapse$/
    }));
    await waitFor(() => expect(Math.round(root.getBoundingClientRect().height)).toBe(620));
    expect(root.querySelector('.rdg-table-sidebar-layout')).not.toHaveAttribute('inert');
    await userEvent.click(canvas.getByRole('button', {
      name: /^Collapse$/
    }));
    await waitFor(() => expect(Math.round(root.getBoundingClientRect().height)).toBe(40));
  }
}`,...($=(V=R.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var K,L,G;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Структуры, локальная подгрузка и состояния layout',
  render: () => <AllFeaturesExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const example = canvas.getByTestId('bottom-sheet-all-features');
    const structure = canvas.getByRole('combobox', {
      name: 'Структура данных'
    });
    const dataMode = canvas.getByRole('combobox', {
      name: 'Получение данных'
    });
    const status = canvas.getByRole('combobox', {
      name: 'Состояние таблицы'
    });
    const expectRows = async (count: number) => waitFor(() => expect(example).toHaveAttribute('data-visible-rows', String(count)));
    await expectRows(20);
    await userEvent.selectOptions(dataMode, 'all');
    await expectRows(100);
    await ['group-tree', 'group-merged'].reduce(async (previous, mode) => {
      await previous;
      await userEvent.selectOptions(structure, mode);
      await expectRows(100);
      expect(dataMode).toBeDisabled();
      expect(example).toHaveAttribute('data-data-mode', 'all');
    }, Promise.resolve());
    await userEvent.selectOptions(structure, 'subrows-tree');
    expect(dataMode).toBeEnabled();
    await userEvent.selectOptions(dataMode, 'pagination');
    await expectRows(20);
    await userEvent.selectOptions(structure, 'subrows-merged');
    await expectRows(20);
    await userEvent.selectOptions(structure, 'flat');
    await userEvent.selectOptions(dataMode, 'infinity');
    await expectRows(20);
    const loadMore = canvas.getByRole('button', {
      name: 'Загрузить ещё 20 строк'
    });
    await [40, 60, 80, 100].reduce(async (previous, count) => {
      await previous;
      await userEvent.click(loadMore);
      await expectRows(count);
    }, Promise.resolve());
    await waitFor(() => expect(loadMore).toBeDisabled());
    await userEvent.selectOptions(status, 'skeleton');
    await waitFor(() => expect(canvasElement.querySelector('.rdg-table-bottom-sheet')).toBeInTheDocument());
    await userEvent.selectOptions(status, 'overlay');
    await waitFor(() => expect(canvasElement.querySelector('.rdg-table-sidebar-layout')).not.toBeInTheDocument());
    await waitFor(() => expect(canvas.getByText('Загрузка отчётов')).toBeVisible());
    await userEvent.selectOptions(status, 'normal');
    await waitFor(() => expect(canvasElement.querySelector('.rdg-table-bottom-sheet')).toBeInTheDocument());
    await userEvent.selectOptions(dataMode, 'pagination');
    await expectRows(20);
  }
}`,...(G=(L=C.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var P,j,U;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Обе панели, fullscreen и изменение контейнера',
  render: () => <AllFeaturesExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const getRoot = () => {
      const element = canvasElement.ownerDocument.querySelector<HTMLElement>('.rdg-container-all');
      if (!element) throw new Error('Missing TableCanvas');
      return element;
    };
    const right = canvasElement.querySelector<HTMLElement>('[data-table-sidebar="right"]');
    if (!right) throw new Error('Missing TableCanvas layout');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Правая панель'
    }));
    await waitFor(() => expect(Math.round(right.getBoundingClientRect().width)).toBe(444));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открыть лог'
    }));
    await userEvent.click(canvas.getByTestId('bottom-sheet-fullscreen'));
    await waitFor(() => {
      expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(window.innerHeight - 32);
      expect(Math.round(getRoot().getBoundingClientRect().width)).toBe(window.innerWidth - 32);
    });
    await userEvent.click(within(canvasElement.ownerDocument.body).getByTestId('bottom-sheet-fullscreen'));
    await waitFor(() => expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(620));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Высота контейнера'
    }));
    await waitFor(() => expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(350));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Ширина контейнера'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Нижний слот'
    }));
    await waitFor(() => expect(canvasElement.querySelector('.rdg-table-bottom-sheet')).not.toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Нижний слот'
    }));
    await waitFor(() => expect(canvasElement.querySelector('.rdg-table-bottom-sheet')).toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Высота контейнера'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Ширина контейнера'
    }));
  }
}`,...(U=(j=x.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var z,W,X;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Копирование и вставка между страницами',
  render: () => <AllFeaturesExample refTable={clipboardTableRef} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const getGrid = () => canvas.getByTestId('data-grid-canvas');
    await waitFor(() => expect(getGrid()).toBeInTheDocument());
    const selectRange = async () => {
      await waitFor(() => {
        const bounds = clipboardTableRef.current?.getBounds(3, 0);
        expect(bounds && Number.isFinite(bounds.x)).toBe(true);
      });
      const clickCell = (column: number, row: number, shiftKey = false) => {
        const bounds = clipboardTableRef.current?.getBounds(column, row);
        if (!bounds) throw new Error('Missing cell bounds');
        const point = {
          clientX: bounds.x + bounds.width / 2,
          clientY: bounds.y + bounds.height / 2,
          pointerType: 'mouse',
          shiftKey
        };
        fireEvent.pointerDown(getGrid(), {
          ...point,
          button: 0,
          buttons: 1
        });
        fireEvent.pointerUp(getGrid(), {
          ...point,
          button: 0,
          buttons: 0
        });
      };
      // Two service columns precede ID; select Task and Priority of two rows.
      clickCell(3, 0);
      await new Promise<void>(resolve => {
        window.setTimeout(resolve, 120);
      });
      clickCell(4, 1, true);
      await waitFor(() => expect(canvas.getAllByText('Выделение ячеек: 2 × 2').length).toBeGreaterThan(0));
    };
    const press = (key: 'c' | 'v') => {
      fireEvent.keyDown(getGrid(), {
        key,
        code: key === 'c' ? 'KeyC' : 'KeyV',
        ctrlKey: true
      });
      fireEvent.keyUp(getGrid(), {
        key,
        code: key === 'c' ? 'KeyC' : 'KeyV',
        ctrlKey: true
      });
    };
    await userEvent.click(canvas.getByRole('button', {
      name: /^Редактировать$/
    }));
    await selectRange();
    press('c');
    await waitFor(async () => expect(await navigator.clipboard.readText()).toContain('Задача 1:'));
    const source = await navigator.clipboard.readText();
    await userEvent.click(canvas.getByRole('button', {
      name: /^2$/
    }));
    await selectRange();
    press('v');
    await waitFor(() => expect(canvas.getByText(/paste: изменено строк 2/)).toBeInTheDocument());
    press('c');
    await waitFor(async () => expect(await navigator.clipboard.readText()).toBe(source));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открыть лог'
    }));
  }
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const He=["DynamicBottomSheet","CollapseAbove","CompactControlBlock","InitiallyCollapsed","DataModesAndStates","BothSidebarsAndFullscreen","ClipboardBetweenPages"];export{x as BothSidebarsAndFullscreen,k as ClipboardBetweenPages,v as CollapseAbove,E as CompactControlBlock,C as DataModesAndStates,y as DynamicBottomSheet,R as InitiallyCollapsed,He as __namedExportsOrder,qe as default};
