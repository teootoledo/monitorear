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

export default class ContactUs extends Component {
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        className="contact"
      >
        <div className="contact-content">
          <h1 className="contact-title">Ponte en contacto con nosotros!</h1>
          <p className="contact-text">
            Recibirás una respuesta de nuestro servicio de atención al cliente
            lo antes posible. No olvides revisar tu casilla de correos.
          </p>
          <Formulario />
        </div>
      </motion.div>
    );
  }
}

class Formulario extends Component {
  state = {};
  render() {
    return (
      <form method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
