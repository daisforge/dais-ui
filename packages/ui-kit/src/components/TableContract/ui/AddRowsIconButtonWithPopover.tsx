import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { NumberInput } from '@ui-kit/components/NumberInput';
import { Popover } from '@ui-kit/components/Popover';
import { BodyM, BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconTableRowAdd } from '@ui-kit/icons';
import { surfaceSolidCard, textSecondary } from '@ui-kit/tokens';
import { useState } from 'react';
import styled from 'styled-components';

const AddRowsIconButtonWithPopoverCssId = 'AddRowsIconButtonWithPopover';
const cls = {
  container: `${AddRowsIconButtonWithPopoverCssId}_container`,
  bottomBlock: `${AddRowsIconButtonWithPopoverCssId}_bottomBlock`,
  title: `${AddRowsIconButtonWithPopoverCssId}_title`,
  description: `${AddRowsIconButtonWithPopoverCssId}_description`,
  arrowSelector: `${AddRowsIconButtonWithPopoverCssId}_popover-arrow:before`
};

const C = {
  spaceX6: () => s.x6,
  spaceX8: () => s.x8,
  spaceX4: () => s.x4,
  spaceX2: () => s.x2
};

const PopoverStyled = styled(Popover)`
  & .${cls.arrowSelector}, & .${cls.container} {
    background-color: ${() => surfaceSolidCard};
  }
  .${cls.container} {
    padding: ${C.spaceX6} 14px;
    border-radius: ${C.spaceX8};

    .${cls.title} {
      margin-bottom: ${C.spaceX2};
    }
    .${cls.description} {
      color: ${() => textSecondary};
    }
    .${cls.bottomBlock} {
      margin-top: ${C.spaceX6};
      display: flex;
      gap: ${C.spaceX4};
    }
  }
`;

export const AddRowsIconButtonWithPopover = ({
  onSubmit
}: {
  onSubmit: (countOfAddedRow: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <PopoverStyled
      opened={open}
      usePortal
      onToggle={(is) => setOpen(is)}
      role="presentation"
      target={
        <IconButton size="xs" view="clear">
          <IconTableRowAdd color="inherit" />
        </IconButton>
      }
      placement="bottom"
      offset={[0, 8]}
      trigger="click"
      hasArrow
      closeOnOverlayClick
      closeOnEsc
      isFocusTrapped
    >
      <div className={cls.container}>
        <BodyM bold className={cls.title}>
          Добавить строки
        </BodyM>
        <BodyS className={cls.description}>
          Введите необходимое количество
        </BodyS>
        <div className={cls.bottomBlock}>
          <NumberInput
            view="secondary"
            size="s"
            value={count}
            min={0}
            onChange={(_, v) => {
              if (v !== undefined) {
                setCount(+v);
              }
            }}
            width={140}
          />
          <Button
            size="s"
            view="accent"
            onClick={() => {
              onSubmit(count);
              setOpen(false);
            }}
          >
            Добавить
          </Button>
        </div>
      </div>
    </PopoverStyled>
  );
};
