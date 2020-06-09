import React  from 'react';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';
import PropTypes from 'prop-types';

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => (
  <div className="playlists_item" data-testid="playlist">
    <Link
      className="playlists__item__link"
      style={{backgroundImage: `url(${image.url})`}}
      title={name}
      to={`${path}/${categoryId}/${id}`}
    >
      <Ink />
    </Link>

    <p className="playlists__item__description">
      <strong>{name}</strong>

      {description}
    </p>
  </div>
)

PlaylistItem.propTypes = {
  categoryId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default PlaylistItem;
