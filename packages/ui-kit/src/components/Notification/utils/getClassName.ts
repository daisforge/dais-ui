import { cls } from '@ui-kit/styles/notificationClassNames';
import { mCls } from '@ui-kit/utils';

type Props = {
  backgroundColor?: string;
  titleColor?: string;
  view?: string;
};

export const getClassName = ({
  backgroundColor,
  titleColor,
  view,
}: Props): string =>
  mCls(
    cls.wrapper,
    !!backgroundColor && cls.hasBackground,
    !!titleColor && cls.hasTitleColor,
    cls.hasBorderColor,
    view && view in cls && cls[view as keyof typeof cls],
  );
