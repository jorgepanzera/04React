import {getToken} from '../services/userServices'
import { useState } from 'react'

function Login({onLoginComplete}) {


    // State
    const [error, setError] = useState(false)

    const handleSubmit = async (event) => {
      event.preventDefault()

      const userInput = document.getElementById("user-input")
      const passInput = document.getElementById("pass-input")
    
      let username = userInput.value
      let password = passInput.value

      console.log(`handleSubmit username ${username} password ${password}`)
      
      if (await getToken(username,password)) {
        console.log("login complete true")
        onLoginComplete(true)
      } else {
        setError(true)
      }
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
        {error && <div className="text-danger mt-3">Invalid username or password</div>}
      </div>
      
    );

  }
  
  export default Login;