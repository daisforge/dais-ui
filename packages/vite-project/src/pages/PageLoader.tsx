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

const subtitle =
  'Данные обрабатываются, обычно это занимает не более 10 секунд';

export const PageLoaderExample = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(true);

  return (
    <Box display="flex" flexDirection="column" height="480px" gap="24px">
      <PageTitle
        title="Отчёты"
        subtitle="Первоначальная загрузка страницы"
        rightSlot={
          <Flow mainAxisGap={8}>
            <Button
              view="secondary"
              onClick={() => setShowSubtitle((value) => !value)}
            >
              {showSubtitle ? 'Скрыть описание' : 'Показать описание'}
            </Button>
            <Button onClick={() => setIsInitialLoading((value) => !value)}>
              {isInitialLoading ? 'Завершить загрузку' : 'Показать загрузку'}
            </Button>
          </Flow>
        }
      />
      {isInitialLoading ? (
        <PageLoader subtitle={showSubtitle ? subtitle : undefined} />
      ) : (
        <Box display="flex" flexDirection="column" gap="24px">
          <Typography variant="H3">Параметры отчёта</Typography>
          <TextField label="Название отчёта" defaultValue="Годовой отчёт" />
          <Typography variant="BodyM">
            Данные загружены. При повторных запросах этот контент остаётся на
            странице. Кнопка «Показать загрузку» повторно демонстрирует
            первоначальную загрузку.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
