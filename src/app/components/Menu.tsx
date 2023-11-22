import React from "react";
interface MenuProps {
  title: string;
}
const menus: MenuProps[] = [
  {
    title: "Trang chủ",
  },
  {
    title: "Cửa hàng",
  },
  {
    title: "Dịch vụ",
  },
  {
    title: "Vườn hoa của tôi",
  },
  {
    title: "Liên hệ chúng tôi",
  },
];
const Menu = () => {
  return (
    <div className="flex space-x-8">
      {menus.map((menu: MenuProps) => {
        return (
          <div
            key={`${menu.title}`}
            className="font-extralight text-lg uppercase"
          >
            {menu.title}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
