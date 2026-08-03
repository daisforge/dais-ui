export type EventBusEventPayload = Record<string, unknown>;

export type EventBusEvent = { topic?: string; payload?: EventBusEventPayload };
export type EventBusEventHandler = (event: EventBusEvent) => void;

export type EventBusSubscription = { unsubscribe: () => void };

export abstract class EventBus {
  abstract emit(
    channelName: string,
    topic?: string,
    payload?: EventBusEventPayload,
  ): void;

  abstract subscribe(
    channelName: string,
    topic?: string,
    handler?: EventBusEventHandler,
  ): EventBusSubscription;

  abstract removeChannel(channelName: string): void;
}
