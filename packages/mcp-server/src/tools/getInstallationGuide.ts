import type { InstallationGuide, RuntimeIndex } from '../types.js';
import { ToolError } from '../types.js';

export function getInstallationGuide(
  index: RuntimeIndex,
): InstallationGuide | ToolError {
  const guide = index.guides?.installation;
  if (!guide) {
    return new ToolError('Гайд по установке не найден в индексе.');
  }
  return guide;
}
