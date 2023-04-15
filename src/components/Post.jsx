import { getDateTimeDifference } from "../assets/js/utils"
import { useState } from "react"


function Post({ img, createdAt, author, likes, text, comments }) {

    // Preparar datos para el post
    let now = new Date()
    const postAge = getDateTimeDifference(now,createdAt)
    const age = `${postAge.cantidad} ${postAge.unidad} ago`
    let user = "@" + author
    comments = "(" + comments + ")"

    // state para el likes (debiera terminar actualizando una db a traves de una API)
    const [count, setCount] = useState(likes)

    // para gestionar los likes
    const handleLikes = () => {
      setCount(count+1)
    }

    return (
      <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 d-flex">
        <div className="card">

          <img src={img} className="card-img-top" alt="..." />

          <div className="card-body">

            <div className="d-flex flex-row">
              <div className="col-6 justify-content-start">
                <p className="text-muted">{age}</p>
                <p className="fw-bold">{user}</p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div>
                  <button className="likes-button pb-1 pt-1" onClick={handleLikes}>
                    <span className="fa fa-heart">  </span> {count}k
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            
            <p className="card-text fw-normal mt-2">{text}</p>

            <div className="row d-flex">
              <div className="col-9 justify-content-start align-items-center">
                <div className="d-flex">
                  <span className="fa fa-comment"> </span>
                  <p className="text-muted mx-2">Comments {comments}</p>
                </div>
              </div>
            </div>  


          </div> 
        </div>
      </div>
    );
  }
  
 export default Post;
  

  