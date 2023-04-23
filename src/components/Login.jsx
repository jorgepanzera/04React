import {getToken} from '../services/userServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({onLoginComplete, setCurrentUser}) {


    // State
    const [error, setError] = useState(false)

    
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
      event.preventDefault()

      const userInput = document.getElementById("user-input")
      const passInput = document.getElementById("pass-input")

    
      let username = userInput.value
      let password = passInput.value
      
      getToken(username, password)
        .then((data) => { 
          localStorage.setItem("myThreePicsToken", data.token);
          setCurrentUser(username)        
          onLoginComplete(true)
          navigate("/")
        })
        .catch(error => { 
            setError(true) 
        })

      /*  
      if (await getToken(username,password)) {
        setCurrentUser(username)        
        onLoginComplete(true)
        navigate("/")
      } else {
        setError(true)
      }
      */

     }

    return (
      <div className="simple-login-container form-group text-center mt-4">
        <h2>Login to Three Pics</h2>
        <div className="row my-2">
          <div className="col-md-12 form-outline">
            <input id="user-input" type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12 form-outline">
            <input id="pass-input" type="password" placeholder="Password" className="form-control" />
        </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-12 form-outline">
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
            </div>
        </div>
        {error && <div className="text-danger fw-bold fs-5 login-error-back mt-3">Invalid username or password</div>}
      </div>
      
    );

  }
  
  export default Login;