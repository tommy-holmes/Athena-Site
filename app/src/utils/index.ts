export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
