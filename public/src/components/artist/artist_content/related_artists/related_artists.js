import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import RelatedArtistsItem from './related_artists_item';

class RelatedArtists extends Component {
  renderTracks() {
    let relatedArtists = this.props.artist.artist.data[3].artists;

    var counter = 0;
    return relatedArtists.map(artist => {
      counter++;
      if (counter <= 3) {
        return (
          <div className="related-artists" key={artist.id}>
            <RelatedArtistsItem
              key={artist.id}
              imageUrl={artist.images[0].url}
              name={artist.name}
              id={artist.id}
            />
          </div>
        )
      }
    })
  }

  render() {
    if (!this.props.artist.artist) {
      return <div>Loading</div>
    }
    let popularTracks = this.props.artist.artist.data[1].tracks;

    return (
      <div id="popular-tracks">
        {this.renderTracks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps)(RelatedArtists);
