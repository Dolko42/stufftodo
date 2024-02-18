"use client";
import { useFormStatus } from "react-dom";
import { createStuff } from "~/app/api/stuff/actions";
import type { Stufflist } from "~/types";

type CreateStuffProps = {
  currentList: Stufflist;
};

const CreateStuff: React.FC<CreateStuffProps> = ({ currentList }) => {
  const listId = currentList.id.toString();
  const { pending } = useFormStatus();

  function SubmitButton() {
    return (
      <button
        className="btn btn-primary btn-sm rounded-none text-white"
        type="submit"
      >
        {pending ? "Adding..." : "Add stuff"}
      </button>
    );
  }

  return (
    <>
      <form action={createStuff} className="flex flex-row">
        <input type="hidden" name="id" required value={listId} />
        <SubmitButton />
        <input type="text" name="content" required />
      </form>
    </>
  );
};
export default CreateStuff;
