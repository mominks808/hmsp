import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";

export const FrontDesk = () => {
  return (
    <div className="sub">
      <h3>FrontDesk</h3>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Link to="/frontdesk/manageroom">Manage Room</Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
