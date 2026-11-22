import { getErrorView } from './getErrorView';

describe('getErrorView', () => {
  test('ошибка с пустым текстом подсвечивает поле', () => {
    expect(getErrorView({ type: 'required', message: '' }, undefined)).toBe(
      'negative',
    );
  });

  test('ошибка перекрывает view из пропсов', () => {
    expect(getErrorView({ type: 'required' }, 'positive')).toBe('negative');
  });

  test('без ошибки берётся view из пропсов', () => {
    expect(getErrorView(undefined, 'positive')).toBe('positive');
  });

  test('без ошибки и без view возвращается default', () => {
    expect(getErrorView(undefined, undefined)).toBe('default');
  });
});
