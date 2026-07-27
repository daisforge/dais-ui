import type { GlobalStyleTheme } from '@daisforge/ui';

import { type PageKey, pageLabels, pinnedPages } from '../config/pages';

const THEME_OPTIONS: { value: GlobalStyleTheme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'highContrastLight', label: 'HC Light' },
];

const BugIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#dc2828"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 8h-1.81a5.98 5.98 0 0 0-1.82-2.43l1.34-1.34-1.42-1.42-1.92 1.92A5.97 5.97 0 0 0 12 4.5c-.47 0-.93.05-1.37.16L8.71 2.74 7.29 4.16l1.34 1.34A5.98 5.98 0 0 0 6.81 8H5v2h1.09c-.05.33-.09.66-.09 1v1H5v2h1v1c0 .34.04.67.09 1H5v2h1.81a6.004 6.004 0 0 0 10.38 0H19v-2h-1.09c.05-.33.09-.66.09-1v-1h1v-2h-1v-1c0-.34-.04-.67-.09-1H19V8zm-4 7v1c0 2.21-1.79 4-4 4s-4-1.79-4-4v-4c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4h-2z" />
  </svg>
);

interface HeaderProps {
  activePage: PageKey | null;
  debugOutline: boolean;
  theme: GlobalStyleTheme;
  onNavigate: (page: PageKey | null) => void;
  onToggleDebug: () => void;
  onChangeTheme: (theme: GlobalStyleTheme) => void;
}

export const Header = ({
  activePage,
  debugOutline,
  theme,
  onNavigate,
  onToggleDebug,
  onChangeTheme,
}: HeaderProps) => (
  <nav className="nav">
    <div className="nav-inner">
      <span className="nav-brand">FinAi DS</span>
      <button
        type="button"
        className="nav-btn"
        data-active={!activePage}
        onClick={() => onNavigate(null)}
      >
        ~/home
      </button>
      {pinnedPages.map((key) => (
        <button
          type="button"
          key={key}
          className="nav-btn"
          data-active={activePage === key}
          onClick={() => onNavigate(key)}
        >
          {pageLabels[key]}
        </button>
      ))}
      <div className="nav-spacer" />
      <select
        className="theme-select"
        value={theme}
        onChange={(e) => onChangeTheme(e.target.value as GlobalStyleTheme)}
      >
        {THEME_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="debug-btn"
        data-active={debugOutline}
        title="Debug outline mode"
        onClick={onToggleDebug}
      >
        <BugIcon />
      </button>
    </div>
  </nav>
);
