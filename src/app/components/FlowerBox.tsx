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
      <div>{image}</div>
      <div className="my-4">
        <div className="text-xl font-semibold">{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default FlowerBox;
