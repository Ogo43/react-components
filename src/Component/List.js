import React from "react";

const List = ({ name, address }) => {
  return (
    <li>
      <a href={address}>{name}</a>
    </li>
  );
};

export default List;
