import { Box } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import {Link} from 'react-router-dom';


const MenuToggle = ({ setOpen, open, toggleMenu, navSize }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div id='toggle-body'
      style={{
        width: navSize,
        height: navSize,
      }}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      onClick={() => {
        setOpen(!open);
        toggleMenu();
      }}
    >
      <motion.div id='toggle-rollover'
        initial={{ left: "-100%" }}
        animate={{ left: hovering ? 0 : "-100%" }}
      ></motion.div>
      <Hamburger toggled={open} toggle={setOpen} color="white" />
    </motion.div>
  );
};

const Navitem = ({ label,path }) => {
  const [hovering, setHovering] = useState(false);

  const itemVariant = {
    showing: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  };

  return (
    <Link to={path? path:'#'} >
    <motion.div id='navitem-body'
      variants={itemVariant}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div id='navitem-rollover'
        animate={{ left: hovering ? 0 : "-100%" }}
      ></motion.div>

      <Box id='navitem-label'>
        {label}
      </Box>
    </motion.div>
    </Link>
  );
};

const Menu = () => {
  const menuVariant = {
    showing: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 1
    }
  };
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "20%",
        left: "-170px"
      }}
      variants={menuVariant}
      initial="hidden"
      animate="showing"
    >
      <Navitem label="Home" path='/' />
      <Navitem label="About" path='/about' />
      <Navitem label="Contact" path='/contact' />
    </motion.div>
  );
};

const FullMenu = () => {
  const navSize = 60;

  const [isopen, setIsopen] = useState(false);
  const [showMenu, setShowmenu] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      setTimeout(() => {
        setShowmenu(true);
      }, 500);
    } else {
      setShowmenu(false);
    }
  };

  return (
    <motion.div
      style={{
        backgroundColor: "#f87e7e",
        position: "relative",
        width: navSize,
        height: navSize,
        borderRadius: navSize / 2
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          borderRadius: navSize / 2
        }}
      >
        <MenuToggle
          setOpen={setIsopen}
          open={isopen}
          toggleMenu={toggleMenu}
          navSize={navSize}
        />
      </Box>

      {showMenu && <Menu showMenu={showMenu} />}
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <Box id='navbar-body' >
      <div style={{
        width:'15%'
      }} ></div>
      <Box id='logo-container'>
        Chris Munoz
      </Box>

      <Box id='navbutton-holder' >
        <FullMenu />
        {/* <div style={{
          width:'15%',
          height:'100%',
          backgroundColor:'orange'
        }} ></div> */}
      </Box>
    </Box>
  );
};

export default Navbar;
