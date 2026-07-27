export const TGZ_NAME = 'ui-kit-tgz.tgz';
export const VITE_PROJECT = 'packages/vite-project';
export const WEBPACK_PROJECT = 'packages/webpack-project-finalheader';
export const WEBPACK_PROJECT_FLAG = '--webpack-project-finalheader';
export const FINPORTAL_PROJECT = 'packages/webpack-finportal-platform';
export const FINPORTAL_PROJECT_FLAG = '--webpack-finportal-platform';
export const PKG_JSON = 'package.json';
export const PKG_JSON_UNTRACKED = 'untracked-package.json';

export const getProjectName = (projectPath) =>
  projectPath.split('/')[1] ?? 'Название проекта не найдено ????';
