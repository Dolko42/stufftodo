"use client";

import Link from "next/link";
import type { StufflistWithCount } from "~/types";
import { usePathname } from "next/navigation";
import CreateList from "./CreateList";
import { useOptimistic } from "react";

type SidebarProps = {
  allStufflists: StufflistWithCount;
};

type SingleStufflistWithCount = StufflistWithCount[number];

const Sidebar: React.FC<SidebarProps> = ({ allStufflists }) => {
  const currentPath = usePathname();

  const activeClasses = " bg-blue-700 px-4 py-2 text-white";
  const inactiveClasses = " bg-zinc-900 px-4 py-2 hover:bg-blue-600";

  const [optimisticList, addOptimisticList] = useOptimistic(
    allStufflists,
    (state, newList: SingleStufflistWithCount) => {
      return [...state, newList];
    },
  );

  return (
    <div className="flex max-h-screen flex-col bg-zinc-900 md:w-1/4 2xl:w-80">
      <CreateList addOptimisticList={addOptimisticList} />
      <div>
        {optimisticList.map((stufflist) => (
          <Link key={stufflist.id} href={`/todo/${stufflist.id}`} className="">
            <div
              className={`${currentPath === `/todo/${stufflist.id}` ? activeClasses : inactiveClasses} flex flex-row items-center justify-between`}
            >
              {stufflist.title}
              <div className="flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-700">
                <p className="text-xs">{stufflist._count.tasks}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
