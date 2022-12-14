import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

AlbumItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function AlbumItem(props) {
  return (
    <li className="album-item" key={props.id}>
      <div className="album-thumbnail">
        <img className="album-thumbnail-image" src={props.thumbnailUrl} alt={props.name} />
      </div>
      <a className="album-title" href="#">
        <p className="album-title-name">{props.name}</p>
      </a>
    </li>
  );
}

export default AlbumItem;
