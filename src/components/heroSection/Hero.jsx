import React from "react";
import NumbrtCounter from "number-counter";

import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          />
          <span>The Best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your body to fullest.
            </span>
          </div>
        </div>
        {/* figure */}
        <div className="figures">
          <div>
            <span>
              <NumbrtCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumbrtCounter end={473} start={300} delay="4" preFix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <NumbrtCounter end={30} start={0} delay="4" preFix="+" />
            </span>
            <span>Programs</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-img" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-img_back"
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
        />

        <motion.div
          className="calories"
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Birned</span>
            <span>200 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
