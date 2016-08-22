import React from 'react';

const SearchResultsItemImage = (props) => {
  if (props.image) {
    return (
      <img className="search-results-item-image" src={props.image.url} />
    )
  }
  return (
      <i class="fa fa-user" aria-hidden="true"></i>
  )

};

export default SearchResultsItemImage;
