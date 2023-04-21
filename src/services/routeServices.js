import { useNavigate } from "react-router-dom";
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect } from "react";


export const ProtectedRoute = ({ children, user }) => {
    const navigate = useNavigate()

    console.log(children)

    if (!user) {
        navigate("/login")
    }
    return children;
};
  

// para debuguear el React Router, se pone como Route principal encerrando todo lo que se quiere debuguear
// por eso tiene el Outlet, para poder ponerlo como componente que encierra otros
export const DebugLayout = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  useEffect(() => {
    console.log("The current URL is", {...location});
    console.log("The last navigation action was", navigationType);
  }, [location, navigationType]);

  return <Outlet />;
};