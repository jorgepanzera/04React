import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { getProfile } from "./services/userServices";
import { getPosts } from "./services/postServices";

function App() {
  // State
  const [section, setSection] = useState("Normal")
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loginOk, setLoginOk] = useState(localStorage.getItem("myThreePicsToken"))
  const [profile, setProfile] = useState()

  
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


  // Funciones que se usan desde componente Login
  const onLoginComplete = (value) => {
    console.log(`onLoginComplete ${value}`)
    setLoginOk(value)
  }

  // UseEffect documentation
  // https://dmitripavlutin.com/react-useeffect-explanation/

  // Effect para cargar los posts a los 3 segundos y setLoading false
  useEffect(() => {

    // Cargar posts desde API
    if (loginOk) {
      getPosts().then((data) => {
        setPosts(data);
        setFilteredPosts(data)
        setLoading(false);
      });
    }
  }, [loginOk]) // Se ejecuta de vuelta si cambia el token


  // Effect para cargar el profile del usuario logueado
  useEffect(() => {

    // Cargar profile desde API
    if (loginOk) {
      getProfile().then((data) => { 
        setProfile(JSON.parse(`{"avatar" : "${data.avatar}", "username" : "${data.username}", "bio" : "${data.bio}"}`))
      });
    }
  }, [loginOk]) // Se ejecuta de vuelta si cambia el token
  

  // Render condicional

  if (loginOk) {
    if (section === "Normal") {
        return (
          <div className="App">
            <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} loginOK={loginOk} />
            <SearchBar value={search} onSearch={onSearch} />
            <PostList posts={filteredPosts} loading={loading} />
          </div>
        );
    }
  
    if (section === "Profile") {
      return (
        <div className="App">
          <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} loginOK={loginOk} />
          <Profile avatar={profile.avatar} username={profile.username} bio={profile.bio} />
        </div>
      );
    }
  } else {
    return(
      <div className="App">
        <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} loginOK={loginOk} />
        <Login onLoginComplete={onLoginComplete}  />
      </div>
      )
  }

  /* Resultado Deseado

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}> // en SharedContent va NavBar y Outlet
          <Route index element={
              <ProtectedRoute user={user}>
                <Home props de SearchBar y PostList />
              </ProtectedRoute> // nueva Page Home, tiene SearchBar y PostList, o probar si puede ir SearchBar y Postlist dentro de ProtectedRoute
          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='profile'
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Error />} /> // Crear Page Error
        </Route>
      </Routes>
    </BrowserRouter>

  */



}


export default App;

/*

Ejemplo
https://github.com/john-smilga/react-router-6-tutorial

Acciones para semana 4
- Mandar el conditional render del Loading y los post al PostList, que reciba en props el loading de App
- Para mostrar ProtectedRoutes

Protected Route
App.js
<Route  path='dashboard'
      element={
        <ProtectedRoute user={user}>
          <Dashboard user={user} />
        </ProtectedRoute>
  }
/>
ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;

-- Para el Login, que reciba el setUser del state de App
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/');
  };

-- Ejemplo completo de App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


*/