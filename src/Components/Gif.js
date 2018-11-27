import React from 'react'

const Gif = image => {
    return (
      <div className="gif">
        <img src={image.gif.images.downsized.url} />
      </div>
    );
  };

export { Gif };