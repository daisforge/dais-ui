import { IconButton } from '@ui-kit/components/IconButton';
import { ViewContainer } from '@ui-kit/components/ViewContainer';
import { IconCopyFill, IconDone } from '@ui-kit/icons';
import { useState } from 'react';

export function CopyCodeAbsoluteButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ViewContainer
      view="onDark"
      style={{
        position: 'absolute',
        bottom: '8px',
        right: '8px',
      }}
    >
      <IconButton
        size="xxs"
        view="clear"
        onClick={handleCopy}
        title={copied ? 'Скопировано' : 'Скопировать код'}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = '0.6';
        }}
      >
        {copied ? (
          <IconDone size="xs" color="inherit" />
        ) : (
          <IconCopyFill size="xs" color="inherit" />
        )}
      </IconButton>
    </ViewContainer>
  );
}
