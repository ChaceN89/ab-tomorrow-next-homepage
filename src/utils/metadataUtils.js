export function withDevPrefix(title) {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? `Dev | ${title}` : title;
}
