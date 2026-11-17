import {
  Box,
  Button,
  Flow,
  PageLoader,
  PageTitle,
  TextField,
  Typography,
} from '@daisforge/ui';
import { useState } from 'react';

const ReportContent = () => {
  const [count, setCount] = useState(0);

  return (
    <Box display="flex" flexDirection="column" gap="24px" padding="24px">
      <Typography variant="H3">Параметры отчёта</Typography>
      <TextField label="Название отчёта" defaultValue="Годовой отчёт" />
      <TextField
        label="Комментарий"
        placeholder="Введите текст перед загрузкой"
      />
      <Flow mainAxisGap={12} alignment="center">
        <Button view="secondary" onClick={() => setCount((value) => value + 1)}>
          Увеличить счётчик
        </Button>
        <Typography variant="BodyM">Счётчик: {count}</Typography>
      </Flow>
      <Typography variant="BodyM">
        Измените поля и счётчик, затем включите и выключите загрузку кнопкой в
        заголовке. Значения сохранятся, а контент под оверлеем будет недоступен.
      </Typography>
    </Box>
  );
};

export const PageLoaderExample = () => {
  const [active, setActive] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="calc(100dvh - 160px)"
      gap="24px"
    >
      <PageTitle
        title="Отчёты"
        subtitle="PageLoader — загрузка области контента"
        rightSlot={
          <Flow mainAxisGap={8}>
            <Button
              view="secondary"
              onClick={() => setShowSubtitle((value) => !value)}
            >
              {showSubtitle ? 'Скрыть описание' : 'Показать описание'}
            </Button>
            <Button onClick={() => setActive((value) => !value)}>
              {active ? 'Завершить загрузку' : 'Начать загрузку'}
            </Button>
          </Flow>
        }
      />
      <PageLoader active={active} subtitle={showSubtitle ? undefined : null}>
        <ReportContent />
      </PageLoader>
    </Box>
  );
};
