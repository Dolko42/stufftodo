"use client";
import { deleteStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";

type DeleteListProps = {
  currentList: Stufflist;
};

const DeleteList: React.FC<DeleteListProps> = ({ currentList }) => {
  const listId = currentList.id.toString();

  function SubmitButton() {
    return (
      <button
        className="btn btn-error btn-md rounded-none text-white"
        type="submit"
      >
        Delete list
      </button>
    );
  }

  return (
    <>
      <form action={deleteStufflist} className="flex flex-row">
        <input type="hidden" name="id" required value={listId} />
        <SubmitButton />
        {/* {errors.title && (
          <div
            className="tooltip tooltip-error"
            data-tip={errors.title.message}
          >
          </div>
        )}
        {!errors.title && <button className="btn">Update</button>} */}
      </form>
    </>
  );
};
export default DeleteList;
