import { createContext, useContext } from 'react';

type TourWidgetContextValue = {
  activeStepIndex?: number;
};

const TourWidgetContext = createContext<TourWidgetContextValue>({});

export const TourWidgetProvider = TourWidgetContext.Provider;

export const useTourWidgetContext = () => useContext(TourWidgetContext);
