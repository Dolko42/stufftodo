import React from "react";
import { createStufflist } from "../app/stufflist/[id]/actions";

const NewListButton: React.FC = () => {
  return (
    <form action={createStufflist}>
      <button className="bg-lime-500 px-8 py-4 text-white">
        {`+`} New list
      </button>
    </form>
  );
};
export default NewListButton;

// const newStufflist = api.stufflist.createStufflist.useMutation({
//   onSuccess(data) {
//     console.log("Stufflist created", data);
//   },
// });

// const newList = async () => {
//   await newStufflist.mutateAsync();
// };
