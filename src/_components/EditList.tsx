"use client";
import { updateStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";

type EditListProps = {
  currentList: Stufflist;
};

const EditList: React.FC<EditListProps> = ({ currentList }) => {
  const listId = currentList.id.toString();

  function SubmitButton() {
    return (
      <button className="btn btn-md rounded-none" type="submit">
        Update
      </button>
    );
  }

  return (
    <>
      <form action={updateStufflist} className="flex flex-row">
        <input type="hidden" name="id" required value={listId} />
        <input
          required
          name="title"
          type="text"
          placeholder={currentList.title}
          className="border-x-0 border-b-2 border-t-0"
        />
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
export default EditList;
