import React from "react";
import { Stuff } from "~/types";

type StuffProps = {
  stuff: Stuff;
};

const Stuff: React.FC<StuffProps> = ({ stuff }) => {
  return <div>{stuff.title}</div>;
};
export default Stuff;
