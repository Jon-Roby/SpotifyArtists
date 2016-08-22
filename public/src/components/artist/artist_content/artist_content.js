import React, { Component } from 'react';

import Popular from './popular/popular_tracks'
import RelatedArtists from './related_artists/related_artists'
import Albums from './albums/albums'

class ArtistContent extends Component {
  render() {
    return (
      <div id="artist-content">
        <div id="artist-content-top">
          <div id="artist-content-top-left">
            <div className="artist-content-heading">POPULAR</div>
            <Popular />
          </div>
          <div id="artist-content-top-right">
            <div className="artist-content-heading">RELATED ARTISTS</div>
            <RelatedArtists />
          </div>
        </div>
        <div>
          <div className="artist-content-heading">ALBUMS</div>
          <Albums />
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

export default ArtistContent;
