import React from "react";
import EditList from "./EditList";
import type { Stufflist } from "~/types";
import DeleteList from "./DeleteList";

type BoardProps = {
  currentList: Stufflist | null;
};

const Board: React.FC<BoardProps> = ({ currentList }) => {
  if (!currentList) {
    return <div>No list found</div>;
  }

  return (
    <div className="flex h-full flex-col bg-zinc-800 p-4">
      <div className="flex flex-row justify-between">
        <EditList currentList={currentList} />
        <DeleteList currentList={currentList} />
      </div>
      <form action="">
        <input
          type="text"
          name="content"
          placeholder="Got stuff to do?"
          required
        ></input>
        <button>Add stuff</button>
      </form>
    </div>
  );
};
export default Board;
