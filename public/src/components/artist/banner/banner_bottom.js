import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class BannerBottom extends Component {
  render() {
    let artistInfo = this.props.artist.artist[0].data;
    let artistFollowers = artistInfo.followers.total;
    let artistPopularity = artistInfo.popularity;

    return (
      <div id="banner-bottom">
        <div>{artistFollowers} FOLLOWERS</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps, actions)(BannerBottom);
