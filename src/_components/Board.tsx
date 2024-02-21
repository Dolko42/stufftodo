import React from "react";
import EditList from "./EditList";
import type { Stufflist } from "~/types";
import DeleteList from "./DeleteList";
import CreateStuff from "./CreateStuff";
import Search from "./Search";
import { db } from "~/server/db";
import EditStuffDrawer from "./EditStuffDrawer";

type BoardProps = {
  currentList: Stufflist | null;
  query?: string;
};

const Board: React.FC<BoardProps> = async ({ currentList, query }) => {
  if (!currentList) {
    return (
      <div className="flex h-full flex-col items-center justify-between bg-zinc-800 p-4">
        <p>Add or select list</p>
      </div>
    );
  }

  const stuffs = await db.stuff.findMany({
    where: {
      listId: currentList.id,
      ...(query && {
        title: {
          contains: query,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="relative flex h-full flex-col justify-between bg-zinc-800 p-4">
      <div>
        <Search placeholder="Search stuff.." />
        <div className="mb-8 flex flex-row justify-between">
          <EditList currentList={currentList} />
          <DeleteList currentList={currentList} />
        </div>
        <EditStuffDrawer stuffs={stuffs} />
      </div>
      <div>
        <CreateStuff currentList={currentList} />
      </div>
    </div>
  );
};
export default Board;
