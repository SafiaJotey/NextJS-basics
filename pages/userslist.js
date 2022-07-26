import React from 'react';
import User from './components/User';

const UserList = ({ users }) => {
  return (
    <div>
      <h3>List of users</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default UserList;
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data.slice(0, 3),
    },
  };
};
