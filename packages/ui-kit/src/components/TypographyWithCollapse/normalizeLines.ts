export function normalizeLines(lines = 4): number {
  return Number.isFinite(lines) ? Math.max(1, Math.floor(lines)) : 4;
}
