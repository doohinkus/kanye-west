export function delay({ callback, ms }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), ms);
  });
}
