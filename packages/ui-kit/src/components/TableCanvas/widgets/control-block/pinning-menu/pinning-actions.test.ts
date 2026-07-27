import { describe, expect, it } from 'vitest';

import {
  getPinIconState,
  pinColumns,
  PinningActionCtx,
  resetPinning,
  unpinColumns
} from './pinning-actions';

/** Контекст без пар key/text: запрет закрепления = членство в disablePinningSet. */
const ctx = (disabled: string[] = []): PinningActionCtx => ({
  disablePinningSet: new Set(disabled),
  colsWithKeyTextMap: new Map(),
  tableConfigKeyTextBoolean: false
});

/**
 * Контекст с парой key/text: title (keyKey) ↔ titleText (textKey).
 * Запрет любой половины должен запрещать всю пару (правило сайдбара).
 */
const ctxKeyText = (disabled: string[] = []): PinningActionCtx => ({
  disablePinningSet: new Set(disabled),
  colsWithKeyTextMap: new Map([
    ['title', { keyKey: 'title', textKey: 'titleText' }],
    ['titleText', { keyKey: 'title', textKey: 'titleText' }]
  ]),
  tableConfigKeyTextBoolean: true
});

describe('pinColumns', () => {
  it('добавляет выделенные к уже закреплённым (в порядке выделения)', () => {
    expect(pinColumns(['id'], ['title', 'issueType'], ctx())).toEqual([
      'id',
      'title',
      'issueType'
    ]);
  });

  it('пропускает уже закреплённые', () => {
    expect(pinColumns(['id', 'title'], ['title', 'issueType'], ctx())).toEqual([
      'id',
      'title',
      'issueType'
    ]);
  });

  it('пропускает запрещённые к закреплению', () => {
    expect(pinColumns([], ['title', 'issueType'], ctx(['issueType']))).toEqual([
      'title'
    ]);
  });

  it('возвращает ту же ссылку, если добавлять нечего (нет лишнего ре-рендера)', () => {
    const pinned = ['id', 'title'];
    expect(pinColumns(pinned, ['title'], ctx())).toBe(pinned);
    expect(pinColumns(pinned, [], ctx())).toBe(pinned);
  });

  it('key/text: запрет одной половины запрещает закрепление всей пары', () => {
    // titleText запрещён → title (его пара) тоже нельзя закрепить
    expect(pinColumns([], ['title'], ctxKeyText(['titleText']))).toEqual([]);
  });

  it('key/text: закрепление одной половины закрепляет обе', () => {
    expect(pinColumns([], ['title'], ctxKeyText())).toEqual([
      'title',
      'titleText'
    ]);
  });
});

describe('resetPinning', () => {
  it('снимает закрепление со всех', () => {
    expect(resetPinning(['id', 'title', 'issueType'], ctx())).toEqual([]);
  });

  it('сохраняет закрепление у запрещённых к изменению', () => {
    expect(resetPinning(['id', 'title'], ctx(['id']))).toEqual(['id']);
  });

  it('key/text: сохраняет пару, если запрещена любая её половина', () => {
    expect(resetPinning(['title', 'issueType'], ctxKeyText(['title']))).toEqual(
      ['title']
    );
  });
});

describe('unpinColumns', () => {
  it('снимает закрепление только с выбранных, невыбранные не трогает', () => {
    expect(
      unpinColumns(['id', 'title', 'issueType'], ['title'], ctx())
    ).toEqual(['id', 'issueType']);
  });

  it('не снимает закрепление с запрещённых к изменению', () => {
    expect(unpinColumns(['id', 'title'], ['id', 'title'], ctx(['id']))).toEqual(
      ['id']
    );
  });

  it('возвращает ту же ссылку, если снимать нечего', () => {
    const pinned = ['id', 'title'];
    // issueType не закреплён — удалять нечего
    expect(unpinColumns(pinned, ['issueType'], ctx())).toBe(pinned);
    // выбранный запрещён к изменению — тоже не удаляем
    expect(unpinColumns(pinned, ['id'], ctx(['id']))).toBe(pinned);
  });

  it('key/text: не снимает пару, если запрещена любая её половина', () => {
    expect(
      unpinColumns(['title', 'issueType'], ['title'], ctxKeyText(['titleText']))
    ).toEqual(['title', 'issueType']);
  });

  it('key/text: открепление одной половины снимает обе (близнец не остаётся)', () => {
    expect(
      unpinColumns(['title', 'titleText', 'issueType'], ['title'], ctxKeyText())
    ).toEqual(['issueType']);
  });

  it('key/text: открепление по текстовой половине тоже снимает всю пару', () => {
    expect(
      unpinColumns(['title', 'titleText'], ['titleText'], ctxKeyText())
    ).toEqual([]);
  });
});

describe('getPinIconState', () => {
  it('пустое выделение → action none, подсказка «Выберите, что закрепить»', () => {
    const state = getPinIconState({
      selectedKeys: [],
      pinnedCols: [],
      hiddenCols: [],
      ctx: ctx()
    });
    expect(state.action).toBe('none');
    expect(state.tooltip).toBe('Выберите, что закрепить');
  });

  it('colored=true, если среди ВИДИМЫХ колонок есть закреплённая', () => {
    expect(
      getPinIconState({
        selectedKeys: [],
        pinnedCols: ['id'],
        hiddenCols: [],
        ctx: ctx()
      }).colored
    ).toBe(true);
  });

  it('colored=false, если все закреплённые скрыты', () => {
    expect(
      getPinIconState({
        selectedKeys: [],
        pinnedCols: ['id'],
        hiddenCols: ['id'],
        ctx: ctx()
      }).colored
    ).toBe(false);
  });

  it('есть незакреплённая закрепляемая колонка → action pin, подсказка «Закрепить»', () => {
    const state = getPinIconState({
      selectedKeys: ['title', 'issueType'],
      pinnedCols: ['title'],
      hiddenCols: [],
      ctx: ctx()
    });
    expect(state.action).toBe('pin');
    expect(state.tooltip).toBe('Закрепить');
  });

  it('все выбранные уже закреплены → action unpin, подсказка «Открепить»', () => {
    const state = getPinIconState({
      selectedKeys: ['title', 'issueType'],
      pinnedCols: ['title', 'issueType'],
      hiddenCols: [],
      ctx: ctx()
    });
    expect(state.action).toBe('unpin');
    expect(state.tooltip).toBe('Открепить');
  });

  it('все выбранные запрещены к закреплению → нечего закреплять → action unpin', () => {
    const state = getPinIconState({
      selectedKeys: ['title'],
      pinnedCols: [],
      hiddenCols: [],
      ctx: ctx(['title'])
    });
    expect(state.action).toBe('unpin');
  });
});
