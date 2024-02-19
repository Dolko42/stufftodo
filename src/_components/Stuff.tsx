import React from "react";
import { deleteStuff, toggleStuff } from "~/app/api/stuff/actions";
import { Stuff } from "~/types";

type StuffProps = {
  stuff: Stuff;
};

const Stuff: React.FC<StuffProps> = ({ stuff }) => {
  const stuffId = stuff.id.toString();

  return (
    <div className="flex flex-row items-center justify-between bg-zinc-700 px-2 py-1">
      <div className="flex gap-2">
        <form action={toggleStuff.bind(null, stuff.id)}>
          <button>{stuff.status ? <p>✅</p> : <p>⬜</p>}</button>
        </form>
        <p>{stuff.title}</p>
      </div>
      <form action={deleteStuff.bind(null, stuff.id)}>
        <input type="hidden" name="id" required value={stuffId} />
        <div className="tooltip tooltip-left tooltip-error" data-tip="Delete">
          <button type="submit">🗑️</button>
        </div>
      </form>
    </div>
  );
};
export default Stuff;
