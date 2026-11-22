import ReactDOMClient, { RootOptions } from 'react-dom/client';

type TGetMFReactDOMClientParams = {
  identifierPrefix: string;
};

export const getMFReactDOMClient = (
  reactDomClient: typeof ReactDOMClient,
  { identifierPrefix }: TGetMFReactDOMClientParams,
): typeof ReactDOMClient => ({
  ...reactDomClient,
  // Переопределяем createRoot для добавления префикса к useId
  createRoot: (container: Element | DocumentFragment, options?: RootOptions) =>
    ReactDOMClient.createRoot(container, {
      ...options,
      identifierPrefix, // Уникальный префикс микрофронтенда
    }),
});
