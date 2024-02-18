"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "@/assets/img/hoa1.jpg";
import Banner2 from "@/assets/img/hoa2.jpg";
import Banner3 from "@/assets/img/hoa3.jpg";
import Banner4 from "@/assets/img/hoa4.jpg";
import Header from "../components/Header";
import "swiper/css";
import FlowerBox from "../components/FlowerBox";

export default function Home() {
  return (
    <main className="w-full bg-white text-black">
      <Header />
      <div id="banner-section">
        <div className="w-full">
          <Swiper
            autoplay
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  className="w-full -mt-44"
                  alt="Shop hoa tươi Chú Cuội"
                  src={Banner1}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  className="w-full -mt-44"
                  alt="Shop hoa tươi Chú Cuội"
                  src={Banner2}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  className="w-full -mt-44"
                  alt="Shop hoa tươi Chú Cuội"
                  src={Banner3}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  className="w-full -mt-44"
                  alt="Shop hoa tươi Chú Cuội"
                  src={Banner4}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="product-section" className="w-full">
        <div className="mt-32 mb-6 text-center">
          <h2 className="text-3xl font-normal leading-5 mb-6">
            Hoa dịp valentine
          </h2>
          <a href="">XEM TẤT CẢ</a>
        </div>
        <div className="grid grid-rows-4">
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={<div>image</div>}
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={<div>image</div>}
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={<div>image</div>}
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={<div>image</div>}
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={<div>image</div>}
          />
        </div>
      </div>
    </main>
  );
}
