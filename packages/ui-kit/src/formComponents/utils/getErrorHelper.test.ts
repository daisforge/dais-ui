import { getErrorHelper } from './getErrorHelper';

describe('getErrorHelper', () => {
  test('текст ошибки заменяет подсказку', () => {
    expect(getErrorHelper({ message: 'Обязательное поле' }, 'Подсказка')).toBe(
      'Обязательное поле',
    );
  });

  test('пустой текст ошибки скрывает подсказку', () => {
    expect(getErrorHelper({ message: '' }, 'Подсказка')).toBe('');
  });

  test('ошибка без текста оставляет подсказку', () => {
    expect(getErrorHelper({}, 'Подсказка')).toBe('Подсказка');
  });

  test('без ошибки показывается подсказка', () => {
    expect(getErrorHelper(undefined, 'Подсказка')).toBe('Подсказка');
  });
});
