import React, { useState } from "react";
import { motion } from "framer-motion";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonials.css";
const tLength = testimonialsData.length;

function Testimonial() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          transition={transition}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          key={selected}
          exit={{ opacity: 0, x: 100 }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          key={selected}
          exit={{ opacity: 0, x: 100 }}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              console.log(selected);
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
              console.log(selected);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
