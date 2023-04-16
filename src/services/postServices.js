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
    if (error.response) {
      if (error.response.status === 401 && localStorage.getItem("myThreePicsToken")) {
        localStorage.removeItem("myThreePicsToken");
      }
    }
  }

}

export async function incrementLikes(postId) { 

  const token = localStorage.getItem("myThreePicsToken");

  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  try {

    console.log(headers)

    const response = await axios.post(
      `https://three-points.herokuapp.com/api/posts/${postId}/like`,
      { headers: headers }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 && localStorage.getItem("myThreePicsToken")) {
        localStorage.removeItem("myThreePicsToken");
      }
    }
  }


}