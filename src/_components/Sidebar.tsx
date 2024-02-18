"use client";

import React from "react";
import Link from "next/link";
import { createStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";
import { usePathname } from "next/navigation";

type SidebarProps = {
  stufflists: Stufflist[];
};

const Sidebar: React.FC<SidebarProps> = ({ stufflists }) => {
  const currentPath = usePathname();

  const activeClasses = " bg-blue-700 px-8 py-2 text-white";
  const inactiveClasses = " bg-gray-600 px-8 py-2 hover:bg-blue-600";

  return (
    <div className="flex max-h-screen w-80 flex-col justify-between">
      <form action={createStufflist}>
        <button className="w-full bg-lime-500 px-8 py-4 text-gray-900">
          {`+`} New list
        </button>
      </form>
      <div>
        {stufflists.map((stufflist) => (
          <div key={stufflist.id} className="flex flex-col">
            <Link
              href={`/todo/${stufflist.id}`}
              className={`${currentPath === `/todo/${stufflist.id}` ? activeClasses : inactiveClasses}`}
            >
              {stufflist.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
