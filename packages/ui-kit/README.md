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

## Совместимость и темы

Приложению нужен `styled-components ^5.3.11`. Наследуемые типы атомарных
компонентов следуют установленной версии SDDS; при обновлении библиотеки
проверяйте типы приложения.

- Default, beta core и high contrast поступают из `@sddsjs/sdds_finai`.
  Публичные экспорты `sdds_finai__light/dark` являются алиасами
  `sdds_finai_default__light/dark`.
- `GlobalStyle.theme` принимает `light`, `dark`, `betaCoreLight`, `betaCoreDark`,
  `highContrastLight` и `highContrastDark`.
- `shadowGradientDark` и `shadowGradientLight` экспортируются через
  `@salutejs/sdds-themes`. Их CSS-fallback работает и без соответствующих
  переменных в подключённой теме.
- `Dropdown` поддерживает прежние placement `top/bottom/left/right`:
  адаптер преобразует их в `*-start`, включая вложенные пункты.
  Новые `*-start/center/end` и `auto` передаются без изменения.
  Обработчики и `renderItem` получают исходные объекты пунктов.

Ручная палитра состояний Canvas-таблиц не обновляется автоматически вместе
с темами SDDS. Её изменения согласуются с дизайнером. Устройство палитры
и команды генерации описаны в [документации генератора](../../generators/table-token-states/README.md).

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

import {
  compatible_typo_theme,
  sdds_finai__light,
  standard_typo_theme,
} from '@daisforge/ui/themes';

const StandardTypoTheme = createGlobalStyle(standard_typo_theme);
const CompatibleTypoTheme = createGlobalStyle(compatible_typo_theme);
const SDDSTheme = createGlobalStyle(sdds_finai__light);

export const GlobalStyle = () => (
  <>
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
        <>
            <Button>Hello!</Button>
            <p style={{color: textAccent}}>Token usage example</p>
        </>
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

## Предупреждение source-map-loader в Webpack

В приложениях на Webpack предупреждение `Failed to parse source map from ...`
может возникать при обработке сторонних source maps. Если причина подтверждена,
можно подавить предупреждения этого loader в конфигурации потребителя:

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
