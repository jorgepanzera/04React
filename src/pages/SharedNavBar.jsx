import { Outlet } from "react-router-dom";
import {NavBar} from "./NavBar"


function SharedNavBar({loginOK}) {
    return (
        <>
          <NavBar loginOK={loginOK} />
          <Outlet />
        </>
      );
}

export default SharedNavBar