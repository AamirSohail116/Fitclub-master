import React, { useState } from "react";

import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuopened] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenuopened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu" onClick={() => setMenuopened(false)}>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
}

export default Header;
