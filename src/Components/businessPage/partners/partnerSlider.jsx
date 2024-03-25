"use client";
import { Box } from "@mui/material";
import classes from "./styles.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import { Pagination } from "swiper/modules";

const clientLogo = [
  {
    images: [
      "/images/partners/eriel.svg",
      "/images/partners/samarqand.svg",
      "/images/partners/bank.svg",
    ],
  },
    {
    images: [
      "/images/partners/legend.svg",
      "/images/partners/humo.svg",
      "/images/partners/sofar.svg",
    ],
  },
  {
    images: [
      "/images/partners/sineng.svg",
      "/images/partners/saxovat.svg",
      "/images/partners/aiko.svg",
    ],
  },
  {
    images: [
      "/images/partners/enter.svg",
      "/images/partners/lion.svg",
      "/images/partners/tepelen.svg",
    ],
  },
  {
    images: [
      "/images/partners/enera.svg",
      "/images/partners/jizzax.svg",
      "/images/partners/jinko.svg",
    ],
  },
];

function PartnerSlider({ ...props }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();


   /** @type {import('swiper/types').SwiperOptions} */
    const params = {
      modules: [Pagination],
      slidesPerView: 2,
      spaceBetween: 5,
      pagination: { clickable: true },
      loop: true,
      injectStyles: [
        `
        .swiper-pagination-bullet {
          background: #7D7D7D;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #000;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 1;
        }
        `,
      ],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
      {clientLogo.map((client, index) => {
        return (
          <swiper-slide class={classes.clientSliderItem} key={index}>
            {client.images.map((image, index) => {
              return (
                <Box className={classes.clientBox} key={index}>
                  <Image
                    src={image}
                    className={classes.clientImg}
                    width={338}
                    height={190}
                    alt={"clients"}
                  />
                </Box>
              );
            })}
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}

export default PartnerSlider;
