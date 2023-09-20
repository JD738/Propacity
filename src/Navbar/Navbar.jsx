import React from "react";
import "./Navbar.css";
import Logo from "../Images/logo.png";
import circularname from '../Images/Vector.png'
import Pop from "../Popup/Pop";

// import arrow from '../Images/arr.png'
function Navbar() {
  return (
    <>
      

      <div className="Navbar">
        <div className="zz">
          <div className="left">
            <img src={Logo} alt="" id="logo" />
          </div>
          <div className="center">
            <li>HOME</li>
            <li>OVERVIEW</li>
            <li>AMENITIES</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
          </div>

            <div className="right">
              <button id="enquire">ENQUIRE NOW</button>
            </div>
        </div>
      </div>
      <div className="main">
        <span id="M">MUMBAI</span>
        <span id="P" >PROJECT</span>
        <span id="oo">ARANYA</span>
        <span id="I">Pirimal Groups</span>
      </div>
      <div className="cir">
      <img src={circularname} alt="" id="cirrrr" />
      </div>
      <Pop/>

    </>
  );
}

export default Navbar;
