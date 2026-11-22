export function autoFocusAndSelect<
  T extends HTMLInputElement | HTMLTextAreaElement | null,
>(input: T | null) {
  input?.focus();
  input?.select();
}
export function autoFocus<
  T extends HTMLInputElement | HTMLTextAreaElement | null,
>(input: T | null) {
  input?.focus();
  input?.setSelectionRange(input.value.length, input.value.length);
}

/**
 * Самое узкое поле ввода в редакторе.
 * Если колонка узкая или шеврон, отступ уровня и кнопка деталей оставляют полю
 * меньше места, редактор открывается шире ячейки, вправо.
 */
export const MIN_EDITOR_FIELD_WIDTH = 120;
