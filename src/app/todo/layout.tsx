import React from "react";
import Sidebar from "~/_components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
