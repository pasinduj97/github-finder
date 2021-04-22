import React, { Component, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

import GitHubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GitHubContext);

  return (
    <div style={userStyle}>
      {githubContext.loading ? (
        <Spinner />
      ) : (
        githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
