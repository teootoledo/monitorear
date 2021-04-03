import React, { Component } from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100%",
  },
};

export default class Register extends Component {
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <h1>REGISTER</h1>
      </motion.div>
    );
  }
}
