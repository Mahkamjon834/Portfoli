import React from 'react'
import './Navbar.css'
import photo from '../../assets/Group.png';
function Navbar() {
  return (
    <>
      <div className="navbar">

        <div className="nav1">
          <div className='img1'>
            <img className='img' src={photo} alt="" />
          </div><br /><br /><br /><br />
          <h1 className='hi'>Hi, I am</h1>
          <h1 className='tom'>Tomasz Gajda</h1>
          <h1 className='er'>Front-end Developer / UI Designer</h1>
          <br /><br /><br />
          <div className="btn">
            <button className='btn1'></button>
            <button className='btn2'></button>
            <button className='btn3'></button>
          </div>
        </div>

        <div className="nav2">
          <div className='text'>
            <h1 className='h1'>About me</h1>
            <h1 className='h1'>Skills</h1>
            <h1 className='h1'>Portfolio</h1>
            <button>CONTACT ME</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
