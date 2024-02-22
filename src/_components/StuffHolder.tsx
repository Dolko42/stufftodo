"use client";

import React, { useState } from "react";
import type { Stuff as StuffType } from "~/types";
import Stuff from "./Stuff";

type StuffHolderProps = {
  stuffs: StuffType[];
};

const StuffHolder: React.FC<StuffHolderProps> = ({ stuffs }) => {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const toggleDrawer = (id: string) => {
    if (activeDrawer === id) {
      setActiveDrawer(null); // Close drawer if it's already open
    } else {
      setActiveDrawer(id); // Open the new drawer
    }
  };

  const completedItems = stuffs.filter((stuff) => stuff.status);
  const incompleteItems = stuffs.filter((stuff) => !stuff.status);

  return (
    <>
      {incompleteItems.map((stuff) => (
        <Stuff
          key={stuff.id}
          stuff={stuff}
          isActive={activeDrawer === `my-drawer-${stuff.id}`}
          toggleDrawer={toggleDrawer}
        />
      ))}
      {completedItems.length > 0 && (
        <div className="collapse collapse-arrow mb-4 rounded-none bg-zinc-900	">
          <input type="checkbox" />
          <div className="text-medium collapse-title flex items-center text-sm text-zinc-200">
            Completed stuff
          </div>
          <div className="collapse-content">
            {completedItems.map((stuff) => (
              <div
                key={stuff.id}
                className={`flex flex-col line-through ${activeDrawer === `my-drawer-${stuff.id}` ? "opacity-100" : "opacity-50"}`}
              >
                <Stuff
                  stuff={stuff}
                  isActive={activeDrawer === `my-drawer-${stuff.id}`}
                  toggleDrawer={toggleDrawer}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default StuffHolder;
