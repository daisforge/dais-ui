type ThemeModule = { light: string; dark: string };
export type { ThemeModule };

export {
  compatible as compatible_typo_theme,
  standard as standard_typo_theme,
} from '@salutejs/plasma-typo';
// Сохраняем публичные имена dais-ui после объединения тем SDDS в одном пакете.
// Конкретные пути нужны и в runtime: у theme/themes есть только index.d.ts.
export { sdds_finai_beta_core__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_beta_core__dark';
export { sdds_finai_beta_core__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_beta_core__light';
export { sdds_finai_default__dark as sdds_finai__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_default__dark';
export { sdds_finai_default__light as sdds_finai__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_default__light';
export { sdds_finai_high_contrast__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_high_contrast__dark';
export { sdds_finai_high_contrast__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_high_contrast__light';
