import type { Decorator } from '@storybook/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Переключатель «Экран» в живой настройке: показать пример как на экране 1920 или 1280 px.
 * На 1280 px у части компонентов меняются размеры кнопок, шрифтов и отступов (медиазапросы),
 * а пример на странице подчиняется ширине окна браузера, в котором открыт Storybook.
 *
 * Как подключить к истории `Playground`:
 *   args: { ...свои, ...SCREEN_ARGS },
 *   argTypes: { ...свои, ...SCREEN_ARG_TYPES },
 *   decorators: [withScreen],
 *
 * «Текущий» показывает пример как обычно. «1920 px» и «1280 px» открывают ту же историю
 * в окне (iframe) нужной ширины, уменьшают окно под колонку текста и передают в него
 * текущие значения переключателей. Внутри окна история показывается как есть, без окна в окне.
 */

export const SCREEN_ARG = 'Экран';
export const SCREEN_OPTIONS = ['Текущий', '1920 px', '1280 px'] as const;
export type ScreenValue = (typeof SCREEN_OPTIONS)[number];
export type ScreenArgs = { [SCREEN_ARG]: ScreenValue };

export const SCREEN_ARGS: ScreenArgs = { [SCREEN_ARG]: 'Текущий' };

export const SCREEN_ARG_TYPES = {
  [SCREEN_ARG]: {
    control: 'inline-radio' as const,
    options: SCREEN_OPTIONS,
    description: 'Ширина экрана. «Текущий»: пример на странице, как остальные примеры. «1920 px» и «1280 px»: пример в окне такой ширины, на 1280 px меняются размеры кнопок, шрифтов и отступов',
  },
};

type PreviewApi = {
  storyRenders?: { id: string }[];
  onUpdateArgs: (p: { storyId: string; updatedArgs: Record<string, unknown> }) => Promise<void>;
};

/* Оба окна уменьшаются в одном масштабе, как окно 1920 px, чтобы размеры на 1920 и 1280 px сравнивались честно */
const WIDEST = 1920;

/* body в окне истории: отступы Storybook вокруг примера */
const FRAME_PADDING = 32;
const MIN_HEIGHT = 120;

const ScreenFrame = ({ storyId, width, args }: { storyId: string; width: number; args: Record<string, unknown> }) => {
  const box = useRef<HTMLElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(400);
  const argsKey = JSON.stringify(args);

  // Уменьшение под ширину колонки: масштаб считается от 1920 px для обоих окон
  useLayoutEffect(() => {
    const root = box.current;

    if (!root) {
      return undefined;
    }

    const update = () => setScale(Math.min(1, root.clientWidth / WIDEST));
    const observer = new ResizeObserver(update);

    observer.observe(root);
    update();

    return () => observer.disconnect();
  }, []);

  // Высота окна по высоте примера внутри
  useEffect(() => {
    const iframe = frame.current;
    let observer: ResizeObserver | undefined;

    if (!iframe) {
      return undefined;
    }

    const onLoad = () => {
      const root = iframe.contentDocument?.getElementById('storybook-root');

      if (!root) {
        return;
      }

      const measure = () => setHeight(Math.max(MIN_HEIGHT, Math.ceil(root.scrollHeight) + FRAME_PADDING));

      observer?.disconnect();
      observer = new ResizeObserver(measure);
      observer.observe(root);
      measure();
    };

    iframe.addEventListener('load', onLoad);

    return () => {
      iframe.removeEventListener('load', onLoad);
      observer?.disconnect();
    };
  }, []);

  // Текущие значения переключателей в окно: после загрузки и при каждом изменении
  useEffect(() => {
    let stopped = false;
    let tries = 0;

    const push = () => {
      if (stopped) {
        return;
      }

      const preview = (frame.current?.contentWindow as (Window & { __STORYBOOK_PREVIEW__?: PreviewApi }) | null)
        ?.__STORYBOOK_PREVIEW__;

      if (preview?.storyRenders?.some((r) => r.id === storyId)) {
        preview.onUpdateArgs({ storyId, updatedArgs: JSON.parse(argsKey) }).catch(() => undefined);

        return;
      }

      tries += 1;

      if (tries < 150) {
        setTimeout(push, 100);
      }
    };

    push();

    return () => {
      stopped = true;
    };
  }, [argsKey, storyId]);

  return (
    <figure ref={box} style={{ margin: 0 }}>
      <div style={{ position: 'relative', width: width * scale, height: height * scale, overflow: 'hidden' }}>
        <iframe
          ref={frame}
          title={`${storyId}, ${width} px`}
          src={`iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story`}
          width={width}
          height={height}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            border: 0,
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
          }}
        />
      </div>
      <figcaption style={{ marginTop: 8, font: '400 12px/16px sans-serif', color: '#5c636b' }}>
        {`Экран ${width} px${scale < 1 ? `, масштаб ${Math.round(scale * 100)}%, одинаковый для 1920 и 1280 px` : ''}`}
      </figcaption>
    </figure>
  );
};

export const withScreen: Decorator = (Story, ctx) => {
  const value = ctx.args[SCREEN_ARG] as ScreenValue | undefined;

  if (ctx.viewMode !== 'docs' || !value || value === 'Текущий') {
    return <Story />;
  }

  return <ScreenFrame storyId={ctx.id} width={parseInt(value, 10)} args={ctx.args} />;
};
