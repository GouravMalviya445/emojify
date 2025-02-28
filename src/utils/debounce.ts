export function debounce(fn : () => void, delay = 500) {
  let timer: NodeJS.Timeout;
  return function (...args: any) {
    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}