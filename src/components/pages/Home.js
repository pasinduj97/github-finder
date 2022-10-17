import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

function Home(props) {
  return (
    <Fragment>
      <Search />

      <Users />
    </Fragment>
  );
}

export default Home;
