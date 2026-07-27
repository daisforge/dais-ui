/**
 * Полезно для disabled состояний, когда нужно добавить опасити
 * Домножает alpha-канал hex-цвета на заданный множитель.
 * Поддерживает форматы: #RGB, #RGBA, #RRGGBB, #RRGGBBAA.
 */
export function applyAlpha(hex: string, opacity: number): string {
  const raw = hex.replace('#', '');
  let r: number;
  let g: number;
  let b: number;
  let a = 255;

  if (raw.length === 3 || raw.length === 4) {
    r = parseInt(raw[0]! + raw[0]!, 16);
    g = parseInt(raw[1]! + raw[1]!, 16);
    b = parseInt(raw[2]! + raw[2]!, 16);
    if (raw.length === 4) a = parseInt(raw[3]! + raw[3]!, 16);
  } else {
    r = parseInt(raw.slice(0, 2), 16);
    g = parseInt(raw.slice(2, 4), 16);
    b = parseInt(raw.slice(4, 6), 16);
    if (raw.length === 8) a = parseInt(raw.slice(6, 8), 16);
  }

  const newAlpha = Math.round(a * opacity);
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(newAlpha)}`;
}
