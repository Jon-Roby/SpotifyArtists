import React, { Component } from 'react';
import SearchResultsItem from './search_results_item';
import { connect } from 'react-redux';

class SearchResults extends Component {

  renderSearchResultsItems() {
    var counter = 0;
    return this.props.searchResults.artists.items.map(searchResult => {
      counter++;
      if (counter <= 6) {
        return (
          <div>
            <SearchResultsItem
              key={searchResult.id}
              details={searchResult}
            />
          </div>
        )
      }

    });
  }

  render() {
    if (!this.props.searchResults.artists) {
      return <div id="empty-search-results"></div>
    }
    return (
      <div className="search-results">
        <div className="search-results-heading">RESULTS</div>
        <ul>
          {this.renderSearchResultsItems()}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults
  };
}

export default connect(mapStateToProps)(SearchResults);
