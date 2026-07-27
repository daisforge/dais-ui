/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * Парсит CHANGELOG.md и возвращает только записи, относящиеся к указанному компоненту.
 * Поддерживает форматы:
 *   - **ComponentName:** ...
 *   - **ComponentName, OtherComponent:** ...
 *   - **ComponentName.SubFeature:** ...
 */
export function filterChangelog(
  markdown: string,
  componentName: string
): string {
  const lines = markdown.split('\n');
  const result: string[] = [];

  let currentVersionHeader = '';
  let currentSectionHeader = '';
  // let versionHasEntries = false;
  let versionHeaderAdded = false;
  let sectionHeaderAdded = false;

  const namePattern = new RegExp(
    `\\*\\*[^*]*\\b${escapeRegex(componentName)}\\b[^*]*\\*\\*`,
    'i'
  );

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (typeof line !== 'string') {
      continue;
    }

    if (/^#{1,2}\s+\[?\d+\.\d+/.test(line)) {
      currentVersionHeader = line;
      // versionHasEntries = false;
      versionHeaderAdded = false;
      sectionHeaderAdded = false;
      currentSectionHeader = '';
      continue;
    }

    if (/^### /.test(line)) {
      currentSectionHeader = line;
      sectionHeaderAdded = false;
      continue;
    }

    if (/^- \*\*/.test(line) && namePattern.test(line)) {
      if (!versionHeaderAdded) {
        if (result.length > 0) result.push('');
        result.push(currentVersionHeader);
        versionHeaderAdded = true;
      }
      if (!sectionHeaderAdded && currentSectionHeader) {
        result.push('');
        result.push(currentSectionHeader);
        result.push('');
        sectionHeaderAdded = true;
      }
      result.push(line);
      // versionHasEntries = true;
    }
  }

  if (result.length === 0) {
    return `No changelog entries found for **${componentName}**.`;
  }

  return `# Changelog: ${componentName}\n\n${result.join('\n')}\n`;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
