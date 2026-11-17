/**
 * Загрузчик docs-страниц, которых нет в исходниках Storybook, а есть только
 * рядом с уже собранной статикой (`<static>/internal/<page>.js`).
 *
 * Так к готовой сборке Storybook (npm-пакет @daisforge/ui-storybook) можно
 * добавить свои страницы без пересборки. Страница — ES-модуль, default export
 * которого — React-компонент. React, styled-components и модули библиотеки она
 * получает через `globalThis.__SB_SHARED__`, а не бандлит у себя, поэтому
 * работает с тем же экземпляром React, что и остальной Storybook, и ничего не
 * загружает повторно.
 *
 * Каждая такая страница — docs-запись в index.json, которая указывает на этот
 * же модуль (ExternalPage.mdx) и хранит имя модуля в поле `internalPage`.
 * Записи добавляет в готовую статику scripts/storybook-package/add-pages.mjs,
 * поэтому страницы стоят в общем дереве сайдбара там, куда их вставили. Сама
 * служебная запись `service-externalpage--docs` в сайдбаре скрыта.
 */
import * as constants from '@ui-kit/constants';
import * as icons from '@ui-kit/icons';
// Намеренно весь публичный API из корня: страницы импортируют библиотеку так
// же, как потребители (`import { Button } from '<библиотека>'`).
// eslint-disable-next-line no-restricted-imports
import * as lib from '@ui-kit/index';
import * as mixins from '@ui-kit/mixins';
import * as styles from '@ui-kit/styles';
import * as tokens from '@ui-kit/tokens';
import * as utils from '@ui-kit/utils';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import * as ReactDOM from 'react-dom';
import * as styledComponents from 'styled-components';

// Список ключей — общий с build-pages.mjs, который собирает страницы под эту
// сборку Storybook. Оба файла публикуются в одном пакете одной версии.
import sharedModules from './shared-modules.json';

/** Модули, которые страница берёт из Storybook. Ключи нейтральные. */
const MODULES: Record<string, unknown> = {
  react: React,
  'react/jsx-runtime': jsxRuntime,
  'react-dom': ReactDOM,
  'styled-components': styledComponents,
  lib,
  'lib/constants': constants,
  'lib/icons': icons,
  'lib/mixins': mixins,
  'lib/styles': styles,
  'lib/tokens': tokens,
  'lib/utils': utils,
};

const SHARED_KEYS = [
  ...sharedModules.external,
  'lib',
  ...sharedModules.libSubpaths.map((sub) => `lib/${sub}`),
];

/**
 * Расхождение MODULES и shared-modules.json значит, что страницы соберутся под
 * один набор модулей, а получат другой. Падаем сразу, а не в рантайме страницы.
 */
const mismatch = [
  ...SHARED_KEYS.filter((key) => !(key in MODULES)).map((key) => `нет ${key}`),
  ...Object.keys(MODULES)
    .filter((key) => !SHARED_KEYS.includes(key))
    .map((key) => `лишний ${key}`),
];
if (mismatch.length) {
  throw new Error(
    `ExternalPage: модули расходятся с shared-modules.json: ${mismatch.join(
      ', ',
    )}`,
  );
}

// Имя глобала — договорённость с внешним кодом страниц, менять нельзя.
// eslint-disable-next-line no-underscore-dangle
(globalThis as { __SB_SHARED__?: Record<string, unknown> }).__SB_SHARED__ =
  MODULES;

/**
 * Имя модуля страницы — только из поля записи index.json и только такого
 * вида, так что подгрузить можно лишь файл из соседнего каталога internal/.
 */
const PAGE_RE = /^[a-z0-9-]+$/;

/** Имя модуля страницы из поля `internalPage` docs-записи. */
const readPageName = async (entryId: string): Promise<string | null> => {
  // index.json уже загружен Storybook'ом, повторный запрос берётся из кэша.
  const response = await fetch(new URL('./index.json', window.location.href));
  if (!response.ok) return null;
  const index = (await response.json()) as {
    entries?: Record<string, { internalPage?: unknown }>;
  };
  const page = index.entries?.[entryId]?.internalPage;
  return typeof page === 'string' && PAGE_RE.test(page) ? page : null;
};

/**
 * id открытой docs-записи. Менеджер обновляет свой адрес (?path=/docs/<id>)
 * до рендера превью, а превью открыто в iframe того же origin. При прямом
 * открытии iframe.html id берётся из собственного адреса.
 */
const readEntryId = (): string => {
  const own = new URLSearchParams(window.location.search).get('id') ?? '';
  try {
    const managerPath =
      new URLSearchParams(window.parent.location.search).get('path') ?? '';
    return managerPath.match(/^\/docs\/([^/]+)/)?.[1] ?? own;
  } catch {
    return own;
  }
};

type PageState =
  | { status: 'loading' }
  | { status: 'ready'; Page: React.ComponentType }
  | { status: 'error'; message: string };

export const ExternalPage = () => {
  const [entryId] = React.useState(readEntryId);
  const [state, setState] = React.useState<PageState>({ status: 'loading' });

  React.useEffect(() => {
    let cancelled = false;
    const fail = (message: string) => {
      if (!cancelled) setState({ status: 'error', message });
    };

    readPageName(entryId)
      .then(async (page) => {
        if (!page) {
          fail(`«${entryId}» — не внутренняя страница (нет поля internalPage)`);
          return;
        }
        const url = new URL(`./internal/${page}.js`, window.location.href).href;
        let module: { default?: unknown };
        try {
          module = await import(/* @vite-ignore */ url);
        } catch (error) {
          fail(`Не удалось загрузить internal/${page}.js: ${String(error)}`);
          return;
        }
        if (typeof module.default !== 'function') {
          fail(
            `internal/${page}.js не экспортирует React-компонент по умолчанию`,
          );
          return;
        }
        if (!cancelled) {
          setState({
            status: 'ready',
            Page: module.default as React.ComponentType,
          });
        }
      })
      .catch((error: unknown) =>
        fail(`Не удалось прочитать index.json: ${String(error)}`),
      );

    return () => {
      cancelled = true;
    };
  }, [entryId]);

  if (state.status === 'loading') return null;

  return (
    <>
      {/* В docs-режиме декораторы темы не применяются: как и обычные
          docs-страницы с компонентами, подключаем глобальные стили сами. */}
      <styles.GlobalStyle />
      {/* sb-unstyled: стили docs Storybook не перекрашивают содержимое. */}
      <div className="sb-unstyled">
        {state.status === 'error' ? <p>{state.message}</p> : <state.Page />}
      </div>
    </>
  );
};
