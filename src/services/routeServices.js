import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

const ProtectedRoute = ({ children, user }) => {
    if (!user) {
        navigate("/login")
    }
    return children;
};
  
 export default ProtectedRoute;