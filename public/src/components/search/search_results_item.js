import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import SearchResultsItemImage from './search_results_item_image';

class SearchResultsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let image = this.props.details.images[0];
    let name = this.props.details.name;
    let href = this.props.details.href;
    let id = `/artists/${this.props.details.id}`;

    return (
      <li className="search-results-item">
        <Link onClick={() => this.props.fetchArtistSearchResults('')} to={id}>
          <div className="search-results-item-container">
            <div className="search-results-item-container-image">
              <SearchResultsItemImage image={image} />
            </div>

            <div className="search-results-item-container-artist">
              <div className="">{name}</div>
            </div>
          </div>
        </Link>
      </li>
    )
  }

};

export default connect(null, actions)(SearchResultsItem);
