/* eslint-disable @typescript-eslint/no-use-before-define */
import { CopyButton } from '@df-storybook/utils/CopyButton';
import { Markdown } from '@storybook/blocks';
import { Box } from '@ui-kit/components/Box';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { GlobalStyle } from '@ui-kit/styles';
import { useDebouncedValue } from '@ui-kit/utils/hooks/useDebouncedValue';
import React, { ChangeEvent, memo, useMemo, useState } from 'react';

import {
  searchChangelog,
  SERVICE_ID_START,
  VersionBlock,
} from './searchChangelog';
/**
 * Замена URL сравнения версий в CHANGELOG.md
 *
 * Исходный формат:
 *   https://stash.dddddd.ru:7999/uvhd-fiori/digital_finance_ui/compare/v0.10.0...v0.11.0
 *
 * Целевой формат:
 *   https://stash.dddddd.ru/projects/UVHD-FIORI/repos/digital_finance_ui/compare/diff?sourceBranch=refs%2Ftags%2Fv0.11.0&targetRepoId=160675&targetBranch=refs%2Ftags%2Fv0.10.0
 */
const replaceChangelogLinkCompare = (text: string): string => {
  const result = text.replace(
    /https?:\/\/stash\.delta\.dddd\.ru:7999\/([^/]+)\/([^/]+)\/compare\/v([^)]+)\.\.\.v([^)]+)\)/g,
    'https://stash.dddddd.ru/projects/$1/repos/$2/compare/diff?sourceBranch=refs%2Ftags%2Fv$4&targetRepoId=160675&targetBranch=refs%2Ftags%2Fv$3',
  );
  return result;
};
const replaceChangelogLinkDomain = (text: string): string => {
  const result = text.replace(
    /stash.dddddd.ru:7999\/uvhd-fiori/g,
    'stash.dddddd.ru/projects/UVHD-FIORI/repos',
  );
  return result;
};
const replaceChangelogLinks = (text: string) =>
  replaceChangelogLinkDomain(replaceChangelogLinkCompare(text));

interface ChangelogSearchProps {
  changelog: string;
}

export const ChangelogSearch: React.FC<ChangelogSearchProps> = ({
  changelog: changelogSource,
}) => {
  const changelog = useMemo(
    () => replaceChangelogLinks(changelogSource),
    [changelogSource],
  );

  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 700);

  const filtered = useMemo(() => {
    const res = searchChangelog(changelog, debouncedQuery);
    return res;
  }, [changelog, debouncedQuery]);

  return (
    <div>
      <GlobalStyle />
      <div style={{ marginBottom: '16px', maxWidth: '400px' }}>
        <TextFieldSearch
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onClear={() => setQuery('')}
          placeholder="Поиск"
          size="s"
        />
      </div>
      <style>
        {`
          .changelog-content mark {
            background-color: #fff3bf;
            color: inherit;
            padding: 1px 2px;
            border-radius: 2px;
          }
        `}
      </style>
      <div className="changelog-content">
        {/* <MarkdownMemo mdStringContent={filtered.result} /> */}

        <BlocksMarkdown blocks={filtered} />
      </div>
    </div>
  );
};

const BlocksMarkdown = memo(({ blocks }: { blocks: VersionBlock[] }) =>
  blocks.map((block) => {
    const md = <Markdown key={`${block.id}md`}>{block.content}</Markdown>;
    if (block.id.startsWith(SERVICE_ID_START)) return md;

    return (
      <Box
        key={block.id}
        $css="position: relative; margin: 12px 0 !important; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; padding-bottom: 52px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"
      >
        {/* <!-- Контент блока --> */}
        {md}
        {/* <!-- Кнопка копирования --> */}
        <CopyButton
          size="xxs"
          copyText={block.content}
          style={{ position: 'absolute', bottom: 12, right: 12 }}
        />
      </Box>
    );
  }),
);
