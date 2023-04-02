import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import { getProfile } from "./services/profileServices";
import { getPosts } from "./services/postServices";

function App() {
  // State
  const [section, setSection] = useState("Normal");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener datos del profile
  let profileData = getProfile()
  const profileAvatar = require(`./assets/images/${profileData.avatar}`);

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
    setSearch(searchString);
  };

  // Effect para cargar los posts a los 3 segundos y setLoading false
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  // Render condicional

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
          <PostList posts={posts} />
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
/*
import React, { useState } from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search posts by message"
        value={props.searchTerm}
        onChange={props.handleSearch}
      />
    </div>
  );
}

function PostList(props) {
  return (
    <div>
      {props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.user}</h3>
          <p>{post.message}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [allPosts, setAllPosts] = useState([
    { id: 1, user: "Alice", likes: 5, message: "I love React!" },
    { id: 2, user: "Bob", likes: 3, message: "React is awesome!" },
    { id: 3, user: "Charlie", likes: 7, message: "React is the best!" },
    { id: 4, user: "David", likes: 2, message: "I hate React!" },
  ]);
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filtered = allPosts.filter(post => post.message.includes(event.target.value));
    setFilteredPosts(filtered);
  }

  return (
    <div>
      <h1>React Post Search</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
In this updated version of the example, we define a state variable allPosts to store the complete list of posts, and a state variable filteredPosts to store the currently filtered list of posts. The handleSearch function now updates both searchTerm and filteredPosts. The PostList component simply receives the filtered posts as a prop and displays them.

This implementation has the advantage of not filtering the array on every re-render of the PostList component, which could be a performance issue if the array is large.
*/