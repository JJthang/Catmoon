import {  Outlet } from "react-router-dom";

const LayoutClient = () => {

  return (
    <>
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutClient;
