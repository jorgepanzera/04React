function NavBar({onLogoClick, onProfileClick}) {

    const logo = require('../assets/images/3picslogo.PNG')

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="nabvar-left">
            <img src={logo} alt="" className="image-responsive" onClick={onLogoClick} /> 
          </div>
          <div class="nabvar-right">
            <span class="fa-solid fa-user" onClick={onProfileClick}></span>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;