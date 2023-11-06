export function getLocationSearch() {
  if (typeof globalThis.location === "undefined") return "";
  return globalThis.location.search;
}
