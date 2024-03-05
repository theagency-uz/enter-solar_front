"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import { Scrollbar, Navigation, Thumbs, FreeMode } from "swiper/modules";
import { register } from "swiper/element";
import CustomNavigation from "./CustomNavigation";
import productData from "@/data/productData";

function ProductImages({ productImage, ...props }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const swiperThumbRef = useRef(null);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [images, setImages] = useState(productImage);

  useEffect(() => {
    setImages(productImage);
  }, [productImage]);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation, Thumbs],
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: { swiper: swiperThumbRef.current },
      loop: true,
      scrollbar: { draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: "disabled",
      },

      injectStyles: [],
    };

    const paramsThumb = {
      spaceBetween: 20,
      slidesPerView: 5,
      // freeMode={true}
      watchSlidesProgress: true,
      modules: [FreeMode, Navigation, Thumbs],
    };

    Object.assign(swiperRef.current, params);
    Object.assign(swiperThumbRef.current, paramsThumb);

    swiperRef.current.initialize();
    swiperThumbRef.current.initialize();
  }, [images]);

  return (
    <Box className={classes.productImages}>
      <swiper-container
        init="false"
        ref={swiperRef}
        class={classes.productMainSwiper}
      >
        <swiper-slide class={classes.productMainSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={510}
            height={401}
            alt={"Product image"}
            className={classes.productMainImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productMainSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={510}
            height={401}
            alt={"Product image"}
            className={classes.productMainImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productMainSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={510}
            height={401}
            alt={"Product image"}
            className={classes.productMainImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productMainSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={510}
            height={401}
            alt={"Product image"}
            className={classes.productMainImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productMainSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={510}
            height={401}
            alt={"Product image"}
            className={classes.productMainImg}
          />
        </swiper-slide>

        {/* {productData.map((image, index) => {
          return (
          );
        })} */}
      </swiper-container>
      <swiper-container
        init="false"
        ref={swiperThumbRef}
        class={classes["productBottomSwiper"]}
      >
        <swiper-slide class={classes.productBottomSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={100}
            height={100}
            alt={"Product image"}
            className={classes.productBottomImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productBottomSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={100}
            height={100}
            alt={"Product image"}
            className={classes.productBottomImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productBottomSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={100}
            height={100}
            alt={"Product image"}
            className={classes.productBottomImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productBottomSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={100}
            height={100}
            alt={"Product image"}
            className={classes.productBottomImg}
          />
        </swiper-slide>
        <swiper-slide class={classes.productBottomSwiperItem}>
          <Image
            src={"/images/product/product-image.png"}
            width={100}
            height={100}
            alt={"Product image"}
            className={classes.productBottomImg}
          />
        </swiper-slide>
        {/* {productData.map((image, index) => {
          return (
          );
        })} */}
      </swiper-container>
      <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
    </Box>
  );
}

export default ProductImages;
