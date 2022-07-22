import React from 'react';

const User = (props) => {
  console.log(props);
  const { username, email } = props.user;
  return (
    <div>
      <p>hello {username}</p>
      <p>Your mail is {email}</p>
    </div>
  );
};

export default User;
