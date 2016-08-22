import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class BannerTop extends Component {
  render() {
    let artistInfo = this.props.artist.artist.data[0];
    let artistName = artistInfo.name;
    let artistFollowers = artistInfo.followers.total;
    let bannerTopImage = artistInfo.images[0].url;
    let artistExternalSpotifyPage = artistInfo.external_urls.spotify;
    
    return (
      <div id="banner-top">
        <div id="banner-top-media-query">
          <img id="banner-top-image" src={bannerTopImage} />
          <div id="banner-top-artist-followers">
            <div>{artistFollowers} FOLLOWERS</div>
          </div>
        </div>
        <div id="banner-top-details">
          <div id="banner-top-artist-title">ARTIST</div>
          <div id="banner-top-artist-name">{artistName}</div>
          <div>
            <button id="banner-top-artist-button-link">
              <a href={artistExternalSpotifyPage}>SPOTIFY PAGE</a>
            </button>
          </div>
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

export default connect(mapStateToProps, actions)(BannerTop);
