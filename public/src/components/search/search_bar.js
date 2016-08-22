import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SearchResults from './search_results';

import * as actions from '../../actions';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="search-bar">
          <div className="search-bar-magnifying-glass">
            <div><span className="lnr lnr-magnifier"></span></div>
          </div>

          <input
            value={this.props.searchInput}
            onChange={(event) => {
              this.updateSearchInput(event.target.value);
            } } ></input>
        </div>
        <SearchResults />
      </div>
    );
  }

  updateSearchInput(input) {
    this.props.updateSearchInput(input);
    this.props.fetchArtistSearchResults(input);
  }
}

function mapStateToProps(state) {
  return {
    searchInput: state.search.searchInput,
    searchResults: state.search.searchResults
  };
}

export default connect(mapStateToProps, actions)(SearchBar);
