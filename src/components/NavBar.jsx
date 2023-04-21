function NavBar({onLogoClick, onProfileClick, loginOK}) {

    const logo = require('../assets/images/3picslogo.PNG')

    if (loginOK) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="nabvar-left">
              <img src={logo} alt="" className="image-responsive" onClick={onLogoClick} /> 
            </div>
            <div className="nabvar-right">
              <span className="fa-solid fa-user" onClick={onProfileClick}></span>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="nabvar-left">
              <img src={logo} alt="" className="image-responsive" onClick={onLogoClick} /> 
            </div>
          </div>
        </nav>
      );
    }

  }
  
//  export default NavBar;