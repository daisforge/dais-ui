export const pickWidestBreakpoint = (bp: Record<string, number>) =>
  Object.keys(bp).sort((a, b) => (bp[b] || 0) - (bp[a] || 0))[0] ?? 'lg';
