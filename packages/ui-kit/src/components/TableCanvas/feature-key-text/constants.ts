export const KEY_TEXT = {
  key: { value: 'key', label: 'Ключ' },
  text: { value: 'text', label: 'Текст' },
  keyText: { value: 'keyText', label: 'Ключ и текст' },
  textKey: { value: 'textKey', label: 'Текст и ключ' }
} as const;
export const KEY_TEXT_PARENT = 'SERVICE_KEY_TEXT_PARENT';
export const KEY_TEXT_KEY = KEY_TEXT.keyText.value;

export const KEY_TEXT_OPTIONS = Object.values(KEY_TEXT);

export const getDefaultKeyTextColumn = ({
  columnKey
}: {
  columnKey: string;
}) => ({
  key: `${columnKey}-$$$-keyText`,
  name: KEY_TEXT['key'].label
});
