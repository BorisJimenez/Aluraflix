import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {VideoCardFront, VideoCardBack, VideoCardGestion} from "../VideoCard";

export const CarouselFront = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <Slider {...settings}>
        <div>
          <VideoCardFront videoId="AG2QssLpQzI"/>
        </div>
        <div>
          <VideoCardFront videoId="EB4vWLzfVcI"/>
        </div>
        <div>
          <VideoCardFront videoId="PztCEdIJITY"/>
        </div>
        <div>
          <VideoCardFront videoId="ts9qfCKamKg"/>
        </div>
        <div>
          <VideoCardFront videoId="MnBNPA45NW8"/>
        </div>
      </Slider>
    );
  };

  export const CarouselBack = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <Slider {...settings}>
        <div>
          <VideoCardBack videoId="Z024LSCMqFk"/>
        </div>
        <div>
          <VideoCardBack videoId="t-iqt1b2qqk"/>
        </div>
        <div>
          <VideoCardBack videoId="cLLKVd5CNLc"/>
        </div>
        <div>
          <VideoCardBack videoId="R9uaBxgCkyA"/>
        </div>
        <div>
          <VideoCardBack videoId="3aK3Omo2RrU"/>
        </div>
      </Slider>
    );
  };

  export const CarouselGestion = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <Slider {...settings}>
        <div>
          <VideoCardGestion videoId="ew1mwLviTWY"/>
        </div>
        <div>
          <VideoCardGestion videoId="mwNfWRsDDWE"/>
        </div>
        <div>
          <VideoCardGestion videoId="pOYyav4qx7o"/>
        </div>
        <div>
          <VideoCardGestion videoId="JTc07kNQtZ4"/>
        </div>
        <div>
          <VideoCardGestion videoId="TttMvhj4uu4"/>
        </div>
      </Slider>
    );
  };

