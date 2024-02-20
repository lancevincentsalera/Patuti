import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "brown" }}>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Quotes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
