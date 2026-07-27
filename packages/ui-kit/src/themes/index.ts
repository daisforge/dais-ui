type ThemeModule = { light: string; dark: string };
export type { ThemeModule };

export {
  compatible as compatible_typo_theme,
  standard as standard_typo_theme
} from '@salutejs/plasma-typo';
export { sdds_finai__dark, sdds_finai__light } from '@salutejs/sdds-themes';
// themes sdds-finai high contrast
// Импорт из /theme — минуя компоненты пакета, которые тянут plasma-new-hope и styled-components
export { sdds_finai_high_contrast__dark } from '@salutejs-ds/sdds_finai_high_contrast/theme/themes/sdds_finai_high_contrast__dark';
export { sdds_finai_high_contrast__light } from '@salutejs-ds/sdds_finai_high_contrast/theme/themes/sdds_finai_high_contrast__light';
