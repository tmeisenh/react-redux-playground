import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleWares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
  }

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleWares),
  );

  sagaMiddleware.run(sagas);

  return store;
};
