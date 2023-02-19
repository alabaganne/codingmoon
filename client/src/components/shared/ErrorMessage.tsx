import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ErrorMessage: FC<IProps> = ({ children }) => {
  return <p className=" text-xs text-red-500 mt-2">{children}</p>;
};

export default ErrorMessage;
