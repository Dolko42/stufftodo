import React from "react";
import EditList from "./EditList";
import type { Stufflist } from "~/types";
import DeleteList from "./DeleteList";
import CreateStuff from "./CreateStuff";
import StuffHolder from "./StuffHolder";
import Search from "./Search";

type BoardProps = {
  currentList: Stufflist | null;
  query?: string;
};

const Board: React.FC<BoardProps> = ({ currentList, query }) => {
  if (!currentList) {
    return (
      <div className="flex h-full flex-col items-center justify-between bg-zinc-800 p-4">
        <p>Add or select list</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between bg-zinc-800 p-4">
      <div>
        <Search placeholder="Search stuff.." />
        <div className="mb-8 flex flex-row justify-between">
          <EditList currentList={currentList} />
          <DeleteList currentList={currentList} />
        </div>
        <StuffHolder query={query} currentList={currentList} />
      </div>
      <div>
        <CreateStuff currentList={currentList} />
      </div>
    </div>
  );
};
export default Board;
