import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Profile from './components/Profile';


function App() {

  const [section, setSection] = useState('Normal')

  const onLogoClick = () => {
    console.log("onlogoclick")
    setSection('Normal')
  }

  const onProfileClick = () => {
    console.log("onprofileclick")    
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
        <Profile />
      </div>
    )
  }


}

export default App;
