/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import { PopupDF } from '@ui-kit/components/PopupDF';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { br, s } from '@ui-kit/constants';
import { IconFullscreenOff, IconFullscreenOn } from '@ui-kit/icons';
import {
  backgroundPrimary,
  outlineAccent,
  surfaceAccentMinor,
  surfaceInfo,
  surfaceTransparentPositive,
} from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';

/**
 * ПРИМЕР ДЛЯ ПОТРЕБИТЕЛЯ: фуллскрин-режим PopupDF своими силами.
 *
 * PopupDF НЕ предоставляет фуллскрин как встроенную фичу. Он даёт слот
 * `rightBlock` в шапке и пробрасывает пропсы в Popup (resizable, draggable,
 * placement, offset, style). Всё поведение фуллскрина потребитель собирает сам
 * из этих пропсов — правок в библиотеку НЕ требуется.
 *
 * Паттерн «нормализация → рост»:
 *   1. НОРМАЛИЗАЦИЯ. На разворот выключаем resizable/draggable. Это ремаунтит
 *      Popup и сбрасывает и заресайженный размер, и drag-смещение к базовому
 *      центрированному состоянию. (Плата за простоту — короткий не-анимированный
 *      «щелчок» в базовый вид, если до этого ресайзили/двигали.)
 *   2. РОСТ. Следующим тиком, когда узел уже в базовом размере, переключаем
 *      инлайн-style на фуллскрин. CSS-transition на width/height плавно растит
 *      попап до размеров frame. Узел при этом не ремаунтится → анимация живая.
 *
 * Почему именно так: если resizable/draggable переключать одновременно с
 * ростом — Popup пересобирается ровно в момент анимации и она рвётся. Разносим
 * два шага во времени (setTimeout, не requestAnimationFrame: rAF в фоновой
 * вкладке на паузе).
 */

const ANIM_MS = 280;
const BASE_WIDTH = 460;
const BASE_HEIGHT = 340;
// Отступ фуллскрина от краёв frame со всех сторон. Размер берём
// calc(100% - 2*GAP), а placement="center" сам даёт равный зазор по кругу.
const FULLSCREEN_GAP = 24;

const stageStyle: React.CSSProperties = {
  minHeight: '860px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: s.x16,
  backgroundColor: backgroundPrimary,
};

// Контейнер, внутри которого разворачивается попап (frame).
const frameStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '1200px',
  minHeight: '760px',
  background: surfaceTransparentPositive,
  borderRadius: br.l,
  overflow: 'hidden',
  padding: s.x8,
};

const bodyBoxStyle: React.CSSProperties = {
  height: '100%',
  minHeight: '56px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: surfaceInfo,
  padding: '12px',
};

function FullscreenExample() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  // interactive: resizable + draggable включены в обычном режиме,
  // выключаются на время фуллскрина (это и есть нормализация).
  const [interactive, setInteractive] = useState(true);

  const expand = () => {
    // Шаг 1 — нормализация: сброс ресайза и драга к базовому центрированному виду.
    setInteractive(false);
    // Шаг 2 — рост: на следующий тик анимируем style до фуллскрина.
    window.setTimeout(() => setFullscreen(true), 30);
  };

  const collapse = () => {
    // Анимируем обратно к базовому размеру...
    setFullscreen(false);
    // ...и возвращаем resizable/draggable только ПОСЛЕ анимации,
    // иначе ремаунт посреди перехода оборвёт его рывком.
    window.setTimeout(() => setInteractive(true), ANIM_MS + 40);
  };

  const sizeStyle: React.CSSProperties = {
    width: fullscreen
      ? `calc(100% - ${FULLSCREEN_GAP * 2}px)`
      : `${BASE_WIDTH}px`,
    height: fullscreen
      ? `calc(100% - ${FULLSCREEN_GAP * 2}px)`
      : `${BASE_HEIGHT}px`,
    maxWidth: '100%',
    maxHeight: '100%',
    transition: `width ${ANIM_MS}ms ease, height ${ANIM_MS}ms ease`,
    // В фуллскрине переводим внешний контейнер в grid: одна строка 1fr тянет
    // внутреннюю обёртку Popup на всю высоту, иначе заданная height не доходит
    // до карточки (обёртка сжимается по контенту, заполняется только ширина).
    // Всё через style — правок PopupDF не требуется.
    ...(fullscreen
      ? {
          display: 'grid',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
        }
      : null),
  };

  return (
    <SSRProvider>
      <PopupProvider>
        <div style={stageStyle}>
          <div ref={frameRef} style={frameStyle}>
            <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>

            <PopupDF
              opened={opened}
              onToggle={setOpened}
              frame={frameRef}
              placement="center"
              offset={[0, 0]}
              size="l"
              draggable={interactive}
              resizable={
                interactive
                  ? { minWidth: 280, minHeight: 180, iconSize: 's' }
                  : false
              }
              style={sizeStyle}
            >
              <PopupDF.Header
                title="PopupDF"
                description="Ресайзи за угол, двигай за шапку, затем «Развернуть»"
                rightBlock={
                  <IconButton
                    size="xs"
                    view="secondary"
                    pin="circle-circle"
                    title={fullscreen ? 'Свернуть' : 'Развернуть'}
                    onClick={() => (fullscreen ? collapse() : expand())}
                  >
                    {fullscreen ? (
                      <IconFullscreenOff size="xs" />
                    ) : (
                      <IconFullscreenOn size="xs" />
                    )}
                  </IconButton>
                }
              />
              <PopupDF.Body>
                <div style={bodyBoxStyle}>PopupDF.Body</div>
              </PopupDF.Body>
              <PopupDF.Footer>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: s.x4,
                  }}
                >
                  <Button size="s" view="secondary">
                    Отмена
                  </Button>
                  <Button size="s" view="accent">
                    Применить
                  </Button>
                </div>
              </PopupDF.Footer>
            </PopupDF>
          </div>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}

const meta: Meta<typeof PopupDF> = {
  title: 'Локальные компоненты/PopupDF Fullscreen (пример)',
  component: PopupDF,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof PopupDF>;

export const Fullscreen: Story = {
  name: 'Нормализация → рост',
  render: () => <FullscreenExample />,
};
