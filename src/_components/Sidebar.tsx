import React from "react";
import { db } from "~/server/db";
import Link from "next/link";
import { createStufflist } from "~/app/api/todo/actions";

const Sidebar: React.FC = async () => {
  const stufflists = await db.stufflist.findMany();

  return (
    <div className="w-80">
      {stufflists.map((stufflist) => (
        <div key={stufflist.id} className="flex flex-col">
          <Link
            href={`/todo/${stufflist.id}`}
            className="mb-2 bg-blue-700 px-8 py-2"
          >
            {stufflist.title}
          </Link>
        </div>
      ))}
      <form action={createStufflist}>
        <button className="bg-lime-500 px-8 py-4 text-white">
          {`+`} New list
        </button>
      </form>
    </div>
  );
};
export default Sidebar;
