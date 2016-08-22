import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AlbumsItem from './albums_item';

class Albums extends Component {
  renderAlbums() {
    let albums = this.props.artist.artist.data[2].items;

    var allAlbums = {};
    return albums.map(album => {
      if (allAlbums[album.name] !== true) {
        allAlbums[album.name] = true;
        return (
          <div className="albums" key={album.id}>
            <AlbumsItem
              key={album.id}
              imageUrl={album.images[0].url}
              name={album.name}
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

    return (
      <div id="albums">
        {this.renderAlbums()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps)(Albums);
