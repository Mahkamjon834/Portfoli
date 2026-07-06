import React from 'react'
import './Navbar.css'
import photo from '../../assets/Group.png'
import men from '../../assets/image.png'


function Navbar() {
  return (
    <div className="navbar">
      <div className="nav1">
        <div className="img1">
          <img className="img" src={photo} alt="Profile" />
        </div>

        <div className="hero-text">
          <h1 className="hi">Hi, I am</h1>
          <h1 className="tom">Abdurashidov Mahkamjon</h1>
          <p className="er">Front-end Developer / Becent Developer</p>

          <div className="btn">
            <button className="btn1"><a href="https://vercel.com/mahkamjon"><img className='btn1img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPzMiwS3pPZBf9ILSrW1Zkq81YVOvb8QCotnELPg_DapuHj2hH-CPBP5O&s=10" alt="" /></a></button>
            <button className="btn2"><a href="https://github.com/Mahkamjon834"><img className='btn2img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLyiYI6toDd8wc_g3Sk_iHP__XQAd-hrFslE2QIQOVQ&s=10" alt="" /></a></button>
            <button className="btn3"><a href="https://t.me/MaxCondor1"> <img className='btn3img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UmS2-rJg895YZ0u9jl0el7oD8LRqO4sF1kGxkJzwvQ&s=10" alt="" /></a></button>
          </div>
        </div>
      </div>

      <div className="nav2">
        <div className="text">
          <span className="nav-item">About me</span>
          <span className="nav-item">Skills</span>
          <span className="nav-item">Portfolio</span>
          <button className="contact-btn">CONTACT ME</button>
        </div><br /> 
        <div className="img2">
          <img className="imga" src={men} alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
