import { Tree } from '@daisforge/ui';

export const TreeExample = () => {
  const treeData = [
    {
      title: 'Основной каталог',
      key: '0-0',
      children: [
        {
          title: 'Документы',
          key: '0-0-0',
          children: [
            {
              title: 'Отчёты',
              key: '0-0-0-0',
              disabled: true,
            },
            {
              title: 'Проекты',
              key: '0-0-0-1',
              children: [
                {
                  title: 'Проект Альфа',
                  key: '0-0-0-1-0',
                },
                {
                  title: 'Проект Бета',
                  key: '0-0-0-1-1',
                },
              ],
            },
            {
              title: 'Категории',
              key: '0-0-0-2',
              children: [
                {
                  title: 'Категория Гамма',
                  key: '0-0-0-2-0',
                },
                {
                  title: 'Категория Дельта',
                  key: '0-0-0-2-1',
                },
              ],
            },
          ],
        },
        {
          title: 'Медиа',
          key: '0-0-1',
          children: [
            {
              title: 'Фотографии',
              key: '0-0-1-0',
            },
          ],
        },
      ],
    },
    {
      title: 'Корзина',
      key: '0-1',
      children: [
        {
          title: 'Удалённые файлы',
          key: '0-1-0',
        },
      ],
    },
  ];

  return (
    <div style={{ display: 'block' }}>
      <Tree items={treeData} defaultExpandAll size="m" arrowPlacement="right" />
    </div>
  );
};
