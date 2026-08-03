export type TPropertyItem = {
  key: string;
  value: string;
};

type TPreparedProperties = Array<TPropertyItem>;

export type TProperties = TPreparedProperties | null;

interface IClickStreamBaseItem {
  eventAction: string;
  value: string;
  properties?: TProperties;
}

type TSendClickStreamCategoryParam =
  | {
      eventCategory: string;
      CI?: never;
    }
  | { eventCategory?: never; CI: string };

export type TSendClickStreamEventParams = IClickStreamBaseItem &
  TSendClickStreamCategoryParam;

export type TSendClickStreamEvent = (
  params: TSendClickStreamEventParams,
) => void;

export abstract class ClickStream {
  abstract sendClickStreamEvent: TSendClickStreamEvent;
}
