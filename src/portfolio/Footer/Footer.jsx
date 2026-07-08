import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="aa1">
          <h1>CONTACT</h1>
        </div>
        <p className='pp'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
 <br /><br /><br />
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="inputs">
            <label className="field">
              <span className="hint">ENTER YOUR NAME*</span>
              <input type="text" name="name" />
              <div className="decor" />
            </label>

            <label className="field">
              <span className="hint">ENTER YOUR EMAIL*</span>
              <input type="email" name="email" />
              <div className="decor" />
            </label>

            <label className="field">
              <span className="hint">PHONE NUMBER</span>
              <input type="tel" name="phone" />
              <div className="decor" />
            </label>

            <label className="field textarea">
              <span className="hint">YOUR MESSAGE*</span>
              <textarea name="message" rows="5" />
              <div className="decor large" />
            </label>
          </div>

          <div className="submit-row">
            <div className="bar" />
            <button className="submit-btn" type="submit">SUBMIT</button>
            <div className="bar" />
          </div>
        </form>
      </div>

      <div className="dark-footer">
        <div className="footer-content">
          <a href="#top" className="back-to-top"> 
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1v12M1 8l7-7 7 7" stroke="#fff" stroke Width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>BACK TO TOP</span>
          </a>
          
          <div className="social-icons">
            <a href="https://t.me/MaxCondor1#" className="social-link" aria-label="Facebook">T</a>
            <a href="https://www.instagram.com/1max.condor1?igsh=MXZ0dDduNTZsNXc1Zw==" className="social-link" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/1max.condor1?igsh=MXZ0dDduNTZsNXc1Zw==" className="social-link" aria-label="Instagram">@</a>
            <a href="mailto:mahkamjon834@gmail.com" className="social-link" aria-label="Email">✉</a>
          </div>
          
          <p className="copyright">@2020 Tomasz Gąpta All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer