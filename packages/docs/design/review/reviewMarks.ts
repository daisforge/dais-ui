/**
 * Показ меток вычитки на дизайн-страницах (данные в `marks.ts`).
 * Подключается одной строкой в `packages/storybook/.storybook/preview.tsx` только на время вычитки.
 *
 * Над заголовком страницы появляется список мест для проверки, под каждым местом цветная плашка
 * с номером. Метки рисуются поверх уже готовой страницы и не трогают MDX и живые примеры.
 */
import { REVIEW_KINDS, REVIEW_MARKS } from './marks';
import type { ReviewMark } from './marks';

const ATTR = 'data-review-mark';

const pageId = () => new URLSearchParams(window.location.search).get('id') ?? '';

const el = (tag: string, style: Partial<CSSStyleDeclaration>, text?: string) => {
  const node = document.createElement(tag);

  Object.assign(node.style, style);

  if (text) {
    node.textContent = text;
  }

  return node;
};

const badge = (n: number, color: string) =>
  el(
    'span',
    {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: '22px',
      height: '22px',
      borderRadius: '11px',
      background: color,
      color: '#fff',
      font: '600 12px/22px sans-serif',
    },
    String(n),
  );

/* Где поставить метку: первый заголовок, абзац, пункт или ячейка с этим текстом, не внутри примера */
const findAnchor = (root: Element, text: string) => {
  if (text.startsWith('img:')) {
    const alt = text.slice(4);
    const img = Array.from(root.querySelectorAll('img')).find((node) => node.alt.includes(alt) && !node.closest('.docs-story'));

    // Метка встаёт под картинкой: после самой картинки или после её обёртки
    return img?.closest('figure, p') ?? img;
  }

  return Array.from(root.querySelectorAll('h1, h2, h3, h4, p, li, td, blockquote')).find(
    (node) => node.textContent?.includes(text) && !node.closest('.docs-story') && !node.closest(`[${ATTR}]`),
  );
};

const callout = (page: string, n: number, mark: ReviewMark) => {
  const kind = REVIEW_KINDS[mark.kind];
  const box = el('div', {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
    margin: '8px 0 20px',
    padding: '10px 14px',
    borderRadius: '10px',
    background: kind.bg,
    borderLeft: `4px solid ${kind.color}`,
    font: '400 14px/20px sans-serif',
    color: '#1d2125',
    scrollMarginTop: '80px',
  });

  box.setAttribute(ATTR, pageId());
  box.id = `review-${n}`;

  const body = el('div', {});

  body.append(
    el('div', { font: '600 13px/18px sans-serif', color: kind.color, marginBottom: '2px' }, `${kind.label} · ${page} ${n}`),
    el('div', {}, mark.text),
  );
  box.append(badge(n, kind.color), body);

  return box;
};

const summary = (page: string, marks: ReviewMark[], missing: number[]) => {
  const box = el('div', {
    margin: '0 0 24px',
    padding: '14px 16px',
    borderRadius: '12px',
    background: '#FFFBEA',
    border: '1px solid #F2DFA0',
    font: '400 14px/20px sans-serif',
    color: '#1d2125',
  });

  box.setAttribute(ATTR, pageId());
  box.append(
    el('div', { font: '600 15px/22px sans-serif', marginBottom: '4px' }, `Вычитка: ${marks.length} мест для проверки на этой странице`),
    el(
      'div',
      { color: '#5c636b', marginBottom: '8px' },
      `Метки стоят под текстом или картинкой, к которым относятся. В ответе укажите название и номер метки, например «${page} 2»`,
    ),
  );

  marks.forEach((mark, i) => {
    const kind = REVIEW_KINDS[mark.kind];
    const row = el('a', {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      padding: '3px 0',
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer',
    });

    row.setAttribute('href', `#review-${i + 1}`);
    row.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(`review-${i + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    row.append(
      badge(i + 1, kind.color),
      el(
        'span',
        {},
        `${kind.label}: ${mark.at.replace(/^img:/, 'картинка «') + (mark.at.startsWith('img:') ? '»' : '')}${
          missing.includes(i + 1) ? ' (место на странице не нашлось)' : ''
        }`,
      ),
    );
    box.append(row);
  });

  return box;
};

const apply = () => {
  const id = pageId();

  // Метки другой страницы после перехода внутри Storybook
  document.querySelectorAll(`[${ATTR}]`).forEach((node) => {
    if (node.getAttribute(ATTR) !== id) {
      node.remove();
    }
  });

  const entry = REVIEW_MARKS[id];
  const root = document.querySelector('.sbdocs-content');
  const h1 = root?.querySelector('h1');

  if (!entry || !root || !h1 || root.querySelector(`[${ATTR}]`)) {
    return;
  }

  const missing: number[] = [];
  // Последняя плашка под каждой таблицей: следующие встают за ней по порядку
  const afterTable = new Map<Element, Element>();

  entry.marks.forEach((mark, i) => {
    const anchor = findAnchor(root, mark.at);
    const box = callout(entry.name, i + 1, mark);

    if (!anchor) {
      missing.push(i + 1);

      return;
    }

    const table = anchor.tagName === 'TD' ? anchor.closest('table') : null;

    if (table) {
      // В узкой ячейке только номер, плашка с текстом под таблицей
      const num = badge(i + 1, REVIEW_KINDS[mark.kind].color);

      num.setAttribute(ATTR, id);
      num.style.marginLeft = '6px';
      num.style.verticalAlign = 'middle';
      anchor.append(num);
      (afterTable.get(table) ?? table).insertAdjacentElement('afterend', box);
      afterTable.set(table, box);
    } else if (anchor.tagName === 'LI') {
      anchor.append(box);
    } else {
      anchor.insertAdjacentElement('afterend', box);
    }
  });

  h1.insertAdjacentElement('beforebegin', summary(entry.name, entry.marks, missing));
};

if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
  let timer: ReturnType<typeof setTimeout> | undefined;

  // Не чаще раза в 300 мс: живые замеры на странице меняют разметку постоянно, ждать тишины нельзя
  new MutationObserver(() => {
    if (timer === undefined) {
      timer = setTimeout(() => {
        timer = undefined;
        apply();
      }, 300);
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
}
