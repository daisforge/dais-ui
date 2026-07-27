export type Item = {
  id: string | number;
  label: string | number;
  onClick: () => void;
};
export type Group = { groupLabel: string; groupId: string; items: Item[] };
export type ItemOrGroup = Item | Group;

export const isGroup = (itemOrGroup: ItemOrGroup): itemOrGroup is Group =>
  'groupId' in itemOrGroup;
