import React from "react";
import { deleteStuff } from "~/app/api/stuff/actions";
import { Stuff } from "~/types";

type StuffProps = {
  stuff: Stuff;
};

const Stuff: React.FC<StuffProps> = ({ stuff }) => {
  const stuffId = stuff.id.toString();

  return (
    <div className="flex flex-row items-center justify-between bg-zinc-700 px-2 py-1">
      <p>{stuff.title}</p>
      <form action={deleteStuff}>
        <input type="hidden" name="id" required value={stuffId} />
        <div className="tooltip tooltip-left tooltip-error" data-tip="Delete">
          <button type="submit">🗑️</button>
        </div>
      </form>
    </div>
  );
};
export default Stuff;
