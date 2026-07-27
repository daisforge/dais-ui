import React from 'react';
import type { Decorator } from '@storybook/react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from '../../ui-kit/src/styles';
import type { GlobalStyleTheme } from '../../ui-kit/src/styles/DefaultGlobalStyle';
import { ViewContainer } from '@salutejs/sdds-finai';
import { BreakpointProvider } from '../../ui-kit/src/utils';

// @ts-ignore
import styles from '@salutejs/sdds-themes/css/sdds_finai.module.css';

const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: var(--background-primary);
    }
    .sbdocs-preview {
      & .docs-story > div {
        background-color: var(--background-primary);
      }
    }
`;
const ResetCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const FINAI_THEMES = {
  LIGHT_THEME: 'FinAI:light',
  DARK_THEME: 'FinAI:dark',
  BOTH_THEMES: 'FinAI:both',
  HC_LIGHT_THEME: 'FinAI HC:light',
} as const;
type FinAIThemes = typeof FINAI_THEMES;
type FinAIThemeKey = keyof FinAIThemes;
type FinAIThemeValue = FinAIThemes[keyof FinAIThemes];

const globalStylesThemeMapper: Record<
  Exclude<FinAIThemeValue, typeof FINAI_THEMES.BOTH_THEMES>,
  GlobalStyleTheme
> = {
  [FINAI_THEMES.LIGHT_THEME]: 'light',
  [FINAI_THEMES.DARK_THEME]: 'dark',
  [FINAI_THEMES.HC_LIGHT_THEME]: 'highContrastLight',
};

const Flex = styled.div({
  padding: '2rem',
  backgroundColor: 'var(--background-primary)',
});

const ConstantStyles = () => (
  <>
    <ResetCss />
    <DocumentStyle />
  </>
);

export const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as FinAIThemeValue;
  if (theme === FINAI_THEMES.BOTH_THEMES) {
    return (
      <BreakpointProvider>
        <ConstantStyles />
        <Flex className={`styles-light-container ${styles.light}`}>
          <ViewContainer view="onLight">
            <Story {...context} />
          </ViewContainer>
        </Flex>
        <Flex className={`styles-dark-container ${styles.dark}`}>
          <ViewContainer view="onDark">
            <Story {...context} />
          </ViewContainer>
        </Flex>
      </BreakpointProvider>
    );
  }

  const themeType = globalStylesThemeMapper[theme];

  return (
    <BreakpointProvider>
      <ConstantStyles />
      <GlobalStyle theme={themeType} />
      <Story {...context} />
    </BreakpointProvider>
  );
};

export const globalTypeTheme = {
  description: 'Global theme for components',
  defaultValue: FINAI_THEMES.LIGHT_THEME,
  toolbar: {
    icon: 'mirror',
    title: 'Theme',
    items: [
      FINAI_THEMES.LIGHT_THEME,
      FINAI_THEMES.DARK_THEME,
      FINAI_THEMES.HC_LIGHT_THEME,
      FINAI_THEMES.BOTH_THEMES,
    ],
    dynamicTitle: true,
  },
};
