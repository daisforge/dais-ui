import { CopyButton } from '@df-storybook/utils/CopyButton';

export function CopyMessageButton({ text }: { text: string }) {
  return (
    <CopyButton
      size="xxs"
      view="clear"
      text="Скопировать ответ"
      textOnCopied="Скопировано"
      copyText={text}
    />
  );
}
