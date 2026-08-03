import { EmptyState } from '@ui-kit/components/EmptyState';
import { Spinner } from '@ui-kit/components/Spinner';

import { PreviewProps } from '../ApprovalCenter.types';
import { isNotNullOrUndefined } from '../ApprovalCenter.utils';
import { PreviewContainer } from '../styled';

export const Preview = (props: PreviewProps) => {
  const { preview } = props;
  const { button, loading } = preview ?? {};

  const isThereButton = isNotNullOrUndefined(button);

  return (
    <PreviewContainer>
      {loading ? (
        <Spinner size="l" view="default" />
      ) : (
        <EmptyState
          size="m"
          variant="no-content"
          buttons={
            isThereButton
              ? [
                  {
                    props: {
                      text: button.text,
                      children: button.text,
                      view: 'accent',
                      onClick: button.onClick,
                    },
                    type: 'link',
                  },
                ]
              : undefined
          }
        />
      )}
    </PreviewContainer>
  );
};
