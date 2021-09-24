import React from "react";
import { useDispatch } from "react-redux";
import SmallPic from "./SmallPic";
import "./Style.css";
function CardItems({ singleStudentInfo }) {
  console.log("object,", singleStudentInfo.cart);
  let RenderCard;
  if (singleStudentInfo.cart) {
    RenderCard = singleStudentInfo.cart.map((item) => {
      console.log("item", item.userId);
      return (
        <div className="cartBox row">
          <div className="col">
            <SmallPic userInfo={item.userId} />
          </div>
          <div className="col">
            CartId :{item._id} <span>idPrice :{item.idPrice}</span>
          </div>
          <div className="col">- value :{item.value}</div>
          <div></div>
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return <div>{RenderCard}</div>;
}

export default CardItems;
