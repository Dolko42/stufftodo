import React from "react";
import { createStufflist } from "~/app/api/todo/actions";

const CreateList: React.FC = () => {
  return (
    <form action={createStufflist}>
      <button className="w-full bg-lime-500 px-8 py-4 font-medium text-zinc-900">
        {`+`} New list
      </button>
    </form>
  );
};
export default CreateList;
