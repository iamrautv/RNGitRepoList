import {Constants} from '../../config';

const {ReduxTypes} = Constants;
const {repo} = ReduxTypes;

const searchRepo = (repoName, page = 1, listData = []) => ({
  type: repo.GET_REPO_INIT,
  repoName,
  page,
  listData,
});

export {searchRepo};
