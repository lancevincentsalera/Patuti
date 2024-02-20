import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PanelContainer from "./PanelContainer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BasicGrid = ({
  images,
  IndexHandler,
  currentImageIndex,
  imagePosition,
  imageXPosition,
  handleTabLeave,
  index,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xl={6}>
          <Item>
            <PanelContainer
              images={images}
              IndexHandler={IndexHandler}
              currentImageIndex={currentImageIndex}
              imagePosition={imagePosition}
              imageXPosition={imageXPosition}
              handleTabLeave={handleTabLeave}
              index={index}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
