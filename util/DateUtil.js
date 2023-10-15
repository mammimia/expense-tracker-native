export function formatDate(date) {
  if (!date) return '';

  return date.toISOString().split('T')[0];
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
