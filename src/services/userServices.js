import axios from "axios";
import data from "../data/profiles.json";

export async function getToken(username, password) {
  try {

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    };


    const response = await axios.post(
      "https://three-points.herokuapp.com/api/login",
      `{"username":"${username}", "password":"${password}"}`,
      { headers: headers }
    );
    
    if (response.data.token) {
      localStorage.setItem("myThreePicsToken", response.data.token);
      return true;
    } else {
      return false;
    }
    
  } catch (error) {
    return(false)
  }
}

/* Usuario creado desde Postman password P4ssW0rd!#
{
    "avatar": "https://res.cloudinary.com/dvjb4do4c/image/upload/v1681516447/three-points/redzzjuwnqfchrve6fro.png",
    "username": "@jorge.panzera",
    "bio": "Hello World",
    "name": "Jorge Panzera",
    "createdAt": "2023-04-14T23:54:08.284Z",
    "updatedAt": "2023-04-14T23:54:08.284Z",
    "id": "6439e7a097549600147adffd"
}
*/


export function getProfile() {
  console.log(getPayload(localStorage.getItem("myThreePicsToken")))
  return data;
}


// Obtener el Payload del token para obtener el user id (sub)
//{sub: '6136944fcd79ba24707e2f82', exp: 1681521250, iat: 1681517650}
function getPayload(token) {
  if (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }
}