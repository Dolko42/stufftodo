"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { updateStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";

type EditListProps = {
  currentList: Stufflist;
};

const EditList: React.FC<EditListProps> = ({ currentList }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const listId = currentList.id.toString();
  const { pending } = useFormStatus();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  function SubmitButton() {
    return (
      <button
        className="btn btn-ghost btn-sm rounded-none px-1 text-xl hover:text-lime-500"
        type="submit"
      >
        {pending ? "Renaming.." : "↩️"}
      </button>
    );
  }

  return (
    <>
      <form action={updateStufflist} className="flex flex-row items-center">
        <input type="hidden" name="id" required value={listId} />
        <input
          required
          name="title"
          type="text"
          placeholder={currentList.title}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="border-b border-zinc-400 bg-transparent text-xl text-white hover:bg-zinc-700 focus:border-zinc-300 focus:bg-white focus:text-black focus:outline-none"
        />
        {isInputFocused && <SubmitButton />}
      </form>
    </>
  );
};
export default EditList;

{
  /* {errors.title && (
  <div
    className="tooltip tooltip-error"
    data-tip={errors.title.message}
  >
  </div>
)}
{!errors.title && <button className="btn">Update</button>} */
}
