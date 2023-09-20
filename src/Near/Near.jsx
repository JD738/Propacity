import React from 'react'
import './near.css'
function Near() {
  return (
    <div className="wrap">
    <div className='near'>
        <div className="surr">
            <h1 id='spec'>SPECTACULAR SURROUNDINGS <br /> AS FAR AS THE EYE CAN SEE</h1>
            <p id='piramal'>Piramal Aranya is an ode to perfection. It balances <br />contemporary design with the scenic natural beauty of its <br />environment. Every residence invites you to soak in the <br />surroundings, from the endless greenery of Rani Baug on the <br /> western side and the shimmering Arabian Sea on the east. <br /> Avyan at Piramal Aranya will be home to something truly <br />spectacular with premium dual aspect living</p>
        </div>
        <div className="percentage">
            <div className="had">
                <p className='hadd'>66%</p>
                <p className='boto'> Botanical garden views</p>
            </div>
            <div className="had">
                <p className='hadd'>33%</p>
                <p className='boto'> Mumbai harbour and botanical garden views</p>
            </div>
            <div className="had">
                <p className='hadd'>66%</p>
                <p className='boto'> Mumbai harbour views</p>
            </div>
        </div>
        <hr />
        <div className="location">
            <div className="hood">
            <p id='location'>LOCATION</p>
            <h1 id='neig'>NEIGHBORHOOD</h1>
            </div>
            <div className="name">
                <div className="dot">   
                <div className='mb'>.</div>
                    <div className="dott">
                    <li className='list'>Bhau Daji Lad Museum</li>
                    <p className='away'>3.5 Km Away</p>
                    </div>
                   
                </div>
                <div className="dot">
                <div className='mb'>.</div>
                    <div className="dott">
                    <li className='list' id='st'>St. Paul’s Tamil Church</li>
                    <p className='away'>3.5 Km Away</p>
                    </div>
                    
                </div>
            </div>
            <div className="downmane">
            <div className="dot">
            <div className='mb'>.</div>
            <div className="dott">

                    <li className='list'>Magen David Synagogue</li>
                    <p className='away'>3.5 Km Away</p>
                    </div>
                </div>
                <div className="dot">
               <div className='mb'>.</div>
               <div className="dott">

                    <li className='list'>Byculla Club − Fire Temple</li>
                    <p className='away'>3.5 Km Away</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Near