import type { DemoStep } from './types';

export type StepPlan = {
  title: string;
  detail?: string;
  /** Сколько «думает» шаг, мс. Имитация сетевого ответа LLM */
  duration: number;
};

/**
 * Проигрывает шаги по очереди: каждый шаг сначала running, затем done.
 * onUpdate получает полный список шагов после каждого изменения.
 * Возвращает функцию отмены, чтобы размонтирование стори не оставляло таймеры.
 */
export function runSteps(
  plan: StepPlan[],
  onUpdate: (steps: DemoStep[]) => void,
  onDone: () => void,
): () => void {
  const timers: ReturnType<typeof setTimeout>[] = [];
  const steps: DemoStep[] = plan.map((item, index) => ({
    id: `step-${index}`,
    title: item.title,
    detail: item.detail,
    status: 'pending',
  }));

  const setStatus = (index: number, status: DemoStep['status']) => {
    const step = steps[index];
    if (step) steps[index] = { ...step, status };
    onUpdate([...steps]);
  };

  let elapsed = 0;
  plan.forEach((item, index) => {
    timers.push(setTimeout(() => setStatus(index, 'running'), elapsed));
    elapsed += item.duration;
    timers.push(setTimeout(() => setStatus(index, 'done'), elapsed));
  });
  timers.push(setTimeout(onDone, elapsed + 100));

  onUpdate([...steps]);

  return () => timers.forEach(clearTimeout);
}

let idCounter = 0;

/** Уникальный id для сообщений демо-чата */
export const nextId = (prefix: string) => {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
};
