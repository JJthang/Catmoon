import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-5">
      <h3 className="tracking-[1px] font-bold text-xl">CATMOON</h3>
      <div className="flex items-center gap-2">
        <a href="/" className="cat-btn">
        <span>Tweet</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
