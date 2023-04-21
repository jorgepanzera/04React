import { useNavigate } from "react-router-dom"


function Error() {

    const navigate = useNavigate()

return (
    <div className="App">
      <div className="container mx-auto text-center mt-5">
        <h1>Ooops Seems this page doesnt exists...</h1>
        <button className="btn" onClick={navigate("/")}>Go to Home Page</button>
      </div>
    </div>
  );
}

export default Error