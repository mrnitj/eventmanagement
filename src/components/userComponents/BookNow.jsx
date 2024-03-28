import React from "react";
import { Grid, Box,Typography} from "@mui/material";

export const BookNow = () => {

  return (
    <>
      <Grid container marginY={2}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box
            sx={{
              display: "flex",
                justifyContent: "center",
                alignItems: "center",
             
            }}
          >
            <img
              width={400}
              src="https://c4.wallpaperflare.com/wallpaper/279/107/730/bar-club-dance-dancing-wallpaper-preview.jpg"
              alt=""
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY:5,
            textAlign:'center'
          }}
        >
          <Box>
            <Typography m={2} fontSize={40}>Looking for a DJ night ?</Typography>
            <button style={{ background: "orange" }}>Book Now</button>
          </Box>
        </Grid>
        
      </Grid>
    </>
  );
};
