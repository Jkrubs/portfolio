import { motion } from "framer-motion";
import Stairs from "./Stairs";

import "./Transition.css";

const Transition = () => {
  return (
    <>
      <motion.div
        className="stairs-wrapper"
      >
        <Stairs />
      </motion.div>

      <motion.div
        className="transition-bg"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      />
    </>
  );
};

export default Transition;
