import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { BaseStyles } from "@styles/base";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "@context/global";
import { lightTheme, darkTheme } from "@styles/themes";

// Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

// Default page transition animation
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Layout = ({ children }) => {
  const [state] = useGlobalContext();
  const { theme } = state;

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BaseStyles />

      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <AnimatePresence>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
