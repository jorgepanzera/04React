import './App.css';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <PostList />
    </div>
  );
}

export default App;
