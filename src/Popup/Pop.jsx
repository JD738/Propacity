import React from 'react'
import popleft from '../Images/F.jpg'
import './pop.css'
function Pop() {
  return (
    <div className="show">
    <div className='pop'>
        <div className='popleft'>
                <img src={popleft} alt=""  id='popl'/>
        </div>
        <div className="login">
            <h1 id='Book'>Book Site Tour</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name='Name' className='inna'/>
            <label htmlFor="name">Email</label>
            <input type="text" name='Email' className='inna' />
            <label htmlFor="name">Mobile</label>
            <input type="text" name='Mobile' className='inna' />
        <button id='booknow'>BOOK NOW</button>

        </div>
    </div>
    </div>
  )
}

export default Pop