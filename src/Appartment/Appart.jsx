import React from "react";
import Rec1 from "../Images/Rectangle 124.jpg";
import Rec2 from "../Images/F.jpg";
import Rec3 from "../Images/Rectangle 125.jpg";
import Rec4 from "../Images/Rectangle 70.png";
import "./appart.css";
function Appart() {
    return (
        <div className="wrap">
        <div className="Appart">
            <div className="up">
                <div className="left">
                    <img src={Rec2} alt="" id="Rec2" />
                    <img src={Rec1} alt="" id="Rec1" />
                </div>
                <div className="right">
                    <p id="z">MUMBAI</p>
                    <p id="x">OUR APARTMENTS </p>
                    <p id="c">
                        Presenting Piramal Aranya, a high rise gated sanctuary that offers
                        luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness
                        technologies, dual-aspect blue and green views and a world-class
                        lifestyle crafted alongside the world’s leading partners at Rani
                        Baug, Byculla, South Mumbai.
                    </p>
                </div>
            </div>
            <div className="down">
                <div className="l">
                    <p id="z">2 BED EXCLUSIVE RESIDENCES</p>
                    <p id="x">2BHK - EAST WING</p>
                    <li>• All bedrooms with en-suite bathrooms</li>
                    <li>• Apartments with harbour views</li>
                    <li>• Master bedroom with corner windows offering panoramic views</li>
                    <li>• All shafts on the external face</li>
                    <li>• Kitchen with dry balcony</li>
                    <li>
                        • Ease of combining apartments to create exclusive wing apartment
                        with expansive living & dining area
                    </li>
                </div>
                <div className="r">
                    <img src={Rec4} alt="" id="Rec4" />
                    <img src={Rec3} alt="" id="Rec3" />
                </div>
            </div>
            <div className="Numbers">
                <div>
                    <h1>50+</h1>
                    <p>AMENITIES</p>
                </div>
                <div>
                    <h1>250</h1>
                    <p>APARTMENTS</p>
                </div>
                <div>
                    <h1 id="h">
                        9290 <p id="hp">SQ.MT</p>
                    </h1>
                    <p>RECEREATIONAL SPACE</p>
                </div>
                <div>
                    <h1>1200</h1>
                    <p>SLOT CAR PARKING</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Appart;
