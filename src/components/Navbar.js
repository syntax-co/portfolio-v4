import { Box } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const MenuToggle = ({ setOpen, open, toggleMenu, navSize }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      style={{
        width: navSize,
        height: navSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: 0
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
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#2FE6DE"
        }}
        initial={{ left: "-100%" }}
        animate={{ left: hovering ? 0 : "-100%" }}
      ></motion.div>
      <Hamburger toggled={open} toggle={setOpen} color="white" />
    </motion.div>
  );
};

const Navitem = ({ label }) => {
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
    <motion.div
      style={{
        width: "150px",
        height: "35px",
        fontSize: "25px",
        cursor: "pointer",
        backgroundColor: "#f87e7e",
        borderRadius: "25px",
        marginBottom: "15px",
        position: "relative",
        overflow: "hidden"
      }}
      variants={itemVariant}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#2FE6DE"
        }}
        animate={{ left: hovering ? 0 : "-100%" }}
      ></motion.div>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          fontFamily:'quicksand'
        }}
      >
        {label}
      </Box>
    </motion.div>
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
      <Navitem label="Home" />
      <Navitem label="About" />
      <Navitem label="Contact" />
    </motion.div>
  );
};

const FullMenu = () => {
  const navSize = 70;

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
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{
        width:'10%'
      }} >

      </div>
      <Box
        sx={{
          color: "white",
          fontSize: "25px",
        }}
      >
        Chris Munoz
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 24,
          height: "70px",
          width: "70px"
        }}
      >
        <FullMenu />
      </Box>
    </Box>
  );
};

export default Navbar;
