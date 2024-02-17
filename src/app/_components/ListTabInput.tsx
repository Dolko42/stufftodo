"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  title: string;
};

const ListTabInput: React.FC = () => {
  // Simulate Stufflist fetch from db
  // TODO: Fetch Stufflist
  const [placeholder, setPlaceholder] = useState("Untitled list");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormFields>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: FormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log("Data submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
      <input
        {...register("title", { required: "At leaast 1 character pls" })}
        type="text"
        placeholder={placeholder}
        className="border-x-0 border-b-2 border-t-0"
      />
      {errors.title && (
        <div className="tooltip tooltip-error" data-tip={errors.title.message}>
          <button className="btn">Update</button>
        </div>
      )}
      {!errors.title && <button className="btn">Update</button>}
    </form>
  );
};
export default ListTabInput;
