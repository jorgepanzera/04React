function Post({ img, postDate, user, likes, message, comments }) {

    img = "../assets/img/" + img
    let myDate = Date(postDate[0],postDate[1], postDate[2,postDate[3],postDate[4]])

    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src=`../assets/img${img}` className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user || "default title"}</h5>
          <p className="card-text">{message}</p>
        </div>
      </div>
    );
  }
  
  export default Post;
  

  