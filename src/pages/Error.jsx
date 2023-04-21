import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleClick = () => [navigate("/")];

  return (
    <div className="App">
      <div className="container mx-auto text-center mt-5">
        <h1>Ooops Seems this page doesnt exists...</h1>
        <button type="button" class="btn btn-info mt-3" onClick={handleClick}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Error;
