import React from 'react';

const User = (props) => {
  console.log(props.user);

  return (
    <div>
      {/* <p>hello {name}</p> */}
      {props.user ? (
        <div>
          <p>Your name is {props.user.name}</p>
          <p>Your mail is {props.user.email}</p>
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default User;
