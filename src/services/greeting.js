
// const greeting = () => new Promise((resolve, reject) => setTimeout(() => resolve('Hello world!'), 1000));
const greeting = () => new Promise((resolve, reject) => resolve('Hello world!'));

export const api = { greeting };
