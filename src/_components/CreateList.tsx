import React from "react";
import { createStufflist } from "~/app/api/todo/actions";

type CreateListProps = {
  addOptimisticList: (action: {
    id: string;
    title: string;
    icon: string | null;
    authorId: string;
    _count: {
      tasks: number;
    };
  }) => void;
};

const CreateList: React.FC<CreateListProps> = ({ addOptimisticList }) => {
  return (
    <form
      action={async () => {
        addOptimisticList({
          id: Math.random().toString(),
          title: "Untitled list",
          icon: null,
          authorId: "authorId_here",
          _count: {
            tasks: 0,
          },
        });

        await createStufflist();
      }}
    >
      <button className="w-full bg-lime-500 px-8 py-4 font-medium text-zinc-900">
        {`+`} New list
      </button>
    </form>
  );
};

export default CreateList;
