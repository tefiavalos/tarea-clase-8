import React from 'react';
import Images from './Images';


function Imagenes({ feedsource }) {
  return (
    feedsource.map(feed =>
      
        <Images
          key={feed.id}
          img={feed.source}
          likes={feed.likes}
          coments={feed.coments}
        />
      
    )
  )
}



export default Imagenes