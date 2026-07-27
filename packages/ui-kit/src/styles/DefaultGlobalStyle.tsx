import { getCustomScrollbar } from '@ui-kit/mixins';
import { mCls } from '@ui-kit/utils';
import { ComponentProps, useEffect, useMemo } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import {
  compatible_typo_theme,
  sdds_finai__dark,
  sdds_finai__light,
  sdds_finai_high_contrast__dark,
  sdds_finai_high_contrast__light,
  standard_typo_theme
} from '../themes';
import { generateNotificationViewStyles } from './notificationClassNames';
import { TOOLTIP_FULL_WIDTH_CLASS } from './tooltipClassNames';

const StandardTypoTheme = createGlobalStyle(standard_typo_theme);
const CompatibleTypoTheme = createGlobalStyle(compatible_typo_theme);

const SDDSTheme = createGlobalStyle(sdds_finai__light);
const GlobalScrollbarLightStyles = createGlobalStyle`
  * {
    ${() => getCustomScrollbar({ theme: 'light' })}
  }
`;
const GlobalScrollbarDarkStyles = createGlobalStyle`
  * {
    ${() => getCustomScrollbar({ theme: 'dark' })}
  }
`;
const GlobalNotificationStyles = createGlobalStyle`
  * {
    ${() => generateNotificationViewStyles()}
  }
`;
export const testGlobalPopoverStylesMixin = css`
  .popover-wrapper:has(> .${TOOLTIP_FULL_WIDTH_CLASS}) {
    width: 100%;
  }
`;

// FIXME: ожидаем переработки компонента Tooltip от атомарной библиотеки
// Нет никакой возможности добраться до popover-wrapper, пока такой fix
export const GlobalPopoverStyles = createGlobalStyle`
  ${testGlobalPopoverStylesMixin}
`;

const DarkSDDSTheme = createGlobalStyle(sdds_finai__dark);
const HCLightSDDSTheme = createGlobalStyle(sdds_finai_high_contrast__light);
const HCDarkSDDSTheme = createGlobalStyle(sdds_finai_high_contrast__dark);

export const DarkGlobalStyle = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);
  return (
    <>
      <StandardTypoTheme />
      <CompatibleTypoTheme />
      <DarkSDDSTheme />
      <GlobalScrollbarDarkStyles />
      <GlobalPopoverStyles />
    </>
  );
};

export function scopeTheme(
  themeTokens: TemplateStringsArray,
  selector: string
) {
  return themeTokens.join('\n').replace(/:root/g, selector);
}

const sddsThemeMap = {
  light: sdds_finai__light,
  dark: sdds_finai__dark,
  highContrastLight: sdds_finai_high_contrast__light,
  highContrastDark: sdds_finai_high_contrast__dark
} as const;

const sddsThemeCompMap = {
  light: SDDSTheme,
  dark: DarkSDDSTheme,
  highContrastLight: HCLightSDDSTheme,
  highContrastDark: HCDarkSDDSTheme
} as const;

// const sddsThemeModuleCssMap = {
//   light: theme_module_css.light,
//   dark: theme_module_css.dark,
//   highContrastLight: theme_high_contrast_module_css.light,
//   highContrastDark: theme_high_contrast_module_css.dark,
// } as const;

export type GlobalStyleTheme = keyof typeof sddsThemeMap;

export const GlobalStyle = ({
  theme = 'light'
}: {
  theme?: GlobalStyleTheme;
}) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const ActiveSDDSTheme = sddsThemeCompMap[theme];
  const isLightBase = theme === 'light' || theme === 'highContrastLight';

  return (
    <>
      <StandardTypoTheme />
      <CompatibleTypoTheme />
      <ActiveSDDSTheme />
      {isLightBase ? (
        <GlobalScrollbarLightStyles />
      ) : (
        <GlobalScrollbarDarkStyles />
      )}
      <GlobalPopoverStyles />
      <GlobalNotificationStyles />
    </>
  );
};

export const TestGlobalIsolatedStyleWithReplace = ({
  theme = 'light',
  scopeSelector
}: {
  theme?: GlobalStyleTheme;
  /**
   * Селектор для скоупинга темы.
   * @example ".rootContainerOfMicroFront"
   */
  scopeSelector: string;
}) => {
  const ActiveSDDSTheme = useMemo(() => {
    if (scopeSelector) {
      return createGlobalStyle`
      ${scopeTheme(sddsThemeMap[theme], scopeSelector)}
      `;
    }
    return () => null;
  }, [scopeSelector, theme]);

  const isLightBase = theme === 'light' || theme === 'highContrastLight';

  return (
    <>
      <ActiveSDDSTheme />
      {isLightBase ? (
        <GlobalScrollbarLightStyles />
      ) : (
        <GlobalScrollbarDarkStyles />
      )}
      <GlobalPopoverStyles />
      <GlobalNotificationStyles />
    </>
  );
};

export const styledTestRootIsolatedThemeProviderLayoutMixin = ({
  isLightBase,
  theme
}: {
  isLightBase: boolean;
  theme: keyof typeof sddsThemeMap;
}) => css`
  ${scopeTheme(sddsThemeMap[theme], '&')}
  ${getCustomScrollbar({ theme: isLightBase ? 'light' : 'dark' })}
  ${testGlobalPopoverStylesMixin}
  ${generateNotificationViewStyles()}
`;

export const StyledTestRootIsolatedThemeProviderLayout = styled.div<{
  isLightBase: boolean;
  activeTheme: GlobalStyleTheme;
}>`
  ${({ isLightBase, activeTheme }) =>
    styledTestRootIsolatedThemeProviderLayoutMixin({
      isLightBase,
      theme: activeTheme
    })}
`;

export const TestRootIsolatedThemeProviderLayout = ({
  theme = 'light',
  className,
  children,
  ...props
}: {
  theme?: GlobalStyleTheme;
} & ComponentProps<'div'>) => {
  const isLightBase = theme === 'light' || theme === 'highContrastLight';

  return (
    <StyledTestRootIsolatedThemeProviderLayout
      className={mCls('TestRootIsolatedThemeProviderLayout', className)}
      {...(props as ComponentProps<
        typeof StyledTestRootIsolatedThemeProviderLayout
      >)}
      isLightBase={isLightBase}
      activeTheme={theme}
    >
      {children}
    </StyledTestRootIsolatedThemeProviderLayout>
  );
};
