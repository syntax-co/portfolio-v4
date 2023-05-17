import "./css_files/styles.css";
import { Box } from "@mui/material";
import projectData from './json_files/projects_data.json';
import showcaseData from './json_files/showcase_data.json';
import { useEffect,useState } from "react";
import { ArrowOutward } from "@mui/icons-material";
import {motion} from 'framer-motion';

const Tile = ({label,image}) => {
  const [hovering,setHovering] = useState(false)

  return(
    <motion.div style={{
      minWidth:'500px',
      height:'275px',
      backgroundColor:'#202020',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:'10px',
      marginBottom:'10px',
      background:image? `url(${image})`:'#202020',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      position:'relative'
    }}
    whileHover={{scale:.95}}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
    >
      <Box id='tileTitle-container' >
        <Box sx={{marginLeft:'5%'}}>
          {label}
        </Box>
      </Box>

      <motion.div style={{
        position:'absolute',
        width:'50px',
        height:'50px',
        bottom:0,
        right:0,
        cursor:'pointer'
      }}
      initial={{opacity:0}}
      animate={{opacity:hovering? 1:0}}
      whileHover={{scale:.9}}
      onClick={() => {}}
      >
        <ArrowOutward sx={{
          color:'white',
          width:'50px',
          height:'50px'

        }} />
      </motion.div>

    </motion.div>
  )
}


const ProjectSection = () => {

  

  return(
    <Box id='project-container' >
      <Box id='projectTitle-container' >
        Projects
      </Box>

      {/* line */}
      
      <Box id='section-line'></Box>
      


      <Box id='projectTile-container' >

        <Box id='projTile-inner'>
          {
            Object.keys(projectData).map(key => {
              const info = projectData[key]
              return(
                <Tile key={key} 
                label={info.title} 
                image={info.imagepath}
                />
              )
            })
          }

          <Box id='bottom-spacer' ></Box>
        </Box>

      </Box>

    </Box>
  )
}

const ShowcaseSection = () => {

  return(
    <Box id='showcase-container' >
      <Box id='showcaseTitle-container' >
        Showcase
      </Box>

      {/* line */}
      
      <Box id='section-line'></Box>
      


      <Box id='showcaseTile-container' >

        <Box id='showTile-inner'>
          {
            Object.keys(showcaseData).map(key => {
              const info = showcaseData[key]
              return(
                <Tile key={key}
                label={info.title}
                image={info.imagepath}
                />
              )
            })
          }

          <Box id='bottom-spacer' ></Box>
        </Box>

      </Box>

    </Box>
  )
}


export default function App() {
  return (
    <Box id='homepage-container'>
      
      <ProjectSection />
      <ShowcaseSection />


    </Box>
  );
}
