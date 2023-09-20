import React from 'react'
import './search.css'
function Search() {
  return (
    <div className='wrap'>
      <div className="sea">

          <div className="Search">
            <p id='confi'>Search Your configuration</p>
          </div>
          <div className="inns">
          <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder='Location '/>
            <i class="fa-solid fa-house"></i>
            <input type="text" placeholder='Property Type' />
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <input type="text" placeholder='Budget'/>
            <i class="fa-solid fa-magnifying-glass" id='magnify'></i>

          </div>
      </div>

    </div>
  )
}

export default Search