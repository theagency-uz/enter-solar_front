import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { register } from "swiper/element";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import aboutCompanyData from "@/data/aboutCompanyData";

function Slider({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const swiperRef = useRef(null);
  const swiperThumbRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [FreeMode, Navigation, Thumbs],
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: { swiper: swiperThumbRef.current },
      loop: true,

      injectStyles: [],
    };

    const paramsThumb = {
      direction: mdUp ? "vertical" : "horizontal",
      spaceBetween: 10,
      slidesPerView: 5,
      watchSlidesProgress: true,
      modules: [FreeMode, Navigation, Thumbs],
    };

    Object.assign(swiperRef.current, params);
    Object.assign(swiperThumbRef.current, paramsThumb);

    swiperRef.current.initialize();
    swiperThumbRef.current.initialize();
  }, [mdUp]);

  return (
    <Box className={classes.slider}>
      <swiper-container
        init="false"
        ref={swiperThumbRef}
        class={classes["productBottomSwiper"]}
      >
        {aboutCompanyData.map((image, index) => (
          <swiper-slide
            class={classes["productBottomSwiper_item"]}
            key={image.id}
          >
            <Image
              src={image.image}
              width={100}
              height={100}
              alt={"slider-image"}
              className={classes.sliderImg}
            />
          </swiper-slide>
        ))}
      </swiper-container>

      <swiper-container
        init="false"
        ref={swiperRef}
        class={classes["productMainSwiper"]}
      >
        {aboutCompanyData.map((image, index) => (
          <swiper-slide
            class={classes["productMainSwiper_item"]}
            key={image.id}
          >
            <Image
              src={image.image}
              width={470}
              height={410}
              alt={"slider-image"}
              className={classes.sliderImg}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </Box>
  );
}

export default Slider;
