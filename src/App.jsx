import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { getProfile } from "./services/profileServices";
import { getPosts } from "./services/postServices";

function App() {
  // State
  const [section, setSection] = useState("Normal");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loginOk, setLoginOk] = useState(false)

  // Obtener datos del profile
  let profileData = getProfile()
  console.log(profileData.avatar)
  const profileAvatar = require(`./assets/images/${profileData.avatar}`);

  // Verificar si ya tengo un token guardado
  let token = localStorage.getItem("myThreePicsToken")
  if (token){
    setLoginOk(true)
  }

  console.log(`App ${search}`);

  // UseEffect documentation
  // https://dmitripavlutin.com/react-useeffect-explanation/

  // Funciones que se usan desde componente NavBar
  const onLogoClick = () => {
    setSection("Normal");
  };

  const onProfileClick = () => {
    setSection("Profile");
  };

  // Funciones que se usan desde componente SearchBar
  const onSearch = (searchString) => {
    setSearch(searchString)
    const filtered = posts.filter(post => post.text.toUpperCase().includes(searchString.toUpperCase()))
    setFilteredPosts(filtered)
  };

  // Effect para cargar los posts a los 3 segundos y setLoading false
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setFilteredPosts(data)
      setLoading(false);
    });
  }, []);

  // Render condicional

  if (!loginOk) {
    <div className="App">
      <Login  />
    </div>
  }

  if (section === "Normal") {
    if (loading) {
      return (
        <div className="App">
          <div className="container mx-auto text-center mt-5">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
          <SearchBar value={search} onSearch={onSearch} />
          <PostList posts={filteredPosts} />
        </div>
      );
    }
  }

  if (section === "Profile") {
    return (
      <div className="App">
        <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
        <Profile avatar={profileAvatar} username={profileData.username} bio={profileData.bio} />
      </div>
    );
  }
}


export default App;
