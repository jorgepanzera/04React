function Post({ title, img, description }) {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title || "default title"}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Post;
  