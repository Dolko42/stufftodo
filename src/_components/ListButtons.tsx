import React from "react";
import { useFormStatus } from "react-dom";

export const CreateListButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full bg-lime-500 px-8 py-4 font-medium text-zinc-900 disabled:bg-opacity-70"
      disabled={pending}
    >
      {pending ? "Creating.." : `+  New list`}
    </button>
  );
};

export const DeleteListButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-error btn-sm rounded-none text-white"
      type="submit"
      disabled={pending}
    >
      {pending ? "Deleting.." : "Delete list"}
    </button>
  );
};
