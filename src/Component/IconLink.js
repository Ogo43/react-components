import React from "react";

const IconsLink = ({address, children}) => {
  return (
    <li>
      <a href={address}>
        {children}
      </a>
    </li>
  );
};

export default IconsLink;
