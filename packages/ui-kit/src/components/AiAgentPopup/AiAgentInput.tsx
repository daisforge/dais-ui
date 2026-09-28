import { TextArea } from '@ui-kit/components/TextArea';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

import { DEFAULT_INPUT_MAX_HEIGHT } from './AiAgentPopup.constants';
import {
  StyledInputBackplate,
  StyledInputGlow,
  StyledInputRoot,
} from './AiAgentPopup.styled';
import type { AiAgentInputProps } from './AiAgentPopup.types';

/**
 * Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
 * и правым слотом под кнопки. Компонент намеренно простой: никакой логики
 * отправки, очистки или смены кнопок в нём нет, всё это на стороне
 * потребителя.
 *
 * - свечение включается пропом glow и переключается в реальном времени;
 *   привязано к полю: при авторосте поля растёт вслед за ним так, что
 *   свес над верхней границей поля постоянный, и ложится под соседний
 *   контент (сообщения чата);
 * - rightSlot — произвольное содержимое правой части поля: кнопка
 *   отправки, кнопка остановки, с тултипами и любой логикой потребителя;
 * - поле авторастёт до пиксельного предела maxHeight (по умолчанию 312),
 *   дальше внутренний скролл;
 * - внешних отступов у компонента нет: место в лэйауте чата задаёт
 *   потребитель. Остальные пропсы уходят в TextArea, стили можно
 *   переопределить через className и style.
 */
export const AiAgentInput = forwardRef<HTMLDivElement, AiAgentInputProps>(
  (
    {
      glow = false,
      rightSlot,
      maxHeight = DEFAULT_INPUT_MAX_HEIGHT,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    // Пропсы атомарного поля это union вариантов, спред такого набора
    // TypeScript не сводит, поэтому собираем объект и возвращаем ему тип
    const textAreaProps = {
      size: 's',
      rows: 1,
      autoResize: true,
      ...rest,
      contentRight: rightSlot,
    } as unknown as ComponentProps<typeof TextArea>;

    return (
      <StyledInputRoot ref={ref} className={className} style={style}>
        <StyledInputGlow $visible={glow} aria-hidden />
        <StyledInputBackplate $maxHeight={maxHeight}>
          <TextArea {...textAreaProps} />
        </StyledInputBackplate>
      </StyledInputRoot>
    );
  },
);

AiAgentInput.displayName = 'AiAgentInput';
