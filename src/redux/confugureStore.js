import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import repoListReducer from './reducer/repoListReducer';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default configureStore({
  reducer: {
    repoList: repoListReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(sagas);
