import React from 'react'
import AlbumList from './components/AlbumList/AlbumList'

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/8/4/3/8843de546e3a584cbbef4ffb5502a194.jpg',
    },
    {
      id: 2,
      name: 'Consequatur quod at minima a unde accusamus',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/9/8/9/8989f87a71820b9f4d140ccccf6a0726.jpg',
    },
    {
      id: 3,
      name: 'Consectetur adipisicing elit Ratione quasi',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/f/2/74f2f999c840e818ca7041558addf6b3.jpg',
    },
  ]

  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  )
}

export default AlbumFeature
