/* eslint-disable import/extensions */

/*
 * parseMdx.js — конвертация MDX -> чистый Markdown
 *
 * Убирает import/Meta/Stories, подставляет типы из typesMap
 * вместо <TypeSourceViewer> и <CustomArgTypes>.
 */

import { readFileSync } from 'fs';

import { getStrWithReplacedNewLineSymbols } from '../../helpers.js';

export function parseMdx(filePath, typesMap, argTypesMapping) {
  let content = readFileSync(filePath, 'utf8');
  content = getStrWithReplacedNewLineSymbols(content);

  // убираем import-строки (однострочные и многострочные)
  content = content.replace(
    /^import\s[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm,
    ''
  );
  content = content.replace(
    /^import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];?\s*$/gm,
    ''
  );

  content = content.replace(/<Meta[\s\S]*?\/>/g, '');
  content = content.replace(/<Stories\s*\/>/g, '');
  content = content.replace(/<Title>([\s\S]*?)<\/Title>/g, '# $1');
  content = content.replace(
    /<(?:IconGallery|IconItem|IconSvgSprite)[^>]*\/>/g,
    ''
  );
  content = content.replace(
    /<(?:IconGallery|IconItem)[^>]*>[\s\S]*?<\/(?:IconGallery|IconItem)>/g,
    ''
  );

  // подставляем типы вместо TypeSourceViewer
  content = content.replace(
    /<TypeSourceViewer[\s\S]*?filePath=["']([^"']+)["'][\s\S]*?typeName=["']([^"']+)["'][\s\S]*?\/>/g,
    (match, fp, tn) => {
      const key = `${fp}$$$${tn}`;
      const typeSource = typesMap[key];
      if (typeSource) {
        return `\n\`\`\`typescript\n${typeSource}\n\`\`\`\n`;
      }
      return `\n<!-- TypeSourceViewer: ${tn} из ${fp} (не найден в types.string.json) -->\n`;
    }
  );

  // обратный порядок атрибутов
  content = content.replace(
    /<TypeSourceViewer[\s\S]*?typeName=["']([^"']+)["'][\s\S]*?filePath=["']([^"']+)["'][\s\S]*?\/>/g,
    (match, tn, fp) => {
      const key = `${fp}$$$${tn}`;
      const typeSource = typesMap[key];
      if (typeSource) {
        return `\n\`\`\`typescript\n${typeSource}\n\`\`\`\n`;
      }
      return `\n<!-- TypeSourceViewer: ${tn} из ${fp} (не найден в types.string.json) -->\n`;
    }
  );

  // подставляем типы вместо CustomArgTypes
  if (argTypesMapping) {
    content = content.replace(
      /<CustomArgTypes[\s\S]*?of=\{(\w+)\}[\s\S]*?\/>/g,
      (match, compName) => {
        const mapping = argTypesMapping[compName];
        if (mapping) {
          const key = `${mapping.filePath}$$$${mapping.typeName}`;
          const typeSource = typesMap[key];
          if (typeSource) {
            return `\n### ${mapping.typeName}\n\n\`\`\`typescript\n${typeSource}\n\`\`\`\n`;
          }
          return `\n<!-- CustomArgTypes: ${compName} -> ${mapping.typeName} (не найден в types.string.json) -->\n`;
        }
        return `\n<!-- CustomArgTypes: ${compName} (нет маппинга в конфиге) -->\n`;
      }
    );
  }

  // убираем лишние пустые строки
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim();

  return content;
}

export function extractTitleFromMdx(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const match = content.match(
      /<Meta\s[^>]*?title=["']([^"']+)["'][^>]*?\/?>/
    );
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function extractCategoryFromMdx(filePath) {
  const title = extractTitleFromMdx(filePath);
  if (title) {
    const parts = title.split('/');
    if (parts.length > 1) {
      return parts.slice(0, -1).join('/');
    }
  }
  return null;
}
