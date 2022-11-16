import React from "react";

const NewList = ({lists}) => {
  return (
    <div>
      <div>
        <p>{lists.name}</p>
        <p>{lists.username}</p>
        <p>{lists.email}</p>
      </div>
    </div>
  );
};

export default NewList;
