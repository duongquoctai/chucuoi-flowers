import React from "react";

interface FlowerBoxProps {
  image: React.ReactNode;
  name: string;
  price: string;
}

const FlowerBox = (props: FlowerBoxProps) => {
  const { image, name, price } = props;
  return (
    <div>
      <div className="">{image}</div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default FlowerBox;
