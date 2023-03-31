import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Profile from './components/Profile';


function App() {

  // State
  const [section, setSection] = useState('Normal')
  const [search, setSearch] = useState('')
  const [firstLoad, setfirstLoad] = useState(true)

  console.log(`App ${search}`)

  // Props para hijos
  const profileAvatar = require('./assets/images/profile.PNG')
  const username = "jpanzera"
  const bio = "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi"

  // Funciones que se usan desde componente NavBar
  const onLogoClick = () => {
    setSection('Normal')
  }

  const onProfileClick = () => {
    setSection('Profile')
  }

  // Funciones que se usan desde componente SearchBar
  const onSearch = (searchString) => {
    setSearch(searchString)
  }

  
  // Effect para cargar los posts a los 3 segundos y mostrar los post
  // usar los 3 segundos solamente con firstLoad = true
  /*
    if firstload
       espero 3 segundos
       setPosts
       firstload = false
    else
      setPost - viene de searchbar 
  */


  // Render condicional 

  if (section === 'Normal') {
    return (
      <div className="App">
        <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
        <SearchBar value={search} onSearch={onSearch} />
        <PostList />
      </div>
    )
  }

  if (section === 'Profile') {
    return (
      <div className="App">
        <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
        <Profile avatar={profileAvatar} username={username} bio={bio} />
      </div>
    )
  }


}

export default App;
