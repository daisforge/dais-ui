# @daisforge/ui - Библиотека компонентов

По большей части реэкспорт компонентов [SDDS](https://github.com/salute-developers/plasma)

Документация команды SDDS [тут](https://plasma.sberdevices.ru/sdds-finai/)

Рекомендуется использовать `"typescript": ">=5.0.0"`

## Установка пакета

```sh
    npm install --save react react-dom
```

```sh
    npm install --save-exact styled-components@5.3.11
```

```sh
    npm install --save-dev @types/styled-components
```

```sh
    npm install --save @daisforge/ui
```

## Совместимость и темы

Приложению нужен `styled-components 5.3.11`. Наследуемые типы атомарных
компонентов следуют SDDS `0.369.0`; при обновлении библиотеки
проверяйте типы приложения.

- Default, beta core и high contrast поступают из `@sddsjs/sdds_finai@0.2.3`.
  Публичные экспорты `sdds_finai__light/dark` являются алиасами
  `sdds_finai_default__light/dark`.
- `GlobalStyle.theme` принимает `light`, `dark`, `betaCoreLight`, `betaCoreDark`,
  `highContrastLight` и `highContrastDark`.
- `shadowGradientDark` и `shadowGradientLight` сохраняют публичные имена и
  fallback-значения и экспортируются из `@sddsjs/sdds_finai/theme/tokens/index.js`.
  Обе CSS-переменные присутствуют во всех шести темах. Все темы и токены остаются
  external при сборке библиотеки.
- `Dropdown`, `DropdownProps` и `DropdownItemOption` реэкспортируются из SDDS
  напрямую. Тип `DropdownProps` требует параметр пункта:
  `DropdownProps<DropdownItemOption>` или `DropdownProps<MyItem>`. Короткие placement
  `top/bottom/left/right` поддерживаются upstream
  как `*-start`, включая вложенные пункты, но помечены deprecated. Для нового
  кода используйте `*-start/center/end` или `auto`.
- При миграции учитывайте: SDDS фильтрует скрытые дочерние пункты и клонирует
  родителей. В `onItemSelect`, `onHover` и `renderItem` сохраняются пользовательские
  поля, но ссылочная идентичность с исходным родителем не гарантируется.
  Сопоставляйте пункты по `value`, а не через `===` или `Map` с ключами-объектами.

В изолированном потребителе проверены типы, production-сборки Vite и webpack 5
и работа вложенного Dropdown в браузере с корневыми импортами `@daisforge/ui`.
Webpack собирается без новых preloader и без отключения `resolve.fullySpecified`:
ESM-импорты тем в сборке библиотеки содержат `.js` и `/index.js`.
Для явного выбора формата публичного подпути используйте `/index.mjs` или
`/index.cjs`; разрешение подпутей без расширений зависит от сборщика.
Прямой запуск ESM Dropdown в Node без сборщика ограничен импортами каталогов
в самом SDDS (`ERR_UNSUPPORTED_DIR_IMPORT`); CJS-импорты Dropdown, тем и теней
проверены в Node. Корпоративные webpack-конфиги недоступны
и не проверены. При обновлении сохраните существующие правила загрузки CSS таблиц,
установите `styled-components` точной версии `5.3.11` (`npm install --save-exact
styled-components@5.3.11`), обновите lockfile и выполните typecheck и production-сборку
своего приложения. Подтверждённой необходимости менять webpack-конфиг нет.

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
