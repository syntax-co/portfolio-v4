import "./css_files/styles.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

const Tile = () => {

  return(
    <Box sx={{
      width:'350px',
      height:'250px',
      backgroundColor:'#202020',
      marginLeft:'20px',
      marginRight:'20px'
    }}>

    </Box>
  )
}


const ProjectSection = () => {

  return(
    <Box sx={{
      width:'80%',
      height:'900px',
      marginTop:'10%',
    }}>
      <Box sx={{
        width:'100%',
        color:'white',
        fontSize:'45px',
        fontFamily:'quicksand'
      }}>
        Projects
      </Box>

      {/* line */}
      
      <Box sx={{
        width:'100%',
        height:'5px',
        backgroundColor:'white',
        marginY:'20px'
      }}></Box>
      


      <Box sx={{
        width:'100%',
        height:'80%',
        background:'linear-gradient(-120deg ,#f87e7e, #2FE6DE)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>

        <Box sx={{
          width:'90%',
          height:'90%',
          display:'flex',
          flexWrap:'wrap'
        }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Box>

      </Box>

    </Box>
  )
}

const ShowcaseSection = () => {

  return(
    <Box sx={{
      width:'80%',
      height:'900px',
      marginTop:'10%',
    }}>
      <Box sx={{
        width:'100%',
        color:'white',
        fontSize:'45px',
        fontFamily:'quicksand'
      }}>
        Showcase
      </Box>

      {/* line */}
      
      <Box sx={{
        width:'100%',
        height:'5px',
        backgroundColor:'white',
        marginY:'20px'
      }}></Box>
      


      <Box sx={{
        width:'100%',
        height:'80%',
        background:'linear-gradient(-120deg ,#f87e7e, #2FE6DE)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>

        <Box sx={{
          width:'90%',
          height:'90%',
          display:'flex',
          flexWrap:'wrap'
        }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Box>

      </Box>

    </Box>
  )
}


export default function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200vh",
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
      }}
    >
      
      <ProjectSection />
      <ShowcaseSection />


    </Box>
  );
}
