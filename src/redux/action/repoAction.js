import {Constants} from '../../config';

const {ReduxTypes} = Constants;
const {repo} = ReduxTypes;

const searchRepo = repoName => ({
  type: repo.GET_REPO_INIT,
  repoName,
});

export {searchRepo};
