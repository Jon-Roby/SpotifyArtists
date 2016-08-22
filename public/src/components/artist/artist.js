import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import BannerContainer from './banner/banner_container';
import ArtistContent from './artist_content/artist_content';

import * as actions from '../../actions';

class Artist extends Component {
  componentDidMount() {
    let id = this.props.location.pathname.split('/')[2];
    this.props.fetchArtist(id);
  }

  componentDidUpdate(nextProps) {
    let artistId = this.props.artist.artist.data[0].id;
    let id = this.props.location.pathname.split('/')[2];
    if (id !== artistId) {
      this.props.fetchArtist(id);
    }
  }

  render() {
    return (
      <div>
        <BannerContainer />
        <ArtistContent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps, actions)(Artist);
