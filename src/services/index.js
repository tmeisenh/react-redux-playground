const helloWorld = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Hello world!'), 250);
});

export default api = { helloWorld };
