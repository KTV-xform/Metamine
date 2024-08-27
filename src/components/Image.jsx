import React, {memo} from 'react';
import {url} from 'shares/constants';
import ImageNext from 'next/image';

const loaderImage = ({src, width, quality}) => {
  return `${url}${src}?w=${width}&q=${quality || 75}`
}

const Image = (props) => {
  return (
    <ImageNext
      {...props}
      loader={loaderImage}
    />
  )
}

export default memo(Image);
