"use client";

import React, { useState } from "react";

const ListTabInput: React.FC = () => {
  // Simulate Stufflist fetch from db
  // TODO: Fetch Stufflist

  const [placeholder, setPlaceholder] = useState("Untitled list");

  return (
    <form className="">
      <input
        type="text"
        placeholder={placeholder}
        className="border-x-0 border-b-2 border-t-0"
      />
    </form>
  );
};
export default ListTabInput;
