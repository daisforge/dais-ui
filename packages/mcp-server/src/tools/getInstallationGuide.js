export function getInstallationGuide(index) {
  const guide = index.guides?.installation;
  if (!guide) {
    return { error: 'Гайд по установке не найден в индексе.' };
  }
  return guide;
}
