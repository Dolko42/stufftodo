import React from "react";
import EditList from "./EditList";
import type { Stufflist } from "~/types";

type StuffTabProps = {
  currentList: Stufflist | null;
};

const StuffTab: React.FC<StuffTabProps> = ({ currentList }) => {
  if (!currentList) {
    return <div>No list found</div>;
  }

  return (
    <>
      <EditList currentList={currentList} />
      {/* <DeliteList /> */}
      <form action="">
        <input
          type="text"
          name="content"
          placeholder="Got stuff to do?"
          required
        ></input>
        <button>Add stuff</button>
      </form>
    </>
  );
};
export default StuffTab;
