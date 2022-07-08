import {all} from 'redux-saga/effects';
import searchRepoInit from './repoSaga';

export default function* rootSaga() {
  yield all([searchRepoInit()]);
}
