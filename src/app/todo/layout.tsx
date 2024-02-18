import React from "react";
import Sidebar from "~/_components/Sidebar";
import { db } from "~/server/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const stufflists = await db.stufflist.findMany();

  return (
    <div className="flex flex-row">
      <Sidebar stufflists={stufflists} />
      <div className="flex flex-col justify-between font-normal md:w-3/4 2xl:w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
