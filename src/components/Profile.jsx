
function Profile({avatar, username, bio }) {

    return (
      <div className="container text-center mx-auto mt-3">
        <img src={avatar} className="image-profile mx-auto" alt="" />
        <p className="text-center pt-2 fw-bold col-12 col-md-9 col-xl-6 mx-auto">@{username}</p>
        <h6 className="text-center pt-2 col-12 col-md-9 col-xl-6 mx-auto"> {bio} </h6>
      </div>
    );
  }

export default Profile
  