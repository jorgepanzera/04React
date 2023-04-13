function Login({onLoginComplete}) {

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log("login")
    }

    return (
      <div className="simple-login-container form-group text-center mt-4">
        <h2>Login to Three Pics</h2>
        <div className="row my-2">
          <div className="col-md-12 form-outline">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12 form-outline">
            <input type="password" placeholder="Password" className="form-control" />
        </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-12 form-outline">
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
            </div>
        </div>
      </div>
    );

  }
  
  export default Login;