import React from "react";
import { Link } from "react-router-dom";

function Contactinfo() {
  return (
    <section id="contactInfo">
      <div className="container">
        <div className="contact__inner">
          <div>
            <p>Let's create something new</p>
            <h3>
              Let's Get In
              <br />
              Touch
            </h3>
            <Link to="/contact" className="contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contactinfo;