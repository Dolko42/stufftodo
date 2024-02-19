import React from "react";
import Sidebar from "~/_components/Sidebar";
import { db } from "~/server/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const allStufflists = await db.stufflist.findMany({
    include: {
      _count: {
        select: {
          tasks: {
            where: {
              status: false,
            },
          },
        },
      },
    },
  });

  return (
    <div className="flex h-96 flex-col md:flex-row">
      <Sidebar allStufflists={allStufflists} />
      <div className="flex w-full flex-col justify-between font-normal">
        {children}
      </div>
    </div>
  );
};

export default Layout;
