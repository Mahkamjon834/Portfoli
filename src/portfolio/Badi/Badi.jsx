import React from 'react'
import './Badi.css'
import sepa from '../../assets/sepa.png'
import html from '../../assets/Groupp.png'
import css from '../../assets/Groupo.png'
import sass from '../../assets/Vector.png'
import js from '../../assets/Groupj.png'
import react from '../../assets/Groupr.png'
import boots from '../../assets/bootstrap.png'
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'
import jess from '../../assets/js.png'
import dilfin from '../../assets/dilfin.png'
import barg from '../../assets/barg.png'
import ts from '../../assets/ts.png'
import amerika from '../../assets/imageq.png'
import ispan from '../../assets/ispan.png'
import caa from '../../assets/caa.png'
import c from '../../assets/ccc.png'
function Badi() {
  return (
    <section className="about-section">
      <div className="about-header">
        <div className="about-title-box">
          <h1>ABOUT ME</h1>
        </div>

        <p className="about-text">
          Men frontend dasturchiman. Foydalanuvchi uchun qulay, tez va zamonaviy veb-ilovalar yaratishga ixtisoslashganman.
          Dizayn, texnologiya va funksionallikni bir joyga jamlab, har bir loyihani aniq maqsadga yo‘naltirgan holda rivojlantiraman.
        </p>

        <div className="explore-row">
          <span className="line" />
          <button className="explore-button">EXPLORE</button>
          <span className="line" />
        </div><br />

        <img src={sepa} alt="separator" className="about-sepa" />
      </div>

        <div className="containers">
          <div className="design">
            <h2>DESIGN</h2>
            <p>Toza, estetik va intuitiv interfeyslar yarataman. <br /> UI/UX tamoyillariga asoslangan dizaynlar bilan foydalanuvchi tajribasini yaxshilayman.</p>
          </div>

          <div className="development">
            <h2>DEVELOPMENT</h2>
            <p>React, JavaScript va modern CSS yordamida tezkor, moslashuvchan va yuqori samarali web-ilovalar qura olaman.</p>
          </div>
        </div> <br /><br />
        <div className="maintenance">
          <h2>MAINTENANCE</h2>
          <p>Loyihani ishga tushirgandan so‘ng ham uni yangilab boraman, xatolarni tuzataraman va ishlashini yanada samarali qilaman.</p>
        </div>  <br /><br /><br /><br />

        <img src={sepa} alt="separator" className="about-sepa1" />
<br /><br /><br /><br /><br />

        <div className="about-title-box1">
          <h1>SKILLS</h1>
        </div>

        <div className="skills">
          <h1 className='now'>USING NOW</h1>
          <div className="div1"><br /><br /><br />
              <img className='' src={html} alt="" />
              <img className='css' src={css} alt="" />
              <img className='sass' src={sass} alt="" />
              <img className='js' src={js} alt="" />
          </div>
          <div className="div2">
              <img className='' src={react} alt="" />
              <img className='css' src={boots} alt="" />
              <img className='sass' src={git} alt="" />
              <img className='js' src={figma} alt="" />
          </div>
        </div>

        <div className="learning"><br /><br /><br /><br /><br /><br /><br />
          <h1 className='now'>LEARNING:</h1>
              <div className="div1"><br /><br /><br /><br /><br /><br />
              <img className='' src={jess} alt="" />
              <img className='css' src={dilfin} alt="" />
              <img className='sass' src={barg} alt="" />
              <img className='js' src={ts} alt="" />
              </div>
        </div>


        <div className="other">
            <h1 className='now'>OTHER SKILLS::</h1>
              <div className="div11"><br /><br /><br /><br />
              <span className=''><img className='' src={amerika} alt="" /> <h1 className='op'>ANGIELSKI <br /> C1/C2</h1></span>
              <span className='s1'><img className='css' src={ispan} alt="" /> <h1 className='op'>HISZPAŃSKI <br />B1/B2</h1></span>
              <span className='s2'><img className='sass' src={caa} alt="" /> <h1 className='op'>C + +</h1></span>
              <span className='s3'><img className='js' src={c} alt="" /> <h1 className='op'>c</h1></span>

              </div>
        </div>
    </section>
  )
}

export default Badi