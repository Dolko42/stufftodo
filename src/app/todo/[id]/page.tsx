import React from "react";

const page: React.FC = () => {
  return (
    <>
      <form action="">
        <input
          type="text"
          name="content"
          placeholder="Got stuff to do?"
          required
        ></input>
        <button>Add stuff</button>
      </form>
    </>
  );
};
export default page;
