import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from './banner';

import * as actions from '../../../actions';

class BannerContainer extends Component {
  render() {
    if (!this.props.artist.artist) {
      return <div>Loading</div>
    }

    let imageUrl = this.props.artist.artist.data[0].images[0].url;

    // Other styling is in CSS file
    let bannerImage = {
      backgroundImage: 'url(' + imageUrl + ')'
    }

    return (
      <div>
        <div id="banner-container" style={bannerImage}>
          <Banner />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps, actions)(BannerContainer);
