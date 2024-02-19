import React from "react";
import Sidebar from "~/_components/Sidebar";
import { db } from "~/server/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const stufflists = await db.stufflist.findMany();

  return (
    <div className="flex h-96 sm:flex-col md:flex-row">
      <Sidebar stufflists={stufflists} />
      <div className="flex w-full flex-col justify-between font-normal">
        {children}
      </div>
    </div>
  );
};

export default Layout;
