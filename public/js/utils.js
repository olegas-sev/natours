export const executeIn = (s, fn) => {
  setTimeout(() => {
    fn();
  }, s * 1000);
};
