import React from 'react'
import PropTypes from 'prop-types'
import AlbumItem from '../AlbumItem/AlbumItem'
import './styles.scss'

AlbumList.propTypes = {
  albumList: PropTypes.array,
}

AlbumList.defaultProps = {
  albumList: [],
}

function AlbumList(props) {
  return (
    <ul className="album-list">
      {props.albumList.map((albumItem) => {
        return (
          <AlbumItem
            id={albumItem.id}
            thumbnailUrl={albumItem.thumbnailUrl}
            name={albumItem.name}
          />
        )
      })}
    </ul>
  )
}

export default AlbumList
