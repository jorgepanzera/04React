function Login({onLoginComplete}) {

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log("login")
    }

    return (
      <div className="container form-outline mt-2">
        <h2>Login Form</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" placeholder="Password" className="form-control" />
        </div>
        </div>
        <div className="row">
            <div className="col-md-12 form-group">
                <input type="submit" className="btn btn-block btn-login" placeholder="Login" onSubmit={handleSubmit} />
            </div>
        </div>
      </div>
    );

  }
  
  export default Login;