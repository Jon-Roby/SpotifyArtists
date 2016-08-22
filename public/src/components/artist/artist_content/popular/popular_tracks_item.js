import React, { Component } from 'react';

const PopularTracksItem = (props) => {

  return (
    <div className="popular-tracks-item">
      <div><img src={props.imageUrl} /></div>
      <div className="popular-tracks-item-text">
        <div className="popular-tracks-item-number">{props.number}</div>
        <div className="popular-tracks-item-name">{props.name}</div>
      </div>
    </div>
  );

}

export default PopularTracksItem;
