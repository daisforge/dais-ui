const charWidthCache = new Map<string, number>();

function getSpaceWidth(font: string): number {
  const cacheKey = `${font}_<space>`;

  if (charWidthCache.has(cacheKey)) {
    const res = charWidthCache.get(cacheKey);
    return (typeof res === 'number' && res) || 0;
  }

  const span = document.createElement('span');
  span.style.cssText = `
    font: ${font};
    visibility: hidden;
    white-space: pre-wrap;
    position: absolute;
  `;

  span.textContent = ' ';
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);

  charWidthCache.set(cacheKey, width);
  return width;
}

function measureCharWidth(char: string, font: string): number {
  const span = document.createElement('span');
  span.style.cssText = `
    font: ${font};
    visibility: hidden;
    white-space: nowrap;
    position: absolute;
    padding: 0;
    margin: 0;
  `;

  span.textContent = char;
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);

  return width;
}

export function getCharWidth(char: string, font: string): number {
  if (char === ' ') return getSpaceWidth(font);
  if (char === '\t') return getCharWidth(' ', font) * 4; // Табуляция = 4 пробела

  const cacheKey = `${font}_${char}`;

  if (charWidthCache.has(cacheKey)) {
    const res = charWidthCache.get(cacheKey);
    return (typeof res === 'number' && res) || 0;
  }

  const width = measureCharWidth(char, font);
  charWidthCache.set(cacheKey, width);
  return width;
}

// функция для расчета ширины текста с кешем
export function getTextWidthByCache(
  text: string,
  font: string,
  letterSpacingPx = 0,
): number {
  if (!text) return 0;

  const totalCharsWidth = Array.from(text).reduce(
    (sum, char) => sum + getCharWidth(char, font),
    0,
  );

  // Подсчет поправки на letter-spacing
  const charsCount = text.length;
  const spacingAdjustment = Math.max(charsCount - 1, 0) * letterSpacingPx;

  return totalCharsWidth + spacingAdjustment;
}

// функция для измерения ширины текста напрямую
function measureTextWidth(
  text: string,
  font: string,
  letterSpacingPx = 0,
): number {
  const span = document.createElement('span');
  span.style.cssText = `
    font: ${font};
    visibility: hidden;
    position: absolute;
    white-space: pre;
    padding: 0;
    margin: 0;
    letter-spacing: ${letterSpacingPx}px;
  `;

  span.textContent = text;
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);

  return width;
}

export function getTextWidth(
  text: string,
  font: string,
  letterSpacingPx = 0,
): number {
  if (!text) return 0;

  return measureTextWidth(text, font, letterSpacingPx);
}
