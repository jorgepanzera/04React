


function Post({ img, age, user, likes, message, comments }) {

    const image = require('../assets/images/' + img)
    age = age + " ago"
    user = "@" + user
    comments = "(" + comments + ")"

   console.log(img)
   console.log(image)

    return (
      <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 d-flex">
        <div class="card">

          <img src={image} class="card-img-top" alt="..." />

          <div class="card-body">

            <div class="d-flex flex-row">
              <div class="col-6 justify-content-start">
                <p class="text-muted">{age}</p>
                <p class="fw-bold">{user}</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <div>
                  <button class="likes-button pb-1 pt-1">
                    <span class="fa fa-heart">  </span> {likes}k
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            
            <p class="card-text fw-normal mt-2">{message}</p>

            <div class="row d-flex">
              <div class="col-9 justify-content-start align-items-center">
                <div class="d-flex">
                  <span class="fa fa-comment"> </span>
                  <p class="text-muted mx-2">Comments {comments}</p>
                </div>
              </div>
            </div>  


          </div> 
        </div>
      </div>
    );
  }
  
  
  

    
      

        
   
      

   


  export default Post;
  

  