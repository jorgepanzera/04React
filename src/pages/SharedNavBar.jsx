import { Outlet } from "react-router-dom";
import {NavBar} from "./NavBar"


function SharedNavBar({loginOK}) {
    return (
        <>
          <Navbar loginOK={loginOK} />
          <Outlet />
        </>
      );
}