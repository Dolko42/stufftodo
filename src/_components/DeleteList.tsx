"use client";
import { useFormStatus } from "react-dom";
import { deleteStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";

type DeleteListProps = {
  currentList: Stufflist;
};

const DeleteList: React.FC<DeleteListProps> = ({ currentList }) => {
  const listId = currentList.id.toString();
  const { pending } = useFormStatus();

  function SubmitButton() {
    return (
      <button
        className="btn btn-error btn-sm rounded-none text-white"
        type="submit"
      >
        {pending ? "Deleting..." : "Delete list"}
      </button>
    );
  }

  return (
    <>
      <form action={deleteStufflist} className="flex flex-row">
        <input type="hidden" name="id" required value={listId} />
        <SubmitButton />
      </form>
    </>
  );
};
export default DeleteList;
