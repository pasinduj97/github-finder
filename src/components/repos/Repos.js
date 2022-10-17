import React, { useContext } from "react";
import RepoItem from "../repos/RepoItem";

import GitHubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GitHubContext);
  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};

export default Repos;
