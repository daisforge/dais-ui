import{j as e}from"./react-D2T61mpp.js";import{c6 as r,c7 as o,c0 as d}from"./vendor-H482Df_i.js";import{T as c}from"./TourWidget.stories-Dfaq-s0u.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./TourWidget-C8E3Bx5g.js";import"./utils-DbCY1Z9_.js";import"./constants-BudGGuoE.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./AnalyticalWidget-DSB49XD8.js";import"./@salutejs/sdds-finai-0jwSobSd.js";import"./IconButton-Dfbyl-9e.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./Box-DsNuXb8L.js";import"./Collapse-iz8ikY5l.js";import"./mixins-pc5pXPVP.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"tourwidget",children:"TourWidget"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TourWidget"})," — локальная compound-обертка для карточки тура. Компонент отвечает за внешний вид, раскладку, фон, буллеты и пульсацию через mixin, но не управляет сценарием тура, переходами между шагами и позиционированием относительно target-элемента."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Две ориентации: ",e.jsx(n.code,{children:"vertical"})," и ",e.jsx(n.code,{children:"horizontal"}),"."]}),`
`,e.jsxs(n.li,{children:["Compound API: ",e.jsx(n.code,{children:"TourWidget.Header"}),", ",e.jsx(n.code,{children:"TourWidget.Content"}),", ",e.jsx(n.code,{children:"TourWidget.Footer"}),", ",e.jsx(n.code,{children:"TourWidget.Bullets"}),", ",e.jsx(n.code,{children:"TourWidget.Bullet"}),"."]}),`
`,e.jsxs(n.li,{children:["Активный шаг передается в ",e.jsx(n.code,{children:"TourWidget"})," через ",e.jsx(n.code,{children:"activeStepIndex"}),", а ",e.jsx(n.code,{children:"Bullet"})," читает его автоматически."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Content"})," не фиксирует размер вложенного элемента и дает ему занять ",e.jsx(n.code,{children:"100%"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$css"})," есть у корневого компонента и compound-частей для локального переопределения стилей."]}),`
`,e.jsxs(n.li,{children:["Пульсация вынесена в ",e.jsx(n.code,{children:"tourPulseMixin"})," и применяется отдельно к target-элементу."]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ViewContainer } from '@daisforge/ui';
import { Box, Button, TourWidget } from '@daisforge/ui';
import { tourPulseMixin } from '@daisforge/ui/mixins';
`})}),`
`,e.jsx(n.p,{children:"Базовая схема работы:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [activeStepIndex, setActiveStepIndex] = useState(0);

<ViewContainer view="onDark">
  <TourWidget
    activeStepIndex={activeStepIndex}
    $css={{ width: '286px', height: '480px' }}
  >
    <TourWidget.Content>
      <Box as="img" src={imageSrc} alt="" $css={{ width: '100%' }} />
    </TourWidget.Content>
    <TourWidget.Header title="Title" description="Description" />
    <TourWidget.Footer>
      <TourWidget.Bullets count={steps.length} />
      <Button onClick={() => setActiveStepIndex((step) => step + 1)}>
        Далее
      </Button>
    </TourWidget.Footer>
  </TourWidget>
</ViewContainer>;
`})}),`
`,e.jsx(n.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Header"})," — выводит ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"description"})," и дополнительные ",e.jsx(n.code,{children:"children"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Content"})," — область под изображение, видео, иллюстрацию или любой ReactNode."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Footer"})," — произвольная зона для кнопок, ссылки пропуска и буллетов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Bullets"})," — контейнер, который рисует массив буллетов по ",e.jsx(n.code,{children:"count"}),"; если буллетов больше семи, отображает окно максимум на 7 точек, прокручивает его по ",e.jsx(n.code,{children:"activeStepIndex"}),", а крайние видимые точки уменьшаются до ",e.jsx(n.code,{children:"6px"}),", когда за ними есть скрытые шаги."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Bullet"})," — низкоуровневый визуальный индикатор шага. Активность считается как ",e.jsx(n.code,{children:"active ?? index === activeStepIndex"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"правильная-композиция",children:"Правильная композиция"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TourWidget.Header"}),", ",e.jsx(n.code,{children:"TourWidget.Content"})," и ",e.jsx(n.code,{children:"TourWidget.Footer"})," нужно вкладывать напрямую в ",e.jsx(n.code,{children:"TourWidget"}),". Компонент использует эти части как слоты: так он понимает, есть ли в туре медиа-зона, и выбирает корректную раскладку для ",e.jsx(n.code,{children:"horizontal"})," и ",e.jsx(n.code,{children:"vertical"}),"."]}),`
`,e.jsx(n.p,{children:"Правильно:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget orientation="horizontal">
  <TourWidget.Content>
    <Box as="img" src={imageSrc} alt="" $css={{ width: '100%' }} />
  </TourWidget.Content>
  <TourWidget.Header title="Title" description="Description" />
  <TourWidget.Footer>
    <TourWidget.Bullets count={steps.length} />
  </TourWidget.Footer>
</TourWidget>
`})}),`
`,e.jsx(n.p,{children:"Если нужен свой wrapper для картинки, кнопок или текста, размещайте его внутри соответствующего slot-компонента."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget orientation="horizontal">
  <TourWidget.Content>
    <MyImageWrapper>
      <Box as="img" src={imageSrc} alt="" />
    </MyImageWrapper>
  </TourWidget.Content>
  <TourWidget.Header>
    <MyHeaderContent />
  </TourWidget.Header>
  <TourWidget.Footer>
    <MyFooterContent />
  </TourWidget.Footer>
</TourWidget>
`})}),`
`,e.jsxs(n.p,{children:["Не оборачивайте сам ",e.jsx(n.code,{children:"TourWidget.Content"})," во внешний компонент. В таком случае ",e.jsx(n.code,{children:"TourWidget"})," не сможет определить медиа-зону как свой прямой slot и горизонтальная раскладка будет работать как вариант без ",e.jsx(n.code,{children:"Content"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget orientation="horizontal">
  <MyContentWrapper>
    <TourWidget.Content>
      <Box as="img" src={imageSrc} alt="" />
    </TourWidget.Content>
  </MyContentWrapper>
  <TourWidget.Header title="Title" />
  <TourWidget.Footer />
</TourWidget>
`})}),`
`,e.jsx(n.h2,{id:"активный-шаг",children:"Активный шаг"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"activeStepIndex"})," хранится на корневом ",e.jsx(n.code,{children:"TourWidget"}),". Внутри компонент создает локальный context, поэтому не нужно импортировать ",e.jsx(n.code,{children:"Provider"})," или прокидывать ",e.jsx(n.code,{children:"active"})," в каждый буллет."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget activeStepIndex={5}>
  <TourWidget.Footer>
    <TourWidget.Bullets count={10} />
  </TourWidget.Footer>
</TourWidget>
`})}),`
`,e.jsxs(n.p,{children:["Для переключения шагов используйте свои кнопки или другой внешний контрол. ",e.jsx(n.code,{children:"TourWidget.Bullets"})," не кликабельный и только отображает ",e.jsx(n.code,{children:"activeStepIndex"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget activeStepIndex={activeStepIndex}>
  <TourWidget.Footer>
    <TourWidget.Bullets count={10} />
    <Button onClick={() => setActiveStepIndex((step) => step + 1)}>
      Далее
    </Button>
  </TourWidget.Footer>
</TourWidget>
`})}),`
`,e.jsxs(n.p,{children:["Если нужна полностью ручная раскладка или состояние отдельной точки, используйте низкоуровневый ",e.jsx(n.code,{children:"TourWidget.Bullet"})," и передайте ",e.jsx(n.code,{children:"active"}),"."]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TourWidget.Content"})," не задает жесткий размер медиа. Размер определяет вложенная нода или стиль самого ",e.jsx(n.code,{children:"Content"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget.Content>
  <Box
    as="img"
    src={imageSrc}
    alt=""
    $css={{ width: '270px', height: '270px' }}
  />
</TourWidget.Content>
`})}),`
`,e.jsx(n.h2,{id:"пульсация",children:"Пульсация"}),`
`,e.jsxs(n.p,{children:["Пульсация не встроена в ",e.jsx(n.code,{children:"TourWidget"}),", потому что target-элемент и позиционирование тура контролируются снаружи. Для target используется ",e.jsx(n.code,{children:"tourPulseMixin"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styled from 'styled-components';

const Target = styled(Box)\`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    \${tourPulseMixin()}
  }
\`;
`})}),`
`,e.jsxs(n.p,{children:["По умолчанию ",e.jsx(n.code,{children:"tourPulseMixin"})," сам задает ",e.jsx(n.code,{children:"inset: -4px"})," и ",e.jsx(n.code,{children:"border-radius: 16px"})," и не добавляет заливку на target."]}),`
`,e.jsx(n.h2,{id:"темная-тема",children:"Темная тема"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TourWidget"})," всегда используется на темной поверхности. Если внутри футера есть SDDS-кнопки или ссылки, оборачивайте композицию в ",e.jsx(n.code,{children:'ViewContainer view="onDark"'}),", чтобы вложенные controls взяли on-dark токены без ручных переопределений цвета."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ViewContainer view="onDark">
  <TourWidget activeStepIndex={activeStepIndex}>
    <TourWidget.Footer>
      <Button view="secondary">Назад</Button>
      <Button view="white">Далее</Button>
    </TourWidget.Footer>
  </TourWidget>
</ViewContainer>
`})}),`
`,e.jsx(n.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,e.jsxs(n.p,{children:["Корневой ",e.jsx(n.code,{children:"$css"})," можно использовать для точечной настройки внешнего вида."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TourWidget
  $css={{
    '--tour-widget-min-width': '0',
    '--tour-widget-border-radius': '16px',
    '--tour-widget-gradient-frame-height': '34%',
    '--tour-widget-gradient-frame-fade': '56%',
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget"})," не содержит positioner и не добавляет зависимость на ",e.jsx(n.code,{children:"floating-ui"}),"."]}),`
`,e.jsxs(n.li,{children:["Компонент не хранит шаги и не переключает их сам, только отображает ",e.jsx(n.code,{children:"activeStepIndex"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Bullet"})," — это span-индикатор, а не интерактивная кнопка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TourWidget.Bullets"})," — это div-viewport со сдвигающимся треком точек; при ",e.jsx(n.code,{children:"count > 7"})," видны максимум семь буллетов."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tourwidget-api--docs",children:"API"}),"."]}),`
`,e.jsx(d,{})]})}function F(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{F as default};
