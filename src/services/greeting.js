const greeting = () => new Promise((resolve, reject) => setTimeout(() => resolve('Hello world!'), 1000));

export const api = { greeting };
