"use client";

import EditList from "./EditList";
import DeleteList from "./DeleteList";
import CreateStuff from "./CreateStuff";
import Search from "./Search";
import StuffHolder from "./StuffHolder";
import { useOptimistic } from "react";
import type { Stuff, Stufflist } from "@prisma/client";

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
        <StuffHolder stuffs={optimisticStuff} />
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
