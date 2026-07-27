# @daisforge/ui - Библиотека компонентов

По большей части реэкспорт компонентов [SDDS](https://github.com/salute-developers/plasma)

Документация команды SDDS [тут](https://plasma.sberdevices.ru/sdds-finai/)

Рекомендуется использовать `"typescript": ">=5.0.0"`

## Установка пакета

```sh
    npm install --save react react-dom
```

```sh
    npm install --save styled-components@5.3.1
```

```sh
    npm install --save-dev @types/styled-components
```

```sh
    npm install --save @daisforge/ui
```

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
