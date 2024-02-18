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
    <div>
      {stuffs.map((stuff) => (
        <div key={stuff.id}>
          <Stuff stuff={stuff} />
        </div>
      ))}
    </div>
  );
};
export default StuffHolder;
