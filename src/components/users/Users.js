import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const Users = props => {
  return (
    <div style={userStyle}>
      {props.loading ? (
        <Spinner />
      ) : (
        props.users.map(user => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

Users.prototype = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};
export default Users;
