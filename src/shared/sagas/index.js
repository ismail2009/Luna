import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './models/root.reducer';
import rootSaga from './root.saga';

function init(history) {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const enhancers = [];
  // ======================================================
  let sagaMiddleware;
  if (__DEV__) {
    // const sagaMonitor = Reactotron.createSagaMonitor();
    // sagaMiddleware = createSagaMiddleware({sagaMonitor});
    sagaMiddleware = createSagaMiddleware();
    // console.tron = Reactotron;
    // typeof window === 'object' && enhancers.push(
    //
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    // );
    console.disableYellowBox = true;
  } else {
    sagaMiddleware = createSagaMiddleware();
  }

  const middleware = [sagaMiddleware];
  // Store Enhancers
  // ======================================================
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(rootReducer, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = init();

export default store;
