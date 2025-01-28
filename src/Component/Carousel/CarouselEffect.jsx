import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import  images from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
function CarouselEffect() {


  // useEffect(() => {
  //   console.log("Carousel properties:");
  //   console.log({
  //     autoPlay: true,
  //     infiniteLoop: true,
  //     showIndicators: false,
  //     showThumbs: false,
  //   });
  // }, []);

  return (
    <div className={classes.hero__img}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      </div>
  );
}

export default CarouselEffect;
