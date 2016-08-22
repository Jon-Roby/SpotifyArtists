import React, { Component } from 'react';
import { Link } from 'react-router';

const PopularTracksItem = (props) => {
  let relatedArtistUrl = `/artists/${props.id}`
  return (
    <Link to={relatedArtistUrl}>
      <div className="related-artists-item">
        <div><img src={props.imageUrl} /></div>
        <div className="related-artists-item-text">
          <div className="related-artists-item-name">{props.name}</div>
        </div>
      </div>
    </Link>
  );

}

export default PopularTracksItem;
