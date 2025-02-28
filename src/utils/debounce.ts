export function debounce(fn : () => void, delay = 500) {
  let timer: NodeJS.Timeout;
  // @ts-expect-error: ...args can be anything
  return function (...args) {
    clearTimeout(timer);
    // @ts-expect-error: Type 'NodeJS.Timeout' is not assignable to type 'NodeJS.Timeout | undefined'.
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}