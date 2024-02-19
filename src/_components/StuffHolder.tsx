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
    orderBy: {
      createdAt: "desc",
    },
  });

  const completedItems = stuffs.filter((stuff) => stuff.status);
  const incompleteItems = stuffs.filter((stuff) => !stuff.status);

  return (
    <>
      <div className="flex flex-col gap-2 py-4">
        {incompleteItems.map((stuff) => (
          <Stuff key={stuff.id} stuff={stuff} />
        ))}
      </div>
      <div className="collapse collapse-arrow mb-4 rounded-none bg-zinc-900	">
        <input type="checkbox" />
        <div className="text-medium collapse-title flex items-center text-sm text-zinc-200">
          Completed stuff
        </div>
        <div className="collapse-content">
          <div className="flex flex-col gap-2 opacity-50">
            {completedItems.map((stuff) => (
              <Stuff key={stuff.id} stuff={stuff} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default StuffHolder;
