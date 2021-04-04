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
                Controla todos los dispositivos de tu casa desde donde quieras
                con <span className="main-text-bold">Monitorear</span>. Lleva la
                trazabilidad de sensores de temperatura, humedad, niveles de CO
                <sub>2</sub>, movimiento, entre muchos más. Dispara alertas por
                Telegram o WhatsApp al instante.
              </p>
              <button className="btn btn1">Quiero saber más!</button>
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
