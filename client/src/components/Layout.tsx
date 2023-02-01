import React from "react";
import { NavBar } from "./NavBar";
type Props = { children?: React.ReactNode };
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen">
        <NavBar />
        {children}
      </div>
    </React.Fragment>
  );
};
