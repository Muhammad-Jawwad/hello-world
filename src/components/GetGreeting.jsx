import React from "react";

const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  };
  
  const GetGreeting = (props) => {
    return (
      <div>
        {props.user ? (
          <h1>Hello, {formatName(props.user)}!</h1>
        ) : (
          <h1>Hello, Stranger.</h1>
        )}
      </div>
    );
  };
  
  export default GetGreeting;