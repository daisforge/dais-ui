import { Button } from '@ui-kit/components/Button';
import { IconCopyFill, IconDone } from '@ui-kit/icons';
import { handleCopyAsync } from '@ui-kit/shared/utils/copy';
import { ComponentProps, useState } from 'react';

export const CopyButton = ({
  copyText,
  text = 'Скопировать',
  textOnCopied = 'Скопировано',
  textOnError = 'Ошибка копирования',
  ...rest
}: {
  copyText: string | (() => string);
  text?: string;
  textOnCopied?: string;
  textOnError?: string;
} & ComponentProps<typeof Button>) => {
  const [innerText, setInnerText] = useState(text);
  const Icon = innerText === text ? IconCopyFill : IconDone;

  return (
    <Button
      view="secondary"
      contentLeft={
        <Icon
          color="inherit"
          size={rest.size === 'xs' || rest.size === 'xxs' ? 'xs' : undefined}
        />
      }
      {...rest}
      onClick={(e) => {
        e.stopPropagation();
        handleCopyAsync(typeof copyText === 'function' ? copyText() : copyText)
          .then(() => {
            setInnerText(textOnCopied);
          })
          .catch(() => {
            setInnerText(textOnError);
          })
          .finally(() => {
            setTimeout(() => {
              setInnerText(text);
            }, 3000);
          });
      }}
    >
      {innerText}
    </Button>
  );
};
