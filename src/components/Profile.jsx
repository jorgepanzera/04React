

function Profile({avatar, username, bio, onExitApp }) {

    return (
      <div className="container text-center mx-auto mt-3">
        <img src={avatar} className="image-profile mx-auto" alt="" />
        <p className="text-center pt-2 fw-bold col-12 col-md-9 col-xl-6 mx-auto">@{username}</p>
        <h6 className="text-center pt-2 col-12 col-md-9 col-xl-6 mx-auto"> {bio} </h6>
        <button type="button" className="btn btn-danger mt-3 btn-lg " onClick={onExitApp}>Exit</button>
      </div>
    );
  }

export default Profile
  