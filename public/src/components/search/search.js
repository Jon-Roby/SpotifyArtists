import React, { Component } from 'react';
import SearchBar from './search_bar';

class Search extends Component {
  render() {
    return (
      <div id="search">
        <div>
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default Search;
