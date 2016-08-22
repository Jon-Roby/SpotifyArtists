import React, { Component } from 'react';
import { connect } from 'react-redux';

import BannerTop from './banner_top';

import * as actions from '../../../actions';

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <BannerTop />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps, actions)(Banner);
