import "./css_files/styles.css";
import { Box } from "@mui/material";
import ResizeChecker from "./components/Resizechecker";
import { useState, useEffect } from "react";

const Tile = ({ smallscreen }) => {
  return (
    <Box
      sx={{
        minWidth: "40%",
        height: "250px",
        backgroundColor: "#202020",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    ></Box>
  );
};

const ProjectSection = ({ smallscreen }) => {
  return (
    <Box
      sx={{
        width: smallscreen ? "100%" : "80%",
        height: "900px",
        marginTop: "10%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "white",
          fontSize: "45px",
          fontFamily: "quicksand",
        }}
      >
        Projects
      </Box>

      {/* line */}

      <Box
        sx={{
          width: "100%",
          height: "5px",
          backgroundColor: "white",
          marginY: "20px",
        }}
      ></Box>

      <Box
        sx={{
          width: "100%",
          height: "80%",
          background: "linear-gradient(-120deg ,#f87e7e, #2FE6DE)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Box>
      </Box>
    </Box>
  );
};

const ShowcaseSection = ({ smallscreen }) => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "900px",
        marginTop: "10%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "white",
          fontSize: "45px",
          fontFamily: "quicksand",
        }}
      >
        Showcase
      </Box>

      {/* line */}

      <Box
        sx={{
          width: "100%",
          height: "5px",
          backgroundColor: "white",
          marginY: "20px",
        }}
      ></Box>

      <Box
        sx={{
          width: "100%",
          height: "80%",
          background: "linear-gradient(-120deg ,#f87e7e, #2FE6DE)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Box>
      </Box>
    </Box>
  );
};

export default function App() {
  const [smallScreen, setSmallscreen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "200vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ResizeChecker toggle={setSmallscreen} limit={575} />
      <ProjectSection smallscreen={smallScreen} />
      <ShowcaseSection smallscreen={smallScreen} />
    </Box>
  );
}
