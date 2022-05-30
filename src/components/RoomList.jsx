import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Button } from "@mui/material";

export const RoomList = () => {
  const [isManager, setIsManager] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "roomno", headerName: "Room Number", width: 190 },
    { field: "roomcap", headerName: "Room Capacity", width: 190 },
    { field: "roomsize", headerName: "Room Size (Sq. Ft)", width: 190 },
    { field: "nobeds", headerName: "Number of Beds", width: 190 },
  ];
  const columnsHK = [
    { field: "roomno", headerName: "Room Number", width: 190 },
    { field: "nobeds", headerName: "Number of Beds", width: 190 },
  ];

  const rows = [
    { id: 1, roomno: 205, roomcap: 10, roomsize: 200, nobeds: 7 },
    { id: 2, roomno: 207, roomcap: 20, roomsize: 300, nobeds: 12 },
    { id: 3, roomno: 211, roomcap: 17, roomsize: 200, nobeds: 17 },
    { id: 4, roomno: 201, roomcap: 7, roomsize: 220, nobeds: 7 },
    { id: 5, roomno: 202, roomcap: 3, roomsize: 240, nobeds: 9 },
    { id: 6, roomno: 501, roomcap: 11, roomsize: 210, nobeds: 10 },
    { id: 7, roomno: 507, roomcap: 14, roomsize: 220, nobeds: 17 },
    { id: 8, roomno: 411, roomcap: 12, roomsize: 350, nobeds: 17 },
    { id: 9, roomno: 311, roomcap: 15, roomsize: 300, nobeds: 11 },
  ];
  return (
    <div className="sub3">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" onClick={() => setIsManager(true)}>
            Manager
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" onClick={() => setIsManager(false)}>
            House Keeping
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={rows}
        columns={isManager ? columns : columnsHK}
        pageSize={5}
      />
    </div>
  );
};
