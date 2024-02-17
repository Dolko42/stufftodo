import React from "react";
import ListTab from "./ListTab";

const Tabs: React.FC = () => {
  //TODO: Fetch Stufflist's titles

  return (
    <div role="tablist" className="tabs">
      <ListTab />
      <ListTab />
    </div>
  );
};
export default Tabs;
