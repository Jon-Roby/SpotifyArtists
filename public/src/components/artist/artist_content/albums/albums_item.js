import React, { Component } from 'react';

const AlbumsItem = (props) => {

  return (
    <div className="albums-item">
      <div><img className="albums-item-image" src={props.imageUrl} /></div>
      <div className="albums-item-text">
        <div>
          {props.name}
        </div>
      </div>
    </div>
  );

}

export default AlbumsItem;
