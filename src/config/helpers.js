const calculateRepoRating = repoInfo => {
  let rating = 3;
  if (repoInfo.forks_count > 50 && repoInfo.watchers_count > 50) {
    rating = 3;
  }
  if (repoInfo.forks_count > 100 && repoInfo.watchers_count > 100) {
    rating = 4;
  }
  if (repoInfo.forks_count > 200 && repoInfo.watchers_count > 200) {
    rating = 5;
  }
  if (repoInfo.open_issues_count > 200) {
    rating -= 2;
  } else if (repoInfo.open_issues_count > 100) {
    rating -= 1;
  }
  return rating;
};

export {calculateRepoRating};
