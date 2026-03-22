"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselProps = {
  images: { src: string; alt?: string }[];
};

export default function ImageCarousel({ images }: CarouselProps) {
  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
      <div className="relative w-full h-64 md:h-96">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          loop
          className="w-full h-full"
        >
          {images.map((img, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <Image
            src={img.src}
            alt={img.alt || `Slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority
          />
        </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
