Simple react-redux project with sagas.
======================================

To run the app: `npm start`
To run the tests: `npm test`
To build for prod:
```bash
npm run dist
docker build -t react-demo .
docker run -it -p 80:80 react-demo
```
