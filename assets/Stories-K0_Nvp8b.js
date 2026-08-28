import{j as e}from"./react-D2T61mpp.js";import{c6 as i,c7 as o,c0 as d}from"./vendor-H482Df_i.js";import{S as c}from"./Stories.stories-M0AswPwD.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-BTGqohhh.js";import"./@salutejs/sdds-finai-0jwSobSd.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./constants-BudGGuoE.js";import"./Container-BsecECu4.js";import"./utils-DbCY1Z9_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DsNuXb8L.js";import"./Stories-qpj5oyx6.js";import"./AnalyticalWidget-DSB49XD8.js";import"./IconButton-Dfbyl-9e.js";import"./Collapse-iz8ikY5l.js";import"./EmptyState-B9Pqf4Zj.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"stories",children:"Stories"}),`
`,e.jsx(r.p,{children:"Шаблонный движок сторей (как в Instagram): ряд триггеров-превью, по клику на который открывается полноэкранный вьюер с индикаторами прогресса, тап-навигацией, паузой и предзагрузкой ассетов. Компонент заложен под переиспользование разными командами."}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Триггеры двух форм"})," — круглые и прямоугольные (",e.jsx(r.code,{children:"Stories.Preview"}),"), с состоянием «просмотрено» (градиентная обводка гаснет; контролируется снаружи — например, гасится сразу при первом открытии группы по ",e.jsx(r.code,{children:"onGroupChange"}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Полноэкранный вьюер"})," — индикаторы прогресса сверху; тап по левой/правой части баннера, боковые стрелки и клавиши ←/→ листают сегменты внутри группы, а на границе группы — переходят к соседней."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Пауза по удержанию"})," — на pointer-событиях (мышь + тач/тачпад), с настраиваемым порогом."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Длительность на трёх уровнях"})," — слайд → группа → компонент; любую под-сторю можно удлинить или укоротить персонально."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Асинхронная загрузка ассетов"})," — спиннер на время загрузки + предзагрузка первого ассета по ховеру на триггер и остальных в фоне."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ошибка загрузки"})," — по умолчанию ",e.jsx(r.code,{children:"EmptyState"})," (размер ",e.jsx(r.code,{children:"s"}),", иконка загрузки) с текстом «Не удалось загрузить» и синей ссылкой-кнопкой «Обновить»; свой контент — через ",e.jsx(r.code,{children:"renderError"}),", событие — ",e.jsx(r.code,{children:"onError"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Оверлей"})," — включается/выключается, настраиваются цвет и ",e.jsx(r.code,{children:"zIndex"})," (можно открывать поверх ",e.jsx(r.code,{children:"ModalDF"}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Внешний API"})," — controlled/uncontrolled пропсы, императивный ",e.jsx(r.code,{children:"ref"})," и колбэки; детали — в разделе ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-stories-api--docs",children:"API"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`Stories; // корень: стор, оверлей, вьюер, внешний API
Stories.Preview; // триггер (circle/rect); слайды группы передаются пропом slides
`})}),`
`,e.jsx(r.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Button, Stories } from '@daisforge/ui';

<Stories defaultDuration={5000} onSlideChange={(group, slide) => {}}>
  <Stories.Preview
    title="Обновления"
    image={coverUrl}
    slides={[
      {
        src: slide1Url,
        footer: <Button size="s" stretching="filled" text="Подробнее" />,
      },
      { src: slide2Url, duration: 3000 },
      { src: slide3Url, objectFit: 'contain' },
    ]}
  />
</Stories>;
`})}),`
`,e.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Гибрид компаунд + данные"})," — триггеры пишутся как ",e.jsx(r.code,{children:"Stories.Preview"}),", а сегменты передаются данными (",e.jsx(r.code,{children:"slides"}),"). Это даёт свободную вёрстку триггеров и одновременно единый индекс для программного ",e.jsx(r.code,{children:"goTo(group, slide)"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Прогресс без ре-рендеров"})," — заполнение индикатора тикает через ",e.jsx(r.code,{children:"requestAnimationFrame"})," прямо в DOM (transform), в обход React; в стор уходят только дискретные события (смена сегмента/группы, пауза)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"object-fit per-слайд"})," — по умолчанию ",e.jsx(r.code,{children:"cover"}),", переопределяется на каждом сегменте."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Нижний слот ",e.jsx(r.code,{children:"footer"})]})," — произвольный ReactNode на каждом сегменте (кнопка / текст / что угодно); потребитель сам задаёт вид и ширину."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Стрелки навигации"})," — листают сегменты внутри группы, а на границе группы переходят к соседней (как тап и клавиши ←/→). Видимость — проп ",e.jsx(r.code,{children:"arrows"}),": ",e.jsx(r.code,{children:"auto"})," (по умолчанию — скрыты, если сегмент всего один), ",e.jsx(r.code,{children:"always"})," (всегда), ",e.jsx(r.code,{children:"never"})," (не показывать). Недоступную по направлению стрелку по умолчанию не рендерим (на первом/последнем сегменте) — управляется пропом ",e.jsx(r.code,{children:"hideDisabledArrows"})," (по умолчанию ",e.jsx(r.code,{children:"true"}),"; ",e.jsx(r.code,{children:"false"})," возвращает прежнее disabled-состояние)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Video"})," — заложено в модель (",e.jsx(r.code,{children:"slide.type"}),"), но пока не реализовано: сейчас поддерживаются картинки и GIF."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Конец сторей"})," — после последнего сегмента последней группы вьюер закрывается и вызывается ",e.jsx(r.code,{children:"onComplete"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ошибка на сегменте"})," — автопереход останавливается (показывается error-state). Гашение «просмотрено» по ",e.jsx(r.code,{children:"onGroupChange"})," (при открытии) на это не влияет; ",e.jsx(r.code,{children:"onGroupComplete"})," (полный просмотр группы) сработает только при ручном пролистывании до конца."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Закрытие"})," — крестик, ",e.jsx(r.code,{children:"Esc"})," и клик по оверлею/вне контента."]}),`
`]}),`
`,e.jsxs(r.p,{children:["Описание типов — в разделе ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-stories-api--docs",children:"API"}),"."]}),`
`,e.jsx(d,{})]})}function M(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
