import type { BreakPointsKeys } from '@ui-kit/constants';
import type { PropsWithChildren } from 'react';

export type Breakpoint = BreakPointsKeys;

export type BreakpointConfig = Record<Breakpoint, number>;

export type UppercaseBreakpoint = Uppercase<Exclude<Breakpoint, 'xs'>>;

export interface IBreakpointContext {
  breakpoint: Breakpoint;
  breakpointConfig: BreakpointConfig;
}

export interface BreakpointProviderProps extends PropsWithChildren {
  breakpointConfig?: BreakpointConfig;
}

export interface MediaProviderProps extends PropsWithChildren {
  breakpointConfig?: BreakpointConfig;
}

export interface BreakpointReturn {
  /**
   * Текущий breakpoint ширины экрана
   */
  breakpoint: Breakpoint;
  /**
   * Возваращет `true` если текущий токен экрана (ширина экрана) больше чем проверяемый `token: Breakpoint`,
   * в ином случае - `false`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  up: (token: Breakpoint) => boolean;
  /**
   * Возваращет `true` если текущий токен экрана (ширина экрана) меньше чем проверяемый `token: Breakpoint`,
   * в ином случае - `false`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  down: (token: Breakpoint) => boolean;
  /**
   * Возваращет `true` если текущий токен экрана (ширина экрана) равен проверяемому `token: Breakpoint`,
   * в ином случае - `false`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  only: (token: Breakpoint) => boolean;
  /**
   * Возваращет `true` если текущий токен экрана (ширина экрана) не равен проверяемому `token: Breakpoint`,
   * в ином случае - `false`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  not: (token: Breakpoint) => boolean;
  /**
   * Возваращет `true` если текущий токен экрана (ширина экрана) находится между двумя проверямыми токенами (`start/end`),
   * в ином случае - `false`
   *
   * @param start Breakpoint
   * @param end Breakpoint
   * @returns boolean
   */
  between: (start: Breakpoint, end: Breakpoint) => boolean;
}

// Тип для медиазапросов
export type MediaQuery = (style: TemplateStringsArray | string) => string;

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      up: (token: Breakpoint) => MediaQuery;
      down: (token: Breakpoint) => MediaQuery;
      only: (token: Breakpoint) => MediaQuery;
      not: (token: Breakpoint) => MediaQuery;
      between: (start: Breakpoint, end: Breakpoint) => MediaQuery;
      exact: (min: number, max: number) => MediaQuery;
    };
  }
}
