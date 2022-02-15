import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return(
        <div className="Search" style={{padding:"16px"}}>
          <input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder="Search character" style={{padding:"8px", borderRadius:"6px", border:"none"}}></input>
        </div>
    )
}

export default Search;