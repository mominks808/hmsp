import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { AddRoom } from "./AddRoom";

export const ManageRoom = () => {
  const [val, setVal] = useState("addroom");
  return (
    <React.Fragment>
      <Tabs value={val}>
        <Tab value="addroom" label="Add Room" />
      </Tabs>

      {val === "addroom" && <AddRoom />}
    </React.Fragment>
  );
};
