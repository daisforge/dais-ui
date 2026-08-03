import type { InstallationGuide, RuntimeIndex, ToolError } from '../types.js';

export function getInstallationGuide(
  index: RuntimeIndex,
): InstallationGuide | ToolError {
  const guide = index.guides?.installation;
  if (!guide) {
    return { error: 'Гайд по установке не найден в индексе.' };
  }
  return guide;
}
