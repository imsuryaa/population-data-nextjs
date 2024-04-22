import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1b1b42",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" sx={{color: "#fafafa"}}>
              Next.js App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{color: "#fafafa"}}>
              {`${new Date().getFullYear()} Next.js | React | Material UI`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;