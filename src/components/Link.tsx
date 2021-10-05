import React, { FC } from "react";

const Link: FC<{
  active: boolean;
  onClick: () => void;
}> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

export default Link;
