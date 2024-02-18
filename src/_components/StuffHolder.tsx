import React from "react";
import { db } from "~/server/db";
import type { Stufflist } from "~/types";
import Stuff from "./Stuff";

type StuffHolderProps = {
  currentList: Stufflist;
};

const StuffHolder: React.FC<StuffHolderProps> = async ({ currentList }) => {
  const stuffs = await db.stuff.findMany({
    where: {
      listId: currentList.id,
    },
  });

  return (
    <div className="flex flex-col gap-2 py-4">
      {stuffs.map((stuff) => (
        <Stuff key={stuff.id} stuff={stuff} />
      ))}
    </div>
  );
};
export default StuffHolder;
