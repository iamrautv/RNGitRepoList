import {takeEvery, call, put} from 'redux-saga/effects';
import {setData, setLoading, setError} from '../reducer/repoListReducer';
import {Constants} from '../../config';
import API from '../../api';

const {ReduxTypes, httpTypes} = Constants;
const {repo} = ReduxTypes;

export function* searchRepo(action) {
  try {
    yield put(setLoading({page: action.page}));

    const res = yield call(
      API,
      `https://api.github.com/search/repositories?q=${action.repoName}&page=${action.page}&per_page=10`,
      httpTypes.GET,
    );
    if (res.status === 200) {
      yield put(
        setData({
          data:
            action.page === 1
              ? res.data.items
              : [...action.listData, ...res.data.items],
          page: action.page,
          listEnded: !res.data.incomplete_results,
        }),
      );
    } else {
      yield put(setError({errorMsg: 'Error loading list'}));
    }
  } catch (e) {
    yield put(setError({errorMsg: 'Netwrok error'}));
  }
}

export default function* searchRepoInit() {
  yield takeEvery(repo.GET_REPO_INIT, searchRepo);
}
