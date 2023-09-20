import React from 'react'
import './last.css'
import lastlogo from '../Images/Untitled-3 1.png'
function Last() {
  return (
    <div className="wrap">
    <div className='last'>
        <div className="call">
            <p id='call'>Call Us</p>
            <i class="fa-solid fa-phone-volume" id='callicon'></i>
            <div className="number">
                <p id='plus'>+ 022</p>
                <p id='remain'>506 47538</p>
            </div>
        </div>
        <div className="links">
        <i class="fa-brands fa-twitter" id='twit'></i>
        <i class="fa-brands fa-facebook-f" id='face'></i>
        <i class="fa-brands fa-instagram" id='insta'></i>
        </div>
        <img src={lastlogo} alt="" />
        <div className="end">
        <p id='year'> © 2023</p>        
        <p id='rights'> Piramal.</p>
        <p id='all'> ALL RIGHTS RESERVED.</p>
        </div>
    </div>
    </div>
  )
}

export default Last