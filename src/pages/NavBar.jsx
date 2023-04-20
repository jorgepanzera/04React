function NavBar({loginOK}) {

    const logo = require('../assets/images/3picslogo.PNG')

    const handleLogoClick = () => {

    }

    const handleProfileClick = () => [

    ]

    if (loginOK) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="nabvar-left">
              <img src={logo} alt="" className="image-responsive" onClick={handleLogoClick} /> 
            </div>
            <div className="nabvar-right">
              <span className="fa-solid fa-user" onClick={handleProfileClick}></span>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="nabvar-left">
              <img src={logo} alt="" className="image-responsive" onClick={handleLogoClick} /> 
            </div>
          </div>
        </nav>
      );
    }

  }
  
  export default NavBar;