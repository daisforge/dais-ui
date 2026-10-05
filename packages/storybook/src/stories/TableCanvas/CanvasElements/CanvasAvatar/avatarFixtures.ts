import type { CanvasAvatarItem } from '@ui-kit/components/TableCanvas';

import manPhoto from './images/portrait-man.png';
import womanPhoto from './images/portrait-woman.png';

export const avatarPhotos = [womanPhoto, manPhoto];

export const avatarItems: readonly CanvasAvatarItem[] = [
  'Анна Иванова',
  'Борис Петров',
  'Вера Соколова',
  'Глеб Орлов',
  'Дарья Белова',
].map((name, index) => ({
  id: `person-${index + 1}`,
  name,
  url: avatarPhotos[index % avatarPhotos.length],
  tooltip: name,
}));

export function avatarCopyText(
  items: readonly CanvasAvatarItem[],
  total = items.length,
) {
  const names = items
    .map((item) => item.name || item.customText || 'Участник')
    .join(', ');
  const unknown = Math.max(0, total - items.length);
  return [names, unknown ? `ещё ${unknown} участников` : '']
    .filter(Boolean)
    .join('; ');
}
