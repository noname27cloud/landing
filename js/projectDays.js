export function FormatProjectDuration(days) {
  if (days < 1) return "1 day";
  if (days < 7) return `${days} day${days > 1 ? "s" : ""}`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  }
}
