/* eslint-disable import/extensions -- Полные JS-пути обязательны для ESM-потребителей на webpack. */
type ThemeModule = { light: string; dark: string };
export type { ThemeModule };

export {
  compatible as compatible_typo_theme,
  standard as standard_typo_theme,
} from '@salutejs/plasma-typo';
// Сохраняем публичные имена dais-ui после объединения тем SDDS в одном пакете.
// Конкретные пути нужны и в runtime: у theme/themes есть только index.d.ts.
// Расширения .js обязательны для строгого ESM-resolve webpack из нашего .mjs.
export { sdds_finai_beta_core__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_beta_core__dark.js';
export { sdds_finai_beta_core__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_beta_core__light.js';
export { sdds_finai_default__dark as sdds_finai__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_default__dark.js';
export { sdds_finai_default__light as sdds_finai__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_default__light.js';
export { sdds_finai_high_contrast__dark } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_high_contrast__dark.js';
export { sdds_finai_high_contrast__light } from '@sddsjs/sdds_finai/theme/themes/sdds_finai_high_contrast__light.js';
