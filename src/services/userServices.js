import axios from "axios";
import data from "../data/profiles.json";

export async function getToken(username, password) {
  try {

    console.log("entre getToken")

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
    }
    return false;
  } catch (error) {
    return(false)
  }
}

export function getProfile() {
  return data;
}
