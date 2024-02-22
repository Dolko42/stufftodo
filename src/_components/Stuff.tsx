"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Stuff } from "@prisma/client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import { deleteStuff, editStuff, toggleStuff } from "~/app/api/stuff/actions";
import { EditStuffSchema } from "~/types";

type StuffProps = {
  stuff: Stuff;
  isActive: boolean;
  toggleDrawer: (id: string) => void;
};

type Inputs = z.infer<typeof EditStuffSchema>;

type Payload = {
  id: string;
  title: string;
  description?: string;
  deadline?: string | null;
};

const Stuff: React.FC<StuffProps> = ({ stuff, isActive, toggleDrawer }) => {
  const stuffId = stuff.id.toString();
  const drawerId = `my-drawer-${stuff.id}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(EditStuffSchema),
    defaultValues: {
      id: stuffId,
      title: stuff.title ?? "",
      description: stuff.description ?? "",
      deadline: stuff.deadline
        ? stuff.deadline.toISOString().split("T")[0]
        : "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const { id, title, description, deadline } = data;

    const payload: Payload = {
      id,
      title,
      description: description !== "" ? description : undefined,
      deadline: deadline ? `${deadline}T00:00:00.000Z` : null,
    };

    await editStuff(
      payload.id,
      payload.title,
      payload.description,
      payload.deadline,
    ).then(() => reset());
  };

  return (
    <div className={`drawer drawer-end ${isActive ? "z-50" : "z-10"}`}>
      <input
        id={drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={isActive}
        onChange={() => toggleDrawer(drawerId)}
        readOnly
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor={drawerId}
          className="z-10 mb-2 flex flex-row items-center justify-between bg-zinc-700 px-2 py-3 hover:bg-zinc-600"
        >
          <div className="items-top flex gap-2">
            <form action={toggleStuff.bind(null, stuff.id)}>
              <button>{stuff.status ? <p>✅</p> : <p>⬜</p>}</button>
            </form>
            <div className="flex flex-col gap-1">
              <p className="text-md text-zinc-200">{stuff.title}</p>
              {stuff.description && (
                <p className="mb-3 text-sm">{stuff.description}</p>
              )}
              {stuff.deadline && (
                <p className="text-xs text-zinc-500">
                  {stuff.deadline.toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <form action={deleteStuff.bind(null, stuff.id)}>
            <input type="hidden" name="id" required value={stuffId} />
            <div
              className="tooltip tooltip-left tooltip-error"
              data-tip="Delete"
            >
              <button type="submit">🗑️</button>
            </div>
          </form>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className={`menu z-50 min-h-full w-96 bg-base-200 p-6 pr-10 text-base-content ${isActive ? "z-50" : "z-10"}`}
        >
          {/* Sidebar content here */}
          <p className="text-xl text-white">{`Edit stuff - ${stuff.title}`}</p>
          <form
            onSubmit={handleSubmit(processForm)}
            className="flex flex-col gap-1"
          >
            <input type="hidden" {...register("id")} />
            <label className="mt-4">Title</label>
            <input
              type="text"
              {...register("title")}
              placeholder="Stuff Title"
              className="bg-zinc-200 p-2 text-zinc-800 placeholder-zinc-400"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
            <label className="mt-4">Description</label>
            <textarea
              {...register("description")}
              placeholder="Stuff Description"
              className="bg-zinc-200 p-2 text-zinc-800 placeholder-zinc-400"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
            <label className="mt-4">Deadline</label>
            <input
              type="date"
              {...register("deadline")}
              className="bg-zinc-200 p-2 text-zinc-800 placeholder-zinc-400"
            />
            {errors.deadline && (
              <p className="text-red-500">{errors.deadline.message}</p>
            )}
            <button className="btn btn-accent mt-4 rounded-none" type="submit">
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
};
export default Stuff;
