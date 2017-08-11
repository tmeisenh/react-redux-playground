import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default () => {
  // const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers,
    applyMiddleware(logger));
  // applyMiddleware(logger, sagaMiddleware));

  // sagaMiddleware.run(sagas);

  return store;
};
