import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1b1b42'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Population.io</Link>
          </Typography>
          <Button color="inherit">
            <Link href="/population">Population</Link>
          </Button>
          <Button color="inherit">
            <Link href="/">About</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
