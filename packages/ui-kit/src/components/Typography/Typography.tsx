import {
  BodyL,
  BodyM,
  BodyS,
  BodyXS,
  BodyXXS,
  DsplL,
  DsplM,
  DsplS,
  H1,
  H2,
  H3,
  H4,
  H5,
  TextL,
  TextM,
  TextS,
  TextXS
} from '@salutejs/sdds-finai';
import React, { ComponentProps, LegacyRef } from 'react';

const typographyComponents = {
  BodyL,
  BodyM,
  BodyS,
  BodyXS,
  BodyXXS,
  DsplL,
  DsplM,
  DsplS,
  H1,
  H2,
  H3,
  H4,
  H5,
  TextL,
  TextM,
  TextS,
  TextXS
} as const;

export type TypographyVariant = keyof typeof typographyComponents;

export type PropsForVariant<T extends TypographyVariant> = ComponentProps<
  (typeof typographyComponents)[T]
>;

export type TypographyProps<T extends TypographyVariant> = {
  variant: T;
  children: React.ReactNode;
  refTypography?: LegacyRef<HTMLDivElement> | undefined;
} & PropsForVariant<T>;

export function Typography<T extends TypographyVariant>({
  variant,
  children,
  refTypography,
  ...props
}: TypographyProps<T>) {
  // TODO: временное решение, пока приводим напрямую к BodyM, чтобы не возникало ошибок типизации
  const Component = typographyComponents[variant] as typeof BodyM;
  return (
    <Component {...(props as ComponentProps<typeof BodyM>)} ref={refTypography}>
      {children}
    </Component>
  );
}

Typography.displayName = 'Typography';
