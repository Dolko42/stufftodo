"use client";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStuff } from "~/app/api/stuff/actions";
import type { Stufflist } from "~/types";
import { CreateStuffSchema } from "~/types";
import type { z } from "zod";

type CreateStuffProps = {
  currentList: Stufflist;
};

type Inputs = z.infer<typeof CreateStuffSchema>;

const CreateStuff: React.FC<CreateStuffProps> = ({ currentList }) => {
  const listId = currentList.id.toString();
  const { pending } = useFormStatus();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(CreateStuffSchema),
    defaultValues: {
      id: listId,
      content: "",
    },
  });

  function SubmitButton() {
    return (
      <button className="btn btn-primary rounded-none text-white" type="submit">
        {pending ? "Adding..." : "Add stuff"}
      </button>
    );
  }

  const processForm: SubmitHandler<Inputs> = async (data) => {
    await createStuff(data).then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="mt-4 flex flex-row">
      {errors.content?.message ? (
        <div
          className="tooltip tooltip-top tooltip-warning w-full"
          data-tip={errors.content.message}
        >
          <input type="hidden" {...register("id")} />
          <input
            {...register("content")}
            placeholder="Got stuff to do?"
            className="w-full bg-zinc-200 px-2 py-3 text-zinc-800"
          />
        </div>
      ) : (
        <>
          <input type="hidden" {...register("id", { required: true })} />
          <input
            {...register("content")}
            placeholder="Got stuff to do?"
            className="w-full bg-zinc-200 px-2 py-3 text-zinc-800"
          />
        </>
      )}
      <SubmitButton />
    </form>
  );
};
export default CreateStuff;
