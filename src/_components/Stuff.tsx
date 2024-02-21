"use client";

import React from "react";
import { deleteStuff, toggleStuff } from "~/app/api/stuff/actions";
import { Stuff } from "~/types";

type StuffProps = {
  stuff: Stuff;
  isActive: boolean;
  toggleDrawer: (id: string) => void;
};

const Stuff: React.FC<StuffProps> = ({ stuff, isActive, toggleDrawer }) => {
  const stuffId = stuff.id.toString();
  const drawerId = `my-drawer-${stuff.id}`;

  return (
    <div className={`drawer drawer-end ${isActive ? "z-50" : "z-10"}`}>
      <input
        id={drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={isActive}
        onChange={() => toggleDrawer(drawerId)}
        readOnly
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor={drawerId}
          className="z-10 mb-2 flex flex-row items-center justify-between bg-zinc-700 px-2 py-3 hover:bg-zinc-600"
        >
          <div className="flex gap-2">
            <form action={toggleStuff.bind(null, stuff.id)}>
              <button>{stuff.status ? <p>✅</p> : <p>⬜</p>}</button>
            </form>
            <p>{stuff.title}</p>
          </div>
          <form action={deleteStuff.bind(null, stuff.id)}>
            <input type="hidden" name="id" required value={stuffId} />
            <div
              className="tooltip tooltip-left tooltip-error"
              data-tip="Delete"
            >
              <button type="submit">🗑️</button>
            </div>
          </form>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className={`menu z-50 min-h-full w-80 bg-base-200 p-4 text-base-content ${isActive ? "z-50" : "z-10"}`}
        >
          {" "}
          {/* Sidebar content here */}
          <li>{stuff.title}</li>
        </ul>
      </div>
    </div>
  );
};
export default Stuff;
