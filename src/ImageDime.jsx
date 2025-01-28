import React, { useEffect } from 'react';
import images  from './Component/Carousel/img/data';

function getImageDimensions(url) {
  const img = new Image();
  img.onload = function () {
    console.log(`Width: ${img.width}px, Height: ${img.height}px`);
  };
  img.src = url;
}

function ImageDime() {
  useEffect(() => {
    images.forEach((image) => {
      getImageDimensions(image);
    });
  }, []);

  return (
    <div>
      <p>Check the console for image dimensions.</p>
    </div>
  );
}

export default ImageDime;