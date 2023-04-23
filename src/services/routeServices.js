import { useNavigate } from "react-router-dom";


export const ProtectedRoute = ({ children, user }) => {
    const navigate = useNavigate()

    console.log(children)

    if (!user) {
        navigate("/login")
    }
    return children;
};
  

