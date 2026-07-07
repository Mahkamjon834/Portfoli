import './Portfoli.css'
import to from '../../assets/too.png'
import project from '../../assets/Projectt.png'
import rec from '../../assets/Rec.png'
import projectt from '../../assets/Project.png'
function Portfoli() {

  return (
    <>
      <div className="portfoli">
         <div className="to"><br /><br /><br /><br /><br /><br />
          <div className="about-title-box1">
          < h1>PORTFOLI</h1>
          </div>
         </div> 
 
           <div className="all">
              <h1 className='qw'>ALL</h1>
              <h1 className='qw'>CODED</h1>
              <h1 className='qw'>DESIGNED</h1>
           </div>


           <div className="project">
                <div className="project1">
                     <a href=""><img src={project} alt="" /></a>
                     <a href=""><img src={rec} alt="" /></a>
                     <a href=""><img src={projectt} alt="" /></a>
                </div>
                <div className="project2">
                     <a href=""><img src={rec} alt="" /></a>
                     <a href=""><img src={projectt} alt="" /></a>
                     <a href=""><img src={project} alt="" /></a>
                </div>
           </div>
      </div>
    </>
  )
}

export default Portfoli
