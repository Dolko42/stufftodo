import React from "react";
import EditList from "./EditList";
import type { Stufflist } from "~/types";
import DeleteList from "./DeleteList";
import CreateStuff from "./CreateStuff";
import StuffHolder from "./StuffHolder";

type BoardProps = {
  currentList: Stufflist | null;
};

const Board: React.FC<BoardProps> = ({ currentList }) => {
  if (!currentList) {
    return <div>No list found</div>;
  }

  return (
    <div className="flex h-full flex-col justify-between bg-zinc-800 p-4">
      <div className="flex flex-row justify-between">
        <EditList currentList={currentList} />
        <DeleteList currentList={currentList} />
      </div>
      <div>
        <StuffHolder currentList={currentList} />
        <CreateStuff currentList={currentList} />
      </div>
    </div>
  );
};
export default Board;
