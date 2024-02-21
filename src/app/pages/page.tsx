"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "@/assets/img/hoa1.jpg";
import Banner2 from "@/assets/img/hoa2.jpg";
import Banner3 from "@/assets/img/hoa3.jpg";
import Banner4 from "@/assets/img/hoa4.jpg";
import Hoa1 from "@/assets/img/products/hoa1.png";
import Hoa2 from "@/assets/img/products/hoa2.png";
import Hoa3 from "@/assets/img/products/hoa3.png";
import Hoa4 from "@/assets/img/products/hoa4.png";
import Header from "../components/Header";
import "swiper/css";
import FlowerBox from "../components/FlowerBox";

export default function Home() {
  return (
    <main className="w-full bg-white text-black">
      <Header />
      <div id="banner-section">
        <div className="w-full">
          <Swiper autoplay spaceBetween={50} slidesPerView={1}>
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
      <div id="product-section" className="max-w-7xl m-auto">
        <div className="mt-32 mb-6 text-center">
          <h1 className="text-3xl font-normal leading-5 mb-6">
            Hoa dịp valentine
          </h1>
          <a href="">XEM TẤT CẢ</a>
        </div>
        <div className="grid grid-cols-5 text-center">
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa1}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa1}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa2}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa3}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa4}
              />
            }
          />
        </div>
        <div className="mt-32 mb-6 text-center">
          <h1 className="text-3xl font-normal leading-5 mb-6">Best seller</h1>
          <a href="">XEM TẤT CẢ</a>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full mx-auto"
              alt="Shop hoa tươi Chú Cuội"
              src={Hoa1}
            />
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-5xl">The Rosalind</h1>
              <div className="text-sm">500.000</div>
              <div className="styled-font mt-11">ĐÓNG GÓI</div>
              <div className="styled-font flex justify-center gap-4">
                <div>GIẤY GÓI</div>
                <div>CHẠU KIỂNG</div>
              </div>
            </div>
            <div className="styled-font">
              <div>
                Nothing says romance quite like a classic bouquet of a dozen red
                roses.
              </div>
              <div>
                Get it in a 5x12" glass vase, or wrapped in our signature
                bouquet style.
              </div>
              <div>
                Due to the limited availability of our stocks actual order may
                vary from the product photo.
              </div>
              <div>
                All our products will be properly sanitized before dispatching.
                We will continue to employ necessary procedures that will ensure
                the safety of all our clients and staff.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 mb-6 text-center">
          <h1 className="text-3xl font-normal leading-5 mb-6">Best seller</h1>
          <a href="">XEM TẤT CẢ</a>
        </div>
        <div className="grid grid-cols-5 text-center">
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa1}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa2}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa3}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa3}
              />
            }
          />
          <FlowerBox
            name="Special Spring Bouquet"
            price="300.000"
            image={
              <Image
                className="w-[200px] mx-auto"
                alt="Shop hoa tươi Chú Cuội"
                src={Hoa4}
              />
            }
          />
        </div>
      </div>
    </main>
  );
}
