import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import PopularTracksItem from './popular_tracks_item';

class PopularTracks extends Component {
  renderTracks() {
    let popularTracks = this.props.artist.artist.data[1].tracks;
    var counter = 0;
    return popularTracks.map(track => {
      counter++;
      if (counter <= 5) {
        return (
          <div className="popular-tracks" key={track.id}>
            <PopularTracksItem
              key={track.id}
              imageUrl={track.album.images[0].url}
              name={track.name}
              number={counter}
            />
          </div>
        )
      }
    });
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

export default connect(mapStateToProps)(PopularTracks);
