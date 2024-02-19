import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import Board from "~/_components/Board";
import { db } from "~/server/db";

export default async function Page({ params }: { params: { id: string } }) {
  noStore();

  const currentList = await db.stufflist.findUnique({
    where: {
      id: params.id,
    },
  });

  return <Board currentList={currentList} />;
}
