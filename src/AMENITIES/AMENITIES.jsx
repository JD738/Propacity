import React from 'react'
import one from '../Images/Rectangle 72.jpg'
import two from '../Images/Rectangle 73.jpg'
import three from '../Images/Rectangle 74.jpg'
import four from '../Images/Rectangle 75.jpg'
import './amenities.css'
function AMENITIES() {
    return (
        <div className="wrap">
        <div className='Amenities'>
            <div className="upp">
                <p id='advan'>THE ADVANTAGES</p>
                <h1 id='Ame'>AMENITIES</h1>
            </div>
            <div className="advan">
                <div className="one">
                    <p className='num'>1</p>
                    <p className='head'>TOP CLASS CLUB & FACILITIES</p>
                    <img src={one} alt="" />
                    <p className='data'>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.</p>
                </div>
                <div className="onee">
                    <p className='num'>2</p>
                    <p className='head'>Tower Exclusive Amenities & Facilities</p>
                    <img src={two} alt="" />
                    <p className='data'>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.</p>
                </div>
                <div className="one">
                    <p className='num'>3</p>
                    <p className='head'>Recreational Amenities & Facilities</p>
                    <img src={three} alt="" />
                    <p className='data'>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.</p>
                </div>
                <div className="onee">
                    <p className='num'>4</p>
                    <p className='head'>Multipurpose  Games Room</p>
                    <img src={four} alt="" />
                    <p className='data'>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default AMENITIES