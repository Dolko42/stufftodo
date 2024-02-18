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

  const activeClasses = "mb-2 bg-blue-700 px-8 py-2";
  const inactiveClasses = "mb-2 bg-gray-600 px-8 py-2 hover:bg-blue-500";

  return (
    <div className="w-80">
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
      <form action={createStufflist}>
        <button className="bg-lime-500 px-8 py-4 text-white">
          {`+`} New list
        </button>
      </form>
    </div>
  );
};
export default Sidebar;
