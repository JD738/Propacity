import React from 'react'
import './key.css'
import Gym from '../Images/image 2.jpg'
function Service() {
    return (
        <div className="wrap">
        <div className='pages'>
            <div className='services'>
                <p id='A'>ARANYA’S SERVICES</p>
                <h1 id='ES' >30+ PREMIUM AMENTIES</h1>
            </div>
            <div className="key">
                <div className="line1">
                    <div className="q">
                        <div><i class="fa-solid fa-phone-volume"></i></div>
                        <div>
                            <h3>RECEPTION</h3>
                            <p>6 area for receptionist serve 24/7</p>
                        </div>
                    </div>
                    <div className="q">
                        <div><i class="fa-solid fa-shield"></i></div>
                        <div>
                            <h3>SECURITY</h3>
                            <p>Security team with 24/7 camera system</p>
                        </div>
                    </div>
                    <div className="q">
                    <div><i class="fa-solid fa-bell"></i></div>
                    <div>
                        <h3>FIRE ALARM</h3>
                        <p>Automatic fire extinguishing system</p>
                    </div>
                    </div>
            
                    
                </div>
                <div className="line2">
                    <div className="q">
                    <div><i class="fa-solid fa-car"></i></div>
                    <div>
                        <h3>PARKING</h3>
                        <p>Parking area with extra capacity</p>
                    </div>
                    </div>
                   <div className="q">
                   <div><i class="fa-regular fa-handshake"></i></div>
                    <div>
                        <h3>CONFERENCE ROOM</h3>
                        <p>5 conference room setup in each block</p>
                    </div>
                   </div>
                   <div className="q">
                   <div><i class="fa-solid fa-fan"></i></div>
                    <div>
                        <h3>CONDITIONING</h3>
                        <p>ensure ventilation and air conditioning</p>
                    </div>
                   </div>
                      
                </div>
                <div className="line3">
                    <div className="q">
                    <div><i class="fa-solid fa-cart-shopping"></i></div>
                    <div>
                        <h3>SUPERMARKET</h3>
                        <p>5 supermarket in each block</p>
                    </div>
                    </div>
                    <div className="q">
                    <div><i class="fa-solid fa-spa"></i></div>
                    <div>
                        <h3>SPA AND MASSAGE</h3>
                        <p>Spa and Massage service for better health</p>
                    </div> 
                    </div>
                    <div className="q">
                    <div><i class="fa-solid fa-person-swimming"></i></div>
                    <div>
                        <h3>4 SEASON POOL</h3>
                        <p>5 star indoor swimming 4 seasons </p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='gymimg'>
                <img src={Gym} alt="" id='gym'/>
            </div>
        </div>
        </div>
    )
}

export default Service