import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { getProfile } from "./services/userServices";
import { getPosts } from "./services/postServices";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/Error"
import { DebugLayout } from "./services/routeServices";
import SharedNavBar from "./pages/SharedNavBar";


function App() {
  // State
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loginOk, setLoginOk] = useState(localStorage.getItem("myThreePicsToken"))
  const [profile, setProfile] = useState({"avatar" : "", "username" : "", "bio" : ""})
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("myThreePicscurrentUser"))

  
  // Funciones que se usan desde componente SearchBar
  const onSearch = (searchString) => {
    setSearch(searchString)
    const filtered = posts.filter(post => post.text.toUpperCase().includes(searchString.toUpperCase()))
    setFilteredPosts(filtered)
  };


  // Funciones que se usan desde componente Login
  const onLoginComplete = (value) => {
    console.log(`onLoginComplete ${value}`)
    setLoginOk(value)
  }

  // Funciones que se usan borrar estado
  const onExitApp = () => {
    localStorage.removeItem("myThreePicsToken")
    localStorage.removeItem("myThreePicscurrentUser")
    setCurrentUser(null)
    localStorage.removeItem("myThreePicscurrentUser")
    setLoginOk(false)
  }


  // UseEffect documentation
  // https://dmitripavlutin.com/react-useeffect-explanation/

  // Effect para cargar los posts a los 3 segundos y setLoading false
  useEffect(() => {

    // Cargar posts desde API
    if (loginOk) {
      getPosts()
        .then((data) => {
          setPosts(data);
          setFilteredPosts(data)
          setLoading(false);
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              onExitApp()
            }
          }
        })        
    }
  }, [loginOk]) // Se ejecuta de vuelta si cambia el token


  // Effect para cargar el profile del usuario logueado
  useEffect(() => {

    // Cargar profile desde API
    if (loginOk) {
      getProfile()
        .then((data) => { 
          setProfile(JSON.parse(`{"avatar" : "${data.avatar}", "username" : "${data.username}", "bio" : "${data.bio}"}`))
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              onExitApp()
            }
          }
        })
    }
  }, [loginOk]) // Se ejecuta de vuelta si cambia el token
  
  // Effect para guardar el usuario en localStorage cuando cambia
  useEffect(() => {
    console.log(`Effect currentUser ${currentUser}`)
    if (!(currentUser===null)) {
      localStorage.setItem('myThreePicscurrentUser', currentUser);
    }
  }, [currentUser]);

  // React Router
  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<DebugLayout />}>
            <Route element={<SharedNavBar loginOK={loginOk} />}>
              { currentUser ? (
                <>
                  <Route path="/" element={ <>
                                            <SearchBar value={search} onSearch={onSearch} />
                                            <PostList posts={filteredPosts} loading={loading} />
                                            </>
                                          } />
                  <Route path="/profile" element={<Profile avatar={profile.avatar} username={profile.username} bio={profile.bio} onExitApp={onExitApp} />} />
                  <Route path="*" element={<Error />} />
                </>
                ) : (
                  <>
                  <Route path="/login" element={<Login onLoginComplete={onLoginComplete} setCurrentUser={setCurrentUser} />} />
                  <Route path="*" element={<Navigate to="/login" />} /> 
                  </>
                )
              }
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );

}

export default App;



/*

Ejemplo
https://github.com/john-smilga/react-router-6-tutorial


*/

