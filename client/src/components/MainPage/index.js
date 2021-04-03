import React, { Component } from "react";
import { motion } from "framer-motion";

import room from "../../assets/Room.svg";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default class MainPage extends Component {
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div className="container header">
          <div className="row">
            <div className="col">
              <h1 className="main-title">
                Todos tus dispositivos conectados en un solo lugar.
              </h1>
              <p className="main-text mt-5">
                You can easily control all the dispositives in the house. Turn
                the lights on, watch your security cameras, and more with this
                incredible app.
              </p>
            </div>
            <div className="col">
              <img src={room} alt="Smart room" className="room-img" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
