import { Suspense, useState } from 'react';

import {
  Box,
  GlobalStyle,
  type GlobalStyleTheme,
  PageLoader,
} from '@daisforge/ui';

import { Header } from './components/Header';
import { pages, pageLabels, pageIcons, type PageKey } from './config/pages';
import './shared/theme.css';

function App() {
  const [activePage, setActivePage] = useState<PageKey | null>(null);
  const [debugOutline, setDebugOutline] = useState(false);
  const [theme, setTheme] = useState<GlobalStyleTheme>('light');

  const ActiveComponent = activePage ? pages[activePage] : null;

  return (
    <div className={`layout${debugOutline ? ' debug-outline' : ''}`}>
      <GlobalStyle theme={theme} />
      <Header
        activePage={activePage}
        debugOutline={debugOutline}
        theme={theme}
        onNavigate={setActivePage}
        onToggleDebug={() => setDebugOutline((v) => !v)}
        onChangeTheme={setTheme}
      />
      <div className="main">
        {ActiveComponent ? (
          <Suspense
            fallback={
              <Box display="flex" height="480px">
                <PageLoader />
              </Box>
            }
          >
            <ActiveComponent />
          </Suspense>
        ) : (
          <div>
            <div className="home-header">
              <h1 className="home-title">👾:../df::playground</h1>
              <p className="home-subtitle">
                component testing ground // digital finance ui-kit
              </p>
            </div>
            <ul className="home-grid">
              {(Object.keys(pages) as PageKey[]).map((key) => (
                <li
                  key={key}
                  className="home-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePage(key)}
                  onKeyDown={(e) => e.key === 'Enter' && setActivePage(key)}
                >
                  <span className="home-card-icon">{pageIcons[key]}</span>
                  <span className="home-card-label">{pageLabels[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
