import React from "react";

import Image from "next/image";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import Menu from "./Menu";
const Header = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-7xl m-auto flex justify-between pt-2">
          <div>Deliveries, Pickups, & Substitutions</div>
          <div className="flex">
            <Image alt="Chú Cuội Flowers facebook" src={facebookIcon} />
            <Image alt="Chú Cuội Flowers instagram" src={instagramIcon} />
          </div>
        </div>
        <div className="mt-2">
          <hr />
        </div>
        <div className="my-4 max-w-7xl m-auto flex items-center justify-between">
          <div className="">test</div>
          <div className="text-5xl font-serif font-thin">
            <div className="">CHU CUOI FLOWER</div>
          </div>
          <div>tim kiem</div>
        </div>
        <div className="flex justify-center my-4">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
