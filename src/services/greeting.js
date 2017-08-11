const greeting = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Hello world!'), 250);
});

export const api = { greeting };
