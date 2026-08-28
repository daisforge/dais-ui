import{j as e}from"./react-D2T61mpp.js";import{c6 as l,c7 as s,c0 as i}from"./vendor-D0k-bL4H.js";import{A as r}from"./AiAgentPopover.stories-Hw_Cf51i.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./AiAgentPopover-BW8e0wOD.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/plasma-icons-B2gARaIt.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
`,e.jsx(n.h1,{id:"aiagentpopover",children:"AiAgentPopover"}),`
`,e.jsxs(n.p,{children:["Обёртка над ",e.jsx(n.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/popover/",rel:"nofollow",children:"SDDS Popover"}),` — компонент для отображения контекстного попапа рядом с элементом.
Используется, например, для показа AI-ассистента или справочной информации.`]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Гибкое позиционирование с автоматической коррекцией (",e.jsx(n.code,{children:"calculatePlacement"}),", ",e.jsx(n.code,{children:"calculateOffset"}),")"]}),`
`,e.jsxs(n.li,{children:["Режим перетаскивания (",e.jsx(n.code,{children:"draggable"}),") с порогом срабатывания и границами"]}),`
`,e.jsxs(n.li,{children:["Кастомные anchor-точки для точного размещения (",e.jsx(n.code,{children:"defaultPosition"}),")"]}),`
`,e.jsxs(n.li,{children:["Автосохранение позиции в localStorage (",e.jsx(n.code,{children:"useStorage"}),")"]}),`
`,e.jsx(n.li,{children:"Resizable-режим с автоматическим позиционированием иконки ресайза"}),`
`,e.jsxs(n.li,{children:["Контролируемый стейт видимости через ",e.jsx(n.code,{children:"opened"})," / ",e.jsx(n.code,{children:"onToggle"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Режим перетаскивания (draggable)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AiAgentPopover draggable dragBoundary={{ top: 20, bottom: 20 }}>
  Контент попапа
</AiAgentPopover>
`})}),`
`,e.jsx(n.p,{children:"Особенности работы:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Порог срабатывания (5px) - предотвращает случайные срабатывания при клике"}),`
`,e.jsx(n.li,{children:"Границы перемещения - ограничиваются областью окна с учетом dragBoundary"}),`
`,e.jsx(n.li,{children:"Игнор кликов - при активации ignoreToggleOnDrag не открывает popover после перетаскивания"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Автоматические расчеты"})," ",e.jsx(n.code,{children:"calculatePlacement"})," и ",e.jsx(n.code,{children:"calculateOffset"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AiAgentPopover
  calculatePlacement={false}
  calculateOffset={false}
  placement="bottom-right"
>
  Контент попапа с выключенными расчётами В данном примере, несмотря на
  использования кастомного значения placement, корректировка offset работать не
  будет, так как ее отключили. calculatePlacement также не будет работать,
  потому сама опция выключена, к тому же нет draggable режима.
</AiAgentPopover>
`})}),`
`,e.jsx(n.p,{children:"Особенности работы:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"calculatePlacement и calculateOffset включены по умолчанию"}),`
`,e.jsx(n.li,{children:"calculatePlacement используется в режиме draggable. Процесс вычисления нужного значения placement происходит в момент перетаскивания target. Фича делит экран на 6 секторов. Для каждого сектора свой placement. 1 - bottom-left, 2 - bottom, 3 - bottom-right, 4 - top-right, 5 - top, 6 - top-left. Если в момент вычисления placement контент popover выходит за границы экрана, то будет применено значение auto, корректировки offset в таком случае не будет и popover будет вести себя стандартно, как ведет себя атомарный компонент."}),`
`,e.jsx(n.li,{children:"calculateOffset необходим для вычисления правильного (с точки зрения дизайн-макетов) значения offset для каждого кастомного значения placement (bottom-left, bottom-right, top-left, top-right)."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Кастомные позиции"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Вариант 1: Координаты
<AiAgentPopover defaultPosition={{ x: 200, y: 200 }} />

// Вариант 2: Кастомное размещение
<AiAgentPopover defaultPosition="bottom-left" />

// Вариант 3: Нужные кастомные значения, но чтобы popover открывался вниз со смещением влево
<AiAgentPopover defaultPosition={{ x: 200, y: 200 }} placement="bottom-left" />
`})}),`
`,e.jsx(n.p,{children:"Логика расчёта:"}),`
`,e.jsx(n.p,{children:"defaultPosition может быть как объектом с координатами, так и строковым значением (как кастомные placement). Если вы выбираете defaultPosition как строковую позицию (top-left, top-right, bottom-left, bottom-right), то target элемент popover встанет в нужную заранее подготовленную позицию. Такое поведение актуально, если НЕ активирован useStorage (иначе позиция берется из localStorage) и НЕ заданы значения dragBoundary, которые не позволяют ему там находиться и НЕ используется positionState (внешний [стейт, сеттер] позиции)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Resizable-режим"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Вариант 1: Дефолтная конфигурация — иконка ресайза позиционируется автоматически
<AiAgentPopover draggable resizable>
  Контент попапа
</AiAgentPopover>

// Вариант 2: Callback — получаем текущий placement, переопределяем нужные поля
<AiAgentPopover
  draggable
  resizable={(placement) => ({
    defaultSize: { width: 300, height: 200 },
    minWidth: 250,
    maxWidth: 600,
  })}
>
  Контент попапа
</AiAgentPopover>
`})}),`
`,e.jsx(n.p,{children:"Особенности работы:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Проп ",e.jsx(n.code,{children:"resizable"})," принимает ",e.jsx(n.code,{children:"boolean"})," или callback-функцию ",e.jsx(n.code,{children:"(placement) => Partial<AiAgentPopoverResizableConfig>"})]}),`
`,e.jsxs(n.li,{children:["При ",e.jsx(n.code,{children:"resizable={true}"})," иконка ресайза (",e.jsx(n.code,{children:"IconResizeCorneredFill"}),") автоматически позиционируется в угол, диагонально противоположный target-элементу, в зависимости от текущего placement:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom-right"})," / ",e.jsx(n.code,{children:"bottom"})," → иконка в правом нижнем углу"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom-left"})," → иконка в левом нижнем углу"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top-right"})," / ",e.jsx(n.code,{children:"top"})," → иконка в правом верхнем углу"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top-left"})," → иконка в левом верхнем углу"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Иконка автоматически отзеркаливается (",e.jsx(n.code,{children:"scaleX"}),"/",e.jsx(n.code,{children:"scaleY"}),") для корректного визуального отображения в каждом углу"]}),`
`,e.jsxs(n.li,{children:["При передаче callback-функции результат мержится с дефолтной конфигурацией — можно переопределить только нужные поля (",e.jsx(n.code,{children:"defaultSize"}),", ",e.jsx(n.code,{children:"minWidth"}),", ",e.jsx(n.code,{children:"icons"}),", ",e.jsx(n.code,{children:"hiddenIcons"})," и т.д.)"]}),`
`,e.jsxs(n.li,{children:["Свойства ",e.jsx(n.code,{children:"onResizeStart"})," и ",e.jsx(n.code,{children:"onResizeEnd"})," передаются отдельными пропсами, как и раньше"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Рекомендации по использованию"})}),`
`,e.jsx(n.p,{children:"Оптимальные параметры для AI-ассистента:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AiAgentPopover
  draggable
  useStorage="your-custom-key-for-local-storage"
  defaultPosition="bottom-right"
  dragBoundary={{ bottom: 10, right: 10, top: 10, left: 10 }}
>
 <div style={{ minWidth: '224px' }}>
  <H3>AI Assistant</H3>
  <BodyS style={{ margin: '8px 0', color: textSecondary }}>
    Пример содержимого AI-ассистента
  </BodyS>
  <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
    <Button
      size="s"
      view="secondary"
      onClick={onClose}
      style={{ flexGrow: 1 }}
    >
      Отмена
    </Button>
    <Button size="s" view="accent" style={{ flexGrow: 1 }}>
      Применить
    </Button>
  </div>
  </div>
<AiAgentPopover />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Отключение автоматики:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AiAgentPopover
  calculatePlacement={false}
  calculateOffset={false}
  placement="right"
  offset={[10, 20]}
>
 <div style={{ minWidth: '224px' }}>
  <H3>AI Assistant</H3>
  <BodyS style={{ margin: '8px 0', color: textSecondary }}>
    Пример содержимого AI-ассистента
  </BodyS>
  <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
    <Button
      size="s"
      view="secondary"
      onClick={onClose}
      style={{ flexGrow: 1 }}
    >
      Отмена
    </Button>
    <Button size="s" view="accent" style={{ flexGrow: 1 }}>
      Применить
    </Button>
  </div>
  </div>
<AiAgentPopover />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Контролирование стейта видимости снаружи:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <AiAgentPopover
        draggable
        opened={isOpen}
        onToggle={setIsOpen}
        defaultPosition="bottom-right"
        useStorage="custom-key-for-local-storage"
      >
        <PopoverContent onClose={() => setIsOpen(false)} />
      </AiAgentPopover>
    </div>
  );
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-aiagentpopover-api--docs",children:"AiAgentPopover API"})]}),`
`]}),`
`,e.jsx(i,{})]})}function B(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{B as default};
