import { describe, expect, it } from 'vitest';

import { shadowGradientDark, shadowGradientLight } from '../tokens/shadow';
import {
  sdds_finai__dark,
  sdds_finai__light,
  sdds_finai_beta_core__dark,
  sdds_finai_beta_core__light,
  sdds_finai_high_contrast__dark,
  sdds_finai_high_contrast__light,
} from './index';

describe('Публичные темы после обновления SDDS', () => {
  it.each([
    ['light', sdds_finai__light],
    ['dark', sdds_finai__dark],
    ['betaCoreLight', sdds_finai_beta_core__light],
    ['betaCoreDark', sdds_finai_beta_core__dark],
    ['highContrastLight', sdds_finai_high_contrast__light],
    ['highContrastDark', sdds_finai_high_contrast__dark],
  ] as const)(
    'импортирует исполняемую тему %s со старым именем',
    (_name, theme) => {
      expect(Array.isArray(theme)).toBe(true);
      expect(theme.join('')).toContain('--background-primary:');
      expect(theme.join('')).toContain('--text-primary:');
      expect(theme.join('')).toContain('--shadow-gradient-dark:');
      expect(theme.join('')).toContain('--shadow-gradient-light:');
    },
  );

  it('сохраняет публичные градиентные тени и их fallback', () => {
    expect(shadowGradientDark).toBe(
      'var(--shadow-gradient-dark, 0.1689rem 0.2252rem 0.6756rem 0rem #2969E399,-0.1126rem -0.1689rem 1.1823rem -0.1689rem #12C2F399)',
    );
    expect(shadowGradientLight).toBe(
      'var(--shadow-gradient-light, 0.1875rem 0.25rem 0.75rem 0rem #8BB2FC7A,-0.125rem -0.1875rem 1.3125rem -0.1875rem #4AD6FC7A)',
    );
  });
});
