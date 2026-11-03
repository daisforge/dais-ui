# @daisforge/ui - Библиотека компонентов

По большей части реэкспорт компонентов [SDDS](https://github.com/salute-developers/plasma)

Документация команды SDDS [тут](https://plasma.sberdevices.ru/sdds-finai/)

Рекомендуется использовать `"typescript": ">=5.0.0"`

## Установка пакета

```sh
    npm install --save react react-dom
```

```sh
    npm install --save styled-components@5.3.11
```

```sh
    npm install --save-dev @types/styled-components
```

```sh
    npm install --save @daisforge/ui
```

## Обновление SDDS до 0.367.0

Используются `sdds-finai` 0.367.0, `plasma-new-hope` 0.388.0, `plasma-icons`
1.257.0, `plasma-typo` 0.59.0 и единый пакет тем `@sddsjs/sdds_finai` 0.2.0.
Приложению нужен `styled-components ^5.3.11` (ранее был закреплён 5.3.1).

- Публичные имена тем и значения `GlobalStyle.theme` сохранены. Default, beta core
  и high contrast теперь поступают из одного пакета. Цвета, в особенности high
  contrast, могут отличаться от прежних. Режим Storybook «обе темы» использует тот же источник.
- Экспорты `shadowGradientDark` и `shadowGradientLight` сохранены через
  `sdds-themes` 0.86.0; их CSS-fallback работает и без соответствующих переменных новой темы.
- `Dropdown` принимает старые `top/bottom/left/right` и новые `*-start/center/end`.
  Старые значения преобразуются в `*-start`, включая вложенные пункты.
  Обработчики и `renderItem` получают исходные объекты пунктов.
  **Для ревью:** адаптер совместимости оставлен намеренно; решение о его сохранении
  или отдельной миграции API нужно принять при ревью.
- Наследуемые типы остальных атомарных компонентов следуют SDDS. Upstream убрал
  `stretchHeight` у Popover (затрагивает и AiAgentPopover), `lighter` у Skeleton,
  `firstTextfieldInputWrapperRef/secondTextfieldInputWrapperRef` у Range и
  не поддерживаемые конфигурациями `appearance` у ряда компонентов.
  Потребителям этих свойств нужна проверка типов при обновлении.
- Добавлены возможности upstream: `periodSelectorAlign` у календарей/пикеров,
  `titleCaption` у Select/TimePicker, `customColor/customBackgroundColor` у Chip,
  `renderItem/hasLastLine` у Steps и управляемый размер resizable Popup.

Источники: [сравнение релизов 0.361.0–0.367.0](https://github.com/salute-developers/plasma/compare/%40salutejs/sdds-finai%400.361.0...%40salutejs/sdds-finai%400.367.0),
[переход на новые темы и styled-components](https://github.com/salute-developers/plasma/releases/tag/%40salutejs/sdds-finai%400.364.0).

Палитра состояний таблиц, согласованная с дизайнером, автоматически не меняется.
`npm run table-colors:check-sdds` показывает её расхождения с новыми темами
([результат сверки](../../generators/table-token-states/README.md#сверка-с-sdds-03670--темами-020-2026-11-03));
[отчёт генератора цветов содержимого](../../generators/table-content-tokens/report.md)
фиксирует обновлённые источники и сохранённые ручные значения.

Метаданные компонентов перегенерированы по установленным типам, документация
SDDS — по тегу 0.367.0. CDN атомарных MCP-данных не содержит 0.367.0, поэтому
штатный `--on-missing=keep` сохранил vendor-снимок 0.361.0. Дополнительный
`mcp:validate-index` не проходит и до обновления: в исходном Docker-окружении
403 атрибутированных расхождения, после обновления — 402 (наполненность индекса
проходит в обоих случаях). Это отдельная существующая проблема MCP-индекса.

## Настройка

В корне приложения импортируйте готовый компонент GlobalStyle:

```js
import { GlobalStyle } from '@daisforge/ui/styles';
```

Подключите компонент GlobalStyle:

```js
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
```

Вы так же можете создать свой кастомный компонент для подключения глобальных стилей:

Пример:

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { compatible_typo_theme, light_sdds_serv_theme, light_web_theme, standard_typo_theme } from '../themes';

const WebTheme = createGlobalStyle(light_web_theme);
const StandardTypoTheme = createGlobalStyle(standard_typo_theme);
const CompatibleTypoTheme = createGlobalStyle(compatible_typo_theme);
const SDDSTheme = createGlobalStyle(light_sdds_serv_theme);

export const GlobalStyle = () => (
  <>
    <WebTheme />
    <StandardTypoTheme />
    <CompatibleTypoTheme />
    <SDDSTheme />
  </>
);
```

Для корректной работы server side rendering приложение нужно обернуть SSRProvider

```js
import { SSRProvider } from '@daisforge/ui';
```

Все компоненты доступны из корня или из папки components:

```js
// App.tsx
import { Button } from '@daisforge/ui';
// или import { Button } from '@daisforge/ui/components/Button';
import { textAccent } from '@daisforge/ui/tokens';

export const App = () => {
    return (
        <Button>Hello!</Button>

        <p style={{color: textAccent}}>
            Token usage example
        </p>
    );
};
```

Иконки доступны для импорта из папки icons:

```js
// App.tsx
import { IconClock } from '@daisforge/ui/icons';

export const App = () => {
  return (
    <>
      <IconClock color="red" />
    </>
  );
};
```

## Возможное решение проблем:

`Failed to parse source map from ...`

Решение: Добавить в конфиг вебпака

```js
module.exports = {
  //...
  ignoreWarnings: [
    // Ignore warnings raised by source-map-loader
    // See: https://github.com/facebook/create-react-app/pull/11752
    {
      message: /source-map-loader/,
    },
  ],
};
```

---
