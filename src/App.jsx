import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Profile from './components/Profile';


function App() {

  // State
  const [section, setSection] = useState('Normal')

  // Props para hijos
  const profileAvatar = require('./assets/images/profile.PNG')
  const username = "jpanzera"
  const bio = "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi"

  const onLogoClick = () => {
    setSection('Normal')
  }

  const onProfileClick = () => {
    setSection('Profile')
  }


  // Render condicional a lo que quiero mostrar

  if (section === 'Normal') {
    return (
      <div className="App">
        <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
        <SearchBar />
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
