import React, { FC } from "react";

interface IProps {
  isActive: boolean;
}

const Status: FC<IProps> = ({ isActive }) => {
  return (
    <div
      className={` font-medium px-3 rounded w-16 py-2 flex items-center justify-center ${
        isActive ? "" : ""
      }`}
    >
      {isActive ? (
        <p className=" text-green-500 text-xs">Active</p>
      ) : (
        <p className=" text-red-500  text-xs">Inactive</p>
      )}
    </div>
  );
};

export default Status;
