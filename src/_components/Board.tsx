"use client";

import EditList from "./EditList";
import type { Stuff, Stufflist } from "~/types";
import DeleteList from "./DeleteList";
import CreateStuff from "./CreateStuff";
import Search from "./Search";
import EditStuffDrawer from "./EditStuffDrawer";
import { useOptimistic } from "react";

type BoardProps = {
  currentList: Stufflist;
  stuffs: Stuff[];
};

const Board: React.FC<BoardProps> = ({ currentList, stuffs }) => {
  const [optimisticStuff, addOptimisticStuff] = useOptimistic(
    stuffs,
    (state, newStuff: Stuff) => {
      return [...state, newStuff];
    },
  );

  return (
    <div className="relative flex h-full flex-col justify-between bg-zinc-800 p-4">
      <div>
        <Search placeholder="Search stuff.." />
        <div className="mb-8 flex flex-row justify-between">
          <EditList currentList={currentList} />
          <DeleteList currentList={currentList} />
        </div>
        <EditStuffDrawer stuffs={optimisticStuff} />
      </div>
      <div>
        <CreateStuff
          currentList={currentList}
          addOptimisticStuff={addOptimisticStuff}
        />
      </div>
    </div>
  );
};
export default Board;
