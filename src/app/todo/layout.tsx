import React from "react";
import Sidebar from "~/_components/Sidebar";
import { db } from "~/server/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const stufflists = await db.stufflist.findMany();

  return (
    <div>
      <div>{children}</div>
      <Sidebar stufflists={stufflists} />
    </div>
  );
};

export default Layout;
