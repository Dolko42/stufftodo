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
      <button className="btn btn-primary rounded-none text-white" type="submit">
        {pending ? "Adding..." : "Add stuff"}
      </button>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        await createStuff(formData).then(() => {
          form.reset();
        });
      }}
      className="mt-4 flex flex-row"
    >
      <input type="hidden" name="id" required value={listId} />
      <input
        className="w-full bg-zinc-200 px-2 py-3 text-zinc-800"
        type="text"
        name="content"
        placeholder="Got stuff to do?"
        required
      />
      <SubmitButton />
    </form>
  );
};
export default CreateStuff;
