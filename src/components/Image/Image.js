// components/ExtendedImage.js
import React from 'react';
import NextImage from 'next/legacy/image';

const Image = ({
  src,
  alt,
  width,
  height,
  layout,
  placeholder = 'blur',
  blurDataURL,
  customClass = '',
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...rest
}) => {
  const defaultAltText = 'Image description not available';

  // Use the provided alt text or fallback to the default
  const altText = alt || defaultAltText;

  // TODO: need to look at docs and use style prop instead of objectFit and objectPosition
  return (
    <NextImage
      src={src}
      alt={altText}
      width={width}
      height={height}
      layout={layout}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={customClass}
      objectFit={objectFit}
      objectPosition={objectPosition}
      {...rest}
    />
  );
};

export default Image;
