function SearchBar({value, onSearch}) {

    const handleInput = () => {
      let q = document.getElementById("form-search")
      onSearch(q.value)
    }

    return (
      <div className="container form-outline mt-2">
        <input type="search" id="form-search" className="form-control" placeholder="Search" defaultValue={value} onInput={handleInput} aria-label="Search" />
      </div>
    );
  }
  
  export default SearchBar;