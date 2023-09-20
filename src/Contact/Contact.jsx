import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'
function Contact() {
    const data={
        name:"",
        mobile:"",
        email:""
    }
    const[inputData,setInputdata]=useState(data)
    const handledata=(e)=> {
        setInputdata({...inputData,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=> {
        e.preventDefault();
        axios.post("https://sheetdb.io/api/v1/25i59zi84vrzv",inputData)
        axios.post("https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead",inputData)
        .then((res)=>console.log(res))

    }
  return (
    <div className="wrap">
    <div className='Contact'>
        <div className="form">
            <h1 id='us'>CONTACT US</h1>
            <p id='enter'>Please enter details below and we shall get <br />in touch with you shortly</p>
            <div className="input">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder=' Full Name' className='text' name='name' value={inputData.name} onChange={handledata}/>
            <i class="fa-solid fa-mobile"></i>
            <input type="text" placeholder='Contact number' className='text' name='mobile' value={inputData.mobile} onChange={handledata}/>
            <i class="fa-solid fa-envelope"></i>
            <input type="text" placeholder='Email Address' className='text' name='email' value={inputData.email} onChange={handledata}/>
            </div>
        </div>
        <button id='btn' onClick={handlesubmit}>SUBMIT</button>
       
    </div>
    </div>
  )
}

export default Contact