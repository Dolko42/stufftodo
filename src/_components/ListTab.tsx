import Link from "next/link";
import React from "react";
import { db } from "~/server/db";

const ListTab: React.FC = async () => {
  const stufflists = await db.stufflist.findMany();

  return (
    <>
      {stufflists.map((stufflist) => (
        <div key={stufflist.id} className="flex flex-col">
          <Link href={`/stufflist/${stufflist.id}`}>
            <a className="mb-2 bg-zinc-700 px-8 py-2">{stufflist.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
};
export default ListTab;
