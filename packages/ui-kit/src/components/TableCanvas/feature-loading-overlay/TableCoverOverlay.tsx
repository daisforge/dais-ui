import { overlaySoft } from '@ui-kit/tokens';
import { fadeIn } from '@ui-kit/utils/styles/animations';
import React, { FC, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { LoadingOverlayContent } from './LoadingOverlayContent';
import { LoadingOverlayConfig } from './types';
import { useLoadingOverlay } from './useLoadingOverlay';

/** Выше всех слоёв внутри таблицы: поповеры, тултипы, панель массовых действий. */
const COVER_OVERLAY_Z_INDEX = 10000;
// В макете background blur 18: в Figma значение примерно вдвое больше радиуса CSS blur().
const COVER_OVERLAY_BLUR = 9;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${COVER_OVERLAY_Z_INDEX};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: inherit;
  background: ${() => overlaySoft};
  backdrop-filter: blur(${COVER_OVERLAY_BLUR}px);
  animation: ${fadeIn} 0.1s ease-out forwards;
`;

/**
 * Делает недоступными все блоки корневого контейнера таблицы, кроме самого оверлея:
 * без фокуса, клавиатуры и мыши. Блоки, которые появятся во время показа
 * (например, пагинация), тоже закрываются. Атрибут inert снимается только с тех
 * блоков, на которые его поставил оверлей: свёрнутая таблица ставит свой inert сама.
 */
const useInertSiblings = (overlayEl: HTMLDivElement | null) => {
  useLayoutEffect(() => {
    const root = overlayEl?.parentElement;
    if (!overlayEl || !root) return undefined;

    const madeInert = new Set<Element>();
    const applyInert = () => {
      Array.from(root.children).forEach((child) => {
        if (child === overlayEl || child.hasAttribute('inert')) return;
        child.setAttribute('inert', '');
        madeInert.add(child);
      });
    };

    applyInert();
    root.setAttribute('aria-busy', 'true');
    if (
      document.activeElement instanceof HTMLElement &&
      root.contains(document.activeElement)
    ) {
      document.activeElement.blur();
    }

    const observer = new MutationObserver(applyInert);
    observer.observe(root, { childList: true });

    return () => {
      observer.disconnect();
      madeInert.forEach((child) => child.removeAttribute('inert'));
      root.removeAttribute('aria-busy');
    };
  }, [overlayEl]);
};

/**
 * Оверлей поверх таблицы (mode: 'cover'). Рендерится последним ребёнком корневого
 * контейнера таблицы и растягивается на него целиком, поэтому закрывает control block,
 * боковые панели, нижнюю панель и пагинацию, а в fullscreen — всё окно таблицы.
 * Таблица под ним не размонтируется.
 */
export const TableCoverOverlay: FC<{
  loadingOverlayConfig: LoadingOverlayConfig;
}> = ({ loadingOverlayConfig }) => {
  const {
    active = true,
    spinner,
    title = 'Таблица обновляется',
    subtitle = '',
    showSubtitleDelay = 10000,
  } = loadingOverlayConfig;

  const { showOverlay, showSubtitle } = useLoadingOverlay({
    active,
    showSubtitleDelay,
  });

  const [overlayEl, setOverlayEl] = useState<HTMLDivElement | null>(null);
  useInertSiblings(overlayEl);

  // active проверяем напрямую: showOverlay гаснет на рендер позже, а корневой
  // контейнер теряет position: relative сразу.
  if (!active || !showOverlay) return null;

  return (
    <Overlay ref={setOverlayEl} role="status" aria-live="polite">
      <LoadingOverlayContent
        spinner={spinner}
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        mode="cover"
      />
    </Overlay>
  );
};
