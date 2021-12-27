import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className="question"
      style={{
        borderLeft: "5px solid #fff600",

        padding: "0px",
      }}
      onClick={() => setToggle(!toggle)}
    >
      <motion.div layout>
        <motion.h4 layout style={{ paddingLeft: "2rem" }}>
          {title}
        </motion.h4>
        {toggle ? children : ""}
      </motion.div>
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
