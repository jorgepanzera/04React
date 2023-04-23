import axios from "axios";

//import data from "../data/posts.json"


// 3 segundos de demora
/*
export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.posts);
    }, 3000);
  });
}*/

export async function getPosts() {
  
  const token = localStorage.getItem("myThreePicsToken");

  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  try {
    const response = await axios.get(
      `https://three-points.herokuapp.com/api/posts`,
      { headers: headers }
    );

    return response.data;

  } catch (error) {
    throw(error)
  }

}


export async function incrementLikes(postId) { 

  const token = localStorage.getItem("myThreePicsToken");

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-type": "application/json"
  };

  try {

    //console.log(headers)

    const response = await axios.post(
      `https://three-points.herokuapp.com/api/posts/${postId}/like`, {},
      { headers: headers }
    );

    //console.log(response)
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 && localStorage.getItem("myThreePicsToken")) {
        localStorage.removeItem("myThreePicsToken");
      }
    }
  }

}


/*
Igual pero con fetch
export async function incrementLikes(postId) {

  const token = localStorage.getItem("myThreePicsToken");

  console.log(token)
  console.log(postId)

  try {

    const response = await fetch(`https://three-points.herokuapp.com/api/posts/${postId}/like`, {
     
    // Adding method type
    method: "POST",
    
    // Adding body or contents to send
    body: JSON.stringify({}),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json", "Authorization": `Bearer ${token}`
    }
    })
    
    console.log(response)
    return response.json

  } catch (error) {
    console.log(error)
  }
  
  
}
*/

