import React from "react";
import ModalPrice from "../ModalPrice/ModelPrice";

function RenderPriceBox() {
  const allPriceInfo = [
    "620.000VND/30phút",
    "100.000 VND/1buổi",
    "450.000VND/5buổi",
    "800.000VND/10buổi",
  ];
  let RenderCard;
  if (allPriceInfo) {
    RenderCard = allPriceInfo.map((item) => {
      return (
        <div className="">
          <ModalPrice priceInfo={item} />
        </div>
      );
    });
  } else {
    RenderCard = <div>Loading</div>;
  }

  return <div className="">{RenderCard}</div>;
}

export default RenderPriceBox;
