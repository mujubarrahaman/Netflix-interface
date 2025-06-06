import "../index.css"

import logo from '../assetsContent/logo.png'
import { useNavigate } from 'react-router-dom'
const LoginFail = () => {
  const navigate = useNavigate()

  function back(){
    if(true){
      navigate("/")
    }
  }
  return (
    <div className="fail_section">
      <section className='one'>

        <div className="section1 containersec">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="buttons">
            <p>Unlimited Tv shows & Movies</p>
            <button>Join Now</button>
            <button className="signin">Sign In</button>
          </div>
        </div>

      </section>

      <div className="fail_container">
        <div className="fail_box">

          <h1>Login Failed..</h1>
          <p>Oops! Incorrect email or password.</p>
          <button onClick={back}>Try Again</button>



        </div>
      </div>
    </div>


  )
}

export default LoginFail