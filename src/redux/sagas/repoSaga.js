import {takeEvery, call, put} from 'redux-saga/effects';
import {useDispatch} from 'react-redux';
import {setData, setLoading, setError} from '../reducer/repoListReducer';
import {Constants} from '../../config';
import API from '../../api';

const {ReduxTypes, httpTypes} = Constants;
const {repo} = ReduxTypes;

export function* searchRepo(action) {
  try {
    yield put(setLoading());
    const res = yield call(
      API,
      `https://api.github.com/search/repositories?q=${action.repoName}`,
      httpTypes.GET,
    );
    if (res.status === 200) {
      yield put(setData(res.data.items));
    } else {
      yield put(setError());
    }
  } catch (e) {
    yield put(setError());
  }
}

export default function* searchRepoInit() {
  yield takeEvery(repo.GET_REPO_INIT, searchRepo);
}
