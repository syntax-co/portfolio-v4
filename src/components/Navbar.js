import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger, Rotate } from "hamburger-react";
import {Link} from 'react-router-dom';


const NavButton = ({open,setOpen}) => {


  return(
    <Box sx={{
      position:'absolute',
      zIndex:1,
      right:'20px',
      top:'20px'
    }}>
      <Hamburger toggled={open} toggle={setOpen} />
    </Box>
  )
}

const Menu = () => {


  return(
    <Box>
      
    </Box>
  )
}

const NavMenu = () => {
  const [hovering,setHovering] = useState(false);
  const [open,setOpen] = useState(false);
  const [backgroundsize,setBackgroundsize] = useState(0);
  const [windowdim,setWindowdim] = useState([0,0]);
  const [backangle,setBackangle] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const angle = Math.atan(windowWidth/windowHeight)*(180/Math.PI)
    
    const hypot = Math.round(Math.sqrt((windowWidth**2)+(windowHeight**2)))+500
    setBackgroundsize(hypot);
    setWindowdim([windowWidth,windowHeight]);
    setBackangle(angle);

  },[])


  return(
    <motion.div id='menu-body'
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
    >
      <NavButton open={open} setOpen={setOpen} />
      
      <motion.div id='menu-background' 
        style={{
          cursor:'pointer',
          rotate:`${backangle}deg`,
          height:backgroundsize, 
          width:backgroundsize,
          // translate:'900px -1470px'
          translate:`${backgroundsize-400}px -${windowdim[1]}px`
        }}
        animate={{
          right:'-20vw',
          top:'-40vh',
          translateX:open? `-${windowdim[0]}px`:hovering? '-50px':0,
          translateY:open? `${windowdim[1]-100}px`:0,
          transition:{
            duration:.25
          }
        }}
        
        
      ></motion.div>





    </motion.div>
  )
}

const Navbar = () => {
  return (
    <Box id='navbar-body' >
      <div style={{
        width:'15%'
      }} ></div>
      <Box id='logo-container'>
        Chris Munoz
      </Box>

      
        <NavMenu />
        
      
    </Box>
  );
};

export default Navbar;
